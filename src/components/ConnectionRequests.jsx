"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";

const ConnectionRequests = () => {
  const [activeTab, setActiveTab] = useState("newRequests");
  const [user, setUser] = useState([]);
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const userID = localStorage.getItem("loggedinUser");
  useEffect(() => {
    axios
      .get(`/api/connections/${userID}`)
      .then((res) => {
        console.log(res.data.connectionRequests);
        setUser(res.data.connectionRequests);
      })
      .catch((err) => console.log(err));
  }, [userID]);

  const connections = user;
  const filteredConnections = {
    newRequests: connections.filter(
      (connection) => connection.status === "pending"
    ),
    acceptRequests: connections.filter(
      (connection) => connection.status === "accepted"
    ),
    denyRequests: connections.filter(
      (connection) => connection.status === "denied"
    ),
  };

  const acceptRequestHandler = async (id) => {
    try {
      const response = await axios.post("/api/connections/respondRequest", {
        requesterId: id,
        requestedUserId: userID,
        response: "accepted", // Assuming you want to accept the request
      });

      console.log(response.data);

      // Optionally, you can update the local state to reflect the changes
      // For example, you can remove the accepted request from the 'newRequests' array
    //   setUser((prevUser) => ({
    //     ...prevUser,
    //     newRequests: prevUser?.newRequests?.filter((user) => user.requester._id !== id),
    //   }));
    } catch (error) {
      console.error("Error accepting connection request:", error);
    }
  };


  const finalUsers = filteredConnections.newRequests || null;
  return (
    <>
      <div className="db-inte-main">
        <Nav variant="tabs" activeKey={activeTab} onSelect={handleTabSelect}>
          <Nav.Item>
            <Nav.Link eventKey="newRequests">New requests</Nav.Link>
          </Nav.Item>
        </Nav>

        {finalUsers === null ? (

            <div className="w-100 py-5 my-5" style={{height:"300px"}}>
                <h4>No Requests</h4>
            </div>
        ):(
        <Tab.Content>
          <Tab.Pane
            eventKey="newRequests"
            className={finalUsers ? "d-block opacity-100" : "d-none"}
          >
            <ul>
              {finalUsers?.map((elem) => (
                <li key={elem.requester._id} className="d-flex mb-2">
                  <div className="db-int-pro-1">
                    {" "}
                    <img src="/images/profiles/men5.jpg" alt="" />{" "}
                  </div>
                  <div className="db-int-pro-2">
                    <h4>{elem.requester.name}</h4>
                    <ol className="poi d-flex gap-3 p-0">
                      <li>
                        City: <strong>{elem.requester.city}</strong>
                      </li>
                      <li>
                        Age: <strong>{elem.requester.age}</strong>
                      </li>
                      <li>
                        Height: <strong>{elem.requester.height}</strong>
                      </li>
                      <li>
                        Job: <strong>{elem.requester.position}</strong>
                      </li>
                    </ol>

                    <Link
                      href={`/profile-details/${elem.requester._id}`}
                      className="cta-5"
                    >
                      View full profile
                    </Link>
                  </div>
                  <div className="db-int-pro-3">
                    <button type="button" className="btn btn-success btn-sm" onClick={()=>acceptRequestHandler(elem.requester._id)}>
                      Accept
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                    >
                      Denay
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </Tab.Pane>
        </Tab.Content>
        )}
      </div>
    </>
  );
};

export default ConnectionRequests;
