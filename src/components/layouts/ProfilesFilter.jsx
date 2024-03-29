"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MySpinner from "../MySpinner";

const ProfilesFilter = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [genderFilter, setGenderFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [religionFilter, setReligionFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [profileFilter, setProfileFilter] = useState("");
  const [educationFilter, setEducationFilter] = useState(""); // New state for education
  const [maritalStatusFilter, setMaritalStatusFilter] = useState("");
  const [show, setShow] = useState(false);
  const [requesterId, SetrequesterId] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  // useEffect(() => {
  // }, []);
  useEffect(() => {
    SetrequesterId(localStorage.getItem("loggedinUser"));
    axios
      .get("/api/auth/all-users")
      .then((res) => {
        let array1 = res?.data?.data;
        const updatedUsers = array1.filter((user) => user._id !== requesterId);
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [requesterId]);

  const filterUsers = () => {
    let newFilteredUsers = users.filter((user) => {
      // Implement your filtering logic here
      let isGenderMatch = !genderFilter || user.gender === genderFilter;
      let isAgeMatch =
        !ageFilter ||
        (user.age >= parseInt(ageFilter.split("-")[0], 10) &&
          user.age <= parseInt(ageFilter.split("-")[1], 10));
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
      let isEducationMatch =
        !educationFilter || user.education === educationFilter;
      let isMaritalStatusMatch =
        !maritalStatusFilter || user.maritalStatus === maritalStatusFilter;

      return (
        isGenderMatch &&
        isAgeMatch &&
        isReligionMatch &&
        isLocationMatch &&
        isAvailabilityMatch &&
        isProfileMatch &&
        isEducationMatch &&
        isMaritalStatusMatch
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
    if (!requesterId) {
      toast.error("Register to send a Request");
      setTimeout(() => {
        router.push("/signup");
      }, 3000);
      return;
    }

    try {
      const res = await axios.post("/api/chat/addConversation", {
        sender: requesterId,
        receiver: requestedUserId, // Ensure correct spelling here
      });

      if (res.status === 200) {
        toast.success("Redirecting To Chat Page");
        setTimeout(() => {
          router.push(`/chat-list/${requesterId}`);
        }, 3000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleSortChange = (sortOption) => {
    let sortedUsers = [...filteredUsers];

    switch (sortOption) {
      case "newest":
        sortedUsers.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      case "oldest":
        sortedUsers.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
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
              <div className="col-md-3">
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
                      <option value="Buddhist">Buddhist</option>
                    </select>
                  </div>
                </div>
                <div className="filt-com lhs-cate">
                  <h4>
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                    Education
                  </h4>
                  <div className="form-group">
                    <select
                      className="chosen-select"
                      onChange={(e) => setEducationFilter(e.target.value)}
                      value={educationFilter}
                    >
                      <option value="">Select Education</option>
                      <option value="graduate">Graduate</option>
                      <option value="ssc">SSC</option>
                      <option value="hsc">HSC</option>
                      <option value="postgraduate">Postgraduate</option>
                    </select>
                  </div>
                </div>
                {/* <!-- END --> */}
                {/* <!-- START --> */}
                <div className="filt-com lhs-cate">
                  <h4>
                    <i className="fa fa-heart" aria-hidden="true"></i> Marital
                    Status
                  </h4>
                  <div className="form-group">
                    <select
                      className="chosen-select"
                      onChange={(e) => setMaritalStatusFilter(e.target.value)}
                      value={maritalStatusFilter}
                    >
                      <option value="">Select Marital Status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widow">Widow</option>
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
                    <option value="Maharashtra">Maharashtra</option>
                    
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
                {loading ? (
                  <div className="d-flex justify-content-center align-items-start w-100 h-100 pt-5">
                    <MySpinner />
                  </div>
                ) : (
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
                              <Link href={`/profile-details/${elem._id}`}>
                                <img
                                  src={
                                    elem.images ||
                                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                  }
                                  alt={elem.name}
                                />
                              </Link>
                              <div
                                className="pro-ave"
                                title="User currently available"
                              >
                                <span className="pro-ave-yes"></span>
                              </div>
                              <div className="pro-avl-status">
                                <h5 className="text-white">Available Online</h5>
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
                                <span className="text-white">
                                  {elem.degree}
                                </span>
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
                                  Chat Now
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
                )}
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
