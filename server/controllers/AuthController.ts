import express from 'express';
//@ts-ignore
import { Code } from '../../models';
import { randomCode } from './../../utils/randomCode';

class AuthController {
  getMe(req: express.Request, res: express.Response) {
    res.json(req.user);
  }

  authCallback(req: express.Request, res: express.Response) {
    res.send(
      `<script>window.opener.postMessage('${JSON.stringify(
        req.user,
      )}','*');window.close();</script>`,
    );
  }

  async activate(req: express.Request, res: express.Response) {
    const userId = req.user.id;
    const smsCode = req.query.code;

    if (!smsCode) {
      return res.status(400).send();
    }
    const whereQuery = { code: smsCode, user_id: userId };

    try {
      const findCode = await Code.findOne({
        where: whereQuery,
      });
      if (findCode) {
        await Code.destroy({
          where: whereQuery,
        });
        return res.send();
      } else {
        throw new Error('Пользователь не найден');
      }
    } catch (error) {
      res.status(500).json({
        message: 'Ошибка при активации',
      });
    }
  }
  async sendSms(req: express.Request, res: express.Response) {
    const phone = req.query.phone;
    const userId = req.user.id;
    const smsCode = randomCode();

    if (!phone) {
      return res.status(400).send();
    }
    try {
      //  await Axios.get(
      //   `https://sms.ru/sms/send?api_id=${process.env.SMS_API_KEY}&to=79307171599&msg=${smsCode}`
      // );

      const findCode = await Code.findOne({
        where: {
          user_id: userId
        }
      })
       if ( findCode ) {
        return res.json({message: "Код уже был отправлен"}).status(400)
       } 

      await Code.create({
        code: smsCode,
        user_id: userId,
      });
      res.status(201).send();
    } catch (err) {
      res.status(500).json({
        message: 'Ошибка при отправке СМС кода',
      });
    }
  }
}

export default new AuthController();
