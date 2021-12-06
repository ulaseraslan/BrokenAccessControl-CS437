import React, {useEffect, useState} from "react";
import UserStore from "../login-signup/UserStore";


function View(){

    return (
        <html>
        <div className="App">
            {(UserStore.userId === "admin") ? (
                <header className="App-header">
                    <img src={"https://c.tenor.com/Er8GuCI8O_QAAAAM/the-simpsons-excellent.gif"} alt=""/>
                </header>
            ) : (<header className="App-header">
                <p>
                    Unauthorized!
                </p>
            </header>)}
        </div>
        </html>)
}
export default View;