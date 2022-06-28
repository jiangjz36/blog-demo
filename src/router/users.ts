import { Router } from 'express'
import UserService from '../services/users'
import { StatusCode } from '../utils/enum'
import createRes from '../utils/response'

const userService = new UserService()
const userRouter = Router()

// /api/users
userRouter
  .get('/', async (req, res) => {
    try {
      const users = await userService.getUsers()
      createRes({
        res,
        data: users,
        msg: '查询成功'
      })
    } catch (error) {
      createRes({
        res,
        code: 400,
        msg: error.message
      })
    }
  })
  .post('/addUser', async (req, res) => {
    try {
      const { username, password, confirmpass } = req.body;
      await userService.register(username, password, confirmpass)
      createRes({
        res,
        code: StatusCode.Created,
        msg: '注册成功'
      })
    } catch (error) {
      createRes({
        res,
        code: 400,
        msg: error.message
      })
    }
  })
  .post('/login', async (req, res) => {
    try {
      const { username, password } = req.body
      const data = await userService.login(username, password)
      createRes({
        res,
        code: StatusCode.OK,
        msg: '登录成功',
        data
      })
    } catch (error) {
      createRes({
        res,
        code: 400,
        msg: error.message
      })
    }
  })

export default userRouter