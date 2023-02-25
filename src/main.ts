import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createPinia } from "pinia";

const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
});
createApp(App).use(VueQueryPlugin).use(vuetify).use(pinia).mount("#app");
