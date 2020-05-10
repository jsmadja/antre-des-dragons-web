import { storiesOf } from "@storybook/vue";
import BookTemplate from "./BookTemplate.vue";
import step9 from "./step-9.json";
import step7 from "./step-7.json";

storiesOf("BookTemplate", module)
  .add("BookTemplate/Step9", () => ({
    components: { BookTemplate },
    template: `
            <book-template :step="step" />`,
    data() {
      return {
        step: step9
      };
    }
  }))
  .add("BookTemplate/Step7", () => ({
    components: { BookTemplate },
    template: `
                <book-template :step="step" />`,
    data() {
      return {
        step: step7
      };
    }
  }));
