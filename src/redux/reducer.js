const initialState = {
  planet: [],
  films: [],
  residents: [],
}

export const planetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLANET":
      return {
        ...state,
        planet: action.payload,
      }
    case "FILMS":
      return {
        ...state,
        films: action.payload,
      }
    case "RES":
      return {
        ...state,
        residents: action.payload,
      }
    default:
      return state
  }
}
