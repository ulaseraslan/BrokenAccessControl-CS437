import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Admin(){

    return (
        <html>
        <div className="App">
            <header className="App-header">
                <p>
                    Well, you got me. I surrender.
                </p>
                <Link to="/view">
                    <a
                        className="App-link"
                        href="localhost:3000"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        very important information
                    </a>
                </Link>
            </header>
        </div>
        </html>)

}
export default Admin;