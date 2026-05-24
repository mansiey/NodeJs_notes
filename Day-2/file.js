const fs = require('fs');

fs.writeFileSync("./greet.txt", 'Helloo!');

//doing this just overwrites the file
// fs.writeFile('./greet.txt', "Hey Mansi", (err) => { });


// To keep on adding the data
fs.appendFileSync('./greet.txt', '\nThis is me, Universe!');



// syncronous task => here we can store ans in result variable, this is not possible for asyncronus task shown below
const result = fs.readFileSync('./greet.txt', 'utf-8');
console.log(result);

//async   => we have to give callback in async method
fs.readFile('./greet.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})


//copy and deleting files
fs.cpSync('./greet.txt', './fakeGreet.txt');

fs.unlinkSync('./fakeGreet.txt');