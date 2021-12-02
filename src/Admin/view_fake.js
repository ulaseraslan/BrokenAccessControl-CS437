import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function ViewFake(){

    return (
        <html>
        <div className="App">
            <header className="App-header">
                <p>
                    Sorry honey, please login first :)
                </p>
                <Link to="/login">
                    <a
                        className="App-link"
                        href="localhost:3000"
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
export default ViewFake;