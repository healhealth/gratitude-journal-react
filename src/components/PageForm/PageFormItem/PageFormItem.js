import "./PageFormItem.css";

const PageFormItem = (props) => {
  return (
    <div>
      <p>{props.leadText}</p>
      <textarea
        className="PageFormItemTextarea"
        value={props.formItemValue}
        onChange={(event) => {
          props.setFormItemValue(event.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default PageFormItem;
