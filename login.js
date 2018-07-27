var isChineseName = function(obj) {
	var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
	var Pattern = /^[\u4E00-\u9FA5]{2,}$/g;
	if(Pattern.test(str) == false) {
		obj.placeholder = "至少为两个汉字";
		obj.focus();
	}
};

var isEName = function(obj) {
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^[A-Za-z]+$/g; 
    if(Pattern.test(str) == false) {
    	obj.placeholder = "必须是英文字母";
        obj.focus();
    }
};

var isSuitablePwd = function(obj) {
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^[a-zA-Z0-9]{8,20}$/g; 
    if(Pattern.test(str) == false) {
    	obj.placeholder = "必须包含大小写英文和数字，并且至少为8位，最多为20位";
        obj.focus();
    }
};

var isEmptyIdol = function(obj) {
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    if(str == "" || str == undefined || str == null) {
        obj.placeholder = "本命不可以为空";
        obj.focus();
    }
};

var isInt = function(obj) {
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^[0-9]{1,3}$/g; 
    if(Pattern.test(str) == false) {
    	obj.placeholder = "必须是正整数，并且至多三位，至少一位";
        obj.focus();
    }
};

var isTelNumber = function(obj) {
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^[0-9]{11}$/g; 
    if(Pattern.test(str) == false) {
    	obj.placeholder = "号码无效";
        obj.focus();
    }
};

var isMail = function(obj) {
	var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^([a-zA-Z0-9])+\@([a-zA-Z0-9])+\.([A-Za-z]{3})$/g; 
    if(Pattern.test(str) == false) {
    	obj.placeholder = "号码无效";
        obj.focus();
    }
};

var isBetweenOneToNine = function(obj) {
	var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^[0-9]{1}$/g; 
    if(Pattern.test(str) == false) {
    	obj.placeholder = "幸运数字无效";
        obj.focus();
    }
};

var isURL = function(obj) {
	var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/g; 
    if(Pattern.test(str) == false) {
    	obj.placeholder = "url无效";
        obj.focus();
    }
};

var isMoreThanTwenty = function(obj) {
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^[A-Za-z\u4E00-\u9FA5]{20}$/g; 
    if(Pattern.test(str) == false) {
    	obj.placeholder = "格言不能超过20个字符";
        obj.focus();
    }
};

var showPwd = function(obj) {
    var pwd = document.getElementById("input-pwd");
    if (obj.innerHTML === "隐藏") {
        pwd.type = "password";
        obj.innerHTML = "显示";
    } else {
        pwd.type = "text";
        obj.innerHTML = "隐藏";
    }
};






