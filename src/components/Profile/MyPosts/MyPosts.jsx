import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, How are u?" like="Like 15" />
        <Post message="It is my first post" like="Like 20" />
      </div>
    </div>
  );
};

export default MyPosts;
