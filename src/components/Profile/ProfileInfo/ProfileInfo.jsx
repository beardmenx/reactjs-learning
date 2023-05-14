import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://wallpaperaccess.com/full/123678.jpg"
          alt="wallpaper"
        ></img>
        <div className={s.descriptionBlock}>avatar + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
