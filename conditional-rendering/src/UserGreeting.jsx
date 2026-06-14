function UserGreeting(props)
{
    
    const welcomeMsg = <h1 className="welcome-msg">
                           Welcome {props.username}</h1>
    const loginMsg = <h1 className="Login-msg">
                         Please log in to continue</h1>
    
    
    return (props.isLoggedIn ? welcomeMsg : loginMsg);
    
    /*if(props.isLoggedIn){
            return <h1 className="welcome-msg">Welcome {props.username}</h1>
        }
        else{
            return <h1 className="Login-msg">Please log in to continue</h1>
        }






        /* Ternary operator can also be used to achieve the same result as above if-else statement.
        return(props.isLoggedIn ? <h1 className="welcome-msg">Welcome {props.username}</h1>:
                                    <h1 className="Login-msg">Please log in to continue</h1>)
        
        */
}
export default UserGreeting;