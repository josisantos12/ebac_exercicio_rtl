import Post from "./components/Post";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://wallpapercave.com/wp/wp6637204.jpg"> 
        Olha só que legal minha Batmóvel.
      </Post>
    </div>
  );
}

export default App;
