const initialState = {
    name: '',
    users: [],
    total: 0,
    penalty: 10
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'CHANGE_HOME_USER_NAME':
          return {
            ...state,
            name: action.text
        }
        case 'ADD_USER_NAME':
            console.log(action.userData);  
            const {id, content} = action.userData;
            const data = {
                id: id,
                name: content,
                balance: 0
            }
            return {
                ...state,
                users: [...state.users, data]
        }
        case 'CHANGE_PENALTY_VALUE':
            console.log(action.penalty);  
            // const {id, content} = action.userData;
            return {
                ...state,
                penalty: action.penalty
        }
        case 'CALCULATE_TOTAL':
            console.log(action.total);  
            // const {id, content} = action.userData;
            return {
                ...state,
                total: action.total
        }
        default:
          return state
      }
}

export default reducer;