import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, onClose }) => {
  const [view, setView] = useState('login'); 
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPass: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      // Create a nice name from email: chandru@gmail.com -> Chandru
      const rawName = formData.email.split('@')[0];
      const name = rawName.charAt(0).toUpperCase() + rawName.slice(1);
      onLogin({ name: name, email: formData.email });
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPass) return alert("Passwords do not match!");
    onLogin({ name: formData.name || 'New User', email: formData.email });
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    onLogin({ name: 'Recovered User', email: formData.email });
  };

  const handleGoogleSubmit = (e) => {
    e.preventDefault();
    onLogin({ name: 'Google User', email: 'google@gmail.com' });
  };

  const handleFacebookSubmit = (e) => {
    e.preventDefault();
    onLogin({ name: 'Facebook User', email: 'fb@user.com' });
  };

  const renderContent = () => {
    switch (view) {
      case 'register':
        return (
          <div className="slide-in-view">
            <h2 className="login-title">New Identity 🆕</h2>
            <p className="login-subtitle">Create your secure access profile.</p>
            <form className="login-form" onSubmit={handleRegisterSubmit}>
              <input type="text" name="name" placeholder="First Name" className="login-input" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" className="login-input" onChange={handleChange} required />
              <input type="password" name="password" placeholder="Create Password" className="login-input" onChange={handleChange} required />
              <input type="password" name="confirmPass" placeholder="Confirm Password" className="login-input" onChange={handleChange} required />
              <button type="submit" className="login-btn glow-hover-blue">Register & Enter</button>
            </form>
            <p className="switch-auth">Already have an ID? <span className="link-text" onClick={() => setView('login')}>Login</span></p>
          </div>
        );

      case 'forgot':
        return (
          <div className="slide-in-view">
            <h2 className="login-title">Recovery 🔐</h2>
            <p className="login-subtitle">Enter email to restore system access.</p>
            <form className="login-form" onSubmit={handleForgotSubmit}>
              <input type="email" name="email" placeholder="Registered Email" className="login-input" onChange={handleChange} required />
              <button type="submit" className="login-btn glow-hover-orange">Recover Access</button>
            </form>
            <p className="switch-auth"><span className="link-text" onClick={() => setView('login')}>← Back to Login</span></p>
          </div>
        );

      case 'google':
        return (
          <div className="slide-in-view google-theme">
            {/* BACK BUTTON TOP LEFT */}
            <span className="back-arrow-top-left" onClick={() => setView('login')}>← Back</span>
            
            {/* NO LOGO - Just Title */}
            <h3 style={{color: '#EA4335', marginTop: '40px'}}>Google Sign-In</h3>
            
            <form className="login-form" onSubmit={handleGoogleSubmit}>
              <input type="email" name="email" placeholder="Gmail Address" className="login-input" onChange={handleChange} required />
              <input type="password" name="password" placeholder="Google Password" className="login-input" onChange={handleChange} required />
              <button type="submit" className="login-btn" style={{background: '#EA4335'}}>Sign in</button>
            </form>
          </div>
        );

      case 'facebook':
        return (
          <div className="slide-in-view facebook-theme">
            {/* BACK BUTTON TOP LEFT */}
            <span className="back-arrow-top-left" onClick={() => setView('login')}>← Back</span>

            {/* NO LOGO - Just Title */}
            <h3 style={{color: '#1877F2', marginTop: '40px'}}>Facebook Login</h3>

            <form className="login-form" onSubmit={handleFacebookSubmit}>
              <input type="email" name="email" placeholder="Email or Phone" className="login-input" onChange={handleChange} required />
              <input type="password" name="password" placeholder="Facebook Password" className="login-input" onChange={handleChange} required />
              <button type="submit" className="login-btn" style={{background: '#1877F2'}}>Continue</button>
            </form>
          </div>
        );

      case 'login':
      default:
        return (
          <div className="slide-in-view">
            <h2 className="login-title">System Access 🔒</h2>
            <p className="login-subtitle">Authenticate via Secure AI Gateway</p>

            <form className="login-form" onSubmit={handleLoginSubmit}>
              <input type="email" name="email" placeholder="Enter Your Email" className="login-input" onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" className="login-input" onChange={handleChange} required />
              <div className="form-options"><span className="link-text" onClick={() => setView('forgot')}>Lost Credentials?</span></div>
              <button type="submit" className="login-btn glow-hover-blue">Initiate Login</button>
            </form>

            <div className="divider"><span>OR AUTHENTICATE WITH</span></div>

            <div className="social-login-buttons">
              <button type="button" className="social-btn google" onClick={() => setView('google')}>
                <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
              </button>
              <button type="button" className="social-btn facebook" onClick={() => setView('facebook')}>
                <svg width="20" height="20" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/></svg>
                Facebook
              </button>
            </div>
            <p className="switch-auth">New User? <span className="link-text" onClick={() => setView('register')}>Register ID</span></p>
          </div>
        );
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-card">
        {/* CLOSE BUTTON */}
        <button title="Close" onClick={onClose} style={{position:'absolute',top:'20px',right:'25px',zIndex:1000,background:'white',border:'1px solid rgb(224,224,224)',borderRadius:'50%',width:'45px',height:'45px',fontSize:'20px',fontWeight:'bold',color:'rgb(51,51,51)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',boxShadow:'rgba(0,0,0,0.15) 0px 4px 12px',transition:'transform 0.2s,background 0.2s',transform:'scale(1)'}} onMouseOver={(e)=>e.currentTarget.style.transform='scale(1.1)'} onMouseOut={(e)=>e.currentTarget.style.transform='scale(1)'}>✕</button>
        {renderContent()}
      </div>
    </div>
  );
};

export default Login;