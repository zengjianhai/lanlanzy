// 服务器根地址
var PATH = "http://106.54.77.69:9999/";
// WEBPATH存放cookie的路径
var WEBPATH = "http://106.54.77.69";
// 存放cookie的有效时间
var VALIDTIME = (60 * 60 * 1000);

$(function(){
	WEBPATH	= getRootPath();
})

var reg_password= /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/ ;
validatePhone = function(str) {
   const reg = /^(13[0-9]|14[5-9]|15[0-3,5-9]|16[2,5,6,7]|17[0-8]|18[0-9]|19[1,3,5,8,9])\\d{8}$/
   return reg.test(str)
}
function getRootPath(){    
	//获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp    
	var curWwwPath=window.document.location.href;    
	//获取主机地址之后的目录，如： uimcardprj/share/meun.jsp    
	var pathName=window.document.location.pathname;    
	var pos=curWwwPath.indexOf(pathName);    
	//获取主机地址，如： http://localhost:8083    
	var localhostPaht=curWwwPath.substring(0,pos);    
	//获取带"/"的项目名，如：/uimcardprj    
	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);    
	return(localhostPaht+projectName);
}
StringEmpty = function(str) {
   	if(str == "" || str == null || str == undefined){
   		return true;
    }
    return false;
}
function getDocumentTop() {
    var scrollTop =  0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

//可视窗口高度
function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

//滚动条滚动高度
function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}
function getUrlParams(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if(r != null) return decodeURI(r[2]);
				return null;
			}
			getdate=function(timestamp){
			    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			    Y = date.getFullYear() + '-';
			    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			    D = date.getDate()<10?'0'+date.getDate():date.getDate();
			    h = date.getHours() + ':';
    			m = date.getMinutes() + '';
			    return Y+M+D+" "+h+m;
			 }
			gettimedate=function(timestamp){
			    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			    Y = date.getFullYear() + '/';
			    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
			    D = date.getDate()<10?'0'+date.getDate():date.getDate();
			    h = date.getHours() + ':';
    			m = date.getMinutes() + '';
			    return Y+M+D;
			 }
			AlertBox = function (json) {
		        GenerateHtml("alert", json);
		        btnOk();  //alert只是弹出消息，因此没必要用到回调函数callback
		        btnNo();
		    },
		    ConfirmBox = function (json, callback) {
		        GenerateHtml("confirm", json);
		        btnOk(callback);
		        btnNo();
		    }
		    //生成Html
		    var GenerateHtml = function (type, json) {
		        var _html = "";
		        _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + json.title + '</span>';
		        _html += '<div id="mb_msg">' + json.msg + '</div><div id="mb_btnbox">';
		        if (type == "alert") {
		            _html += '<input id="mb_btn_ok" type="button" value="'+json.arraybtn[0]+'" />';
		        }
		        if (type == "confirm") {
		            _html += '<input id="mb_btn_ok" type="button" value="'+json.arraybtn[0]+'" />';
		            _html += '<input id="mb_btn_no" type="button" value="'+json.arraybtn[1]+'" />';
		        }
		        _html += '</div></div>';
		        //必须先将_html添加到body，再设置Css样式
		        $("body").append(_html); 
		        //生成Css
		        GenerateCss();
		    }
		 
		    //生成Css
		    var GenerateCss = function () {
		        $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99998', position: 'fixed',
		            filter: 'Alpha(opacity=60)', top: '0', left: '0', opacity: '0.6',background: 'rgba(0, 0, 0, 0.133)'
		        });
		        $("#mb_con").css({ zIndex: '999999', width: '350px', position: 'fixed',boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 3px 1px',
		            backgroundColor: 'White', borderRadius: '0.2133rem', left: '10%', textAlign: 'center'
		        });
		        $("#mb_tit").css({ display: 'block', fontSize: '16px', color: '#444', padding: '20px 0 20px 0',
		            borderRadius: '0.2133rem 0.2133rem 0 0', fontWeight: 'bold'
		        });
		        $("#mb_msg").css({ padding: '10px', lineHeight: '1.5', fontSize: '14px'
		        });
		        $("#mb_btnbox").css({ margin: '20px 0px 15px 0', textAlign: 'center',lineHeight:'1.7066rem' });
		        $("#mb_btn_ok,#mb_btn_no").css({ color: 'white', border: 'none' });
		        $("#mb_btn_ok").css({ backgroundColor: '#6da0e3' , fontSize: '14px',marginBottom:'0.4267rem',padding: '5px 15px',borderRadius:'3px'});
		        $("#mb_btn_no").css({ backgroundColor: '#6da0e3' , fontSize: '14px',marginBottom:'0.4267rem',padding: '5px 15px',borderRadius:'3px', marginLeft: '0.8533rem' });
		        var _widht = document.documentElement.clientWidth;  //屏幕宽
		        var _height = document.documentElement.clientHeight; //屏幕高
		        var boxWidth = $("#mb_con").width();
		        var boxHeight = $("#mb_con").height();
		        //让提示框居中
		        $("#mb_con").css({ top: (_height - boxHeight - 300) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
		    }
		    //确定按钮事件
		    var btnOk = function (callback) {
		        $("#mb_btn_ok").click(function () {
		            $("#mb_box,#mb_con").remove();
		            if (typeof (callback) == 'function') {
		                callback();
		            }
		        });
		    }
		    //取消按钮事件
		    var btnNo = function () {
		        $("#mb_btn_no,#mb_ico").click(function () {
		            $("#mb_box,#mb_con").remove();
		        });
		    }