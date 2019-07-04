<template>
  <div>
    <v-container>
      <div
        id="e3"
        style="max-width: 1200px; margin: auto;"
        class="grey lighten-3"
      >
        <v-toolbar
          color="grey"
          dark
        >
          <v-toolbar-title>Vue.Js + GitHub</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card>
          <v-container
            fluid
            grid-list-lg
          >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-container>
                <v-layout>
                  <v-flex xs12 sm6 md3>
                    <v-text-field
                      v-model="username"
                      :rules="usernameRules"
                      label="UserName GitHub"
                      outline
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md3>
                    <v-text-field
                      v-model="repository"
                      :rules="repositoryRules"
                      label="Repository GitHub"
                      outline
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md3>
                    <div>
                      <v-btn
                        @click.prevent.stop="getIssues"
                        fab
                        color="primary"
                        small
                        dark>
                        <v-icon>search</v-icon>
                      </v-btn>
                      <v-btn
                        @click.prevent.stop="reset"
                        fab
                        color="red"
                        small
                        dark
                      >
                        <v-icon>close</v-icon>
                      </v-btn>
                    </div>
                  </v-flex>
                </v-layout>

                <div v-if="loading">
                  <Carregando></Carregando>
                </div>
                <div v-else>
                  <v-data-table
                    :headers="headers"
                    :items="issue"
                    class="elevation-1"
                  >
                    <template v-slot:items="props">
                      <td>{{ props.item.number }}</td>
                      <td class="text-xs-left">{{ props.item.title }}</td>
                      <td class="text-xs-left">
                        <img class="from-avatar"
                             :src="props.item.user.avatar_url"
                             width="20"
                             height="20"
                        >
                      </td>
                    </template>
                  </v-data-table>
                </div>
              </v-container>
            </v-form>
          </v-container>
        </v-card>
      </div>
    </v-container>


  </div>
</template>
<script>
import axios from 'axios';
import Carregando from './Carregando';

export default {
  name: 'GitHubIssues',
  components: {
    Carregando,
  },
  data() {
    return {
      repository: '',
      username: '',
      issue: [],
      id: '',
      loading: false,
      valid: true,
      usernameRules: [
        v => !!v || 'User is required',
      ],
      repositoryRules: [
        v => !!v || 'Repository is required',
      ],
      headers: [
        { text: 'Número',
          value: 'calories',
        },
        { text: 'Titulo',
          value: 'fat',
          align: 'left',
        },
        { text: 'Usuário',
          value: 'fat',
          align: 'left',
        },
      ],
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    getIssues() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.get(`https://api.github.com/repos/${this.username}/${this.repository}/issues`)
          .then((response) => {
            this.issue = response.data;
            // eslint-disable-next-line
              console.log(response);
          }).finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>


<!--<img class="from-avatar" src="https://avatars1.githubusercontent.com/u/19228139?s=40&amp;v=4" width="20" height="20" alt="@Paulophmp">-->
