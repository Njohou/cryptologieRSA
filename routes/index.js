var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;
var bodyparser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  /*var nom = "NDOMOUO";
  var prenom = "Carelle"
  var age = 23
  let all = nom + " " + prenom + " " + age;
  let acte = '2018/SD 7502 / N / 4928 /'
  var process = spawn('python', ['./python_script/register.py', all, acte]);

  process.stdout.on('data', (data)=> {
    console.log("La donnée est " + data);
    res.render('inscription', { title: data });
  });

  process.on('close', (code)=>{
    console.log("Le code est " + code);
  });*/
  res.render('index' );
});

router.get('/inscription', (req, res, next)=>{
  res.render('inscription')
});

router.get('/authentification', (req, res, next)=>{
  res.render('authentification')
});

router.get('/center_checking', (req, res, next)=>{
  res.render('center_checking')
});

/*  POST methods for register page */
router.post('/inscription', (req, res, next)=>{
  let region = req.body.region;
  let departement = req.body.departement;
  let arrondissement = req.body.arrondissement;
  let centre = req.body.centre;
  let acte_num = req.body.numero_acte;
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let dateness = req.body.dateness;
  let lieuness = req.body.lieuness;
  let sexe = req.body.sexe;
  let nompere = req.body.nompere;
  let lieunesspere = req.body.lieunesspere;
  let datenesspere = req.body.datenesspere;
  let domicilepere = req.body.domicilepere;
  let profpere = req.body.profpere;
  let natpere = req.body.natpere;
  let docrefpere = req.body.docrefpere;
  let nommere = req.body.nommere;
  let lieunessmere = req.body.lieunessmere;
  let datenessmere = req.body.datenessmere;
  let domicilemere = req.body.domicilemere;
  let profmere = req.body.profmere;
  let natmere = req.body.natmere;
  let docrefmere = req.body.docrefmere;
  let datedress = req.body.datedress;
  let declar = req.body.declar;
  let nous = req.body.nous;
  let assist = req.body.assist;
  let datedo = req.body.datedo;

  console.log("sexe : " + sexe + ", region : " + region + ", date nasiss : " + dateness);
  let DataSet = region + " " + departement + " " + arrondissement + " " + centre + " " +
      acte_num + " " + nom + " " + prenom + " " + dateness + " " + lieuness + " " + sexe +
      " " + nompere + " " + lieunesspere + " " + datenesspere + " " + domicilepere + " " +
      profpere + " " + natpere + " " + docrefpere + " " + nommere + " " + lieunessmere + " "
      + datenessmere + " " + domicilemere + " " + profmere + " " + natmere + " " + docrefmere
      + " " + datedress + " " + declar + " " + nous + " " + assist + " " + datedo;

  var process = spawn('python', ['./python_script/register.py', DataSet, acte_num, region, departement, arrondissement]);

  process.stdout.on('data', (data)=> {
    console.log("La donnée est " + data);
    res.render('inscription', { details: data });
  });

  process.on('close', (code)=>{
    console.log("Le code est " + code);
  });
});

/*  POST methods for authentification page */
router.post('/authentification', (req, res, next)=>{

});

/*
<% if (details) { %>
<div class="alert alert-success">
  <%= details %>
      </div>
  <% } %>
*/

module.exports = router;
