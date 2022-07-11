import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, message } from "antd";
import "../resources/authentication.css";
import axios from "axios";
import Spinner from "../components/Spinner";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(true);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/users/register", values);
      message.success("Registertion Successful");
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("expense-tracker")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="register">
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center  h-100">
        <div className="col-md-5">
          <div className="lottie">
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_l5o1uey5.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{ marginRight: "50px" }}
            ></lottie-player>
          </div>
        </div>
        <div className="col-md-5">
          <Form
            layout="vertical"
            onFinish={onFinish}
            style={{ marginLeft: "30px" }}
          >
            <h1>CREATE ACCOUNT</h1>
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Register, Click here to Login</Link>
              <button className="primary" type="submit">
                Register
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
