var Body = {
    color:function(color){
        document.querySelector('body').style.color= color;
    },
    backGroundColor:function(color){
        document.querySelector('body').style.backgroundColor= color;
    }
};
function LinkColor(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    document.querySelector('a').style.color=color;
    while(i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
        }
};
function GridColor(color){
    document.querySelector('#grid').style.color= color;
};
function NightDayHandler(self){
    if(self.value === 'night'){
        Body.backGroundColor('black');
        Body.color('black');
        LinkColor('white');
        GridColor('white');
        self.value = 'day';
    } else{
        Body.backGroundColor('white');
        Body.color('white');
        LinkColor('black');
        GridColor('black');
        self.value = 'night';
        }
}