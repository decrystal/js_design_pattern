class SingletonPattern {
  private static instance: SingletonPattern;
  constructor() {
    
  }
  static getInstance() {
    if(!this.instance){
      this.instance = new SingletonPattern()
    }
    return this.instance
  }
}
let s1 = SingletonPattern.getInstance()
let s2 = SingletonPattern.getInstance()
console.log(s1===s2)