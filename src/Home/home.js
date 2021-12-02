import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Home(){

    return (
            <html>
            <div className="App">
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
                </header>
            </div>
            </html>)

}
export default Home;