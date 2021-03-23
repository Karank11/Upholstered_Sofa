            var index=1;
            Display(index);
            function Change(n){
                Display(index+=n);
            }
            function Current(n){
                Display(index=n);
            }
            function Display(n){
                var i;
                var sl=document.getElementsByClassName("slide");
                var gal=document.getElementsByClassName("demo");
                if(n>sl.length){
                    index=1;
                }
                if(n<1){
                    index=sl.length;
                }
                for(i=0;i<sl.length;i++){
                    sl[i].style.display = "none";
                }
                for(i=0;i<gal.length;i++){
                    gal[i].className=gal[i].className.replace(" active" ,"");
                }
                sl[index-1].style.display="block";
                gal[index-1].className+=" active";
            }