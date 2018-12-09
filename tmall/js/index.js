var ocontainer = document.getElementsByClassName("slide-box")[0];
        var obtnbox = document.getElementsByClassName("slide-btn-box")[0];
        var abtn = obtnbox.getElementsByTagName("li");
        var aimg = document.getElementsByTagName("img");
        var oImgBox = document.getElementById('slide-img-box');
        var inow = 0;

        // 点击的按钮的索引是   0    1        2        3       index
        //    imgbox   left  0    -1*750   -2*750  -3*750    -index*750

        for (var i = 0; i < abtn.length; i++) {
            abtn[i].index = i;
            abtn[i].onclick = function () {
                change(this.index);
                inow = this.index;
            }
        }

        function change(idx){
            for (var j = 0; j < abtn.length; j++) {
                abtn[j].className = "";
            }
            abtn[idx].className = "selected";
        }
        run();
        //划入时清掉定时器
        ocontainer.onmouseover = function () {
            clearInterval(timer);
        }
        //划出清掉计时器
        ocontainer.onmouseout = function () {
            run();
        }
        function run() {
            timer = setInterval(function () {
                change(inow);
                inow++;
            }, 1000);

        }  