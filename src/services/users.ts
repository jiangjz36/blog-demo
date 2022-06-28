import User from '../model/User'
import Crypto from 'crypto'
const uuid = require('uuid')

export default class UserService {
  private getEncryption (str: string) {
    return Crypto
      .createHash('sha1')
      .update(str)
      .digest('hex');
  }
  public async getUser(username) {
    try {
      const res = User.findOne({ username });
      return res
    } catch (error) {
      throw new Error('获取失败')
    }
  }
  public async getUsers() {
    try {
      const res = await User.find()
      return res
    } catch (error) {
      throw new Error('获取失败')
    }
  }
  public async register(username: string, password: string, confirmpass: string) {
    try {
      if (!username) throw new Error('没有输入用户名')
      if (!password) throw new Error('没有输入密码')
      if (!confirmpass) throw new Error('没有输入密码')
      if (password !== confirmpass) throw new Error('密码与确认密码不一致')
      const user = await this.getUser(username);
      if (user) throw new Error('该用户名已被使用')
      const passwordCryp = this.getEncryption(password)
      const newUser = new User({
        username: username,
        password: passwordCryp
      })
      return await newUser.save()
    } catch (error) {
      throw new Error(error.message)
    }
  }
  public async login(username: string, password: string) {
    try {
      if (!username) throw new Error('请输入用户名')
      if (!password) throw new Error('请输入密码')
      const passwordCryp = this.getEncryption(password)
      const user = await this.getUser(username)
      if (!user) throw new Error('该用户不存在')
      if (user.password !== passwordCryp) throw new Error('密码错误，请重新输入')
      const tokenStr = uuid.v4();
      const token = this.getEncryption(tokenStr)
      user.token = token
      await user.save()
      return {
        username: user.username,
        token: user.token
      }
    } catch (error) {
      throw new Error(error.message)      
    }
  }
}