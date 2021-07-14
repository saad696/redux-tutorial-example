const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        // case 'BY-5':
        //     return state + action.payload;
        default:
            return state
    }
}

export default counterReducer;