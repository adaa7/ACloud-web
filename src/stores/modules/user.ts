//创建用户习惯的仓库
import { defineStore } from "pinia";

import { reqLogin } from "@/api/user";
import { SET_TOKEN, GET_TOKEN } from "@/utils/token";

let useUserStore = defineStore("User", {
  state: ():any => {
    return {
      token: GET_TOKEN(),
      username: ''
    };
  },
  actions: {
    async userLogin(data: any) {
      let result: any = await reqLogin(data);
      if (result.code == 1) {
        this.token = result.data.token;
        this.username = result.data.username;
        SET_TOKEN(result.data.token);
        return "ok";
      } else {
        return Promise.reject(new Error(result.msg));
      }
    },
  },
  getters: {},
});
export default useUserStore;