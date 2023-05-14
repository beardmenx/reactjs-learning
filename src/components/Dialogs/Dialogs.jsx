import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Vitalii" },
    { id: 2, name: "Dimych" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "George" },
    { id: 5, name: "Sveta" },
    { id: 6, name: "Viktor" },
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your It-kamasutra!" },
    { id: 3, message: "YO" },
    { id: 4, message: "yo" },
    { id: 5, message: "Hello" },
    { id: 6, message: "Whats up" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  );
};
export default Dialogs;
