import './App.css';
import { Route , Routes } from 'react-router-dom';


import LoginPage from './Auth/Login';
import RegisterPage from './Auth/Register';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage />}/>

     </Routes>
    </div>
  );
}

export default App;
