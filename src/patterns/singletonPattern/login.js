class loginForm {

  constructor() {
    this.state = {
      isShow: false
    }
  }
  show() {
    if(this.state.isShow){
      console.log('登录框已经显示')
    }else {
      console.log('登录框打开')
      this.state.isShow = !this.state.isShow
    }
  }
  close() {
    if(!this.state.isShow){
      console.log('登录框已经关闭')
    }else {
      console.log('登录框关闭')
      this.state.isShow = !this.state.isShow
    }
  }
}
//在外面添加getInstance方法,用到闭包，内部两个实例的都跟闭包变量有关；
loginForm.getInstance = (function(){
  let instance;
  return function() {
    if(!instance) {
    instance = new loginForm()
    }
  return instance;
  }
})()

let l1 = loginForm.getInstance()
let l2 = loginForm.getInstance()
l1.show()
l2.show()