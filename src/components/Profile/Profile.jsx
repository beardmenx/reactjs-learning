import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://wallpaperaccess.com/full/123678.jpg"
          alt="wallpaper"
        ></img>
      </div>
      <div>avatar + description</div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
