
import { useDispatch, useSelector } from "react-redux";
import { requestContacts, selectError } from "redux/appReducer";
import { useEffect } from "react";
import { Form } from "components/Form/Form";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContastsList/ContactList";
import { Helmet } from "react-helmet";
import { MainContent } from "components/Emotion.styled";

 const ContactsPage = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  return (
    <MainContent>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Contacts</title>
            </Helmet>
          <Form/>
        <Filter/>
      <ContactList/>
      {!!error && <div>{error.message}</div>}
    </MainContent>
  );
 };

 export default ContactsPage;