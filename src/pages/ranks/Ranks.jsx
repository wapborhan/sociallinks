import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useMetaData from "../../hooks/useMetaData";
import RankList from "./RankList";
import { AuthContex } from "../../provider/AuthProvider";

const Ranks = () => {
  useMetaData("Ranks");
  const { loading } = useContext(AuthContex);
  const axiosPublic = useAxiosPublic();
  const [rankUsers, setRankUser] = useState();

  console.log(rankUsers);

  useEffect(() => {
    const fetchRanker = async () => {
      try {
        const res = await axiosPublic.get(`ranks`);
        setRankUser(res.data);
      } catch (error) {
        console.error("Error fetching liked users:", error);
      }
    };
    fetchRanker();
  }, [axiosPublic]);

  return (
    <div className="sr-content pt--30 mt--80">
      <div className="container">
        <div className="sect-main">
          {/* <!-- Start Portfolio Area --> */}
          <div className="rn-portfolio-area " id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <span className="subtitle">
                      Visit portfolio and keep your feedback
                    </span>
                    <h2 className="title">Ranks</h2>
                  </div>
                </div>
              </div>
              {loading ? (
                "Loading..."
              ) : rankUsers ? (
                rankUsers.map((user, idx) => <RankList key={idx} user={user} />)
              ) : (
                <div className="text-center mt-5">No User Found!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranks;
