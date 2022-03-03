let express = require('express');


let app = express();

app.get('', function(req,res){
   res.send('Hello');
})

app.get('/books', function(req,res){
 res.send([{
     name: "Don Quixote",
     sellingRank: '#1',
     Author: "Miguel de Cervantes",
     unitsSold: "500 Million copies"

 },
 {
    name: "A Tale of Two Cities",
    sellingRank: '#2',
    Author: "Charles Dickens",
    unitsSold: "200 Million copies"

},
{
    name: "The Lord of the Rings",
    sellingRank: '#3',
    Author: "J.R.R Tolkien",
    unitsSold: "150 Million copies"

},
{
    name: "The Little Prince",
    sellingRank: '#4',
    Author: "Antonie de Saint-Exupery",
    unitsSold: "142 Million copies"

}


])
})

app.listen(5000, ()=>{
    console.log('Listening to port 5000');
})