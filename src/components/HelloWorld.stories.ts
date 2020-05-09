import { storiesOf } from "@storybook/vue";
import HelloWorld from "./HelloWorld.vue";

storiesOf("HelloWorld", module).add("HelloWorld", () => ({
  components: { HelloWorld },
  template: `<hello-world msg="hello" />`
}));
