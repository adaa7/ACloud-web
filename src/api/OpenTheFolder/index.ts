import request from '@/utils/request';
enum API {
  FileDisplay_URL = 'src/Json/list.json',
}
// page,limit
//export const reqFileDisplay = (page:number,limit:number)=>request.get<any,any>(API.FileDisplay_URL)
export const reqFileDisplay = ()=>request.get(API.FileDisplay_URL)