
import { Statistics } from './Statistics/Statistics';
import { Profile } from './user_profile/Profile';
import user from './user_profile/user_data.json'
import stats from './Statistics/data.json'
import friends from '../components/FriendList/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from './Transaction/transactions.json';
import { Transaction } from './Transaction/Transaction';
export const App = () => {
  return (
    <div>
      <Profile
  user = {user}
/>
      <Statistics stats={stats} />
       <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <Transaction transactions = {transactions}/>
    </div>
  );
};
