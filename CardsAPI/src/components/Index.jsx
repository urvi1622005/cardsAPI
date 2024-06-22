// src/components/Index.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Index.css';

const Index = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            {users.map(user => (
                <div className="card_item" key={user.id}>
                    <div className="card_inner">
                        <img src={user.avatar_url} alt={user.login} />
                        <div className="userName">{user.login}</div>
                        <div className="userUrl">
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a>
                        </div>
                        <button className="seeMore">See More</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Index;
