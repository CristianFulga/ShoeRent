const mongoose = require('mongoose');
const Piani = mongoose.model('Piani');

//read all plans
module.exports.plansRead = (req, res) => {
    console.log("get Request for All Pianis");
    Piani.find({}).exec(function(err, pianis){
        if(err) {
            console.log("Error retriving pianis");
        } else {
            res.status(200).json(pianis);
        }
    });
};

//read single plan
module.exports.planRead = (req, res) => {
    console.log("get Request for a single Piani");
    Piani.findById(req.params.id).exec(function(err, piani){
        if(err) {
            console.log("Error retriving a single piani");
        } else {
            res.status(200).json(piani);
        }
    });
};