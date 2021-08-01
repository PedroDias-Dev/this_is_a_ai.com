const INITIAL_STATE = false

export default function course(state = INITIAL_STATE, action){
    if(action.type == 'TOGGLE'){
        return false
    }

    return state
}