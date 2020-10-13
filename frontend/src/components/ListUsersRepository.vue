<template>
  <div>
    <v-container>
        <div v-if="loading">
            <Carregando></Carregando>
        </div>
      <div v-else
              id="e3"
              style="max-width: 1200px; margin: auto;"
              class="grey lighten-3"
      >
<!--        <v-card>-->
<!--          <v-container-->
<!--                  fluid-->
<!--                  grid-list-lg-->
<!--          >-->
<!--              <div>-->
<!--                  <h3>Membros</h3>-->
<!--              </div>-->

<!--              <div  v-for="(member, key) in member" :key="key">-->
<!--                  <img class="from-avatar"-->
<!--                       :src="member.avatar_url"-->
<!--                       width="35"-->
<!--                       height="35"-->
<!--                  >-->
<!--              </div>-->
<!--          </v-container>-->
<!--        </v-card>-->


          <v-data-table
                  :headers="headers"
                  :items="member"
                  class="elevation-1"
          >
              <template v-slot:item.avatar_url="{ item }">
                  <img class="from-avatar"
                       :src="item.avatar_url"
                       width="35"
                       height="35"
                  >
              </template>

                <template v-slot:item.html_url="{ item }">
                  <div class="my-2">
                      <v-btn
                              small
                              color="primary"
                              dark
                              target="_blank"
                              :href="item.html_url"
                      >
                          {{ item.login }}
                      </v-btn>
                  </div>
              </template>
          </v-data-table>

      </div>
    </v-container>


  </div>
</template>
<script>
  import axios from 'axios';
  import Carregando from './Carregando';

  export default {
    name: 'ListUsersRepository',
    components: {
        Carregando,
    },
    data() {
      return {
        member: [],
        loading: false,

          headers: [
              { text: 'Membro',
                  value: 'avatar_url',
              },
              { text: 'GitHub',
                  value: 'html_url',
                  align: 'left',
              },
          ]
      };
    },
    mounted() {
      this.getmember();
    },
    methods: {
      getmember() {
        const self = this;
        this.loading = true;
        axios.get(`https://api.github.com/orgs/culturagovbr/members`)
        .then(function (response) {
            self.member = response.data;
            console.log(self.member);
        }).finally(() => {
            this.loading = false;
        });
      },
    },
  };
</script>
