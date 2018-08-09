import React from "react";
import User from "../../components/user";
const authIndexPage = () => {
    return (<div>
            <h1>The Auth Page</h1>
            <User name="Mike" age={22}/>
          </div>);
};

export default authIndexPage;
