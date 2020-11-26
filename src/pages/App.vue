<template>
    <div>	
        <div class="c1" @click="click1">
            <div class="c2" @click.stop="click2">
                <div class="c3" @click="click3"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: '第',
            i: 0
        }
    }, 
    methods: {
        click1() {
           console.log('click1')
           this.$toast.showToast(this.msg + this.i)
           this.i++
        },
        click2() {
           console.log('click2')
           this.$toast.showToast(this.msg + this.i)
           this.i++
        },
        click3() {
           this.$toast.showToast(this.msg + this.i)
           this.i++
        }
    }
}
</script>
<style lang="less" scoped>
.c1 {
    width: 500px;
    height: 500px;
    background-color: bisque;
    .c2 {
        width: 300px;
        height: 300px;
        background-color: black;
        .c3 {
            width: 200px;
            height: 200px;
            background-color: rgb(134, 42, 42);
        }
    }
}
.msg {
    width: 640px;
    height: 640px;
    background: url('../img/a.jpg?__sprite') no-repeat;
    color: aqua;
}
.msg2 {
    width: 246px;
    height: 346px;
    background: url('../img/b.jpg?__sprite') no-repeat;
}
</style>