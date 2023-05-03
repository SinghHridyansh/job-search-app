import React from "react";
import { useState, useEffect } from "react";
import "../UserList/UserList.css";
import UserCard from "../User Card/UserCard";
import Loader from "../Loader";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const UserList = () => {
  const [data, setdata] = useState({});
  const { name } = useContext(AuthContext);

  // const getData = async () => {
  //   const response = await fetch("https://api.github.com/users");
  //   const data = await response.json();
  //   setdata(data);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    if (name !== "") {
      fetch(`https://api.github.com/users/${name}`)
        .then((response) => response.json())
        .then((data) => {
          setdata(data);
          console.log(data);
        });

      console.log("1st is working");
    } else {
      fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((data) => {
          setdata(data);
        });
    }
  }, [name]);

  return (
    <div className="UserList">
      {data[0] !== undefined ? (
        <>
          {data.map((user, key) => (
            <UserCard
              keys={key}
              img={user.avatar_url}
              username={user.login}
              followers={user.followers_url}
              following={user.following_url}
            />
          ))}
        </>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default UserList;

// const UserList = () => {
//   const [data, setdata] = useState({});

//   const getData = async () => {
//     const response = await fetch("https://api.github.com/users");
//     const data = await response.json();
//     setdata(data);
//     console.log(data);
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div className="UserList">
//       {data[0] !== undefined ? (
//         <>
//           {data.map((user, key) => (
//             <UserCard
//               keys={key}
//               img={user.avatar_url}
//               username={user.login}
//               followers={user.followers_url}
//               following={user.following_url}
//             />
//           ))}
//         </>
//       ) : (
//         <div>
//           <Loader />
//         </div>
//       )}
//     </div>
//   );
// };
