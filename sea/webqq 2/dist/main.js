/**
 * Created by nmp on 2017/5/25.
 */
//A����
define(function(require,exports,module){
     var btn=document.getElementById("btn");
     var div1=document.getElementById("div1");
     var div2=document.getElementById("div2");
     var div3=document.getElementById("div3");
     require("./drag.js").drag(div3);
     btn.onclick=function(){
          div1.style.display="block";
          require("./scale.js").scale(div1,div2);
     }
})
/**
 * Created by pmn on 2017/5/25.
 */
//B����
define(function(require,exports,module){
    function drag(obj){
        var disx=0;
        var disy=0;
        obj.onmousedown=function(ev){
            var ev=ev||window.event;
            disx=ev.clientX-obj.offsetLeft;
            disy=ev.clientY-obj.offsetTop;
            document.onmousemove=function(ev){
                 var  ev=ev||window.event;
                var L=ev.clientX-disx;
                var T=ev.clientY-disy;
               L= require("./range.js").range(L,0,document.documentElement.clientWidth-obj.offsetWidth);
               T= require("./range.js").range(T,0,document.documentElement.clientHeight-obj.offsetHeight);
                obj.style.left=L+"px";
                obj.style.top=T+"px";
            };
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
            }
            return false;
        }
    }
    exports.drag=drag;
})
/**
 * Created by pmn on 2017/5/25.
 */
//C����
define(function(require,exports,module){
    function scale(obj1,obj2){
      var downx=0;
      var downy=0;
      var downw=0;
        var downh=0;
        obj2.onmousedown=function(ev){
            var ev=ev||window.event;
            downx=ev.clientX;
            downy=ev.clientY;
            downh=obj1.offsetHeight;
            downw=obj1.offsetWidth;
            document.onmousemove=function(ev){
                var ev=ev||window.event;
                var w=ev.clientX-downx+downw;
                var t=ev.clientY-downy+downh;
                w=require("./range.js").range(w,100,500);
                t=require("./range.js").range(t,100,500);

                obj1.style.width=w+"px";
                obj1.style.height=t+"px";
            }
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
            }
            return false;
        }
    }
    exports.scale=scale;
})
/**
 * Created by pmn on 2017/5/25.
 */
//C����
define(function(require,exports,module){
    function range(val,min,max){
       if(val>max){
           return max;
       }
        else if(val<min){
           return min;
       }else {
           return val;
       }
    }
    exports.range=range;
})