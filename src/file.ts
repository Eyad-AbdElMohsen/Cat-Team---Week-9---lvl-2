import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'
import { User } from './filet3'
import { promisify } from 'util';
interface Envolope{
        from: string; 
        to: string[];  
        //cc?: string[];  
        //bcc?: string[];
}
interface Info{
    accepted: string,
    rejected: string,
    ehlo: string[],
    envelopeTime: number,
    messageTime: number,
    messageSize: number,
    response: string,
    envelope: Envolope
    messageId: string,
}


const verifiedEmailToUser = async(user: User) => {
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
        html: `<p>Welcome! Please click the link below to verify your email address:</p>
            <a href="http://localhost:3000/verify/${user.id}">Verify My Email</a>`
    }
    // converting sendMail to async function 
    const sendMailAsync = promisify(transporter.sendMail).bind(transporter);
    try {
        const info: Info = await sendMailAsync(mailOptions) as Info;
        return info;
    } catch (error) {
        throw new Error('Error sending email: ' + error);  
    }
};


export default verifiedEmailToUser