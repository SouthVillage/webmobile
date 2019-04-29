$(function(){
  // mui('.mui-scroll-wrapper').scroll({
  //   indicators:false
  // })

  getCateGory(function(data){
     $('cate_left ul').html(template('firsttemplate',data));
  })
  var id1 = $('cate_right li:first-child').find('a').attr('data-id')
  getCateGory1({id:id1,function(data){
    $('cate_right ul').html(template('secondtemplate',data))
  }})

});

var getCateGory = function(callback){
  $.ajax({
    url:'/category/queryTopCategory',
    type:'get',
    data:'',
    dataType:'json',
    success:function(data){
      callback&&callback(data);
    }
  })
}
var getCateGory1 = function(parmas,callback){
  $.ajax({
    url:'/category/querySecondCategory',
    type:'get',
    data:'parmas',
    dataType:'json',
    success:function(data){
      callback&&callback(data)
    }
  })
}