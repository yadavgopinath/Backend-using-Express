const express=require('express');
const bodyparser=require('body-parser');
const fs=require('fs');

const app=express();
const login=require('./routes/login');
app.use(bodyparser.urlencoded({extended:false}));

app.use(login);
app.get('/', (req, res, next) => {
    fs.readFile('message.txt',(err,data)=>{
        if(err)
        {
            console.log(err);
            data="No data exist";
        }
        res.send(`
        ${data}<br><form action='/' method='POST' id="loginform">
                <input type="text" id="text" name="text">
                <input type="hidden" id="username" name="username">
                <br>
                <button type="submit">Send</button>
            </form>
            <script>
            
                document.getElementById('loginform').addEventListener('submit', function(event) {
                    const username = localStorage.getItem('username');
            document.getElementById('username').value = username;
                    const text = document.getElementById('text').value;
    
    
    
                   
                });
            </script>
        `);
    })
   
});


app.post('/',(req,res,next)=>{
    console.log('helooo');
    console.log(req.body);
   if(req.body.username && req.body.text){
   fs.writeFile('message.txt', `${req.body.username} : ${req.body.text}`+" ",{flag:'a'},err=>{

    if (err) {
        console.error('Error writing to file:', err);
    }
    });
}
res.redirect('/');
 
});
app.listen(3000);