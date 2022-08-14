## 学习npm上传
### 上传时，使用  npm login登录，haunglin 20170808xll   447404195@qq.com
使用npm publish上传


## 开发ui组件，使用vue-cli开发，打包发布
### 修改packages：
将private属性设置为false，表明允许发包
调整version属性，指定版本号
添加main属性，指定引用依赖时的入口文件
添加files属性，指定发包后被包含的文件名数组
### 打包文件index.js
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
类似这样的，返回一些参数