import React from "react";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";

const Profile = () => {
    const auth = getAuth();

    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log(auth.currentUser);
        setUser(auth.currentUser);
    }, []);

    return user ? <h1>{user.displayName}</h1> : "Not Logged In";
};

export default Profile;
