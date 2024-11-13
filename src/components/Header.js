// src/components/Header.js
import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: 'darkblue',
    color: 'white',
    padding: '15px',
    fontSize: '24px',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  };

  const buttonStyle = {
    backgroundColor: '#006699',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize:'9px',
    alignItems: 'right',
  };

  // Responsive styles using media queries
  const responsiveStyle = {
    ...headerStyle,
    padding: '10px',
    fontSize: '18px',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };



  return (
    <div style={window.innerWidth < 600 ? responsiveStyle : headerStyle}>
      <div>
      <h1 style={{ fontSize: window.innerWidth < 600 ? '20px' : '24px' }}>
        Loyola - Icam
      </h1>
      <h1 style={{ fontSize: window.innerWidth < 600 ? '16px' : '24px' }}>
        College of Engineering and Technology
      </h1>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px',width:'45px' }}>
        <button style={buttonStyle}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
