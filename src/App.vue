<template>
  <div id="app">
  <v-app>
      <router-view></router-view>
<!--    <v-toolbar app>-->
<!--      <v-toolbar-title class="headline text-uppercase">-->
<!--        <span>Vuetify</span>-->
<!--        <span class="font-weight-light">MATERIAL DESIGN</span>-->
<!--      </v-toolbar-title>-->
<!--      <v-spacer></v-spacer>-->
<!--      <v-btn-->
<!--        flat-->
<!--        href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--        target="_blank"-->
<!--      >-->
<!--        <span class="mr-2">Latest Release</span>-->
<!--      </v-btn>-->
<!--    </v-toolbar>-->

<!--    <v-content>-->
<!--      <GitHubIssues/>-->
<!--    </v-content>-->
  </v-app>
  </div>
</template>

<script>
import GitHubIssues from './components/GitHubIssues';

export default {
  name: 'App',
  components: {
    GitHubIssues,
  },
  data() {
    return {
      //
    };
  },
};
</script>
