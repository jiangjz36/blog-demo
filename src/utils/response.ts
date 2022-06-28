import { StatusCode } from './enum'

interface IRes {
  res: any;
  statusCode?: number;
  data?: any;
  code?: number;
  msg?: string;
}

const createRes = (params: IRes) => {
  const status = params.statusCode! || StatusCode.OK
  const body = {
    code: params.code || 0,
    data: params.data || null,
    msg: params.msg || ''
  }
  params.res.status(status).json(body)
}

export default createRes