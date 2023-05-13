var ebtadd = document.querySelector('#btadd')
var etbox = document.querySelector('.tbox')
var einp = document.querySelector('#inp')
ebtadd.onclick = function(){
  inserHTML(einp.value ,'');
  //添加后清口输入框
  einp.value = '';
  //把焦点回到输入框
  einp.focus();
  savetodo();
}
etbox.onclick = function(){
  var tg = event.target;
  var tgkids = tg.parentElement.children;
  if (tg.value == '完成') {
    tgkids[3].classList.add('done')
  }
  if (tg.value == '取消') {
    tgkids[3].classList.remove('done')
  }
  if (tg.value == '删除') {
   tg.parentElement.remove();
  }
  savetodo();
}
//储存代码
var save = function(arr){
  localStorage.todos = JSON.stringify(arr);

}
//读取函数
var load = function(){
  
    let arr = JSON.parse(localStorage.todos)
  return arr;
  
}
//保存todo的函数
var savetodo = function() {
  let todoarr = [];
  //通过json将样式保存下来
  let todostyle = {};
  let econt = document.querySelectorAll('.cont');
  for (let index = 0; index < econt.length; index++) {
   //todoarr.push(econt[index].innerHTML);
    todostyle.name = econt[index].innerHTML;
    todostyle.done = econt[index].classList.contains('done');
    //把json添加到数组中
    todoarr.push(todostyle);
    todostyle = {};
  }
  save(todoarr)
  console.log(localStorage.todos);
}
//读取的todo函数

var loadtodo = function(){
  let todoarr = load();
  for (let index = 0; index < todoarr.length; index++) {
    inserHTML(todoarr[index].name,todoarr[index].done?'done':'')
    
  }
}
var inserHTML = function(insr,cla){
  etbox.insertAdjacentHTML(
    "beforeend",
    `<div>
       
          <button class="ok" value="完成"></button>
          <button class="ok" value="取消"></button>
          <button class="ok" value="删除"></button>

        <span class = 'cont ${cla}' >${insr}</span>
      </div>
      ` 
  )
}
loadtodo();

function removeAll() {
  localStorage.clear()
  window.location.reload();
  console.log(localStorage);
}
