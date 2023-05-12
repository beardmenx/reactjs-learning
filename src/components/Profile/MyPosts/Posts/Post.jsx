import s from "./Post.module.css";
const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbwaVt6_DlLdxAssCIwf31iyGv3mwYeI9Ow&usqp=CAU"></img>
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
