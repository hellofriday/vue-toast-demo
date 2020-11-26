require('./css/index.less')
import Vue from 'vue'
import App from './pages/App.vue'
import toast from './toast'
Vue.use(toast)
new Vue({
    render: function(h) {
    var c = h(App)
       return  c
    } ,
    mounted() {
        
    }
}).$mount('#app') 

// // new Vue({
//     el: '#app',
//     template: "<div>{{msg}}</div>",
//     data: {
//         msg: 'hhh'
//     }
// })
// function Person() {
//     this.name = 'peoson'
// }
// Person.prototype.num = 12

// function Student() {
//     // Person.call(this)
//     Person()
//     this.age = 13
// }
// Student.prototype = new Person()
// Student.prototype.contructor =Student
// // Student.prototype = new Person()
// let qy = new Student()
// console.log(new Person())

// let arr = [16,6,1,2,5,7,8,9,3,10,20,23]

// function sort(selectedNum, leftArr, rightArr) {
//   for (let i = 0; i < arr.length; i++ ) {
//     if (arr[i] > selectedNum) {
//         rightArr.push(arr[i])
//     } else {
//         leftArr.push(arr[i])
//     }
//   }
//   sort(leftArr, rightArr)
//   if (rightArr.length > 1) {
//     sort(rightArr)
//   } else {
      
//   }
//   if (leftArr.length > 1) {
//     sort(leftArr)
//   }
// }


// function diff(arr) {
//   let newArr = []
//   let j = 0
//   for (let i = 1; i < arr.length; i++) {

//     if (arr[j] != arr[i]) {
//       newArr.push(arr[j])
//     }
//     j++
//   }
//   return newArr
       
// }
// console.log(diff([0,0,1,1,1,2,2,3,3,4]))
