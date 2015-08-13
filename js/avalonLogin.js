var vm=avalon.define({
    $id:"a1",
    inputName:"",
    inputPwd:"",
    login:function(){
        console.log("in line");
    }
});

vm.login=function(){
    $.ajax({
        url:"data/avalonLoginData.json",
        dataType:"json",
        success:function(data){
            var flag=false;
            for(var i=0;i<data.length;i++){
                if(data[i].username==vm.inputName && data[i].password==vm.inputPwd){
                    flag=true;
                    break;
                }
            }
            if(flag){
                alert("登录成功！");
            }else{
                alert("登录失败！");
            }
        }
    })
}