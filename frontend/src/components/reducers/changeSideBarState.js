const initialState = false;
const changeSideBarState = (state=initialState, action) =>{
    switch(action.type) {
        case "OPEN":
            return true;
        case "CLOSE":
            return false;
        default : return state;
    }
}

export default changeSideBarState;