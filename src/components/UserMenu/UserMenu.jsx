
import { Button } from "@chakra-ui/react";
import { Greatings } from "components/Emotion.styled";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, selectUserData } from "redux/authReducer";


export const UserMenu = () => {
    const userData = useSelector(selectUserData);
    const dispatch = useDispatch();

    
    const handleLogOut = () => {
        dispatch(logOutUser());
    }

return (<div>
    <Greatings>Hello, {userData.email}</Greatings>
  <Button type='button' variant='outline' colorScheme='white' size='xs' onClick={handleLogOut}>Log Out</Button>
</div >)
}