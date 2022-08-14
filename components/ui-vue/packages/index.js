import Card from './index1.js'
const componets = [Card]
const install = function (Vue, opts = {}) {
    componets.forEach(component => {
        Vue.component(component.name, component);
    })

    Vue.prototype.$VP = {
        size: opts.size || '',
        zIndex: opts.zIndex || 2000
    }
}

if (typeof window != 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    version: '0.0.0',
    install,
    Card
}
