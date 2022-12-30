window.onload = function(){
   getWeibo()
   getZhihu()
   getBilibili()
   get36Ke()
   getItHome()
   getSspai()
}
function getWeibo(){
   axios({
       method:"get",
       url:"https://api.vvhan.com/api/hotlist?type=wbHot"
   }).then(res=>{
       // 取前30条数据
       let allData = res.data
      // 获取dom 给对应的DOM 赋值 并且赋予样式
       let hotBlockEle = document.getElementsByClassName('hotBlock')[0]
       let weiboItem  = hotBlockEle.getElementsByClassName('hotItem')[0]
       let titleEle = weiboItem.getElementsByClassName('title')[0]
       let timeEle = weiboItem.getElementsByClassName('time')[0]
       // 设置标题和刷新时间
       titleEle.innerHTML = allData.title+'热搜'
       timeEle.innerHTML = `( 更新于${allData.update_time.slice(12)} )`
       // 清空原来的新闻列表
       weiboItem.getElementsByClassName('content')[0].innerHTML = ''
       // 设置 新闻列表
       allData.data.forEach((info,infoIndex)=> {
        let contentEle = weiboItem.getElementsByClassName('content')[0]
        let indexEle = document.createElement('span')
        let infoEle = document.createElement('span')
        let hotNumEle = document.createElement('span')
        let aEle = document.createElement('a')
        let liEle = document.createElement('li')
        indexEle.innerHTML = info.index + '.'
        if(info.index == 1){
            indexEle.className = 'first'
        }
        if(info.index == 2){
            indexEle.className= 'second'
        }
        if(info.index == 3){
            indexEle.className = 'third'
        }
        infoEle.innerHTML = info.title
        hotNumEle.innerHTML = info.hot
        aEle.setAttribute('href', info.url)
        aEle.setAttribute('target', '_blank')
        aEle.setAttribute('title',info.title)
        aEle.appendChild(indexEle)
        aEle.appendChild(infoEle)
        aEle.appendChild(hotNumEle)
        liEle.appendChild(aEle)
        contentEle.appendChild(liEle)
        if(infoIndex + 1 >= 30){
            throw new Error("结束循环");
        }
    });
       

   })
}
function getZhihu(){
    axios({
        method:"get",
        url:"https://api.vvhan.com/api/hotlist?type=zhihuHot"
    }).then(res=>{
        // 取前30条数据
        let allData = res.data
       // 获取dom 给对应的DOM 赋值 并且赋予样式
        let hotBlockEle = document.getElementsByClassName('hotBlock')[0]
        let zhihuItem  = hotBlockEle.getElementsByClassName('hotItem')[1]
        let titleEle = zhihuItem.getElementsByClassName('title')[0]
        let timeEle = zhihuItem.getElementsByClassName('time')[0]
        // 设置标题和刷新时间
        titleEle.innerHTML = allData.title
        timeEle.innerHTML = `( 更新于${allData.update_time.slice(12)} )`
        // 清空原来的新闻列表
        zhihuItem.getElementsByClassName('content')[0].innerHTML = ''
        // 设置 新闻列表
        allData.data.forEach((info,infoIndex)=> {
         let contentEle = zhihuItem.getElementsByClassName('content')[0]
         let indexEle = document.createElement('span')
         let infoEle = document.createElement('span')
         let hotNumEle = document.createElement('span')
         let aEle = document.createElement('a')
         let liEle = document.createElement('li')
         indexEle.innerHTML = info.index + '.'
         if(info.index == 1){
             indexEle.className = 'first'
         }
         if(info.index == 2){
             indexEle.className= 'second'
         }
         if(info.index == 3){
             indexEle.className = 'third'
         }
         infoEle.innerHTML = info.title
         hotNumEle.innerHTML = info.hot.slice(0,-2)
         aEle.setAttribute('href', info.url)
         aEle.setAttribute('target', '_blank')
         aEle.setAttribute('title',info.title)
         aEle.appendChild(indexEle)
         aEle.appendChild(infoEle)
         aEle.appendChild(hotNumEle)
         liEle.appendChild(aEle)
         contentEle.appendChild(liEle)
         if(infoIndex + 1 >= 30){
             throw new Error("结束循环");
         }
     });
    })
}
function getBilibili(){
    axios({
        method:"get",
        url:"https://api.vvhan.com/api/hotlist?type=bili"
    }).then(res=>{
        // 取前30条数据
        let allData = res.data
       // 获取dom 给对应的DOM 赋值 并且赋予样式
        let hotBlockEle = document.getElementsByClassName('hotBlock')[0]
        let bilibiliItem  = hotBlockEle.getElementsByClassName('hotItem')[2]
        let titleEle = bilibiliItem.getElementsByClassName('title')[0]
        let timeEle = bilibiliItem.getElementsByClassName('time')[0]
        // 设置标题和刷新时间
        titleEle.innerHTML = allData.title
        timeEle.innerHTML = `( 更新于${allData.update_time.slice(12)} )`
        // 清空原来的新闻列表
        bilibiliItem.getElementsByClassName('content')[0].innerHTML = ''
        // 设置 新闻列表
        allData.data.forEach((info,infoIndex)=> {
         let contentEle = bilibiliItem.getElementsByClassName('content')[0]
         let indexEle = document.createElement('span')
         let infoEle = document.createElement('span')
         let hotNumEle = document.createElement('span')
         let aEle = document.createElement('a')
         let liEle = document.createElement('li')
         indexEle.innerHTML = info.index + '.'
         if(info.index == 1){
             indexEle.className = 'first'
         }
         if(info.index == 2){
             indexEle.className= 'second'
         }
         if(info.index == 3){
             indexEle.className = 'third'
         }
         infoEle.innerHTML = info.title
         hotNumEle.innerHTML = info.hot
         aEle.setAttribute('href', info.url)
         aEle.setAttribute('target', '_blank')
         aEle.setAttribute('title',info.title)
         aEle.appendChild(indexEle)
         aEle.appendChild(infoEle)
         aEle.appendChild(hotNumEle)
         liEle.appendChild(aEle)
         contentEle.appendChild(liEle)
         if(infoIndex + 1 >= 30){
             throw new Error("结束循环");
         }
     });
    })
}
function get36Ke(){
    axios({
        method:"get",
        url:"https://api.vvhan.com/api/hotlist?type=36Ke"
    }).then(res=>{
        // 取前30条数据
        let allData = res.data
       // 获取dom 给对应的DOM 赋值 并且赋予样式
        let hotBlockEle = document.getElementsByClassName('hotBlock')[0]
        let keItem  = hotBlockEle.getElementsByClassName('hotItem')[3]
        let titleEle = keItem.getElementsByClassName('title')[0]
        let timeEle = keItem.getElementsByClassName('time')[0]
        // 设置标题和刷新时间
        titleEle.innerHTML = allData.title+'热榜'
        timeEle.innerHTML = `( 更新于${allData.update_time.slice(12)} )`
        // 清空原来的新闻列表
        keItem.getElementsByClassName('content')[0].innerHTML = ''
        // 设置 新闻列表
        allData.data.forEach((info,infoIndex)=> {
         let contentEle = keItem.getElementsByClassName('content')[0]
         let indexEle = document.createElement('span')
         let infoEle = document.createElement('span')
         let hotNumEle = document.createElement('span')
         let aEle = document.createElement('a')
         let liEle = document.createElement('li')
         indexEle.innerHTML = info.index + '.'
         if(info.index == 1){
             indexEle.className = 'first'
         }
         if(info.index == 2){
             indexEle.className= 'second'
         }
         if(info.index == 3){
             indexEle.className = 'third'
         }
         infoEle.innerHTML = info.title
         hotNumEle.innerHTML = info.hot.slice(0,4) + '°'
         aEle.setAttribute('href', info.url)
         aEle.setAttribute('target', '_blank')
         aEle.setAttribute('title',info.title)
         aEle.appendChild(indexEle)
         aEle.appendChild(infoEle)
         aEle.appendChild(hotNumEle)
         liEle.appendChild(aEle)
         contentEle.appendChild(liEle)
         if(infoIndex + 1 >= 30){
             throw new Error("结束循环");
         }
     });
        
 
    })
}
function getItHome(){
    axios({
        method:"get",
        url:"https://api.vvhan.com/api/hotlist?type=itInfo"
    }).then(res=>{
        // 取前30条数据
        let allData = res.data
       // 获取dom 给对应的DOM 赋值 并且赋予样式
        let hotBlockEle = document.getElementsByClassName('hotBlock')[0]
        let itItem  = hotBlockEle.getElementsByClassName('hotItem')[4]
        let titleEle = itItem.getElementsByClassName('title')[0]
        let timeEle = itItem.getElementsByClassName('time')[0]
        // 设置标题和刷新时间
        titleEle.innerHTML = allData.title
        timeEle.innerHTML = `( 更新于${allData.update_time.slice(12)} )`
        // 清空原来的新闻列表
        itItem.getElementsByClassName('content')[0].innerHTML = ''
        // 设置 新闻列表
        allData.data.forEach((info,infoIndex)=> {
         let contentEle = itItem.getElementsByClassName('content')[0]
         let indexEle = document.createElement('span')
         let infoEle = document.createElement('span')
         let hotNumEle = document.createElement('span')
         let aEle = document.createElement('a')
         let liEle = document.createElement('li')
         indexEle.innerHTML = info.index + '.'
         if(info.index == 1){
             indexEle.className = 'first'
         }
         if(info.index == 2){
             indexEle.className= 'second'
         }
         if(info.index == 3){
             indexEle.className = 'third'
         }
         infoEle.innerHTML = info.title
         hotNumEle.innerHTML = ''
         aEle.setAttribute('href', info.url)
         aEle.setAttribute('target', '_blank')
         aEle.setAttribute('title',info.title)
         aEle.appendChild(indexEle)
         aEle.appendChild(infoEle)
         aEle.appendChild(hotNumEle)
         liEle.appendChild(aEle)
         contentEle.appendChild(liEle)
         if(infoIndex + 1 >= 30){
             throw new Error("结束循环");
         }
     });
        
 
    })
}
function getSspai(){
    axios({
        method:"get",
        url:"https://api.vvhan.com/api/hotlist?type=ssPai"
    }).then(res=>{
        // 取前30条数据
        let allData = res.data
       // 获取dom 给对应的DOM 赋值 并且赋予样式
        let hotBlockEle = document.getElementsByClassName('hotBlock')[0]
        let ssPaiItem  = hotBlockEle.getElementsByClassName('hotItem')[5]
        let titleEle = ssPaiItem.getElementsByClassName('title')[0]
        let timeEle = ssPaiItem.getElementsByClassName('time')[0]
        // 设置标题和刷新时间
        titleEle.innerHTML = allData.title
        timeEle.innerHTML = `( 更新于${allData.update_time.slice(12)} )`
        // 清空原来的新闻列表
        ssPaiItem.getElementsByClassName('content')[0].innerHTML = ''
        // 设置 新闻列表
        allData.data.forEach((info,infoIndex)=> {
         let contentEle = ssPaiItem.getElementsByClassName('content')[0]
         let indexEle = document.createElement('span')
         let infoEle = document.createElement('span')
         let hotNumEle = document.createElement('span')
         let aEle = document.createElement('a')
         let liEle = document.createElement('li')
         indexEle.innerHTML = info.index + '.'
         if(info.index == 1){
             indexEle.className = 'first'
         }
         if(info.index == 2){
             indexEle.className= 'second'
         }
         if(info.index == 3){
             indexEle.className = 'third'
         }
         infoEle.innerHTML = info.title
         hotNumEle.innerHTML = info.hot + '°'
         aEle.setAttribute('href', info.url)
         aEle.setAttribute('target', '_blank')
         aEle.setAttribute('title',info.title)
         aEle.appendChild(indexEle)
         aEle.appendChild(infoEle)
         aEle.appendChild(hotNumEle)
         liEle.appendChild(aEle)
         contentEle.appendChild(liEle)
         if(infoIndex + 1 >= 30){
             throw new Error("结束循环");
         }
     });
        
 
    })
}



