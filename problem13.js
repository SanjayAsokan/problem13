let array = ["playing","reading","homework","exeicise","yogo"]
console.log("Task ===>",array)

//remove 1st Task
let arr = []
for(let i = 1 ;i < array.length ;i++)
{
  arr[i-1]=array[i]
}
console.log("First Task is removed ==>",arr)

// Add 2 Tasks from Starting
arr1 = ["jack","jump"]
for(let j =0; j<arr.length;j++)
{
  arr1[j+2] = arr[j]
}
console.log("Two New Tasks Added ==>",arr1)

arr1[arr1.length-1]= "homework" 
console.log(arr1)
