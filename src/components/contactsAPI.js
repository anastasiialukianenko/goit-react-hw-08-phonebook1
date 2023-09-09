
import { instance } from 'redux/authReducer';


const fetchContacts = async () => {
    const response = await instance.get('contacts');

    return response.data;
}

const addContact = async (contact) => { 
  const response = await instance.post('contacts', contact);

  return response.data;
}

const deleteContact = async (contactID) => {
    const response = await instance.delete(`contacts/${contactID}`);

    return response.data;
}


const api = { fetchContacts, addContact, deleteContact };

export default api;
