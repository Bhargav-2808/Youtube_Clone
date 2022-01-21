import React, { useEffect } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import { Card,Button } from 'react-bootstrap';
import './LoginScreen.scss';
import {useDispatch , useSelector} from 'react-redux' 
import { login } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const {accessToken}=useSelector(state=>state.auth);

    useEffect(()=>{
        if(accessToken){
            navigate("/")
        }
    },[accessToken,navigate])

    const handelLogin =()=>{
        dispatch(login())
    }
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <Card className="loginCard">
                <Card.Body className="cardBody">
                    <YouTubeIcon className="yIcon" />
                    <Card.Title className="pb-3 title">You<span>Tube</span></Card.Title>
                    <Button variant="light" className="loginBtn mb-4 d-flex justify-content-center align-items-center gap-2" onClick={handelLogin}><GoogleIcon />Sign up with google</Button>
                    <Card.Text className="cardText">
                        A YouTube clone app made using React-JS and YouTube-API.
                        <br />
                        (This app does not collect your data)
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LoginScreen

