import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import PrimaryNav from '../../components/Header/PrimaryNav/PrimaryNav';

import HorizontalLayout from '../../components/HorizontalLayout/HorizontalLayout';

import GrayBar from '../../components/Header/GrayBar/GrayBar';
import Slogin from '../../components/Header/Slogen/Slogin';
import SecondaryNav from '../../components/Header/SecondaryNav/SecondaryNav';

import Logo from '../../components/Header/Logo/Logo';
import Searchbar from '../../components/Header/Searchbar/Searchbar';
import Button from '../../components/Header/Button/Button';
import cart from '../../assets/img/cart.png';

import Headerbar from '../../components/Header/Headerbar/Headerbar';

import TertiaryNav from '../../components/Header/TertiaryNav/TertiaryNav';

import MenuIcon from '../../components/Header/MenuIcon/MenuIcon';
import VerticalLayout from '../VerticalLayout/VerticalLayout';


export default props => {

  return (
    <div>
      <Sidebar show={props.sidebar.show} open={props.sidebar.open} clickHandler={() => props.sidebarToggle(props.sidebar.open)}>
        <PrimaryNav links={props.headerData.primaryNav} vertical={true} />
      </Sidebar>
      <GrayBar>
        <HorizontalLayout padding="7px 5px" hAligh="spaceBetween">
          <Slogin />
          <SecondaryNav links={props.headerData.secondaryNav} />
        </HorizontalLayout>
      </GrayBar>
      <Headerbar>
        <HorizontalLayout padding={"7px 5px"} hAligh="spaceBetween" vAlign="middle">
          <Logo />
          <VerticalLayout flexGrow="1" hAligh="right">
            <HorizontalLayout width="none" hAligh="spaceBetween">
              <Searchbar />
              <Button label="Shopping Cart" image={cart} height="20px" />
            </HorizontalLayout>
            <TertiaryNav links={props.headerData.tertiaryNav}/>
          </VerticalLayout>
        </HorizontalLayout>
      </Headerbar>
      <GrayBar>
        <HorizontalLayout padding="10px 5px" hAligh="spaceBetween">
          <MenuIcon clickHandler={() => props.sidebarToggle(props.sidebar.open)} />
          <PrimaryNav links={props.headerData.primaryNav} />
        </HorizontalLayout>
      </GrayBar>
      {props.children}
    </div>
  );}