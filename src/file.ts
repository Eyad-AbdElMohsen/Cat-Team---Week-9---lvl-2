import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'

export const func = () => {
    const user = {
        email: ''//'eyadmohsen2324@gmail.com'
    }
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })
    
    const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        html: '<h1>Heu, Thats me Abmo7sen</p>'
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
