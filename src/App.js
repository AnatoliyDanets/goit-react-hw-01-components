// import logo from './logo.svg';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import Section from './components/Section/Section';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Container from 'components/Container/Container';
import './App.css';

function App() {
  return (
    <Container>
      <Section>
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
}

export default App;
