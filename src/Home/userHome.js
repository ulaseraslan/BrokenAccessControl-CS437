import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function UserHome(){

    return (
        <html>
        <div className="App">
            <header className="App-header">
                <p>
                    Hello my lovely user.
                </p>

                    <a
                        className="App-link"
                        href="https://pbs.twimg.com/media/CpWuo1zWYAEUckE.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Enjoy!
                    </a>

            </header>
        </div>
        </html>)

}
export default UserHome;