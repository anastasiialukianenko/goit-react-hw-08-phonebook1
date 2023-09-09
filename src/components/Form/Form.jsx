import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

import { FormLabel, UserFormWrap, ContactsForm } from "components/Emotion.styled";
import { addContacts, selectContacts } from "redux/appReducer";
import { InputGroup, Input, InputLeftElement, ButtonGroup, Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

export function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

   const handleNameChange = evt => {
       setName(evt.target.value);
    }; 
    
     const handleNumberChange = evt => {
       setNumber(evt.target.value);
    }; 
    
  
  const checkIsDuplicating = (newContactName) => {
    return contacts.some((existingContact) => existingContact.name === newContactName);
  };

   const handleSubmit = (evt) => {
    evt.preventDefault();

    const newContactItem = {
      id: nanoid(),
      name,
      number,
    };

    if (!checkIsDuplicating(newContactItem.name)) {
      dispatch(addContacts(newContactItem)); 
      setName("");
      setNumber("");
    } else {
      alert(`${newContactItem.name} already exists. Please use a different name.`);
      setName("");
      setNumber("");
    }
  };


  return (
      <UserFormWrap>
    <ContactsForm onSubmit={handleSubmit}>

        <label>
          <FormLabel>Name:</FormLabel>
          <InputGroup>
          <InputLeftElement pointerEvents='none'>
          <EmailIcon color='gray.300' />
          </InputLeftElement>
            <Input
          onChange={handleNameChange}
              type="text"
              value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
          </InputGroup>
          
          </label>
          
        <label>
          <FormLabel>Number:</FormLabel>
          <InputGroup>
          <InputLeftElement pointerEvents='none'>
          <EmailIcon color='gray.300' />
          </InputLeftElement>
            <Input
          onChange={handleNumberChange}
              type="tel"
              value={number}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
          </InputGroup>
          </label>
        
        <ButtonGroup variant='outline' spacing='6'>
          <Button type="submit" colorScheme='blue' >Add contact</Button>
        </ButtonGroup>
      </ContactsForm>
      </UserFormWrap>
)

}

