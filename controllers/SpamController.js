const Spam = require('../models/Spam');

async function markSpam(req, res) {
  try {
    const { phone_number, reason } = req.body;

    let spam = await Spam.findOne({ where: { phone_number } });
    console.log(spam);
    if (spam) {
      //Phone number is already present in spam
      spam.spam_score = parseInt(spam.spam_score) + 1; //Increment the spam score
      let spamReasons = JSON.parse(Buffer.from(spam.spam_reasons, 'base64').toString('utf-8'));
      spamReasons.push(reason);
      spam.spam_reasons = Buffer.from(JSON.stringify(spamReasons)).toString('base64');
      await spam.save();
    } else {
      //Phone number is not present in spam
      console.log(phone_number);
      spam = await Spam.create({
        phone_number,
        spam_score: 1,
        spam_reasons: Buffer.from(JSON.stringify([reason])).toString('base64')
      });
    }

    res.json(spam);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { markSpam };