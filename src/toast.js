import toast from './pages/toast.vue'
export default {
    install(Vue) {
        let toastComponent = Vue.extend(toast)
        const vm = new toastComponent(
            {el: document.createElement('div')}
        )
        document.getElementsByTagName('body')[0].appendChild(vm.$el)
        Vue.prototype.$toast = {
            showToast: function(msg) {
                vm.showToast(msg)
            }
        }
    }
}
