import "../styles/login.css";
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    //User tester  email: george@gmail.com  password: george123

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const submit = data => {
        axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login", data)
            .then(res => {
                console.log(res.data, data.token)
                localStorage.setItem("token", res.data.data.token)
                navigate("/")
            })
            .catch(error => {
                console.log(error.response.status)
                if (error.response.status === 404) {
                    alert("Credenciales Incorrectas")
                }
            })
        console.log(data)

    }




    return (
        <div className="loginContainer">
            <h1>Login</h1>

            <form className="usersForm" onSubmit={handleSubmit(submit)}>
                <h3>Welcome! Enter your email and password to continue</h3>
                <div className="testDataInfo">
                    <h5>Test Data</h5>
                    <h6> email: george@gmail.com</h6>
                    <h6> password: george1234</h6>
                </div>
                <div className="containerForm">
                    <div className="labelInput" >
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="labelInput">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <button className="btnForm" type="submit">Submit</button>
            </form>


        </div>
    );
};

export default Login;