import React, { Component } from 'react';
import './Login.css';
import login from './Images/login.png';

import { GoogleLogin, GoogleLogout } from 'react-google-login';


const CLIENT_ID = '548404367271-v2kt4a4qn8knj84ad98uhksolfdhstj7.apps.googleusercontent.com';

 class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      userDetails: {},
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        userDetails: response.profileObj,
        accessToken: response.accessToken
      }));
    }
    <p1> Welcome {this.state.userDetails.givenName}{" "}
                {this.state.userDetails.familyName}</p1>
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      userDetails: {},
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }
  render() {
        return(
      
<div className='image' >
            
        <img  className="image1" src={login} alt="login" />
        <div className='centered'>Web App <br/> Task 
        <p> Lorem Ipsum is simply dummy text of <br/> the printing and typesetting industry.</p>

        <div className='login-button'>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='LOGOUT'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={CLIENT_ID}
          buttonText='LOGIN | SIGNUP'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
    

    
    <i class="fas fa-play-circle">
      <a href="https://www.youtube.com/channel/UCPgCZNqUo3aaIfwtvXinAXw" className='youtube'> GO TO YOUTUBE </a>
    </i>
    
    <div className='welcome'> Good To See You Here {this.state.userDetails.givenName}{" "}
                {this.state.userDetails.familyName}</div>
        </div>
        
        </div>
       
        <div className='extrasection'>
<a href="#footer"><i class="fa fa-angle-down"></i>
  </a>
        </div>
        <section id="footer"><span>CREATED BY DINI JAIN</span></section>
          
        
        </div>
        
    )
  }
}
export default Login;