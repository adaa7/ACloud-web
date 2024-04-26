import {defineStore} from 'pinia';
import { reqFileDisplay } from '@/api/FileDisplay';
const usefiledisplayStore = defineStore("filedisplay",{
    state: () =>({
        filelist:[],
        total:0,
        style:Number(localStorage.getItem('ACloud-FileDisplay-style'))||0
    }),
    getters:{
    },
    actions: {
      async getfiledisplay() {
        let result = await reqFileDisplay()
        if(result.status == 200){
          console.log(1,result.data[0].data.records);
          this.filelist = result.data[0].data.records
        }
        
        /* if(result.status == 200){
          this.filelist = result.data[0].data.records
          this.total = result.data[0].data.total
        } */
        
        // if(result.code == 200){
          
        //   return 'ok'
        // }else{
        //   return Promise.reject(new Error(result.data));
        // }
      },
      togglestyles(style:number){
        this.style = style
        localStorage.setItem('ACloud-FileDisplay-style',style.toString())
      }
    }
  })
  export default usefiledisplayStore;