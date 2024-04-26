import {defineStore} from 'pinia';
import { SET_TOKEN, GET_TOKEN} from '@/utils/token';
import {reqLogin} from '@/api/user';
let useUserStore = defineStore("User",{
  state: () =>{
    return {
      userName:'',
      userCover:'',
      token: GET_TOKEN()
    }
  },
  actions: {
    async userLogin(data:any) {
      let result:any = await reqLogin(data)
      if(result.code == 1){
        this.token = result.data;
        SET_TOKEN(result.data);
        return 'ok'
      }else{
        return Promise.reject(new Error(result.data));
      }
    }
  }
})
export default useUserStore;