import { storiesOf } from "@storybook/vue";
import ChapterPageTemplate from "./ChapterPageTemplate.vue";
import step9 from "./step-9.json";
import step7 from "./step-7.json";

storiesOf("ChapterPageTemplate", module)
  .add("ChapterPageTemplate/Next", () => ({
    components: { ChapterPageTemplate },
    template: `
            <chapter-page-template :step="step" />`,
    data() {
      return {
        step: step9
      };
    }
  }))
  .add("ChapterPageTemplate/Choice", () => ({
    components: { ChapterPageTemplate },
    template: `
                <chapter-page-template :step="step" />`,
    data() {
      return {
        step: step7
      };
    }
  }));
