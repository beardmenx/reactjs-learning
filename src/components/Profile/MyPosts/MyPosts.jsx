import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, How are u?", likesCount: 12 },
    { id: 2, message: "It is my first post", likesCount: 17 },
    { id: 3, message: "Bla bla", likesCount: 17 },
    { id: 4, message: "DA DA DA", likesCount: 17 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
