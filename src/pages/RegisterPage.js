import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, FormLabel, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { UserForm, UserFormWrap } from "components/Emotion.styled";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/authReducer";

const RegisterPage = () => {
  const dispatch = useDispatch();


  const handleSubmit = (evt) => {
    evt.preventDefault();

    const name = evt.currentTarget.elements.userName.value;
    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerUser(formData));

}


  return (
    <UserFormWrap>
      <Helmet>
                <meta charSet="utf-8" />
                <h1>Sign Up</h1>
            </Helmet>
      
      <Heading>Sign-up</Heading>
      <UserForm onSubmit={handleSubmit}>
        <label>
          <FormLabel>Username:</FormLabel> 
          <InputGroup>
          <InputLeftElement pointerEvents='none'>
          </InputLeftElement>
            <Input variant='outline' width='350px' type="text" name="userName" placeholder="Enter your name..." required />
          </InputGroup>
            
        </label>
          
        <label>
          <FormLabel>Email:</FormLabel> 
          <InputGroup>
          <InputLeftElement pointerEvents='none'>
          <EmailIcon color='gray.300' />
          </InputLeftElement>
            <Input variant='outline' width='350px' type="email" name="userEmail" placeholder="Enter your email..." required />
          </InputGroup>
        </label>
        
        <label>
          <FormLabel>Password:</FormLabel> 
          <InputGroup>
          <InputLeftElement pointerEvents='none'>
          <LockIcon color='gray.300' />
          </InputLeftElement>
            <Input variant='outline' width='350px' type="password" name="userPassword" placeholder="Enter your password..."
            minLength={7} required />
          </InputGroup>
        </label>

        <ButtonGroup variant='outline' spacing='6'>
          <Button type="submit" colorScheme='blue' >Register</Button>
        </ButtonGroup>
      </UserForm>
    </UserFormWrap>
  );
};

export default RegisterPage;