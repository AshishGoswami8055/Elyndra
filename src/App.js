import './App.scss';
import AllRoutes from './Router/AllRoutes';
import Navbar from './Components/Navbar';
import "./assets/css/MediaQuery.scss"

function App() {
  return (
    <>
      <Navbar/>
      <AllRoutes/>
    </>
  );
}

export default App;
