import React from "react";
import classes from './Login.module.scss'
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    

    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [attention, setAttention] = useState(true);
    // const auth = async() => {

        // let myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
    
        // const raw = JSON.stringify({
        //   "login": email,
        //   "password": password
        // });
      
        // let requestOptions = {
        //   headers: myHeaders,
        //   method: 'POST',
        //   body: raw,
        //   redirect: 'follow'
        // };

        
        // if(isLogin) {
        //     const data = await fetch("http://localhost:3001/api/users/login", requestOptions)
        //     .then(response => response.json())
        //     .then(json => {
        //         localStorage.setItem('token', json.token)
        //         user.setUser(jwt_decode(json.token))
        //         if(user.user.login == 'taras'){user.setRole(true)}
        //         else {user.setRole(false)}
        //         user.setIsAuth(true)
        //     })
        //     setEmail('')
        //     setPassword('')
        //     navigate(HOME_ROUTE)
        // } else if(formValidate(email, password) === 0){
        //     const data = await fetch("http://localhost:3001/api/users/signup", requestOptions)
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        //     navigate(LOGIN_ROUTE);
        //     setEmail('')
        //     setPassword('')        
        // }        
    // }

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }

    function formValidate(email, password) {
		let error = 0;
        if(password.length < 3 || password.includes(' ')){
            error++;
        }
        if(!validateEmail(email)){
            error++;
        }	 
		return error;
	}

    return (
        <div className={classes.form__container}>           
            {attention? 
            <div className={classes.attention_container}>
                <div className={classes.attention}>
                    <div className={classes.form__title}>
                        Увага!
                    </div>
                    <div className={classes.attention__deskription}>
                        Увійти в систему можуть тільки працівники фірми.
                    </div>
                    <button onClick={() => setAttention(false)} className={classes.button}>Добре</button>
                </div>
            </div>
            :
            <div></div>
            }           
            <div className={classes.form}>
                <div className={classes.form__title}>{isLogin? 'LOGIN' : 'REGISTRATION'}</div>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="login" type="text" className={classes.form__input} />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"  className={classes.form__input} />
                <div className={classes.sendContainer}>
                    {!isLogin? 
                    <div className={classes.goToReg}>
                        <span>do you have account?</span>    
                        <NavLink onClick={() => setIsLogin(!isLogin)} to='/login'>Login</NavLink>
                    </div>
                    :
                    <div className={classes.goToReg}>
                        <span>No account? </span>    
                        <NavLink onClick={() => setIsLogin(!isLogin)} to='/login'>Registration</NavLink>
                    </div>                  
                    }
                    {isLogin? 
                    <button className={classes.button}>LOGIN</button>
                    :
                    <button className={classes.button}>REGISTRATION</button>
                    }                   
                </div>
            </div>
        </div>
    )
}

export default Login;