import {SET_PAGINACION_PREVIEW, SET_PAGINACION_NEXT, SET_CHARATERES, GET_DETAILS} from '../actions/index';
const tipos = (state = [], action) => {
    console.log("action", action);
    switch (action.type) {
        case SET_CHARATERES:
            return {
                ...state,
                loading: false,
                items: action.filter.data
            };
        case GET_DETAILS:
            return {
                ...state,
                loading: false,
                id: action.filter
            };
        case SET_PAGINACION_NEXT:
            return {
                ...state,
                loading: false,
                paginacion: {start:action.filter.start + 5, end:action.filter.end + 5}
            };
        case SET_PAGINACION_PREVIEW:
                return {
                    ...state,
                    loading: false,
                    paginacion: {start:(action.filter.start - 5 <= 5 ?  5:action.filter.start-5), end:(action.filter.end - 5 <= 11 ? 11:action.filter.end - 5)}
                };
                     
      default:
        return state
    }
  }
  
  export default tipos