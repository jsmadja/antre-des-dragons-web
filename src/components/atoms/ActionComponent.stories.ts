import { storiesOf } from "@storybook/vue";
import ActionComponent from "./ActionComponent.vue";

storiesOf("ActionComponent", module)
  .add("with no question", () => ({
    components: { ActionComponent },
    template: `
            <action-component :action="action" />`,
    data() {
      return {
        action: {
          url: "http://"
        }
      };
    }
  }))
  .add("with question", () => ({
    components: { ActionComponent },
    template: `
            <action-component :action="action" />`,
    data() {
      return {
        action: {
          url: "http://",
          question: "Combattre le Lapin Blanc"
        }
      };
    }
  }));
