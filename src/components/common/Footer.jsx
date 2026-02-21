import React from 'react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ marginTop: 'auto', width: '100%', background: '#232f3e', color: 'white' }}>
      <div 
        onClick={scrollToTop} 
        style={{
          background: '#37475a', color: 'white', textAlign: 'center', 
          padding: '15px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px'
        }}
      >
        Back to top
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '40px 20px', flexWrap: 'wrap' }}>
        <div>
          <h4 style={{marginBottom: '10px'}}>Connect with Us</h4>
          <p style={{cursor: 'pointer', color: '#ddd', fontSize: '13px'}}>Facebook</p>
          <p style={{cursor: 'pointer', color: '#ddd', fontSize: '13px'}}>Twitter</p>
          <p style={{cursor: 'pointer', color: '#ddd', fontSize: '13px'}}>Instagram</p>
        </div>
        <div>
          <h4 style={{marginBottom: '10px'}}>Make Money</h4>
          <p style={{cursor: 'pointer', color: '#ddd', fontSize: '13px'}}>Sell on shoes.in</p>
          <p style={{cursor: 'pointer', color: '#ddd', fontSize: '13px'}}>Affiliate Marketing</p>
        </div>
        <div>
          <h4 style={{marginBottom: '10px'}}>Help</h4>
          <p style={{cursor: 'pointer', color: '#ddd', fontSize: '13px'}}>Your Account</p>
          <p style={{cursor: 'pointer', color: '#ddd', fontSize: '13px'}}>Customer Service</p>
        </div>
      </div>

      <div style={{ background: '#131921', color: '#ccc', textAlign: 'center', padding: '20px', fontSize: '13px' }}>
        {/* BRAND NAME UPDATED HERE */}
        <p>© 1996-2026, shoes.in, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;