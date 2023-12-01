const nodemailer = require("nodemailer");

const sendMail = async (email) => {
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'sam.shanahan20@ethereal.email',
            pass: 'PBpKzArARGbXXH5EbG'
        }
    });

    const info = await transporter.sendMail({
        from: '"Abhinav Agrawal" <abhi@gmail.com>',
        to: email, // Use the passed email here
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
    });
    console.log("Mail sent successfully");
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

module.exports = sendMail;
