/*
 * @Author: drinkwd
 * @Date: 2022-04-11 17:38:08
 * @LastEditors: drinkwd
 * @LastEditTime: 2022-04-12 14:25:18
 * @Description: 主进程入口
 */

const {app, BrowserWindow ,screen } = require('electron')

let mainWindow = null // 主窗口
// app代表electron的引用，BrowserWindow代表窗体
// 当app准本就绪之后创建一个800*600的窗体
app.whenReady().then(() => {
  // 创建窗体
  const wins = screen.getPrimaryDisplay().workAreaSize.width;//获取屏幕宽度并保存
  
  mainWindow = new BrowserWindow({
    y:0,
    x:wins - 400,
    width: 400,
    height: 400,
    movable:true,

    transparent: true, //透明背景
    frame:true,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#2f3241',
      symbolColor: '#74b1be',
      height: 33,
      width:10
    },
    webPreferences: {
      // 为了使用node
      nodeIntegration: true,
      contextIsolation: false,
    },
  })
  
  // 加载渲染进程文件
  mainWindow.loadFile('index.html')
  
  // 监听窗口关闭回调，减少资源占用
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}) 

// var template = [{
//     label: '菜单1',
//     submenu:[{
//       label: '子菜单1', // 菜单名称
//       accelerator: 'ctrl+n', //快捷键
//       click: () =>{
//         为菜单增加点击事件
//         var win = new BrowserWindow({
//           width: 500,
//           height: 500,
//           webPreferences:{
//             nodeIntegrationInWorker:true,
//             nodeIntegration: true,
//             contextIsolation: false
//           }
//         })
//         win.loadFile('newOpen.html')
//         win.on('closed',()=>{
//           win = null
//         })
//       }
//     }]
//   },{
//     label: '菜单2',
//     submenu:[{
//       label: '子菜单2'
//     }]
//   }]
//   // 构建菜单
//   var m = Menu.buildFromTemplate(template)
//   // 设置菜单
//   Menu.setApplicationMenu(m) 
