import React from 'react'
import Button from './Button'
import { useState } from 'react'

export const Users = ({ onSelectUser }) => {
  const [users, setUsers] = useState([
    { firstName: "Harkirat", lastName: "Singh", _id: 1 },
    { firstName: "Kinshuk", lastName: "Dewari", _id: 2 },
  ]);

  return (
    <div  className='space-y-2'>
      <div className="font-bold mt-6 text-lg">Users</div>
      
        <input
          type="text"
          placeholder="Search users..."
          className="w-full rounded-md border border-gray-300 dark:border-neutral-700 px-3 py-2 bg-white dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      <div>
        {users.map((user) => (
          <User key={user._id} user={user} onSelect={() => onSelectUser(user)} />
        ))}
      </div>
    </div>
  );
};

function User({ user, onSelect }) {
  return (
    <div className="flex justify-between py-2">
      <div className="flex items-center justify-center">
        <div className="rounded-full h-10 w-10 bg-neutral-800 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-base text-white font-bold">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-[36%]">
        <Button label="Send Money" onClick={onSelect} />
      </div>
    </div>
  );
}