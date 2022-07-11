import React from "react";
import { Button, Dropdown, Menu } from "antd";
import "../resources/default-layout.css";
import { useNavigate } from "react-router-dom";

const DefaultLayout = (props) => {
  const user = JSON.parse(localStorage.getItem("expense-tracker"));
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <li
              onClick={() => {
                localStorage.removeItem("expense-tracker");
                navigate("/login");
              }}
            >
              Logout
            </li>
          ),
        },
      ]}
    />
  );
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">Expense Tracker</h1>
        </div>
        <div>
          <Dropdown
            overlay={menu}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <button className="primary">{user.name}</button>
          </Dropdown>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
