import { combineReducers } from "redux";

import toggleReducer from "./searchbox";

const rootReducer = combineReducers({
    toggleReducer
})

export default rootReducer;


// code to be written in destination file

// import { useSelector,useDispatch } from "react-redux";

// import { toggleSearch } from "../actions";
// //   redux
// const searchState = useSelector(state=> state.toggleReducer);
// const dispatch = useDispatch()
