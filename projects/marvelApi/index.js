var express =require('express')
var app = express()

app.use(express.static(__dirname + '/'))
app.listen(process.env.PORT || 3000)
console.log('Your app is running on port 3000')