"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProfilesFilter = () => {
  const [users, setUsers] = useState([]);

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [genderFilter, setGenderFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [religionFilter, setReligionFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [profileFilter, setProfileFilter] = useState("");
  const [show, setShow] = useState(false);
  const requesterId = localStorage.getItem("loggedinUser");

  useEffect(() => {
    axios
      .get("/api/auth/all-users")
      .then((res) => {
        const updatedUsers = res.data.data.filter(
          (user) => user._id !== requesterId
        );
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers); // Set filteredUsers to all users by default
      })
      .catch((err) => console.log(err));
  }, []);

  const filterUsers = () => {
    let newFilteredUsers = users.filter((user) => {
      // Implement your filtering logic here
      let isGenderMatch = !genderFilter || user.gender === genderFilter;
      let isAgeMatch = !ageFilter || user.age.toString() === ageFilter;
      let isReligionMatch = !religionFilter || user.religion === religionFilter;
      let isLocationMatch = !locationFilter || user.city === locationFilter;
      let isAvailabilityMatch =
        !availabilityFilter ||
        (availabilityFilter === "available" && user.isVerfied) ||
        (availabilityFilter === "offline" && !user.isVerfied);
      let isProfileMatch =
        !profileFilter ||
        (profileFilter === "all" && true) ||
        (profileFilter === "premium" && user.isAdmin) ||
        (profileFilter === "free" && !user.isAdmin);

      return (
        isGenderMatch &&
        isAgeMatch &&
        isReligionMatch &&
        isLocationMatch &&
        isAvailabilityMatch &&
        isProfileMatch
      );
    });

    setFilteredUsers(newFilteredUsers.length > 0 ? newFilteredUsers : users);
  };

  useEffect(() => {
    filterUsers();
  }, [
    genderFilter,
    ageFilter,
    religionFilter,
    locationFilter,
    availabilityFilter,
    profileFilter,
    users,
  ]);

  const sendRequestHandler = async (requestedUserId) => {
    // Check if requesterId is already present
    const isRequesterIdPresent = filteredUsers.some((user) =>
      user.connectionRequests.some(
        (request) => request.requester === requesterId
      )
    );

    if (isRequesterIdPresent) {
      console.error("Error: RequesterId already present in connectionRequests");
      toast.info("You've already sent a request to this user");
      return; // Do not proceed with sending the request
    }

    // If requesterId is not present, proceed with sending the request
    try {
      const res = await axios.post("/api/connections/sendRequest/", {
        requesterId: requesterId,
        requestedUserId: requestedUserId,
      });

      console.log(res.data);

      if (res.data.success === true) {
        console.log("Request sent successfully");
      }

      toast.success("Request Sent Successfully");
    } catch (err) {
      console.error("Error sending request:", err);
      toast.error("Something went wrong");
    }
  };
  const handleSortChange = (sortOption) => {
    let sortedUsers = [...filteredUsers];
  
    switch (sortOption) {
      case 'newest':
        sortedUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'oldest':
        sortedUsers.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      default:
        // Default to most relevant
        break;
    }
  
    setFilteredUsers(sortedUsers);
  };

  // console.log(filteredUser)

  return (
    <>
      {/* <!-- START --> */}
      <section>
        <div className="all-weddpro all-jobs all-serexp chosenini">
          <div className="container">
            <div className="row">
              <div className="col-md-3 fil-mob-view">
                <span className="filter-clo">+</span>
                {/* <!-- START --> */}
                <div className="filt-com lhs-cate">
                  <h4>
                    <i className="fa fa-search" aria-hidden="true"></i> I am
                    looking for
                  </h4>
                  <div className="form-group">
                    <select
                      className="chosen-select"
                      onChange={(e) => setGenderFilter(e.target.value)}
                      value={genderFilter}
                    >
                      <option value="">I am looking for</option>
                      <option value="male">Men</option>
                      <option value="female">Women</option>
                    </select>
                  </div>
                </div>
                {/* <!-- END --> */}
                {/* <!-- START --> */}
                <div className="filt-com lhs-cate">
                  <h4>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>Age
                  </h4>
                  <div className="form-group">
                    <select
                      className="chosen-select"
                      onChange={(e) => setAgeFilter(e.target.value)}
                      value={ageFilter}
                    >
                      <option value="">Select age</option>
                      <option value="18-30">18 to 30</option>
                      <option value="31-40">31 to 40</option>
                      <option value="41-50">41 to 50</option>
                      {/* Add similar options for other age ranges */}
                    </select>
                  </div>
                </div>
                {/* <!-- END --> */}
                {/* <!-- START --> */}
                <div className="filt-com lhs-cate">
                  <h4>
                    <i className="fa fa-bell-o" aria-hidden="true"></i>Select
                    Religion
                  </h4>
                  <div className="form-group">
                    <select
                      className="chosen-select"
                      onChange={(e) => setReligionFilter(e.target.value)}
                      value={religionFilter}
                    >
                      <option value="">Select Religion</option>
                      <option value="">Any</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Muslim">Muslim</option>
                      <option value="Jain">Jain</option>
                      <option value="Christian">Christian</option>
                    </select>
                  </div>
                </div>
                {/* <!-- END --> */}
                {/* <!-- START --> */}
                <div className="form-group">
                  <select
                    className="chosen-select"
                    onChange={(e) => setLocationFilter(e.target.value)}
                    value={locationFilter}
                  >
                    <option value="">Select Location</option>
                    <option value="Mumbai">Chennai</option>
                    <option value="Pune">Bangaluru</option>
                    <option value="Nashik">Delhi</option>
                  </select>
                </div>
                {/* </div> */}
                {/* <!-- END --> */}
                {/* <!-- START --> */}
                <div className="filt-com lhs-rati lhs-avail lhs-cate">
                  <h4>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{" "}
                    Availablity
                  </h4>
                  <ul>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_avail"
                          className="rating_check"
                          id="exav1"
                          checked
                        />
                        <label for="exav1">All</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_avail"
                          className="rating_check"
                          id="exav2"
                        />
                        <label for="exav2">Available</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_avail"
                          className="rating_check"
                          id="exav3"
                        />
                        <label for="exav3">Offline</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- END --> */}

                {/* <!-- START --> */}
                <div className="filt-com lhs-rati lhs-ver lhs-cate">
                  <h4>
                    <i className="fa fa-shield" aria-hidden="true"></i>Profile
                  </h4>
                  <ul>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_veri"
                          className="rating_check"
                          id="exver1"
                          checked
                        />
                        <label for="exver1">All</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_veri"
                          className="rating_check"
                          id="exver2"
                        />
                        <label for="exver2">Premium</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_veri"
                          className="rating_check"
                          id="exver3"
                        />
                        <label for="exver3">Free</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- END --> */}
                {/* <!-- START --> */}
                <div className="filt-com filt-send-query">
                  <div className="send-query text-white">
                    <h5 className="text-white">What are you looking for?</h5>
                    <p className="text-white">We will help you to arrage the best match to you.</p>
                    <Link href="/contact" className="text-white">
                      Send your queries
                    </Link>
                  </div>
                </div>
                {/* <!-- END --> */}
              </div>
              <div className="col-md-9">
                <div className="short-all">
                  <div className="short-lhs">
                    Showing <b>{filteredUsers.length}</b> profiles
                  </div>
                  <div className="short-rhs">
                    <ul>
                      <li>Sort by:</li>
                      <li>
                      <div className="form-group">
  <select
    className="chosen-select"
    onChange={(e) => handleSortChange(e.target.value)}
  >
    <option value="">Most relevant</option>
    <option value="newest">Date listed: Newest</option>
    <option value="oldest">Date listed: Oldest</option>
  </select>
</div>
                      </li>
                      <li>
                        <div className="sort-grid sort-grid-1">
                          <i className="fa fa-th-large" aria-hidden="true"></i>
                        </div>
                      </li>
                      <li>
                        <div className="sort-grid sort-grid-2 act">
                          <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="all-list-sh">
                  <ul>
                    {filteredUsers.map((elem, ind) => (
                      <li key={elem._id}>
                        <div
                          className="all-pro-box user-avil-onli"
                          data-useravil="avilyes"
                          data-aviltxt="Available online"
                        >
                          {/* <!--PROFILE IMAGE--> */}
                          <div className="pro-img">
                            <a href="profile-details.html">
                              <img src="images/profiles/4.jpg" alt="" />
                            </a>
                            <div
                              className="pro-ave"
                              title="User currently available"
                            >
                              <span className="pro-ave-yes"></span>
                            </div>
                            <div className="pro-avl-status">
                              <h5>Available Online</h5>
                            </div>
                          </div>
                          {/* <!--END PROFILE IMAGE--> */}

                          {/* <!--PROFILE NAME--> */}
                          <div className="pro-detail">
                            <h4>
                              <Link href={`/profile-details/${elem._id}`}>
                                {elem.name}
                              </Link>
                            </h4>
                            <div className="pro-bio">
                              <span className="text-white">{elem.degree}</span>
                              <span className="text-white">
                                {elem.position}
                              </span>
                              <span className="text-white">{`${elem.age} Years old`}</span>
                              <span className="text-white">{`Height: ${elem.height} Cms`}</span>
                            </div>

                            <div className="">
                              <button
                                className="py-1 px-3 rounded-pill bg-success text-white"
                                onClick={() => sendRequestHandler(elem._id)}
                              >
                                Send Interest
                              </button>

                              <Link
                                href={`/profile-details/${elem._id}`}
                                className="py-1 px-3 rounded-pill"
                              >
                                More detaiils
                              </Link>
                            </div>
                          </div>
                          {/* <!--END PROFILE NAME--> */}
                          {/* <!--SAVE--> */}
                          <span
                            className="enq-sav"
                            data-toggle="tooltip"
                            title="Click to save this provile."
                          >
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>
                          </span>
                          {/* <!--END SAVE--> */}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}
    </>
  );
};

export default ProfilesFilter;
