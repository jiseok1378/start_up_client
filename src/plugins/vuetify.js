import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import ko from "vuetify/lib/locale/ko";

import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    theme: {
      themes: {
        light: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5
        },
      },
    },
  },
  lang: {
    locales: { ko },
    current: "ko",
  },
});
