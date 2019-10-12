    // 請介紹兩個字串方法跟數字方法
    var anyString = "Brave new world";

    console.log("The index of the first w from the beginning is " + anyString.indexOf("w"));
    // logs 8
    console.log("The index of the first w from the end is " + anyString.lastIndexOf("w")); 
    // logs 10

    console.log("The index of 'new' from the beginning is " + anyString.indexOf("new"));   
    // logs 6
    console.log("The index of 'new' from the end is " + anyString.lastIndexOf("new"));
    // logs 6

    var anyString = "Brave new world";

    console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
    console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
    console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
    console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
    console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
    console.log("The character at index 999 is '" + anyString.charAt(999) + "'");

    var x = new String("Hello world");

    alert(x.toString())      // 输出 "Hello world"





// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值
if(money>30000){
    console.log("讚啦")
}
else{
    console.log("OH NO")
}