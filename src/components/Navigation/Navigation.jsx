import { Header, HeaderWrapper, Logo, NavigationContainer, NavLinkStyled } from "components/Emotion.styled";
import { UserMenu } from "components/UserMenu/UserMenu";
import { CONTACTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "config/routes";
import {  useSelector } from "react-redux";

import { selectUserAuthentification } from "redux/authReducer";


export const Navigation = () => {

  const authentificated = useSelector(selectUserAuthentification);


  return (
    <div>
          <Header>
              <HeaderWrapper>
          <Logo role="img" aria-label="computer icon">
            💻 
          </Logo>{" "}
          Your Personal Phonebook
        </HeaderWrapper>   
        
        <NavigationContainer>
          
          <NavLinkStyled to={HOME_ROUTE}>Home</NavLinkStyled>
          
          {authentificated ? (
            <>
              <NavLinkStyled to={CONTACTS_ROUTE}>Contacts</NavLinkStyled>
              <UserMenu />
            </>
          )
            : (
              <>
                <NavLinkStyled to={REGISTER_ROUTE}>Register</NavLinkStyled>
                <NavLinkStyled to={LOGIN_ROUTE}>Login</NavLinkStyled>
              </>
          )
}
</NavigationContainer>   
          </Header>
    </div>
  );
};