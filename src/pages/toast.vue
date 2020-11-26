<template>
    <div class="toast" v-if="show">
       {{msg}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: '',
            show: false,
            t: null
        }
    }, 
    methods: {
        showToast(msg) {
                this.msg = msg
                if (this.show) {
                    clearTimeout(this.t)
                    this.t = setTimeout(()=>{
                        this.show = false
                    }, 2000)      
                    return              
                }
                this.show = true
                this.t = setTimeout(()=>{
                    this.show = false
                }, 2000)
        }
    }
}
</script>
<style lang="less" scoped>
.toast {
    position: fixed;
    bottom: 100px;
    width: 300px;
    height: 80px;
    margin: auto;
    right: 0;
    left: 0;
    text-align: center;
    font-size: 16px;
    color: #fff;
    line-height: 80px;
    background-color: #000;
}
</style>