import React, { useEffect, useState } from 'react';
import Button from '../../components/button/button';
import './register.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const userRegister = useSelector(state => state.userRegister);
    // const { loading, userInfo, error } = userRegister;
    // const dispatch = useDispatch();

    //register function 
    const egister = async (e) => {
        e.preventDefault();
        // dispatch(Register(name, email, password));
    }
    return (
        <>
            <div className="register">
                <div className="left-side">
                    <div className="form-part">
                        <h1>Register</h1>
                        <form action='#' onSubmit={egister}>
                            <p>Username:</p>
                            <input
                                type="text"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter your BT number.'
                            />
                            <br />
                            <p>E-Mail Id:</p>
                            <input
                                type="text"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter college Email Id'
                            />
                            <br />
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <Button
                                buttonStyle="btn-normal"
                                type="submit"
                                onClick={egister}
                            >Submit</Button>
                        </form>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right">
                        <h1>Already Registered?</h1>
                        <Link to="/login"> <Button buttonStyle="btn-normal">Login</Button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;