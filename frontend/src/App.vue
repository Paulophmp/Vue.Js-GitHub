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
      <GitHubIssues/>
    </v-content>
  </v-app>
</template>

<script>
import GitHubIssues from './components/GitHubIssues';

export default {
  name: 'App',

  components: {
      GitHubIssues,
  },

  data: () => ({
    //
  }),
};
</script>
