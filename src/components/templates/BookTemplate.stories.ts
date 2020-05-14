import { storiesOf } from "@storybook/vue";
import BookTemplate from "./BookTemplate.vue";
import step9 from "./step-9.json";
import step7 from "./step-7.json";
import step4 from "./step4.json";
import step23 from "./step23.json";

storiesOf("BookTemplate", module)
  .add("BookTemplate/Step-9", () => ({
    components: { BookTemplate },
    template: `
            <book-template :step="step" />`,
    data() {
      return {
        step: step9
      };
    }
  }))
  .add("BookTemplate/Step-7", () => ({
    components: { BookTemplate },
    template: `
            <book-template :step="step" />`,
    data() {
      return {
        step: step7
      };
    }
  }))
  .add("BookTemplate/Step4", () => ({
    components: { BookTemplate },
    template: `
        <book-template :step="step" />`,
    data() {
      return {
        step: step4
      };
    }
  }))
  .add("BookTemplate/Step23", () => ({
    components: { BookTemplate },
    template: `
        <book-template :step="step" />`,
    data() {
      return {
        step: step23
      };
    }
  }));
