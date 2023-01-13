export default {}

//可选属性 ？
interface IFullName {
  firstName: string,
  lastName?: string
  age?: number
}

let goodessName: IFullName = {
  firstName: 'goodess',
  lastName: 'goodess',
  age: 100
}

//只读属性 readonly
interface IFullName2 {
  readonly firstName: string,
  readonly lastName?: string
  readonly age?: number
}

let goodessName2: IFullName2 = {
  firstName: 'goodess',
  lastName: 'goodess',
  age: 100
}

//goodessName2.firstName = 'goodess2'  //报错  只读属性不能修改


