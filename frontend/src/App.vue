<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Paulophmp/Vue.Js-GitHub"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Tabs/>
    </v-content>
  </v-app>
</template>

<script>
import Tabs from './components/Tabs';

export default {
  name: 'App',

  components: {
    Tabs,
  },

  data: () => ({
    //
  }),
};
</script>
