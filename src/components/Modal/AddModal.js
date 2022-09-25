import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row, Col } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.addModal} toggle={props.handleToggle}>
        <ModalHeader toggle={props.handleToggle}>Add Planet</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              name: "",
              rotation_period: "",
              orbital_period: "",
              diameter: "",
              climate: "",
              gravity: "",
              terrain: "",
              population: "",
              surface_water: "",
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Required"),
              rotation_period: Yup.string().required("Required"),
              orbital_period: Yup.string().required("Required"),
              diameter: Yup.string().required("Required"),
              climate: Yup.string().required("Required"),
              gravity: Yup.string().required("Required"),
              terrain: Yup.string().required("Required"),
              population: Yup.string().required("Required"),
              surface_water: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              props.submitData();
            }}>
            {({ isSubmitting }) => (
              <Form className="p-2">
                <Row className="my-2">
                  <Col>
                    <Label for="name">Planet Name :</Label>
                  </Col>
                  <Col>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" className="errorMsg" />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Label for="rotation_period">Rotation Period :</Label>
                  </Col>
                  <Col>
                    <Field type="text" name="rotation_period" />
                    <ErrorMessage name="rotation_period" component="div" className="errorMsg" />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Label for="orbital_period">Orbital Period :</Label>
                  </Col>
                  <Col>
                    <Field type="text" name="orbital_period" />
                    <ErrorMessage name="orbital_period" component="div" className="errorMsg" />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Label for="diameter">Diameter :</Label>
                  </Col>
                  <Col>
                    <Field type="text" name="diameter" />
                    <ErrorMessage name="diameter" component="div" className="errorMsg" />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Label for="climate">Climate :</Label>
                  </Col>
                  <Col>
                    <Field type="text" name="climate" />
                    <ErrorMessage name="climate" component="div" className="errorMsg" />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Label for="gravity">Gravity :</Label>
                  </Col>
                  <Col>
                    <Field type="text" name="gravity" />
                    <ErrorMessage name="gravity" component="div" className="errorMsg" />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Label for="terrain">Terrain :</Label>
                  </Col>
                  <Col>
                    <Field type="text" name="terrain" />
                    <ErrorMessage name="terrain" component="div" className="errorMsg" />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Label for="population">Population :</Label>
                  </Col>
                  <Col>
                    <Field type="text" name="population" />
                    <ErrorMessage name="population" component="div" className="errorMsg" />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Label for="surface_water">Surface Water :</Label>
                  </Col>
                  <Col>
                    <Field type="text" name="surface_water" />
                    <ErrorMessage name="surface_water" component="div" className="errorMsg" />
                  </Col>
                </Row>
                <Row>
                  <button className=" mt-3 btn btn-success" type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Row>
              </Form>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.handleToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddModal;
