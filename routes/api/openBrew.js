
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const router = express.Router();


router.get('/test',(req,res) => {
    res.json({msg: "page Works"});
});


//@route get api/openBrew

router.get('/', (req,res) => {
    const errors = {};
    let page = Math.floor(Math.random() * 15) + 1;
    axios.get(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=50`).then((response) => {
        res.json(response.data);
    }).catch((err) => {
        console.log(err);
    });

});

//@route get api/openBrew/state/:state

router.get('/state/:state',(req,res) => {

    const errors = {};

    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${req.params.state}`).then((response) => {
        if (response.data.length < 1){
            errors.msg = 'No results for your search';
            res.json(errors);
        }else{
            res.json(response.data);
        }

    }).catch((err) => {
       console.log(err);
    });

});
//@route get api/openBrew/:id

router.get('/:id',(req,res) => {
    const errors = {};
    axios.get(`https://api.openbrewerydb.org/breweries/${req.params.id}`).then((response) => {
        res.json(response.data);
    }).catch((err) => {
        console.log(err);
    });

});

router.get('/city/:state/:city',(req,res) => {
    const errors = {};
    const city = req.params.city;
    let data = [];
    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${req.params.state}`).then((response) => {
        for(let i =0; i < response.data.length; i++){

            if(response.data[i].city === city){
                data.push(response.data[i]);
            }
        }
        if (data.length < 1){
            errors.msg = 'No results for your search';
            res.json(errors);
        }else{
            res.json(data);
        }

    }).catch((err) => {
        console.log(err);
    });
});


router.get('/type/:state/:type',(req,res) => {
    const errors = {};
    const type = req.params.type;
console.log(type);
    let data = [];
    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${req.params.state}`).then((response) => {
        for(let i =0; i < response.data.length; i++) {

            if(response.data[i].brewery_type === type){
                data.push(response.data[i]);
            }
        }

        if (data.length < 1){
            errors.msg = 'No results for your search';
            res.json(errors);
        }else{
            res.json(data);
        }

    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;
