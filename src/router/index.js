import Vue from 'vue';
import Router from 'vue-router';
import GitHubIssues from '@/components/GitHubIssues';
import FotosApp1 from '@/components/FotosApp1';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GitHubIssues',
      component: GitHubIssues,
    },
    {
      path: '/fotos',
      name: 'fotosApp1',
      component: FotosApp1,
    },
  ],
});
