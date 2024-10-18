import React, { useState } from 'react';
import { loginAPI } from '../Services/allAPIs'; 
import {useNavigate} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

function Login() {
  const navigate= useNavigate()

  const [userData, setuserData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => { 
    e.preventDefault();
    
    if (!userData.email || !userData.password) {
        alert("Please enter both email and password.");
      return; 
    }
    
    try {
      const result = await loginAPI(userData); 
      console.log(result);

      if (result.status === 200) {
        sessionStorage.setItem("username", result.data.existingUser.username);
        sessionStorage.setItem("token", result.data.token);
        alert("Login success");
        
       
        setuserData({
          email: "",
          password: ""
        });
        
        
        navigate('/patientdashboard'); 
      }else {
        alert("Invalid email or password."); 
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again."); 
    }
    
    console.log(userData); 
  };

  return (
    // header
    <>
          <Header/>

            <div className='container'>
              <div className='row justify-content-center mt-5'>
                <div className='col-12 col-sm-8 col-md-6 col-lg-4 bg-light p-5 rounded'>
                  <main className="form-signin w-100 m-auto">
                    <form onSubmit={handleSubmit}>
                    <p>HealthCare</p>
              <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={userData.email} 
                  onChange={(e) => setuserData({ ...userData, email: e.target.value })} 
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating ">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={userData.password} // Correctly bind to userData
                  onChange={(e) => setuserData({ ...userData, password: e.target.value })} 
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className=" text-start my-3">
      
              
              </div>
              <button className="btn btn-primary w-100 py-2" type="submit">
                Sign in
              </button>
              <p className="mt-5 mb-3 text-body-secondary text-center">© 2017–2024</p>
            </form>
          </main>
        </div>
      </div>
    </div>

    {/* footer */}
    <Footer/>
    </>
  );
}

export default Login;
