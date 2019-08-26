import { MockRequest } from '@delon/mock';
const data: any[] = [
  {
    UserId: 59632,
    ZaiZhiZhuangTai: 2,
    UserName: '邵文',
    orgid: 22,
    isjjr: 0,
    OrgName: '研发部',
    mobile: '15840452469',
    RzRuzhiDate: '2019-06-12',
    isyunying: false
  },
  {
    UserId: 55454,
    ZaiZhiZhuangTai: 1,
    UserName: '苑鹏掣',
    orgid: 22,
    isjjr: 13,
    OrgName: '研发部',
    mobile: '15604025257',
    RzRuzhiDate: '2018-08-27',
    isyunying: false
  },
  {
    UserId: 58988,
    ZaiZhiZhuangTai: 1,
    UserName: '钟海',
    orgid: 22,
    isjjr: 9,
    OrgName: '研发部',
    mobile: '18802447663',
    RzRuzhiDate: '2019-05-08',
    isyunying: false
  },
  {
    UserId: 12354,
    ZaiZhiZhuangTai: 1,
    UserName: '黄鑫',
    orgid: 22,
    isjjr: 10,
    OrgName: '研发部',
    mobile: '18698883789',
    RzRuzhiDate: '2011-01-10',
    isyunying: false
  },
  {
    UserId: 57747,
    ZaiZhiZhuangTai: 1,
    UserName: '曲振林',
    orgid: 22,
    isjjr: 13,
    OrgName: '研发部',
    mobile: '15714010102',
    RzRuzhiDate: '2019-02-25',
    isyunying: false
  },
  {
    UserId: 55967,
    ZaiZhiZhuangTai: 1,
    UserName: '侯福艳',
    orgid: 22,
    isjjr: 9,
    OrgName: '研发部',
    mobile: '13194200618',
    RzRuzhiDate: '2018-09-17',
    isyunying: false
  },
  {
    UserId: 44434,
    ZaiZhiZhuangTai: 1,
    UserName: '南丙坤',
    orgid: 22,
    isjjr: 9,
    OrgName: '研发部',
    mobile: '15640440181',
    RzRuzhiDate: '2017-04-10',
    isyunying: false
  },
  {
    UserId: 56599,
    ZaiZhiZhuangTai: 1,
    UserName: '魏秋实',
    orgid: 22,
    isjjr: 9,
    OrgName: '研发部',
    mobile: '13998272237',
    RzRuzhiDate: '2018-10-22',
    isyunying: false
  },
  {
    UserId: 45848,
    ZaiZhiZhuangTai: 1,
    UserName: '王天',
    orgid: 22,
    isjjr: 9,
    OrgName: '研发部',
    mobile: '13591667022',
    RzRuzhiDate: '2017-06-19',
    isyunying: false
  },
  {
    UserId: 45208,
    ZaiZhiZhuangTai: 1,
    UserName: '胡泽军',
    orgid: 22,
    isjjr: 9,
    OrgName: '研发部',
    mobile: '18604020570',
    RzRuzhiDate: '2017-05-25',
    isyunying: false
  },
  {
    UserId: 22565,
    ZaiZhiZhuangTai: 1,
    UserName: '崔玮',
    orgid: 22,
    isjjr: 9,
    OrgName: '研发部',
    mobile: '13504944808',
    RzRuzhiDate: '2014-04-07',
    isyunying: false
  },
  {
    UserId: 52525,
    ZaiZhiZhuangTai: 1,
    UserName: '苑琳琳',
    orgid: 22,
    isjjr: 9,
    OrgName: '研发部',
    mobile: '15524257001',
    RzRuzhiDate: '2018-04-14',
    isyunying: false
  }
];
function getlist(param) {
  const dd = data;
  return dd.splice((param.pageindex - 1 ) * param.pagesize, param.pagesize);
}
export const Table = {
  'POST /list': (req: MockRequest) => {
    const param = req.body;
    return {
      code: 1,
      msg: 'ok',
      data: {
        count: data.length,
        list: getlist(param)
      }
    };
  }
}
