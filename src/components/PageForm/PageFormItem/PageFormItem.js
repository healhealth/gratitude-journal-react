import "./PageFormItem.css";

const PageFormItem = (props) => {
  return (
    <div>
      <p>{props.leadText}</p>
      <textarea className="PageFormItemTextarea"></textarea>
    </div>
  );
};

export default PageFormItem;
