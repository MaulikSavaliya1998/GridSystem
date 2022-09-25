import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { fetchFilms } from "../../redux/action"
import { generateCustomTable } from "../../utils"
import Grid from "../Grid/Grid"

const Film = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const planetData = useSelector((state) => state)
  const [tableData, setTableData] = useState([])
  let location = useLocation()
  const getFilmsData = () => {
    console.log("no data")
  }

  const getResidentsData = () => {
    console.log("no data")
  }

  useEffect(() => {
    const fetchData = () => {
      const filmData = location.state.data
      if (filmData) {
        dispatch(fetchFilms(filmData))
      }
    }
    fetchData()
  }, [dispatch, location])

  

  useEffect(() => {
    const showDetails = (rowData) => navigate("/details", { state: { data: rowData } })

    const getCustomData = () => {
      const filmData = generateCustomTable(
        planetData.films,
        () => getFilmsData(),
        () => getResidentsData(),
        (res) => showDetails(res),
        "Level2"
      )
      setTableData(...filmData)
    }
    if (planetData.films.length) {
      getCustomData()
    }
  }, [planetData.films, navigate])

  return (
    <div>
      <div className="d-flex justify-content-between m-3 p-3">
        <h1 className="border-bottom border-dark">Films</h1>
        <button className="btn btn-lg btn-dark me-5" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
      {tableData && <Grid data={tableData} />}
    </div>
  )
}

export default Film
