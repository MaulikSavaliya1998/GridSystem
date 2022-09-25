import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const DetailsComponent = () => {
  let location = useLocation();
  const planetData = location.state.data;
  const navigate = useNavigate();
  console.log("planetData", planetData);
  const [viewData, setViewData] = useState([]);

  const getDetailsView = (data) => {
    let listViewData = [];
    for (const [key, value] of Object.entries(data)) {
      listViewData.push({
        label: key,
        value: typeof value === "object" ? value.length : value,
      });
    }
    setViewData(listViewData);
  };

  useEffect(() => {
    if (planetData) {
      getDetailsView(planetData);
    }
  }, [planetData]);

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h3> Details</h3>
        </Col>
        <Col>
          <button onClick={() => navigate(-1)} className="btn btn-dark">
            Back
          </button>
        </Col>
      </Row>
      <div className="text-center my-4 border border-dark py-4">
        {viewData &&
          viewData.map((item, index) => {
            return (
              <Row className="border px-3 my-2 text-start" key={index}>
                <Col>{item.label} : </Col>
                <Col>{item.value}</Col>
              </Row>
            );
          })}
      </div>
    </Container>
  );
};

export default DetailsComponent;
