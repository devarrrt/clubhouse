import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sharp from 'sharp';
import fs from 'fs';

import { passport } from './core/passport';
import { IUser } from './../pages/index';

dotenv.config({
  path: 'server/.env',
});

import './core/db';
import AuthController from './controllers/AuthController';
import { uploader } from './core/uploader';
const app = express();

app.get('/auth/me', passport.authenticate('jwt', { session: false }), AuthController.getMe);
app.get(
  '/auth/sms/activate',
  passport.authenticate('jwt', { session: false }),
  AuthController.activate,
);
app.get('/auth/sms', passport.authenticate('jwt', { session: false }), AuthController.sendSms);
app.get('/auth/github', passport.authenticate('github'));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
 AuthController.authCallback
);

app.post('/upload', uploader.single('photo'), (req, res) => {
  const filePath = req.file.path;
  sharp(filePath)
    .resize(150, 150)
    .toFormat('jpeg')
    .toFile(filePath.replace('.png', '.jpeg'), (err) => {
      if (err) {
        throw err;
      }

      fs.unlinkSync(filePath);

      res.json({
        url: `/avatars/${req.file.filename.replace('.png', '.jpeg')}`,
      });
    });
});

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.post('/upload', uploader.single('photo'), (req, res) => {
  res.json(req.file);
});

app.listen(3001, () => {
  console.log('server runned');
});
