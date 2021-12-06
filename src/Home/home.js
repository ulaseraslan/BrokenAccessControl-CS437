import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserStore from "../login-signup/UserStore";
import { useHistory } from "react-router-dom";

function Home(){
    let history = useHistory();

    return (
            <html>
            <div className="App">
                {UserStore.isLoggedIn === false &&
                <header className="App-header">
                    <p>
                        Welcome to my very secure website.
                        Please do not try to access admin page.
                    </p>
                    <Link to="/login">
                        <a
                            className="App-link"
                            href="localhost:3000/login"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Login
                        </a>
                    </Link>
                </header>}
                {(UserStore.isLoggedIn === true) && (UserStore.userId === "user") &&
                (history.push("/home"))}
                {(UserStore.isLoggedIn === true) && (UserStore.userId === "admin") &&
                (history.push("/manager_view"))}
            </div>
            </html>)

}
export default Home;