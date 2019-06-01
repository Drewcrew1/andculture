const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const FavsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    brewery_type: {
        type: String

    },

    id: {
        type: Number
    },
    longitude: {
        type: Number
    },
    latitude: {
        type: Number
    },
    name: {
        type: String
    },
    state: {
        type: String
    },
    street: {
        type: String
    },
    website_url: {
        type: String
    }

});

module.exports = Favs = mongoose.model('favs', FavsSchema);