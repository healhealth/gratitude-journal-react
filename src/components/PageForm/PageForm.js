import PageFormItem from "./PageFormItem/PageFormItem";

import "./PageForm.css";

const PageForm = () => {
  return (
    <div className="PageForm">
      <section className="MorningForm">
        <h2>Morning</h2>

        <h3>3 things I am grateful for today</h3>
        <PageFormItem leadText="Today I am grateful for" />
        <PageFormItem leadText="Today I am grateful for" />
        <PageFormItem leadText="Today I am grateful for" />

        <h3>3 things that would make today great</h3>
        <PageFormItem leadText="Today would be great if" />
        <PageFormItem leadText="Today would be great if" />
        <PageFormItem leadText="Today would be great if" />

        <h3>Daily affirmation</h3>
        <PageFormItem leadText="I am" />
      </section>
      <section className="EveningForm">
        <h2>Evening</h2>

        <h3>List 3 things that made your day amazing</h3>
        <PageFormItem leadText="What made today amazing was" />
        <PageFormItem leadText="What made today amazing was" />
        <PageFormItem leadText="What made today amazing was" />

        <h3>How could I have made today even better?</h3>
        <PageFormItem leadText="Today would have been even better if" />
      </section>
    </div>
  );
};

export default PageForm;
