//场景：比如你要请明星开演唱会，你要通过经纪人这个中间代理，比如你问价格，
let star = {
  name: 'xiaoMing',
  age: 25,
  phone: 'star: 131049230910',
}

let agent = new Proxy(star, {
  get: function(target, key) {
    if(key === 'phone') {
      return "agent: 123456789"
    };
    if(key === 'price') {
      return "120000"
    }
  },
  set: function(target, key, val) {
    if(key === 'customPrice') {
      if(val< 100000) {
        throw new Error('价格太低')
      }else{
        target[key] = val
      }
    }
  }
})
//代理模式访问的接口是一样，但是代理可以修改接口返回值；
console.log(agent.age)//代理不给访问
//代理模式的接口都是一样的，比如：下面你获取明星的手机号也是这个"phone"这个接口；
//或者：你开梯子访问github和不开访问的github的网址接口是一样的
console.log(agent.phone)
console.log(agent.price)
//agent.cunstomPrice = 9000//报错；
agent.cunstomPrice = 1000000