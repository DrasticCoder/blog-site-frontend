const initialState = false;

const toggleReducer = (state = initialState , action) => {
    switch(action.type){
        case 'TOGGLE' : return state=!state;
        default : return state;
    }
}

export default toggleReducer;