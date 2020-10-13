import Vue from 'vue';
import Router from 'vue-router';
import GitHubIssues from '@/components/GitHubIssues';
import List from '@/components/ListUsersRepository.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
    //   path: "/",
    //   component: GitHubIssues,
    //   props: true,
    //   children: [
    //     {
    //       path: "/user",
    //       component: GitHubIssues
    //     },
    //     {
    //       path: "/project",
    //       component: List
    //     }
    //   ]
    // },



    // {
      path: '/user',
      component: GitHubIssues,
    },
    {
      path: '/project',
      component: List,
    },
  ],
});
