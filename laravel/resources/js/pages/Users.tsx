import React from 'react';
import { User } from '../types';

type Props ={
    users: User[]
}

const Users = ({ users }: Props) => {
    return (
        <div>
            Users : {users.length}
        </div>
    );
}

export default Users;
