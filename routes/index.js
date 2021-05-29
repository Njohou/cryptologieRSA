var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;

/* GET home page. */
router.get('/', function(req, res, next) {
  var process = spawn('python', ['./python_script/register.py']);
  var nom = "NJOHOU";
  var prenom = "Landry"
  var age = 23
  let all = nom + " " + prenom + " " + age;

  process.stdout.on('data', (data)=> {
    console.log("La donnée est " + data);
    res.render('inscription', { title: data });
  });

  process.on('close', (code)=>{
    console.log("Le code est " + code);
  });
});

module.exports = router;
