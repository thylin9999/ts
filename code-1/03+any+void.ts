export default {}
// any
let arr: any[]
arr = [1, "2", true]

// void
let fn = function (): void {
  console.log('void')
}

/*void 只能分配给undefined null*/
let value: void
value = undefined
value = null
