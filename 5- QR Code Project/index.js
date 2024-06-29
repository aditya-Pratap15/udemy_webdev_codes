import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
.prompt([
  {
    name: "URL",
    type: "input",
    message: "Type in your URl:",
  },
])
.then((answer) => {
  const url = answer.URL;
  var qr_svg = qr.image(url);
  
  qr_svg.pipe(fs.createWriteStream("qr_img.png"));
  
  console.log("QR Code Generated");
  fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
})
.catch((error) => {
  if (error.isTtyError) {
     // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});
