class Subject {
  constructor() {
    this.observers = [];
    this.state = 0;
  }
  setState(val) {
    //监听state变化，发布事件给每一个observer
    this.state = val;
    //这一步称为发布
    this.notify()
  }
  getState(val) {
    return this.state;
  }
  attach(observer) {
    this.observers.push(observer)
  }
  notify() {
    this.observers.forEach(observer=>{
      observer.update()
    })
  }
}
class Observer {
  constructor(name, Subject) {
    this.name = name;
    this.Subject = Subject;
    //这一步称为订阅
    Subject.attach(this)
  }

  update() {
    console.log(`subject: ${this.Subject.state}, this is observer's name is ${this.name}`)
  }
}

let s = new Subject();
let o1 = new Observer('o1', s);
let o2 = new Observer('o2', s);
s.setState(2)