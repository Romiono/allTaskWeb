import React, {useEffect, useState} from 'react';
import UsersApi from "../Api/UsersApi.js";
import {Link} from "react-router-dom";

const Db = () => {
    const [users, setUsers] = useState();
    useEffect( () => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = async () => {
        const response = await UsersApi.getAll();
        console.log(response);
        setUsers(response);
    }
    return (
        <div className={'flex flex-col items-center justify-between p-5 h-dvh'}>
            <div className="overflow-x-auto">
                <table className="table table-lg bg-neutral-700">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>gender</th>
                        <th>languages</th>
                        <th>biography</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                           <th>{user.id}</th>
                            <td>{user.fullname}</td>
                            <td>{user.number}</td>
                            <td>{user.email}</td>
                            <td>{user.date}</td>
                            <td>{user.gender}</td>
                            <td>{user.languages}</td>
                            <td>{user.biography}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <Link to={'/'} className={'btn bg-neutral-700'}>Вернуться</Link>
        </div>
    );
};

export default Db;