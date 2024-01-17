"use client";
import Layout from "@/components/layouts/Layout";
import { getSingleUser } from "@/helpers/getUsers";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PreLoader from "../loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UserProfile = () => {
  const router = useRouter()
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const id = localStorage.getItem("loggedinUser");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getSingleUser(id);
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);
  const handleLogout = async () => {
    try {
      await axios("/api/auth/logout")
      .then((res)=>{
        if(res.data.success === true){
          localStorage.removeItem('token')
          localStorage.removeItem('loggedinUser')
          toast.success('Logout Successful')
          setTimeout(() => {
            
            router.push('/')        
          }, 2000);
        }
      }).catch((err)=>{
        toast.error('Something Went Wrong')
      })
      
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Layout>
      {loading ? (
        <PreLoader />
      ) : (
        <section>
          <div className="db">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-12 db-sec-com">
                      <h2 className="db-tit">Profile settings</h2>
                      <div className="col7 fol-set-rhs">
                        {/* <!--START--> */}
                        <div
                          className="ms-write-post fol-sett-sec sett-rhs-pro"
                          // style=""
                        >
                          <div className="foll-set-tit fol-pro-abo-ico">
                            <h4>Profile</h4>
                          </div>
                          <div className="fol-sett-box">
                            <ul>
                              <li>
                                <div className="sett-lef">
                                  <div className="auth-pro-sm sett-pro-wid">
                                    <div className="auth-pro-sm-img">
                                      <img
                                        src="images/profiles/15.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="auth-pro-sm-desc">
                                      <h5>{user.name}</h5>
                                      <p>{user.isVerified ? "Verified" : "Not Verified"}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="sett-rig">
                                  <button onClick={handleLogout} className="set-sig-out text-white">
                                    Sign Out
                                  </button>
                                </div>
                              </li>
                              <li>
                                <div className="sett-lef">
                                  <div className="sett-rad-left">
                                    <h5>Profile visible</h5>
                                    <p>
                                      You can set-up who can able to view your
                                      profile.
                                    </p>
                                  </div>
                                </div>
                                <div className="sett-rig">
                                  <div className="sett-select-drop">
                                    <select>
                                      <option value="All users">
                                        All users
                                      </option>
                                      <option value="Premium">Premium</option>
                                      <option value="Free">Free</option>
                                      <option value="Free">stealth</option>
                                    </select>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="sett-lef">
                                  <div className="sett-rad-left">
                                    <h5>Who can send you Interest requests?</h5>
                                    <p>
                                      You can set-up who can able to make
                                      Interest request here.
                                    </p>
                                  </div>
                                </div>
                                <div className="sett-rig">
                                  <div className="sett-select-drop">
                                    <select>
                                      <option value="All users">
                                        All users
                                      </option>
                                      <option value="Premium">Premium</option>
                                      <option value="Free">Free</option>
                                    </select>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!--END-->	 */}
                        {/* <!--START--> */}
                        <div
                          className="ms-write-post fol-sett-sec sett-rhs-acc"
                          // style=""
                        >
                          <div className="foll-set-tit fol-pro-abo-ico">
                            <h4>Account</h4>
                            <Link
                              href={`/edit-profile/${id}`}
                              className="sett-edit-btn sett-acc-edit-eve"
                            >
                              <i className="fa fa-edit" aria-hidden="true"></i>{" "}
                              Edit
                            </Link>
                          </div>
                          <div className="fol-sett-box sett-acc-view sett-two-tab">
                            <ul>
                              <li>
                                <div>Full name</div>
                                <div>{user.name}</div>
                              </li>
                              <li>
                                <div>Mobile</div>
                                <div>{user.phone}</div>
                              </li>
                              <li>
                                <div>Email id</div>
                                <div>{user.email}</div>
                              </li>
                              <li>
                                <div>Password</div>
                                <div>**********</div>
                              </li>
                              <li>
                                <div>Profile type</div>
                                <div>{user.isVerified ? "Verified" : "Not Verified"}</div>
                              </li>
                            </ul>
                          </div>
                          <div className="sett-acc-edit">
                            <form className="form-com sett-pro-form">
                              <ul>
                                <li>
                                  <div className="fm-lab">Full name</div>
                                  <div className="fm-fie">
                                    <input type="text" value="vijaya kumar" />
                                  </div>
                                </li>
                                <li>
                                  <div className="fm-lab">Email id</div>
                                  <div className="fm-fie">
                                    <input
                                      type="text"
                                      value="vijaykumar@gmail.com"
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="fm-lab">Password</div>
                                  <div className="fm-fie">
                                    <input type="password" value="dfght3d34" />
                                  </div>
                                </li>
                                <li>
                                  <div className="fm-lab">Confirm password</div>
                                  <div className="fm-fie">
                                    <input type="password" value="asg235sf" />
                                  </div>
                                </li>
                                <li>
                                  <div className="fm-lab">Profile type</div>
                                  <div className="fm-fie">
                                    <select>
                                      <option value="volvo">General</option>
                                      <option value="opel">Bloger</option>
                                      <option value="saab">Business</option>
                                      <option value="saab">Marketer</option>
                                    </select>
                                  </div>
                                </li>
                                <li>
                                  <input
                                    type="submit"
                                    value="Update"
                                    className=""
                                  />
                                  <input
                                    type="reset"
                                    value="Cancel"
                                    className="sett-acc-edi-can"
                                  />
                                </li>
                              </ul>
                            </form>
                          </div>
                        </div>
                        {/* <!--END-->	 */}
                        {/* <!--START--> */}
                        <div
                          className="ms-write-post fol-sett-sec sett-rhs-not"
                          // style=""
                        >
                          <div className="foll-set-tit fol-pro-abo-ico">
                            <h4>Notifications</h4>
                          </div>
                          <div className="fol-sett-box">
                            <ul>
                              <li>
                                <div className="sett-lef">
                                  <div className="sett-rad-left">
                                    <h5>Interest request</h5>
                                    <p>Interest request email notificatios</p>
                                  </div>
                                </div>
                                <div className="sett-rig">
                                  <div className="checkboxes-and-radios">
                                    <input
                                      type="checkbox"
                                      name="checkbox-cats"
                                      id="sett-not-mail"
                                      value="1"
                                      checked=""
                                    />
                                    <label for="sett-not-mail"></label>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="sett-lef">
                                  <div className="sett-rad-left">
                                    <h5>Chat</h5>
                                    <p>New chat notificatios</p>
                                  </div>
                                </div>
                                <div className="sett-rig">
                                  <div className="checkboxes-and-radios">
                                    <input
                                      type="checkbox"
                                      name="checkbox-cats"
                                      id="sett-not-fri"
                                      value="1"
                                      checked=""
                                    />
                                    <label for="sett-not-fri"></label>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="sett-lef">
                                  <div className="sett-rad-left">
                                    <h5>Profile views</h5>
                                    <p>
                                      If any one view your profile means you get
                                      the notifications at end of the day
                                    </p>
                                  </div>
                                </div>
                                <div className="sett-rig">
                                  <div className="checkboxes-and-radios">
                                    <input
                                      type="checkbox"
                                      name="checkbox-cats"
                                      id="sett-not-fol"
                                      value="1"
                                      checked
                                    />
                                    <label for="sett-not-fol"></label>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="sett-lef">
                                  <div className="sett-rad-left">
                                    <h5>New profile match</h5>
                                    <p>You get the profile match emails</p>
                                  </div>
                                </div>
                                <div className="sett-rig">
                                  <div className="checkboxes-and-radios">
                                    <input
                                      type="checkbox"
                                      name="checkbox-cats"
                                      id="sett-not-mes"
                                      value="1"
                                      checked=""
                                    />
                                    <label for="sett-not-mes"></label>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!--END--> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default UserProfile;
