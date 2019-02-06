import React from 'react';
import { Player } from 'video-react';

const Header = () => {
  return(
    <div style={{marginTop:150}}>
      <h1 style={{marginLeft: 120}}>NARCOS</h1>
      <div style={{marginLeft:100}}>
      <button style={{margin:20,height:30,width:100}}>Play</button>
      </div>
      <p style={{ marginLeft: 120,width:500}}>The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series.</p>
    </div>
  )
}

export default Header;
