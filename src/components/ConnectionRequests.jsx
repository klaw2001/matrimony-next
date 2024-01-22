"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";

const ConnectionRequests = () => {
  const [activeTab, setActiveTab] = useState("newRequests");
  const [user, setUser] = useState({});
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const userID = localStorage.getItem("loggedinUser");
  useEffect(() => {
    axios
      .get(`/api/auth/singleuser/${userID}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [userID]);

  const connections = user.connectionRequests
  console.log(connections)

  return (
    <>
      <div className="db-inte-main">
        <Nav variant="tabs" activeKey={activeTab} onSelect={handleTabSelect}>
          <Nav.Item>
            <Nav.Link eventKey="newRequests">New requests</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="acceptRequests">Accept requests</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="denyRequests">Deny requests</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="newRequests">
            
          </Tab.Pane>
          <Tab.Pane eventKey="acceptRequests">
            {/* Content for Accept requests tab */}
            {/* ... */}
          </Tab.Pane>
          <Tab.Pane eventKey="denyRequests">
            {/* Content for Deny requests tab */}
            {/* ... */}
          </Tab.Pane>
        </Tab.Content>
      </div>
    </>
  );
};

export default ConnectionRequests;
