import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import CheckOut from './CheckOut';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
       <Route path='/checkout'
       element={
        <>
       
        <Header/>
         <CheckOut/>
        </>
       }
       />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
