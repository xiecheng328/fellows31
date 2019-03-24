
var iNow = 1;
$(document).on('swipeUp',function(){
    // console.log(1111111);
    // 当前图片 滑上去   添加class "page-1 moveToTop"
    $('.page-'+iNow).attr("class","page-"+iNow+" moveToTop");
    // 找到下一张图 从下边滑出来   "page-2 moveFromBottom"(iNow+1)
    $('.page-'+(iNow+1)).attr("class","page-"+(iNow+1)+" moveFromBottom"  );


});