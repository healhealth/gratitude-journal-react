import { useState } from "react";
import PageFormItem from "./PageFormItem/PageFormItem";

import "./PageForm.css";

const PageForm = () => {
  const [grateful1, setGrateful1] = useState("");
  const [grateful2, setGrateful2] = useState("");
  const [grateful3, setGrateful3] = useState("");
  const [grateful4, setGrateful4] = useState("");
  const [grateful5, setGrateful5] = useState("");
  const [grateful6, setGrateful6] = useState("");
  const [grateful7, setGrateful7] = useState("");
  const [grateful8, setGrateful8] = useState("");
  const [grateful9, setGrateful9] = useState("");
  const [grateful10, setGrateful10] = useState("");
  const [grateful11, setGrateful11] = useState("");
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
          <PageFormItem
            leadText="Today would be great if"
            formItemValue={grateful4}
            setFormItemValue={setGrateful4}
          />
          <PageFormItem
            leadText="Today would be great if"
            formItemValue={grateful5}
            setFormItemValue={setGrateful5}
          />
          <PageFormItem
            leadText="Today would be great if"
            formItemValue={grateful6}
            setFormItemValue={setGrateful6}
          />
          <h3>Daily affirmation</h3>
          <PageFormItem
            leadText="I am"
            formItemValue={grateful7}
            setFormItemValue={setGrateful7}
          />
        </div>
      </section>
      <section className="EveningForm">
        <div className="AlignCenter">
          <h2>Evening</h2>

          <h3>List 3 things that made your day amazing</h3>
          <PageFormItem
            leadText="What made today amazing was"
            formItemValue={grateful8}
            setFormItemValue={setGrateful8}
          />
          <PageFormItem
            leadText="What made today amazing was"
            formItemValue={grateful9}
            setFormItemValue={setGrateful9}
          />
          <PageFormItem
            leadText="What made today amazing was"
            formItemValue={grateful10}
            setFormItemValue={setGrateful10}
          />

          <h3>How could I have made today even better?</h3>
          <PageFormItem
            leadText="Today would have been even better if"
            formItemValue={grateful11}
            setFormItemValue={setGrateful11}
          />
        </div>
      </section>
    </div>
  );
};

export default PageForm;
