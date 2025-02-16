import { BackLogItemCommited } from "./BackLogItemCommited";

export class BackLogItem{



    commit(){

    }

    pullEvent(){
        return new BackLogItemCommited(new Date());
    }

}