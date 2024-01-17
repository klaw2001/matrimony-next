// "use client"
import Layout from "@/components/layouts/Layout";
import ProfilesFilter from "@/components/layouts/ProfilesFilter";
import axios from "axios";
import Link from "next/link";

const AllProfiles = () => {
  // const [user , setUsers] = useState([])
  // useEffect(()=>{
  //   axios.get('/api/auth/all-users')
  //   .then((res)=>{
  //     console.log(res)
  //   })
  //   .catch((err)=>console.log(err))
  // },[])

  return (
    <Layout>
      {/* <!-- SUB-HEADING --> */}
      <section>
        <div className="all-pro-head">
          <div className="container">
            <div className="row">
              <h1 className="text-white">Lakhs of Happy Marriages</h1>
              <Link href="/signup" className="text-white">
                Join now for Free{" "}
                <i className="fa fa-handshake-o" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* <!--FILTER ON MOBILE VIEW--> */}
        <div className="fil-mob fil-mob-act">
          <h4>
            Profile filters <i className="fa fa-filter" aria-hidden="true"></i>{" "}
          </h4>
        </div>
      </section>
      {/* <!-- END --> */}

      <ProfilesFilter/>
      
    </Layout>
  );
};

export default AllProfiles;
