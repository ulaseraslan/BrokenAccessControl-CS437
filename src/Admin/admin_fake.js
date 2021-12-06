import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserStore from "../login-signup/UserStore";

function AdminFake(){

    return (
        <html>
        <div className="App">
            <header className="App-header">
                {UserStore.userId !== "admin" ? <p>
                    Not that easy honey. Try again.
                </p> : <p>
                    Wrong url, master.
                </p> }
                <Link to="/">
                    <a
                        className="App-link"
                        href="localhost:3000"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Home
                    </a>
                </Link>
            </header>
        </div>
        </html>)

}
export default AdminFake;