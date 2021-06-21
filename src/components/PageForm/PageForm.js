import { useState } from "react";
import PageFormItem from "./PageFormItem/PageFormItem";

import "./PageForm.css";

const PageForm = () => {
  const [grateful1, setGrateful1] = useState("");
  const [grateful2, setGrateful2] = useState("");
  const [grateful3, setGrateful3] = useState("");
  return (
    <div className="PageForm">
      <section className="MorningForm">
        <div className="AlignCenter">
          <h2>Morning</h2>
          <h3>3 things I am grateful for today</h3>
          <PageFormItem
            leadText="Today I am grateful for"
            formItemValue={grateful1}
            setFormItemValue={setGrateful1}
          />
          <PageFormItem
            leadText="Today I am grateful for"
            formItemValue={grateful2}
            setFormItemValue={setGrateful2}
          />

          <PageFormItem
            leadText="Today I am grateful for"
            formItemValue={grateful3}
            setFormItemValue={setGrateful3}
          />

          <h3>3 things that would make today great</h3>
          <PageFormItem leadText="Today would be great if" />
          <PageFormItem leadText="Today would be great if" />
          <PageFormItem leadText="Today would be great if" />
          <h3>Daily affirmation</h3>
          <PageFormItem leadText="I am" />
        </div>
      </section>
      <section className="EveningForm">
        <div className="AlignCenter">
          <h2>Evening</h2>

          <h3>List 3 things that made your day amazing</h3>
          <PageFormItem leadText="What made today amazing was" />
          <PageFormItem leadText="What made today amazing was" />
          <PageFormItem leadText="What made today amazing was" />

          <h3>How could I have made today even better?</h3>
          <PageFormItem leadText="Today would have been even better if" />
        </div>
      </section>
    </div>
  );
};

export default PageForm;
