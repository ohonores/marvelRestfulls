export const GET_THUMBNAIL   = 'GET_THUMBNAIL';
export const GET_CHARACTERES = 'GET_CHARACTERES';
export const GET_DETAILS = 'GET_DETAILS';
export const BEGIN_CALL = 'BEGIN_CALL';
export const END_CALL = 'END_CALL';
export const CATCH_ERRORES = 'CATCH_ERRORES';
export const SET_CHARATERES = 'SET_CHARATERES';
export const SET_PAGINACION_NEXT = 'SET_PAGINACION_NEXT';
export const SET_PAGINACION_PREVIEW = 'SET_PAGINACION_PREVIEW';
const URL_CHARACTERS = 'http://gateway.marvel.com/v1/public/characters?ts=1563765105656&apikey=fc628c4edd0ea497187ab7c8de09489f&hash=db9a31f08a8a8d7df3b8f00bd2b6c02f&limit=10&offset=#offset';
export const getThumnail = filter => ({
  type: GET_THUMBNAIL,
  filter
})

export const getCharacteres = filter => ({
  type: GET_CHARACTERES,
  filter
})

export const getDetails = filter => ({
  type: GET_DETAILS,
  filter
})

export const beginCall = filter => ({
    type: BEGIN_CALL,
    filter
})
export const endCall = filter => ({
    type: END_CALL,
    filter
})
export const catchErrors = filter => ({
    type: CATCH_ERRORES,
    filter
})
export const setCharacters = filter => ({
    type: SET_CHARATERES,
    filter
})
export const setPaginacionNext = filter => ({
    type: SET_PAGINACION_NEXT,
    filter
})
export const setPaginacionPreview = filter => ({
    type: SET_PAGINACION_PREVIEW,
    filter
})

export function fetchCharacters(offset) {
    console.log("fetchCharacters", offset);
    return dispatch => {
      dispatch(beginCall());
      return fetch(URL_CHARACTERS.replace("#offset", offset ? offset : 10 ))
        .then(res => res.json())
        .then(json => {
            
          dispatch(setCharacters(json));
        })
        .catch(error => dispatch(catchErrors(error)));
    };
  }