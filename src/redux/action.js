export const fetchData = (link) => async (dispatch) => {
  let response = await fetch(link)
  response = await response.json()
  dispatch({
    type: "PLANET",
    payload: response.results,
  })
}

const getFetchArray = (links) => {
  let tempArray = []
  links.forEach((element) => {
    tempArray.push(fetch(element))
  })
  return tempArray
}

export const fetchFilms = (link) => async (dispatch) => {
  Promise.all(getFetchArray(link))
    .then(function (responses) {
      return Promise.all(
        responses.map(function (response) {
          return response.json()
        })
      )
    })
    .then(function (data) {
      dispatch({
        type: "FILMS",
        payload: data,
      })
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const fetchResident = (link) => async (dispatch) => {
  Promise.all(getFetchArray(link))
    .then(function (responses) {
      return Promise.all(
        responses.map(function (response) {
          return response.json()
        })
      )
    })
    .then(function (data) {
      dispatch({
        type: "RES",
        payload: data,
      })
    })
    .catch(function (error) {
      console.log(error)
    })
}
