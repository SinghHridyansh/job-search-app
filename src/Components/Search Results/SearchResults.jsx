import React from "react";
import { useState, useEffect } from "react";
import UserCard from "../User Card/UserCard";
import Loader from "../Loader";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import "../Search Results/SearchResults.css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const SearchResults = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [bPress, setBPress] = useState(false);
  const { name, setname } = useContext(AuthContext);

  const handleButtonClick = () => {
    setname(query);
    setBPress(true);
  };

  useEffect(
    () => {
      if (bPress) {
        const fetchUserData = async () => {
          try {
            const response = await fetch(
              `http://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d2ff2524&app_key=996db8252b257fdf69f89806a9f85818&results_per_page=20&what=${name}&content-type=application/json`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch Data");
            }
            const data = await response.json();
            setJobs(data.results);

            console.log(data.results);
            console.log("button pressed");
          } catch (error) {
            console.error(error);
          }
        };
        fetchUserData();
        console.log("button pressed");
      }
    },
    [name],
    [bPress]
  );

  return (
    <div className="home-main">
      <div className="home">
        <div className="h-left">
          <h1>
            Find Your <span>Dream Job</span> With Your Interest And Skills
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ad
            ipsam, consequatur distinctio, itaque repudiandae dicta provident
            vel obcaecati saepe modi debitis sequi soluta tenetur sit maxime
            voluptatum placeat neque?
          </p>
          <label htmlFor="">
            Enter the programming language you wish to take a job in.
          </label>

          <div className="search-box">
            <input
              type="text"
              value={query}
              placeholder="Java, Python, Javascript etc"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleButtonClick}>Search</button>
          </div>
        </div>
        <div className="h-right"></div>
      </div>
      <div className="white-strip"></div>
      <div className="results-block">
        <h4>Showing results for {query} developer roles.</h4>
        <div className="search-results">
          {jobs[0] !== undefined ? (
            <>
              {jobs.map((job, key) => (
                <UserCard
                  key={job.id}
                  Cname={job.company.display_name}
                  role={job.title}
                  desc={job.description}
                  smin={job.salary_min}
                  smax={job.salary_max}
                  loc={job.location.display_name}
                  joblink={job.redirect_url}
                />
              ))}
            </>
          ) : (
            <div>
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

// useEffect(() => {
//   const fetchUserData = async () => {
//     try {
//       const response = await fetch(
//         `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=d2ff2524&app_key=996db8252b257fdf69f89806a9f85818&results_per_page=20&what=${name}&content-type=application/json`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch Data");
//       }
//       const data = await response.json();
//       setJobs(data);
//       console.log("====================================");
//       console.log(data);
//       console.log("====================================");
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   fetchUserData();
// }, [name]);

// if (!userProfile) {
//   return <div>{/* <Loader /> */}</div>;
// }

// `https://random-data-api.com/api/v2/users?size=10&is_xml=true`

// `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=d2ff2524&app_key=996db8252b257fdf69f89806a9f85818&results_per_page=20&what=${name}&content-type=application/json`

// useEffect(
//   () => {
//     if (bPress) {
//       const fetchUserData = async () => {
//         try {
//           const response = await fetch(
//             `https://random-data-api.com/api/v2/users?size=10&is_xml=true`
//           );
//           if (!response.ok) {
//             throw new Error("Failed to fetch Data");
//           }
//           const data = await response.json();
//           setJobs(data);

//           console.log(data);
//           console.log("button pressed");
//         } catch (error) {
//           console.error(error);
//         }
//       };
//       fetchUserData();
//       console.log("button pressed");
//     }
//   },
//   [name],
//   [bPress]
// );

// https://api.adzuna.com/v1/api/overviews/4282108708?app_id=d2ff2524&app_key=996db8252b257fdf69f89806a9f85818

// https://api.adzuna.com/v1/api/overviews/4282108708?app_id=d2ff2524&app_key=996db8252b257fdf69f89806a9f85818
