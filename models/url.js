const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema(
    {
        shortId: {
            type: String,
            required: true,
            unique: true
        },
        originalUrl: {
            type: String,
            required: true
        },
        visitHistory: [
            {
                type: Number
            }
        ]

    }
);

const URL=mongoose.model('url',urlSchema);
module.exports=URL;