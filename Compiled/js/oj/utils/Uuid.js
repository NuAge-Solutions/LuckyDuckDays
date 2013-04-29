"use strict";(function(){var f=window;var t,j,v;var e=new Array(16);t=function(){var z,x=e,y=0;for(;y<16;y++){if((y&3)==0){z=Math.random()*4294967296}x[y]=z>>>((y&3)<<3)&255}return x};if(f&&f.crypto&&crypto&&crypto.getRandomValues){var b=new Uint32Array(4);v=function(){crypto.getRandomValues(b);for(var i=0;i<16;i++){e[i]=b[i>>2]>>>((i&3)*8)&255}return e}}var m=j||v||t;var q=typeof(Buffer)=="function"?Buffer:Array;var k=[];var l={};for(var s=0;s<256;s++){k[s]=(s+256).toString(16).substr(1);l[k[s]]=s}function o(A,x,B){var y=(x&&B)||0,z=0;x=x||[];A.toLowerCase().replace(/[0-9a-f]{2}/g,function(i){if(z<16){x[y+z++]=l[i]}});while(z<16){x[y+z++]=0}return x}function n(x,z){var y=z||0,A=k;return A[x[y++]]+A[x[y++]]+A[x[y++]]+A[x[y++]]+"-"+A[x[y++]]+A[x[y++]]+"-"+A[x[y++]]+A[x[y++]]+"-"+A[x[y++]]+A[x[y++]]+"-"+A[x[y++]]+A[x[y++]]+A[x[y++]]+A[x[y++]]+A[x[y++]]+A[x[y++]]}var h=m();var u=[h[0]|1,h[1],h[2],h[3],h[4],h[5]];var w=(h[6]<<8|h[7])&16383;var d=0,p=0;function g(J,z,D){var E=z&&D||0;var F=z||[];J=J||{};var C=J.clockseq!=null?J.clockseq:w;var x=J.msecs!=null?J.msecs:new Date().getTime();var I=J.nsecs!=null?J.nsecs:p+1;var y=(x-d)+(I-p)/10000;if(y<0&&J.clockseq==null){C=C+1&16383}if((y<0||x>d)&&J.nsecs==null){I=0}if(I>=10000){throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")}d=x;p=I;w=C;x+=12219292800000;var H=((x&268435455)*10000+I)%4294967296;F[E++]=H>>>24&255;F[E++]=H>>>16&255;F[E++]=H>>>8&255;F[E++]=H&255;var G=(x/4294967296*10000)&268435455;F[E++]=G>>>8&255;F[E++]=G&255;F[E++]=G>>>24&15|16;F[E++]=G>>>16&255;F[E++]=C>>>8|128;F[E++]=C&255;var B=J.node||u;for(var A=0;A<6;A++){F[E+A]=B[A]}return z?z:n(F)}function c(y,x,C){var z=x&&C||0;if(typeof(y)=="string"){x=y=="binary"?new q(16):null;y=null}y=y||{};var B=y.random||(y.rng||m)();B[6]=(B[6]&15)|64;B[8]=(B[8]&63)|128;if(x){for(var A=0;A<16;A++){x[z+A]=B[A]}}return x||n(B)}var r=c;r.v1=g;r.v4=c;r.parse=o;r.unparse=n;r.BufferClass=q;r.mathRNG=t;r.nodeRNG=j;r.whatwgRNG=v;if(typeof(module)!="undefined"){module.exports=r}else{var a=f.uuid;r.noConflict=function(){f.uuid=a;return r};f.uuid=r}})();