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
                  <v-flex xs12 sm6 d-flex>
                    <v-text-field
                      v-model="username"
                      :rules="usernameRules"
                      label="UserName GitHub"
                      outline
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 d-flex>
                    <v-text-field
                      v-model="repository"
                      :rules="repositoryRules"
                      label="Repository GitHub"
                      outline
                    ></v-text-field>
                  </v-flex>
                  <v-flex >
                    <v-select xs12 sm6 md3
                              v-model="tipobusca"
                              :items="items"
                              :rules="statusRules"
                              item-text="label"
                              item-value="tipo"
                              label="Status"
                              outline
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md3>
                    <div>
                      <v-btn
                        @click.prevent.stop="listIssues"
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
                <template v-for="issues in issue">
                  {{ issues.name }}
                </template>
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
                      <td>
                        <a
                          @click.prevent.stop="listDataIssues(props.item.number)"
                          href="">
                          #{{ props.item.number }}
                        </a>
                      </td>
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
                <v-snackbar
                  v-model="snackbar"
                  :multi-line="mode === 'multi-line'"
                  right
                  :timeout="timeout"
                  bottom
                  :color="statusSnackBar"
                  :vertical="mode === 'vertical'"
                >
                  {{ response.mensagem }}
                  <v-btn
                    dark
                    flat
                    @click="snackbar = false"
                  >
                    <v-icon>clear</v-icon>
                  </v-btn>
                </v-snackbar>
              </v-container>

              <div class="text-xs-center">
                <v-dialog
                  v-model="dialog"
                  width="800"
                >
                  <v-card>
                    <v-card-title
                      class="headline grey lighten-2"
                      primary-title
                    >
                      {{ selectedIssue.title }} #{{ selectedIssue.number }}
                    </v-card-title>

                    <v-card-text>
                      {{ selectedIssue.title }}
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        flat
                        @click="dialog = false"
                      >
                        I accept
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>

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
  name: 'VerFotos',
  components: {
    Carregando,
  },
  data() {
    return {
      tipobusca: '',
      repository: '',
      username: '',
      issue: [],
      selectedIssue: {},
      id: '',
      response: {
        status: '',
        mensagem: '',
      },
      statusSnackBar: '',
      snackbar: false,
      dialog: false,
      timeout: 2500,
      mode: '',
      loading: false,
      valid: true,
      items: [
        { tipo: 'all', label: 'Todos' },
        { tipo: 'open', label: 'Abertos' },
        { tipo: 'closed', label: 'Fechados' },
      ],
      usernameRules: [
        v => !!v || 'User is required',
      ],
      repositoryRules: [
        v => !!v || 'Repository is required',
      ],
      statusRules: [
        v => !!v || 'Status is required',
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
    listIssues() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.get(`https://api.github.com/repos/${this.username}/${this.repository}/issues?state=${this.tipobusca}`)
          .then((response) => {
            this.issue = response.data;
            // eslint-disable-next-line
                            console.log(response);
          }).catch(() => {
            this.menssageSnackBar('Repositório não existe');
          }).finally(() => {
            this.loading = false;
          });
      }
    },
    listDataIssues(issuesId) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.dialog = true;
        axios.get(`https://api.github.com/repos/${this.username}/${this.repository}/issues/${issuesId}`)
          .then((response) => {
            this.selectedIssue = response.data;
            // eslint-disable-next-line
                            console.log(response);
          }).finally(() => {
            this.loading = false;
          });
      }
    },
    menssageSnackBar(text) {
      this.statusSnackBar = 'error';
      this.response.mensagem = text;
      this.snackbar = true;
    },
  },
};
</script>
