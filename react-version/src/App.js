import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetList from './components/TweetList';
import TweetForm from './components/TweetForm';
// import Tweet from "./components/Tweet";

const App = function() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetList />
        <TweetForm />
      </main>
    </div>
  );
};

export default App;
