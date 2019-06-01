const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Favs = require('../../models/Favs');

const User = require('../../models/User');




//@route get api/favs

router.get('/:uid', (req,res) => {
    const errors = {};
    Favs.find({user: req.params.uid}).then((favs) => {
        if(!favs){
            errors = 'There are no favs for this user';
            return res.status(404).json(errors);
        }
        res.json(favs);
    }).catch((err) => {
        res.status(404).json(err);
    });

});

//@route post api/favs

router.post('/', (req,res) => {


    const favsFields = {};

    favsFields.user = req.body.uid;

    if(req.body.brewery_type) favsFields.brewery_type = req.body.brewery_type;
    if(req.body.id) favsFields.id = req.body.id;
    if(req.body.longitude) favsFields.longitude = req.body.longitude;
    if(req.body.latitude) favsFields.latitude = req.body.latitude;
    if(req.body.name) favsFields.name = req.body.name;
    if(req.body.street) favsFields.street = req.body.street;
    if(req.body.state) favsFields.state = req.body.state;
    if(req.body.website_url) favsFields.website_url = req.body.website_url;


                new Favs(favsFields).save().then((favs) => {
                    res.json(favs);
                });


});

router.delete('/:id', (req,res) => {
    Favs.findOneAndRemove({_id: req.params.id}).then(() => {
            res.json({success: true});
    });

});

module.exports = router;