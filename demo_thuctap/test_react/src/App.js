// import logo from './logo.svg';
// import './App.css';
// import { clusterApiUrl, Connection, PublicKey } from "sonala"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          <h2>Con cho hehe</h2>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListAll from "./ListAll";
import 'bootstrap/dist/css/bootstrap.css';
import CreateNFT from "./CreateNFT";
import GetDetails from "./GetDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ListAll />} />
          <Route exact path="/get-details" element={<GetDetails />} />
          <Route  path="/createNFT" element={<CreateNFT />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
