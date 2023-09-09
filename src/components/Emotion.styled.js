import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";



// export const FormWrap = styled.form`
//   padding: 20px;
//   width: 400px;

//   font-size: 20px;
//   border-radius: 4px;
//   border: 2px solid hotpink;
//   display: flex;
//   flex-direction: column;
//   gap:20px;
//   `

//   export const Input = styled.input`
//  margin-left: 25px;
//   `

//    export const Button = styled.button`
//  width: 140px;
//  background-color: blue;
//  color: white;
//   `

// export const DeleteButton = styled.button`
//  width: 80px;
//  margin-left: 15px;
//  background-color: blue;
//  color: white;
//  &:hover {
//     background-color: hotpink;
//  }`

export const Header = styled.header`
  background-color: #000073; 
  color: #fff; 
  padding: 10px 0;
  margin-bottom: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
  &:hover {
    animation: bounce 0.5s ease infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }
`

export const Logo = styled.span`
  font-size: 28px;
  margin-right: 10px;
  color: #fff; 
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 20px;
  margin-right: 20px;
`
export const Greatings = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff; 
  font-weight: bold;
  font-size: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: hotpink; 
  }

  &.active {
    color: hotpink; 
  }
`;


// -------------- REGISTER PAGE -------------


export const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
`;
export const SubHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const UserFormWrap = styled.div`
 background-color: #fff; 
  border-radius: 10px; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); 
  padding: 20px;
  max-width: 800px; 
  margin: 0 auto; 
`;

export const ContactsForm = styled.form`
display: flex;
gap: 24px;
align-items: flex-end;
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormLabel = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;


// -------------- Contacts FORM -------------

export const MainContent = styled.main` 
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;