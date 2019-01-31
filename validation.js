function validate(){
    var uname = stdreg.uname.value;
    var upwd = stdreg.upwd.value;
    var cupwd = stdreg.cupwd.value;
    var fname = stdreg.fname.value;
    var lname = stdreg.lname.value;
    var uemail = stdreg.uemail.value;
    var ucourse = stdreg.ucourse.selectedIndex;
    var umobno = stdreg.umno.value;
    var flag = false;
    var str = "";
    var efilter = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
     var usr = /^([a-zA-Z0-9])+$/;
    if(uname.trim()==="" || !usr.test(uname)){
        flag=true;
        str +="  Username should not be blank!!\n";
    }
    if(upwd.trim()===""&&cupwd.trim()===""||upwd!=cupwd){
        flag=true;
        str +="  Password is Blank or Does not Match!!\n";
    }
    if(fname.trim()===""){
        flag = true;
        str += "  Firstname should not be blank!!\n";
    }
    if(lname.trim()===""){
        flag=true;
        str += "  Lastname should not be blank!!\n";
    }
    if(stdreg.gender[0].checked==false&&stdreg.gender[1].checked==false){
        flag=true;
        str +=" Gender is not selected!!\n";
    }
    if(!efilter.test(uemail)){
        flag=true;
        str +="  Email is not valid!!!\n";
    }
    if(ucourse==0){
        flag=true;
        str+="  Course is not selected!!\n";
    }
    if(isNaN(umobno)||umobno.length<12){
        flag = true;
        str+="  Mobile Number is not valid!!\n";
    }
    if(flag){
        alert("Warning!!\n"+str);
        return false;
    }
    else{
        return true;
    }
}
