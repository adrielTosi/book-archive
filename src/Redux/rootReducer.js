const initialState = { userSearch: [] }


export default function rootReducer (state = initialState, action){
    switch(action.type){
        case "CHANGE_SEARCH":
            return { userSearch: action.newSearch }

        default: return state
        }


}


