import dispatcher from "../common/dispatcher";
import API from '../api/customAxios';

class LoginAction{
    constructor(){
        this.actionType={}
        this.actionType.adminLogin="adminLogin"
    }
   

    adminLogin =async(request)=>{
        
        try{
            var response={
                data:[],
                ok:false
            }
            
            var res = await API.post(`admin/adminLogin`,request)
            response.ok=true
            response.data=res.data
        }
        catch(e){
            response.ok=false
            response.data=e.message
        }
        dispatcher.dispatch({type:this.actionType.adminLogin,data:response})
        
    }

}
export default new LoginAction()
