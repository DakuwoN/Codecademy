const checkMillionDollarIdea = (req, res) => {
    const numWeeks = req.body.numWeeks;
    const weeklyRevenue = req.body.weeklyRevenue;
    const totalRevenue = numWeeks * weeklyRevenue;
    if (!numWeeks || !weeklyRevenue || isNaN(totalRevenue) || totalRevenue < 1000000) {
        res.status(400).send('Idea must be worth at least a million dollars!');
    } else {
        next();
    }

};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
