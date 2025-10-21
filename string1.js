let str = "madam"
let characters = str.split("")
console.log(characters)
let length =str.length
console.log(length)
let rev=""
for(let i=length;i>=0;i--){
    rev+=str.charAt(i)
}
console.log(rev)
if(str==rev){
    console.log("It’s a palindrom")
}
else{
    console.log("not a palindrom")
}