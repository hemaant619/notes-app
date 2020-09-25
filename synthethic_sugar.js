index below

1). 234 first version of argv codes
2). 235 first version of argv codes
3). 23a





// +++++++++++++++ 234 first versionof argv code starts ++++++++++++++++++++++++
234





const yargs = require('yargs')
const { argv, version } = require('yargs')



//  create add command 
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder:{
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function () {
    console.log('adding a new note')
  }
})


//  create remove command 

yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  handler: function () {
    console.log('removing a new note')
  }
})



//  create add command 

yargs.command({
  command: 'read',
  describe: 'read a new note',
  handler: function () {
    console.log('reading a new note')
  }
})




//  create add command 

yargs.command({
  command: 'list',
  describe: 'list a new note',
  handler: function () {
    console.log('listing a new note')
  }
})

// add remove read list



console.log(yargs.argv)
// +++++++++++++++ 234 first versionof argv code ends ++++++++++++++++++++++++




// +++++++++++++++ 234 first versionof argv code starts ++++++++++++++++++++++++

**235
// const chalk = require('chalk')

const yargs = require('yargs')
const { argv } = require('yargs')



//  create add command 
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder:{
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function () {
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
  }
})


//  create remove command 

yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  handler: function () {
    console.log('removing a new note')
  }
})



//  create read command 

yargs.command({
  command: 'read',
  describe: 'read a new note',
  handler: function () {
    console.log('reading a new note')
  }
})




//  create list command 

yargs.command({
  command: 'list',
  describe: 'list a new note',
  handler: function () {
    console.log('listing a new note')
  }
})

// add remove read list



yargs.parse()

note:-
node app.js add --title="hemant is adding something" --body="needed"

from above cmd if any one miss from title or body both thing will become string needed ok

note:-
 o/p = Title: hemant is adding something
        Body: needed
// +++++++++++++++ 234 first versionof argv code ends ++++++++++++++++++++++++





// +++++++++++++++ 23a starts ++++++++++++++++++++++++
**23a


const book = {
  title: 'Ego is the enemy',
  author: 'ryan holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

 o/p: =

"title": "Ego is the enemy",
"author": "ryan holiday" 



// 1st version
const book = {
  title: 'Ego is the enemy',
  author: 'ryan holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON.title) 



o/p: = Ego is the enemy


note:= 
 this will not show as a o/p , so we have to use JSON.parse() to show o/p that way. 

JSON.parse() is used to convert string into object so after that we can acces .title 


// 2nd version
const book = {
  title: 'Ego is the enemy',
  author: 'ryan holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData =  JSON.parse(bookJSON)
console.log(parsedData.title)


o/p:= {"title":"Ego is the enemy","author":"ryan holiday"}
Ego is the enemy



// const fs = require('fs')

const book = {
  title: 'Ego is the enemy',
  author: 'ryan holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)
 

note:= it will write the file and create the json object 

// +++++++++++++++ 23a code ends ++++++++++++++++++++++++


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
code for how to write new file usinf filewrite so below is the code, 1-json.json this file automatically created 

const fs = require('fs')

const book = {
  title: 'hemant2',
  author: 'dwdw'
}

const bookJSON = JSON.stringify(book) 
fs.writeFileSync('1-json.json', bookJSON)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

this is the code that how to access the daata 


const fs = require('fs')

// const book = {
//   title: 'hemant2',
//   author: 'dwdw'
// }

// const bookJSON = JSON.stringify(book) 
// fs.writeFileSync('1-json.json', bookJSON)



const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON =  dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++









// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

how to change and acces the data


const fs = require('fs')

// const book = {
//   title: 'hemant2',
//   author: 'dwdw'
// }

// const bookJSON = JSON.stringify(book) 
// fs.writeFileSync('1-json.json', bookJSON)



const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON =  dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name='hemant'
user.age=54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++







// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Difference between Stringify and parse?


Using parse converts a string into an object. Using stringify converts and object into a string.



// code below

const data = '["A", "B"]' // [] indiactes that it is string
const parsedData = JSON.parse(data) // convert string into JSON object/data
 
 
// Do something with the JSON object/data
console.log(parsedData[0])
 
 
// Convert back to string
const stringifiedData = JSON.stringify(parsedData)
console.log(stringifiedData)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






