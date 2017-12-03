
//公共函数类

module.exports = {
 
    removeStore: function(key){
        localStorage.removeItem(key);
    },
    getStore: function(key) {
        var val = localStorage.getItem(key) || "";
        return ( val.substr(0, 1) === "{" || val.substr(0, 1) === "[" ) ? JSON.parse(localStorage.getItem(key)) : val;
    },
    setStore: function(key, value) {
        var value = typeof(value) === 'object' ? JSON.stringify(value) : value;
        localStorage.setItem(key, value)
    },
	 //存取sessionStorage
    getSession: function(key) {
        var val = sessionStorage.getItem(key) || "";
        return ( val.substr(0, 1) === "{" || val.substr(0, 1) === "[" ) ? JSON.parse(sessionStorage.getItem(key)) : val;
    },
    setSession: function(key, value) {
        var value = typeof(value) === 'object' ? JSON.stringify(value) : value;
        sessionStorage.setItem(key, value)
    },
    useDefaultImg: function() {
    	$('img').bind('error', function() {
    		this.remove();
    		//this.src = defaultImg;
    		//$(this).unbind('error');
    	});
    },
    post: function(vue, options) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self._ajax(vue, options, 'POST', resolve, reject);
        });
    },
    get: function(vue, options) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self._ajax(vue, options, 'GET', resolve, reject);
        });
    },
    _ajax: function(vue, options, methodType, resolve, reject) {
        var self = this;
        options.data = options.data ? options.data : {};
        reject = reject || function() {};
        $.ajax({
            url: Config.API_URL + options.api,
            type: methodType,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(options.data),
            success: function(response, status, xhr) {
                //accessToken失效application
                resolve(self.filter(response));
            },
            error: function(response, status) {
                console.log('cao1');
                reject(response, status);
            },
            complete: function(response) {
                self.afterAjax(vue, options);
            }
        });
    },
    beforeAjax: function(vue, options) {
        
    },
    afterAjax: function(vue, options) {
        
    },
    setStoreExp: function(key,value){
        var curTime = new Date().getTime();
        localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
    },
    getStoreExp: function(key){
        var exp = 7000000;
        var data = localStorage.getItem(key);
        if(!data){
            return '';
        }
        var dataObj = JSON.parse(data);
        if (new Date().getTime() - dataObj.time > exp) {
            return '';
        }else{
            //return JSON.parse(dataObj.data);
            return dataObj.data;
        }
    },
    getTimeStamp: function(){
        var self = this;
        return self.dateFormat(new Date, 'yyyyMMddhhmmss');
    },
    filter: function(data) {
        return data;
    },
    dateFormat: function(time, fmt) { //author: meizz 
        if(time == null || time == ""){
            return "";
        }
        else
        {
            var date = new Date(time);
            var o = { 
                "M+" : date.getMonth()+1,                 //月份 
                "d+" : date.getDate(),                    //日 
                "h+" : date.getHours(),                   //小时 
                "m+" : date.getMinutes(),                 //分 
                "s+" : date.getSeconds(),                 //秒 
                "q+" : Math.floor((date.getMonth()+3)/3), //季度 
                "S"  : date.getMilliseconds()             //毫秒 
            }; 
            if(/(y+)/.test(fmt)) 
            fmt = fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
            for(var k in o) 
                if(new RegExp("("+ k +")").test(fmt)) 
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));

            return fmt;
        }
    },
    //小数点保留2位
    toDecimal: function (x) {
        var f = parseFloat(x);  
        if (isNaN(f)) {  
            return false;  
        }  
        var f = Math.round(x*100)/100;  
        var s = f.toString();  
        var rs = s.indexOf('.');  
        if (rs < 0) {  
            rs = s.length;  
            s += '.';  
        }  
        while (s.length <= rs + 2) {  
            s += '0';  
        }  
        return s;  
    },
    //根据日期返回星期
    toWeek : function(date){
        var d = new  Date(date).getDay();
        var str = "";
        switch(d){
            case 1:
                return "星期一";
                break;
            case 2:
                return "星期二";
                break;
            case 3:
                return "星期三";
                break;
            case 4:
                return "星期四";
                break;
            case 5:
                return "星期五";
                break;
            case 6:
                return "星期六";
                break;
            case 7:
            case 0:
                return "星期日";
                break;
        }
    },
    //获取今天之后的六天时间列表
    getDatelist:function(){
       var self = this;
       var datelist = [];
       var today = new Date();
       // var newsdate = today.setHours(today.getHours()+8);
       var n = 0;
      
       var todaydate =  self.getformat( Date.parse( new Date())/1000);//self.getformat(Date.parse( new Date())); //获取昨天的时间戳
       var beginDate = todaydate.toString()+" 08:00:00";
       console.log("=beginDate==",beginDate);
       var startdate = Date.parse(new Date(beginDate))/1000;
       console.log("==startdate==",startdate);
       console.log("==当前时间==",Date.parse( new Date())/1000);
       if(Date.parse(new Date())/1000 < startdate){
          n = 1;
       }
       for(var i=n; i<(n+7);i++){
          datelist.push(self.GetDateStr((-1)*i));
       }
       return datelist;
    },
    //根据时间戳，截取时间
    gettimelist: function(timestamp){
      var timelist = [];
      var self = this, enddate,
        // date = self.getformat(timestamp),
      todaydate = self.getformat(timestamp);
      var beginDate = todaydate.toString()+" 08:00:00";

      // console.log("==今天的日期是==",self.getformat(Date.parse( new Date())));
      //开始时间戳
      var startdate = Date.parse(new Date(beginDate))/1000;

      //如果开始时间戳大于当前时间戳，则将开始时间定为昨天
      // if(startdate > self.getformat(Date.parse( new Date())/1000)){
      //     todaydate =  self.getformat(self.GetDateStr(-1).val); //获取昨天的时间戳
      //     beginDate = todaydate.toString()+" 08:00:00";
      //     startdate = Date.parse(new Date(beginDate))/1000;
      // }

      if (todaydate === self.getformat(Date.parse( new Date())/1000)) {
        //今天
        enddate = Date.parse( new Date())/1000;
      }else if (new Date(timestamp) < new Date()){
        enddate = todaydate.toString()+" 23:00:00";
        //结束时间戳
        enddate = Date.parse(new Date(enddate))/1000;
      }
      for(var i = 0 ;i<40; i++){
          var second = 1800;
          var endtime = startdate+(i+1)*second;
          if(endtime <= enddate){
              timelist.push({'startname':self.dateFormat((startdate+(i*second))*1000,"hh:mm") ,
                'startval':startdate+(i*second) ,'endname': self.dateFormat((endtime)*1000,"hh:mm"), 'endval':endtime} );
          }else{
              timelist.push({'startname':self.dateFormat((startdate+(i*second))*1000,"hh:mm") ,'startval':startdate+(i*second) ,
                'endname': self.dateFormat((enddate)*1000,"hh:mm"), 'endval': enddate} );
              return timelist;
          }
      }

    },
    // function add0(m){return m<10?'0'+m:m }
    getformat: function(timestamp)
    {
      var self = this;
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(parseInt(timestamp)*1000);//new Date(Date(parseInt(timestamp) * 1000));// Date(parseInt(timestamp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
      // console.log("===计算时间=",time);
      var y = time.getFullYear();
      var m = time.getMonth()+1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return y+'/'+m+'/'+d;//+' '+add0(h)+':'+add0(mm)+':'+add0(s);
    },
    //判断是iOS

}
