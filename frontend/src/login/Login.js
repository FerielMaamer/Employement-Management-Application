import React, { useState } from "react";

export default function LoginFunction(props) {
    
    const INITIAL_VALUE = {
        username: "",
        password: ""
    }

    var [data, setData] = useState(INITIAL_VALUE)
    //var [data, setData] = React.useState({...INITIAL_VALUE})
    //var [x, setX] = React.useState(1)

    const onSubmitLogin = (event) => {
        event.preventDefault()
        console.log("Login Clicked")
        console.log(data)

        //console.log(event.target)
    }

    const clearForm = (event) => {
        event.preventDefault()
        setData({...INITIAL_VALUE})
    }

    const onValueChanged = (event) => {
        ///console.log(event.target.value)

        setData({...data, [event.target.name]: event.target.value})
    }

    return(
        <>
            <h2>Login Function Form</h2>
            <form>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter User Name"
                        value={data.username} 
                        onChange={event => onValueChanged(event)} />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter Password"
                        value={data.password} 
                        onChange={event => onValueChanged(event)} />
                    <input 
                        type="submit" 
                        name="btnSubmit" 
                        value="Log In" 
                        onClick={ (e) => onSubmitLogin(e)} />
                    <input 
                        type="reset" 
                        value="Clear" 
                        onClick={ e => clearForm(e)} />
                </form>
        </>
    )
}