
import './App.css';
 import React from 'react'
 import Circle from './components/Circle'
import './style.css'
 import UserGrid from './components/UserGrid'
 import NavBar from "./components/NavBar";
 import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import axios from 'axios';
//import React, { useState, useEffect } from 'react';
// import UserList from './UserList'
// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const response = await axios.get('https://random-data-api.com/api/v2/users');
//         const userData = response.data;
//         setUsers(userData);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchUserData();
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <UserList  users={users}/>
//     </div>
//   );
// }
// function App() {
//   return (
//          <div>
//            {/* <Circle/> */}
//            <h1>user grid</h1>
//            <UserGrid/>
//          </div>
//        );
//      }
// export default App;


// const App = () => {
//   return (
//     <div>
//       <h1>User Grid</h1>
//       <UserGrid />
//     </div>
//   );
// };

// export default App;

//import "./App.css";
// import NavBar from "./components/NavBar";
// import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

// import { About } from "./components/Pages/About";
// import { Logout } from "./components/Pages/Logout";
// import { Profile } from "./components/Pages/Profile";


// function App() {
  // class App extends React.Component {
  //   render() {
  // return (
  //   <>
  //     <Router>
  //       <NavBar />

  //       <div className="pages">
  //         <Routes>
  //           <Route path="/" element={<Circle />} />
  //           <Route path="/userGrid" element={<UserGrid />} />
//              <Route path="/profile" element={<Profile />} />
//             <Route path="/logout" element={<Logout />} /> 
            
//            </Routes>
//         </div>
//       </Router>
      
//   <div>
//     <Circle/>
//   </div>
//   </>
  
//   );
   
// }
//   }

//   export default App;

  


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Circle />} />
            <Route path="/userGrid" element={<UserGrid />} />
            <Route path="/notFound" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

  



