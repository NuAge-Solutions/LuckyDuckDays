"use strict";window.OjEasing={NONE:function(b,e,c,a){return((c*b)/a)+e},IN:function(b,e,c,a){return(-c*Math.cos((b/a)*(Math.PI/2)))+c+e},OUT:function(b,e,c,a){return(c*Math.sin((b/a)*(Math.PI/2)))+e},IN_OUT:function(b,e,c,a){return((-c/2)*(Math.cos((Math.PI*b)/a)-1))+e},STRONG_IN:function(b,e,c,a){return(b==0)?e:c*Math.pow(2,10*((b/a)-1))+e},STRONG_OUT:function(b,e,c,a){return(b==a)?e+c:c*(-Math.pow(2,-10*(b/a))+1)+e},STRONG_IN_OUT:function(b,e,c,a){if(b==0){return e}if(b==a){return e+c}b=b/(a/2);if(b<1){return(c/2)*Math.pow(2,10*(b-1))+e}return(c/2)*(-Math.pow(2,-10*--b)+2)+e},ELASTIC_IN:function(e,i,h,c,b,g){if(e==0){return i}e=e/c;if(e==1){return i+h}if(!g){g=c*0.3}var f;if(!b||b<Math.abs(h)){b=h;f=g/4}else{f=(g/(2*Math.PI))*Math.asin(h/b)}return(-(b*Math.pow(2,10*(e-=1))*Math.sin(((e*c)-f)*(2*Math.PI)/g)))+h},ELASTIC_OUT:function(e,i,h,c,b,g){if(e==0){return i}e=e/c;if(e==1){return i+h}if(!g){g=c*0.3}var f;if(!b||b<Math.abs(h)){b=h;f=g/4}else{f=(g/(2*Math.PI))*Math.asin(h/b)}return(b*Math.pow(2,-10*e)*Math.sin((e*c-f)*(2*Math.PI)/g)+h+i)},ELASTIC_IN_OUT:function(e,i,h,c,b,g){if(e==0){return i}e=e/(c/2);if(e==2){return i+h}if(!g){g=c*(0.3*1.5)}var f;if(!b||b<Math.abs(h)){b=h;f=g/4}else{f=(g/(2*Math.PI))*Math.asin(h/b)}if(e<1){return -0.5*(b*Math.pow(2,10*(e-=1))*Math.sin((e*c-f)*(2*Math.PI)/g))+i}return b*Math.pow(2,-10*(e-=1))*Math.sin((e*c-f)*(2*Math.PI)/g)*0.5+h+i}};