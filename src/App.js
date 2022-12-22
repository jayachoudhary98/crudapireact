import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Header from './components/Header';
import ReduxApp from './reduxpractice/ReduxApp';

import { Routess } from './routes/Routes';


function App() {
  return (
    <>
    {/* <ReduxApp/> */}
        <Routess/>
    <Header/>
    {/* <Cakeshop/> */}
     {/* <UserDetails/>
    <AddUser/> */}
    
    <div className='container'>
    
    </div>
    </>
  );
}

export default App;
