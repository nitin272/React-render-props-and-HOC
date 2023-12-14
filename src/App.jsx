import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Parent from './Render/Parent';
function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <Parent render = {(arg1 , arg2) => <LikeImage count = {arg1} functionality = {arg2}/>} />
        <Parent render = {(arg1 , arg2) => <LikePost count = {arg1} functionality = {arg2}/>} />
        {/* <LikePost/>
        <LikeImage/> */}
      </div>
    </div>
  );
}

export default App;
