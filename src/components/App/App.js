import "./App.css";
import Planets from "../Planets/Planets";
import { useState } from "react";
import AddModal from "../Modal/AddModal";
import { Alert } from "reactstrap";

const App = () => {
  const [addModal, setAddModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const toggleModal = () => {
    setAddModal((prev) => !prev);
  };

  const submitData = () => {
    toggleModal();
    setAlert(true);
  };
  return (
    <div className="App">
      <div className="d-flex justify-content-between m-3 p-3">
        <h1 className="border-bottom border-dark">Star Wars Planets</h1>
        <button className="btn btn-lg btn-dark me-5" onClick={toggleModal}>
          Add Planet
        </button>
      </div>
      <Alert color="success" isOpen={alert} toggle={() => setAlert(false)} className="my-3">
        Data added successfully
      </Alert>
      {addModal && <AddModal addModal={addModal} handleToggle={toggleModal} submitData={submitData} />}
      <Planets />
    </div>
  );
};

export default App;
