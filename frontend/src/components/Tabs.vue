<template>
  <div>
    <v-container>
      <div
              id="e3"
              style="max-width: 1200px; margin: auto;"
              class="grey lighten-3"
      >
        <v-card>
          <v-container
                  fluid
                  grid-list-lg
          >
            <v-tabs v-model="activeTab" grow>
              <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
                {{ tab.name }}
              </v-tab>

              <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route">
                <router-view></router-view>
              </v-tab-item>
            </v-tabs>
          </v-container>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    props: ["id"],
    data() {
      return {
        activeTab: `/user`,
        tabs: [
          { id: 1, name: "Task 1", route: `/user` },
          { id: 2, name: "Coloboradores", route: `/project` }
        ]
      };
    }
  };
</script>
