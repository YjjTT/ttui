import Vue from 'vue'
import App from './App.vue'
import Button from './components/button/button'
import Icon from './components/icon/icon'
import ButtonGroup from './components/button-group/button-group'

Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
Vue.component(ButtonGroup.name, ButtonGroup)

new Vue({
  render: h => h(App),
}).$mount('#app')
