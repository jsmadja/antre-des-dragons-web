import { storiesOf } from "@storybook/vue";
import PageTemplate from "./PageTemplate.vue";
import step9 from "./step-9.json";
import step7 from "./step-7.json";

storiesOf("PageTemplate", module)
  .add("PageTemplate/Next", () => ({
    components: { PageTemplate },
    template: `
            <page-template :step="step" />`,
    data() {
      return {
        step: step9
      };
    }
  }))
  .add("PageTemplate/Choice", () => ({
    components: { PageTemplate },
    template: `
                <page-template :step="step" />`,
    data() {
      return {
        step: step7
      };
    }
  }));
