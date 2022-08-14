import App from './App.vue'

Card.install = function () {
    Vue.component(App.name, App)
}
export default Card;
