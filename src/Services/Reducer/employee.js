import { Emp_add, Emp_get } from "../ActionType/actiontype"



const information = {
    employees : [],
    employe : null,
    isLoad : false
}

const employreducer = (state = information , action) => {


    switch(action.type)
    {
        case Emp_add :

        break;

        case Emp_get :

        break;

        default : 
        return state
    }

}


export default employreducer;