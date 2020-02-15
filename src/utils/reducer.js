import { combineReducers } from 'redux';
import product from '../products.json';

const initialState = product

const purchase = (state = initialState, action) => {
    switch(action.type){
        case "PURCHASE_PART":
            // Logs Name and price to console.
            console.log("Part and Cost: ")
            console.log(action.payload)
            return state;

        default:
            return state;
    }
}

// Did this to simulate how I would handle multiple reducers. Typically I would have this run in an index file that
// brings in all the reducers from various files.
const rootReducer = combineReducers({
    purchase,
})

export default rootReducer;