import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectFilterTerm, setFilterTerm } from "redux/appReducer";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { SubHeading } from "components/Emotion.styled";
;

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterTerm);

const handleInputChange = (e) => {
    const newValue = e.target.value;
    dispatch(setFilterTerm(newValue));
};
  
  return (
    <label>
          <SubHeading >Find contacts by name</SubHeading> 
          <InputGroup>
          <InputLeftElement pointerEvents='none'>
          <Search2Icon color='gray.300' />
          </InputLeftElement>
            <Input variant='outline' width='350px' type="text" value={filter} onChange={handleInputChange} />
          </InputGroup>
        </label>
  )
};


