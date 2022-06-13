import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    //User tester  email: george@gmail.com  password: george123

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const submit = data => {
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
            .then(res => {
                console.log(res.data,data.token)
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
        <div>
            <h1>Login</h1>

            <form className="usersForm" onSubmit={handleSubmit(submit)}>

                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="Enter email"
                    />
                </div>
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        {...register("password")}
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <button className="btnForm" type="submit">Submit</button>
            </form>


        </div>
    );
};

export default Login;