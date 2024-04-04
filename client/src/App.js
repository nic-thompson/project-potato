import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
  return (
    <div className="container">
      <h1>Project Potato</h1>
      <h2>Create Post</h2>
      <PostCreate />
      <hr />
      <h2>Posts</h2>
      <PostList />
    </div>
  );
};

export default App;
