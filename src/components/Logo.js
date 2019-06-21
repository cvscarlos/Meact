import React from 'react';
import {Navbar} from 'react-bootstrap';
import {MagicWand} from 'styled-icons/boxicons-solid';
import styled from 'styled-components';

export const CardLogoIcon = styled(MagicWand)`
  color: white;
`

function Logo() {
    return (
      <div>
        <CardLogoIcon className="text-primary mr-2" size="38" title="Find everything" />
        <Navbar.Brand href="#home">Meact</Navbar.Brand>          
      </div>
    );
  }
  
export default Logo;