import express from 'express'
import dotenv from 'dotenv'


dotenv.config({
 path: './server/.env'   
})

import {passport} from './core/passport'

const app = express()

app.get('/auth/github', passport.authenticate('hithub'))

app.get('/auth/github/callback', 
passport.authenticate('github', { failureRedirect: '/login' }),
(req, res) => {
    res.redirect('/')
})

app.listen(3001, () => {
    console.log('server runned');
})


