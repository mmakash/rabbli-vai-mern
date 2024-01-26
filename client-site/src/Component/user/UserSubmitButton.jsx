import React from 'react';
import { useUserStore } from '../../Store/UserStore';


const UserSubmitButton = (props) => {

    let {isFormSubmit}=useUserStore();

    if(isFormSubmit===false){
        return  <button onClick={props.onClick} type="submit" className={props.className}>{props.text}</button>
    }else {
        return (
            <button disabled={true} className={props.className}><div className="spinner-border spinner-border-sm" role="status"></div> Processing...</button>
        );
    }
};
export default UserSubmitButton;