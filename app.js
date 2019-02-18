const express = require ("express")
app = express()

app.set("view engine",'ejs')

app.get("/home",(request,response) =>
    {
        response.render("homepage");
})
app.get("/login",(request,response) =>
    {
        response.render("login");
})

app.get("/users",(request,response) =>
    {
        response.render("users");
})

app.get("/",function(request,response){
    response.send("This is homepage. Try /home /login /users")
})

app.use(function(request,response){
    response.send("Requested page doesnt exist");    
})
app.listen(3000, () => console.log("I am up on port 3000"))