import toast from './pages/toast.vue'
export default {
    install(vue) {
        let toastComponent = vue.extend(toast)
        const vm = new toastComponent(
            {el: document.createElement('div')}
        )
        document.getElementsByTagName('body')[0].appendChild(vm.$el)
        vue.prototype.$toast = {
            showToast: function(msg) {
                vm.showToast(msg)
            }
        }
    }
}