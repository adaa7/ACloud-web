import request from '@/utils/request';
enum API {
  LOGIN_URL = '/admin/login',
  REGISTER_URL = '/admin/login',
}
export const reqLogin = (data:any)=> request.post("/admin/login",data)