// Import hooks from 'react'. Which hook is meant for causing side effects?
// Import hooks from 'react-redux'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../store/users';
import styles from './UsersContainer.module.css'; // because it's a css module 
import { fakeUsers } from '../../assets';
import UserRow from '../UserRow';

const UsersContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch(); // let's you use dispatch that's available in your store
  const users = useSelector((state) => Object.values(state.users)); // turns users into an array
  //values are the actual user objects but the keys were the ids but since we normalized it
  //were just getting the values
  // grabs users, but it's also listening to the state, so if we were to delete a user
  // this allows the render to happen again

  // Use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>User No.</th>
            <th>User's Name</th>
            <th>User's Email</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {users.map((user) => <UserRow key={user.id} user={user} />)}
        </tbody>
      </table>
    </div>
  );
};

export default UsersContainer;
