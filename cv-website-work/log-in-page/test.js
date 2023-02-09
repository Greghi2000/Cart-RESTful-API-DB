// import * as fs from "fs"
const fs = require('fs')

const content = "hello"

get variable user
get variable pass

fs.writeFile('/Users/gregoriofumagalli/Downloads/gitstuff/course/cv-website-work/log-in-page/files.csv', content, err => {
  if (err) {
    console.log(err);
  }
})