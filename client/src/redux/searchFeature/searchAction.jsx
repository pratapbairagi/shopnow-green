const { SEARCH_REQUEST } = require("./searchType")


const SearchAction = () => async (dispatch) =>{
    try {
        dispatch({
            type : SEARCH_REQUEST
        })

        
    } catch (error) {
        
    }
}