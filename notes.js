const fs = require('fs')
const chalk = require('chalk')

const getNotes = ()  => {
  return 'Your notes...'
}


// add note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title  === title)

    if (!duplicateNote) {
      notes.push({
        title: title,
        body: body
      })
      saveNotes(notes)
      console.log('new note added')
    } else {
      console.log('note title taken')
    }
 
}


// remove note
const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title ) 
  
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note Removed!'))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('No note found'))
  }
    
}


// list note

const ListNotes = (title) => {
  const notes = loadNotes()
  console.log(chalk.inverse('your notes'))


  notes.forEach((note) => {
    console.log(note.title)   
  });
}

const readNote = (title) => {

  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note not found!'))
  }
}




const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
try {
  const dataBuffer = fs.readFileSync('notes.json')
  const dataJSON = dataBuffer.toString()
  return JSON.parse(dataJSON)

}  catch (e) {
  return []
}
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  ListNotes: ListNotes,
  readNote: readNote
}