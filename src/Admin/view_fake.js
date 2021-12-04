import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserStore from "../login-signup/UserStore";

function ViewFake(){

    return (
        <html>
        <div className="App">

            {(UserStore.userId === "-2") && (
                <header className="App-header">
                    <p>
                        Sorry honey, please login first :)
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
                </header>)}
            {(UserStore.userId.groups.name === "user") && (
                <header className="App-header">
                    <p>
                        You should not be here, my lovely user :)
                    </p>
                    <Link to="/home">
                        <a
                            className="App-link"
                            href="localhost:3000/home"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Go Home
                        </a>
                    </Link>
                </header>)}
            {(UserStore.userId.groups.name === "admin") && (
                <header className="App-header">
                    <p>
                        Welcome Master.
                    </p>
                    <Link to="/manager_view">
                        <a
                            className="App-link"
                            href="localhost:3000/manager_view"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            some evil plans
                        </a>
                    </Link>
                </header>)}

        </div>
        </html>)

}
export default ViewFake;