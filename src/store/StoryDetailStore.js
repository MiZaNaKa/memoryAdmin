import Action from "../action/StoryDetailAction"
import dispatcher from "../common/dispatcher"
import { Store } from 'flux/utils';

class StoryDetailStore extends Store {
    constructor() {
        super(dispatcher);
        this.detail={
            "like" : [

            ],
            "comment" : [

            ],
            "text" : "",
            "title" : "dsfsdf",
        }
        this.tempoData={
            go:false
        }
        
    }

    clearAll=()=>{
        this.detail={
            "like" : [

            ],
            "comment" : [

            ],
            "text" : "",
            "title" : "dsfsdf",
        }
        this.tempoData={
            go:false
        }
    }

    getTempoData=()=>{
        return this.tempoData
    }

    getDetail=()=>{
        return this.detail
    }

    __onDispatch = async (action) => {
       
        if(action.type===Action.actionType.getStoryDetail){
            if(action.data.ok){
               this.detail=action.data.data.success.data.success.data
            }
        }
        else if(action.type===Action.actionType.adminActionDetail){
            if(action.data.ok){
               this.tempoData.go=true
            }
        }

        
      
        else{
            return false
        }
        this.__emitChange()
        return true
        
    }
}

export default new StoryDetailStore()