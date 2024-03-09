import React, {useContext, useEffect } from 'react';
import Util from '../../config/Util';
import AuthContext from '../../contexts/AuthContext';

export default function LogoutScreen() {

    const { setIsLogged } = useContext(AuthContext);

    useEffect(() => {
        Util.removeToken();
        setIsLogged(false);
    }, []) ;

    return <></>
}