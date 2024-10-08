const nodeemailer =  require("nodemailer")

const sendEmail = async(subject, message, sent_to, sent_from, reply_to) =>{
    //create email tarnsporter
const transporter  = nodeemailer.createTransport({
    host : process.env.EMAIL_HOST,
    port : 587,
    auth :{
        user : process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASS,
    },
    tls:{
        rejectUnauthorized:false
    }
})

//options for sending email 

const options= {
from : sent_from.from,
to : sent_to,
replyTo: reply_to,
subject : subject,
html : message
}


//send email
transporter.sendMail(options,function(err,info)
{
if(err){console.log(err)}
else{
    console.log(info)
}

})
};




module.exports = sendEmail