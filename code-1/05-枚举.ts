export default {}

enum Gender {
  Male,
  Female,
}

let val: Gender;
val = Gender.Female


enum Gender2 {
  Male = 10,
  Female  //默认为11
}

//枚举类型默认为number类型
//枚举类型的值是从0开始的
