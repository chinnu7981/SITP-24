const catchAsync = require('./../utils/catchAsync');
const Cashfree = require('cashfree');
const config = require('./../utils/config');

const User = require('./../model/userModel');

const cashfree_key = config.CASHFREE_KEY;
const cashfree_secret = config.CASHFREE_SECRET;

const cashfree_instance = new Cashfree({
    key_id : cashfree_key,
    key_secret: cashfree_secret
});

exports.initiatePayment = catchAsync(async (req,res,next) => {
    //amount in paise
    const user = await User.findOne({email : req.user.emails[0].value});

    let options = {
        amount: req.body.amount,
        currency: "INR",
        receipt: `receipt ${user.email}`,
        notes: {
            email : req.user.emails[0].value,
            phoneNumber : user.phoneNumber
        }
    }

    cashfree_instance.orders.create(options, (err, order) => {
        if(err) {
            throw err;
        }
        res.status(200).json({
            order,
            key : cashfree_key,
            user : {
                name : user.name,
                email : user.email,
                phoneNumber : user.phoneNumber
            }
        });
    })
});
