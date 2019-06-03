
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const secretOrKey = process.env.secretOrKey;


router.post('/register',(req,res) => {

    User.findOne({
        email: req.body.email
    }).then((user) => {
        if(user){
            errors.email = 'Email Already Exists';
            return res.status(400).json(errors);
        }else{


            const newUser = new User({
                email: req.body.email,
                password: req.body.password,
                name: req.body.name

            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password,salt,(err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save().then((user) => {
                        res.json(user);
                    }).catch((err) => {
                        console.log(err);
                    });

                });
            });
        }
    }).catch((err) => {
        console.log(err);
    });
});


router.post('/login', (req,res) => {

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {

        if (!user) {
            errors.email = 'User not found';
            return res.status(404).json(errors);
        }


        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {

                const payload = { id: user.id, name: user.name, email: user.email };


                jwt.sign(
                    payload,
                    secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        res.json({
                            success: true,
                            user: user,
                            token: 'Bearer ' + token
                        });
                    }
                );
            } else {
                errors.password = 'Password incorrect';
                return res.status(400).json(errors);
            }
        });
    });
});



module.exports = router;