import { Router } from "express";
import { Request, Response } from "express";
import ApiError from "./errors/api.error";
import verifiedEmailToUser from "./file";

const router = Router()

export interface User {
    name: string
    email: string
    pass: string
    id: number
    isVerfied: boolean
}

const users: User[] = [
    {
        name: 'eyad',
        email: 'eyad@gmail.com',
        pass: 'pass.pass102s0',
        id: 23,
        isVerfied: true
    },
];

const generateId = () => Date.now()

router.post('/register', async(req: Request, res: Response) => {
    const newUser = req.body
    const oldUser = users.find((user) => user.email == newUser.email)
    if(oldUser)throw new ApiError('this user is already exist', 409)
    newUser.id = generateId()
    newUser.isVerfied = false
    users.push(newUser)
    const verifiedEmailResponse = await verifiedEmailToUser(newUser)
    res.status(200).json({
        message: 'A confirmation email sent to the user email',
        recieverEmail: verifiedEmailResponse.accepted[0],
        response: verifiedEmailResponse.response,
        senderEmail: verifiedEmailResponse.envelope.from
    })
})

router.get('/verify/:id', (req: Request, res: Response) => {
    const userId = Number(req.params.id) 
    const user = users.find((user) => user.id == userId)
    if(!user)throw new ApiError('Invalid user id', 400)
    user.isVerfied = true
    res.status(200).json({
        message: 'Successfuly Confirmation <3',
        user: {user}
    })
})

export default router