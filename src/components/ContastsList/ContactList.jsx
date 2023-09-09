import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import {
  deleteContacts,
  selectContacts,
  selectFilterTerm,
  selectIsLoading,
} from "../../redux/appReducer";
import { DeleteIcon } from "@chakra-ui/icons";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilterTerm);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact?.name?.toLowerCase().includes(normalizedFilter)
    );
  };

  const showContacts =
    Array.isArray(getFilteredContacts()) &&
    getFilteredContacts().length > 0 &&
    !isLoading;

    return (
        <Card width='800px' boxShadow="md" p="4" borderRadius="md">
      <CardHeader>
        <Heading size="lg">Your Phonebook</Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing="4">
          {isLoading && <p>Loading data...</p>}

          {showContacts &&
            getFilteredContacts().map((contact) => (
              <Box
                key={contact.id}
                p="3"
                borderWidth="1px"
                borderRadius="md"
                boxShadow="base"
              >
                <Heading size="xs" textTransform="uppercase">
                  Name: {contact.name}
                </Heading>
                <Text pt="2" fontSize="sm">
                  <p>Phone number: {contact.number}</p>
                    </Text>
                    <Button leftIcon={<DeleteIcon />}  size='xs' onClick={() => dispatch(deleteContacts(contact.id))}>Delete</Button>
              </Box>
            ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

        // <ul>

        //     {isLoading && <p>Loading data...</p>}

        //     { showContacts && getFilteredContacts().map(contact =>
        //         <li key={contact.id}>
        //             <h2>Name: {contact.name}</h2>
        //             <p>Phone number: {contact.number}</p>
        //     <button onClick={() => dispatch(deleteContacts(contact.id))}>Delete</button>
        //     </li>)}
        // </ul>



