import { MockRequest } from '@delon/mock';
import { User } from '../src/app/model/user';

const userList: User[] = [
  {
    token: '1ambassadress',
    id: 1,
    nickName: '管理员',
    userName: 'admin',
    avatar: './logo1.jpg'
  },
  {
    token: '1ambassadress',
    id: 2,
    nickName: '用户',
    userName: 'user',
    avatar: './logo1.jpg'
  }
];

export const Login = {
  'POST /login': (req: MockRequest) => {
    const data = req.body;
    if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== '123456') {
      return {
        code: 0,
        msg: `Invalid username or password（admin/123456|user/123456）`
      };
    }
    return {
      code: 1,
      msg: 'ok',
      data: userList.find(e => e.userName === data.userName)
    };
  },
  '/logout': () => {
    return {
      code: 1,
      msg: 'ok'
    };
  }
}
