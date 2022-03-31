import { defineClientAppEnhance } from '@vuepress/client'
import { format } from 'path'
import Btn from './widgets/Btn.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Btn', Btn)
  router.options.scrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
      if (!from.name) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ el: to.hash })
          }, 1000)
        })
      } else {
        return { el: to.hash }
      }
    }
  }
})
