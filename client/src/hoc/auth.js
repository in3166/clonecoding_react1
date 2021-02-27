/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { auth } from '../_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {

        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {
            //To know my current status, send Auth request 
            dispatch(auth()).then(response => {
                // 분기 처리
                // 로그인 하지 않은 상태
                if (!response.payload.isAuth) {
                    if (option) { //로그인이 요구되는 페이지에 로그인하지 않은 상태로 접근 한다면
                        props.history.push('/login')
                    }
                    //Loggined in Status 
                } else {
                    // 로그인한 상태
                    if (adminRoute && !response.payload.isAdmin) { // 관리자가 아닌데 관리자 페이지 접근
                        props.history.push('/')
                    }
                    //Logged in Status, but Try to go into log in page 
                    else {
                        if (option === false) { // 로그인한 유저가 로그인유저 접근 금지 페이지 접근
                            props.history.push('/')
                        }
                    }
                }
            })

        }, [])

        return (
            <SpecificComponent {...props} user={user} />
        )
    }
    return AuthenticationCheck
}


