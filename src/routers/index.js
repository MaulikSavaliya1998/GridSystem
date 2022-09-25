import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../components/App/App"
import DetailsComponent from "../components/Details/Details"
import Film from "../components/Films/Film"
import Residents from "../components/Residents/Resident"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="details" element={<DetailsComponent />}></Route>
        <Route path="films" element={<Film />}></Route>
        <Route path="residents" element={<Residents />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
