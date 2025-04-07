const URL = require('../models/url')
const ShortUniqueId = require('short-unique-id')
async function handleURLgenerate(req, res) {
    if (!req.body.url) {
        return res.status(400).send({
            error: 'URL not Found !'
        })
    }
    const uid = new ShortUniqueId({ length: 8 });
    const shortURL = uid.rnd();
    await URL.create({
        shortId: shortURL,
        originalUrl: req.body.url,
        visitHistory: []
    })

    return res.status(200).send({
        id: shortURL
    })
}
async function handleshortURL(req, res) {
    // console.log(req.params.shortId);
    const urlId = req.params.shortId;
    const result = await URL.findOneAndUpdate({shortId:urlId}, {
        $push: {
            visitHistory: Date.now()
        }
    })
    return res.status(200).redirect(result.originalUrl);
}
async function handleAnalytics(req,res) {
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId:shortId});
    return res.status(200).send({
        website:result.originalUrl,
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory
    })
}
module.exports = {
    handleURLgenerate,
    handleshortURL,
    handleAnalytics
};