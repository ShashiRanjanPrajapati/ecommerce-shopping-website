
const initialState = 0;

const changeTheNumber = (state = initialState , action) => {
    switch(action.type){
        // if increment one number use this
        case "INCREMENT" : return state + 1;

        // if increment 5 number use this
        // case "INCREMENT" : return state + action.payload;


        case "DECREMENT" : return state - 1;
        default : return state;
    }
}
export default changeTheNumber