import Action from "../action/LoginAction"
import dispatcher from "../common/dispatcher"
import { Store } from 'flux/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LoginStore extends Store {
    constructor() {
        super(dispatcher);
        
        this.tempoData={
            go:false
        }
        
    }

    
    getTempoData=()=>{
        return this.tempoData
    }

    __onDispatch = async (action) => {
       
        if(action.type===Action.actionType.adminLogin){
            AsyncStorage.setItem('jwt', action.data.data.jwt)
            AsyncStorage.setItem('userInfo', JSON.stringify(action.data.data.userInfo))
            this.tempoData.go=true
        }
        else{
            return false
        }
        this.__emitChange()
        return true
        
    }
}

export default new LoginStore()