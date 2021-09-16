import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  /* mode 설정 추가 */
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    /* channel에 대한 라우팅 정의 */
    {
      path: '/channel/:cname',
      name: 'channel',
      component: Chat
    }
  ]
})
