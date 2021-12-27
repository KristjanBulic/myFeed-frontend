import "./styles.css";

import Post from "./components/Post";

export default function App() {
  return (
    <div className="App" style={{ 
      backgroundColor: '#191919'}}>
      <h1 style={{color: 'white'}}>News</h1>
      <h2 style={{color: 'white'}}>Let's see what's wrong today...</h2>
      <Post/>
    </div>
  );
}