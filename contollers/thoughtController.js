const { Thought } = require('../models');

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const dbThoughtData = await Thought.find({});
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async getThoughtById(req, res) {
        try{
            const dbThoughtData = await Thought.findOne({_id: req .params.thoughtId});
            if(!thought){
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }else{
                res.json(dbThoughtData);
            }
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try{
            const dbThoughtData = await Thought.create(req.body);
            res.json(dbThoughtData);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try{
            const dbThoughtData = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, req.body, {new: true});
            if(!dbThoughtData){
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }else{
                res.json(dbThoughtData);
            }
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
}

