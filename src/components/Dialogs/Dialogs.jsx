import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Vitalii" },
    { id: 2, name: "Dimych" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "George" },
    { id: 5, name: "Sveta" },
    { id: 6, name: "Viktor" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your It-kamasutra!" },
    { id: 3, message: "YO" },
    { id: 4, message: "yo" },
    { id: 5, message: "Hello" },
    { id: 6, message: "Whats up" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};
export default Dialogs;
