
var arr = []
function sets(){
  let input = document.getElementById("input").value;
  let txt = arr.push(input)
  fs.writeFile('./file/index.txt',input,err =>{
    if (err == null) {
    console.log("写入失败");
    }else{
      console.log("写入成功");
    }
  })
}
function get(){
  let arrGet = JSON.parse(localStorage.getItem("arrStr",arrStr))
  console.log("arrGet",arrGet)
}


  