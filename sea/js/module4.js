/**
 * Created by pmn on 2017/7/21.
 */
define(
function(require,exports,module){
    alert(module.exports==exports);
    require.async('.js/module2.js',function(){
            alert('ģ�������Ļص�');
        }

    )
    var a=100;
    module.exports={
        a:a
    }
}
)