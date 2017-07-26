/**
 * Created by pmn on 2017/5/25.
 */
define(
    function(require,exports,module){
        var a=require("./module3.js").a;
        function show(){

            alert(a);
        }
        exports.show=show;
    }
)
