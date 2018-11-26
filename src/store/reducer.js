const initialState = {
    textValues : "",
    listValues : []
}

const reducer = (state = initialState,action) =>
{
    switch(action.type)
    {
        case "ADD" : 
        console.log("Add");
        break;
        case "DELETE" :
        break;
    }
    return state;
}

export default reducer;