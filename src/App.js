import './App.css';
import { Route , Routes } from 'react-router-dom';


import LoginPage from './Auth/Login';
import RegisterPage from './Auth/Register';
import ForgetPassword from './Auth/ForgetPassword';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>

     </Routes>
    </div>
  );
}

export default App;
