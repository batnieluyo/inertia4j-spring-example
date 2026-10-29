import { createApp, h, type DefineComponent } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import '@picocss/pico/css/pico.violet.min.css'
import './assets/main.scss'

const pages = import.meta.glob<{ default: DefineComponent }>('./pages/**/*.vue', { eager: true })

createInertiaApp({
  resolve: name => {
    const page = pages[`./pages/${name}.vue`]
    if (!page) throw new Error(`Unknown Inertia page: ${name}`)
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
