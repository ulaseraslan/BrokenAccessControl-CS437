import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserStore from "../login-signup/UserStore";

function ViewFake(){
    console.log(UserStore.userId)
    return (

        <html>
        <div className="App">

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
                </header>
        </div>
        </html>)

}
export default ViewFake;