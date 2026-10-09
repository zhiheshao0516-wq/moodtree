var qa,Ya,Za,Ja,Zr,Ka,rm="186",am={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},sm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tu=0,ol=1,wu=2,nm=3,om=0,Qa=1,Eu=2,$r=3,Gi=0,Xt=1,vi=2,Li=0,Qr=1,ll=2,hl=3,ul=4,Au=5,lm=6,Tr=100,Cu=101,Ru=102,Iu=103,Pu=104,Lu=200,Nu=201,Uu=202,Du=203,cl=204,dl=205,Ou=206,Fu=207,Bu=208,zu=209,Gu=210,Vu=211,ku=212,Hu=213,Wu=214,Zs=0,Js=1,Ks=2,ea=3,$s=4,Qs=5,en=6,tn=7,es=0,Xu=1,ju=2,xi=0,pl=1,fl=2,ml=3,gl=4,_l=5,vl=6,xl=7,yl="attached",qu="detached",rn=300,Ni=301,nr=302,ts=303,is=304,ta=306,or=1e3,jt=1001,ia=1002,xt=1003,an=1004,hm=1004,wr=1005,um=1005,pt=1006,ra=1007,cm=1007,ui=1008,dm=1008,Qt=1009,Sl=1010,Ml=1011,aa=1012,sn=1013,ci=1014,qt=1015,yi=1016,nn=1017,on=1018,sa=1020,bl=35902,Tl=35899,wl=1021,El=1022,Yt=1023,Ui=1026,lr=1027,ln=1028,rs=1029,hr=1030,hn=1031,pm=1032,un=1033,as=33776,ss=33777,ns=33778,os=33779,cn=35840,dn=35841,pn=35842,fn=35843,mn=36196,gn=37492,_n=37496,vn=37488,xn=37489,ls=37490,yn=37491,Sn=37808,Mn=37809,bn=37810,Tn=37811,wn=37812,En=37813,An=37814,Cn=37815,Rn=37816,In=37817,Pn=37818,Ln=37819,Nn=37820,Un=37821,Dn=36492,On=36494,Fn=36495,Bn=36283,zn=36284,hs=36285,Gn=36286,Yu=2200,Zu=2201,Ju=2202,na=2300,oa=2301,Vn=2302,Al=2303,Er=2400,Ar=2401,us=2402,kn=2500,Cl=2501,Ku=0,Rl=1,Hn=2,$u=3200,fm=3201,mm=3202,gm=3203,Vi=0,Qu=1,ki="",Lt="srgb",ei="srgb-linear",cs="linear",ot="srgb",_m="",vm="rg",xm="ga",ym=0,Wn=7680,Sm=7681,Mm=7682,bm=7683,Tm=34055,wm=34056,Em=5386,Am=512,Cm=513,Rm=514,Im=515,Pm=516,Lm=517,Nm=518,ec=519,tc=512,ic=513,rc=514,Xn=515,ac=516,sc=517,jn=518,nc=519,qn=35044,Um=35048,Dm=35040,Om=35045,Fm=35049,Bm=35041,zm=35046,Gm=35050,Vm=35042,km="100",Il="300 es",ai=2e3,Cr=2001,Hm={COMPUTE:"compute",RENDER:"render"},Wm={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Xm={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},jm={TEXTURE_COMPARE:"depthTextureCompare"},qm={NONE:0,SHARED:1,FULL:2};function Ym(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}var Zm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function la(e,t){return new Zm[e](t)}function oc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ds(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function lc(){let e=ds("canvas");return e.style.display="block",e}var hc={},ur=null;function Jm(e){ur=e}function Km(){return ur}function ps(...e){let t="THREE."+e.shift();ur?ur("log",t,...e):console.log(t,...e)}function uc(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function pe(...e){e=uc(e);let t="THREE."+e.shift();if(ur)ur("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Pe(...e){e=uc(e);let t="THREE."+e.shift();if(ur)ur("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Hi(...e){let t=e.join(" ");t in hc||(hc[t]=!0,pe(...e))}function $m(e,t,i){return new Promise(function(r,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}var Qm={[Zs]:Js,[Ks]:en,[$s]:tn,[ea]:Qs,[Js]:Zs,[en]:Ks,[tn]:$s,[Qs]:ea},Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=1234567,Rr=Math.PI/180,ha=180/Math.PI;function si(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gt[e&255]+Gt[e>>8&255]+Gt[e>>16&255]+Gt[e>>24&255]+"-"+Gt[t&255]+Gt[t>>8&255]+"-"+Gt[t>>16&15|64]+Gt[t>>24&255]+"-"+Gt[i&63|128]+Gt[i>>8&255]+"-"+Gt[i>>16&255]+Gt[i>>24&255]+Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]).toLowerCase()}function Ge(e,t,i){return Math.max(t,Math.min(i,e))}function Pl(e,t){return(e%t+t)%t}function eg(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function tg(e,t,i){return e!==t?(i-e)/(t-e):0}function fs(e,t,i){return(1-i)*e+i*t}function ig(e,t,i,r){return fs(e,t,1-Math.exp(-i*r))}function rg(e,t=1){return t-Math.abs(Pl(e,t*2)-t)}function ag(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function sg(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function ng(e,t){return e+Math.floor(Math.random()*(t-e+1))}function og(e,t){return e+Math.random()*(t-e)}function lg(e){return e*(.5-Math.random())}function hg(e){e!==void 0&&(cc=e);let t=cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ug(e){return e*Rr}function cg(e){return e*ha}function dg(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function pg(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function fg(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function mg(e,t,i,r,a){let s=Math.cos,n=Math.sin,o=s(i/2),l=n(i/2),h=s((t+r)/2),u=n((t+r)/2),d=s((t-r)/2),c=n((t-r)/2),p=s((r-t)/2),g=n((r-t)/2);switch(a){case"XYX":e.set(o*u,l*d,l*c,o*h);break;case"YZY":e.set(l*c,o*u,l*d,o*h);break;case"ZXZ":e.set(l*d,l*c,o*u,o*h);break;case"XZX":e.set(o*u,l*g,l*p,o*h);break;case"YXY":e.set(l*p,o*u,l*g,o*h);break;case"ZYZ":e.set(l*g,l*p,o*u,o*h);break;default:pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ze(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var dc={DEG2RAD:Rr,RAD2DEG:ha,generateUUID:si,clamp:Ge,euclideanModulo:Pl,mapLinear:eg,inverseLerp:tg,lerp:fs,damp:ig,pingpong:rg,smoothstep:ag,smootherstep:sg,randInt:ng,randFloat:og,randFloatSpread:lg,seededRandom:hg,degToRad:ug,radToDeg:cg,isPowerOfTwo:dg,ceilPowerOfTwo:pg,floorPowerOfTwo:fg,setQuaternionFromProperEuler:mg,normalize:Ze,denormalize:Zt},te=(qa=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ge(this.x,t.x,i.x),this.y=Ge(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ge(this.x,t,i),this.y=Ge(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),s=this.x-t.x,n=this.y-t.y;return this.x=s*r-n*a+t.x,this.y=s*a+n*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qa.prototype.isVector2=!0,qa),Bt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,n){let o=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=a[s+0],c=a[s+1],p=a[s+2],g=a[s+3];if(u!==g||o!==d||l!==c||h!==p){let _=o*d+l*c+h*p+u*g;_<0&&(d=-d,c=-c,p=-p,g=-g,_=-_);let m=1-n;if(_<.9995){let f=Math.acos(_),y=Math.sin(f);m=Math.sin(m*f)/y,n=Math.sin(n*f)/y,o=o*m+d*n,l=l*m+c*n,h=h*m+p*n,u=u*m+g*n}else{o=o*m+d*n,l=l*m+c*n,h=h*m+p*n,u=u*m+g*n;let f=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=f,l*=f,h*=f,u*=f}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,s){let n=i[r],o=i[r+1],l=i[r+2],h=i[r+3],u=a[s],d=a[s+1],c=a[s+2],p=a[s+3];return e[t]=n*p+h*u+o*c-l*d,e[t+1]=o*p+h*d+l*u-n*c,e[t+2]=l*p+h*c+n*d-o*u,e[t+3]=h*p-n*u-o*d-l*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,s=e._order,n=Math.cos,o=Math.sin,l=n(i/2),h=n(r/2),u=n(a/2),d=o(i/2),c=o(r/2),p=o(a/2);switch(s){case"XYZ":this._x=d*h*u+l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u-d*c*p;break;case"YXZ":this._x=d*h*u+l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u+d*c*p;break;case"ZXY":this._x=d*h*u-l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u-d*c*p;break;case"ZYX":this._x=d*h*u-l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u+d*c*p;break;case"YZX":this._x=d*h*u+l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u-d*c*p;break;case"XZY":this._x=d*h*u-l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u+d*c*p;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],n=t[5],o=t[9],l=t[2],h=t[6],u=t[10],d=i+n+u;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(h-o)*c,this._y=(a-l)*c,this._z=(s-r)*c}else if(i>n&&i>u){let c=2*Math.sqrt(1+i-n-u);this._w=(h-o)/c,this._x=.25*c,this._y=(r+s)/c,this._z=(a+l)/c}else if(n>u){let c=2*Math.sqrt(1+n-i-u);this._w=(a-l)/c,this._x=(r+s)/c,this._y=.25*c,this._z=(o+h)/c}else{let c=2*Math.sqrt(1+u-i-n);this._w=(s-r)/c,this._x=(a+l)/c,this._y=(o+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,n=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+s*n+r*l-a*o,this._y=r*h+s*o+a*n-i*l,this._z=a*h+s*l+i*o-r*n,this._w=s*h-i*n-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,n=this.dot(e);n<0&&(i=-i,r=-r,a=-a,s=-s,n=-n);let o=1-t;if(n<.9995){let l=Math.acos(n),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=(Ya=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(pc.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[3]*r+s[6]*a,this.y=s[1]*i+s[4]*r+s[7]*a,this.z=s[2]*i+s[5]*r+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=t.elements,n=1/(s[3]*i+s[7]*r+s[11]*a+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*a+s[12])*n,this.y=(s[1]*i+s[5]*r+s[9]*a+s[13])*n,this.z=(s[2]*i+s[6]*r+s[10]*a+s[14])*n,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,s=t.x,n=t.y,o=t.z,l=t.w,h=2*(n*a-o*r),u=2*(o*i-s*a),d=2*(s*r-n*i);return this.x=i+l*h+n*d-o*u,this.y=r+l*u+o*h-s*d,this.z=a+l*d+s*u-n*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a,this.y=s[1]*i+s[5]*r+s[9]*a,this.z=s[2]*i+s[6]*r+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ge(this.x,t.x,i.x),this.y=Ge(this.y,t.y,i.y),this.z=Ge(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ge(this.x,t,i),this.y=Ge(this.y,t,i),this.z=Ge(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,s=t.z,n=i.x,o=i.y,l=i.z;return this.x=a*l-s*o,this.y=s*n-r*l,this.z=r*o-a*n,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ll.copy(this).projectOnVector(t),this.sub(Ll)}reflect(t){return this.sub(Ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ya.prototype.isVector3=!0,Ya),Ll=new R,pc=new Bt,qe=(Za=class{constructor(t,i,r,a,s,n,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h)}set(t,i,r,a,s,n,o,l,h){let u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=i,u[4]=s,u[5]=l,u[6]=r,u[7]=n,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[3],l=r[6],h=r[1],u=r[4],d=r[7],c=r[2],p=r[5],g=r[8],_=a[0],m=a[3],f=a[6],y=a[1],M=a[4],v=a[7],b=a[2],E=a[5],C=a[8];return s[0]=n*_+o*y+l*b,s[3]=n*m+o*M+l*E,s[6]=n*f+o*v+l*C,s[1]=h*_+u*y+d*b,s[4]=h*m+u*M+d*E,s[7]=h*f+u*v+d*C,s[2]=c*_+p*y+g*b,s[5]=c*m+p*M+g*E,s[8]=c*f+p*v+g*C,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return i*n*u-i*o*h-r*s*u+r*o*l+a*s*h-a*n*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],u=t[8],d=u*n-o*h,c=o*l-u*s,p=h*s-n*l,g=i*d+r*c+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(a*h-u*r)*_,t[2]=(o*r-a*n)*_,t[3]=c*_,t[4]=(u*i-a*l)*_,t[5]=(a*s-o*i)*_,t[6]=p*_,t[7]=(r*l-h*i)*_,t[8]=(n*i-r*s)*_,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,s,n,o){let l=Math.cos(s),h=Math.sin(s);return this.set(r*l,r*h,-r*(l*n+h*o)+n+t,-a*h,a*l,-a*(-h*n+l*o)+o+i,0,0,1),this}scale(t,i){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nl.makeScale(t,i)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nl.makeRotation(-t)),this}translate(t,i){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nl.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Za.prototype.isMatrix3=!0,Za),Nl=new qe,fc=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gg(){let e={enabled:!0,workingColorSpace:ei,spaces:{},convert:function(a,s,n){return this.enabled===!1||s===n||!s||!n||(this.spaces[s].transfer===ot&&(a.r=Wi(a.r),a.g=Wi(a.g),a.b=Wi(a.b)),this.spaces[s].primaries!==this.spaces[n].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ot&&(a.r=ua(a.r),a.g=ua(a.g),a.b=ua(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ki?cs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,n){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ei]:{primaries:t,whitePoint:r,transfer:cs,toXYZ:fc,fromXYZ:mc,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:t,whitePoint:r,transfer:ot,toXYZ:fc,fromXYZ:mc,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),e}var Ke=gg();function Wi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ua(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var ca,gc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ca===void 0&&(ca=ds("canvas")),ca.width=e.width,ca.height=e.height;let r=ca.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ca}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ds("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Wi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_g=0,Xi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,n=r.length;s<n;s++)r[s].isDataTexture?a.push(Ul(r[s].image)):a.push(Ul(r[s]))}else a=Ul(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Ul(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?gc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}var vg=class extends Xi{constructor(e=null){Hi('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}},xg=0,Dl=new R,Tt=class rl extends Si{constructor(t=rl.DEFAULT_IMAGE,i=rl.DEFAULT_MAPPING,r=jt,a=jt,s=pt,n=ui,o=Yt,l=Qt,h=rl.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=si(),this.name="",this.source=new Xi(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=s,this.minFilter=n,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dl).x}get height(){return this.source.getSize(Dl).y}get depth(){return this.source.getSize(Dl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){pe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){pe(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rn)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case or:t.x=t.x-Math.floor(t.x);break;case jt:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case or:t.y=t.y-Math.floor(t.y);break;case jt:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tt.DEFAULT_IMAGE=null,Tt.DEFAULT_MAPPING=rn,Tt.DEFAULT_ANISOTROPY=1;var gt=(Ja=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=this.w,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a+n[12]*s,this.y=n[1]*i+n[5]*r+n[9]*a+n[13]*s,this.z=n[2]*i+n[6]*r+n[10]*a+n[14]*s,this.w=n[3]*i+n[7]*r+n[11]*a+n[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,s,n=t.elements,o=n[0],l=n[4],h=n[8],u=n[1],d=n[5],c=n[9],p=n[2],g=n[6],_=n[10];if(Math.abs(l-u)<.01&&Math.abs(h-p)<.01&&Math.abs(c-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+p)<.1&&Math.abs(c+g)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,y=(d+1)/2,M=(_+1)/2,v=(l+u)/4,b=(h+p)/4,E=(c+g)/4;return f>y&&f>M?f<.01?(r=0,a=.707106781,s=.707106781):(r=Math.sqrt(f),a=v/r,s=b/r):y>M?y<.01?(r=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),r=v/a,s=E/a):M<.01?(r=.707106781,a=.707106781,s=0):(s=Math.sqrt(M),r=b/s,a=E/s),this.set(r,a,s,i),this}let m=Math.sqrt((g-c)*(g-c)+(h-p)*(h-p)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(g-c)/m,this.y=(h-p)/m,this.z=(u-l)/m,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ge(this.x,t.x,i.x),this.y=Ge(this.y,t.y,i.y),this.z=Ge(this.z,t.z,i.z),this.w=Ge(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ge(this.x,t,i),this.y=Ge(this.y,t,i),this.z=Ge(this.z,t,i),this.w=Ge(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ja.prototype.isVector4=!0,Ja),Ol=class extends Si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Tt(r),s=i.count;for(let n=0;n<s;n++)this.textures[n]=a.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xi(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends Ol{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Yn=class extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},yg=class extends ti{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Yn(null,e,t,i),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},Zn=class extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Sg=class extends ti{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Zn(null,e,t,i),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},Ve=(Zr=class{constructor(t,i,r,a,s,n,o,l,h,u,d,c,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h,u,d,c,p,g,_,m)}set(t,i,r,a,s,n,o,l,h,u,d,c,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=s,f[5]=n,f[9]=o,f[13]=l,f[2]=h,f[6]=u,f[10]=d,f[14]=c,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/da.setFromMatrixColumn(t,0).length(),s=1/da.setFromMatrixColumn(t,1).length(),n=1/da.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*n,i[9]=r[9]*n,i[10]=r[10]*n,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,s=t.z,n=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let c=n*u,p=n*d,g=o*u,_=o*d;i[0]=l*u,i[4]=-l*d,i[8]=h,i[1]=p+g*h,i[5]=c-_*h,i[9]=-o*l,i[2]=_-c*h,i[6]=g+p*h,i[10]=n*l}else if(t.order==="YXZ"){let c=l*u,p=l*d,g=h*u,_=h*d;i[0]=c+_*o,i[4]=g*o-p,i[8]=n*h,i[1]=n*d,i[5]=n*u,i[9]=-o,i[2]=p*o-g,i[6]=_+c*o,i[10]=n*l}else if(t.order==="ZXY"){let c=l*u,p=l*d,g=h*u,_=h*d;i[0]=c-_*o,i[4]=-n*d,i[8]=g+p*o,i[1]=p+g*o,i[5]=n*u,i[9]=_-c*o,i[2]=-n*h,i[6]=o,i[10]=n*l}else if(t.order==="ZYX"){let c=n*u,p=n*d,g=o*u,_=o*d;i[0]=l*u,i[4]=g*h-p,i[8]=c*h+_,i[1]=l*d,i[5]=_*h+c,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=n*l}else if(t.order==="YZX"){let c=n*l,p=n*h,g=o*l,_=o*h;i[0]=l*u,i[4]=_-c*d,i[8]=g*d+p,i[1]=d,i[5]=n*u,i[9]=-o*u,i[2]=-h*u,i[6]=p*d+g,i[10]=c-_*d}else if(t.order==="XZY"){let c=n*l,p=n*h,g=o*l,_=o*h;i[0]=l*u,i[4]=-d,i[8]=h*u,i[1]=c*d+_,i[5]=n*u,i[9]=p*d-g,i[2]=g*d-p,i[6]=o*u,i[10]=_*d+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mg,t,bg)}lookAt(t,i,r){let a=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),cr.crossVectors(r,ni),cr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),cr.crossVectors(r,ni)),cr.normalize(),Jn.crossVectors(ni,cr),a[0]=cr.x,a[4]=Jn.x,a[8]=ni.x,a[1]=cr.y,a[5]=Jn.y,a[9]=ni.y,a[2]=cr.z,a[6]=Jn.z,a[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[4],l=r[8],h=r[12],u=r[1],d=r[5],c=r[9],p=r[13],g=r[2],_=r[6],m=r[10],f=r[14],y=r[3],M=r[7],v=r[11],b=r[15],E=a[0],C=a[4],x=a[8],w=a[12],L=a[1],I=a[5],D=a[9],X=a[13],N=a[2],G=a[6],Z=a[10],k=a[14],he=a[3],j=a[7],Y=a[11],ee=a[15];return s[0]=n*E+o*L+l*N+h*he,s[4]=n*C+o*I+l*G+h*j,s[8]=n*x+o*D+l*Z+h*Y,s[12]=n*w+o*X+l*k+h*ee,s[1]=u*E+d*L+c*N+p*he,s[5]=u*C+d*I+c*G+p*j,s[9]=u*x+d*D+c*Z+p*Y,s[13]=u*w+d*X+c*k+p*ee,s[2]=g*E+_*L+m*N+f*he,s[6]=g*C+_*I+m*G+f*j,s[10]=g*x+_*D+m*Z+f*Y,s[14]=g*w+_*X+m*k+f*ee,s[3]=y*E+M*L+v*N+b*he,s[7]=y*C+M*I+v*G+b*j,s[11]=y*x+M*D+v*Z+b*Y,s[15]=y*w+M*X+v*k+b*ee,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],s=t[12],n=t[1],o=t[5],l=t[9],h=t[13],u=t[2],d=t[6],c=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15],y=l*p-h*c,M=o*p-h*d,v=o*c-l*d,b=n*p-h*u,E=n*c-l*u,C=n*d-o*u;return i*(_*y-m*M+f*v)-r*(g*y-m*b+f*E)+a*(g*M-_*b+f*C)-s*(g*v-_*E+m*C)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],s=t[1],n=t[5],o=t[9],l=t[2],h=t[6],u=t[10];return i*(n*u-o*h)-r*(s*u-o*l)+a*(s*h-n*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],u=t[8],d=t[9],c=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=i*o-r*n,M=i*l-a*n,v=i*h-s*n,b=r*l-a*o,E=r*h-s*o,C=a*h-s*l,x=u*_-d*g,w=u*m-c*g,L=u*f-p*g,I=d*m-c*_,D=d*f-p*_,X=c*f-p*m,N=y*X-M*D+v*I+b*L-E*w+C*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/N;return t[0]=(o*X-l*D+h*I)*G,t[1]=(a*D-r*X-s*I)*G,t[2]=(_*C-m*E+f*b)*G,t[3]=(c*E-d*C-p*b)*G,t[4]=(l*L-n*X-h*w)*G,t[5]=(i*X-a*L+s*w)*G,t[6]=(m*v-g*C-f*M)*G,t[7]=(u*C-c*v+p*M)*G,t[8]=(n*D-o*L+h*x)*G,t[9]=(r*L-i*D-s*x)*G,t[10]=(g*E-_*v+f*y)*G,t[11]=(d*v-u*E-p*y)*G,t[12]=(o*w-n*I-l*x)*G,t[13]=(i*I-r*w+a*x)*G,t[14]=(_*M-g*b-m*y)*G,t[15]=(u*b-d*M+c*y)*G,this}scale(t){let i=this.elements,r=t.x,a=t.y,s=t.z;return i[0]*=r,i[4]*=a,i[8]*=s,i[1]*=r,i[5]*=a,i[9]*=s,i[2]*=r,i[6]*=a,i[10]*=s,i[3]*=r,i[7]*=a,i[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),s=1-r,n=t.x,o=t.y,l=t.z,h=s*n,u=s*o;return this.set(h*n+r,h*o-a*l,h*l+a*o,0,h*o+a*l,u*o+r,u*l-a*n,0,h*l-a*o,u*l+a*n,s*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,s,n){return this.set(1,r,s,0,t,1,n,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,s=i._x,n=i._y,o=i._z,l=i._w,h=s+s,u=n+n,d=o+o,c=s*h,p=s*u,g=s*d,_=n*u,m=n*d,f=o*d,y=l*h,M=l*u,v=l*d,b=r.x,E=r.y,C=r.z;return a[0]=(1-(_+f))*b,a[1]=(p+v)*b,a[2]=(g-M)*b,a[3]=0,a[4]=(p-v)*E,a[5]=(1-(c+f))*E,a[6]=(m+y)*E,a[7]=0,a[8]=(g+M)*C,a[9]=(m-y)*C,a[10]=(1-(c+_))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let s=this.determinantAffine();if(s===0)return r.set(1,1,1),i.identity(),this;let n=da.set(a[0],a[1],a[2]).length(),o=da.set(a[4],a[5],a[6]).length(),l=da.set(a[8],a[9],a[10]).length();s<0&&(n=-n),Mi.copy(this);let h=1/n,u=1/o,d=1/l;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,i.setFromRotationMatrix(Mi),r.x=n,r.y=o,r.z=l,this}makePerspective(t,i,r,a,s,n,o=ai,l=!1){let h=this.elements,u=2*s/(i-t),d=2*s/(r-a),c=(i+t)/(i-t),p=(r+a)/(r-a),g,_;if(l)g=s/(n-s),_=n*s/(n-s);else if(o===ai)g=-(n+s)/(n-s),_=-2*n*s/(n-s);else if(o===Cr)g=-n/(n-s),_=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,s,n,o=ai,l=!1){let h=this.elements,u=2/(i-t),d=2/(r-a),c=-(i+t)/(i-t),p=-(r+a)/(r-a),g,_;if(l)g=1/(n-s),_=n/(n-s);else if(o===ai)g=-2/(n-s),_=-(n+s)/(n-s);else if(o===Cr)g=-1/(n-s),_=-s/(n-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Zr.prototype.isMatrix4=!0,Zr),da=new R,Mi=new Ve,Mg=new R(0,0,0),bg=new R(1,1,1),cr=new R,Jn=new R,ni=new R,_c=new Ve,vc=new Bt,ji=class Mf{constructor(t=0,i=0,r=0,a=Mf.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,s=a[0],n=a[4],o=a[8],l=a[1],h=a[5],u=a[9],d=a[2],c=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-n,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,h));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return _c.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_c,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ji.DEFAULT_ORDER="XYZ";var Kn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tg=0,xc=new R,pa=new Bt,qi=new Ve,$n=new R,ms=new R,wg=new R,Eg=new Bt,yc=new R(1,0,0),Sc=new R(0,1,0),Mc=new R(0,0,1),bc={type:"added"},Ag={type:"removed"},fa={type:"childadded",child:null},Fl={type:"childremoved",child:null},at=class al extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=al.DEFAULT_UP.clone();let t=new R,i=new ji,r=new Bt,a=new R(1,1,1);function s(){r.setFromEuler(i,!1)}function n(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ve},normalMatrix:{value:new qe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=al.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=al.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return pa.setFromAxisAngle(t,i),this.quaternion.multiply(pa),this}rotateOnWorldAxis(t,i){return pa.setFromAxisAngle(t,i),this.quaternion.premultiply(pa),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(Mc,t)}translateOnAxis(t,i){return xc.copy(t).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(Mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?$n.copy(t):$n.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(ms,$n,this.up):qi.lookAt($n,ms,this.up),this.quaternion.setFromRotationMatrix(qi),a&&(qi.extractRotation(a.matrixWorld),pa.setFromRotationMatrix(qi),this.quaternion.premultiply(pa.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),fa.child=t,this.dispatchEvent(fa),fa.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ag),Fl.child=t,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),fa.child=t,this.dispatchEvent(fa),fa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let s=this.children[r].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,wg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Eg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*r-s[8]*a,s[13]+=r-s[1]*i-s[5]*r-s[9]*a,s[14]+=a-s[2]*i-s[6]*r-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let s=this.children;for(let n=0,o=s.length;n<o;n++)s[n].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let d=l[h];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(i){let o=n(t.geometries),l=n(t.materials),h=n(t.textures),u=n(t.images),d=n(t.shapes),c=n(t.skeletons),p=n(t.animations),g=n(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),c.length>0&&(r.skeletons=c),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function n(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};at.DEFAULT_UP=new R(0,1,0),at.DEFAULT_MATRIX_AUTO_UPDATE=!0,at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yi=class extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cg={type:"move"},Qn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,n=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let _=t.getJointPose(g,i),m=this._getHandJoint(l,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),c=.02,p=.005;l.inputState.pinching&&d>c+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=c-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));n!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return n!==null&&(n.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Bl(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Pl(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Bl(s,a,e+1/3),this.g=Bl(s,a,e),this.b=Bl(s,a,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function i(a){a!==void 0&&parseFloat(a)<1&&pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],n=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let i=Tc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Ke.workingToColorSpace(Vt.copy(this),e),Math.round(Ge(Vt.r*255,0,255))*65536+Math.round(Ge(Vt.g*255,0,255))*256+Math.round(Ge(Vt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Vt.copy(this),t);let i=Vt.r,r=Vt.g,a=Vt.b,s=Math.max(i,r,a),n=Math.min(i,r,a),o,l,h=(n+s)/2;if(n===s)o=0,l=0;else{let u=s-n;switch(l=h<=.5?u/(s+n):u/(2-s-n),s){case i:o=(r-a)/u+(r<a?6:0);break;case r:o=(a-i)/u+2;break;case a:o=(i-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Lt){Ke.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,i=Vt.g,r=Vt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(eo);let i=fs(dr.h,eo.h,t),r=fs(dr.s,eo.s,t),a=fs(dr.l,eo.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new fe;fe.NAMES=Tc;var wc=class bf{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(t),this.density=i}clone(){return new bf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ec=class Tf{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new fe(t),this.near=i,this.far=r}clone(){return new Tf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ac=class extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bi=new R,Zi=new R,zl=new R,Ji=new R,ma=new R,ga=new R,Cc=new R,Gl=new R,Vl=new R,kl=new R,Hl=new gt,Wl=new gt,Xl=new gt,pr=class Xa{constructor(t=new R,i=new R,r=new R){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),bi.subVectors(t,i),a.cross(bi);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,i,r,a,s){bi.subVectors(a,i),Zi.subVectors(r,i),zl.subVectors(t,i);let n=bi.dot(bi),o=bi.dot(Zi),l=bi.dot(zl),h=Zi.dot(Zi),u=Zi.dot(zl),d=n*h-o*o;if(d===0)return s.set(0,0,0),null;let c=1/d,p=(h*l-o*u)*c,g=(n*u-o*l)*c;return s.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,r,a,s,n,o,l){return this.getBarycoord(t,i,r,a,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(n,Ji.y),l.addScaledVector(o,Ji.z),l)}static getInterpolatedAttribute(t,i,r,a,s,n){return Hl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Hl.fromBufferAttribute(t,i),Wl.fromBufferAttribute(t,r),Xl.fromBufferAttribute(t,a),n.setScalar(0),n.addScaledVector(Hl,s.x),n.addScaledVector(Wl,s.y),n.addScaledVector(Xl,s.z),n}static isFrontFacing(t,i,r,a){return bi.subVectors(r,i),Zi.subVectors(t,i),bi.cross(Zi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),bi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Xa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,s){return Xa.getInterpolation(t,this.a,this.b,this.c,i,r,a,s)}containsPoint(t){return Xa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,s=this.c,n,o;ma.subVectors(a,r),ga.subVectors(s,r),Gl.subVectors(t,r);let l=ma.dot(Gl),h=ga.dot(Gl);if(l<=0&&h<=0)return i.copy(r);Vl.subVectors(t,a);let u=ma.dot(Vl),d=ga.dot(Vl);if(u>=0&&d<=u)return i.copy(a);let c=l*d-u*h;if(c<=0&&l>=0&&u<=0)return n=l/(l-u),i.copy(r).addScaledVector(ma,n);kl.subVectors(t,s);let p=ma.dot(kl),g=ga.dot(kl);if(g>=0&&p<=g)return i.copy(s);let _=p*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(ga,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Cc.subVectors(s,a),o=(d-u)/(d-u+(p-g)),i.copy(a).addScaledVector(Cc,o);let f=1/(m+_+c);return n=_*f,o=c*f,i.copy(r).addScaledVector(ma,n).addScaledVector(ga,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,n=a.count;s<n;s++)e.isMesh===!0?e.getVertexPosition(s,Ti):Ti.fromBufferAttribute(a,s),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),io.subVectors(this.max,gs),_a.subVectors(e.a,gs),va.subVectors(e.b,gs),xa.subVectors(e.c,gs),fr.subVectors(va,_a),mr.subVectors(xa,va),Ir.subVectors(_a,xa);let t=[0,-fr.z,fr.y,0,-mr.z,mr.y,0,-Ir.z,Ir.y,fr.z,0,-fr.x,mr.z,0,-mr.x,Ir.z,0,-Ir.x,-fr.y,fr.x,0,-mr.y,mr.x,0,-Ir.y,Ir.x,0];return!jl(t,_a,va,xa,io)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,_a,va,xa,io))?!1:(ro.crossVectors(fr,mr),t=[ro.x,ro.y,ro.z],jl(t,_a,va,xa,io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ki=[new R,new R,new R,new R,new R,new R,new R,new R],Ti=new R,to=new zt,_a=new R,va=new R,xa=new R,fr=new R,mr=new R,Ir=new R,gs=new R,io=new R,ro=new R,Pr=new R;function jl(e,t,i,r,a){for(let s=0,n=e.length-3;s<=n;s+=3){Pr.fromArray(e,s);let o=a.x*Math.abs(Pr.x)+a.y*Math.abs(Pr.y)+a.z*Math.abs(Pr.z),l=t.dot(Pr),h=i.dot(Pr),u=r.dot(Pr);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var $i=Rg();function Rg(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let s=new Uint32Array(2048),n=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,s[l]=h|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)n[l]=l<<23;n[31]=1199570944,n[32]=2147483648;for(let l=33;l<63;++l)n[l]=2147483648+(l-32<<23);n[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:s,exponentTable:n,offsetTable:o}}function ii(e){Math.abs(e)>65504&&pe("DataUtils.toHalfFloat(): Value out of range."),e=Ge(e,-65504,65504),$i.floatView[0]=e;let t=$i.uint32View[0],i=t>>23&511;return $i.baseTable[i]+((t&8388607)>>$i.shiftTable[i])}function _s(e){let t=e>>10;return $i.uint32View[0]=$i.mantissaTable[$i.offsetTable[t]+(e&1023)]+$i.exponentTable[t],$i.floatView[0]}var Ig=class{static toHalfFloat(e){return ii(e)}static fromHalfFloat(e){return _s(e)}},Rt=new R,ao=new te,Pg=0,lt=class extends Si{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qn,this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Lg=class extends lt{constructor(e,t,i){super(new Int8Array(e),t,i)}},Ng=class extends lt{constructor(e,t,i){super(new Uint8Array(e),t,i)}},Ug=class extends lt{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},Dg=class extends lt{constructor(e,t,i){super(new Int16Array(e),t,i)}},ql=class extends lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Og=class extends lt{constructor(e,t,i){super(new Int32Array(e),t,i)}},Yl=class extends lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Fg=class extends lt{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=_s(this.array[e*this.itemSize]);return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=ii(t),this}getY(e){let t=_s(this.array[e*this.itemSize+1]);return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=ii(t),this}getZ(e){let t=_s(this.array[e*this.itemSize+2]);return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=ii(t),this}getW(e){let t=_s(this.array[e*this.itemSize+3]);return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=ii(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=ii(t),this.array[e+1]=ii(i),this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=ii(t),this.array[e+1]=ii(i),this.array[e+2]=ii(r),this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.array[e+0]=ii(t),this.array[e+1]=ii(i),this.array[e+2]=ii(r),this.array[e+3]=ii(a),this}},Te=class extends lt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Bg=new zt,vs=new R,Zl=new R,Dt=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Bg.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);let t=vs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(vs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Zl)),this.expandByPoint(vs.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zg=0,di=new Ve,Jl=new at,ya=new R,oi=new zt,xs=new zt,Ot=new R,Xe=class wf extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ym(t)?Yl:ql)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let s=new qe().getNormalMatrix(t);r.applyNormalMatrix(s),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ya).negate(),this.translate(ya.x,ya.y,ya.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,s=t.length;a<s;a++){let n=t[a];r.push(n.x,n.y,n.z||0)}this.setAttribute("position",new Te(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let s=t[a];i.setXYZ(a,s.x,s.y,s.z||0)}t.length>i.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let s=i[r];oi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dt);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let r=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let s=0,n=i.length;s<n;s++){let o=i[s];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(oi.min,xs.min),oi.expandByPoint(Ot),Ot.addVectors(oi.max,xs.max),oi.expandByPoint(Ot)):(oi.expandByPoint(xs.min),oi.expandByPoint(xs.max))}oi.getCenter(r);let a=0;for(let s=0,n=t.count;s<n;s++)Ot.fromBufferAttribute(t,s),a=Math.max(a,r.distanceToSquared(Ot));if(i)for(let s=0,n=i.length;s<n;s++){let o=i[s],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Ot.fromBufferAttribute(o,h),l&&(ya.fromBufferAttribute(t,h),Ot.add(ya)),a=Math.max(a,r.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,s=i.uv,n=this.getAttribute("tangent");(n===void 0||n.count!==r.count)&&(n=new lt(new Float32Array(4*r.count),4),this.setAttribute("tangent",n));let o=[],l=[];for(let x=0;x<r.count;x++)o[x]=new R,l[x]=new R;let h=new R,u=new R,d=new R,c=new te,p=new te,g=new te,_=new R,m=new R;function f(x,w,L){h.fromBufferAttribute(r,x),u.fromBufferAttribute(r,w),d.fromBufferAttribute(r,L),c.fromBufferAttribute(s,x),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,L),u.sub(h),d.sub(h),p.sub(c),g.sub(c);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),o[x].add(_),o[w].add(_),o[L].add(_),l[x].add(m),l[w].add(m),l[L].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,w=y.length;x<w;++x){let L=y[x],I=L.start,D=L.count;for(let X=I,N=I+D;X<N;X+=3)f(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let M=new R,v=new R,b=new R,E=new R;function C(x){b.fromBufferAttribute(a,x),E.copy(b);let w=o[x];M.copy(w),M.sub(b.multiplyScalar(b.dot(w))).normalize(),v.crossVectors(E,w);let L=v.dot(l[x])<0?-1:1;n.setXYZW(x,M.x,M.y,M.z,L)}for(let x=0,w=y.length;x<w;++x){let L=y[x],I=L.start,D=L.count;for(let X=I,N=I+D;X<N;X+=3)C(t.getX(X+0)),C(t.getX(X+1)),C(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new lt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let c=0,p=r.count;c<p;c++)r.setXYZ(c,0,0,0);let a=new R,s=new R,n=new R,o=new R,l=new R,h=new R,u=new R,d=new R;if(t)for(let c=0,p=t.count;c<p;c+=3){let g=t.getX(c+0),_=t.getX(c+1),m=t.getX(c+2);a.fromBufferAttribute(i,g),s.fromBufferAttribute(i,_),n.fromBufferAttribute(i,m),u.subVectors(n,s),d.subVectors(a,s),u.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),h.fromBufferAttribute(r,m),o.add(u),l.add(u),h.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,p=i.count;c<p;c+=3)a.fromBufferAttribute(i,c+0),s.fromBufferAttribute(i,c+1),n.fromBufferAttribute(i,c+2),u.subVectors(n,s),d.subVectors(a,s),u.cross(d),r.setXYZ(c+0,u.x,u.y,u.z),r.setXYZ(c+1,u.x,u.y,u.z),r.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Ot.fromBufferAttribute(t,i),Ot.normalize(),t.setXYZ(i,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,d=o.normalized,c=new h.constructor(l.length*u),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)c[g++]=h[p++]}return new lt(c,u,d)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new wf,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let u=0,d=h.length;u<d;u++){let c=h[u],p=t(c,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let o=0,l=n.length;o<l;o++){let h=n[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let d=0,c=h.length;d<c;d++){let p=h[d];u.push(p.toJSON(t.data))}u.length>0&&(a[l]=u,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let u=a[h];this.setAttribute(h,u.clone(i))}let s=t.morphAttributes;for(let h in s){let u=[],d=s[h];for(let c=0,p=d.length;c<p;c++)u.push(d[c].clone(i));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let n=t.groups;for(let h=0,u=n.length;h<u;h++){let d=n[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ys=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qn,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Jt=new R,Sa=class Ef{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Jt.fromBufferAttribute(this,i),Jt.applyMatrix4(t),this.setXYZ(i,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Jt.fromBufferAttribute(this,i),Jt.applyNormalMatrix(t),this.setXYZ(i,Jt.x,Jt.y,Jt.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Jt.fromBufferAttribute(this,i),Jt.transformDirection(t),this.setXYZ(i,Jt.x,Jt.y,Jt.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Zt(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ze(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Zt(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Zt(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Zt(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Zt(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array),s=Ze(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[a+s])}return new lt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ef(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kl=new R,Gg=new R,Vg=new qe,Qi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Kl.subVectors(i,t).cross(Gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Kl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Vg.getNormalMatrix(e),r=this.coplanarPoint(Kl).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kg=0,It=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Qr,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=dl,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){pe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let s=[];for(let n in a){let o=a[n];delete o.metadata,s.push(o)}return s}if(t){let a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Qi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$l=class extends It{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ma,Ss=new R,ba=new R,Ta=new R,wa=new te,Ms=new te,Rc=new Ve,so=new R,bs=new R,no=new R,Ic=new te,Ql=new te,Pc=new te,Lc=class extends at{constructor(e=new $l){if(super(),this.isSprite=!0,this.type="Sprite",Ma===void 0){Ma=new Xe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ys(t,5);Ma.setIndex([0,1,2,0,2,3]),Ma.setAttribute("position",new Sa(i,3,0,!1)),Ma.setAttribute("uv",new Sa(i,2,3,!1))}this.geometry=Ma,this.material=e,this.center=new te(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ba.setFromMatrixScale(this.matrixWorld),Rc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ta.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ba.multiplyScalar(-Ta.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let s=this.center;oo(so.set(-.5,-.5,0),Ta,s,ba,r,a),oo(bs.set(.5,-.5,0),Ta,s,ba,r,a),oo(no.set(.5,.5,0),Ta,s,ba,r,a),Ic.set(0,0),Ql.set(1,0),Pc.set(1,1);let n=e.ray.intersectTriangle(so,bs,no,!1,Ss);if(n===null&&(oo(bs.set(-.5,.5,0),Ta,s,ba,r,a),Ql.set(0,1),n=e.ray.intersectTriangle(so,no,bs,!1,Ss),n===null))return;let o=e.ray.origin.distanceTo(Ss);o<e.near||o>e.far||t.push({distance:o,point:Ss.clone(),uv:pr.getInterpolation(Ss,so,bs,no,Ic,Ql,Pc,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function oo(e,t,i,r,a,s){wa.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(Ms.x=s*wa.x-a*wa.y,Ms.y=a*wa.x+s*wa.y):Ms.copy(wa),e.copy(t),e.x+=Ms.x,e.y+=Ms.y,e.applyMatrix4(Rc)}var lo=new R,Nc=new R,Uc=class extends at{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let i=0,r=t.length;i<r;i++){let a=t[i];this.addLevel(a.object.clone(),a.distance,a.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);let r=this.levels,a;for(a=0;a<r.length&&!(t<r[a].distance);a++);return r.splice(a,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){let r=t.splice(i,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),e<a)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){lo.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(lo);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){lo.setFromMatrixPosition(e.matrixWorld),Nc.setFromMatrixPosition(this.matrixWorld);let i=lo.distanceTo(Nc)/e.zoom;t[0].object.visible=!0;let r,a;for(r=1,a=t.length;r<a;r++){let s=t[r].distance;if(t[r].object.visible&&(s-=s*t[r].hysteresis),i>=s)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<a;r++)t[r].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let i=this.levels;for(let r=0,a=i.length;r<a;r++){let s=i[r];t.object.levels.push({object:s.object.uuid,distance:s.distance,hysteresis:s.hysteresis})}return t}},er=new R,eh=new R,ho=new R,uo=new R,Ea=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){eh.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),uo.copy(this.origin).sub(eh);let a=e.distanceTo(t)*.5,s=-this.direction.dot(ho),n=uo.dot(this.direction),o=-uo.dot(ho),l=uo.lengthSq(),h=Math.abs(1-s*s),u,d,c,p;if(h>0)if(u=s*o-n,d=s*n-o,p=a*h,u>=0)if(d>=-p)if(d<=p){let g=1/h;u*=g,d*=g,c=u*(u+s*d+2*n)+d*(s*u+d+2*o)+l}else d=a,u=Math.max(0,-(s*d+n)),c=-u*u+d*(d+2*o)+l;else d=-a,u=Math.max(0,-(s*d+n)),c=-u*u+d*(d+2*o)+l;else d<=-p?(u=Math.max(0,-(-s*a+n)),d=u>0?-a:Math.min(Math.max(-a,-o),a),c=-u*u+d*(d+2*o)+l):d<=p?(u=0,d=Math.min(Math.max(-a,-o),a),c=d*(d+2*o)+l):(u=Math.max(0,-(s*a+n)),d=u>0?a:Math.min(Math.max(-a,-o),a),c=-u*u+d*(d+2*o)+l);else d=s>0?-a:a,u=Math.max(0,-(s*d+n)),c=-u*u+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(eh).addScaledVector(ho,d),c}intersectSphere(e,t){if(e.radius<0)return null;er.subVectors(e.center,this.origin);let i=er.dot(this.direction),r=er.dot(er)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),n=i-s,o=i+s;return o<0?null:n<0?this.at(o,t):this.at(n,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,n,o,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),u>=0?(n=(e.min.z-d.z)*u,o=(e.max.z-d.z)*u):(n=(e.max.z-d.z)*u,o=(e.min.z-d.z)*u),i>o||n>r)||((n>i||i!==i)&&(i=n),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,i,r,a){let s=this.origin,n=this.direction,o=n.x,l=n.y,h=n.z,u=e.x-s.x,d=e.y-s.y,c=e.z-s.z,p=t.x-s.x,g=t.y-s.y,_=t.z-s.z,m=i.x-s.x,f=i.y-s.y,y=i.z-s.z,M=Math.abs(o),v=Math.abs(l),b=Math.abs(h),E,C,x,w,L,I,D,X,N,G,Z,k;if(M>=v&&M>=b?(x=o,I=u,N=p,k=m,o>=0?(E=l,C=h,w=d,L=c,D=g,X=_,G=f,Z=y):(E=h,C=l,w=c,L=d,D=_,X=g,G=y,Z=f)):v>=b?(x=l,I=d,N=g,k=f,l>=0?(E=h,C=o,w=c,L=u,D=_,X=p,G=y,Z=m):(E=o,C=h,w=u,L=c,D=p,X=_,G=m,Z=y)):(x=h,I=c,N=_,k=y,h>=0?(E=o,C=l,w=u,L=d,D=p,X=g,G=m,Z=f):(E=l,C=o,w=d,L=u,D=g,X=p,G=f,Z=m)),x===0)return null;let he=E/x,j=C/x,Y=1/x,ee=w-he*I,ke=L-j*I,Ie=D-he*N,ht=X-j*N,je=G-he*k,q=Z-j*k,re=je*ht-q*Ie,ne=ee*q-ke*je,Le=Ie*ke-ht*ee;if(r){if(re<0||ne<0||Le<0)return null}else if((re<0||ne<0||Le<0)&&(re>0||ne>0||Le>0))return null;let Fe=re+ne+Le;if(Fe===0)return null;let de=Y*(re*I+ne*N+Le*k);return(Fe>0?de<0:de>0)?null:this.at(de/Fe,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},li=class extends It{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=es,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dc=new Ve,Lr=new Ea,co=new Dt,Oc=new R,po=new R,fo=new R,mo=new R,th=new R,go=new R,Fc=new R,_o=new R,wt=class extends at{constructor(e=new Xe,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let n=this.morphTargetInfluences;if(a&&n){go.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=n[o],u=a[o];h!==0&&(th.fromBufferAttribute(u,e),s?go.addScaledVector(th,h):go.addScaledVector(th.sub(t),h))}t.add(go)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(a),Lr.copy(e.ray).recast(e.near),!(co.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(co,Oc)===null||Lr.origin.distanceToSquared(Oc)>(e.far-e.near)**2))&&(Dc.copy(a).invert(),Lr.copy(e.ray).applyMatrix4(Dc),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,n=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,c=a.drawRange;if(n!==null)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let _=d[p],m=s[_.materialIndex],f=Math.max(_.start,c.start),y=Math.min(n.count,Math.min(_.start+_.count,c.start+c.count));for(let M=f,v=y;M<v;M+=3){let b=n.getX(M),E=n.getX(M+1),C=n.getX(M+2);r=vo(this,m,e,i,l,h,u,b,E,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,c.start),g=Math.min(n.count,c.start+c.count);for(let _=p,m=g;_<m;_+=3){let f=n.getX(_),y=n.getX(_+1),M=n.getX(_+2);r=vo(this,s,e,i,l,h,u,f,y,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let _=d[p],m=s[_.materialIndex],f=Math.max(_.start,c.start),y=Math.min(o.count,Math.min(_.start+_.count,c.start+c.count));for(let M=f,v=y;M<v;M+=3){let b=M,E=M+1,C=M+2;r=vo(this,m,e,i,l,h,u,b,E,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,c.start),g=Math.min(o.count,c.start+c.count);for(let _=p,m=g;_<m;_+=3){let f=_,y=_+1,M=_+2;r=vo(this,s,e,i,l,h,u,f,y,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};function Hg(e,t,i,r,a,s,n,o){let l;if(t.side===Xt?l=r.intersectTriangle(n,s,a,!0,o):l=r.intersectTriangle(a,s,n,t.side===Gi,o),l===null)return null;_o.copy(o),_o.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(_o);return h<i.near||h>i.far?null:{distance:h,point:_o.clone(),object:e}}function vo(e,t,i,r,a,s,n,o,l,h){e.getVertexPosition(o,po),e.getVertexPosition(l,fo),e.getVertexPosition(h,mo);let u=Hg(e,t,i,r,po,fo,mo,Fc);if(u){let d=new R;pr.getBarycoord(Fc,po,fo,mo,d),a&&(u.uv=pr.getInterpolatedAttribute(a,o,l,h,d,new te)),s&&(u.uv1=pr.getInterpolatedAttribute(s,o,l,h,d,new te)),n&&(u.normal=pr.getInterpolatedAttribute(n,o,l,h,d,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:l,c:h,normal:new R,materialIndex:0};pr.getNormal(po,fo,mo,c.normal),u.face=c,u.barycoord=d}return u}var Ts=new gt,Bc=new gt,zc=new gt,Wg=new gt,Gc=new Ve,xo=new R,ih=new Dt,Vc=new Ve,rh=new Ea,ah=class extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yl,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,xo),this.boundingBox.expandByPoint(xo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,xo),this.boundingSphere.expandByPoint(xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ih.copy(this.boundingSphere),ih.applyMatrix4(r),e.ray.intersectsSphere(ih)!==!1&&(Vc.copy(r).invert(),rh.copy(e.ray).applyMatrix4(Vc),!(this.boundingBox!==null&&rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qu?this.bindMatrixInverse.copy(this.bindMatrix).invert():pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Bc.fromBufferAttribute(r.attributes.skinIndex,e),zc.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ts.copy(t),t.set(0,0,0,0)):(Ts.set(...t,1),t.set(0,0,0)),Ts.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){let s=zc.getComponent(a);if(s!==0){let n=Bc.getComponent(a);Gc.multiplyMatrices(i.bones[n].matrixWorld,i.boneInverses[n]),t.addScaledVector(Wg.copy(Ts).applyMatrix4(Gc),s)}}return t.isVector4&&(t.w=Ts.w),t.applyMatrix4(this.bindMatrixInverse)}},yo=class extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}},pi=class extends Tt{constructor(e=null,t=1,i=1,r,a,s,n,o,l=xt,h=xt,u,d){super(null,s,n,o,l,h,r,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kc=new Ve,Xg=new Ve,sh=class Af{constructor(t=[],i=[]){this.uuid=si(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){let r=new Ve;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let t=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let s=0,n=t.length;s<n;s++){let o=t[s]?t[s].matrixWorld:Xg;kc.multiplyMatrices(o,i[s]),kc.toArray(r,s*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Af(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let i=new Float32Array(t*t*4);i.set(this.boneMatrices);let r=new pi(i,t,t,Yt,qt);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this}getBoneByName(t){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===t)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let r=0,a=t.bones.length;r<a;r++){let s=t.bones[r],n=i[s];n===void 0&&(pe("Skeleton: No bone found with UUID:",s),n=new yo),this.bones.push(n),this.boneInverses.push(new Ve().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,s=i.length;a<s;a++){let n=i[a];t.bones.push(n.uuid);let o=r[a];t.boneInverses.push(o.toArray())}return t}},gr=class extends lt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Aa=new Ve,Hc=new Ve,So=[],Wc=new zt,jg=new Ve,ws=new wt,Es=new Dt,nh=class extends wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,jg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Aa),Wc.copy(e.boundingBox).applyMatrix4(Aa),this.boundingBox.union(Wc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Aa),Es.copy(e.boundingSphere).applyMatrix4(Aa),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let n=0;n<i.length;n++)i[n]=r[s+n]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(i),e.ray.intersectsSphere(Es)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Aa),Hc.multiplyMatrices(i,Aa),ws.matrixWorld=Hc,ws.raycast(e,So);for(let s=0,n=So.length;s<n;s++){let o=So[s];o.instanceId=a,o.object=this,t.push(o)}So.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new pi(new Float32Array(r*this.count),r,this.count,ln,qt));let a=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let n=this.geometry.morphTargetsRelative?1:1-s,o=r*e;return a[o]=n,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nr=new Dt,qg=new te(.5,.5),Mo=new R,Ur=class{constructor(e=new Qi,t=new Qi,i=new Qi,r=new Qi,a=new Qi,s=new Qi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(a),n[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai,i=!1){let r=this.planes,a=e.elements,s=a[0],n=a[1],o=a[2],l=a[3],h=a[4],u=a[5],d=a[6],c=a[7],p=a[8],g=a[9],_=a[10],m=a[11],f=a[12],y=a[13],M=a[14],v=a[15];if(r[0].setComponents(l-s,c-h,m-p,v-f).normalize(),r[1].setComponents(l+s,c+h,m+p,v+f).normalize(),r[2].setComponents(l+n,c+u,m+g,v+y).normalize(),r[3].setComponents(l-n,c-u,m-g,v-y).normalize(),i)r[4].setComponents(o,d,_,M).normalize(),r[5].setComponents(l-o,c-d,m-_,v-M).normalize();else if(r[4].setComponents(l-o,c-d,m-_,v-M).normalize(),t===ai)r[5].setComponents(l+o,c+d,m+_,v+M).normalize();else if(t===Cr)r[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);let t=qg.distanceTo(e.center);return Nr.radius=.7071067811865476+t,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Mo.x=r.normal.x>0?e.max.x:e.min.x,Mo.y=r.normal.y>0?e.max.y:e.min.y,Mo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xc=new Ve,jc=class Cf{constructor(){this.coordinateSystem=ai,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let s=i[a];Xc.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),r[a]===void 0&&(r[a]=new Ur),r[a].setFromProjectionMatrix(Xc,s.coordinateSystem,s.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Ur),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new Cf().copy(this)}};function oh(e,t){return e-t}function Yg(e,t){return e.z-t.z}function Zg(e,t){return t.z-e.z}var Jg=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,s=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let n=a[this.index];s.push(n),this.index++,n.start=e,n.count=t,n.z=i,n.index=r}reset(){this.list.length=0,this.index=0}},ri=new Ve,Kg=new fe(1,1,1),$g=new Ur,Qg=new jc,bo=new zt,Dr=new Dt,As=new R,qc=new R,e0=new R,lh=new Jg,kt=new wt,To=[];function t0(e,t,i=0){let r=t.itemSize;if(e.isInterleavedBufferAttribute||e.array.constructor!==t.array.constructor){let a=e.count;for(let s=0;s<a;s++)for(let n=0;n<r;n++)t.setComponent(s+i,n,e.getComponent(s,n))}else t.array.set(e.array,i*r);t.needsUpdate=!0}function Or(e,t){if(e.constructor!==t.constructor){let i=Math.min(e.length,t.length);for(let r=0;r<i;r++)t[r]=e[r]}else{let i=Math.min(e.length,t.length);t.set(new e.constructor(e.buffer,0,i))}}var Yc=class extends wt{constructor(e,t,i=t*2,r){super(new Xe,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),i=new pi(t,e,e,Yt,qt);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),i=new pi(t,e,e,rs,ci);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),i=new pi(t,e,e,Yt,qt);i.colorSpace=Ke.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let a in e.attributes){let s=e.getAttribute(a),{array:n,itemSize:o,normalized:l}=s,h=new n.constructor(i*o),u=new lt(h,o,l);t.setAttribute(a,u)}if(e.getIndex()!==null){let a=i>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new lt(a,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let r=e.getAttribute(i),a=t.getAttribute(i);if(r.itemSize!==a.itemSize||r.normalized!==a.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;let a=t[i].geometryIndex;this.getMatrixAt(i,ri),this.getBoundingBoxAt(a,bo).applyMatrix4(ri),e.union(bo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;let a=t[i].geometryIndex;this.getMatrixAt(i,ri),this.getBoundingSphereAt(a,Dr).applyMatrix4(ri),e.union(Dr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let t={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(oh),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=t):(i=this._instanceInfo.length,this._instanceInfo.push(t));let r=this._matricesTexture;ri.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(Kg.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);let r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},a=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let s=e.getIndex();if(s!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=i===-1?s.count:i),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let n;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(oh),n=this._availableGeometryIds.shift(),a[n]=r):(n=this._geometryCount,this._geometryCount++,a.push(r)),this.setGeometryAt(n,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,n}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,r=i.getIndex()!==null,a=i.getIndex(),s=t.getIndex(),n=this._geometryInfo[e];if(r&&s.count>n.reservedIndexCount||t.attributes.position.count>n.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let o=n.vertexStart,l=n.reservedVertexCount;n.vertexCount=t.getAttribute("position").count;for(let h in i.attributes){let u=t.getAttribute(h),d=i.getAttribute(h);t0(u,d,o);let c=u.itemSize;for(let p=u.count,g=l;p<g;p++){let _=o+p;for(let m=0;m<c;m++)d.setComponent(_,m,0)}d.needsUpdate=!0,d.addUpdateRange(o*c,l*c)}if(r){let h=n.indexStart,u=n.reservedIndexCount;n.indexCount=t.getIndex().count;for(let d=0;d<s.count;d++)a.setX(h+d,o+s.getX(d));for(let d=s.count,c=u;d<c;d++)a.setX(h+d,o);a.needsUpdate=!0,a.addUpdateRange(h,n.reservedIndexCount)}return n.start=r?n.indexStart:n.vertexStart,n.count=r?n.indexCount:n.vertexCount,n.boundingBox=null,t.boundingBox!==null&&(n.boundingBox=t.boundingBox.clone()),n.boundingSphere=null,t.boundingSphere!==null&&(n.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let i=this._instanceInfo;for(let r=0,a=i.length;r<a;r++)i[r].active&&i[r].geometryIndex===e&&this.deleteInstance(r);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,i=this._geometryInfo,r=i.map((s,n)=>n).sort((s,n)=>i[s].vertexStart-i[n].vertexStart),a=this.geometry;for(let s=0,n=i.length;s<n;s++){let o=r[s],l=i[o];if(l.active!==!1){if(a.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,c=a.index,p=c.array,g=e-u;for(let _=h;_<h+d;_++)p[_]=p[_]+g;c.array.copyWithin(t,h,h+d),c.addUpdateRange(t,d),c.needsUpdate=!0,l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=l,d=a.attributes;for(let c in d){let p=d[c],{array:g,itemSize:_}=p;g.copyWithin(e*_,h*_,(h+u)*_),p.addUpdateRange(e*_,u*_),p.needsUpdate=!0}l.vertexStart=e}e+=l.reservedVertexCount,l.start=a.index?l.indexStart:l.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){let a=new zt,s=i.index,n=i.attributes.position;for(let o=r.start,l=r.start+r.count;o<l;o++){let h=o;s&&(h=s.getX(h)),a.expandByPoint(As.fromBufferAttribute(n,h))}r.boundingBox=a}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){let a=new Dt;this.getBoundingBoxAt(e,bo),bo.getCenter(a.center);let s=i.index,n=i.attributes.position,o=0;for(let l=r.start,h=r.start+r.count;l<h;l++){let u=l;s&&(u=s.getX(u)),As.fromBufferAttribute(n,u),o=Math.max(o,a.center.distanceToSquared(As))}a.radius=Math.sqrt(o),r.boundingSphere=a}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let i=this._matricesTexture,r=this._matricesTexture.image.data;return t.toArray(r,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){let t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(oh);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let r=new Int32Array(e),a=new Int32Array(e);Or(this._multiDrawCounts,r),Or(this._multiDrawStarts,a),this._multiDrawCounts=r,this._multiDrawStarts=a,this._maxInstanceCount=e;let s=this._indirectTexture,n=this._matricesTexture,o=this._colorsTexture;s.dispose(),this._initIndirectTexture(),Or(s.image.data,this._indirectTexture.image.data),n.dispose(),this._initMatricesTexture(),Or(n.image.data,this._matricesTexture.image.data),o&&(o.dispose(),this._initColorsTexture(),Or(o.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let i=[...this._geometryInfo].filter(s=>s.active);if(Math.max(...i.map(s=>s.vertexStart+s.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(s=>s.indexStart+s.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Xe,this._initializeGeometry(r));let a=this.geometry;r.index&&Or(r.index.array,a.index.array);for(let s in r.attributes)Or(r.attributes[s].array,a.attributes[s].array)}raycast(e,t){let i=this._instanceInfo,r=this._geometryInfo,a=this.matrixWorld,s=this.geometry;kt.material=this.material,kt.geometry.index=s.index,kt.geometry.attributes=s.attributes,kt.geometry.boundingBox===null&&(kt.geometry.boundingBox=new zt),kt.geometry.boundingSphere===null&&(kt.geometry.boundingSphere=new Dt);for(let n=0,o=i.length;n<o;n++){if(!i[n].visible||!i[n].active)continue;let l=i[n].geometryIndex,h=r[l];kt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(n,kt.matrixWorld).premultiply(a),this.getBoundingBoxAt(l,kt.geometry.boundingBox),this.getBoundingSphereAt(l,kt.geometry.boundingSphere),kt.raycast(e,To);for(let u=0,d=To.length;u<d;u++){let c=To[u];c.object=this,c.batchId=n,t.push(c)}To.length=0}kt.material=null,kt.geometry.index=null,kt.geometry.attributes={},kt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,r,a){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let s=r.getIndex(),n=s===null?1:s.array.BYTES_PER_ELEMENT,o=1;a.wireframe&&(o=2,n=r.attributes.position.count>65535?4:2);let l=this._instanceInfo,h=this._multiDrawStarts,u=this._multiDrawCounts,d=this._geometryInfo,c=this.perObjectFrustumCulled,p=this._indirectTexture,g=p.image.data,_=i.isArrayCamera?Qg:$g;c&&(i.isArrayCamera?_.setFromArrayCamera(i):(ri.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),_.setFromProjectionMatrix(ri,i.coordinateSystem,i.reversedDepth)));let m=0;if(this.sortObjects){ri.copy(this.matrixWorld).invert(),As.setFromMatrixPosition(i.matrixWorld).applyMatrix4(ri),qc.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(ri);for(let M=0,v=l.length;M<v;M++)if(l[M].visible&&l[M].active){let b=l[M].geometryIndex;this.getMatrixAt(M,ri),this.getBoundingSphereAt(b,Dr).applyMatrix4(ri);let E=!1;if(c&&(E=!_.intersectsSphere(Dr)),!E){let C=d[b],x=e0.subVectors(Dr.center,As).dot(qc);lh.push(C.start,C.count,x,M)}}let f=lh.list,y=this.customSort;y===null?f.sort(a.transparent?Zg:Yg):y.call(this,f,i);for(let M=0,v=f.length;M<v;M++){let b=f[M];h[m]=b.start*n*o,u[m]=b.count*o,g[m]=b.index,m++}lh.reset()}else for(let f=0,y=l.length;f<y;f++)if(l[f].visible&&l[f].active){let M=l[f].geometryIndex,v=!1;if(c&&(this.getMatrixAt(f,ri),this.getBoundingSphereAt(M,Dr).applyMatrix4(ri),v=!_.intersectsSphere(Dr)),!v){let b=d[M];h[m]=b.start*n*o,u[m]=b.count*o,g[m]=f,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=n,this._visibilityChanged=!1}onBeforeShadow(e,t,i,r,a,s){this.onBeforeRender(e,null,r,a,s)}},Ht=class extends It{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wo=new R,Eo=new R,Zc=new Ve,Cs=new Ea,Ao=new Dt,hh=new R,Jc=new R,tr=class extends at{constructor(e=new Xe,t=new Ht){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)wo.fromBufferAttribute(t,r-1),Eo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=wo.distanceTo(Eo);e.setAttribute("lineDistance",new Te(i,1))}else pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Ao.radius+=a,e.ray.intersectsSphere(Ao)===!1)return;Zc.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(Zc);let n=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=n*n,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,s.start),c=Math.min(h.count,s.start+s.count);for(let p=d,g=c-1;p<g;p+=l){let _=h.getX(p),m=h.getX(p+1),f=Co(this,e,Cs,o,_,m,p);f&&t.push(f)}if(this.isLineLoop){let p=h.getX(c-1),g=h.getX(d),_=Co(this,e,Cs,o,p,g,c-1);_&&t.push(_)}}else{let d=Math.max(0,s.start),c=Math.min(u.count,s.start+s.count);for(let p=d,g=c-1;p<g;p+=l){let _=Co(this,e,Cs,o,p,p+1,p);_&&t.push(_)}if(this.isLineLoop){let p=Co(this,e,Cs,o,c-1,d,c-1);p&&t.push(p)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function Co(e,t,i,r,a,s,n){let o=e.geometry.attributes.position;if(wo.fromBufferAttribute(o,a),Eo.fromBufferAttribute(o,s),i.distanceSqToSegment(wo,Eo,hh,Jc)>r)return;hh.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(hh);if(!(l<t.near||l>t.far))return{distance:l,point:Jc.clone().applyMatrix4(e.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:e}}var Kc=new R,$c=new R,wi=class extends tr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Kc.fromBufferAttribute(t,r),$c.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Kc.distanceTo($c);e.setAttribute("lineDistance",new Te(i,1))}else pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},uh=class extends tr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ro=class extends It{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qc=new Ve,ch=new Ea,Io=new Dt,Po=new R,dh=class extends at{constructor(e=new Xe,t=new Ro){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=a,e.ray.intersectsSphere(Io)===!1)return;Qc.copy(r).invert(),ch.copy(e.ray).applyMatrix4(Qc);let n=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=n*n,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let c=u,p=d;c<p;c++){let g=l.getX(c);Po.fromBufferAttribute(h,g),ed(Po,g,o,r,e,t,this)}}else{let u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let c=u,p=d;c<p;c++)Po.fromBufferAttribute(h,c),ed(Po,c,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function ed(e,t,i,r,a,s,n){let o=ch.distanceSqToPoint(e);if(o<i){let l=new R;ch.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:n})}}var td=class extends Tt{constructor(e,t,i,r,a=pt,s=pt,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},i0=class extends td{constructor(e,t,i,r,a,s,n,o){super({},e,t,i,r,a,s,n,o),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},r0=class extends Tt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=xt,this.minFilter=xt,this.generateMipmaps=!1,this.needsUpdate=!0}},Lo=class extends Tt{constructor(e,t,i,r,a,s,n,o,l,h,u,d){super(null,s,n,o,l,h,r,a,u,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},a0=class extends Lo{constructor(e,t,i,r,a,s){super(e,t,i,a,s),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=jt,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},s0=class extends Lo{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,Ni),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Rs=class extends Tt{constructor(e=[],t=Ni,i,r,a,s,n,o,l,h){super(e,t,i,r,a,s,n,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},n0=class extends Tt{constructor(e,t,i,r,a,s,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},o0=class extends Tt{constructor(e,t,i,r,a,s,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=e?e.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},Ca=class extends Tt{constructor(e,t,i=ci,r,a,s,n=xt,o=xt,l,h=Ui,u=1){if(h!==Ui&&h!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,r,a,s,n,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},id=class extends Ca{constructor(e,t=ci,i=Ni,r,a,s=xt,n=xt,o,l=Ui){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,a,s,n,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ph=class extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Is=class Rf extends Xe{constructor(t=1,i=1,r=1,a=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:s,depthSegments:n};let o=this;a=Math.floor(a),s=Math.floor(s),n=Math.floor(n);let l=[],h=[],u=[],d=[],c=0,p=0;g("z","y","x",-1,-1,r,i,t,n,s,0),g("z","y","x",1,-1,r,i,-t,n,s,1),g("x","z","y",1,1,t,r,i,a,n,2),g("x","z","y",1,-1,t,r,-i,a,n,3),g("x","y","z",1,-1,t,i,r,a,s,4),g("x","y","z",-1,-1,t,i,-r,a,s,5),this.setIndex(l),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(d,2));function g(_,m,f,y,M,v,b,E,C,x,w){let L=v/C,I=b/x,D=v/2,X=b/2,N=E/2,G=C+1,Z=x+1,k=0,he=0,j=new R;for(let Y=0;Y<Z;Y++){let ee=Y*I-X;for(let ke=0;ke<G;ke++){let Ie=ke*L-D;j[_]=Ie*y,j[m]=ee*M,j[f]=N,h.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[f]=E>0?1:-1,u.push(j.x,j.y,j.z),d.push(ke/C),d.push(1-Y/x),k+=1}}for(let Y=0;Y<x;Y++)for(let ee=0;ee<C;ee++){let ke=c+ee+G*Y,Ie=c+ee+G*(Y+1),ht=c+(ee+1)+G*(Y+1),je=c+(ee+1)+G*Y;l.push(ke,Ie,je),l.push(Ie,ht,je),he+=6}o.addGroup(p,he,w),p+=he,c+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rf(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},rd=class If extends Xe{constructor(t=1,i=1,r=4,a=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:s},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),s=Math.max(1,Math.floor(s));let n=[],o=[],l=[],h=[],u=i/2,d=Math.PI/2*t,c=i,p=2*d+c,g=r*2+s,_=a+1,m=new R,f=new R;for(let y=0;y<=g;y++){let M=0,v=0,b=0,E=0;if(y<=r){let w=y/r,L=w*Math.PI/2;v=-u-t*Math.cos(L),b=t*Math.sin(L),E=-t*Math.cos(L),M=w*d}else if(y<=r+s){let w=(y-r)/s;v=-u+w*i,b=t,E=0,M=d+w*c}else{let w=(y-r-s)/r,L=w*Math.PI/2;v=u+t*Math.sin(L),b=t*Math.cos(L),E=t*Math.sin(L),M=d+c+w*d}let C=Math.max(0,Math.min(1,M/p)),x=0;y===0?x=.5/a:y===g&&(x=-.5/a);for(let w=0;w<=a;w++){let L=w/a,I=L*Math.PI*2,D=Math.sin(I),X=Math.cos(I);f.x=-b*X,f.y=v,f.z=b*D,o.push(f.x,f.y,f.z),m.set(-b*X,E,b*D),m.normalize(),l.push(m.x,m.y,m.z),h.push(L+x,C)}if(y>0){let w=(y-1)*_;for(let L=0;L<a;L++){let I=w+L,D=w+L+1,X=y*_+L,N=y*_+L+1;n.push(I,D,X),n.push(D,N,X)}}}this.setIndex(n),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new If(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ad=class Pf extends Xe{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let s=[],n=[],o=[],l=[],h=new R,u=new te;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,c=3;d<=i;d++,c+=3){let p=r+d/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),n.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(n[c]/t+1)/2,u.y=(n[c+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=i;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Te(n,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pf(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fh=class Lf extends Xe{constructor(t=1,i=1,r=1,a=32,s=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:s,openEnded:n,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),s=Math.floor(s);let u=[],d=[],c=[],p=[],g=0,_=[],m=r/2,f=0;y(),n===!1&&(t>0&&M(!0),i>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(p,2));function y(){let v=new R,b=new R,E=0,C=(i-t)/r;for(let x=0;x<=s;x++){let w=[],L=x/s,I=L*(i-t)+t;for(let D=0;D<=a;D++){let X=D/a,N=X*l+o,G=Math.sin(N),Z=Math.cos(N);b.x=I*G,b.y=-L*r+m,b.z=I*Z,d.push(b.x,b.y,b.z),v.set(G,C,Z).normalize(),c.push(v.x,v.y,v.z),p.push(X,1-L),w.push(g++)}_.push(w)}for(let x=0;x<a;x++)for(let w=0;w<s;w++){let L=_[w][x],I=_[w+1][x],D=_[w+1][x+1],X=_[w][x+1];(t>0||w!==0)&&(u.push(L,I,X),E+=3),(i>0||w!==s-1)&&(u.push(I,D,X),E+=3)}h.addGroup(f,E,0),f+=E}function M(v){let b=g,E=new te,C=new R,x=0,w=v===!0?t:i,L=v===!0?1:-1;for(let D=1;D<=a;D++)d.push(0,m*L,0),c.push(0,L,0),p.push(.5,.5),g++;let I=g;for(let D=0;D<=a;D++){let X=D/a*l+o,N=Math.cos(X),G=Math.sin(X);C.x=w*G,C.y=m*L,C.z=w*N,d.push(C.x,C.y,C.z),c.push(0,L,0),E.x=N*.5+.5,E.y=G*.5*L+.5,p.push(E.x,E.y),g++}for(let D=0;D<a;D++){let X=b+D,N=I+D;v===!0?u.push(N,N+1,X):u.push(N+1,N,X),x+=3}h.addGroup(f,x,v===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mh=class Nf extends fh{constructor(t=1,i=1,r=32,a=1,s=!1,n=0,o=Math.PI*2){super(0,t,i,r,a,s,n,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:n,thetaLength:o}}static fromJSON(t){return new Nf(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ra=class Uf extends Xe{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let s=[],n=[];o(a),h(r),u(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(n,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let M=new R,v=new R,b=new R;for(let E=0;E<i.length;E+=3)p(i[E+0],M),p(i[E+1],v),p(i[E+2],b),l(M,v,b,y)}function l(y,M,v,b){let E=b+1,C=[];for(let x=0;x<=E;x++){C[x]=[];let w=y.clone().lerp(v,x/E),L=M.clone().lerp(v,x/E),I=E-x;for(let D=0;D<=I;D++)D===0&&x===E?C[x][D]=w:C[x][D]=w.clone().lerp(L,D/I)}for(let x=0;x<E;x++)for(let w=0;w<2*(E-x)-1;w++){let L=Math.floor(w/2);w%2===0?(c(C[x][L+1]),c(C[x+1][L]),c(C[x][L])):(c(C[x][L+1]),c(C[x+1][L+1]),c(C[x+1][L]))}}function h(y){let M=new R;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(y),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function u(){let y=new R;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];let v=m(y)/2/Math.PI+.5,b=f(y)/Math.PI+.5;n.push(v,1-b)}g(),d()}function d(){for(let y=0;y<n.length;y+=6){let M=n[y+0],v=n[y+2],b=n[y+4],E=Math.max(M,v,b),C=Math.min(M,v,b);E>.9&&C<.1&&(M<.2&&(n[y+0]+=1),v<.2&&(n[y+2]+=1),b<.2&&(n[y+4]+=1))}}function c(y){s.push(y.x,y.y,y.z)}function p(y,M){let v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){let y=new R,M=new R,v=new R,b=new R,E=new te,C=new te,x=new te;for(let w=0,L=0;w<s.length;w+=9,L+=6){y.set(s[w+0],s[w+1],s[w+2]),M.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),E.set(n[L+0],n[L+1]),C.set(n[L+2],n[L+3]),x.set(n[L+4],n[L+5]),b.copy(y).add(M).add(v).divideScalar(3);let I=m(b);_(E,L+0,y,I),_(C,L+2,M,I),_(x,L+4,v,I)}}function _(y,M,v,b){b<0&&y.x===1&&(n[M]=y.x-1),v.x===0&&v.z===0&&(n[M]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uf(t.vertices,t.indices,t.radius,t.detail)}},sd=class Df extends Ra{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],n=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,n,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Df(t.radius,t.detail)}},No=new R,Uo=new R,gh=new R,Do=new pr,nd=class extends Xe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Rr*t),a=e.getIndex(),s=e.getAttribute("position"),n=a?a.count:s.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),u={},d=[];for(let c=0;c<n;c+=3){a?(o[0]=a.getX(c),o[1]=a.getX(c+1),o[2]=a.getX(c+2)):(o[0]=c,o[1]=c+1,o[2]=c+2);let{a:p,b:g,c:_}=Do;if(p.fromBufferAttribute(s,o[0]),g.fromBufferAttribute(s,o[1]),_.fromBufferAttribute(s,o[2]),Do.getNormal(gh),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let f=(m+1)%3,y=h[m],M=h[f],v=Do[l[m]],b=Do[l[f]],E=`${y}_${M}`,C=`${M}_${y}`;C in u&&u[C]?(gh.dot(u[C].normal)<=r&&(d.push(v.x,v.y,v.z),d.push(b.x,b.y,b.z)),u[C]=null):E in u||(u[E]={index0:o[m],index1:o[f],normal:gh.clone()})}}for(let c in u)if(u[c]){let{index0:p,index1:g}=u[c];No.fromBufferAttribute(s,p),Uo.fromBufferAttribute(s,g),d.push(No.x,No.y,No.z),d.push(Uo.x,Uo.y,Uo.z)}this.setAttribute("position",new Te(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,s;t?s=t:s=e*i[a-1];let n=0,o=a-1,l;for(;n<=o;)if(r=Math.floor(n+(o-n)/2),l=i[r]-s,l<0)n=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===s)return r/(a-1);let h=i[r],u=i[r+1]-h,d=(s-h)/u;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),s=this.getPoint(r),n=t||(a.isVector2?new te:new R);return n.copy(s).sub(a).normalize(),n}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,r=[],a=[],s=[],n=new R,o=new Ve;for(let c=0;c<=e;c++){let p=c/e;r[c]=this.getTangentAt(p,new R)}a[0]=new R,s[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),n.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],n),s[0].crossVectors(r[0],a[0]);for(let c=1;c<=e;c++){if(a[c]=a[c-1].clone(),s[c]=s[c-1].clone(),n.crossVectors(r[c-1],r[c]),n.length()>Number.EPSILON){n.normalize();let p=Math.acos(Ge(r[c-1].dot(r[c]),-1,1));a[c].applyMatrix4(o.makeRotationAxis(n,p))}s[c].crossVectors(r[c],a[c])}if(t===!0){let c=Math.acos(Ge(a[0].dot(a[e]),-1,1));c/=e,r[0].dot(n.crossVectors(a[0],a[e]))>0&&(c=-c);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],c*p)),s[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Oo=class extends Ei{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,n=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=n,this.aRotation=o}getPoint(e,t=new te){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);let n=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(n),l=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,c=l-this.aY;o=d*h-c*u+this.aX,l=d*u+c*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},od=class extends Oo{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function _h(){let e=0,t=0,i=0,r=0;function a(s,n,o,l){e=s,t=o,i=-3*s+3*n-2*o-l,r=2*s-2*n+o+l}return{initCatmullRom:function(s,n,o,l,h){a(n,o,h*(o-s),h*(l-n))},initNonuniformCatmullRom:function(s,n,o,l,h,u,d){let c=(n-s)/h-(o-s)/(h+u)+(o-n)/u,p=(o-n)/u-(l-n)/(u+d)+(l-o)/d;c*=u,p*=u,a(n,o,c,p)},calc:function(s){let n=s*s,o=n*s;return e+t*s+i*n+r*o}}}var ld=new R,hd=new R,vh=new _h,xh=new _h,yh=new _h,ud=class extends Ei{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,n=Math.floor(s),o=s-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/a)+1)*a:o===0&&n===a-1&&(n=a-2,o=1);let l,h;this.closed||n>0?l=r[(n-1)%a]:(hd.subVectors(r[0],r[1]).add(r[0]),l=hd);let u=r[n%a],d=r[(n+1)%a];if(this.closed||n+2<a?h=r[(n+2)%a]:(ld.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=ld),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),c),g=Math.pow(u.distanceToSquared(d),c),_=Math.pow(d.distanceToSquared(h),c);g<1e-4&&(g=1),p<1e-4&&(p=g),_<1e-4&&(_=g),vh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,g,_),xh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,g,_),yh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,g,_)}else this.curveType==="catmullrom"&&(vh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),xh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),yh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(vh.calc(o),xh.calc(o),yh.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cd(e,t,i,r,a){let s=(r-t)*.5,n=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+s+n)*l+(-3*i+3*r-2*s-n)*o+s*e+i}function l0(e,t){let i=1-e;return i*i*t}function h0(e,t){return 2*(1-e)*e*t}function u0(e,t){return e*e*t}function Ps(e,t,i,r){return l0(e,t)+h0(e,i)+u0(e,r)}function c0(e,t){let i=1-e;return i*i*i*t}function d0(e,t){let i=1-e;return 3*i*i*e*t}function p0(e,t){return 3*(1-e)*e*e*t}function f0(e,t){return e*e*e*t}function Ls(e,t,i,r,a){return c0(e,t)+d0(e,i)+p0(e,r)+f0(e,a)}var Sh=class extends Ei{constructor(e=new te,t=new te,i=new te,r=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new te){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(Ls(e,r.x,a.x,s.x,n.x),Ls(e,r.y,a.y,s.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dd=class extends Ei{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(Ls(e,r.x,a.x,s.x,n.x),Ls(e,r.y,a.y,s.y,n.y),Ls(e,r.z,a.z,s.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mh=class extends Ei{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pd=class extends Ei{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bh=class extends Ei{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(Ps(e,r.x,a.x,s.x),Ps(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Th=class extends Ei{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(Ps(e,r.x,a.x,s.x),Ps(e,r.y,a.y,s.y),Ps(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wh=class extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),n=a-s,o=r[s===0?s:s-1],l=r[s],h=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return i.set(cd(n,o.x,l.x,h.x,u.x),cd(n,o.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new te().fromArray(r))}return this}},Fo=Object.freeze({__proto__:null,ArcCurve:od,CatmullRomCurve3:ud,CubicBezierCurve:Sh,CubicBezierCurve3:dd,EllipseCurve:Oo,LineCurve:Mh,LineCurve3:pd,QuadraticBezierCurve:bh,QuadraticBezierCurve3:Th,SplineCurve:wh}),fd=class extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let s=r[a]-i,n=this.curves[a],o=n.getLength(),l=o===0?0:1-s/o;return n.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],n=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(n);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Fo[r.type]().fromJSON(r))}return this}},Ns=class extends fd{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Mh(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new bh(this.currentPoint.clone(),new te(e,t),new te(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){let n=new Sh(this.currentPoint.clone(),new te(e,t),new te(i,r),new te(a,s));return this.curves.push(n),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new wh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){let n=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+n,t+o,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,n,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,s,n,o),this}absellipse(e,t,i,r,a,s,n,o){let l=new Oo(e,t,i,r,a,s,n,o);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Us=class extends Ns{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ns().fromJSON(r))}return this}};function m0(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,s=md(e,0,a,i,!0),n=[];if(!s||s.next===s.prev)return n;let o,l,h;if(r&&(s=y0(e,t,s,i)),e.length>80*i){o=e[0],l=e[1];let u=o,d=l;for(let c=i;c<a;c+=i){let p=e[c],g=e[c+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>d&&(d=g)}h=Math.max(u-o,d-l),h=h!==0?32767/h:0}return Ds(s,n,i,o,l,h,0),n}function md(e,t,i,r,a){let s;if(a===P0(e,t,i,r)>0)for(let n=t;n<i;n+=r)s=xd(n/r|0,e[n],e[n+1],s);else for(let n=i-r;n>=t;n-=r)s=xd(n/r|0,e[n],e[n+1],s);return s&&Ia(s,s.next)&&(Bs(s),s=s.next),s}function Fr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Ia(i,i.next)||yt(i.prev,i,i.next)===0)){if(Bs(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Ds(e,t,i,r,a,s,n){if(!e)return;!n&&s&&w0(e,r,a,s);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(s?_0(e,r,a,s):g0(e)){t.push(l.i,e.i,h.i),Bs(e),e=h.next,o=h.next;continue}if(e=h,e===o){n?n===1?(e=v0(Fr(e),t),Ds(e,t,i,r,a,s,2)):n===2&&x0(e,t,i,r,a,s):Ds(Fr(e),t,i,r,a,s,1);break}}}function g0(e){let t=e.prev,i=e,r=e.next;if(yt(t,i,r)>=0)return!1;let a=t.x,s=i.x,n=r.x,o=t.y,l=i.y,h=r.y,u=Math.min(a,s,n),d=Math.min(o,l,h),c=Math.max(a,s,n),p=Math.max(o,l,h),g=r.next;for(;g!==t;){if(g.x>=u&&g.x<=c&&g.y>=d&&g.y<=p&&Os(a,o,s,l,n,h,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _0(e,t,i,r){let a=e.prev,s=e,n=e.next;if(yt(a,s,n)>=0)return!1;let o=a.x,l=s.x,h=n.x,u=a.y,d=s.y,c=n.y,p=Math.min(o,l,h),g=Math.min(u,d,c),_=Math.max(o,l,h),m=Math.max(u,d,c),f=Eh(p,g,t,i,r),y=Eh(_,m,t,i,r),M=e.prevZ,v=e.nextZ;for(;M&&M.z>=f&&v&&v.z<=y;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==a&&M!==n&&Os(o,u,l,d,h,c,M.x,M.y)&&yt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==a&&v!==n&&Os(o,u,l,d,h,c,v.x,v.y)&&yt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==a&&M!==n&&Os(o,u,l,d,h,c,M.x,M.y)&&yt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==a&&v!==n&&Os(o,u,l,d,h,c,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function v0(e,t){let i=e;do{let r=i.prev,a=i.next.next;!Ia(r,a)&&_d(r,i,i.next,a)&&Fs(r,a)&&Fs(a,r)&&(t.push(r.i,i.i,a.i),Bs(i),Bs(i.next),i=e=a),i=i.next}while(i!==e);return Fr(i)}function x0(e,t,i,r,a,s){let n=e;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&C0(n,o)){let l=vd(n,o);n=Fr(n,n.next),l=Fr(l,l.next),Ds(n,t,i,r,a,s,0),Ds(l,t,i,r,a,s,0);return}o=o.next}n=n.next}while(n!==e)}function y0(e,t,i,r){let a=[];for(let s=0,n=t.length;s<n;s++){let o=t[s]*r,l=s<n-1?t[s+1]*r:e.length,h=md(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(A0(h))}a.sort(S0);for(let s=0;s<a.length;s++)i=M0(a[s],i);return i}function S0(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function M0(e,t){let i=b0(e,t);if(!i)return t;let r=vd(i,e);return Fr(r,r.next),Fr(i,i.next)}function b0(e,t){let i=t,r=e.x,a=e.y,s=-1/0,n;if(Ia(e,i))return i;do{if(Ia(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>s&&(s=d,n=i.x<i.next.x?i:i.next,d===r))return n}i=i.next}while(i!==t);if(!n)return null;let o=n,l=n.x,h=n.y,u=1/0;i=n;do{if(r>=i.x&&i.x>=l&&r!==i.x&&gd(a<h?r:s,a,l,h,a<h?s:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);Fs(i,e)&&(d<u||d===u&&(i.x>n.x||i.x===n.x&&T0(n,i)))&&(n=i,u=d)}i=i.next}while(i!==o);return n}function T0(e,t){return yt(e.prev,e,t.prev)<0&&yt(t.next,e,e.next)<0}function w0(e,t,i,r){let a=e;do a.z===0&&(a.z=Eh(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,E0(a)}function E0(e){let t,i=1;do{let r=e,a;e=null;let s=null;for(t=0;r;){t++;let n=r,o=0;for(let h=0;h<i&&(o++,n=n.nextZ,!!n);h++);let l=i;for(;o>0||l>0&&n;)o!==0&&(l===0||!n||r.z<=n.z)?(a=r,r=r.nextZ,o--):(a=n,n=n.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;r=n}s.nextZ=null,i*=2}while(t>1);return e}function Eh(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function A0(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function gd(e,t,i,r,a,s,n,o){return(a-n)*(t-o)>=(e-n)*(s-o)&&(e-n)*(r-o)>=(i-n)*(t-o)&&(i-n)*(s-o)>=(a-n)*(r-o)}function Os(e,t,i,r,a,s,n,o){return!(e===n&&t===o)&&gd(e,t,i,r,a,s,n,o)}function C0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!R0(e,t)&&(Fs(e,t)&&Fs(t,e)&&I0(e,t)&&(yt(e.prev,e,t.prev)||yt(e,t.prev,t))||Ia(e,t)&&yt(e.prev,e,e.next)>0&&yt(t.prev,t,t.next)>0)}function yt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Ia(e,t){return e.x===t.x&&e.y===t.y}function _d(e,t,i,r){let a=zo(yt(e,t,i)),s=zo(yt(e,t,r)),n=zo(yt(i,r,e)),o=zo(yt(i,r,t));return!!(a!==s&&n!==o||a===0&&Bo(e,i,t)||s===0&&Bo(e,r,t)||n===0&&Bo(i,e,r)||o===0&&Bo(i,t,r))}function Bo(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function zo(e){return e>0?1:e<0?-1:0}function R0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&_d(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Fs(e,t){return yt(e.prev,e,e.next)<0?yt(e,t,e.next)>=0&&yt(e,e.prev,t)>=0:yt(e,t,e.prev)<0||yt(e,e.next,t)<0}function I0(e,t){let i=e,r=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&a<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function vd(e,t){let i=Ah(e.i,e.x,e.y),r=Ah(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function xd(e,t,i,r){let a=Ah(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Bs(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ah(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function P0(e,t,i,r){let a=0;for(let s=t,n=i-r;s<i;s+=r)a+=(e[n]-e[s])*(e[s+1]+e[n+1]),n=s;return a}var L0=class{static triangulate(e,t,i=2){return m0(e,t,i)}},ir=class Of{static area(t){let i=t.length,r=0;for(let a=i-1,s=0;s<i;a=s++)r+=t[a].x*t[s].y-t[s].x*t[a].y;return r*.5}static isClockWise(t){return Of.area(t)<0}static triangulateShape(t,i){let r=[],a=[],s=[];yd(t),Sd(r,t);let n=t.length;i.forEach(yd);for(let l=0;l<i.length;l++)a.push(n),n+=i[l].length,Sd(r,i[l]);let o=L0.triangulate(r,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function yd(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Sd(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Md=class Ff extends Xe{constructor(t=new Us([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],s=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];n(h)}this.setAttribute("position",new Te(a,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals();function n(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,c=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,_=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:N0,M,v=!1,b,E,C,x;if(f){M=f.getSpacedPoints(u),v=!0,c=!1;let Q=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(u,Q),E=new R,C=new R,x=new R}c||(m=0,p=0,g=0,_=0);let w=o.extractPoints(h),L=w.shape,I=w.holes;if(!ir.isClockWise(L)){L=L.reverse();for(let Q=0,$=I.length;Q<$;Q++){let oe=I[Q];ir.isClockWise(oe)&&(I[Q]=oe.reverse())}}function D(Q){let $=10000000000000001e-36,oe=Q[0];for(let ye=1;ye<=Q.length;ye++){let Se=ye%Q.length,Ae=Q[Se],Oe=Ae.x-oe.x,We=Ae.y-oe.y,Ye=Oe*Oe+We*We,P=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(oe.x),Math.abs(oe.y)),mt=$*P*P;if(Ye<=mt){Q.splice(Se,1),ye--;continue}oe=Ae}}D(L),I.forEach(D);let X=I.length,N=L;for(let Q=0;Q<X;Q++){let $=I[Q];L=L.concat($)}function G(Q,$,oe){return $||Pe("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector($,oe)}let Z=L.length;function k(Q,$,oe){let ye,Se,Ae,Oe=Q.x-$.x,We=Q.y-$.y,Ye=oe.x-Q.x,P=oe.y-Q.y,mt=Oe*Oe+We*We,it=Oe*P-We*Ye;if(Math.abs(it)>Number.EPSILON){let et=Math.sqrt(mt),A=Math.sqrt(Ye*Ye+P*P),S=$.x-We/et,U=$.y+Oe/et,H=oe.x-P/A,K=oe.y+Ye/A,ce=((H-S)*P-(K-U)*Ye)/(Oe*P-We*Ye);ye=S+Oe*ce-Q.x,Se=U+We*ce-Q.y;let ge=ye*ye+Se*Se;if(ge<=2)return new te(ye,Se);Ae=Math.sqrt(ge/2)}else{let et=!1;Oe>Number.EPSILON?Ye>Number.EPSILON&&(et=!0):Oe<-Number.EPSILON?Ye<-Number.EPSILON&&(et=!0):Math.sign(We)===Math.sign(P)&&(et=!0),et?(ye=-We,Se=Oe,Ae=Math.sqrt(mt)):(ye=Oe,Se=We,Ae=Math.sqrt(mt/2))}return new te(ye/Ae,Se/Ae)}let he=[];for(let Q=0,$=N.length,oe=$-1,ye=Q+1;Q<$;Q++,oe++,ye++)oe===$&&(oe=0),ye===$&&(ye=0),he[Q]=k(N[Q],N[oe],N[ye]);let j=[],Y,ee=he.concat();for(let Q=0,$=X;Q<$;Q++){let oe=I[Q];Y=[];for(let ye=0,Se=oe.length,Ae=Se-1,Oe=ye+1;ye<Se;ye++,Ae++,Oe++)Ae===Se&&(Ae=0),Oe===Se&&(Oe=0),Y[ye]=k(oe[ye],oe[Ae],oe[Oe]);j.push(Y),ee=ee.concat(Y)}let ke;if(m===0)ke=ir.triangulateShape(N,I);else{let Q=[],$=[];for(let oe=0;oe<m;oe++){let ye=oe/m,Se=p*Math.cos(ye*Math.PI/2),Ae=g*Math.sin(ye*Math.PI/2)+_;for(let Oe=0,We=N.length;Oe<We;Oe++){let Ye=G(N[Oe],he[Oe],Ae);ne(Ye.x,Ye.y,-Se),ye===0&&Q.push(Ye)}for(let Oe=0,We=X;Oe<We;Oe++){let Ye=I[Oe];Y=j[Oe];let P=[];for(let mt=0,it=Ye.length;mt<it;mt++){let et=G(Ye[mt],Y[mt],Ae);ne(et.x,et.y,-Se),ye===0&&P.push(et)}ye===0&&$.push(P)}}ke=ir.triangulateShape(Q,$)}let Ie=ke.length,ht=g+_;for(let Q=0;Q<Z;Q++){let $=c?G(L[Q],ee[Q],ht):L[Q];v?(C.copy(b.normals[0]).multiplyScalar($.x),E.copy(b.binormals[0]).multiplyScalar($.y),x.copy(M[0]).add(C).add(E),ne(x.x,x.y,x.z)):ne($.x,$.y,0)}for(let Q=1;Q<=u;Q++)for(let $=0;$<Z;$++){let oe=c?G(L[$],ee[$],ht):L[$];v?(C.copy(b.normals[Q]).multiplyScalar(oe.x),E.copy(b.binormals[Q]).multiplyScalar(oe.y),x.copy(M[Q]).add(C).add(E),ne(x.x,x.y,x.z)):ne(oe.x,oe.y,d/u*Q)}for(let Q=m-1;Q>=0;Q--){let $=Q/m,oe=p*Math.cos($*Math.PI/2),ye=g*Math.sin($*Math.PI/2)+_;for(let Se=0,Ae=N.length;Se<Ae;Se++){let Oe=G(N[Se],he[Se],ye);ne(Oe.x,Oe.y,d+oe)}for(let Se=0,Ae=I.length;Se<Ae;Se++){let Oe=I[Se];Y=j[Se];for(let We=0,Ye=Oe.length;We<Ye;We++){let P=G(Oe[We],Y[We],ye);v?ne(P.x,P.y+M[u-1].y,M[u-1].x+oe):ne(P.x,P.y,d+oe)}}}je(),q();function je(){let Q=a.length/3;if(c){let $=0,oe=Z*$;for(let ye=0;ye<Ie;ye++){let Se=ke[ye];Le(Se[2]+oe,Se[1]+oe,Se[0]+oe)}$=u+m*2,oe=Z*$;for(let ye=0;ye<Ie;ye++){let Se=ke[ye];Le(Se[0]+oe,Se[1]+oe,Se[2]+oe)}}else{for(let $=0;$<Ie;$++){let oe=ke[$];Le(oe[2],oe[1],oe[0])}for(let $=0;$<Ie;$++){let oe=ke[$];Le(oe[0]+Z*u,oe[1]+Z*u,oe[2]+Z*u)}}r.addGroup(Q,a.length/3-Q,0)}function q(){let Q=a.length/3,$=0;re(N,$),$+=N.length;for(let oe=0,ye=I.length;oe<ye;oe++){let Se=I[oe];re(Se,$),$+=Se.length}r.addGroup(Q,a.length/3-Q,1)}function re(Q,$){let oe=Q.length;for(;--oe>=0;){let ye=oe,Se=oe-1;Se<0&&(Se=Q.length-1);for(let Ae=0,Oe=u+m*2;Ae<Oe;Ae++){let We=Z*Ae,Ye=Z*(Ae+1),P=$+ye+We,mt=$+Se+We,it=$+Se+Ye,et=$+ye+Ye;Fe(P,mt,it,et)}}}function ne(Q,$,oe){l.push(Q),l.push($),l.push(oe)}function Le(Q,$,oe){de(Q),de($),de(oe);let ye=a.length/3,Se=y.generateTopUV(r,a,ye-3,ye-2,ye-1);$e(Se[0]),$e(Se[1]),$e(Se[2])}function Fe(Q,$,oe,ye){de(Q),de($),de(ye),de($),de(oe),de(ye);let Se=a.length/3,Ae=y.generateSideWallUV(r,a,Se-6,Se-3,Se-2,Se-1);$e(Ae[0]),$e(Ae[1]),$e(Ae[3]),$e(Ae[1]),$e(Ae[2]),$e(Ae[3])}function de(Q){a.push(l[Q*3+0]),a.push(l[Q*3+1]),a.push(l[Q*3+2])}function $e(Q){s.push(Q.x),s.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return U0(i,r,t)}static fromJSON(t,i){let r=[];for(let s=0,n=t.shapes.length;s<n;s++){let o=i[t.shapes[s]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Fo[a.type]().fromJSON(a)),new Ff(r,t.options)}},N0={generateTopUV:function(e,t,i,r,a){let s=t[i*3],n=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],u=t[a*3+1];return[new te(s,n),new te(o,l),new te(h,u)]},generateSideWallUV:function(e,t,i,r,a,s){let n=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],u=t[r*3+1],d=t[r*3+2],c=t[a*3],p=t[a*3+1],g=t[a*3+2],_=t[s*3],m=t[s*3+1],f=t[s*3+2];return Math.abs(o-u)<Math.abs(n-h)?[new te(n,1-l),new te(h,1-d),new te(c,1-g),new te(_,1-f)]:[new te(o,1-l),new te(u,1-d),new te(p,1-g),new te(m,1-f)]}};function U0(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let s=e[r];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var bd=class Bf extends Ra{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Bf(t.radius,t.detail)}},Td=class zf extends Xe{constructor(t=[new te(0,-.5),new te(.5,0),new te(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=Ge(a,0,Math.PI*2);let s=[],n=[],o=[],l=[],h=[],u=1/i,d=new R,c=new te,p=new R,g=new R,_=new R,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=i;y++){let M=r+y*u*a,v=Math.sin(M),b=Math.cos(M);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*v,d.y=t[E].y,d.z=t[E].x*b,n.push(d.x,d.y,d.z),c.x=y/i,c.y=E/(t.length-1),o.push(c.x,c.y);let C=l[3*E+0]*v,x=l[3*E+1],w=l[3*E+0]*b;h.push(C,x,w)}}for(let y=0;y<i;y++)for(let M=0;M<t.length-1;M++){let v=M+y*t.length,b=v,E=v+t.length,C=v+t.length+1,x=v+1;s.push(b,E,x),s.push(C,x,E)}this.setIndex(s),this.setAttribute("position",new Te(n,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zf(t.points,t.segments,t.phiStart,t.phiLength)}},Ch=class Gf extends Ra{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Gf(t.radius,t.detail)}},Go=class Vf extends Xe{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let s=t/2,n=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,u=l+1,d=t/o,c=i/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){let y=f*c-n;for(let M=0;M<h;M++){let v=M*d-s;g.push(v,-y,0),_.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let M=y+h*f,v=y+h*(f+1),b=y+1+h*(f+1),E=y+1+h*f;p.push(M,v,E),p.push(v,b,E)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vf(t.width,t.height,t.widthSegments,t.heightSegments)}},wd=class kf extends Xe{constructor(t=.5,i=1,r=32,a=1,s=0,n=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:s,thetaLength:n},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],u=[],d=t,c=(i-t)/a,p=new R,g=new te;for(let _=0;_<=a;_++){for(let m=0;m<=r;m++){let f=s+m/r*n;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/i+1)/2,g.y=(p.y/i+1)/2,u.push(g.x,g.y)}d+=c}for(let _=0;_<a;_++){let m=_*(r+1);for(let f=0;f<r;f++){let y=f+m,M=y,v=y+r+1,b=y+r+2,E=y+1;o.push(M,v,E),o.push(v,b,E)}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kf(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ed=class Hf extends Xe{constructor(t=new Us([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],s=[],n=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(s,3)),this.setAttribute("uv",new Te(n,2));function h(u){let d=a.length/3,c=u.extractPoints(i),p=c.shape,g=c.holes;ir.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let y=g[m];ir.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=ir.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];a.push(y.x,y.y,0),s.push(0,0,1),n.push(y.x,y.y)}for(let m=0,f=_.length;m<f;m++){let y=_[m],M=y[0]+d,v=y[1]+d,b=y[2]+d;r.push(M,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return D0(i,t)}static fromJSON(t,i){let r=[];for(let a=0,s=t.shapes.length;a<s;a++){let n=i[t.shapes[a]];r.push(n)}return new Hf(r,t.curveSegments)}};function D0(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Rh=class Wf extends Xe{constructor(t=1,i=32,r=16,a=0,s=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:s,thetaStart:n,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(n+o,Math.PI),h=0,u=[],d=new R,c=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=r;f++){let y=[],M=f/r,v=n+M*o,b=t*Math.cos(v),E=Math.sqrt(t*t-b*b),C=0;f===0&&n===0?C=.5/i:f===r&&l===Math.PI&&(C=-.5/i);for(let x=0;x<=i;x++){let w=x/i,L=a+w*s;d.x=-E*Math.cos(L),d.y=b,d.z=E*Math.sin(L),g.push(d.x,d.y,d.z),c.copy(d).normalize(),_.push(c.x,c.y,c.z),m.push(w+C,1-M),y.push(h++)}u.push(y)}for(let f=0;f<r;f++)for(let y=0;y<i;y++){let M=u[f][y+1],v=u[f][y],b=u[f+1][y],E=u[f+1][y+1];(f!==0||n>0)&&p.push(M,v,E),(f!==r-1||l<Math.PI)&&p.push(v,b,E)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wf(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ad=class Xf extends Ra{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Xf(t.radius,t.detail)}},Cd=class jf extends Xe{constructor(t=1,i=.4,r=12,a=48,s=Math.PI*2,n=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:s,thetaStart:n,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],d=[],c=new R,p=new R,g=new R;for(let _=0;_<=r;_++){let m=n+_/r*o;for(let f=0;f<=a;f++){let y=f/a*s;p.x=(t+i*Math.cos(m))*Math.cos(y),p.y=(t+i*Math.cos(m))*Math.sin(y),p.z=i*Math.sin(m),h.push(p.x,p.y,p.z),c.x=t*Math.cos(y),c.y=t*Math.sin(y),g.subVectors(p,c).normalize(),u.push(g.x,g.y,g.z),d.push(f/a),d.push(_/r)}}for(let _=1;_<=r;_++)for(let m=1;m<=a;m++){let f=(a+1)*_+m-1,y=(a+1)*(_-1)+m-1,M=(a+1)*(_-1)+m,v=(a+1)*_+m;l.push(f,y,v),l.push(y,M,v)}this.setIndex(l),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jf(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Rd=class qf extends Xe{constructor(t=1,i=.4,r=64,a=8,s=2,n=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:s,q:n},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],u=[],d=new R,c=new R,p=new R,g=new R,_=new R,m=new R,f=new R;for(let M=0;M<=r;++M){let v=M/r*s*Math.PI*2;y(v,s,n,t,p),y(v+.01,s,n,t,g),m.subVectors(g,p),f.addVectors(g,p),_.crossVectors(m,f),f.crossVectors(_,m),_.normalize(),f.normalize();for(let b=0;b<=a;++b){let E=b/a*Math.PI*2,C=-i*Math.cos(E),x=i*Math.sin(E);d.x=p.x+(C*f.x+x*_.x),d.y=p.y+(C*f.y+x*_.y),d.z=p.z+(C*f.z+x*_.z),l.push(d.x,d.y,d.z),c.subVectors(d,p).normalize(),h.push(c.x,c.y,c.z),u.push(M/r),u.push(b/a)}}for(let M=1;M<=r;M++)for(let v=1;v<=a;v++){let b=(a+1)*(M-1)+(v-1),E=(a+1)*M+(v-1),C=(a+1)*M+v,x=(a+1)*(M-1)+v;o.push(b,E,x),o.push(E,C,x)}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function y(M,v,b,E,C){let x=Math.cos(M),w=Math.sin(M),L=b/v*M,I=Math.cos(L);C.x=E*(2+I)*.5*x,C.y=E*(2+I)*w*.5,C.z=E*Math.sin(L)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qf(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Id=class Yf extends Xe{constructor(t=new Th(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),i=64,r=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:s};let n=t.computeFrenetFrames(i,s);this.tangents=n.tangents,this.normals=n.normals,this.binormals=n.binormals;let o=new R,l=new R,h=new te,u=new R,d=[],c=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(p,2));function _(){for(let M=0;M<i;M++)m(M);m(s===!1?i:0),y(),f()}function m(M){u=t.getPointAt(M/i,u);let v=n.normals[M],b=n.binormals[M];for(let E=0;E<=a;E++){let C=E/a*Math.PI*2,x=Math.sin(C),w=-Math.cos(C);l.x=w*v.x+x*b.x,l.y=w*v.y+x*b.y,l.z=w*v.z+x*b.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=u.x+r*l.x,o.y=u.y+r*l.y,o.z=u.z+r*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let M=1;M<=i;M++)for(let v=1;v<=a;v++){let b=(a+1)*(M-1)+(v-1),E=(a+1)*M+(v-1),C=(a+1)*M+v,x=(a+1)*(M-1)+v;g.push(b,E,x),g.push(E,C,x)}}function y(){for(let M=0;M<=i;M++)for(let v=0;v<=a;v++)h.x=M/i,h.y=v/a,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Yf(new Fo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Pd=class extends Xe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new R,a=new R;if(e.index!==null){let s=e.attributes.position,n=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:n.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let u=o[l],d=u.start,c=u.count;for(let p=d,g=d+c;p<g;p+=3)for(let _=0;_<3;_++){let m=n.getX(p+_),f=n.getX(p+(_+1)%3);r.fromBufferAttribute(s,m),a.fromBufferAttribute(s,f),Ld(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let s=e.attributes.position;for(let n=0,o=s.count/3;n<o;n++)for(let l=0;l<3;l++){let h=3*n+l,u=3*n+(l+1)%3;r.fromBufferAttribute(s,h),a.fromBufferAttribute(s,u),Ld(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ld(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}var Nd=Object.freeze({__proto__:null,BoxGeometry:Is,CapsuleGeometry:rd,CircleGeometry:ad,ConeGeometry:mh,CylinderGeometry:fh,DodecahedronGeometry:sd,EdgesGeometry:nd,ExtrudeGeometry:Md,IcosahedronGeometry:bd,LatheGeometry:Td,OctahedronGeometry:Ch,PlaneGeometry:Go,PolyhedronGeometry:Ra,RingGeometry:wd,ShapeGeometry:Ed,SphereGeometry:Rh,TetrahedronGeometry:Ad,TorusGeometry:Cd,TorusKnotGeometry:Rd,TubeGeometry:Id,WireframeGeometry:Pd}),Ud=class extends It{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Pa(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Dd(a))a.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Dd(a[0])){let s=[];for(let n=0,o=a.length;n<o;n++)s[n]=a[n].clone();t[i][r]=s}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Kt(e){let t={};for(let i=0;i<e.length;i++){let r=Pa(e[i]);for(let a in r)t[a]=r[a]}return t}function Dd(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function O0(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Od(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ke.workingColorSpace}var Fd={clone:Pa,merge:Kt},F0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends It{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F0,this.fragmentShader=B0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new fe().setHex(r.value);break;case"v2":this.uniforms[i].value=new te().fromArray(r.value);break;case"v3":this.uniforms[i].value=new R().fromArray(r.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ve().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ih=class extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zs=class extends It{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mi=class extends zs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Bd=class extends It{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=es,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zd=class extends It{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gd=class extends It{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Vd=class extends It{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=es,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ph=class extends It{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lh=class extends It{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},kd=class extends It{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hd=class extends Ht{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ai(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Gs(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Wd(e){function t(a,s){return e[a]-e[s]}let i=e.length,r=new Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(t),r}function Nh(e,t,i){let r=e.length,a=new e.constructor(r);for(let s=0,n=0;n!==r;++s){let o=i[s]*t;for(let l=0;l!==t;++l)a[n++]=e[o+l]}return a}function Xd(e,t,i,r){let a=1,s=e[0];for(;s!==void 0&&s[r]===void 0;)s=e[a++];if(s===void 0)return;let n=s[r];if(n!==void 0)if(Array.isArray(n))do n=s[r],n!==void 0&&(t.push(s.time),i.push(...n)),s=e[a++];while(s!==void 0);else if(n.toArray!==void 0)do n=s[r],n!==void 0&&(t.push(s.time),n.toArray(i,i.length)),s=e[a++];while(s!==void 0);else do n=s[r],n!==void 0&&(t.push(s.time),i.push(n)),s=e[a++];while(s!==void 0)}function z0(e,t,i,r,a=30){let s=e.clone();s.name=t;let n=[];for(let l=0;l<s.tracks.length;++l){let h=s.tracks[l],u=h.getValueSize(),d=[],c=[];for(let p=0;p<h.times.length;++p){let g=h.times[p]*a;if(!(g<i||g>=r)){d.push(h.times[p]);for(let _=0;_<u;++_)c.push(h.values[p*u+_])}}d.length!==0&&(h.times=Ai(d,h.times.constructor),h.values=Ai(c,h.values.constructor),n.push(h))}s.tracks=n;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function G0(e,t=0,i=e,r=30){r<=0&&(r=30);let a=i.tracks.length,s=t/r;for(let n=0;n<a;++n){let o=i.tracks[n],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let h=e.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===l});if(h===void 0)continue;let u=0,d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let c=0,p=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=p/3);let g=o.times.length-1,_;if(s<=o.times[0]){let f=u,y=d-u;_=o.values.slice(f,y)}else if(s>=o.times[g]){let f=g*d+u,y=f+d-u;_=o.values.slice(f,y)}else{let f=o.createInterpolant(),y=u,M=d-u;f.evaluate(s),_=f.resultBuffer.slice(y,M)}l==="quaternion"&&new Bt().fromArray(_).normalize().conjugate().toArray(_);let m=h.times.length;for(let f=0;f<m;++f){let y=f*p+c;if(l==="quaternion")Bt.multiplyQuaternionsFlat(h.values,y,_,0,h.values,y);else{let M=p-c*2;for(let v=0;v<M;++v)h.values[y+v]-=_[v]}}}return e.blendMode=Cl,e}var V0=class{static convertArray(e,t){return Ai(e,t)}static isTypedArray(e){return oc(e)}static hasTangents(e){return Gs(e)}static getKeyframeOrder(e){return Wd(e)}static sortedArray(e,t,i){return Nh(e,t,i)}static flattenJSON(e,t,i,r){Xd(e,t,i,r)}static subclip(e,t,i,r,a=30){return z0(e,t,i,r,a)}static makeClipAdditive(e,t=0,i=e,r=30){return G0(e,t,i,r)}},Br=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];e:{t:{let s;i:{r:if(!(e<r)){for(let n=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(a=r,r=t[++i],e<r)break t}s=t.length;break i}if(!(e>=a)){let n=t[1];e<n&&(i=2,a=n);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break t}s=i,i=0;break i}break e}for(;i<s;){let n=i+s>>>1;e<t[n]?s=n:i=n+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jd=class extends Br{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Er,endingEnd:Er}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,n=r[a],o=r[s];if(n===void 0)switch(this.getSettings_().endingStart){case Ar:a=e,n=2*t-i;break;case us:a=r.length-2,n=t+r[a]-r[a+1];break;default:a=e,n=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Ar:s=e,o=2*i-t;break;case us:s=1,o=i+r[1]-r[0];break;default:s=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-n),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,c=this._weightNext,p=(i-t)/(r-t),g=p*p,_=g*p,m=-d*_+2*d*g-d*p,f=(1+d)*_+(-1.5-2*d)*g+(-.5+d)*p+1,y=(-1-c)*_+(1.5+c)*g+.5*p,M=c*_-c*g;for(let v=0;v!==n;++v)a[v]=m*s[h+v]+f*s[l+v]+y*s[o+v]+M*s[u+v];return a}},Uh=class extends Br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==n;++d)a[d]=s[l+d]*u+s[o+d]*h;return a}},qd=class extends Br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Yd=class extends Br{interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(r-t),g=1-p;for(let _=0;_!==n;++_)a[_]=s[l+_]*g+s[o+_]*p;return a}let d=n*2,c=e-1;for(let p=0;p!==n;++p){let g=s[l+p],_=s[o+p],m=c*d+p*2,f=u[m],y=u[m+1],M=e*d+p*2,v=h[M],b=h[M+1],E=H0(i,t,f,v,r);a[p]=Zd(E,g,y,b,_)}return a}};function Zd(e,t,i,r,a){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*r+e*e*e*a}function k0(e,t,i,r,a){let s=1-e;return 3*s*s*(i-t)+6*s*e*(r-i)+3*e*e*(a-r)}function H0(e,t,i,r,a){let s=(e-t)/(a-t);for(let n=0;n<8;n++){let o=Zd(s,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=k0(s,t,i,r,a);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var gi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ai(t,this.TimeBufferType),this.values=Ai(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ai(e.times,Array),values:Ai(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Gs(e.settings)&&(i.settings={inTangents:Ai(e.settings.inTangents,Array),outTangents:Ai(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case oa:t=this.InterpolantFactoryMethodLinear;break;case Vn:t=this.InterpolantFactoryMethodSmooth;break;case Al:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return pe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return Vn;case this.InterpolantFactoryMethodBezier:return Al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Gs(this.settings)&&(Jd(this.settings.inTangents,e),Jd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let n=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*n,s*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let n=0;n!==a;n++){let o=i[n];if(typeof o=="number"&&isNaN(o)){Pe("KeyframeTrack: Time is not a valid number.",this,n,o),e=!1;break}if(s!==null&&s>o){Pe("KeyframeTrack: Out of order keys.",this,n,o,s),e=!1;break}s=o}if(r!==void 0&&oc(r))for(let n=0,o=r.length;n!==o;++n){let l=r[n];if(isNaN(l)){Pe("KeyframeTrack: Value is not a valid number.",this,n,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Vn,a=e.length-1,s=1;for(let n=1;n<a;++n){let o=!1,l=e[n],h=e[n+1];if(l!==h&&(n!==1||l!==e[0]))if(r)o=!0;else{let u=n*i,d=u-i,c=u+i;for(let p=0;p!==i;++p){let g=t[u+p];if(g!==t[d+p]||g!==t[c+p]){o=!0;break}}}if(o){if(n!==s){e[s]=e[n];let u=n*i,d=s*i;for(let c=0;c!==i;++c)t[d+c]=t[u+c]}++s}}if(a>0){e[s]=e[a];for(let n=a*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[n+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Gs(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Jd(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}gi.prototype.ValueTypeName="",gi.prototype.TimeBufferType=Float32Array,gi.prototype.ValueBufferType=Float32Array,gi.prototype.DefaultInterpolation=oa;var zr=class extends gi{constructor(e,t,i){super(e,t,i)}};zr.prototype.ValueTypeName="bool",zr.prototype.ValueBufferType=Array,zr.prototype.DefaultInterpolation=na,zr.prototype.InterpolantFactoryMethodLinear=void 0,zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Dh=class extends gi{constructor(e,t,i,r){super(e,t,i,r)}};Dh.prototype.ValueTypeName="color";var La=class extends gi{constructor(e,t,i,r){super(e,t,i,r)}};La.prototype.ValueTypeName="number";var Kd=class extends Br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=(i-t)/(r-t),l=e*n;for(let h=l+n;l!==h;l+=4)Bt.slerpFlat(a,0,s,l-n,s,l,o);return a}},Na=class extends gi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Kd(this.times,this.values,this.getValueSize(),e)}};Na.prototype.ValueTypeName="quaternion",Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends gi{constructor(e,t,i){super(e,t,i)}};Gr.prototype.ValueTypeName="string",Gr.prototype.ValueBufferType=Array,Gr.prototype.DefaultInterpolation=na,Gr.prototype.InterpolantFactoryMethodLinear=void 0,Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vs=class extends gi{constructor(e,t,i,r){super(e,t,i,r)}};Vs.prototype.ValueTypeName="vector";var Ua=class{constructor(e="",t=-1,i=[],r=kn){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,n=i.length;s!==n;++s)t.push(X0(i[s]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,s=i.length;a!==s;++a)t.push(gi.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,s=[];for(let n=0;n<a;n++){let o=[],l=[];o.push((n+a-1)%a,n,(n+1)%a),l.push(0,1,0);let h=Wd(o);o=Nh(o,1,h),l=Nh(l,1,h),!r&&o[0]===0&&(o.push(a),l.push(l[0])),s.push(new La(".morphTargetInfluences["+t[n].name+"]",o,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let n=0,o=e.length;n<o;n++){let l=e[n],h=l.name.match(a);if(h&&h.length>1){let u=h[1],d=r[u];d||(r[u]=d=[]),d.push(l)}}let s=[];for(let n in r)s.push(this.CreateFromMorphTargetSequence(n,r[n],t,i));return s}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function W0(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return La;case"vector":case"vector2":case"vector3":case"vector4":return Vs;case"color":return Dh;case"quaternion":return Na;case"bool":case"boolean":return zr;case"string":return Gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function X0(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=W0(e.type);if(e.times===void 0){let r=[],a=[];Xd(e.keys,r,a,"value"),e.times=r,e.values=a}let i;return t.parse!==void 0?i=t.parse(e):i=new t(e.name,e.times,e.values,e.interpolation),Gs(e.settings)&&(i.settings={inTangents:Ai(e.settings.inTangents,Float32Array),outTangents:Ai(e.settings.outTangents,Float32Array)}),i}var Di={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&($d(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!$d(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function $d(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Oh=class{constructor(e,t,i){let r=this,a=!1,s=0,n=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){n++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,n),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,n),s===n&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let c=l[u],p=l[u+1];if(c.global&&(c.lastIndex=0),c.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qd=new Oh,$t=class{constructor(e){this.manager=e!==void 0?e:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$t.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr={},j0=class extends Error{constructor(e,t){super(e),this.response=t}},Ci=class extends $t{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Di.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(rr[e]!==void 0){rr[e].push({onLoad:t,onProgress:i,onError:r});return}rr[e]=[],rr[e].push({onLoad:t,onProgress:i,onError:r});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),n=this.mimeType,o=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=rr[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),c=d?parseInt(d):0,p=c!==0,g=0,_=new ReadableStream({start(m){f();function f(){u.read().then(({done:y,value:M})=>{if(y)m.close();else{g+=M.byteLength;let v=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:c});for(let b=0,E=h.length;b<E;b++){let C=h[b];C.onProgress&&C.onProgress(v)}m.enqueue(M),f()}},y=>{m.error(y)})}}});return new Response(_)}else throw new j0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,n));case"json":return l.json();default:if(n==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(n),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(c=>d.decode(c))}}}).then(l=>{Di.add(`file:${e}`,l);let h=rr[e];delete rr[e];for(let u=0,d=h.length;u<d;u++){let c=h[u];c.onLoad&&c.onLoad(l)}}).catch(l=>{let h=rr[e];if(h===void 0)throw this.manager.itemError(e),l;delete rr[e];for(let u=0,d=h.length;u<d;u++){let c=h[u];c.onError&&c.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},q0=class extends $t{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new Ci(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{t(a.parse(JSON.parse(n)))}catch(o){r?r(o):Pe(o),a.manager.itemError(e)}},i,r)}parse(e){let t=[];for(let i=0;i<e.length;i++){let r=Ua.parse(e[i]);t.push(r)}return t}},Y0=class extends $t{constructor(e){super(e)}load(e,t,i,r){let a=this,s=[],n=new Lo,o=new Ci(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(a.withCredentials);let l=0;function h(u){o.load(e[u],function(d){let c=a.parse(d,!0);s[u]={width:c.width,height:c.height,format:c.format,mipmaps:c.mipmaps},l+=1,l===6&&(c.mipmapCount===1&&(n.minFilter=pt),n.image=s,n.format=c.format,n.needsUpdate=!0,t&&t(n))},i,r)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else o.load(e,function(u){let d=a.parse(u,!0);if(d.isCubemap){let c=d.mipmaps.length/d.mipmapCount;for(let p=0;p<c;p++){s[p]={mipmaps:[]};for(let g=0;g<d.mipmapCount;g++)s[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+g]),s[p].format=d.format,s[p].width=d.width,s[p].height=d.height}n.image=s}else n.image.width=d.width,n.image.height=d.height,n.mipmaps=d.mipmaps;d.mipmapCount===1&&(n.minFilter=pt),n.format=d.format,n.needsUpdate=!0,t&&t(n)},i,r);return n}},Da=new WeakMap,ks=class extends $t{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=Di.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);else{let u=Da.get(s);u===void 0&&(u=[],Da.set(s,u)),u.push({onLoad:t,onError:r})}return s}let n=ds("img");function o(){h(),t&&t(this);let u=Da.get(this)||[];for(let d=0;d<u.length;d++){let c=u[d];c.onLoad&&c.onLoad(this)}Da.delete(this),a.manager.itemEnd(e)}function l(u){h(),r&&r(u),Di.remove(`image:${e}`);let d=Da.get(this)||[];for(let c=0;c<d.length;c++){let p=d[c];p.onError&&p.onError(u)}Da.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){n.removeEventListener("load",o,!1),n.removeEventListener("error",l,!1)}return n.addEventListener("load",o,!1),n.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(n.crossOrigin=this.crossOrigin),Di.add(`image:${e}`,n),a.manager.itemStart(e),n.src=e,n}},Z0=class extends $t{constructor(e){super(e)}load(e,t,i,r){let a=new Rs;a.colorSpace=Lt;let s=new ks(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let n=0;function o(l){s.load(e[l],function(h){a.images[l]=h,n++,n===6&&(a.needsUpdate=!0,t&&t(a))},void 0,r)}for(let l=0;l<e.length;++l)o(l);return a}},J0=class extends $t{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new pi,n=new Ci(this.manager);return n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setPath(this.path),n.setWithCredentials(a.withCredentials),n.load(e,function(o){let l;try{l=a.parse(o)}catch(h){r!==void 0?r(h):Pe(h);return}a._applyTexData(s,l),t&&t(s,l)},i,r),s}createDataTexture(e){let t=new pi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:jt,e.wrapT=t.wrapT!==void 0?t.wrapT:jt,e.magFilter=t.magFilter!==void 0?t.magFilter:pt,e.minFilter=t.minFilter!==void 0?t.minFilter:pt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=ui),t.mipmapCount===1&&(e.minFilter=pt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},ep=class extends $t{constructor(e){super(e)}load(e,t,i,r){let a=new Tt,s=new ks(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(n){a.image=n,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},_r=class extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},tp=class extends _r{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fh=new Ve,ip=new R,rp=new R,Vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Fh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Fh,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,s=r?r.z/a.x:1,n=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===Cr||e.reversedDepth?t.set(.5*s,0,0,.5*s+o,0,.5*n,0,.5*n+l,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+o,0,.5*n,0,.5*n+l,0,0,.5,.5,0,0,0,1),t.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ko=new R,Ho=new Bt,Oi=new R,Wo=class extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ko,Ho,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ho,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ko,Ho,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ho,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vr=new R,ap=new te,sp=new te,Ft=class extends Wo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,ap,sp),t.subVectors(sp,ap)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let o=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/o,t-=s.offsetY*i/l,r*=s.width/o,i*=s.height/l}let n=this.filmOffset;n!==0&&(a+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},K0=class extends Vo{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ha*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Bh=class extends _r{constructor(e,t,i=0,r=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=i,this.angle=r,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new K0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},$0=class extends Vo{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}},zh=class extends _r{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Oa=class extends Wo{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,n=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,n-=h*this.view.offsetY,o=n-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,n,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Q0=class extends Vo{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gh=class extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new Q0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},np=class extends _r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},op=class extends _r{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Vh=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,r=e.y,a=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*r),t.addScaledVector(s[2],.488603*a),t.addScaledVector(s[3],.488603*i),t.addScaledVector(s[4],1.092548*(i*r)),t.addScaledVector(s[5],1.092548*(r*a)),t.addScaledVector(s[6],.315392*(3*a*a-1)),t.addScaledVector(s[7],1.092548*(i*a)),t.addScaledVector(s[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){let i=e.x,r=e.y,a=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*r),t.addScaledVector(s[2],2*.511664*a),t.addScaledVector(s[3],2*.511664*i),t.addScaledVector(s[4],2*.429043*i*r),t.addScaledVector(s[5],2*.429043*r*a),t.addScaledVector(s[6],.743125*a*a-.247708),t.addScaledVector(s[7],2*.429043*i*a),t.addScaledVector(s[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let i=e.x,r=e.y,a=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*a,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*a,t[6]=.315392*(3*a*a-1),t[7]=1.092548*i*a,t[8]=.546274*(i*i-r*r)}},lp=class extends _r{constructor(e=new Vh,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},hp={},up=class Zf extends $t{constructor(t){super(t),this.textures={}}load(t,i,r,a){let s=this,n=new Ci(s.manager);n.setPath(s.path),n.setRequestHeader(s.requestHeader),n.setWithCredentials(s.withCredentials),n.load(t,function(o){try{i(s.parse(JSON.parse(o)))}catch(l){a?a(l):Pe(l),s.manager.itemError(t)}},r,a)}parse(t){let i=this.createMaterialFromType(t.type);return i.fromJSON(t,this.textures),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Zf.createMaterialFromType(t)}static createMaterialFromType(t){let i={ShadowMaterial:Ud,SpriteMaterial:$l,RawShaderMaterial:Ih,ShaderMaterial:fi,PointsMaterial:Ro,MeshPhysicalMaterial:mi,MeshStandardMaterial:zs,MeshPhongMaterial:Bd,MeshToonMaterial:zd,MeshNormalMaterial:Gd,MeshLambertMaterial:Vd,MeshDepthMaterial:Ph,MeshDistanceMaterial:Lh,MeshBasicMaterial:li,MeshMatcapMaterial:kd,LineDashedMaterial:Hd,LineBasicMaterial:Ht,Material:It,...hp}[t],r;return i===void 0?(Hi(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),r=new It):r=new i,r}static registerMaterial(t,i){hp[t]=i}},xr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},cp=class extends Xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},dp=class extends $t{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new Ci(a.manager);s.setPath(a.path),s.setRequestHeader(a.requestHeader),s.setWithCredentials(a.withCredentials),s.load(e,function(n){try{t(a.parse(JSON.parse(n)))}catch(o){r?r(o):Pe(o),a.manager.itemError(e)}},i,r)}parse(e){let t={},i={};function r(d,c){if(t[c]!==void 0)return t[c];let p=d.interleavedBuffers[c],g=a(d,p.buffer),_=la(p.type,g),m=new ys(_,p.stride);return m.uuid=p.uuid,p.usage!==void 0&&m.setUsage(p.usage),t[c]=m,m}function a(d,c){if(i[c]!==void 0)return i[c];let p=d.arrayBuffers[c],g=new Uint32Array(p).buffer;return i[c]=g,g}let s=e.isInstancedBufferGeometry?new cp:new Xe,n=e.data.index;if(n!==void 0){let d=la(n.type,n.array);s.setIndex(new lt(d,1))}let o=e.data.attributes;for(let d in o){let c=o[d],p;if(c.isInterleavedBufferAttribute){let g=r(e.data,c.data);p=new Sa(g,c.itemSize,c.offset,c.normalized)}else{let g=la(c.type,c.array),_=c.isInstancedBufferAttribute?gr:lt;p=new _(g,c.itemSize,c.normalized)}c.name!==void 0&&(p.name=c.name),c.usage!==void 0&&p.setUsage(c.usage),c.gpuType!==void 0&&(p.gpuType=c.gpuType),s.setAttribute(d,p)}let l=e.data.morphAttributes;if(l)for(let d in l){let c=l[d],p=[];for(let g=0,_=c.length;g<_;g++){let m=c[g],f;if(m.isInterleavedBufferAttribute){let y=r(e.data,m.data);f=new Sa(y,m.itemSize,m.offset,m.normalized)}else{let y=la(m.type,m.array);f=new lt(y,m.itemSize,m.normalized)}m.name!==void 0&&(f.name=m.name),m.usage!==void 0&&f.setUsage(m.usage),m.gpuType!==void 0&&(f.gpuType=m.gpuType),p.push(f)}s.morphAttributes[d]=p}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);let h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,c=h.length;d!==c;++d){let p=h[d];s.addGroup(p.start,p.count,p.materialIndex)}let u=e.data.boundingSphere;return u!==void 0&&(s.boundingSphere=new Dt().fromJSON(u)),e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}},kh={},e_=class extends $t{constructor(e){super(e)}load(e,t,i,r){let a=this,s=this.path===""?xr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;let n=new Ci(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,function(o){let l=null;try{l=JSON.parse(o)}catch(u){r!==void 0&&r(u),Pe("ObjectLoader: Can't parse "+e+".",u.message);return}let h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),Pe("ObjectLoader: Can't load "+e);return}a.parse(l,t)},i,r)}async loadAsync(e,t){let i=this,r=this.path===""?xr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;let a=new Ci(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials);let s=await a.loadAsync(e,t),n;try{n=JSON.parse(s)}catch(l){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+l.message)}let o=n.metadata;if(o===void 0||o.type===void 0||o.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(n)}parse(e,t){let i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),a=this.parseGeometries(e.geometries,r),s=this.parseImages(e.images,function(){t!==void 0&&t(l)}),n=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,n),l=this.parseObject(e.object,a,o,n,i),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),t!==void 0){let u=!1;for(let d in s)if(s[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){let t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,a),n=this.parseMaterials(e.materials,s),o=this.parseObject(e.object,r,n,s,t),l=this.parseSkeletons(e.skeletons,o);return this.bindSkeletons(o,l),this.bindLightTargets(o),o}static registerGeometry(e,t){kh[e]=t}parseShapes(e){let t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){let a=new Us().fromJSON(e[i]);t[a.uuid]=a}return t}parseSkeletons(e,t){let i={},r={};if(t.traverse(function(a){a.isBone&&(r[a.uuid]=a)}),e!==void 0)for(let a=0,s=e.length;a<s;a++){let n=new sh().fromJSON(e[a],r);i[n.uuid]=n}return i}parseGeometries(e,t){let i={};if(e!==void 0){let r=new dp;for(let a=0,s=e.length;a<s;a++){let n,o=e[a];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":n=r.parse(o);break;default:o.type in Nd?n=Nd[o.type].fromJSON(o,t):o.type in kh?n=kh[o.type].fromJSON(o,t):pe(`ObjectLoader: Unknown geometry type "${o.type}". Use .registerGeometry() before starting the deserialization process.`)}n.uuid=o.uuid,o.name!==void 0&&(n.name=o.name),o.userData!==void 0&&(n.userData=o.userData),i[o.uuid]=n}}return i}parseMaterials(e,t){let i={},r={};if(e!==void 0){let a=new up;a.setTextures(t);for(let s=0,n=e.length;s<n;s++){let o=e[s];i[o.uuid]===void 0&&(i[o.uuid]=a.parse(o)),r[o.uuid]=i[o.uuid]}}return r}parseAnimations(e){let t={};if(e!==void 0)for(let i=0;i<e.length;i++){let r=e[i],a=Ua.parse(r);t[a.uuid]=a}return t}parseImages(e,t){let i=this,r={},a;function s(o){return o=i.manager.resolveURL(o),i.manager.itemStart(o),a.load(o,function(){i.manager.itemEnd(o)},void 0,function(){i.manager.itemError(o),i.manager.itemEnd(o)})}function n(o){if(typeof o=="string"){let l=o,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l;return s(h)}else return o.data?{data:la(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){let o=new Oh(t);a=new ks(o),a.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){let u=e[l],d=u.url;if(Array.isArray(d)){let c=[];for(let p=0,g=d.length;p<g;p++){let _=d[p],m=n(_);m!==null&&(m instanceof HTMLImageElement?c.push(m):c.push(new pi(m.data,m.width,m.height)))}r[u.uuid]=new Xi(c)}else{let c=n(u.url);r[u.uuid]=new Xi(c)}}}return r}async parseImagesAsync(e){let t=this,i={},r;async function a(s){if(typeof s=="string"){let n=s,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(n)?n:t.resourcePath+n;return await r.loadAsync(o)}else return s.data?{data:la(s.type,s.data),width:s.width,height:s.height}:null}if(e!==void 0&&e.length>0){r=new ks(this.manager),r.setCrossOrigin(this.crossOrigin);for(let s=0,n=e.length;s<n;s++){let o=e[s],l=o.url;if(Array.isArray(l)){let h=[];for(let u=0,d=l.length;u<d;u++){let c=l[u],p=await a(c);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new pi(p.data,p.width,p.height)))}i[o.uuid]=new Xi(h)}else{let h=await a(o.url);i[o.uuid]=new Xi(h)}}}return i}parseTextures(e,t){function i(a,s){return typeof a=="number"?a:(pe("ObjectLoader.parseTexture: Constant should be in numeric form.",a),s[a])}let r={};if(e!==void 0)for(let a=0,s=e.length;a<s;a++){let n=e[a];n.image===void 0&&pe('ObjectLoader: No "image" specified for',n.uuid),t[n.image]===void 0&&pe("ObjectLoader: Undefined image",n.image);let o=t[n.image],l=o.data,h;Array.isArray(l)?(h=new Rs,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new pi:h=new Tt,l&&(h.needsUpdate=!0)),h.source=o,h.uuid=n.uuid,n.name!==void 0&&(h.name=n.name),n.mapping!==void 0&&(h.mapping=i(n.mapping,t_)),n.channel!==void 0&&(h.channel=n.channel),n.offset!==void 0&&h.offset.fromArray(n.offset),n.repeat!==void 0&&h.repeat.fromArray(n.repeat),n.center!==void 0&&h.center.fromArray(n.center),n.rotation!==void 0&&(h.rotation=n.rotation),n.wrap!==void 0&&(h.wrapS=i(n.wrap[0],pp),h.wrapT=i(n.wrap[1],pp)),n.format!==void 0&&(h.format=n.format),n.internalFormat!==void 0&&(h.internalFormat=n.internalFormat),n.type!==void 0&&(h.type=n.type),n.colorSpace!==void 0&&(h.colorSpace=n.colorSpace),n.minFilter!==void 0&&(h.minFilter=i(n.minFilter,fp)),n.magFilter!==void 0&&(h.magFilter=i(n.magFilter,fp)),n.anisotropy!==void 0&&(h.anisotropy=n.anisotropy),n.flipY!==void 0&&(h.flipY=n.flipY),n.generateMipmaps!==void 0&&(h.generateMipmaps=n.generateMipmaps),n.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=n.premultiplyAlpha),n.unpackAlignment!==void 0&&(h.unpackAlignment=n.unpackAlignment),n.compareFunction!==void 0&&(h.compareFunction=n.compareFunction),n.normalized!==void 0&&(h.normalized=n.normalized),n.userData!==void 0&&(h.userData=n.userData),r[n.uuid]=h}return r}parseObject(e,t,i,r,a){let s;function n(d){return t[d]===void 0&&pe("ObjectLoader: Undefined geometry",d),t[d]}function o(d){if(d!==void 0){if(Array.isArray(d)){let c=[];for(let p=0,g=d.length;p<g;p++){let _=d[p];i[_]===void 0&&pe("ObjectLoader: Undefined material",_),c.push(i[_])}return c}return i[d]===void 0&&pe("ObjectLoader: Undefined material",d),i[d]}}function l(d){return r[d]===void 0&&pe("ObjectLoader: Undefined texture",d),r[d]}let h,u;switch(e.type){case"Scene":s=new Ac,e.background!==void 0&&(Number.isInteger(e.background)?s.background=new fe(e.background):s.background=l(e.background)),e.environment!==void 0&&(s.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Ec(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new wc(e.fog.color,e.fog.density)),e.fog.name!==""&&(s.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(s.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&s.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(s.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&s.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":s=new Ft(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new Oa(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new np(e.color,e.intensity);break;case"DirectionalLight":s=new Gh(e.color,e.intensity),s.target=e.target||"";break;case"PointLight":s=new zh(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new op(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new Bh(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),s.target=e.target||"";break;case"HemisphereLight":s=new tp(e.color,e.groundColor,e.intensity);break;case"LightProbe":let d=new Vh().fromArray(e.sh);s=new lp(d,e.intensity);break;case"SkinnedMesh":h=n(e.geometry),u=o(e.material),s=new ah(h,u),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":h=n(e.geometry),u=o(e.material),s=new wt(h,u);break;case"InstancedMesh":h=n(e.geometry),u=o(e.material);let c=e.count,p=e.instanceMatrix,g=e.instanceColor;s=new nh(h,u,c),s.instanceMatrix=new gr(new Float32Array(p.array),16),g!==void 0&&(s.instanceColor=new gr(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":h=n(e.geometry),u=o(e.material),s=new Yc(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),s.geometry=h,s.perObjectFrustumCulled=e.perObjectFrustumCulled,s.sortObjects=e.sortObjects,s._drawRanges=e.drawRanges,s._reservedRanges=e.reservedRanges,s._geometryInfo=e.geometryInfo.map(_=>{let m=null,f=null;return _.boundingBox!==void 0&&(m=new zt().fromJSON(_.boundingBox)),_.boundingSphere!==void 0&&(f=new Dt().fromJSON(_.boundingSphere)),{..._,boundingBox:m,boundingSphere:f}}),s._instanceInfo=e.instanceInfo,s._availableInstanceIds=e._availableInstanceIds,s._availableGeometryIds=e._availableGeometryIds,s._nextIndexStart=e.nextIndexStart,s._nextVertexStart=e.nextVertexStart,s._geometryCount=e.geometryCount,s._maxInstanceCount=e.maxInstanceCount,s._maxVertexCount=e.maxVertexCount,s._maxIndexCount=e.maxIndexCount,s._geometryInitialized=e.geometryInitialized,s._matricesTexture=l(e.matricesTexture.uuid),s._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(s._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(s.boundingSphere=new Dt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(s.boundingBox=new zt().fromJSON(e.boundingBox));break;case"LOD":s=new Uc;break;case"Line":s=new tr(n(e.geometry),o(e.material));break;case"LineLoop":s=new uh(n(e.geometry),o(e.material));break;case"LineSegments":s=new wi(n(e.geometry),o(e.material));break;case"PointCloud":case"Points":s=new dh(n(e.geometry),o(e.material));break;case"Sprite":s=new Lc(o(e.material));break;case"Group":s=new Yi;break;case"Bone":s=new yo;break;default:s=new at}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.up!==void 0&&s.up.fromArray(e.up),e.pivot!==void 0&&(s.pivot=new R().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(s.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(s.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(s.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(s.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.static!==void 0&&(s.static=e.static),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){let d=e.children;for(let c=0;c<d.length;c++)s.add(this.parseObject(d[c],t,i,r,a))}if(e.animations!==void 0){let d=e.animations;for(let c=0;c<d.length;c++){let p=d[c];s.animations.push(a[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);let d=e.levels;for(let c=0;c<d.length;c++){let p=d[c],g=s.getObjectByProperty("uuid",p.object);g!==void 0&&s.addLevel(g,p.distance,p.hysteresis)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){let r=t[i.skeleton];r===void 0?pe("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let i=t.target,r=e.getObjectByProperty("uuid",i);r!==void 0?t.target=r:t.target=new at}})}},t_={UVMapping:rn,CubeReflectionMapping:Ni,CubeRefractionMapping:nr,EquirectangularReflectionMapping:ts,EquirectangularRefractionMapping:is,CubeUVReflectionMapping:ta},pp={RepeatWrapping:or,ClampToEdgeWrapping:jt,MirroredRepeatWrapping:ia},fp={NearestFilter:xt,NearestMipmapNearestFilter:an,NearestMipmapLinearFilter:wr,LinearFilter:pt,LinearMipmapNearestFilter:ra,LinearMipmapLinearFilter:ui},Hh=new WeakMap,mp=class extends $t{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=Di.get(`image-bitmap:${e}`);if(s!==void 0){if(a.manager.itemStart(e),s.then){s.then(l=>{Hh.has(s)===!0?(r&&r(Hh.get(s)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(l),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);return}let n={};n.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",n.headers=this.requestHeader,n.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(e,n).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},a.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(`image-bitmap:${e}`,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Hh.set(o,l),Di.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Di.add(`image-bitmap:${e}`,o),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Xo,Wh=class{static getContext(){return Xo===void 0&&(Xo=new(window.AudioContext||window.webkitAudioContext)),Xo}static setContext(e){Xo=e}},i_=class extends $t{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new Ci(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{let l=o.slice(0),h=Wh.getContext(),u=e+"#decode";a.manager.itemStart(u),h.decodeAudioData(l,function(d){t(d),a.manager.itemEnd(u)}).catch(function(d){n(d),a.manager.itemEnd(u)})}catch(l){n(l)}},i,r);function n(o){r?r(o):Pe(o),a.manager.itemError(e)}}},gp=new Ve,_p=new Ve,Vr=new Ve,r_=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ft,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ft,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Vr.copy(e.projectionMatrix);let i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(Rr*t.fov*.5)/t.zoom,s,n;_p.elements[12]=-i,gp.elements[12]=i,s=-a*t.aspect+r,n=a*t.aspect+r,Vr.elements[0]=2*t.near/(n-s),Vr.elements[8]=(n+s)/(n-s),this.cameraL.projectionMatrix.copy(Vr),s=-a*t.aspect-r,n=a*t.aspect-r,Vr.elements[0]=2*t.near/(n-s),Vr.elements[8]=(n+s)/(n-s),this.cameraR.projectionMatrix.copy(Vr)}this.cameraL.matrix.copy(e.matrixWorld).multiply(_p),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(gp),this.cameraR.matrixWorldNeedsUpdate=!0}},Fa=-90,Ba=1,vp=class extends at{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ft(Fa,Ba,e,t);r.layers=this.layers,this.add(r);let a=new Ft(Fa,Ba,e,t);a.layers=this.layers,this.add(a);let s=new Ft(Fa,Ba,e,t);s.layers=this.layers,this.add(s);let n=new Ft(Fa,Ba,e,t);n.layers=this.layers,this.add(n);let o=new Ft(Fa,Ba,e,t);o.layers=this.layers,this.add(o);let l=new Ft(Fa,Ba,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,n,o]=t;for(let l of t)this.remove(l);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,n,o,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,c),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},xp=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},yp=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=a_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function a_(){this._document.hidden===!1&&this.reset()}var kr=new R,Xh=new Bt,s_=new R,Hr=new R,Wr=new R,n_=class extends at{constructor(){super(),this.type="AudioListener",this.context=Wh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new yp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(kr,Xh,s_),Hr.set(0,0,-1).applyQuaternion(Xh),Wr.set(0,1,0).applyQuaternion(Xh),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(kr.x,i),t.positionY.linearRampToValueAtTime(kr.y,i),t.positionZ.linearRampToValueAtTime(kr.z,i),t.forwardX.linearRampToValueAtTime(Hr.x,i),t.forwardY.linearRampToValueAtTime(Hr.y,i),t.forwardZ.linearRampToValueAtTime(Hr.z,i),t.upX.linearRampToValueAtTime(Wr.x,i),t.upY.linearRampToValueAtTime(Wr.y,i),t.upZ.linearRampToValueAtTime(Wr.z,i)}else t.setPosition(kr.x,kr.y,kr.z),t.setOrientation(Hr.x,Hr.y,Hr.z,Wr.x,Wr.y,Wr.z)}},Sp=class extends at{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){pe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){pe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){pe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){pe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){pe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(pe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){pe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(pe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},Xr=new R,Mp=new Bt,o_=new R,jr=new R,l_=class extends Sp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Xr,Mp,o_),jr.set(0,0,1).applyQuaternion(Mp);let t=this.panner;if(t.positionX){let i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Xr.x,i),t.positionY.linearRampToValueAtTime(Xr.y,i),t.positionZ.linearRampToValueAtTime(Xr.z,i),t.orientationX.linearRampToValueAtTime(jr.x,i),t.orientationY.linearRampToValueAtTime(jr.y,i),t.orientationZ.linearRampToValueAtTime(jr.z,i)}else t.setPosition(Xr.x,Xr.y,Xr.z),t.setOrientation(jr.x,jr.y,jr.z)}},h_=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},bp=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,a,s;switch(t){case"quaternion":r=this._slerp,a=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,a=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,a=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=a,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,a=e*r+r,s=this.cumulativeWeight;if(s===0){for(let n=0;n!==r;++n)i[a+n]=i[n];s=t}else{s+=t;let n=t/s;this._mixBufferRegion(i,a,0,n,r)}this.cumulativeWeight=s}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,a=this.cumulativeWeight,s=this.cumulativeWeightAdditive,n=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){let o=t*this._origIndex;this._mixBufferRegion(i,r,o,1-a,t)}s>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let o=t,l=t+t;o!==l;++o)if(i[o]!==i[o+t]){n.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let a=i,s=r;a!==s;++a)t[a]=t[r+a%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,a){if(r>=.5)for(let s=0;s!==a;++s)e[t+s]=e[i+s]}_slerp(e,t,i,r){Bt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,a){let s=this._workIndex*a;Bt.multiplyQuaternionsFlat(e,s,e,t,e,i),Bt.slerpFlat(e,t,e,t,e,s,r)}_lerp(e,t,i,r,a){let s=1-r;for(let n=0;n!==a;++n){let o=t+n;e[o]=e[o]*s+e[i+n]*r}}_lerpAdditive(e,t,i,r,a){for(let s=0;s!==a;++s){let n=t+s;e[n]=e[n]+e[i+s]*r}}},jh="\\[\\]\\.:\\/",u_=new RegExp("["+jh+"]","g"),qh="[^"+jh+"]",c_="[^"+jh.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",qh),p_=/(WCOD+)?/.source.replace("WCOD",c_),f_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),m_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),g_=new RegExp("^"+d_+p_+f_+m_+"$"),__=["material","materials","bones","map"],v_=class{constructor(e,t,i){let r=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ft=class ja{constructor(t,i,r){this.path=i,this.parsedPath=r||ja.parseTrackName(i),this.node=ja.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new ja.Composite(t,i,r):new ja(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(t){let i=g_.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=r.nodeName.substring(a+1);__.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let n=0;n<s.length;n++){let o=s[n];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,s=i.propertyIndex;if(t||(t=ja.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let n=t[a];if(n===void 0){let h=i.nodeName;Pe("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=s}else n.fromArray!==void 0&&n.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(l=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=v_,ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray],ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x_=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=si(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,a=this._bindings,s=a.length,n,o=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],c=d.uuid,p=t[c];if(p===void 0){p=o++,t[c]=p,e.push(d);for(let g=0,_=s;g!==_;++g)a[g].push(new ft(d,i[g],r[g]))}else if(p<l){n=e[p];let g=--l,_=e[g];t[_.uuid]=p,e[p]=_,t[c]=g,e[g]=d;for(let m=0,f=s;m!==f;++m){let y=a[m],M=y[g],v=y[p];y[p]=M,v===void 0&&(v=new ft(d,i[m],r[m])),y[g]=v}}else e[p]!==n&&Pe("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,a=this.nCachedObjects_;for(let s=0,n=arguments.length;s!==n;++s){let o=arguments[s],l=o.uuid,h=t[l];if(h!==void 0&&h>=a){let u=a++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=o;for(let c=0,p=r;c!==p;++c){let g=i[c],_=g[u],m=g[h];g[h]=_,g[u]=m}}}this.nCachedObjects_=a}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,a=this.nCachedObjects_,s=e.length;for(let n=0,o=arguments.length;n!==o;++n){let l=arguments[n],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<a){let d=--a,c=e[d],p=--s,g=e[p];u!==d&&(t[c.uuid]=u),e[u]=c,d!==p&&(t[g.uuid]=d),e[d]=g,e.pop();for(let _=0,m=r;_!==m;++_){let f=i[_],y=f[d],M=f[p];f[u]=y,f[d]=M,f.pop()}}else{let d=--s,c=e[d];u!==d&&(t[c.uuid]=u),e[u]=c,e.pop();for(let p=0,g=r;p!==g;++p){let _=i[p];_[u]=_[d],_.pop()}}}this.nCachedObjects_=a}subscribe_(e,t){let i=this._bindingsIndicesByPath,r=i[e],a=this._bindings;if(r!==void 0)return a[r];let s=this._paths,n=this._parsedPaths,o=this._objects,l=o.length,h=this.nCachedObjects_,u=new Array(l);r=a.length,i[e]=r,s.push(e),n.push(t),a.push(u);for(let d=h,c=o.length;d!==c;++d){let p=o[d];u[d]=new ft(p,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let r=this._paths,a=this._parsedPaths,s=this._bindings,n=s.length-1,o=s[n],l=r[n];t[l]=i,s[i]=o,s.pop(),a[i]=a[n],a.pop(),r[i]=r[n],r.pop()}}},Tp=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let a=t.tracks,s=a.length,n=new Array(s),o={endingStart:Er,endingEnd:Er};for(let l=0;l!==s;++l){let h=a[l].createInterpolant(null);n[l]=h,h.settings=o}this._interpolantSettings=o,this._interpolants=n,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Zu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let r=this._clip.duration,a=e._clip.duration,s=a/r,n=r/a;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,s,t),this.warp(n,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,a=r.time,s=this.timeScale,n=this._timeScaleInterpolant;n===null&&(n=r._lendControlInterpolant(),this._timeScaleInterpolant=n);let o=n.parameterPositions,l=n.sampleValues;return o[0]=a,o[1]=a+i,l[0]=e/s,l[1]=t/s,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let a=this._startTime;if(a!==null){let o=(e-a)*i;o<0||i===0?t=0:(this._startTime=null,t=i*o)}t*=this._updateTimeScale(e);let s=this._updateTime(t),n=this._updateWeight(e);if(n>0){let o=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Cl:for(let h=0,u=o.length;h!==u;++h)o[h].evaluate(s),l[h].accumulateAdditive(n);break;case kn:default:for(let h=0,u=o.length;h!==u;++h)o[h].evaluate(s),l[h].accumulate(r,n)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,a=this._loopCount,s=i===Ju;if(e===0)return a===-1?r:s&&(a&1)===1?t-r:r;if(i===Yu){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,a+=Math.abs(n);let o=this.repetitions-a;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(o===1){let l=e<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=a,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:n})}}else this._loopCount=a,this.time=r;if(s&&(a&1)===1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=Ar,r.endingEnd=Ar):(e?r.endingStart=this.zeroSlopeAtStart?Ar:Er:r.endingStart=us,t?r.endingEnd=this.zeroSlopeAtEnd?Ar:Er:r.endingEnd=us)}_scheduleFading(e,t,i){let r=this._mixer,a=r.time,s=this._weightInterpolant;s===null&&(s=r._lendControlInterpolant(),this._weightInterpolant=s);let n=s.parameterPositions,o=s.sampleValues;return n[0]=a,o[0]=t,n[1]=a+e,o[1]=i,this}},y_=new Float32Array(1),S_=class extends Si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,a=r.length,s=e._propertyBindings,n=e._interpolants,o=i.uuid,l=this._bindingsByRootAndName,h=l[o];h===void 0&&(h={},l[o]=h);for(let u=0;u!==a;++u){let d=r[u],c=d.name,p=h[c];if(p!==void 0)++p.referenceCount,s[u]=p;else{if(p=s[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,c));continue}let g=t&&t._propertyBindings[u].binding.parsedPath;p=new bp(ft.create(i,c,g),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,c),s[u]=p}n[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,a=this._actionsByClip[r];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let a=t[i];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,a=this._actionsByClip,s=a[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=s;else{let n=s.knownActions;e._byClipCacheIndex=n.length,n.push(e)}e._cacheIndex=r.length,r.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let a=e._clip.uuid,s=this._actionsByClip,n=s[a],o=n.knownActions,l=o[o.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,o[h]=l,o.pop(),e._byClipCacheIndex=null;let u=n.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],o.length===0&&delete s[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let a=t[i];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,a=this._bindings,s=r[t];s===void 0&&(s={},r[t]=s),s[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,a=i.path,s=this._bindingsByRootAndName,n=s[r],o=t[t.length-1],l=e._cacheIndex;o._cacheIndex=l,t[l]=o,t.pop(),delete n[a],Object.keys(n).length===0&&delete s[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Uh(new Float32Array(2),new Float32Array(2),1,y_),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,a=t[r];e.__cacheIndex=r,t[r]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){let r=t||this._root,a=r.uuid,s=typeof e=="string"?Ua.findByName(r,e):e,n=s!==null?s.uuid:e,o=this._actionsByClip[n],l=null;if(i===void 0&&(s!==null?i=s.blendMode:i=kn),o!==void 0){let u=o.actionByRoot[a];if(u!==void 0&&u.blendMode===i)return u;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;let h=new Tp(this,s,t,i);return this._bindAction(h,l),this._addInactiveAction(h,n,a),h}existingAction(e,t){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Ua.findByName(i,e):e,s=a?a.uuid:e,n=this._actionsByClip[s];return n!==void 0&&n.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,a=Math.sign(e),s=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(r,e,a,s);let n=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)n[l].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,a=r[i];if(a!==void 0){let s=a.knownActions;for(let n=0,o=s.length;n!==o;++n){let l=s[n];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let s in i){let n=i[s].actionByRoot,o=n[t];o!==void 0&&(this._deactivateAction(o),this._removeInactiveAction(o))}let r=this._bindingsByRootAndName,a=r[t];if(a!==void 0)for(let s in a){let n=a[s];n.restoreOriginalState(),this._removeInactiveBinding(n)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},M_=class extends Ol{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isRenderTarget3D=!0,this.depth=i;for(let a=0;a<this.textures.length;a++){let s=new Zn(null,e,t,i);s.isRenderTargetTexture=!0,s.renderTarget=this,this.textures[a]=s}this._setTextureOptions(r)}},b_=class Jf{constructor(t){this.value=t}clone(){return new Jf(this.value.clone===void 0?this.value:this.value.clone())}},T_=0,w_=class extends Si{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:T_++}),this.name="",this.usage=qn,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let i=0,r=t.length;i<r;i++){let a=Array.isArray(t[i])?t[i]:[t[i]];for(let s=0;s<a.length;s++)this.uniforms.push(a[s].clone())}return this}clone(){return new this.constructor().copy(this)}},E_=class extends ys{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},A_=class{constructor(e,t,i,r,a,s=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=a,this.normalized=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},wp=new Ve,C_=class{constructor(e,t,i=0,r=1/0){this.ray=new Ea(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Kn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wp),this}intersectObject(e,t=!0,i=[]){return Yh(e,this,i,t),i.sort(Ep),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Yh(e[r],this,i,t);return i.sort(Ep),i}};function Ep(e,t){return e.distance-t.distance}function Yh(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let s=e.children;for(let n=0,o=s.length;n<o;n++)Yh(s[n],t,i,!0)}}var R_=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,pe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},I_=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},P_=class{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},L_=(Ka=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let s=this.elements;return s[0]=t,s[2]=i,s[1]=r,s[3]=a,this}},Ka.prototype.isMatrix2=!0,Ka),Ap=new te,Cp=class{constructor(e=new te(1/0,1/0),t=new te(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ap.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ap).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Rp=new R,jo=new R,za=new R,Ga=new R,Zh=new R,N_=new R,U_=new R,D_=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Rp.subVectors(e,this.start),jo.subVectors(this.end,this.start);let i=jo.dot(jo);if(i===0)return 0;let r=jo.dot(Rp)/i;return t&&(r=Ge(r,0,1)),r}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=N_,i=U_){let r=10000000000000001e-32,a,s,n=this.start,o=e.start,l=this.end,h=e.end;za.subVectors(l,n),Ga.subVectors(h,o),Zh.subVectors(n,o);let u=za.dot(za),d=Ga.dot(Ga),c=Ga.dot(Zh);if(u<=r&&d<=r)return t.copy(n),i.copy(o),t.sub(i),t.dot(t);if(u<=r)a=0,s=c/d,s=Ge(s,0,1);else{let p=za.dot(Zh);if(d<=r)s=0,a=Ge(-p/u,0,1);else{let g=za.dot(Ga),_=u*d-g*g;_!==0?a=Ge((g*c-p*d)/_,0,1):a=0,s=(g*a+c)/d,s<0?(s=0,a=Ge(-p/u,0,1)):s>1&&(s=1,a=Ge((g-p)/u,0,1))}}return t.copy(n).addScaledVector(za,a),i.copy(o).addScaledVector(Ga,s),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Ip=new R,O_=class extends at{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let i=new Xe,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,n=1,o=32;s<o;s++,n++){let l=s/o*Math.PI*2,h=n/o*Math.PI*2;r.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new Te(r,3));let a=new Ht({fog:!1,toneMapped:!1});this.cone=new wi(i,a),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Ip.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ip),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},yr=new R,qo=new Ve,Jh=new Ve,F_=class extends wi{constructor(e){let t=Pp(e),i=new Xe,r=[],a=[];for(let l=0;l<t.length;l++){let h=t[l];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),a.push(0,0,0),a.push(0,0,0))}i.setAttribute("position",new Te(r,3)),i.setAttribute("color",new Te(a,3));let s=new Ht({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,s),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let n=new fe(255),o=new fe(65280);this.setColors(n,o)}updateMatrixWorld(e){let t=this.bones,i=this.geometry,r=i.getAttribute("position");Jh.copy(this.root.matrixWorld).invert();for(let a=0,s=0;a<t.length;a++){let n=t[a];n.parent&&n.parent.isBone&&(qo.multiplyMatrices(Jh,n.matrixWorld),yr.setFromMatrixPosition(qo),r.setXYZ(s,yr.x,yr.y,yr.z),qo.multiplyMatrices(Jh,n.parent.matrixWorld),yr.setFromMatrixPosition(qo),r.setXYZ(s+1,yr.x,yr.y,yr.z),s+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Pp(e){let t=[];e.isBone===!0&&t.push(e);for(let i=0;i<e.children.length;i++)t.push(...Pp(e.children[i]));return t}var B_=class extends wt{constructor(e,t,i){let r=new Rh(t,4,2),a=new li({wireframe:!0,fog:!1,toneMapped:!1});super(r,a),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},z_=new R,Lp=new fe,Np=new fe,G_=class extends at{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";let r=new Ch(t);r.rotateY(Math.PI*.5),this.material=new li({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let a=r.getAttribute("position"),s=new Float32Array(a.count*3);r.setAttribute("color",new lt(s,3)),this.add(new wt(r,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");Lp.copy(this.light.color),Np.copy(this.light.groundColor);for(let i=0,r=t.count;i<r;i++){let a=i<r/2?Lp:Np;t.setXYZ(i,a.r,a.g,a.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(z_.setFromMatrixPosition(this.light.matrixWorld).negate())}},V_=class extends wi{constructor(e=10,t=10,i=4473924,r=8947848){i=new fe(i),r=new fe(r);let a=t/2,s=e/t,n=e/2,o=[],l=[];for(let d=0,c=0,p=-n;d<=t;d++,p+=s){o.push(-n,0,p,n,0,p),o.push(p,0,-n,p,0,n);let g=d===a?i:r;g.toArray(l,c),c+=3,g.toArray(l,c),c+=3,g.toArray(l,c),c+=3,g.toArray(l,c),c+=3}let h=new Xe;h.setAttribute("position",new Te(o,3)),h.setAttribute("color",new Te(l,3));let u=new Ht({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},k_=class extends wi{constructor(e=10,t=16,i=8,r=64,a=4473924,s=8947848){a=new fe(a),s=new fe(s);let n=[],o=[];if(t>1)for(let u=0;u<t;u++){let d=u/t*(Math.PI*2),c=Math.sin(d)*e,p=Math.cos(d)*e;n.push(0,0,0),n.push(c,0,p);let g=u&1?a:s;o.push(g.r,g.g,g.b),o.push(g.r,g.g,g.b)}for(let u=0;u<i;u++){let d=u&1?a:s,c=e-e/i*u;for(let p=0;p<r;p++){let g=p/r*(Math.PI*2),_=Math.sin(g)*c,m=Math.cos(g)*c;n.push(_,0,m),o.push(d.r,d.g,d.b),g=(p+1)/r*(Math.PI*2),_=Math.sin(g)*c,m=Math.cos(g)*c,n.push(_,0,m),o.push(d.r,d.g,d.b)}}let l=new Xe;l.setAttribute("position",new Te(n,3)),l.setAttribute("color",new Te(o,3));let h=new Ht({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Up=new R,Yo=new R,Dp=new R,H_=class extends at{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new Xe;r.setAttribute("position",new Te([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let a=new Ht({fog:!1,toneMapped:!1});this.lightPlane=new tr(r,a),this.add(this.lightPlane),r=new Xe,r.setAttribute("position",new Te([0,0,0,0,0,1],3)),this.targetLine=new tr(r,a),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Up.setFromMatrixPosition(this.light.matrixWorld),Yo.setFromMatrixPosition(this.light.target.matrixWorld),Dp.subVectors(Yo,Up),this.lightPlane.lookAt(Yo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Yo),this.targetLine.scale.z=Dp.length()}},Zo=new R,Mt=new Wo,W_=class extends wi{constructor(e){let t=new Xe,i=new Ht({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],a=[],s={};n("n1","n2"),n("n2","n4"),n("n4","n3"),n("n3","n1"),n("f1","f2"),n("f2","f4"),n("f4","f3"),n("f3","f1"),n("n1","f1"),n("n2","f2"),n("n3","f3"),n("n4","f4"),n("p","n1"),n("p","n2"),n("p","n3"),n("p","n4"),n("u1","u2"),n("u2","u3"),n("u3","u1"),n("c","t"),n("p","c"),n("cn1","cn2"),n("cn3","cn4"),n("cf1","cf2"),n("cf3","cf4");function n(p,g){o(p),o(g)}function o(p){r.push(0,0,0),a.push(0,0,0),s[p]===void 0&&(s[p]=[]),s[p].push(r.length/3-1)}t.setAttribute("position",new Te(r,3)),t.setAttribute("color",new Te(a,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();let l=new fe(16755200),h=new fe(16711680),u=new fe(43775),d=new fe(16777215),c=new fe(3355443);this.setColors(l,h,u,d,c)}setColors(e,t,i,r,a){let s=this.geometry.getAttribute("color");return s.setXYZ(0,e.r,e.g,e.b),s.setXYZ(1,e.r,e.g,e.b),s.setXYZ(2,e.r,e.g,e.b),s.setXYZ(3,e.r,e.g,e.b),s.setXYZ(4,e.r,e.g,e.b),s.setXYZ(5,e.r,e.g,e.b),s.setXYZ(6,e.r,e.g,e.b),s.setXYZ(7,e.r,e.g,e.b),s.setXYZ(8,e.r,e.g,e.b),s.setXYZ(9,e.r,e.g,e.b),s.setXYZ(10,e.r,e.g,e.b),s.setXYZ(11,e.r,e.g,e.b),s.setXYZ(12,e.r,e.g,e.b),s.setXYZ(13,e.r,e.g,e.b),s.setXYZ(14,e.r,e.g,e.b),s.setXYZ(15,e.r,e.g,e.b),s.setXYZ(16,e.r,e.g,e.b),s.setXYZ(17,e.r,e.g,e.b),s.setXYZ(18,e.r,e.g,e.b),s.setXYZ(19,e.r,e.g,e.b),s.setXYZ(20,e.r,e.g,e.b),s.setXYZ(21,e.r,e.g,e.b),s.setXYZ(22,e.r,e.g,e.b),s.setXYZ(23,e.r,e.g,e.b),s.setXYZ(24,t.r,t.g,t.b),s.setXYZ(25,t.r,t.g,t.b),s.setXYZ(26,t.r,t.g,t.b),s.setXYZ(27,t.r,t.g,t.b),s.setXYZ(28,t.r,t.g,t.b),s.setXYZ(29,t.r,t.g,t.b),s.setXYZ(30,t.r,t.g,t.b),s.setXYZ(31,t.r,t.g,t.b),s.setXYZ(32,i.r,i.g,i.b),s.setXYZ(33,i.r,i.g,i.b),s.setXYZ(34,i.r,i.g,i.b),s.setXYZ(35,i.r,i.g,i.b),s.setXYZ(36,i.r,i.g,i.b),s.setXYZ(37,i.r,i.g,i.b),s.setXYZ(38,r.r,r.g,r.b),s.setXYZ(39,r.r,r.g,r.b),s.setXYZ(40,a.r,a.g,a.b),s.setXYZ(41,a.r,a.g,a.b),s.setXYZ(42,a.r,a.g,a.b),s.setXYZ(43,a.r,a.g,a.b),s.setXYZ(44,a.r,a.g,a.b),s.setXYZ(45,a.r,a.g,a.b),s.setXYZ(46,a.r,a.g,a.b),s.setXYZ(47,a.r,a.g,a.b),s.setXYZ(48,a.r,a.g,a.b),s.setXYZ(49,a.r,a.g,a.b),s.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,i=1,r=1,a,s;if(Mt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)a=1,s=0;else if(this.camera.coordinateSystem===ai)a=-1,s=1;else if(this.camera.coordinateSystem===Cr)a=0,s=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Et("c",t,e,Mt,0,0,a),Et("t",t,e,Mt,0,0,s),Et("n1",t,e,Mt,-i,-r,a),Et("n2",t,e,Mt,i,-r,a),Et("n3",t,e,Mt,-i,r,a),Et("n4",t,e,Mt,i,r,a),Et("f1",t,e,Mt,-i,-r,s),Et("f2",t,e,Mt,i,-r,s),Et("f3",t,e,Mt,-i,r,s),Et("f4",t,e,Mt,i,r,s),Et("u1",t,e,Mt,i*.7,r*1.1,a),Et("u2",t,e,Mt,-i*.7,r*1.1,a),Et("u3",t,e,Mt,0,r*2,a),Et("cf1",t,e,Mt,-i,0,s),Et("cf2",t,e,Mt,i,0,s),Et("cf3",t,e,Mt,0,-r,s),Et("cf4",t,e,Mt,0,r,s),Et("cn1",t,e,Mt,-i,0,a),Et("cn2",t,e,Mt,i,0,a),Et("cn3",t,e,Mt,0,-r,a),Et("cn4",t,e,Mt,0,r,a),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Et(e,t,i,r,a,s,n){Zo.set(a,s,n).unproject(r);let o=t[e];if(o!==void 0){let l=i.getAttribute("position");for(let h=0,u=o.length;h<u;h++)l.setXYZ(o[h],Zo.x,Zo.y,Zo.z)}}var Jo=new zt,X_=class extends wi{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),a=new Xe;a.setIndex(new lt(i,1)),a.setAttribute("position",new lt(r,3)),super(a,new Ht({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Jo.setFromObject(this.object),Jo.isEmpty())return;let e=Jo.min,t=Jo.max,i=this.geometry.attributes.position,r=i.array;r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=e.x,r[4]=t.y,r[5]=t.z,r[6]=e.x,r[7]=e.y,r[8]=t.z,r[9]=t.x,r[10]=e.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=e.z,r[15]=e.x,r[16]=t.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=t.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},j_=class extends wi{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],a=new Xe;a.setIndex(new lt(i,1)),a.setAttribute("position",new Te(r,3)),super(a,new Ht({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},q_=class extends tr{constructor(e,t=1,i=16776960){let r=i,a=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],s=new Xe;s.setAttribute("position",new Te(a,3)),s.computeBoundingSphere(),super(s,new Ht({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let n=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],o=new Xe;o.setAttribute("position",new Te(n,3)),o.computeBoundingSphere(),this.add(new wt(o,new li({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Op=new R,Ko,Kh,Y_=class extends at{constructor(e=new R(0,0,1),t=new R(0,0,0),i=1,r=16776960,a=i*.2,s=a*.2){super(),this.type="ArrowHelper",Ko===void 0&&(Ko=new Xe,Ko.setAttribute("position",new Te([0,0,0,0,1,0],3)),Kh=new mh(.5,1,5,1),Kh.translate(0,-.5,0)),this.position.copy(t),this.line=new tr(Ko,new Ht({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new wt(Kh,new li({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Op.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Op,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Z_=class extends wi{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Xe;r.setAttribute("position",new Te(t,3)),r.setAttribute("color",new Te(i,3));let a=new Ht({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,t,i){let r=new fe,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(i),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},J_=class{constructor(){this.type="ShapePath",this.color=new fe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Ns,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,a,s){return this.currentPath.bezierCurveTo(e,t,i,r,a,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(o,l){let h=!1,u=l.length;for(let d=0,c=u-1;d<u;c=d++){let p=l[d],g=l[c];p.y>o.y!=g.y>o.y&&o.x<(g.x-p.x)*(o.y-p.y)/(g.y-p.y)+p.x&&(h=!h)}return h}function t(o,l){let h=l.getCenter(new te);if(e(h,o))return h;let u=h.y,d=[],c=o.length;for(let p=0;p<c;p++){let g=o[p],_=o[(p+1)%c];if(g.y>u!=_.y>u){let m=g.x+(u-g.y)*(_.x-g.x)/(_.y-g.y);d.push(m)}}return d.length>1&&(d.sort((p,g)=>p-g),h.x=(d[0]+d[1])/2),h}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(pe('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let r=i==="nonzero"?(o=>o!==0):(o=>(o&1)!==0),a=[];for(let o of this.subPaths){let l=o.getPoints();if(l.length<3)continue;let h=ir.area(l);if(h===0)continue;let u=new Cp;for(let d=0;d<l.length;d++)u.expandByPoint(l[d]);a.push({subPath:o,points:l,boundingBox:u,interiorPoint:t(l,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}a.sort((o,l)=>l.absArea-o.absArea);for(let o=0;o<a.length;o++){let l=a[o],h=0;for(let u=o-1;u>=0;u--){let d=a[u];if(d.boundingBox.containsBox(l.boundingBox)&&e(l.interiorPoint,d.points)){l.container=d.exclude?d.container:d,h=d.winding,l.winding+=h;break}}r(l.winding)===r(h)&&(l.exclude=!0)}for(let o of a)o.exclude||(o.role=o.container===null||o.container.role==="hole"?"outer":"hole");let s=[],n=new Map;for(let o of a){if(o.exclude||o.role!=="outer")continue;let l=new Us;l.curves=o.subPath.curves,s.push(l),n.set(o,l)}for(let o of a){if(o.exclude||o.role!=="hole")continue;let l=n.get(o.container);if(!l)continue;let h=new Ns;h.curves=o.subPath.curves,l.holes.push(h)}return s}},K_=class extends Si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function $_(e,t){let i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2):(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0),e}function Q_(e,t){let i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0):(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2),e}function ev(e){return e.repeat.x=1,e.repeat.y=1,e.offset.x=0,e.offset.y=0,e}function $h(e,t,i,r){let a=tv(r);switch(i){case wl:return e*t;case ln:return e*t/a.components*a.byteLength;case rs:return e*t/a.components*a.byteLength;case hr:return e*t*2/a.components*a.byteLength;case hn:return e*t*2/a.components*a.byteLength;case El:return e*t*3/a.components*a.byteLength;case Yt:return e*t*4/a.components*a.byteLength;case un:return e*t*4/a.components*a.byteLength;case as:case ss:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ns:case os:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dn:case fn:return Math.max(e,16)*Math.max(t,8)/4;case cn:case pn:return Math.max(e,8)*Math.max(t,8)/2;case mn:case gn:case vn:case xn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _n:case ls:case yn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case bn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Tn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case wn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case En:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case An:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Cn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Rn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case In:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Pn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ln:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Nn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Un:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Dn:case On:case Fn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Bn:case zn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case hs:case Gn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function tv(e){switch(e){case Qt:case Sl:return{byteLength:1,components:1};case aa:case Ml:case yi:return{byteLength:2,components:1};case nn:case on:return{byteLength:2,components:4};case ci:case sn:case qt:return{byteLength:4,components:1};case bl:case Tl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var iv=class{static contain(e,t){return $_(e,t)}static cover(e,t){return Q_(e,t)}static fill(e){return ev(e)}static getByteLength(e,t,i,r){return $h(e,t,i,r)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}})),typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Fp(){let e=null,t=!1,i=null,r=null;function a(s,n){r=e.requestAnimationFrame(a),i(s,n)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function rv(e){let t=new WeakMap;function i(o,l){let h=o.array,u=o.usage,d=h.byteLength,c=e.createBuffer();e.bindBuffer(l,c),e.bufferData(l,h,u),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let u=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,u);else{d.sort((p,g)=>p.start-g.start);let c=0;for(let p=1;p<d.length;p++){let g=d[c],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++c,d[c]=_)}d.length=c+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];e.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:s,update:n}}var av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_v=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Av=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ov=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Jv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Kv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$v=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ix=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ax=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,py=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,my=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_y=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,by=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ey=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ay=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ry=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Py=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:av,alphahash_pars_fragment:sv,alphamap_fragment:nv,alphamap_pars_fragment:ov,alphatest_fragment:lv,alphatest_pars_fragment:hv,aomap_fragment:uv,aomap_pars_fragment:cv,batching_pars_vertex:dv,batching_vertex:pv,begin_vertex:fv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:_v,bumpmap_pars_fragment:vv,clipping_planes_fragment:xv,clipping_planes_pars_fragment:yv,clipping_planes_pars_vertex:Sv,clipping_planes_vertex:Mv,color_fragment:bv,color_pars_fragment:Tv,color_pars_vertex:wv,color_vertex:Ev,common:Av,cube_uv_reflection_fragment:Cv,defaultnormal_vertex:Rv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Pv,emissivemap_fragment:Lv,emissivemap_pars_fragment:Nv,colorspace_fragment:Uv,colorspace_pars_fragment:Dv,envmap_fragment:Ov,envmap_common_pars_fragment:Fv,envmap_pars_fragment:Bv,envmap_pars_vertex:zv,envmap_physical_pars_fragment:Jv,envmap_vertex:Gv,fog_vertex:Vv,fog_pars_vertex:kv,fog_fragment:Hv,fog_pars_fragment:Wv,gradientmap_pars_fragment:Xv,lightmap_pars_fragment:jv,lights_lambert_fragment:qv,lights_lambert_pars_fragment:Yv,lights_pars_begin:Zv,lights_toon_fragment:Kv,lights_toon_pars_fragment:$v,lights_phong_fragment:Qv,lights_phong_pars_fragment:ex,lights_physical_fragment:tx,lights_physical_pars_fragment:ix,lights_fragment_begin:rx,lights_fragment_maps:ax,lights_fragment_end:sx,lightprobes_pars_fragment:nx,logdepthbuf_fragment:ox,logdepthbuf_pars_fragment:lx,logdepthbuf_pars_vertex:hx,logdepthbuf_vertex:ux,map_fragment:cx,map_pars_fragment:dx,map_particle_fragment:px,map_particle_pars_fragment:fx,metalnessmap_fragment:mx,metalnessmap_pars_fragment:gx,morphinstance_vertex:_x,morphcolor_vertex:vx,morphnormal_vertex:xx,morphtarget_pars_vertex:yx,morphtarget_vertex:Sx,normal_fragment_begin:Mx,normal_fragment_maps:bx,normal_pars_fragment:Tx,normal_pars_vertex:wx,normal_vertex:Ex,normalmap_pars_fragment:Ax,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Px,opaque_fragment:Lx,packing:Nx,premultiplied_alpha_fragment:Ux,project_vertex:Dx,dithering_fragment:Ox,dithering_pars_fragment:Fx,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:zx,shadowmap_pars_fragment:Gx,shadowmap_pars_vertex:Vx,shadowmap_vertex:kx,shadowmask_pars_fragment:Hx,skinbase_vertex:Wx,skinning_pars_vertex:Xx,skinning_vertex:jx,skinnormal_vertex:qx,specularmap_fragment:Yx,specularmap_pars_fragment:Zx,tonemapping_fragment:Jx,tonemapping_pars_fragment:Kx,transmission_fragment:$x,transmission_pars_fragment:Qx,uv_pars_fragment:ey,uv_pars_vertex:ty,uv_vertex:iy,worldpos_vertex:ry,background_vert:ay,background_frag:sy,backgroundCube_vert:ny,backgroundCube_frag:oy,cube_vert:ly,cube_frag:hy,depth_vert:uy,depth_frag:cy,distance_vert:dy,distance_frag:py,equirect_vert:fy,equirect_frag:my,linedashed_vert:gy,linedashed_frag:_y,meshbasic_vert:vy,meshbasic_frag:xy,meshlambert_vert:yy,meshlambert_frag:Sy,meshmatcap_vert:My,meshmatcap_frag:by,meshnormal_vert:Ty,meshnormal_frag:wy,meshphong_vert:Ey,meshphong_frag:Ay,meshphysical_vert:Cy,meshphysical_frag:Ry,meshtoon_vert:Iy,meshtoon_frag:Py,points_vert:Ly,points_frag:Ny,shadow_vert:Uy,shadow_frag:Dy,sprite_vert:Oy,sprite_frag:Fy},me={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ri={basic:{uniforms:Kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Kt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Kt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new fe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Kt([me.points,me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Kt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Kt([me.common,me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Kt([me.sprite,me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Kt([me.common,me.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Kt([me.lights,me.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Ri.physical={uniforms:Kt([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var $o={r:0,b:0,g:0},By=new Ve,Bp=new qe;Bp.set(-1,0,0,0,1,0,0,0,1);function zy(e,t,i,r,a,s){let n=new fe(0),o=a===!0?0:1,l,h,u=null,d=0,c=null;function p(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=t.get(M,v)}return M}function g(y){let M=!1,v=p(y);v===null?m(n,o):v&&v.isColor&&(m(v,1),M=!0);let b=e.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(y,M){let v=p(M);v&&(v.isCubeTexture||v.mapping===ta)?(h===void 0&&(h=new wt(new Is(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Pa(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(By.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Bp),h.material.toneMapped=Ke.getTransfer(v.colorSpace)!==ot,(u!==v||d!==v.version||c!==e.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,c=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new wt(new Go(2,2),new fi({name:"BackgroundMaterial",uniforms:Pa(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,c=e.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB($o,Od(e)),i.buffers.color.setClear($o.r,$o.g,$o.b,M,s)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return n},setClearColor:function(y,M=1){n.set(y),o=M,m(n,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(n,o)},render:g,addToRenderList:_,dispose:f}}function Gy(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=c(null),s=a,n=!1;function o(I,D,X,N,G){let Z=!1,k=d(I,N,X,D);s!==k&&(s=k,h(s.object)),Z=p(I,N,X,G),Z&&g(I,N,X,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(Z||n)&&(n=!1,v(I,D,X,N),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function h(I){return e.bindVertexArray(I)}function u(I){return e.deleteVertexArray(I)}function d(I,D,X,N){let G=N.wireframe===!0,Z=r[D.id];Z===void 0&&(Z={},r[D.id]=Z);let k=I.isInstancedMesh===!0?I.id:0,he=Z[k];he===void 0&&(he={},Z[k]=he);let j=he[X.id];j===void 0&&(j={},he[X.id]=j);let Y=j[G];return Y===void 0&&(Y=c(l()),j[G]=Y),Y}function c(I){let D=[],X=[],N=[];for(let G=0;G<i;G++)D[G]=0,X[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:N,object:I,attributes:{},index:null}}function p(I,D,X,N){let G=s.attributes,Z=D.attributes,k=0,he=X.getAttributes();for(let j in he)if(he[j].location>=0){let Y=G[j],ee=Z[j];if(ee===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),Y===void 0||Y.attribute!==ee||ee&&Y.data!==ee.data)return!0;k++}return s.attributesNum!==k||s.index!==N}function g(I,D,X,N){let G={},Z=D.attributes,k=0,he=X.getAttributes();for(let j in he)if(he[j].location>=0){let Y=Z[j];Y===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let ee={};ee.attribute=Y,Y&&Y.data&&(ee.data=Y.data),G[j]=ee,k++}s.attributes=G,s.attributesNum=k,s.index=N}function _(){let I=s.newAttributes;for(let D=0,X=I.length;D<X;D++)I[D]=0}function m(I){f(I,0)}function f(I,D){let X=s.newAttributes,N=s.enabledAttributes,G=s.attributeDivisors;X[I]=1,N[I]===0&&(e.enableVertexAttribArray(I),N[I]=1),G[I]!==D&&(e.vertexAttribDivisor(I,D),G[I]=D)}function y(){let I=s.newAttributes,D=s.enabledAttributes;for(let X=0,N=D.length;X<N;X++)D[X]!==I[X]&&(e.disableVertexAttribArray(X),D[X]=0)}function M(I,D,X,N,G,Z,k){k===!0?e.vertexAttribIPointer(I,D,X,G,Z):e.vertexAttribPointer(I,D,X,N,G,Z)}function v(I,D,X,N){_();let G=N.attributes,Z=X.getAttributes(),k=D.defaultAttributeValues;for(let he in Z){let j=Z[he];if(j.location>=0){let Y=G[he];if(Y===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){let ee=Y.normalized,ke=Y.itemSize,Ie=t.get(Y);if(Ie===void 0)continue;let ht=Ie.buffer,je=Ie.type,q=Ie.bytesPerElement,re=je===e.INT||je===e.UNSIGNED_INT||Y.gpuType===sn;if(Y.isInterleavedBufferAttribute){let ne=Y.data,Le=ne.stride,Fe=Y.offset;if(ne.isInstancedInterleavedBuffer){for(let de=0;de<j.locationSize;de++)f(j.location+de,ne.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let de=0;de<j.locationSize;de++)m(j.location+de);e.bindBuffer(e.ARRAY_BUFFER,ht);for(let de=0;de<j.locationSize;de++)M(j.location+de,ke/j.locationSize,je,ee,Le*q,(Fe+ke/j.locationSize*de)*q,re)}else{if(Y.isInstancedBufferAttribute){for(let ne=0;ne<j.locationSize;ne++)f(j.location+ne,Y.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ne=0;ne<j.locationSize;ne++)m(j.location+ne);e.bindBuffer(e.ARRAY_BUFFER,ht);for(let ne=0;ne<j.locationSize;ne++)M(j.location+ne,ke/j.locationSize,je,ee,ke*q,ke/j.locationSize*ne*q,re)}}else if(k!==void 0){let ee=k[he];if(ee!==void 0)switch(ee.length){case 2:e.vertexAttrib2fv(j.location,ee);break;case 3:e.vertexAttrib3fv(j.location,ee);break;case 4:e.vertexAttrib4fv(j.location,ee);break;default:e.vertexAttrib1fv(j.location,ee)}}}}y()}function b(){w();for(let I in r){let D=r[I];for(let X in D){let N=D[X];for(let G in N){let Z=N[G];for(let k in Z)u(Z[k].object),delete Z[k];delete N[G]}}delete r[I]}}function E(I){if(r[I.id]===void 0)return;let D=r[I.id];for(let X in D){let N=D[X];for(let G in N){let Z=N[G];for(let k in Z)u(Z[k].object),delete Z[k];delete N[G]}}delete r[I.id]}function C(I){for(let D in r){let X=r[D];for(let N in X){let G=X[N];if(G[I.id]===void 0)continue;let Z=G[I.id];for(let k in Z)u(Z[k].object),delete Z[k];delete G[I.id]}}}function x(I){for(let D in r){let X=r[D],N=I.isInstancedMesh===!0?I.id:0,G=X[N];if(G!==void 0){for(let Z in G){let k=G[Z];for(let he in k)u(k[he].object),delete k[he];delete G[Z]}delete X[N],Object.keys(X).length===0&&delete r[D]}}}function w(){L(),n=!0,s!==a&&(s=a,h(s.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Vy(e,t,i){let r;function a(l){r=l}function s(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function n(l,h,u){u!==0&&(e.drawArraysInstanced(r,l,h,u),i.update(h,r,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,u);let d=0;for(let c=0;c<u;c++)d+=h[c];i.update(d,r,1)}this.setMode=a,this.render=s,this.renderInstances=n,this.renderMultiDraw=o}function ky(e,t,i,r){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function n(C){return!(C!==Yt&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Qt&&C!==qt&&!x&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",u=l(h);u!==h&&(pe("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let d=i.logarithmicDepthBuffer===!0,c=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&c===!1&&pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:E}}function Hy(e){let t=this,i=null,r=0,a=!1,s=!1,n=new Qi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){let p=d.length!==0||c||r!==0||a;return a=c,r=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){i=u(d,c,0)},this.setState=function(d,c,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!a||g===null||g.length===0||s&&!m)s?u(null):h();else{let y=s?0:r,M=y*4,v=f.clippingState||null;l.value=v,v=u(g,c,M,p);for(let b=0;b!==M;++b)v[b]=i[b];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(d,c,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,y=c.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,v=p;M!==_;++M,v+=4)n.copy(d[M]).applyMatrix4(y,o),n.normal.toArray(m,v),m[v+3]=n.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Va=4,Wy=6,Xy=20,jy=256,Hs=new Oa,zp=new fe,Qh=null,eu=0,tu=0,iu=!1,qy=new R,qr=new R,ru=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:s=256,position:n=qy}=a;Qh=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,n),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,eu,tu),this._renderer.xr.enabled=iu,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:yi,format:Yt,colorSpace:ei,depthBuffer:!1},r=Gp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yy(a)),this._blurMaterial=Jy(a,e,t),this._ggxMaterial=Zy(a,e,t)}return r}_compileMaterial(e){let t=new wt(new Xe,e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,i,r,a){let s=new Ft(90,1,t,i),n=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(zp),l.toneMapping=xi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new Is,new li({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,c=d.material,p=!1,g=e.background;g?g.isColor&&(c.color.copy(g),e.background=null,p=!0):(c.color.copy(zp),p=!0);for(let _=0;_<6;_++){let m=_%3;m===0?(s.up.set(0,n[_],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x+o[_],a.y,a.z)):m===1?(s.up.set(0,0,n[_]),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y+o[_],a.z)):(s.up.set(0,n[_],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y,a.z+o[_]));let f=this._cubeSize;ka(r,m*f,_>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,s),l.render(e,s)}l.toneMapping=u,l.autoClear=h,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ni||e.mapping===nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vp());let a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;let n=a.uniforms;n.envMap.value=e;let o=this._cubeSize;ka(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,Hs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,n=this._lodMeshes[i];n.material=s;let o=s.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,c=u*d,{_lodMax:p}=this,g=this._sizeLods[i],_=3*g*(i>p-Va?i-p+Va:0),m=4*(this._cubeSize-g);o.envMap.value=e.texture,o.roughness.value=c,o.mipInt.value=p-t,ka(a,_,m,3*g,2*g),r.setRenderTarget(a),r.render(n,Hs),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=p-i,ka(e,_,m,3*g,2*g),r.setRenderTarget(e),r.render(n,Hs)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,s),this._blurPass(a,e,i,i,s)}_blurPass(e,t,i,r,a){let s=this._renderer,n=this._blurMaterial,o=this._lodMeshes[r];o.material=n;let l=n.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-Va?r-this._lodMax+Va:0),d=4*(this._cubeSize-h);ka(t,u,d,3*h,2*h),s.setRenderTarget(t),s.render(o,Hs)}};function Yy(e){let t=[],i=[],r=e,a=e-Va+1+Wy;for(let s=0;s<a;s++){let n=Math.pow(2,r);t.push(n);let o=1/(n-2),l=-o,h=1+o,u=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,c=6,p=3,g=new Float32Array(p*c*d),_=new Float32Array(p*c*d);for(let f=0;f<d;f++){let y=f%3*2/3-1,M=f>2?0:-1,v=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];g.set(v,p*c*f);for(let b=0;b<c;b++){let E=u[b*2]*2-1,C=u[b*2+1]*2-1;f===0?qr.set(1,C,E):f===1?qr.set(-E,1,-C):f===2?qr.set(-E,C,1):f===3?qr.set(-1,C,-E):f===4?qr.set(-E,-1,C):qr.set(E,C,-1),qr.toArray(_,(f*c+b)*p)}}let m=new Xe;m.setAttribute("position",new lt(g,p)),m.setAttribute("outputDirection",new lt(_,p)),i.push(new wt(m,null)),r>Va&&r--}return{lodMeshes:i,sizeLods:t}}function Gp(e,t,i){let r=new ti(e,t,i);return r.texture.mapping=ta,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ka(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Zy(e,t,i){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Jy(e,t,i){return new fi({name:"SphericalGaussianBlur",defines:{SAMPLES:Xy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Vp(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function kp(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var au=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Is(5,5,5),a=new fi({name:"CubemapFromEquirect",uniforms:Pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:Li});a.uniforms.tEquirect.value=t;let s=new wt(r,a),n=t.minFilter;return t.minFilter===ui&&(t.minFilter=pt),new vp(1,10,this).update(e,s),t.minFilter=n,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}};function Ky(e){let t=new WeakMap,i=new WeakMap,r=null;function a(c,p=!1){return c==null?null:p?n(c):s(c)}function s(c){if(c&&c.isTexture){let p=c.mapping;if(p===ts||p===is)if(t.has(c)){let g=t.get(c).texture;return o(g,c.mapping)}else{let g=c.image;if(g&&g.height>0){let _=new au(g.height);return _.fromEquirectangularTexture(e,c),t.set(c,_),c.addEventListener("dispose",h),o(_.texture,c.mapping)}else return null}}return c}function n(c){if(c&&c.isTexture){let p=c.mapping,g=p===ts||p===is,_=p===Ni||p===nr;if(g||_){let m=i.get(c),f=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return r===null&&(r=new ru(e)),m=g?r.fromEquirectangular(c,m):r.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),m.texture;if(m!==void 0)return m.texture;{let y=c.image;return g&&y&&y.height>0||_&&y&&l(y)?(r===null&&(r=new ru(e)),m=g?r.fromEquirectangular(c):r.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),c.addEventListener("dispose",u),m.texture):null}}}return c}function o(c,p){return p===ts?c.mapping=Ni:p===is&&(c.mapping=nr),c}function l(c){let p=0,g=6;for(let _=0;_<g;_++)c[_]!==void 0&&p++;return p===g}function h(c){let p=c.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(c){let p=c.target;p.removeEventListener("dispose",u);let g=i.get(p);g!==void 0&&(i.delete(p),g.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function $y(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Hi("WebGLRenderer: "+r+" extension not supported."),a}}}function Qy(e,t,i,r){let a={},s=new WeakMap;function n(d){let c=d.target;c.index!==null&&t.remove(c.index);for(let g in c.attributes)t.remove(c.attributes[g]);c.removeEventListener("dispose",n),delete a[c.id];let p=s.get(c);p&&(t.remove(p),s.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,i.memory.geometries--}function o(d,c){return a[c.id]===!0||(c.addEventListener("dispose",n),a[c.id]=!0,i.memory.geometries++),c}function l(d){let c=d.attributes;for(let p in c)t.update(c[p],e.ARRAY_BUFFER)}function h(d){let c=[],p=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(p!==null){let y=p.array;_=p.version;for(let M=0,v=y.length;M<v;M+=3){let b=y[M+0],E=y[M+1],C=y[M+2];c.push(b,E,E,C,C,b)}}else{let y=g.array;_=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let b=M+0,E=M+1,C=M+2;c.push(b,E,E,C,C,b)}}let m=new(g.count>=65535?Yl:ql)(c,1);m.version=_;let f=s.get(d);f&&t.remove(f),s.set(d,m)}function u(d){let c=s.get(d);if(c){let p=d.index;p!==null&&c.version<p.version&&h(d)}else h(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function eS(e,t,i){let r;function a(d){r=d}let s,n;function o(d){s=d.type,n=d.bytesPerElement}function l(d,c){e.drawElements(r,c,s,d*n),i.update(c,r,1)}function h(d,c,p){p!==0&&(e.drawElementsInstanced(r,c,s,d*n,p),i.update(c,r,p))}function u(d,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,c,0,s,d,0,p);let g=0;for(let _=0;_<p;_++)g+=c[_];i.update(g,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function tS(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,n,o){switch(i.calls++,n){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",n);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function iS(e,t,i){let r=new WeakMap,a=new gt;function s(n,o,l){let h=n.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,c=r.get(o);if(c===void 0||c.count!==d){let p=function(){x.dispose(),r.delete(o),o.removeEventListener("dispose",p)};c!==void 0&&c.texture.dispose();let g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=o.attributes.position.count*v,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*E*4*d),x=new Yn(C,b,E,d);x.type=qt,x.needsUpdate=!0;let w=v*4;for(let L=0;L<d;L++){let I=f[L],D=y[L],X=M[L],N=b*E*4*L;for(let G=0;G<I.count;G++){let Z=G*w;g===!0&&(a.fromBufferAttribute(I,G),C[N+Z+0]=a.x,C[N+Z+1]=a.y,C[N+Z+2]=a.z,C[N+Z+3]=0),_===!0&&(a.fromBufferAttribute(D,G),C[N+Z+4]=a.x,C[N+Z+5]=a.y,C[N+Z+6]=a.z,C[N+Z+7]=0),m===!0&&(a.fromBufferAttribute(X,G),C[N+Z+8]=a.x,C[N+Z+9]=a.y,C[N+Z+10]=a.z,C[N+Z+11]=X.itemSize===4?a.w:1)}}c={count:d,texture:x,size:new te(b,E)},r.set(o,c),o.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",n.morphTexture,i);else{let p=0;for(let _=0;_<h.length;_++)p+=h[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:s}}function rS(e,t,i,r,a){let s=new WeakMap;function n(h){let u=a.render.frame,d=h.geometry,c=t.get(h,d);if(s.get(c)!==u&&(t.update(c),s.set(c,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==u&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),s.set(h,u))),h.isSkinnedMesh){let p=h.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return c}function o(){s=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:n,dispose:o}}var aS={[pl]:"LINEAR_TONE_MAPPING",[fl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[gl]:"ACES_FILMIC_TONE_MAPPING",[vl]:"AGX_TONE_MAPPING",[xl]:"NEUTRAL_TONE_MAPPING",[_l]:"CUSTOM_TONE_MAPPING"};function sS(e,t,i,r,a,s){let n=new ti(t,i,{type:e,depthBuffer:a,stencilBuffer:s,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new Xe;h.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Te([0,2,0,0,2,0],2));let u=new Ih({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new wt(h,u),c=new Oa(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,f=null,y=[],M=!1;this.setSize=function(v,b){n.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let E=0;E<y.length;E++){let C=y[E];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){y=v,M=y.length>0&&y[0].isRenderPass===!0;let b=n.width,E=n.height;y.length>0&&o===null&&(o=new ti(b,E,{type:yi,depthBuffer:!1,stencilBuffer:!1}),l=new ti(b,E,{type:yi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){let x=y[C];x.setSize&&x.setSize(b,E)}},this.begin=function(v,b){if(_||v.toneMapping===xi&&y.length===0)return!1;if(f=b,b!==null){let E=b.width,C=b.height;(n.width!==E||n.height!==C)&&this.setSize(E,C)}return M===!1&&v.setRenderTarget(n),m=v.toneMapping,v.toneMapping=xi,!0},this.hasRenderPass=function(){return M},this.end=function(v,b){v.toneMapping=m,_=!0;let E=n,C=o;for(let x=0;x<y.length;x++){let w=y[x];w.enabled!==!1&&(w.render(v,C,E,b),w.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(p!==v.outputColorSpace||g!==v.toneMapping){p=v.outputColorSpace,g=v.toneMapping,u.defines={},Ke.getTransfer(p)===ot&&(u.defines.SRGB_TRANSFER="");let x=aS[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(f),v.render(d,c),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){n.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Hp=new Tt,su=new Ca(1,1),Wp=new Yn,Xp=new Zn,jp=new Rs,qp=[],Yp=[],Zp=new Float32Array(16),Jp=new Float32Array(9),Kp=new Float32Array(4);function Ha(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,s=qp[a];if(s===void 0&&(s=new Float32Array(a),qp[a]=s),t!==0){r.toArray(s,0);for(let n=1,o=0;n!==t;++n)o+=i,e[n].toArray(s,o)}return s}function Nt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Ut(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function el(e,t){let i=Yp[t];i===void 0&&(i=new Int32Array(t),Yp[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function nS(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function oS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nt(i,t))return;e.uniform2fv(this.addr,t),Ut(i,t)}}function lS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Nt(i,t))return;e.uniform3fv(this.addr,t),Ut(i,t)}}function hS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nt(i,t))return;e.uniform4fv(this.addr,t),Ut(i,t)}}function uS(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Nt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ut(i,t)}else{if(Nt(i,r))return;Kp.set(r),e.uniformMatrix2fv(this.addr,!1,Kp),Ut(i,r)}}function cS(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Nt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ut(i,t)}else{if(Nt(i,r))return;Jp.set(r),e.uniformMatrix3fv(this.addr,!1,Jp),Ut(i,r)}}function dS(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Nt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ut(i,t)}else{if(Nt(i,r))return;Zp.set(r),e.uniformMatrix4fv(this.addr,!1,Zp),Ut(i,r)}}function pS(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function fS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nt(i,t))return;e.uniform2iv(this.addr,t),Ut(i,t)}}function mS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Nt(i,t))return;e.uniform3iv(this.addr,t),Ut(i,t)}}function gS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nt(i,t))return;e.uniform4iv(this.addr,t),Ut(i,t)}}function _S(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function vS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nt(i,t))return;e.uniform2uiv(this.addr,t),Ut(i,t)}}function xS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Nt(i,t))return;e.uniform3uiv(this.addr,t),Ut(i,t)}}function yS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nt(i,t))return;e.uniform4uiv(this.addr,t),Ut(i,t)}}function SS(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(su.compareFunction=i.isReversedDepthBuffer()?jn:Xn,s=su):s=Hp,i.setTexture2D(t||s,a)}function MS(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Xp,a)}function bS(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||jp,a)}function TS(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Wp,a)}function wS(e){switch(e){case 5126:return nS;case 35664:return oS;case 35665:return lS;case 35666:return hS;case 35674:return uS;case 35675:return cS;case 35676:return dS;case 5124:case 35670:return pS;case 35667:case 35671:return fS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return _S;case 36294:return vS;case 36295:return xS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return TS}}function ES(e,t){e.uniform1fv(this.addr,t)}function AS(e,t){let i=Ha(t,this.size,2);e.uniform2fv(this.addr,i)}function CS(e,t){let i=Ha(t,this.size,3);e.uniform3fv(this.addr,i)}function RS(e,t){let i=Ha(t,this.size,4);e.uniform4fv(this.addr,i)}function IS(e,t){let i=Ha(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function PS(e,t){let i=Ha(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function LS(e,t){let i=Ha(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function NS(e,t){e.uniform1iv(this.addr,t)}function US(e,t){e.uniform2iv(this.addr,t)}function DS(e,t){e.uniform3iv(this.addr,t)}function OS(e,t){e.uniform4iv(this.addr,t)}function FS(e,t){e.uniform1uiv(this.addr,t)}function BS(e,t){e.uniform2uiv(this.addr,t)}function zS(e,t){e.uniform3uiv(this.addr,t)}function GS(e,t){e.uniform4uiv(this.addr,t)}function VS(e,t,i){let r=this.cache,a=t.length,s=el(i,a);Nt(r,s)||(e.uniform1iv(this.addr,s),Ut(r,s));let n;this.type===e.SAMPLER_2D_SHADOW?n=su:n=Hp;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||n,s[o])}function kS(e,t,i){let r=this.cache,a=t.length,s=el(i,a);Nt(r,s)||(e.uniform1iv(this.addr,s),Ut(r,s));for(let n=0;n!==a;++n)i.setTexture3D(t[n]||Xp,s[n])}function HS(e,t,i){let r=this.cache,a=t.length,s=el(i,a);Nt(r,s)||(e.uniform1iv(this.addr,s),Ut(r,s));for(let n=0;n!==a;++n)i.setTextureCube(t[n]||jp,s[n])}function WS(e,t,i){let r=this.cache,a=t.length,s=el(i,a);Nt(r,s)||(e.uniform1iv(this.addr,s),Ut(r,s));for(let n=0;n!==a;++n)i.setTexture2DArray(t[n]||Wp,s[n])}function XS(e){switch(e){case 5126:return ES;case 35664:return AS;case 35665:return CS;case 35666:return RS;case 35674:return IS;case 35675:return PS;case 35676:return LS;case 5124:case 35670:return NS;case 35667:case 35671:return US;case 35668:case 35672:return DS;case 35669:case 35673:return OS;case 5125:return FS;case 36294:return BS;case 36295:return zS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return HS;case 36289:case 36303:case 36311:case 36292:return WS}}var jS=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wS(t.type)}},qS=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XS(t.type)}},YS=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let n=r[a];n.setValue(e,t[n.id],i)}}},nu=/(\w+)(\])?(\[|\.)?/g;function $p(e,t){e.seq.push(t),e.map[t.id]=t}function ZS(e,t,i){let r=e.name,a=r.length;for(nu.lastIndex=0;;){let s=nu.exec(r),n=nu.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&n+2===a){$p(i,h===void 0?new jS(o,e,t):new qS(o,e,t));break}else{let u=i.map[o];u===void 0&&(u=new YS(o),$p(i,u)),i=u}}}var tl=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let n=e.getActiveUniform(t,s),o=e.getUniformLocation(t,n.name);ZS(n,o,this)}let r=[],a=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let n=t[a],o=i[n.id];o.needsUpdate!==!1&&n.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function Qp(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var JS=37297,KS=0;function $S(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let n=a;n<s;n++){let o=n+1;r.push(`${o===t?">":" "} ${o}: ${i[n]}`)}return r.join(`
`)}var ef=new qe;function QS(e){Ke._getMatrix(ef,Ke.workingColorSpace,e);let t=`mat3( ${ef.elements.map(i=>i.toFixed(4))} )`;switch(Ke.getTransfer(e)){case cs:return[t,"LinearTransferOETF"];case ot:return[t,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function tf(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let s=/ERROR: 0:(\d+)/.exec(a);if(s){let n=parseInt(s[1]);return i.toUpperCase()+`

`+a+`

`+$S(e.getShaderSource(t),n)}else return a}function eM(e,t){let i=QS(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var tM={[pl]:"Linear",[fl]:"Reinhard",[ml]:"Cineon",[gl]:"ACESFilmic",[vl]:"AgX",[xl]:"Neutral",[_l]:"Custom"};function iM(e,t){let i=tM[t];return i===void 0?(pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var il=new R;function rM(){Ke.getLuminanceCoefficients(il);let e=il.x.toFixed(4),t=il.y.toFixed(4),i=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aM(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function sM(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function nM(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let s=e.getActiveAttrib(t,a),n=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[n]={type:s.type,location:e.getAttribLocation(t,n),locationSize:o}}return i}function Ws(e){return e!==""}function rf(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function af(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(e){return e.replace(oM,hM)}var lM=new Map;function hM(e,t){let i=Je[t];if(i===void 0){let r=lM.get(t);if(r!==void 0)i=Je[r],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ou(i)}var uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(e){return e.replace(uM,cM)}function cM(e,t,i,r){let a="";for(let s=parseInt(t);s<parseInt(i);s++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function nf(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var dM={[Qa]:"SHADOWMAP_TYPE_PCF",[$r]:"SHADOWMAP_TYPE_VSM"};function pM(e){return dM[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fM={[Ni]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE_UV"};function mM(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":fM[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var gM={[nr]:"ENVMAP_MODE_REFRACTION"};function _M(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":gM[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vM={[es]:"ENVMAP_BLENDING_MULTIPLY",[Xu]:"ENVMAP_BLENDING_MIX",[ju]:"ENVMAP_BLENDING_ADD"};function xM(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":vM[e.combine]||"ENVMAP_BLENDING_NONE"}function yM(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function SM(e,t,i,r){let a=e.getContext(),s=i.defines,n=i.vertexShader,o=i.fragmentShader,l=pM(i),h=mM(i),u=_M(i),d=xM(i),c=yM(i),p=aM(i),g=sM(s),_=a.createProgram(),m,f,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Ws).join(`
`),f.length>0&&(f+=`
`)):(m=[nf(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),f=[nf(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==xi?"#define TONE_MAPPING":"",i.toneMapping!==xi?Je.tonemapping_pars_fragment:"",i.toneMapping!==xi?iM("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,eM("linearToOutputTexel",i.outputColorSpace),rM(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ws).join(`
`)),n=ou(n),n=rf(n,i),n=af(n,i),o=ou(o),o=rf(o,i),o=af(o,i),n=sf(n),o=sf(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=y+m+n,v=y+f+o,b=Qp(a,a.VERTEX_SHADER,M),E=Qp(a,a.FRAGMENT_SHADER,v);a.attachShader(_,b),a.attachShader(_,E),i.index0AttributeName!==void 0?a.bindAttribLocation(_,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function C(I){if(e.debug.checkShaderErrors){let D=a.getProgramInfoLog(_)||"",X=a.getShaderInfoLog(b)||"",N=a.getShaderInfoLog(E)||"",G=D.trim(),Z=X.trim(),k=N.trim(),he=!0,j=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(he=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,_,b,E);else{let Y=tf(a,b,"vertex"),ee=tf(a,E,"fragment");Pe("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+Y+`
`+ee)}else G!==""?pe("WebGLProgram: Program Info Log:",G):(Z===""||k==="")&&(j=!1);j&&(I.diagnostics={runnable:he,programLog:G,vertexShader:{log:Z,prefix:m},fragmentShader:{log:k,prefix:f}})}a.deleteShader(b),a.deleteShader(E),x=new tl(a,_),w=nM(a,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(_,JS)),L},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=KS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}var MM=0,bM=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new TM(e),t.set(e,i)),i}},TM=class{constructor(e){this.id=MM++,this.code=e,this.usedTimes=0}};function wM(e){return e===hr||e===ls||e===hs}function EM(e,t,i,r,a,s){let n=new Kn,o=new bM,l=new Set,h=[],u=new Map,d=r.logarithmicDepthBuffer,c=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,w,L,I,D,X){let N=I.fog,G=D.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,he=t.get(x.envMap||Z,k),j=he&&he.mapping===ta?he.image.height:null,Y=p[x.type];x.precision!==null&&(c=r.getMaxPrecision(x.precision),c!==x.precision&&pe("WebGLProgram.getParameters:",x.precision,"not supported, using",c,"instead."));let ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ke=ee!==void 0?ee.length:0,Ie=0;G.morphAttributes.position!==void 0&&(Ie=1),G.morphAttributes.normal!==void 0&&(Ie=2),G.morphAttributes.color!==void 0&&(Ie=3);let ht,je,q,re;if(Y){let Pt=Ri[Y];ht=Pt.vertexShader,je=Pt.fragmentShader}else{ht=x.vertexShader,je=x.fragmentShader;let Pt=o.getVertexShaderStage(x),nt=o.getFragmentShaderStage(x);o.update(x,Pt,nt),q=Pt.id,re=nt.id}let ne=e.getRenderTarget(),Le=e.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,de=D.isBatchedMesh===!0,$e=!!x.map,Q=!!x.matcap,$=!!he,oe=!!x.aoMap,ye=!!x.lightMap,Se=!!x.bumpMap&&x.wireframe===!1,Ae=!!x.normalMap,Oe=!!x.displacementMap,We=!!x.emissiveMap,Ye=!!x.metalnessMap,P=!!x.roughnessMap,mt=x.anisotropy>0,it=x.clearcoat>0,et=x.dispersion>0,A=x.retroreflectivity>0,S=x.iridescence>0,U=x.sheen>0,H=x.transmission>0,K=mt&&!!x.anisotropyMap,ce=it&&!!x.clearcoatMap,ge=it&&!!x.clearcoatNormalMap,B=it&&!!x.clearcoatRoughnessMap,le=S&&!!x.iridescenceMap,_e=S&&!!x.iridescenceThicknessMap,Ee=U&&!!x.sheenColorMap,se=U&&!!x.sheenRoughnessMap,Ue=!!x.specularMap,De=!!x.specularColorMap,He=!!x.specularIntensityMap,st=H&&!!x.transmissionMap,F=H&&!!x.thicknessMap,J=!!x.gradientMap,ie=!!x.alphaMap,Me=x.alphaTest>0,Ce=!!x.alphaHash,ae=!!x.extensions,xe=xi;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(xe=e.toneMapping);let ze={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:ht,fragmentShader:je,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:c,batching:de,batchingColor:de&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:$e,matcap:Q,envMap:$,envMapMode:$&&he.mapping,envMapCubeUVHeight:j,aoMap:oe,lightMap:ye,bumpMap:Se,normalMap:Ae,displacementMap:Oe,emissiveMap:We,normalMapObjectSpace:Ae&&x.normalMapType===Qu,normalMapTangentSpace:Ae&&x.normalMapType===Vi,packedNormalMap:Ae&&x.normalMapType===Vi&&wM(x.normalMap.format),metalnessMap:Ye,roughnessMap:P,anisotropy:mt,anisotropyMap:K,clearcoat:it,clearcoatMap:ce,clearcoatNormalMap:ge,clearcoatRoughnessMap:B,dispersion:et,retroreflection:A,iridescence:S,iridescenceMap:le,iridescenceThicknessMap:_e,sheen:U,sheenColorMap:Ee,sheenRoughnessMap:se,specularMap:Ue,specularColorMap:De,specularIntensityMap:He,transmission:H,transmissionMap:st,thicknessMap:F,gradientMap:J,opaque:x.transparent===!1&&x.blending===Qr&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:Me,alphaHash:Ce,combine:x.combine,mapUv:$e&&g(x.map.channel),aoMapUv:oe&&g(x.aoMap.channel),lightMapUv:ye&&g(x.lightMap.channel),bumpMapUv:Se&&g(x.bumpMap.channel),normalMapUv:Ae&&g(x.normalMap.channel),displacementMapUv:Oe&&g(x.displacementMap.channel),emissiveMapUv:We&&g(x.emissiveMap.channel),metalnessMapUv:Ye&&g(x.metalnessMap.channel),roughnessMapUv:P&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:ce&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:se&&g(x.sheenRoughnessMap.channel),specularMapUv:Ue&&g(x.specularMap.channel),specularColorMapUv:De&&g(x.specularColorMap.channel),specularIntensityMapUv:He&&g(x.specularIntensityMap.channel),transmissionMapUv:st&&g(x.transmissionMap.channel),thicknessMapUv:F&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ae||mt),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&($e||ie),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&Ae===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Ie,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:xe,decodeVideoTexture:$e&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:We&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vi,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(f(w,x),y(w,x),w.push(e.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function f(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){n.disableAll(),w.instancing&&n.enable(0),w.instancingColor&&n.enable(1),w.instancingMorph&&n.enable(2),w.matcap&&n.enable(3),w.envMap&&n.enable(4),w.normalMapObjectSpace&&n.enable(5),w.normalMapTangentSpace&&n.enable(6),w.clearcoat&&n.enable(7),w.iridescence&&n.enable(8),w.alphaTest&&n.enable(9),w.vertexColors&&n.enable(10),w.vertexAlphas&&n.enable(11),w.vertexUv1s&&n.enable(12),w.vertexUv2s&&n.enable(13),w.vertexUv3s&&n.enable(14),w.vertexTangents&&n.enable(15),w.anisotropy&&n.enable(16),w.alphaHash&&n.enable(17),w.batching&&n.enable(18),w.dispersion&&n.enable(19),w.retroreflection&&n.enable(24),w.batchingColor&&n.enable(20),w.gradientMap&&n.enable(21),w.packedNormalMap&&n.enable(22),w.vertexNormals&&n.enable(23),x.push(n.mask),n.disableAll(),w.fog&&n.enable(0),w.useFog&&n.enable(1),w.flatShading&&n.enable(2),w.logarithmicDepthBuffer&&n.enable(3),w.reversedDepthBuffer&&n.enable(4),w.skinning&&n.enable(5),w.morphTargets&&n.enable(6),w.morphNormals&&n.enable(7),w.morphColors&&n.enable(8),w.premultipliedAlpha&&n.enable(9),w.shadowMapEnabled&&n.enable(10),w.doubleSided&&n.enable(11),w.flipSided&&n.enable(12),w.useDepthPacking&&n.enable(13),w.dithering&&n.enable(14),w.transmission&&n.enable(15),w.sheen&&n.enable(16),w.opaque&&n.enable(17),w.pointsUvs&&n.enable(18),w.decodeVideoTexture&&n.enable(19),w.decodeVideoTextureEmissive&&n.enable(20),w.alphaToCoverage&&n.enable(21),w.numLightProbeGrids>0&&n.enable(22),w.hasPositionAttribute&&n.enable(23),x.push(n.mask)}function M(x){let w=p[x.type],L;if(w){let I=Ri[w];L=Fd.clone(I.uniforms)}else L=x.uniforms;return L}function v(x,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new SM(e,w,x,a),h.push(L),u.set(w,L)),L}function b(x){if(--x.usedTimes===0){let w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:C}}function AM(){let e=new WeakMap;function t(n){return e.has(n)}function i(n){let o=e.get(n);return o===void 0&&(o={},e.set(n,o)),o}function r(n){e.delete(n)}function a(n,o,l){e.get(n)[o]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:s}}function CM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function of(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function lf(){let e=[],t=0,i=[],r=[],a=[];function s(){t=0,i.length=0,r.length=0,a.length=0}function n(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,g,_,m,f){let y=e[t];return y===void 0?(y={id:c.id,object:c,geometry:p,material:g,materialVariant:n(c),groupOrder:_,renderOrder:c.renderOrder,z:m,group:f},e[t]=y):(y.id=c.id,y.object=c,y.geometry=p,y.material=g,y.materialVariant=n(c),y.groupOrder=_,y.renderOrder=c.renderOrder,y.z=m,y.group=f),t++,y}function l(c,p,g,_,m,f,y){y.reversedDepth===!0&&(m=-m);let M=o(c,p,g,_,m,f);g.transmission>0?r.push(M):g.transparent===!0?a.push(M):i.push(M)}function h(c,p,g,_,m,f){let y=o(c,p,g,_,m,f);g.transmission>0?r.unshift(y):g.transparent===!0?a.unshift(y):i.unshift(y)}function u(c,p){i.length>1&&i.sort(c||CM),r.length>1&&r.sort(p||of),a.length>1&&a.sort(p||of)}function d(){for(let c=t,p=e.length;c<p;c++){let g=e[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:r,transparent:a,init:s,push:l,unshift:h,finish:d,sort:u}}function RM(){let e=new WeakMap;function t(r,a){let s=e.get(r),n;return s===void 0?(n=new lf,e.set(r,[n])):a>=s.length?(n=new lf,s.push(n)):n=s[a],n}function i(){e=new WeakMap}return{get:t,dispose:i}}function IM(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new R,color:new fe};break;case"SpotLight":i={position:new R,direction:new R,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new R,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new R,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=i,i}}}function PM(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var LM=0;function NM(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function UM(e){let t=new IM,i=PM(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new R);let a=new R,s=new Ve,n=new Ve;function o(h){let u=0,d=0,c=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,M=0,v=0,b=0,E=0,C=0,x=0,w=0,L=0;h.sort(NM);for(let D=0,X=h.length;D<X;D++){let N=h[D],G=N.color,Z=N.intensity,k=N.distance,he=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===hr?he=N.shadow.map.texture:he=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=G.r*Z,d+=G.g*Z,c+=G.b*Z;else if(N.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(N.sh.coefficients[j],Z);L++}else if(N.isSunLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Y=N.shadow,ee=i.get(N);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[g]=ee,r.sunShadowMap[g]=he;let ke=Y.getViewportCount();for(let Ie=0;Ie<ke;Ie++)r.sunShadowMatrix[_+Ie]=Y.getMatrix(Ie),r.sunShadowCascade[_+Ie]=Y._cascadeData[Ie];_+=ke,g++}r.sun[p]=j,p++}else if(N.isDirectionalLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Y=N.shadow,ee=i.get(N);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,r.directionalShadow[m]=ee,r.directionalShadowMap[m]=he,r.directionalShadowMatrix[m]=N.shadow.matrix,b++}r.directional[m]=j,m++}else if(N.isSpotLight){let j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(G).multiplyScalar(Z),j.distance=k,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,r.spot[y]=j;let Y=N.shadow;if(N.map&&(r.spotLightMap[x]=N.map,x++,Y.updateMatrices(N),N.castShadow&&w++),r.spotLightMatrix[y]=Y.matrix,N.castShadow){let ee=i.get(N);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,r.spotShadow[y]=ee,r.spotShadowMap[y]=he,C++}y++}else if(N.isRectAreaLight){let j=t.get(N);j.color.copy(G).multiplyScalar(Z),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),r.rectArea[M]=j,M++}else if(N.isPointLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){let Y=N.shadow,ee=i.get(N);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,r.pointShadow[f]=ee,r.pointShadowMap[f]=he,r.pointShadowMatrix[f]=N.shadow.matrix,E++}r.point[f]=j,f++}else if(N.isHemisphereLight){let j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(Z),j.groundColor.copy(N.groundColor).multiplyScalar(Z),r.hemi[v]=j,v++}}M>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=c;let I=r.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==v||I.numSunShadows!==g||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==C||I.numSpotMaps!==x||I.numLightProbes!==L)&&(r.sun.length=p,r.directional.length=m,r.spot.length=y,r.rectArea.length=M,r.point.length=f,r.hemi.length=v,r.sunShadow.length=g,r.sunShadowMap.length=g,r.sunShadowMatrix.length=_,r.sunShadowCascade.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.directionalShadowMatrix.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.pointShadowMatrix.length=E,r.spotShadow.length=C,r.spotShadowMap.length=C,r.spotLightMatrix.length=C+x-w,r.spotLightMap.length=x,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=L,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=v,I.numSunShadows=g,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=C,I.numSpotMaps=x,I.numLightProbes=L,r.version=LM++)}function l(h,u){let d=0,c=0,p=0,g=0,_=0,m=0,f=u.matrixWorldInverse;for(let y=0,M=h.length;y<M;y++){let v=h[y];if(v.isSunLight){let b=r.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let b=r.directional[c];b.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(f),c++}else if(v.isSpotLight){let b=r.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(f),g++}else if(v.isRectAreaLight){let b=r.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),n.identity(),s.copy(v.matrixWorld),s.premultiply(f),n.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(n),b.halfHeight.applyMatrix4(n),_++}else if(v.isPointLight){let b=r.point[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let b=r.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:r}}function hf(e){let t=new UM(e),i=[],r=[],a=[];function s(c){d.camera=c,i.length=0,r.length=0,a.length=0}function n(c){i.push(c)}function o(c){r.push(c)}function l(c){a.push(c)}function h(){t.setup(i)}function u(c){t.setupView(i,c)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:h,setupLightsView:u,pushLight:n,pushShadow:o,pushLightProbeGrid:l}}function DM(e){let t=new WeakMap;function i(a,s=0){let n=t.get(a),o;return n===void 0?(o=new hf(e),t.set(a,[o])):s>=n.length?(o=new hf(e),n.push(o)):o=n[s],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BM=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],zM=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],uf=new Ve,Xs=new R,lu=new R;function GM(e,t,i){let r=new Ur,a=new te,s=new te,n=new gt,o=new Ph,l=new Lh,h={},u=i.maxTextureSize,d={[Gi]:Xt,[Xt]:Gi,[vi]:vi},c=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:OM,fragmentShader:FM}),p=c.clone();p.defines.HORIZONTAL_PASS=1;let g=new Xe;g.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new wt(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa;let f=this.type;this.render=function(E,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Eu&&(pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qa);let w=e.getRenderTarget(),L=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),D=e.state;D.setBlending(Li),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let X=f!==this.type;X&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=E.length;N<G;N++){let Z=E[N],k=Z.shadow;if(k===void 0){pe("WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);let he=k.getFrameExtents();a.multiply(he),s.copy(k.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/he.x),a.x=s.x*he.x,k.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/he.y),a.y=s.y*he.y,k.mapSize.y=s.y));let j=e.state.buffers.depth.getReversed();if(k.camera._reversedDepth=j,k.map===null||X===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===$r){if(Z.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ti(a.x,a.y,{format:hr,type:yi,minFilter:pt,magFilter:pt,generateMipmaps:!1}),k.map.texture.name=Z.name+".shadowMap",k.map.depthTexture=new Ca(a.x,a.y,qt),k.map.depthTexture.name=Z.name+".shadowMapDepth",k.map.depthTexture.format=Ui,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=xt,k.map.depthTexture.magFilter=xt}else Z.isPointLight?(k.map=new au(a.x),k.map.depthTexture=new id(a.x,ci)):(k.map=new ti(a.x,a.y),k.map.depthTexture=new Ca(a.x,a.y,ci)),k.map.depthTexture.name=Z.name+".shadowMap",k.map.depthTexture.format=Ui,this.type===Qa?(k.map.depthTexture.compareFunction=j?jn:Xn,k.map.depthTexture.minFilter=pt,k.map.depthTexture.magFilter=pt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=xt,k.map.depthTexture.magFilter=xt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==a.x||k.map.height!==a.y)&&k.map.setSize(a.x,a.y);let Y=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Z.isPointLight!==!0&&k.updateMatrices(Z,x);for(let ee=0;ee<Y;ee++){let ke=k.getCamera(ee);if(Z.isPointLight){let Ie=k.camera,ht=k.matrix,je=Z.distance||Ie.far;je!==Ie.far&&(Ie.far=je,Ie.updateProjectionMatrix()),Xs.setFromMatrixPosition(Z.matrixWorld),Ie.position.copy(Xs),lu.copy(Ie.position),lu.add(BM[ee]),Ie.up.copy(zM[ee]),Ie.lookAt(lu),Ie.updateMatrixWorld(),ht.makeTranslation(-Xs.x,-Xs.y,-Xs.z),uf.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),k._frustum.setFromProjectionMatrix(uf,Ie.coordinateSystem,Ie.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,ee),e.clear();else{ee===0&&(e.setRenderTarget(k.map),e.clear());let Ie=k.getViewport(ee);n.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),D.viewport(n)}r=k.getFrustum(ee),v(C,x,ke,Z,this.type)}k.isPointLightShadow!==!0&&this.type===$r&&y(k,x),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(w,L,I)};function y(E,C){let x=t.update(_);c.defines.VSM_SAMPLES!==E.blurSamples&&(c.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new ti(a.x,a.y,{format:hr,type:yi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),c.uniforms.shadow_pass.value=E.map.depthTexture,c.uniforms.resolution.value.set(E.map.width,E.map.height),c.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(C,null,x,c,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(C,null,x,p,_,null)}function M(E,C,x,w){let L=null,I=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)L=I;else if(L=x.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let D=L.uuid,X=C.uuid,N=h[D];N===void 0&&(N={},h[D]=N);let G=N[X];G===void 0&&(G=L.clone(),N[X]=G,C.addEventListener("dispose",b)),L=G}if(L.visible=C.visible,L.wireframe=C.wireframe,w===$r?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:d[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let D=e.properties.get(L);D.light=x}return L}function v(E,C,x,w,L){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===$r)&&(!E.frustumCulled||E.intersectsFrustum(r))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let D=t.update(E),X=E.material;if(Array.isArray(X)){let N=D.groups;for(let G=0,Z=N.length;G<Z;G++){let k=N[G],he=X[k.materialIndex];if(he&&he.visible){let j=M(E,he,w,L);E.onBeforeShadow(e,E,C,x,D,j,k),e.renderBufferDirect(x,null,D,j,E,k),E.onAfterShadow(e,E,C,x,D,j,k)}}}else if(X.visible){let N=M(E,X,w,L);E.onBeforeShadow(e,E,C,x,D,N,null),e.renderBufferDirect(x,null,D,N,E,null),E.onAfterShadow(e,E,C,x,D,N,null)}}let I=E.children;for(let D=0,X=I.length;D<X;D++)v(I[D],C,x,w,L)}function b(E){E.target.removeEventListener("dispose",b);for(let C in h){let x=h[C],w=E.target.uuid;w in x&&(x[w].dispose(),delete x[w])}}}function VM(e,t){function i(){let F=!1,J=new gt,ie=null,Me=new gt(0,0,0,0);return{setMask:function(Ce){ie!==Ce&&!F&&(e.colorMask(Ce,Ce,Ce,Ce),ie=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,ae,xe,ze,Pt){Pt===!0&&(Ce*=ze,ae*=ze,xe*=ze),J.set(Ce,ae,xe,ze),Me.equals(J)===!1&&(e.clearColor(Ce,ae,xe,ze),Me.copy(J))},reset:function(){F=!1,ie=null,Me.set(-1,0,0,0)}}}function r(){let F=!1,J=!1,ie=null,Me=null,Ce=null;return{setReversed:function(ae){if(J!==ae){let xe=t.get("EXT_clip_control");ae?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),J=ae;let ze=Ce;Ce=null,this.setClear(ze)}},getReversed:function(){return J},setTest:function(ae){ae?ne(e.DEPTH_TEST):Le(e.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!F&&(e.depthMask(ae),ie=ae)},setFunc:function(ae){if(J&&(ae=Qm[ae]),Me!==ae){switch(ae){case Zs:e.depthFunc(e.NEVER);break;case Js:e.depthFunc(e.ALWAYS);break;case Ks:e.depthFunc(e.LESS);break;case ea:e.depthFunc(e.LEQUAL);break;case $s:e.depthFunc(e.EQUAL);break;case Qs:e.depthFunc(e.GEQUAL);break;case en:e.depthFunc(e.GREATER);break;case tn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Me=ae}},setLocked:function(ae){F=ae},setClear:function(ae){Ce!==ae&&(Ce=ae,J&&(ae=1-ae),e.clearDepth(ae))},reset:function(){F=!1,ie=null,Me=null,Ce=null,J=!1}}}function a(){let F=!1,J=null,ie=null,Me=null,Ce=null,ae=null,xe=null,ze=null,Pt=null;return{setTest:function(nt){F||(nt?ne(e.STENCIL_TEST):Le(e.STENCIL_TEST))},setMask:function(nt){J!==nt&&!F&&(e.stencilMask(nt),J=nt)},setFunc:function(nt,Ii,zi){(ie!==nt||Me!==Ii||Ce!==zi)&&(e.stencilFunc(nt,Ii,zi),ie=nt,Me=Ii,Ce=zi)},setOp:function(nt,Ii,zi){(ae!==nt||xe!==Ii||ze!==zi)&&(e.stencilOp(nt,Ii,zi),ae=nt,xe=Ii,ze=zi)},setLocked:function(nt){F=nt},setClear:function(nt){Pt!==nt&&(e.clearStencil(nt),Pt=nt)},reset:function(){F=!1,J=null,ie=null,Me=null,Ce=null,ae=null,xe=null,ze=null,Pt=null}}}let s=new i,n=new r,o=new a,l=new WeakMap,h=new WeakMap,u={},d={},c={},p=new WeakMap,g=[],_=null,m=!1,f=null,y=null,M=null,v=null,b=null,E=null,C=null,x=new fe(0,0,0),w=0,L=!1,I=null,D=null,X=null,N=null,G=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,he=0,j=e.getParameter(e.VERSION);j.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=he>=1):j.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=he>=2);let Y=null,ee={},ke=e.getParameter(e.SCISSOR_BOX),Ie=e.getParameter(e.VIEWPORT),ht=new gt().fromArray(ke),je=new gt().fromArray(Ie);function q(F,J,ie,Me){let Ce=new Uint8Array(4),ae=e.createTexture();e.bindTexture(F,ae),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let xe=0;xe<ie;xe++)F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?e.texImage3D(J,0,e.RGBA,1,1,Me,0,e.RGBA,e.UNSIGNED_BYTE,Ce):e.texImage2D(J+xe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ce);return ae}let re={};re[e.TEXTURE_2D]=q(e.TEXTURE_2D,e.TEXTURE_2D,1),re[e.TEXTURE_CUBE_MAP]=q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[e.TEXTURE_2D_ARRAY]=q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),re[e.TEXTURE_3D]=q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),n.setClear(1),o.setClear(0),ne(e.DEPTH_TEST),n.setFunc(ea),Se(!1),Ae(ol),ne(e.CULL_FACE),oe(Li);function ne(F){u[F]!==!0&&(e.enable(F),u[F]=!0)}function Le(F){u[F]!==!1&&(e.disable(F),u[F]=!1)}function Fe(F,J){return c[F]!==J?(e.bindFramebuffer(F,J),c[F]=J,F===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=J),F===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=J),!0):!1}function de(F,J){let ie=g,Me=!1;if(F){ie=p.get(J),ie===void 0&&(ie=[],p.set(J,ie));let Ce=F.textures;if(ie.length!==Ce.length||ie[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,xe=Ce.length;ae<xe;ae++)ie[ae]=e.COLOR_ATTACHMENT0+ae;ie.length=Ce.length,Me=!0}}else ie[0]!==e.BACK&&(ie[0]=e.BACK,Me=!0);Me&&e.drawBuffers(ie)}function $e(F){return _!==F?(e.useProgram(F),_=F,!0):!1}let Q={[Tr]:e.FUNC_ADD,[Cu]:e.FUNC_SUBTRACT,[Ru]:e.FUNC_REVERSE_SUBTRACT};Q[Iu]=e.MIN,Q[Pu]=e.MAX;let $={[Lu]:e.ZERO,[Nu]:e.ONE,[Uu]:e.SRC_COLOR,[cl]:e.SRC_ALPHA,[Gu]:e.SRC_ALPHA_SATURATE,[Bu]:e.DST_COLOR,[Ou]:e.DST_ALPHA,[Du]:e.ONE_MINUS_SRC_COLOR,[dl]:e.ONE_MINUS_SRC_ALPHA,[zu]:e.ONE_MINUS_DST_COLOR,[Fu]:e.ONE_MINUS_DST_ALPHA,[Vu]:e.CONSTANT_COLOR,[ku]:e.ONE_MINUS_CONSTANT_COLOR,[Hu]:e.CONSTANT_ALPHA,[Wu]:e.ONE_MINUS_CONSTANT_ALPHA};function oe(F,J,ie,Me,Ce,ae,xe,ze,Pt,nt){if(F===Li){m===!0&&(Le(e.BLEND),m=!1);return}if(m===!1&&(ne(e.BLEND),m=!0),F!==Au){if(F!==f||nt!==L){if((y!==Tr||b!==Tr)&&(e.blendEquation(e.FUNC_ADD),y=Tr,b=Tr),nt)switch(F){case Qr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ll:e.blendFunc(e.ONE,e.ONE);break;case hl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ul:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Pe("WebGLState: Invalid blending: ",F);break}else switch(F){case Qr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ll:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case hl:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",F);break}M=null,v=null,E=null,C=null,x.set(0,0,0),w=0,f=F,L=nt}return}Ce=Ce||J,ae=ae||ie,xe=xe||Me,(J!==y||Ce!==b)&&(e.blendEquationSeparate(Q[J],Q[Ce]),y=J,b=Ce),(ie!==M||Me!==v||ae!==E||xe!==C)&&(e.blendFuncSeparate($[ie],$[Me],$[ae],$[xe]),M=ie,v=Me,E=ae,C=xe),(ze.equals(x)===!1||Pt!==w)&&(e.blendColor(ze.r,ze.g,ze.b,Pt),x.copy(ze),w=Pt),f=F,L=!1}function ye(F,J){F.side===vi?Le(e.CULL_FACE):ne(e.CULL_FACE);let ie=F.side===Xt;J&&(ie=!ie),Se(ie),F.blending===Qr&&F.transparent===!1?oe(Li):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),n.setFunc(F.depthFunc),n.setTest(F.depthTest),n.setMask(F.depthWrite),s.setMask(F.colorWrite);let Me=F.stencilWrite;o.setTest(Me),Me&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),We(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(e.SAMPLE_ALPHA_TO_COVERAGE):Le(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(F){I!==F&&(F?e.frontFace(e.CW):e.frontFace(e.CCW),I=F)}function Ae(F){F!==Tu?(ne(e.CULL_FACE),F!==D&&(F===ol?e.cullFace(e.BACK):F===wu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Le(e.CULL_FACE),D=F}function Oe(F){F!==X&&(k&&e.lineWidth(F),X=F)}function We(F,J,ie){F?(ne(e.POLYGON_OFFSET_FILL),(N!==J||G!==ie)&&(N=J,G=ie,n.getReversed()&&(J=-J),e.polygonOffset(J,ie))):Le(e.POLYGON_OFFSET_FILL)}function Ye(F){F?ne(e.SCISSOR_TEST):Le(e.SCISSOR_TEST)}function P(F){F===void 0&&(F=e.TEXTURE0+Z-1),Y!==F&&(e.activeTexture(F),Y=F)}function mt(F,J,ie){ie===void 0&&(Y===null?ie=e.TEXTURE0+Z-1:ie=Y);let Me=ee[ie];Me===void 0&&(Me={type:void 0,texture:void 0},ee[ie]=Me),(Me.type!==F||Me.texture!==J)&&(Y!==ie&&(e.activeTexture(ie),Y=ie),e.bindTexture(F,J||re[F]),Me.type=F,Me.texture=J)}function it(){let F=ee[Y];F!==void 0&&F.type!==void 0&&(e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function et(){try{e.compressedTexImage2D(...arguments)}catch(F){Pe("WebGLState:",F)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(F){Pe("WebGLState:",F)}}function S(){try{e.texSubImage2D(...arguments)}catch(F){Pe("WebGLState:",F)}}function U(){try{e.texSubImage3D(...arguments)}catch(F){Pe("WebGLState:",F)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(F){Pe("WebGLState:",F)}}function K(){try{e.compressedTexSubImage3D(...arguments)}catch(F){Pe("WebGLState:",F)}}function ce(){try{e.texStorage2D(...arguments)}catch(F){Pe("WebGLState:",F)}}function ge(){try{e.texStorage3D(...arguments)}catch(F){Pe("WebGLState:",F)}}function B(){try{e.texImage2D(...arguments)}catch(F){Pe("WebGLState:",F)}}function le(){try{e.texImage3D(...arguments)}catch(F){Pe("WebGLState:",F)}}function _e(F){return d[F]!==void 0?d[F]:e.getParameter(F)}function Ee(F,J){d[F]!==J&&(e.pixelStorei(F,J),d[F]=J)}function se(F){ht.equals(F)===!1&&(e.scissor(F.x,F.y,F.z,F.w),ht.copy(F))}function Ue(F){je.equals(F)===!1&&(e.viewport(F.x,F.y,F.z,F.w),je.copy(F))}function De(F,J){let ie=h.get(J);ie===void 0&&(ie=new WeakMap,h.set(J,ie));let Me=ie.get(F);Me===void 0&&(Me=e.getUniformBlockIndex(J,F.name),ie.set(F,Me))}function He(F,J){let ie=h.get(J).get(F);l.get(J)!==ie&&(e.uniformBlockBinding(J,ie,F.__bindingPointIndex),l.set(J,ie))}function st(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),n.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,ee={},c={},p=new WeakMap,g=[],_=null,m=!1,f=null,y=null,M=null,v=null,b=null,E=null,C=null,x=new fe(0,0,0),w=0,L=!1,I=null,D=null,X=null,N=null,G=null,ht.set(0,0,e.canvas.width,e.canvas.height),je.set(0,0,e.canvas.width,e.canvas.height),s.reset(),n.reset(),o.reset()}return{buffers:{color:s,depth:n,stencil:o},enable:ne,disable:Le,bindFramebuffer:Fe,drawBuffers:de,useProgram:$e,setBlending:oe,setMaterial:ye,setFlipSided:Se,setCullFace:Ae,setLineWidth:Oe,setPolygonOffset:We,setScissorTest:Ye,activeTexture:P,bindTexture:mt,unbindTexture:it,compressedTexImage2D:et,compressedTexImage3D:A,texImage2D:B,texImage3D:le,pixelStorei:Ee,getParameter:_e,updateUBOMapping:De,uniformBlockBinding:He,texStorage2D:ce,texStorage3D:ge,texSubImage2D:S,texSubImage3D:U,compressedTexSubImage2D:H,compressedTexSubImage3D:K,scissor:se,viewport:Ue,reset:st}}function kM(e,t,i,r,a,s,n){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new te,u=new WeakMap,d=new Set,c,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return g?new OffscreenCanvas(A,S):ds("canvas")}function m(A,S,U){let H=1,K=et(A);if((K.width>U||K.height>U)&&(H=U/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ce=Math.floor(H*K.width),ge=Math.floor(H*K.height);c===void 0&&(c=_(ce,ge));let B=S?_(ce,ge):c;return B.width=ce,B.height=ge,B.getContext("2d").drawImage(A,0,0,ce,ge),pe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ce+"x"+ge+")."),B}else return"data"in A&&pe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function f(A){return A.generateMipmaps}function y(A){e.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(A,S,U,H,K,ce=!1){if(A!==null){if(e[A]!==void 0)return e[A];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ge;H&&(ge=t.get("EXT_texture_norm16"),ge||pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=S;if(S===e.RED&&(U===e.FLOAT&&(B=e.R32F),U===e.HALF_FLOAT&&(B=e.R16F),U===e.UNSIGNED_BYTE&&(B=e.R8),U===e.UNSIGNED_SHORT&&ge&&(B=ge.R16_EXT),U===e.SHORT&&ge&&(B=ge.R16_SNORM_EXT)),S===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.R8UI),U===e.UNSIGNED_SHORT&&(B=e.R16UI),U===e.UNSIGNED_INT&&(B=e.R32UI),U===e.BYTE&&(B=e.R8I),U===e.SHORT&&(B=e.R16I),U===e.INT&&(B=e.R32I)),S===e.RG&&(U===e.FLOAT&&(B=e.RG32F),U===e.HALF_FLOAT&&(B=e.RG16F),U===e.UNSIGNED_BYTE&&(B=e.RG8),U===e.UNSIGNED_SHORT&&ge&&(B=ge.RG16_EXT),U===e.SHORT&&ge&&(B=ge.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RG8UI),U===e.UNSIGNED_SHORT&&(B=e.RG16UI),U===e.UNSIGNED_INT&&(B=e.RG32UI),U===e.BYTE&&(B=e.RG8I),U===e.SHORT&&(B=e.RG16I),U===e.INT&&(B=e.RG32I)),S===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RGB8UI),U===e.UNSIGNED_SHORT&&(B=e.RGB16UI),U===e.UNSIGNED_INT&&(B=e.RGB32UI),U===e.BYTE&&(B=e.RGB8I),U===e.SHORT&&(B=e.RGB16I),U===e.INT&&(B=e.RGB32I)),S===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(B=e.RGBA16UI),U===e.UNSIGNED_INT&&(B=e.RGBA32UI),U===e.BYTE&&(B=e.RGBA8I),U===e.SHORT&&(B=e.RGBA16I),U===e.INT&&(B=e.RGBA32I)),S===e.RGB&&(U===e.UNSIGNED_SHORT&&ge&&(B=ge.RGB16_EXT),U===e.SHORT&&ge&&(B=ge.RGB16_SNORM_EXT),U===e.UNSIGNED_INT_5_9_9_9_REV&&(B=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(B=e.R11F_G11F_B10F)),S===e.RGBA){let le=ce?cs:Ke.getTransfer(K);U===e.FLOAT&&(B=e.RGBA32F),U===e.HALF_FLOAT&&(B=e.RGBA16F),U===e.UNSIGNED_BYTE&&(B=le===ot?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT&&ge&&(B=ge.RGBA16_EXT),U===e.SHORT&&ge&&(B=ge.RGBA16_SNORM_EXT),U===e.UNSIGNED_SHORT_4_4_4_4&&(B=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(B=e.RGB5_A1)}return(B===e.R16F||B===e.R32F||B===e.RG16F||B===e.RG32F||B===e.RGBA16F||B===e.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function b(A,S){let U;return A?S===null||S===ci||S===sa?U=e.DEPTH24_STENCIL8:S===qt?U=e.DEPTH32F_STENCIL8:S===aa&&(U=e.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ci||S===sa?U=e.DEPTH_COMPONENT24:S===qt?U=e.DEPTH_COMPONENT32F:S===aa&&(U=e.DEPTH_COMPONENT16),U}function E(A,S){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==xt&&A.minFilter!==pt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){let S=A.target;S.removeEventListener("dispose",C),w(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(A){let S=A.target;S.removeEventListener("dispose",x),I(S)}function w(A){let S=r.get(A);if(S.__webglInit===void 0)return;let U=A.source,H=p.get(U);if(H){let K=H[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(A),Object.keys(H).length===0&&p.delete(U)}r.remove(A)}function L(A){let S=r.get(A);e.deleteTexture(S.__webglTexture);let U=A.source,H=p.get(U);delete H[S.__cacheKey],n.memory.textures--}function I(A){let S=r.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),r.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let K=0;K<S.__webglFramebuffer[H].length;K++)e.deleteFramebuffer(S.__webglFramebuffer[H][K]);else e.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)e.deleteFramebuffer(S.__webglFramebuffer[H]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let U=A.textures;for(let H=0,K=U.length;H<K;H++){let ce=r.get(U[H]);ce.__webglTexture&&(e.deleteTexture(ce.__webglTexture),n.memory.textures--),r.remove(U[H])}r.remove(A)}let D=0;function X(){D=0}function N(){return D}function G(A){D=A}function Z(){let A=D;return A>=a.maxTextures&&pe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+a.maxTextures),D+=1,A}function k(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function he(A,S){let U=r.get(A);if(A.isVideoTexture&&mt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){let H=A.image;if(H===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(U,A,S);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+S)}function j(A,S){let U=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Le(U,A,S);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+S)}function Y(A,S){let U=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Le(U,A,S);return}i.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+S)}function ee(A,S){let U=r.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){Fe(U,A,S);return}i.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+S)}let ke={[or]:e.REPEAT,[jt]:e.CLAMP_TO_EDGE,[ia]:e.MIRRORED_REPEAT},Ie={[xt]:e.NEAREST,[an]:e.NEAREST_MIPMAP_NEAREST,[wr]:e.NEAREST_MIPMAP_LINEAR,[pt]:e.LINEAR,[ra]:e.LINEAR_MIPMAP_NEAREST,[ui]:e.LINEAR_MIPMAP_LINEAR},ht={[tc]:e.NEVER,[nc]:e.ALWAYS,[ic]:e.LESS,[Xn]:e.LEQUAL,[rc]:e.EQUAL,[jn]:e.GEQUAL,[ac]:e.GREATER,[sc]:e.NOTEQUAL};function je(A,S){if(S.type===qt&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===pt||S.magFilter===ra||S.magFilter===wr||S.magFilter===ui||S.minFilter===pt||S.minFilter===ra||S.minFilter===wr||S.minFilter===ui)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,ke[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,ke[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,ke[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,Ie[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,Ie[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xt||S.minFilter!==wr&&S.minFilter!==ui||S.type===qt&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function q(A,S){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));let H=S.source,K=p.get(H);K===void 0&&(K={},p.set(H,K));let ce=k(S);if(ce!==A.__cacheKey){K[ce]===void 0&&(K[ce]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,U=!0),K[ce].usedTimes++;let ge=K[A.__cacheKey];ge!==void 0&&(K[A.__cacheKey].usedTimes--,ge.usedTimes===0&&L(S)),A.__cacheKey=ce,A.__webglTexture=K[ce].texture}return U}function re(A,S,U){return Math.floor(Math.floor(A/U)/S)}function ne(A,S,U,H){let K=A.updateRanges;if(K.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,U,H,S.data);else{K.sort((_e,Ee)=>_e.start-Ee.start);let ce=0;for(let _e=1;_e<K.length;_e++){let Ee=K[ce],se=K[_e],Ue=Ee.start+Ee.count,De=re(se.start,S.width,4),He=re(Ee.start,S.width,4);se.start<=Ue+1&&De===He&&re(se.start+se.count-1,S.width,4)===De?Ee.count=Math.max(Ee.count,se.start+se.count-Ee.start):(++ce,K[ce]=se)}K.length=ce+1;let ge=i.getParameter(e.UNPACK_ROW_LENGTH),B=i.getParameter(e.UNPACK_SKIP_PIXELS),le=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let _e=0,Ee=K.length;_e<Ee;_e++){let se=K[_e],Ue=Math.floor(se.start/4),De=Math.ceil(se.count/4),He=Ue%S.width,st=Math.floor(Ue/S.width),F=De;i.pixelStorei(e.UNPACK_SKIP_PIXELS,He),i.pixelStorei(e.UNPACK_SKIP_ROWS,st),i.texSubImage2D(e.TEXTURE_2D,0,He,st,F,1,U,H,S.data)}A.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ge),i.pixelStorei(e.UNPACK_SKIP_PIXELS,B),i.pixelStorei(e.UNPACK_SKIP_ROWS,le)}}function Le(A,S,U){let H=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=e.TEXTURE_3D);let K=q(A,S),ce=S.source;i.bindTexture(H,A.__webglTexture,e.TEXTURE0+U);let ge=r.get(ce);if(ce.version!==ge.__version||K===!0){if(i.activeTexture(e.TEXTURE0+U),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){let J=Ke.getPrimaries(Ke.workingColorSpace),ie=S.colorSpace===ki?null:Ke.getPrimaries(S.colorSpace),Me=S.colorSpace===ki||J===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let B=m(S.image,!1,a.maxTextureSize);B=it(S,B);let le=s.convert(S.format,S.colorSpace),_e=s.convert(S.type),Ee=v(S.internalFormat,le,_e,S.normalized,S.colorSpace,S.isVideoTexture);je(H,S);let se,Ue=S.mipmaps,De=S.isVideoTexture!==!0,He=ge.__version===void 0||K===!0,st=ce.dataReady,F=E(S,B);if(S.isDepthTexture)Ee=b(S.format===lr,S.type),He&&(De?i.texStorage2D(e.TEXTURE_2D,1,Ee,B.width,B.height):i.texImage2D(e.TEXTURE_2D,0,Ee,B.width,B.height,0,le,_e,null));else if(S.isDataTexture)if(Ue.length>0){De&&He&&i.texStorage2D(e.TEXTURE_2D,F,Ee,Ue[0].width,Ue[0].height);for(let J=0,ie=Ue.length;J<ie;J++)se=Ue[J],De?st&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,se.width,se.height,le,_e,se.data):i.texImage2D(e.TEXTURE_2D,J,Ee,se.width,se.height,0,le,_e,se.data);S.generateMipmaps=!1}else De?(He&&i.texStorage2D(e.TEXTURE_2D,F,Ee,B.width,B.height),st&&ne(S,B,le,_e)):i.texImage2D(e.TEXTURE_2D,0,Ee,B.width,B.height,0,le,_e,B.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&He&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,Ee,Ue[0].width,Ue[0].height,B.depth);for(let J=0,ie=Ue.length;J<ie;J++)if(se=Ue[J],S.format!==Yt)if(le!==null)if(De){if(st)if(S.layerUpdates.size>0){let Me=$h(se.width,se.height,S.format,S.type);for(let Ce of S.layerUpdates){let ae=se.data.subarray(Ce*Me/se.data.BYTES_PER_ELEMENT,(Ce+1)*Me/se.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,Ce,se.width,se.height,1,le,ae)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,se.width,se.height,B.depth,le,se.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,Ee,se.width,se.height,B.depth,0,se.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?st&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,se.width,se.height,B.depth,le,_e,se.data):i.texImage3D(e.TEXTURE_2D_ARRAY,J,Ee,se.width,se.height,B.depth,0,le,_e,se.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{De&&He&&i.texStorage2D(e.TEXTURE_2D,F,Ee,Ue[0].width,Ue[0].height);for(let J=0,ie=Ue.length;J<ie;J++)se=Ue[J],S.format!==Yt?le!==null?De?st&&i.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,se.width,se.height,le,se.data):i.compressedTexImage2D(e.TEXTURE_2D,J,Ee,se.width,se.height,0,se.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?st&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,se.width,se.height,le,_e,se.data):i.texImage2D(e.TEXTURE_2D,J,Ee,se.width,se.height,0,le,_e,se.data)}else if(S.isDataArrayTexture)if(De){if(He&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,Ee,B.width,B.height,B.depth),st)if(S.layerUpdates.size>0){let J=$h(B.width,B.height,S.format,S.type);for(let ie of S.layerUpdates){let Me=B.data.subarray(ie*J/B.data.BYTES_PER_ELEMENT,(ie+1)*J/B.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ie,B.width,B.height,1,le,_e,Me)}S.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,le,_e,B.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ee,B.width,B.height,B.depth,0,le,_e,B.data);else if(S.isData3DTexture)De?(He&&i.texStorage3D(e.TEXTURE_3D,F,Ee,B.width,B.height,B.depth),st&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,le,_e,B.data)):i.texImage3D(e.TEXTURE_3D,0,Ee,B.width,B.height,B.depth,0,le,_e,B.data);else if(S.isFramebufferTexture){if(He)if(De)i.texStorage2D(e.TEXTURE_2D,F,Ee,B.width,B.height);else{let J=B.width,ie=B.height;for(let Me=0;Me<F;Me++)i.texImage2D(e.TEXTURE_2D,Me,Ee,J,ie,0,le,_e,null),J>>=1,ie>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let J=e.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),B.parentNode!==J){J.appendChild(B),d.add(S),J.onpaint=ie=>{let Me=ie.changedElements;for(let Ce of d)Me.includes(Ce.image)&&(Ce.needsUpdate=!0)},J.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,B);else{let ie=e.RGBA,Me=e.RGBA,Ce=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ie,Me,Ce,B)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(De&&He){let J=et(Ue[0]);i.texStorage2D(e.TEXTURE_2D,F,Ee,J.width,J.height)}for(let J=0,ie=Ue.length;J<ie;J++)se=Ue[J],De?st&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,le,_e,se):i.texImage2D(e.TEXTURE_2D,J,Ee,le,_e,se);S.generateMipmaps=!1}else if(De){if(He){let J=et(B);i.texStorage2D(e.TEXTURE_2D,F,Ee,J.width,J.height)}st&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,le,_e,B)}else i.texImage2D(e.TEXTURE_2D,0,Ee,le,_e,B);f(S)&&y(H),ge.__version=ce.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Fe(A,S,U){if(S.image.length!==6)return;let H=q(A,S),K=S.source;i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+U);let ce=r.get(K);if(K.version!==ce.__version||H===!0){i.activeTexture(e.TEXTURE0+U);let ge=Ke.getPrimaries(Ke.workingColorSpace),B=S.colorSpace===ki?null:Ke.getPrimaries(S.colorSpace),le=S.colorSpace===ki||ge===B?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let _e=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,se=[];for(let ae=0;ae<6;ae++)!_e&&!Ee?se[ae]=m(S.image[ae],!0,a.maxCubemapSize):se[ae]=Ee?S.image[ae].image:S.image[ae],se[ae]=it(S,se[ae]);let Ue=se[0],De=s.convert(S.format,S.colorSpace),He=s.convert(S.type),st=v(S.internalFormat,De,He,S.normalized,S.colorSpace),F=S.isVideoTexture!==!0,J=ce.__version===void 0||H===!0,ie=K.dataReady,Me=E(S,Ue);je(e.TEXTURE_CUBE_MAP,S);let Ce;if(_e){F&&J&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Me,st,Ue.width,Ue.height);for(let ae=0;ae<6;ae++){Ce=se[ae].mipmaps;for(let xe=0;xe<Ce.length;xe++){let ze=Ce[xe];S.format!==Yt?De!==null?F?ie&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,0,0,ze.width,ze.height,De,ze.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,st,ze.width,ze.height,0,ze.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,0,0,ze.width,ze.height,De,He,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,st,ze.width,ze.height,0,De,He,ze.data)}}}else{if(Ce=S.mipmaps,F&&J){Ce.length>0&&Me++;let ae=et(se[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Me,st,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ee){F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,se[ae].width,se[ae].height,De,He,se[ae].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,st,se[ae].width,se[ae].height,0,De,He,se[ae].data);for(let xe=0;xe<Ce.length;xe++){let ze=Ce[xe].image[ae].image;F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,0,0,ze.width,ze.height,De,He,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,st,ze.width,ze.height,0,De,He,ze.data)}}else{F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,He,se[ae]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,st,De,He,se[ae]);for(let xe=0;xe<Ce.length;xe++){let ze=Ce[xe];F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,0,0,De,He,ze.image[ae]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,st,De,He,ze.image[ae])}}}f(S)&&y(e.TEXTURE_CUBE_MAP),ce.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function de(A,S,U,H,K,ce){let ge=s.convert(U.format,U.colorSpace),B=s.convert(U.type),le=v(U.internalFormat,ge,B,U.normalized,U.colorSpace),_e=r.get(S),Ee=r.get(U);if(Ee.__renderTarget=S,!_e.__hasExternalTextures){let se=Math.max(1,S.width>>ce),Ue=Math.max(1,S.height>>ce);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?i.texImage3D(K,ce,le,se,Ue,S.depth,0,ge,B,null):i.texImage2D(K,ce,le,se,Ue,0,ge,B,null)}i.bindFramebuffer(e.FRAMEBUFFER,A),P(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,K,Ee.__webglTexture,0,Ye(S)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,K,Ee.__webglTexture,ce),i.bindFramebuffer(e.FRAMEBUFFER,null)}function $e(A,S,U){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){let H=S.depthTexture,K=H&&H.isDepthTexture?H.type:null,ce=b(S.stencilBuffer,K),ge=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;P(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ye(S),ce,S.width,S.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ye(S),ce,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ce,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ge,e.RENDERBUFFER,A)}else{let H=S.textures;for(let K=0;K<H.length;K++){let ce=H[K],ge=s.convert(ce.format,ce.colorSpace),B=s.convert(ce.type),le=v(ce.internalFormat,ge,B,ce.normalized,ce.colorSpace);P(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ye(S),le,S.width,S.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ye(S),le,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,le,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Q(A,S,U){let H=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=r.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),je(e.TEXTURE_CUBE_MAP,S.depthTexture);let _e=s.convert(S.depthTexture.format),Ee=s.convert(S.depthTexture.type),se;S.depthTexture.format===Ui?se=e.DEPTH_COMPONENT24:S.depthTexture.format===lr&&(se=e.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,se,S.width,S.height,0,_e,Ee,null)}}else he(S.depthTexture,0);let ce=K.__webglTexture,ge=Ye(S),B=H?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,le=S.depthTexture.format===lr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ui)P(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,le,B,ce,0,ge):e.framebufferTexture2D(e.FRAMEBUFFER,le,B,ce,0);else if(S.depthTexture.format===lr)P(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,le,B,ce,0,ge):e.framebufferTexture2D(e.FRAMEBUFFER,le,B,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(A){let S=r.get(A),U=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),H){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=H}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(U)for(let H=0;H<6;H++)Q(S.__webglFramebuffer[H],A,H);else{let H=A.texture.mipmaps;H&&H.length>0?Q(S.__webglFramebuffer[0],A,0):Q(S.__webglFramebuffer,A,0)}else if(U){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]===void 0)S.__webglDepthbuffer[H]=e.createRenderbuffer(),$e(S.__webglDepthbuffer[H],A,!1);else{let K=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,ce),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,ce)}}else{let H=A.texture.mipmaps;if(H&&H.length>0?i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),$e(S.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ce),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,ce)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(A,S,U){let H=r.get(A);S!==void 0&&de(H.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&$(A)}function ye(A){let S=A.texture,U=r.get(A),H=r.get(S);A.addEventListener("dispose",x);let K=A.textures,ce=A.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=S.version,n.memory.textures++),ce){U.__webglFramebuffer=[];for(let B=0;B<6;B++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[B]=[];for(let le=0;le<S.mipmaps.length;le++)U.__webglFramebuffer[B][le]=e.createFramebuffer()}else U.__webglFramebuffer[B]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let B=0;B<S.mipmaps.length;B++)U.__webglFramebuffer[B]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(ge)for(let B=0,le=K.length;B<le;B++){let _e=r.get(K[B]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),n.memory.textures++)}if(A.samples>0&&P(A)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let B=0;B<K.length;B++){let le=K[B];U.__webglColorRenderbuffer[B]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[B]);let _e=s.convert(le.format,le.colorSpace),Ee=s.convert(le.type),se=v(le.internalFormat,_e,Ee,le.normalized,le.colorSpace,A.isXRRenderTarget===!0),Ue=Ye(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ue,se,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+B,e.RENDERBUFFER,U.__webglColorRenderbuffer[B])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),$e(U.__webglDepthRenderbuffer,A,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ce){i.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),je(e.TEXTURE_CUBE_MAP,S);for(let B=0;B<6;B++)if(S.mipmaps&&S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)de(U.__webglFramebuffer[B][le],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,le);else de(U.__webglFramebuffer[B],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);f(S)&&y(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ge){for(let B=0,le=K.length;B<le;B++){let _e=K[B],Ee=r.get(_e),se=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(se,Ee.__webglTexture),je(se,_e),de(U.__webglFramebuffer,A,_e,e.COLOR_ATTACHMENT0+B,se,0),f(_e)&&y(se)}i.unbindTexture()}else{let B=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(B=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(B,H.__webglTexture),je(B,S),S.mipmaps&&S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)de(U.__webglFramebuffer[le],A,S,e.COLOR_ATTACHMENT0,B,le);else de(U.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,B,0);f(S)&&y(B),i.unbindTexture()}A.depthBuffer&&$(A)}function Se(A){let S=A.textures;for(let U=0,H=S.length;U<H;U++){let K=S[U];if(f(K)){let ce=M(A),ge=r.get(K).__webglTexture;i.bindTexture(ce,ge),y(ce),i.unbindTexture()}}}let Ae=[],Oe=[];function We(A){if(A.samples>0){if(P(A)===!1){let S=A.textures,U=A.width,H=A.height,K=e.COLOR_BUFFER_BIT,ce=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ge=r.get(A),B=S.length>1;if(B)for(let _e=0;_e<S.length;_e++)i.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let le=A.texture.mipmaps;le&&le.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),B){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let Ee=r.get(S[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ee,0)}e.blitFramebuffer(0,0,U,H,0,0,U,H,K,e.NEAREST),l===!0&&(Ae.length=0,Oe.length=0,Ae.push(e.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Ae.push(ce),Oe.push(ce),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Oe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),B)for(let _e=0;_e<S.length;_e++){i.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let Ee=r.get(S[_e]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,Ee,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Ye(A){return Math.min(a.maxSamples,A.samples)}function P(A){let S=r.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(A){let S=n.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function it(A,S){let U=A.colorSpace,H=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==ei&&U!==ki&&(Ke.getTransfer(U)===ot?(H!==Yt||K!==Qt)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",U)),S}function et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=X,this.getTextureUnits=N,this.setTextureUnits=G,this.setTexture2D=he,this.setTexture2DArray=j,this.setTexture3D=Y,this.setTextureCube=ee,this.rebindTextures=oe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=de,this.useMultisampledRTT=P,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function cf(e,t){function i(r,a=ki){let s,n=Ke.getTransfer(a);if(r===Qt)return e.UNSIGNED_BYTE;if(r===nn)return e.UNSIGNED_SHORT_4_4_4_4;if(r===on)return e.UNSIGNED_SHORT_5_5_5_1;if(r===bl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Tl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Sl)return e.BYTE;if(r===Ml)return e.SHORT;if(r===aa)return e.UNSIGNED_SHORT;if(r===sn)return e.INT;if(r===ci)return e.UNSIGNED_INT;if(r===qt)return e.FLOAT;if(r===yi)return e.HALF_FLOAT;if(r===wl)return e.ALPHA;if(r===El)return e.RGB;if(r===Yt)return e.RGBA;if(r===Ui)return e.DEPTH_COMPONENT;if(r===lr)return e.DEPTH_STENCIL;if(r===ln)return e.RED;if(r===rs)return e.RED_INTEGER;if(r===hr)return e.RG;if(r===hn)return e.RG_INTEGER;if(r===un)return e.RGBA_INTEGER;if(r===as||r===ss||r===ns||r===os)if(n===ot)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===as)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===as)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cn||r===dn||r===pn||r===fn)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===cn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mn||r===gn||r===_n||r===vn||r===xn||r===ls||r===yn)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===mn||r===gn)return n===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===_n)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(r===vn)return s.COMPRESSED_R11_EAC;if(r===xn)return s.COMPRESSED_SIGNED_R11_EAC;if(r===ls)return s.COMPRESSED_RG11_EAC;if(r===yn)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Sn||r===Mn||r===bn||r===Tn||r===wn||r===En||r===An||r===Cn||r===Rn||r===In||r===Pn||r===Ln||r===Nn||r===Un)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Sn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===En)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===An)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===In)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ln)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nn)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Un)return n===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dn||r===On||r===Fn)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Dn)return n===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===On)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fn)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bn||r===zn||r===hs||r===Gn)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===Bn)return s.COMPRESSED_RED_RGTC1_EXT;if(r===zn)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gn)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sa?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var HM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,XM=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ph(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new fi({vertexShader:HM,fragmentShader:WM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jM=class extends Si{constructor(e,t){super();let i=this,r=null,a=1,s=null,n="local-floor",o=1,l=null,h=null,u=null,d=null,c=null,p=null,g=typeof XRWebGLBinding<"u",_=new XM,m={},f=t.getContextAttributes(),y=null,M=null,v=[],b=[],E=new te,C=null,x=null,w=new Ft;w.viewport=new gt;let L=new Ft;L.viewport=new gt;let I=[w,L],D=new xp,X=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=v[q];return re===void 0&&(re=new Qn,v[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=v[q];return re===void 0&&(re=new Qn,v[q]=re),re.getGripSpace()},this.getHand=function(q){let re=v[q];return re===void 0&&(re=new Qn,v[q]=re),re.getHandSpace()};function G(q){let re=b.indexOf(q.inputSource);if(re===-1)return;let ne=v[re];ne!==void 0&&(ne.update(q.inputSource,q.frame,l||s),ne.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",k);for(let q=0;q<v.length;q++){let re=b[q];re!==null&&(b[q]=null,v[q].disconnect(re))}X=null,N=null,_.reset();for(let q in m)delete m[q];if(e.setRenderTarget(y),c=null,d=null,u=null,r=null,M=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),x!==null){let q=x.camera;q.fov=x.fov,q.zoom=x.zoom,q.updateProjectionMatrix(),x=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){n=q,i.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",k),f.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ne=null,Le=null;f.depth&&(Le=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=f.stencil?lr:Ui,ne=f.stencil?sa:ci);let Fe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ti(d.textureWidth,d.textureHeight,{format:Yt,type:Qt,depthTexture:new Ca(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let re={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};c=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),M=new ti(c.framebufferWidth,c.framebufferHeight,{format:Yt,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await r.requestReferenceSpace(n),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(q){for(let re=0;re<q.removed.length;re++){let ne=q.removed[re],Le=b.indexOf(ne);Le>=0&&(b[Le]=null,v[Le].disconnect(ne))}for(let re=0;re<q.added.length;re++){let ne=q.added[re],Le=b.indexOf(ne);if(Le===-1){for(let de=0;de<v.length;de++)if(de>=b.length){b.push(ne),Le=de;break}else if(b[de]===null){b[de]=ne,Le=de;break}if(Le===-1)break}let Fe=v[Le];Fe&&Fe.connect(ne)}}let he=new R,j=new R;function Y(q,re,ne){he.setFromMatrixPosition(re.matrixWorld),j.setFromMatrixPosition(ne.matrixWorld);let Le=he.distanceTo(j),Fe=re.projectionMatrix.elements,de=ne.projectionMatrix.elements,$e=Fe[14]/(Fe[10]-1),Q=Fe[14]/(Fe[10]+1),$=(Fe[9]+1)/Fe[5],oe=(Fe[9]-1)/Fe[5],ye=(Fe[8]-1)/Fe[0],Se=(de[8]+1)/de[0],Ae=$e*ye,Oe=$e*Se,We=Le/(-ye+Se),Ye=We*-ye;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ye),q.translateZ(We),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Fe[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let P=$e+We,mt=Q+We,it=Ae-Ye,et=Oe+(Le-Ye),A=$*Q/mt*P,S=oe*Q/mt*P;q.projectionMatrix.makePerspective(it,et,A,S,P,mt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ee(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let re=q.near,ne=q.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),D.near=L.near=w.near=re,D.far=L.far=w.far=ne,(X!==D.near||N!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),X=D.near,N=D.far),D.layers.mask=q.layers.mask|6,w.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;let Le=q.parent,Fe=D.cameras;ee(D,Le);for(let de=0;de<Fe.length;de++)ee(Fe[de],Le);Fe.length===2?Y(D,w,L):D.projectionMatrix.copy(w.projectionMatrix),x===null&&q.isPerspectiveCamera&&(x={camera:q,fov:q.fov,zoom:q.zoom}),ke(q,D,Le)};function ke(q,re,ne){ne===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(ne.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ha*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&c===null))return o},this.setFoveation=function(q){o=q,d!==null&&(d.fixedFoveation=q),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(D)},this.getCameraTexture=function(q){return m[q]};let Ie=null;function ht(q,re){if(h=re.getViewerPose(l||s),p=re,h!==null){let ne=h.views;c!==null&&(e.setRenderTargetFramebuffer(M,c.framebuffer),e.setRenderTarget(M));let Le=!1;ne.length!==D.cameras.length&&(D.cameras.length=0,Le=!0);for(let de=0;de<ne.length;de++){let $e=ne[de],Q=null;if(c!==null)Q=c.getViewport($e);else{let oe=u.getViewSubImage(d,$e);Q=oe.viewport,de===0&&(e.setRenderTargetTextures(M,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(M))}let $=I[de];$===void 0&&($=new Ft,$.layers.enable(de),$.viewport=new gt,I[de]=$),$.matrix.fromArray($e.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray($e.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Q.x,Q.y,Q.width,Q.height),de===0&&(D.matrix.copy($.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Le===!0&&D.cameras.push($)}let Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let de=u.getDepthInformation(ne[0]);de&&de.isValid&&de.texture&&_.init(de,r.renderState)}if(Fe&&Fe.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let de=0;de<ne.length;de++){let $e=ne[de].camera;if($e){let Q=m[$e];Q||(Q=new ph,m[$e]=Q);let $=u.getCameraImage($e);Q.sourceTexture=$}}}}for(let ne=0;ne<v.length;ne++){let Le=b[ne],Fe=v[ne];Le!==null&&Fe!==void 0&&Fe.update(Le,re,l||s)}Ie&&Ie(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),p=null}let je=new Fp;je.setAnimationLoop(ht),this.setAnimationLoop=function(q){Ie=q},this.dispose=function(){}}},qM=new Ve,df=new qe;df.set(-1,0,0,0,1,0,0,0,1);function YM(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,Od(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,y,M,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),c(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(n(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,M):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Xt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Xt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(df),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function n(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=M*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function ZM(e,t,i,r){let a={},s={},n=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let E=b.program;r.uniformBlockBinding(v,E)}function h(v,b){let E=a[v.id];E===void 0&&(m(v),E=u(v),a[v.id]=E,v.addEventListener("dispose",y));let C=b.program;r.updateUBOMapping(v,C);let x=t.render.frame;s[v.id]!==x&&(c(v),s[v.id]=x)}function u(v){let b=d();v.__bindingPointIndex=b;let E=e.createBuffer(),C=v.__size,x=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,C,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,E),E}function d(){for(let v=0;v<o;v++)if(n.indexOf(v)===-1)return n.push(v),v;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){let b=a[v.id],E=v.uniforms,C=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let x=0,w=E.length;x<w;x++){let L=E[x];if(Array.isArray(L))for(let I=0,D=L.length;I<D;I++)p(L[I],x,I,C);else p(L,x,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,b,E,C){if(_(v,b,E,C)===!0){let x=v.__offset,w=v.value;if(Array.isArray(w)){let L=0;for(let I=0;I<w.length;I++){let D=w[I],X=f(D);g(D,v.__data,L),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,v.__data)}}function g(v,b,E){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,E)}function _(v,b,E,C){let x=v.value,w=b+"_"+E;if(C[w]===void 0)return typeof x=="number"||typeof x=="boolean"?C[w]=x:ArrayBuffer.isView(x)?C[w]=x.slice():C[w]=x.clone(),!0;{let L=C[w];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return C[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(v){let b=v.uniforms,E=0,C=16;for(let w=0,L=b.length;w<L;w++){let I=Array.isArray(b[w])?b[w]:[b[w]];for(let D=0,X=I.length;D<X;D++){let N=I[D],G=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,k=G.length;Z<k;Z++){let he=G[Z],j=f(he),Y=E%C,ee=Y%j.boundary,ke=Y+ee;E+=ee,ke!==0&&C-ke<j.storage&&(E+=C-ke),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=j.storage}}}let x=E%C;return x>0&&(E+=C-x),v.__size=E,v.__cache={},this}function f(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):pe("WebGLRenderer: Unsupported uniform value type.",v),b}function y(v){let b=v.target;b.removeEventListener("dispose",y);let E=n.indexOf(b.__bindingPointIndex);n.splice(E,1),e.deleteBuffer(a[b.id]),delete a[b.id],delete s[b.id]}function M(){for(let v in a)e.deleteBuffer(a[v]);n=[],a={},s={}}return{bind:l,update:h,dispose:M}}var JM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function KM(){return Fi===null&&(Fi=new pi(JM,16,16,hr,yi),Fi.name="DFG_LUT",Fi.minFilter=pt,Fi.magFilter=pt,Fi.wrapS=jt,Fi.wrapT=jt,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var $M=class{constructor(e={}){let{canvas:t=lc(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:n=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:c=Qt}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;let g=c,_=new Set([un,hn,rs]),m=new Set([Qt,ci,aa,sa,nn,on]),f=new Uint32Array(4),y=new Int32Array(4),M=new R,v=null,b=null,E=[],C=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,L=!1,I=null,D=null,X=null,N=null;this._outputColorSpace=Lt;let G=0,Z=0,k=null,he=-1,j=null,Y=new gt,ee=new gt,ke=null,Ie=new fe(0),ht=0,je=t.width,q=t.height,re=1,ne=null,Le=null,Fe=new gt(0,0,je,q),de=new gt(0,0,je,q),$e=!1,Q=new Ur,$=!1,oe=!1,ye=new Ve,Se=new R,Ae=new gt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ye(){return k===null?re:1}let P=i;function mt(T,O){return t.getContext(T,O)}let it,et,A,S,U,H,K,ce,ge,B,le,_e,Ee,se,Ue,De,He,st,F,J,ie,Me,Ce;try{let T={alpha:!0,depth:r,stencil:a,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",nt,!1),P===null){let O="webgl2";if(P=mt(O,T),P===null)throw mt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(T){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),Pe("WebGLRenderer: "+T.message),T}function ae(){it=new $y(P),it.init(),ie=new cf(P,it),et=new ky(P,it,e,ie),A=new VM(P,it),et.reversedDepthBuffer&&d&&A.buffers.depth.setReversed(!0),D=P.createFramebuffer(),X=P.createFramebuffer(),N=P.createFramebuffer(),S=new tS(P),U=new AM,H=new kM(P,it,A,U,et,ie,S),K=new Ky(w),ce=new rv(P),Me=new Gy(P,ce),ge=new Qy(P,ce,S,Me),B=new rS(P,ge,ce,Me,S),st=new iS(P,et,H),Ue=new Hy(U),le=new EM(w,K,it,et,Me,Ue),_e=new YM(w,U),Ee=new RM,se=new DM(it),He=new zy(w,K,A,B,p,o),De=new GM(w,B,et),Ce=new ZM(P,S,et,A),F=new Vy(P,it,S),J=new eS(P,it,S),S.programs=le.programs,w.capabilities=et,w.extensions=it,w.properties=U,w.renderLists=Ee,w.shadowMap=De,w.state=A,w.info=S}g!==Qt&&(x=new sS(g,t.width,t.height,n,r,a));let xe=new jM(w,P);this.xr=xe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(je,q,!1))},this.getSize=function(T){return T.set(je,q)},this.setSize=function(T,O,W=!0){if(xe.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}je=T,q=O,t.width=Math.floor(T*re),t.height=Math.floor(O*re),W===!0&&(t.style.width=T+"px",t.style.height=O+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(je*re,q*re).floor()},this.setDrawingBufferSize=function(T,O,W){je=T,q=O,re=W,t.width=Math.floor(T*W),t.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(g===Qt){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Y)},this.getViewport=function(T){return T.copy(Fe)},this.setViewport=function(T,O,W,V){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,O,W,V),A.viewport(Y.copy(Fe).multiplyScalar(re).round())},this.getScissor=function(T){return T.copy(de)},this.setScissor=function(T,O,W,V){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,O,W,V),A.scissor(ee.copy(de).multiplyScalar(re).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(T){A.setScissorTest($e=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){Le=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,W=!0){let V=0;if(T){let z=!1;if(k!==null){let ue=k.texture.format;z=_.has(ue)}if(z){let ue=k.texture.type,ve=m.has(ue),be=He.getClearColor(),we=He.getClearAlpha(),Be=be.r,tt=be.g,rt=be.b;ve?(f[0]=Be,f[1]=tt,f[2]=rt,f[3]=we,P.clearBufferuiv(P.COLOR,0,f)):(y[0]=Be,y[1]=tt,y[2]=rt,y[3]=we,P.clearBufferiv(P.COLOR,0,y))}else V|=P.COLOR_BUFFER_BIT}O&&(V|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),He.dispose(),Ee.dispose(),se.dispose(),U.dispose(),K.dispose(),B.dispose(),Me.dispose(),Ce.dispose(),le.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",mu),xe.removeEventListener("sessionend",gu),Mr.stop()};function ze(T){T.preventDefault(),ps("WebGLRenderer: Context Lost."),L=!0}function Pt(){ps("WebGLRenderer: Context Restored."),L=!1;let T=S.autoReset,O=De.enabled,W=De.autoUpdate,V=De.needsUpdate,z=De.type;ae(),S.autoReset=T,De.enabled=O,De.autoUpdate=W,De.needsUpdate=V,De.type=z}function nt(T){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ii(T){let O=T.target;O.removeEventListener("dispose",Ii),zi(O)}function zi(T){Kf(T),U.remove(T)}function Kf(T){let O=U.get(T).programs;O!==void 0&&(O.forEach(function(W){le.releaseProgram(W)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,V,z,ue){O===null&&(O=Oe);let ve=z.isMesh&&z.matrixWorld.determinantAffine()<0,be=em(T,O,W,V,z);A.setMaterial(V,ve);let we=W.index,Be=1;if(V.wireframe===!0){if(we=ge.getWireframeAttribute(W),we===void 0)return;Be=2}let tt=W.drawRange,rt=W.attributes.position,Ne=tt.start*Be,ut=(tt.start+tt.count)*Be;ue!==null&&(Ne=Math.max(Ne,ue.start*Be),ut=Math.min(ut,(ue.start+ue.count)*Be)),we!==null?(Ne=Math.max(Ne,0),ut=Math.min(ut,we.count)):rt!=null&&(Ne=Math.max(Ne,0),ut=Math.min(ut,rt.count));let Ct=ut-Ne;if(Ct<0||Ct===1/0)return;Me.setup(z,V,be,W,we);let _t,vt=F;if(we!==null&&(_t=ce.get(we),vt=J,vt.setIndex(_t)),z.isMesh)V.wireframe===!0?(A.setLineWidth(V.wireframeLinewidth*Ye()),vt.setMode(P.LINES)):vt.setMode(P.TRIANGLES);else if(z.isLine){let St=V.linewidth;St===void 0&&(St=1),A.setLineWidth(St*Ye()),z.isLineSegments?vt.setMode(P.LINES):z.isLineLoop?vt.setMode(P.LINE_LOOP):vt.setMode(P.LINE_STRIP)}else z.isPoints?vt.setMode(P.POINTS):z.isSprite&&vt.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(it.get("WEBGL_multi_draw"))vt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let St=z._multiDrawStarts,Re=z._multiDrawCounts,Wt=z._multiDrawCount,br=we?ce.get(we).bytesPerElement:1,hi=U.get(V).currentProgram.getUniforms();for(let Pi=0;Pi<Wt;Pi++)hi.setValue(P,"_gl_DrawID",Pi),vt.render(St[Pi]/br,Re[Pi])}else if(z.isInstancedMesh)vt.renderInstances(Ne,Ct,z.count);else if(W.isInstancedBufferGeometry){let St=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Re=Math.min(W.instanceCount,St);vt.renderInstances(Ne,Ct,Re)}else vt.render(Ne,Ct)};function fu(T,O,W,V){I!==null&&T.isNodeMaterial&&I.setObject(V,T),$===!0&&Ue.setState(T,W,!1),T.transparent===!0&&T.side===vi&&T.forceSinglePass===!1?(T.side=Xt,T.needsUpdate=!0,Ys(T,O,V),T.side=Gi,T.needsUpdate=!0,Ys(T,O,V),T.side=vi):Ys(T,O,V)}this.compile=function(T,O,W=null){W===null&&(W=T),I!==null&&I.renderStart(T,O,W),b=se.get(W),b.init(O),C.push(b),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),oe=this.localClippingEnabled,$=Ue.init(this.clippingPlanes,oe),$===!0&&Ue.setGlobalState(this.clippingPlanes,O),I!==null&&De.render(b.state.shadowsArray,W,O);let V=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ue=z.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){let be=ue[ve];fu(be,W,O,z),V.add(be)}else fu(ue,W,O,z),V.add(ue)}),b=C.pop(),I!==null&&I.renderEnd(),V},this.compileAsync=function(T,O,W=null){let V=this.compile(T,O,W);return new Promise(z=>{function ue(){if(V.forEach(function(ve){let be=U.get(ve).currentProgram;(be===void 0||be.isReady())&&V.delete(ve)}),V.size===0){z(T);return}setTimeout(ue,10)}it.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let sl=null;function $f(T){sl&&sl(T)}function mu(){Mr.stop()}function gu(){Mr.start()}let Mr=new Fp;Mr.setAnimationLoop($f),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(T){sl=T,xe.setAnimationLoop(T),T===null?Mr.stop():Mr.start()},xe.addEventListener("sessionstart",mu),xe.addEventListener("sessionend",gu),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;I!==null&&I.renderStart(T,O);let W=xe.enabled===!0&&xe.isPresenting===!0,V=x!==null&&(k===null||W)&&x.begin(w,k);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(O),O=xe.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,O,k),b=se.get(T,C.length),b.init(O),b.state.textureUnits=H.getTextureUnits(),C.push(b),ye.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(ye,ai,O.reversedDepth),oe=this.localClippingEnabled,$=Ue.init(this.clippingPlanes,oe),v=Ee.get(T,E.length),v.init(),E.push(v),xe.enabled===!0&&xe.isPresenting===!0){let ue=w.xr.getDepthSensingMesh();ue!==null&&nl(ue,O,-1/0,w.sortObjects)}nl(T,O,0,w.sortObjects),v.finish(),I!==null&&I.updateLights(b.state.lightsArray),w.sortObjects===!0&&v.sort(ne,Le),We=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,We&&He.addToRenderList(v,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$===!0&&Ue.beginShadows();let z=b.state.shadowsArray;if(De.render(z,T,O),$===!0&&Ue.endShadows(),(V&&x.hasRenderPass())===!1){let ue=v.opaque,ve=v.transmissive;if(b.setupLights(),O.isArrayCamera){let be=O.cameras;if(ve.length>0)for(let we=0,Be=be.length;we<Be;we++){let tt=be[we];vu(ue,ve,T,tt)}We&&He.render(T);for(let we=0,Be=be.length;we<Be;we++){let tt=be[we];_u(v,T,tt,tt.viewport)}}else ve.length>0&&vu(ue,ve,T,O),We&&He.render(T),_u(v,T,O)}k!==null&&Z===0&&(H.updateMultisampleRenderTarget(k),H.updateRenderTargetMipmap(k)),V&&x.end(w),T.isScene===!0&&T.onAfterRender(w,T,O),Me.resetDefaultState(),he=-1,j=null,C.pop(),C.length>0?(b=C[C.length-1],H.setTextureUnits(b.state.textureUnits),$===!0&&Ue.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?v=E[E.length-1]:v=null,I!==null&&I.renderEnd()};function nl(T,O,W,V){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Q)){V&&Ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ye);let ue=B.update(T),ve=T.material;ve.visible&&v.push(T,ue,ve,W,Ae.z,null,O)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Q))){let ue=B.update(T),ve=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ae.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ae.copy(ue.boundingSphere.center)),Ae.applyMatrix4(T.matrixWorld).applyMatrix4(ye)),Array.isArray(ve)){let be=ue.groups;for(let we=0,Be=be.length;we<Be;we++){let tt=be[we],rt=ve[tt.materialIndex];rt&&rt.visible&&v.push(T,ue,rt,W,Ae.z,tt,O)}}else ve.visible&&v.push(T,ue,ve,W,Ae.z,null,O)}}let z=T.children;for(let ue=0,ve=z.length;ue<ve;ue++)nl(z[ue],O,W,V)}function _u(T,O,W,V){let{opaque:z,transmissive:ue,transparent:ve}=T;b.setupLightsView(W),$===!0&&Ue.setGlobalState(w.clippingPlanes,W),V&&A.viewport(Y.copy(V)),z.length>0&&qs(z,O,W),ue.length>0&&qs(ue,O,W),ve.length>0&&qs(ve,O,W),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function vu(T,O,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let rt=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new ti(1,1,{generateMipmaps:!0,type:rt?yi:Qt,minFilter:ui,samples:Math.max(4,et.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let z=b.state.transmissionRenderTarget[V.id],ue=V.viewport||Y;z.setSize(ue.z*w.transmissionResolutionScale,ue.w*w.transmissionResolutionScale);let ve=w.getRenderTarget(),be=w.getActiveCubeFace(),we=w.getActiveMipmapLevel();w.setRenderTarget(z),w.getClearColor(Ie),ht=w.getClearAlpha(),ht<1&&w.setClearColor(16777215,.5),w.clear(),We&&He.render(W);let Be=w.toneMapping;w.toneMapping=xi;let tt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),$===!0&&Ue.setGlobalState(w.clippingPlanes,V),qs(T,W,V),H.updateMultisampleRenderTarget(z),H.updateRenderTargetMipmap(z),it.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Ne=0,ut=O.length;Ne<ut;Ne++){let Ct=O[Ne],{object:_t,geometry:vt,material:St,group:Re}=Ct;if(St.side===vi&&_t.layers.test(V.layers)){let Wt=St.side;St.side=Xt,St.needsUpdate=!0,xu(_t,W,V,vt,St,Re),St.side=Wt,St.needsUpdate=!0,rt=!0}}rt===!0&&(H.updateMultisampleRenderTarget(z),H.updateRenderTargetMipmap(z))}w.setRenderTarget(ve,be,we),w.setClearColor(Ie,ht),tt!==void 0&&(V.viewport=tt),w.toneMapping=Be}function qs(T,O,W){let V=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ue=T.length;z<ue;z++){let ve=T[z],{object:be,geometry:we,group:Be}=ve,tt=ve.material;tt.allowOverride===!0&&V!==null&&(tt=V),be.layers.test(W.layers)&&xu(be,O,W,we,tt,Be)}}function xu(T,O,W,V,z,ue){I!==null&&z.isNodeMaterial&&I.setObject(T,z),T.onBeforeRender(w,O,W,V,z,ue),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(w,O,W,V,T,ue),z.transparent===!0&&z.side===vi&&z.forceSinglePass===!1?(z.side=Xt,z.needsUpdate=!0,w.renderBufferDirect(W,O,V,z,T,ue),z.side=Gi,z.needsUpdate=!0,w.renderBufferDirect(W,O,V,z,T,ue),z.side=vi):w.renderBufferDirect(W,O,V,z,T,ue),T.onAfterRender(w,O,W,V,z,ue)}function Ys(T,O,W){O.isScene!==!0&&(O=Oe);let V=U.get(T),z=b.state.lights,ue=b.state.shadowsArray,ve=z.state.version,be=le.getParameters(T,z.state,ue,O,W,b.state.lightProbeGridArray),we=le.getProgramCacheKey(be),Be=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let tt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=K.get(T.envMap||V.environment,tt),V.envMapRotation=V.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",Ii),Be=new Map,V.programs=Be);let rt=Be.get(we);if(rt!==void 0){if(V.currentProgram===rt&&V.lightsStateVersion===ve)return Su(T,be),rt}else be.uniforms=le.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,W,be),T.onBeforeCompile(be,w),rt=le.acquireProgram(be,we),Be.set(we,rt),V.uniforms=be.uniforms;let Ne=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=Ue.uniform),Su(T,be),V.needsLights=im(T),V.lightsStateVersion=ve,V.needsLights&&(Ne.ambientLightColor.value=z.state.ambient,Ne.lightProbe.value=z.state.probe,Ne.sunLights.value=z.state.sun,Ne.sunLightShadows.value=z.state.sunShadow,Ne.directionalLights.value=z.state.directional,Ne.directionalLightShadows.value=z.state.directionalShadow,Ne.spotLights.value=z.state.spot,Ne.spotLightShadows.value=z.state.spotShadow,Ne.rectAreaLights.value=z.state.rectArea,Ne.ltc_1.value=z.state.rectAreaLTC1,Ne.ltc_2.value=z.state.rectAreaLTC2,Ne.pointLights.value=z.state.point,Ne.pointLightShadows.value=z.state.pointShadow,Ne.hemisphereLights.value=z.state.hemi,Ne.sunShadowMatrix.value=z.state.sunShadowMatrix,Ne.sunShadowCascade.value=z.state.sunShadowCascade,Ne.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ne.spotLightMatrix.value=z.state.spotLightMatrix,Ne.spotLightMap.value=z.state.spotLightMap,Ne.pointShadowMatrix.value=z.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=rt,V.uniformsList=null,rt}function yu(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=tl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Su(T,O){let W=U.get(T);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Qf(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let W=0,V=T.length;W<V;W++){let z=T[W];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function em(T,O,W,V,z){O.isScene!==!0&&(O=Oe),H.resetTextureUnits();let ue=O.fog,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,be=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ke.workingColorSpace,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Be=K.get(V.envMap||ve,we),tt=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,rt=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,Ct=!!W.morphAttributes.color,_t=xi;V.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(_t=w.toneMapping);let vt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,St=vt!==void 0?vt.length:0,Re=U.get(V),Wt=b.state.lights;if($===!0&&(oe===!0||T!==j)){let dt=T===j&&V.id===he;Ue.setState(V,T,dt)}let br=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Wt.state.version||Re.outputColorSpace!==be||z.isBatchedMesh&&Re.batching===!1||!z.isBatchedMesh&&Re.batching===!0||z.isBatchedMesh&&Re.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Re.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Re.instancing===!1||!z.isInstancedMesh&&Re.instancing===!0||z.isSkinnedMesh&&Re.skinning===!1||!z.isSkinnedMesh&&Re.skinning===!0||z.isInstancedMesh&&Re.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Re.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Re.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Re.instancingMorph===!1&&z.morphTexture!==null||Re.envMap!==Be||V.fog===!0&&Re.fog!==ue||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ue.numPlanes||Re.numIntersection!==Ue.numIntersection)||Re.vertexAlphas!==tt||Re.vertexTangents!==rt||Re.morphTargets!==Ne||Re.morphNormals!==ut||Re.morphColors!==Ct||Re.toneMapping!==_t||Re.morphTargetsCount!==St||!!Re.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(br=!0):(br=!0,Re.__version=V.version);let hi=Re.currentProgram;br===!0&&(hi=Ys(V,O,z),I&&V.isNodeMaterial&&I.onUpdateProgram(V,hi,Re));let Pi=!1,ar=!1,Jr=!1,ct=hi.getUniforms(),bt=Re.uniforms;if(A.useProgram(hi.program)&&(Pi=!0,ar=!0,Jr=!0),V.id!==he&&(he=V.id,ar=!0),Re.needsLights){let dt=Qf(b.state.lightProbeGridArray,z);Re.lightProbeGrid!==dt&&(Re.lightProbeGrid=dt,ar=!0)}if(Pi||j!==T){A.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ct.setValue(P,"projectionMatrix",T.projectionMatrix),ct.setValue(P,"viewMatrix",T.matrixWorldInverse);let dt=ct.map.cameraPosition;dt!==void 0&&dt.setValue(P,Se.setFromMatrixPosition(T.matrixWorld)),et.logarithmicDepthBuffer&&ct.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,ar=!0,Jr=!0)}if(Re.needsLights&&(Wt.state.sunShadowMap.length>0&&ct.setValue(P,"sunShadowMap",Wt.state.sunShadowMap,H),Wt.state.directionalShadowMap.length>0&&ct.setValue(P,"directionalShadowMap",Wt.state.directionalShadowMap,H),Wt.state.spotShadowMap.length>0&&ct.setValue(P,"spotShadowMap",Wt.state.spotShadowMap,H),Wt.state.pointShadowMap.length>0&&ct.setValue(P,"pointShadowMap",Wt.state.pointShadowMap,H)),z.isSkinnedMesh){ct.setOptional(P,z,"bindMatrix"),ct.setOptional(P,z,"bindMatrixInverse");let dt=z.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ct.setValue(P,"boneTexture",dt.boneTexture,H))}z.isBatchedMesh&&(ct.setOptional(P,z,"batchingTexture"),ct.setValue(P,"batchingTexture",z._matricesTexture,H),ct.setOptional(P,z,"batchingIdTexture"),ct.setValue(P,"batchingIdTexture",z._indirectTexture,H),ct.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&ct.setValue(P,"batchingColorTexture",z._colorsTexture,H));let sr=W.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&st.update(z,W,hi),(ar||Re.receiveShadow!==z.receiveShadow)&&(Re.receiveShadow=z.receiveShadow,ct.setValue(P,"receiveShadow",z.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(bt.envMapIntensity.value=O.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=KM()),ar){if(ct.setValue(P,"toneMappingExposure",w.toneMappingExposure),Re.needsLights&&tm(bt,Jr),ue&&V.fog===!0&&_e.refreshFogUniforms(bt,ue),_e.refreshMaterialUniforms(bt,V,re,q,b.state.transmissionRenderTarget[T.id]),Re.needsLights&&Re.lightProbeGrid){let dt=Re.lightProbeGrid;bt.probesSH.value=dt.texture,bt.probesMin.value.copy(dt.boundingBox.min),bt.probesMax.value.copy(dt.boundingBox.max),bt.probesResolution.value.copy(dt.resolution)}tl.upload(P,yu(Re),bt,H)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(tl.upload(P,yu(Re),bt,H),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(P,"center",z.center),ct.setValue(P,"modelViewMatrix",z.modelViewMatrix),ct.setValue(P,"normalMatrix",z.normalMatrix),ct.setValue(P,"modelMatrix",z.matrixWorld),V.uniformsGroups!==void 0){let dt=V.uniformsGroups;for(let $a=0,Kr=dt.length;$a<Kr;$a++){let bu=dt[$a];Ce.update(bu,hi),Ce.bind(bu,hi)}}return hi}function tm(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function im(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,O,W){let V=U.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),U.get(T.texture).__webglTexture=O,U.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let W=U.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,W=0){k=T,G=O,Z=W;let V=null,z=!1,ue=!1;if(T){let ve=U.get(T);if(ve.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(P.FRAMEBUFFER,ve.__webglFramebuffer),Y.copy(T.viewport),ee.copy(T.scissor),ke=T.scissorTest,A.viewport(Y),A.scissor(ee),A.setScissorTest(ke),he=-1;return}else if(ve.__webglFramebuffer===void 0)H.setupRenderTarget(T);else if(ve.__hasExternalTextures)H.rebindTextures(T,U.get(T.texture).__webglTexture,U.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Be=T.depthTexture;if(ve.__boundDepthTexture!==Be){if(Be!==null&&U.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(T)}}let be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ue=!0);let we=U.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(we[O])?V=we[O][W]:V=we[O],z=!0):T.samples>0&&H.useMultisampledRTT(T)===!1?V=U.get(T).__webglMultisampledFramebuffer:Array.isArray(we)?V=we[W]:V=we,Y.copy(T.viewport),ee.copy(T.scissor),ke=T.scissorTest}else Y.copy(Fe).multiplyScalar(re).floor(),ee.copy(de).multiplyScalar(re).floor(),ke=$e;if(W!==0&&(V=D),A.bindFramebuffer(P.FRAMEBUFFER,V)&&A.drawBuffers(T,V),A.viewport(Y),A.scissor(ee),A.setScissorTest(ke),z){let ve=U.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,W)}else if(ue){let ve=O;for(let be=0;be<T.textures.length;be++){let we=U.get(T.textures[be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+be,we.__webglTexture,W,ve)}}else if(T!==null&&W!==0){let ve=U.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ve.__webglTexture,W)}he=-1};function Mu(T){let O=U.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=et.textureFormatReadable(T.format),O.__typeReadable=et.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,W,V,z,ue,ve,be=0){if(!(T&&T.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){A.bindFramebuffer(P.FRAMEBUFFER,we);try{let Be=T.textures[be],tt=Be.format,rt=Be.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be);let Ne=Mu(Be);if(Ne.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-V&&W>=0&&W<=T.height-z&&P.readPixels(O,W,V,z,ie.convert(tt),ie.convert(rt),ue)}finally{let Be=k!==null?U.get(k).__webglFramebuffer:null;A.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,O,W,V,z,ue,ve,be=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we)if(O>=0&&O<=T.width-V&&W>=0&&W<=T.height-z){A.bindFramebuffer(P.FRAMEBUFFER,we);let Be=T.textures[be],tt=Be.format,rt=Be.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be);let Ne=Mu(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ut),P.bufferData(P.PIXEL_PACK_BUFFER,ue.byteLength,P.STREAM_READ),P.readPixels(O,W,V,z,ie.convert(tt),ie.convert(rt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ct=k!==null?U.get(k).__webglFramebuffer:null;A.bindFramebuffer(P.FRAMEBUFFER,Ct);let _t=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await $m(P,_t,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ut),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ue),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ut),P.deleteSync(_t),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,W=0){let V=Math.pow(2,-W),z=Math.floor(T.image.width*V),ue=Math.floor(T.image.height*V),ve=O!==null?O.x:0,be=O!==null?O.y:0;H.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,ve,be,z,ue),A.unbindTexture()},this.copyTextureToTexture=function(T,O,W=null,V=null,z=0,ue=0){let ve,be,we,Be,tt,rt,Ne,ut,Ct,_t=T.isCompressedTexture?T.mipmaps[ue]:T.image;if(W!==null)ve=W.max.x-W.min.x,be=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Be=W.min.x,tt=W.min.y,rt=W.isBox3?W.min.z:0;else{let bt=Math.pow(2,-z);ve=Math.floor(_t.width*bt),be=Math.floor(_t.height*bt),T.isDataArrayTexture?we=_t.depth:T.isData3DTexture?we=Math.floor(_t.depth*bt):we=1,Be=0,tt=0,rt=0}V!==null?(Ne=V.x,ut=V.y,Ct=V.z):(Ne=0,ut=0,Ct=0);let vt=ie.convert(O.format),St=ie.convert(O.type),Re;O.isData3DTexture?(H.setTexture3D(O,0),Re=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(H.setTexture2DArray(O,0),Re=P.TEXTURE_2D_ARRAY):(H.setTexture2D(O,0),Re=P.TEXTURE_2D),A.activeTexture(P.TEXTURE0),A.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let Wt=A.getParameter(P.UNPACK_ROW_LENGTH),br=A.getParameter(P.UNPACK_IMAGE_HEIGHT),hi=A.getParameter(P.UNPACK_SKIP_PIXELS),Pi=A.getParameter(P.UNPACK_SKIP_ROWS),ar=A.getParameter(P.UNPACK_SKIP_IMAGES);A.pixelStorei(P.UNPACK_ROW_LENGTH,_t.width),A.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t.height),A.pixelStorei(P.UNPACK_SKIP_PIXELS,Be),A.pixelStorei(P.UNPACK_SKIP_ROWS,tt),A.pixelStorei(P.UNPACK_SKIP_IMAGES,rt);let Jr=T.isDataArrayTexture||T.isData3DTexture,ct=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let bt=U.get(T),sr=U.get(O),dt=U.get(bt.__renderTarget),$a=U.get(sr.__renderTarget);A.bindFramebuffer(P.READ_FRAMEBUFFER,dt.__webglFramebuffer),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,$a.__webglFramebuffer);for(let Kr=0;Kr<we;Kr++)Jr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,U.get(T).__webglTexture,z,rt+Kr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,U.get(O).__webglTexture,ue,Ct+Kr)),P.blitFramebuffer(Be,tt,ve,be,Ne,ut,ve,be,P.DEPTH_BUFFER_BIT,P.NEAREST);A.bindFramebuffer(P.READ_FRAMEBUFFER,null),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||U.has(T)){let bt=U.get(T),sr=U.get(O);A.bindFramebuffer(P.READ_FRAMEBUFFER,X),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,N);for(let dt=0;dt<we;dt++)Jr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,bt.__webglTexture,z,rt+dt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,bt.__webglTexture,z),ct?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,sr.__webglTexture,ue,Ct+dt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,sr.__webglTexture,ue),z!==0?P.blitFramebuffer(Be,tt,ve,be,Ne,ut,ve,be,P.COLOR_BUFFER_BIT,P.NEAREST):ct?P.copyTexSubImage3D(Re,ue,Ne,ut,Ct+dt,Be,tt,ve,be):P.copyTexSubImage2D(Re,ue,Ne,ut,Be,tt,ve,be);A.bindFramebuffer(P.READ_FRAMEBUFFER,null),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ct?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Re,ue,Ne,ut,Ct,ve,be,we,vt,St,_t.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Re,ue,Ne,ut,Ct,ve,be,we,vt,_t.data):P.texSubImage3D(Re,ue,Ne,ut,Ct,ve,be,we,vt,St,_t):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ue,Ne,ut,ve,be,vt,St,_t.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ue,Ne,ut,_t.width,_t.height,vt,_t.data):P.texSubImage2D(P.TEXTURE_2D,ue,Ne,ut,ve,be,vt,St,_t);A.pixelStorei(P.UNPACK_ROW_LENGTH,Wt),A.pixelStorei(P.UNPACK_IMAGE_HEIGHT,br),A.pixelStorei(P.UNPACK_SKIP_PIXELS,hi),A.pixelStorei(P.UNPACK_SKIP_ROWS,Pi),A.pixelStorei(P.UNPACK_SKIP_IMAGES,ar),ue===0&&O.generateMipmaps&&P.generateMipmap(Re),A.unbindTexture()},this.initRenderTarget=function(T){U.get(T).__webglFramebuffer===void 0&&H.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?H.setTextureCube(T,0):T.isData3DTexture?H.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?H.setTexture2DArray(T,0):H.setTexture2D(T,0),A.unbindTexture()},this.resetState=function(){G=0,Z=0,k=null,A.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};function pf(e,t){if(t===Ku)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Hn||t===Rl){let i=e.getIndex();if(i===null){let s=[],n=e.getAttribute("position");if(n!==void 0){for(let o=0;o<n.count;o++)s.push(o);e.setIndex(s),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let r=i.count-2,a=[];if(t===Hn)for(let s=1;s<=r;s++)a.push(i.getX(0)),a.push(i.getX(s)),a.push(i.getX(s+1));else for(let s=0;s<r;s++)s%2===0?(a.push(i.getX(s)),a.push(i.getX(s+1)),a.push(i.getX(s+2))):(a.push(i.getX(s+2)),a.push(i.getX(s+1)),a.push(i.getX(s)));return a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),e.setIndex(a),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function QM(e){let t=new Map,i=new Map,r=e.clone();return ff(e,r,function(a,s){t.set(s,a),i.set(a,s)}),r.traverse(function(a){if(!a.isSkinnedMesh)return;let s=a,n=t.get(a),o=n.skeleton.bones;s.skeleton=n.skeleton.clone(),s.bindMatrix.copy(n.bindMatrix),s.skeleton.bones=o.map(function(l){return i.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),r}function ff(e,t,i){i(e,t);for(let r=0;r<e.children.length;r++)ff(e.children[r],t.children[r],i)}var e1=class extends $t{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new s1(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new mf(t,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new mf(t,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new v1(t)})}load(e,t,i,r){let a=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=xr.extractUrlBase(e);s=xr.resolveURL(l,this.path)}else s=xr.extractUrlBase(e);this.manager.itemStart(e);let n=function(l){r?r(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},o=new Ci(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{a.parse(l,s,function(h){t(h),a.manager.itemEnd(e)},n)}catch(h){n(h)}},i,n)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let a,s={},n={},o=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===gf){try{s[Qe.KHR_BINARY_GLTF]=new x1(e)}catch(h){r&&r(h);return}a=JSON.parse(s[Qe.KHR_BINARY_GLTF].content)}else a=JSON.parse(o.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new L1(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),n[u.name]=u,s[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){let u=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:s[u]=new r1;break;case Qe.KHR_DRACO_MESH_COMPRESSION:s[u]=new y1(a,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:s[u]=new S1;break;case Qe.KHR_MESH_QUANTIZATION:s[u]=new M1;break;default:d.indexOf(u)>=0&&n[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(s),l.setPlugins(n),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,a){i.parse(e,t,r,a)})}};function t1(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function At(e,t,i){let r=e.json.materials[t];return r.extensions&&r.extensions[i]?r.extensions[i]:null}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},i1=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let a=t.json,s=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],n,o=new fe(16777215);s.color!==void 0&&o.setRGB(s.color[0],s.color[1],s.color[2],ei);let l=s.range!==void 0?s.range:0;switch(s.type){case"directional":n=new Gh(o),n.target.position.set(0,0,-1),n.add(n.target);break;case"point":n=new zh(o),n.distance=l;break;case"spot":n=new Bh(o),n.distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,n.angle=s.spot.outerConeAngle,n.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,n.target.position.set(0,0,-1),n.add(n.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return n.position.set(0,0,0),Bi(n,s),s.intensity!==void 0&&(n.intensity=s.intensity),n.name=t.createUniqueName(s.name||"light_"+e),r=Promise.resolve(n),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(s){return i._getNodeRef(t.cache,a,s)})}},r1=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,i){let r=[];e.color=new fe(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let s=a.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],ei),e.opacity=s[3]}a.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",a.baseColorTexture,Lt))}return Promise.all(r)}},a1=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},s1=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return At(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(a,a)}return Promise.all(r)}},n1=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},o1=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return At(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}},l1=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return At(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ei)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Lt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}},h1=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}},u1=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return At(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let a=i.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(a[0],a[1],a[2],ei),Promise.all(r)}},c1=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return At(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},d1=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return At(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let a=i.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(a[0],a[1],a[2],ei),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Lt)),Promise.all(r)}},p1=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return At(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}},f1=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return At(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}},m1=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let a=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}},g1=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let s=a.extensions[t],n=r.images[s.source],o=i.textureLoader;if(n.uri){let l=i.options.manager.getHandler(n.uri);l!==null&&(o=l)}return i.loadTextureImage(e,s.source,o)}},_1=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let s=a.extensions[t],n=r.images[s.source],o=i.textureLoader;if(n.uri){let l=i.options.manager.getHandler(n.uri);l!==null&&(o=l)}return i.loadTextureImage(e,s.source,o)}},mf=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(n){let o=r.byteOffset||0,l=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(n,o,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(c){return c.buffer}):s.ready.then(function(){let c=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(c),h,u,d,r.mode,r.filter),c})})}else return null}},v1=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let o of r.primitives)if(o.mode!==_i.TRIANGLES&&o.mode!==_i.TRIANGLE_STRIP&&o.mode!==_i.TRIANGLE_FAN&&o.mode!==void 0)return null;let a=i.extensions[this.name].attributes,s=[],n={};for(let o in a)s.push(this.parser.getDependency("accessor",a[o]).then(l=>(n[o]=l,n[o])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(o=>{let l=o.pop(),h=l.isGroup?l.children:[l],u=o[0].count,d=[];for(let c of h){let p=new Ve,g=new R,_=new Bt,m=new R(1,1,1),f=new nh(c.geometry,c.material,u);for(let M=0;M<u;M++)n.TRANSLATION&&g.fromBufferAttribute(n.TRANSLATION,M),n.ROTATION&&_.fromBufferAttribute(n.ROTATION,M),n.SCALE&&m.fromBufferAttribute(n.SCALE,M),f.setMatrixAt(M,p.compose(g,_,m));let y=null;for(let M in n)if(M==="_COLOR_0"){let v=n[M];f.instanceColor=new gr(v.array,v.itemSize,v.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(y===null){let b=f.geometry;y=new Xe,y.name=b.name;for(let E in b.attributes)y.setAttribute(E,b.attributes[E]);for(let E in b.morphAttributes)y.morphAttributes[E]=b.morphAttributes[E];b.index!==null&&y.setIndex(b.index),y.morphTargetsRelative=b.morphTargetsRelative;for(let E of b.groups)y.addGroup(E.start,E.count,E.materialIndex);b.boundingBox!==null&&(y.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(y.boundingSphere=b.boundingSphere.clone()),y.drawRange.start=b.drawRange.start,y.drawRange.count=b.drawRange.count,y.userData=Object.assign({},b.userData),f.geometry=y}let v=n[M];y.setAttribute(M,new gr(v.array,v.itemSize,v.normalized))}at.prototype.copy.call(f,c),this.parser.assignFinalMaterial(f),d.push(f)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}},gf="glTF",js=12,_f={JSON:1313821514,BIN:5130562},x1=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,js),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-js,a=new DataView(e,js),s=0;for(;s<r;){let n=a.getUint32(s,!0);s+=4;let o=a.getUint32(s,!0);if(s+=4,o===_f.JSON){let l=new Uint8Array(e,js+s,n);this.content=i.decode(l)}else if(o===_f.BIN){let l=js+s;this.body=e.slice(l,l+n)}s+=n}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},y1=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,n={},o={},l={};for(let h in s){let u=uu[h]||h.toLowerCase();n[u]=s[h]}for(let h in e.attributes){let u=uu[h]||h.toLowerCase();if(s[h]!==void 0){let d=i.accessors[e.attributes[h]],c=Wa[d.componentType];l[u]=c.name,o[u]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(c){for(let p in c.attributes){let g=c.attributes[p],_=o[p];_!==void 0&&(g.normalized=_)}u(c)},n,l,ei,d)})})}},S1=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},M1=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},vf=class extends Br{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let s=0;s!==r;s++)t[s]=i[a+s];return t}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=n*2,l=n*3,h=r-t,u=(i-t)/h,d=u*u,c=d*u,p=e*l,g=p-l,_=-2*c+3*d,m=c-d,f=1-_,y=m-d+u;for(let M=0;M!==n;M++){let v=s[g+M+n],b=s[g+M+o]*h,E=s[p+M+n],C=s[p+M]*h;a[M]=f*v+y*b+_*E+m*C}return a}},b1=new Bt,T1=class extends vf{interpolate_(e,t,i,r){let a=super.interpolate_(e,t,i,r);return b1.fromArray(a).normalize().toArray(a),a}},_i={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Wa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xf={9728:xt,9729:pt,9984:an,9985:ra,9986:wr,9987:ui},yf={33071:jt,33648:ia,10497:or},hu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Sr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w1={CUBICSPLINE:void 0,LINEAR:oa,STEP:na},cu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function E1(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new zs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),e.DefaultMaterial}function Yr(e,t,i){for(let r in i.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function Bi(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function A1(e,t,i){let r=!1,a=!1,s=!1;for(let h=0,u=t.length;h<u;h++){let d=t[h];if(d.POSITION!==void 0&&(r=!0),d.NORMAL!==void 0&&(a=!0),d.COLOR_0!==void 0&&(s=!0),r&&a&&s)break}if(!r&&!a&&!s)return Promise.resolve(e);let n=[],o=[],l=[];for(let h=0,u=t.length;h<u;h++){let d=t[h];if(r){let c=d.POSITION!==void 0?i.getDependency("accessor",d.POSITION):e.attributes.position;n.push(c)}if(a){let c=d.NORMAL!==void 0?i.getDependency("accessor",d.NORMAL):e.attributes.normal;o.push(c)}if(s){let c=d.COLOR_0!==void 0?i.getDependency("accessor",d.COLOR_0):e.attributes.color;l.push(c)}}return Promise.all([Promise.all(n),Promise.all(o),Promise.all(l)]).then(function(h){let u=h[0],d=h[1],c=h[2];return r&&(e.morphAttributes.position=u),a&&(e.morphAttributes.normal=d),s&&(e.morphAttributes.color=c),e.morphTargetsRelative=!0,e})}function C1(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++)e.morphTargetDictionary[i[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R1(e){let t,i=e.extensions&&e.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(i?t="draco:"+i.bufferView+":"+i.indices+":"+du(i.attributes):t=e.indices+":"+du(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,a=e.targets.length;r<a;r++)t+=":"+du(e.targets[r]);return t}function du(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}function pu(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function I1(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var P1=new Ve,L1=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new t1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,a=!1,s=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let n=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(n)===!0;let o=n.match(/Version\/(\d+)/);r=i&&o?parseInt(o[1],10):-1,a=n.indexOf("Firefox")>-1,s=a?n.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||a&&s<98?this.textureLoader=new ep(this.options.manager):this.textureLoader=new mp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ci(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){let n={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:i,userData:{}};return Yr(a,n,r),Bi(n,r),Promise.all(i._invokeAll(function(o){return o.afterRoot&&o.afterRoot(n)})).then(function(){for(let o of n.scenes)o.updateMatrixWorld();e(n)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){let s=t[r].joints;for(let n=0,o=s.length;n<o;n++)e[s[n]].isBone=!0}for(let r=0,a=e.length;r<a;r++){let s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),a=(s,n)=>{let o=this.associations.get(s);o!=null&&this.associations.set(n,o);for(let[l,h]of s.children.entries())a(h,n.children[l])};return a(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let a=e(t[r]);a&&i.push(a)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(a,s){i.load(xr.resolveURL(t.uri,r.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let s=hu[r.type],n=Wa[r.componentType],o=r.normalized===!0,l=new n(r.count*s);return Promise.resolve(new lt(l,s,o))}let a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(s){let n=s[0],o=hu[r.type],l=Wa[r.componentType],h=l.BYTES_PER_ELEMENT,u=h*o,d=r.byteOffset||0,c=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,p=r.normalized===!0,g,_;if(c&&c!==u){let m=Math.floor(d/c),f="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,y=t.cache.get(f);y||(g=new l(n,m*c,r.count*c/h),y=new ys(g,c/h),t.cache.add(f,y)),_=new Sa(y,o,d%c/h,p)}else n===null?g=new l(r.count*o):g=new l(n,d,r.count*o),_=new lt(g,o,p);if(r.sparse!==void 0){let m=hu.SCALAR,f=Wa[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,v=new f(s[1],y,r.sparse.count*m),b=new l(s[2],M,r.sparse.count*o);n!==null&&(_=new lt(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let E=0,C=v.length;E<C;E++){let x=v[E];if(_.setX(x,b[E*o]),o>=2&&_.setY(x,b[E*o+1]),o>=3&&_.setZ(x,b[E*o+2]),o>=4&&_.setW(x,b[E*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=p}return _})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],s=this.textureLoader;if(a.uri){let n=i.manager.getHandler(a.uri);n!==null&&(s=n)}return this.loadTextureImage(e,r,s)}loadTextureImage(e,t,i){let r=this,a=this.json,s=a.textures[e],n=a.images[t],o=(n.uri||n.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=s.name||n.name||"",h.name===""&&typeof n.uri=="string"&&n.uri.startsWith("data:image/")===!1&&(h.name=n.uri);let u=(a.samplers||{})[s.sampler]||{};return h.magFilter=xf[u.magFilter]||pt,h.minFilter=xf[u.minFilter]||ui,h.wrapS=yf[u.wrapS]||or,h.wrapT=yf[u.wrapT]||or,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==xt&&h.minFilter!==pt,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(e,t){let i=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let s=r.images[e],n=self.URL||self.webkitURL,o=s.uri||"",l=!1;if(s.bufferView!==void 0)o=i.getDependency("bufferView",s.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:s.mimeType});return o=n.createObjectURL(d),o});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(o).then(function(u){return new Promise(function(d,c){let p=d;t.isImageBitmapLoader===!0&&(p=function(g){let _=new Tt(g);_.needsUpdate=!0,d(_)}),t.load(xr.resolveURL(u,a.path),p,void 0,c)})}).then(function(u){return l===!0&&n.revokeObjectURL(o),Bi(u,s),u.userData.mimeType=s.mimeType||I1(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let a=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),a.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let n=i.extensions!==void 0?i.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(n){let o=a.associations.get(s);s=a.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(s,n),a.associations.set(s,o)}}return r!==void 0&&(s.colorSpace=r),e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){let n="PointsMaterial:"+i.uuid,o=this.cache.get(n);o||(o=new Ro,It.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,o.sizeAttenuation=!1,this.cache.add(n,o)),i=o}else if(e.isLine){let n="LineBasicMaterial:"+i.uuid,o=this.cache.get(n);o||(o=new Ht,It.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,this.cache.add(n,o)),i=o}if(r||a||s){let n="ClonedMaterial:"+i.uuid+":";r&&(n+="derivative-tangents:"),a&&(n+="vertex-colors:"),s&&(n+="flat-shading:");let o=this.cache.get(n);o||(o=i.clone(),a&&(o.vertexColors=!0),s&&(o.flatShading=!0),r&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(n,o),this.associations.set(o,this.associations.get(i))),i=o}e.material=i}getMaterialType(){return zs}loadMaterial(e){let t=this,i=this.json,r=this.extensions,a=i.materials[e],s,n={},o=a.extensions||{},l=[];if(o[Qe.KHR_MATERIALS_UNLIT]){let u=r[Qe.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),l.push(u.extendParams(n,a,t))}else{let u=a.pbrMetallicRoughness||{};if(n.color=new fe(1,1,1),n.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;n.color.setRGB(d[0],d[1],d[2],ei),n.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(n,"map",u.baseColorTexture,Lt)),n.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,n.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(n,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(n,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,n)})))}a.doubleSided===!0&&(n.side=vi);let h=a.alphaMode||cu.OPAQUE;if(h===cu.BLEND?(n.transparent=!0,n.depthWrite=!1):(n.transparent=!1,h===cu.MASK&&(n.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==li&&(l.push(t.assignTexture(n,"normalMap",a.normalTexture)),n.normalScale=new te(1,1),a.normalTexture.scale!==void 0)){let u=a.normalTexture.scale;n.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&s!==li&&(l.push(t.assignTexture(n,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(n.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==li){let u=a.emissiveFactor;n.emissive=new fe().setRGB(u[0],u[1],u[2],ei)}return a.emissiveTexture!==void 0&&s!==li&&l.push(t.assignTexture(n,"emissiveMap",a.emissiveTexture,Lt)),Promise.all(l).then(function(){let u=new s(n);return a.name&&(u.name=a.name),Bi(u,a),t.associations.set(u,{materials:e}),a.extensions&&Yr(r,u,a),u})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function a(n){return i[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(n,t).then(function(o){return Sf(o,n,t)})}let s=[];for(let n=0,o=e.length;n<o;n++){let l=e[n],h=R1(l),u=r[h];if(u)s.push(u.promise);else{let d;l.extensions&&l.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=a(l):d=Sf(new Xe,l,t),l.mode===_i.TRIANGLE_STRIP?d=d.then(c=>pf(c,Rl)):l.mode===_i.TRIANGLE_FAN&&(d=d.then(c=>pf(c,Hn))),r[h]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){let t=this,i=this.json,r=this.extensions,a=i.meshes[e],s=a.primitives,n=[];for(let o=0,l=s.length;o<l;o++){let h=s[o].material===void 0?E1(this.cache):this.getDependency("material",s[o].material);n.push(h)}return n.push(t.loadGeometries(s)),Promise.all(n).then(async function(o){let l=o.slice(0,o.length-1),h=o[o.length-1],u=[];for(let c=0,p=h.length;c<p;c++){let g=h[c],_=s[c],m,f=l[c];if(_.mode===_i.TRIANGLES||_.mode===_i.TRIANGLE_STRIP||_.mode===_i.TRIANGLE_FAN||_.mode===void 0){let y=a.isSkinnedMesh===!0,M=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");y&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=y&&M?new ah(g,f):new wt(g,f),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(_.mode===_i.LINES)m=new wi(g,f);else if(_.mode===_i.LINE_STRIP)m=new tr(g,f);else if(_.mode===_i.LINE_LOOP)m=new uh(g,f);else if(_.mode===_i.POINTS)m=new dh(g,f);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(m.geometry.morphAttributes).length>0&&C1(m,a),m.name=t.createUniqueName(a.name||"mesh_"+e),Bi(m,a),_.extensions&&Yr(r,m,_),t.assignFinalMaterial(m),u.push(m)}for(let c=0,p=u.length;c<p;c++)t.associations.set(u[c],{meshes:e,primitives:c});if(u.length===1)return a.extensions&&Yr(r,u[0],a),u[0];let d=new Yi;a.extensions&&Yr(r,d,a),t.associations.set(d,{meshes:e});for(let c=0,p=u.length;c<p;c++)d.add(u[c]);return d})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ft(dc.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Oa(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Bi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,a=t.joints.length;r<a;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let a=r.pop(),s=r,n=[],o=[];for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u){n.push(u);let d=new Ve;a!==null&&d.fromArray(a.array,l*16),o.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new sh(n,o)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,s=[],n=[],o=[],l=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){let c=r.channels[u],p=r.samplers[c.sampler],g=c.target,_=g.node,m=r.parameters!==void 0?r.parameters[p.input]:p.input,f=r.parameters!==void 0?r.parameters[p.output]:p.output;g.node!==void 0&&(s.push(this.getDependency("node",_)),n.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",f)),l.push(p),h.push(g))}return Promise.all([Promise.all(s),Promise.all(n),Promise.all(o),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],c=u[1],p=u[2],g=u[3],_=u[4],m=[];for(let y=0,M=d.length;y<M;y++){let v=d[y],b=c[y],E=p[y],C=g[y],x=_[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let w=i._createAnimationTracks(v,b,E,C,x);if(w)for(let L=0;L<w.length;L++)m.push(w[L])}let f=new Ua(a,void 0,m);return Bi(f,r),f})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(a){let s=i._getNodeRef(i.meshCache,r.mesh,a);return r.weights!==void 0&&s.traverse(function(n){if(n.isMesh)for(let o=0,l=r.weights.length;o<l;o++)n.morphTargetInfluences[o]=r.weights[o]}),s})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],a=i._loadNodeShallow(e),s=[],n=r.children||[];for(let l=0,h=n.length;l<h;l++)s.push(i.getDependency("node",n[l]));let o=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([a,Promise.all(s),o]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(c){c.isSkinnedMesh&&c.bind(d,P1)});for(let c=0,p=u.length;c<p;c++)h.add(u[c]);if(h.userData.pivot!==void 0&&u.length>0){let c=h.userData.pivot,p=u[0];h.pivot=new R().fromArray(c),h.position.x-=c[0],h.position.y-=c[1],h.position.z-=c[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],s=a.name?r.createUniqueName(a.name):"",n=[],o=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return o&&n.push(o),a.camera!==void 0&&n.push(r.getDependency("camera",a.camera).then(function(l){return r._getNodeRef(r.cameraCache,a.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){n.push(l)}),this.nodeCache[e]=Promise.all(n).then(function(l){let h;if(a.isBone===!0?h=new yo:l.length>1?h=new Yi:l.length===1?h=l[0]:h=new at,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(a.name&&(h.userData.name=a.name,h.name=s),Bi(h,a),a.extensions&&Yr(i,h,a),a.matrix!==void 0){let u=new Ve;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);if(!r.associations.has(h))r.associations.set(h,{});else if(a.mesh!==void 0&&r.meshCache.refs[a.mesh]>1){let u=r.associations.get(h);r.associations.set(h,{...u})}return r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,a=new Yi;i.name&&(a.name=r.createUniqueName(i.name)),Bi(a,i),i.extensions&&Yr(t,a,i);let s=i.nodes||[],n=[];for(let o=0,l=s.length;o<l;o++)n.push(r.getDependency("node",s[o]));return Promise.all(n).then(function(o){for(let h=0,u=o.length;h<u;h++){let d=o[h];d.parent!==null?a.add(QM(d)):a.add(d)}let l=h=>{let u=new Map;for(let[d,c]of r.associations)(d instanceof It||d instanceof Tt)&&u.set(d,c);return h.traverse(d=>{let c=r.associations.get(d);c!=null&&u.set(d,c)}),u};return r.associations=l(a),a})}_createAnimationTracks(e,t,i,r,a){let s=[],n=e.name?e.name:e.uuid,o=[];function l(c){c.morphTargetInfluences&&o.push(c.name?c.name:c.uuid)}Sr[a.path]===Sr.weights?(l(e),e.isGroup&&e.children.forEach(l)):o.push(n);let h;switch(Sr[a.path]){case Sr.weights:h=La;break;case Sr.rotation:h=Na;break;case Sr.translation:case Sr.scale:h=Vs;break;default:switch(i.itemSize){case 1:h=La;break;case 2:case 3:default:h=Vs;break}break}let u=r.interpolation!==void 0?w1[r.interpolation]:oa,d=this._getArrayFromAccessor(i);for(let c=0,p=o.length;c<p;c++){let g=new h(o[c]+"."+Sr[a.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=pu(t.constructor),r=new Float32Array(t.length);for(let a=0,s=t.length;a<s;a++)r[a]=t[a]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){let i=this instanceof Na?T1:vf;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function N1(e,t,i){let r=t.attributes,a=new zt;if(r.POSITION!==void 0){let o=i.json.accessors[r.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(a.set(new R(l[0],l[1],l[2]),new R(h[0],h[1],h[2])),o.normalized){let u=pu(Wa[o.componentType]);a.min.multiplyScalar(u),a.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new R,l=new R;for(let h=0,u=s.length;h<u;h++){let d=s[h];if(d.POSITION!==void 0){let c=i.json.accessors[d.POSITION],p=c.min,g=c.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),c.normalized){let _=pu(Wa[c.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}e.boundingBox=a;let n=new Dt;a.getCenter(n.center),n.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=n}function Sf(e,t,i){let r=t.attributes,a=[];function s(n,o){return i.getDependency("accessor",n).then(function(l){e.setAttribute(o,l)})}for(let n in r){let o=uu[n]||n.toLowerCase();o in e.attributes||a.push(s(r[n],o))}if(t.indices!==void 0&&!e.index){let n=i.getDependency("accessor",t.indices).then(function(o){e.setIndex(o)});a.push(n)}return Ke.workingColorSpace!==ei&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Bi(e,t),N1(e,t,i),Promise.all(a).then(function(){return t.targets!==void 0?A1(e,t.targets,i):e})}/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/export{gl as ACESFilmicToneMapping,Tr as AddEquation,ju as AddOperation,Cl as AdditiveAnimationBlendMode,ll as AdditiveBlending,vl as AgXToneMapping,wl as AlphaFormat,nc as AlwaysCompare,Js as AlwaysDepth,ec as AlwaysStencilFunc,np as AmbientLight,Tp as AnimationAction,Ua as AnimationClip,q0 as AnimationLoader,S_ as AnimationMixer,x_ as AnimationObjectGroup,V0 as AnimationUtils,od as ArcCurve,xp as ArrayCamera,Y_ as ArrowHelper,yl as AttachedBindMode,Sp as Audio,h_ as AudioAnalyser,Wh as AudioContext,n_ as AudioListener,i_ as AudioLoader,Z_ as AxesHelper,Xt as BackSide,$u as BasicDepthPacking,om as BasicShadowMap,Yc as BatchedMesh,Yd as BezierInterpolant,yo as Bone,zr as BooleanKeyframeTrack,Cp as Box2,zt as Box3,j_ as Box3Helper,Is as BoxGeometry,X_ as BoxHelper,lt as BufferAttribute,Xe as BufferGeometry,dp as BufferGeometryLoader,Sl as ByteType,Di as Cache,Wo as Camera,W_ as CameraHelper,n0 as CanvasTexture,rd as CapsuleGeometry,ud as CatmullRomCurve3,ml as CineonToneMapping,ad as CircleGeometry,jt as ClampToEdgeWrapping,R_ as Clock,fe as Color,Dh as ColorKeyframeTrack,Ke as ColorManagement,jm as Compatibility,a0 as CompressedArrayTexture,s0 as CompressedCubeTexture,Lo as CompressedTexture,Y0 as CompressedTextureLoader,mh as ConeGeometry,Hu as ConstantAlphaFactor,Vu as ConstantColorFactor,K_ as Controls,vp as CubeCamera,id as CubeDepthTexture,Ni as CubeReflectionMapping,nr as CubeRefractionMapping,Rs as CubeTexture,Z0 as CubeTextureLoader,ta as CubeUVReflectionMapping,Sh as CubicBezierCurve,dd as CubicBezierCurve3,jd as CubicInterpolant,ol as CullFaceBack,wu as CullFaceFront,nm as CullFaceFrontBack,Tu as CullFaceNone,Ei as Curve,fd as CurvePath,Au as CustomBlending,_l as CustomToneMapping,fh as CylinderGeometry,P_ as Cylindrical,Zn as Data3DTexture,Yn as DataArrayTexture,pi as DataTexture,J0 as DataTextureLoader,Ig as DataUtils,bm as DecrementStencilOp,wm as DecrementWrapStencilOp,Qd as DefaultLoadingManager,Ui as DepthFormat,lr as DepthStencilFormat,Ca as DepthTexture,qu as DetachedBindMode,Gh as DirectionalLight,H_ as DirectionalLightHelper,qd as DiscreteInterpolant,sd as DodecahedronGeometry,vi as DoubleSide,Ou as DstAlphaFactor,Bu as DstColorFactor,Gm as DynamicCopyUsage,Um as DynamicDrawUsage,Fm as DynamicReadUsage,nd as EdgesGeometry,Oo as EllipseCurve,rc as EqualCompare,$s as EqualDepth,Rm as EqualStencilFunc,ts as EquirectangularReflectionMapping,is as EquirectangularRefractionMapping,ji as Euler,Si as EventDispatcher,ph as ExternalTexture,Md as ExtrudeGeometry,Ci as FileLoader,Fg as Float16BufferAttribute,Te as Float32BufferAttribute,qt as FloatType,Ec as Fog,wc as FogExp2,r0 as FramebufferTexture,Gi as FrontSide,Ur as Frustum,jc as FrustumArray,A_ as GLBufferAttribute,km as GLSL1,Il as GLSL3,e1 as GLTFLoader,ac as GreaterCompare,en as GreaterDepth,jn as GreaterEqualCompare,Qs as GreaterEqualDepth,Nm as GreaterEqualStencilFunc,Pm as GreaterStencilFunc,V_ as GridHelper,Yi as Group,o0 as HTMLTexture,yi as HalfFloatType,tp as HemisphereLight,G_ as HemisphereLightHelper,bd as IcosahedronGeometry,mp as ImageBitmapLoader,ks as ImageLoader,gc as ImageUtils,Mm as IncrementStencilOp,Tm as IncrementWrapStencilOp,gr as InstancedBufferAttribute,cp as InstancedBufferGeometry,E_ as InstancedInterleavedBuffer,nh as InstancedMesh,Dg as Int16BufferAttribute,Og as Int32BufferAttribute,Lg as Int8BufferAttribute,sn as IntType,ys as InterleavedBuffer,Sa as InterleavedBufferAttribute,Br as Interpolant,Al as InterpolateBezier,na as InterpolateDiscrete,oa as InterpolateLinear,Vn as InterpolateSmooth,Xm as InterpolationSamplingMode,Wm as InterpolationSamplingType,Em as InvertStencilOp,Wn as KeepStencilOp,gi as KeyframeTrack,Uc as LOD,Td as LatheGeometry,Kn as Layers,ic as LessCompare,Ks as LessDepth,Xn as LessEqualCompare,ea as LessEqualDepth,Im as LessEqualStencilFunc,Cm as LessStencilFunc,_r as Light,lp as LightProbe,Vo as LightShadow,tr as Line,D_ as Line3,Ht as LineBasicMaterial,Mh as LineCurve,pd as LineCurve3,Hd as LineDashedMaterial,uh as LineLoop,wi as LineSegments,pt as LinearFilter,Uh as LinearInterpolant,dm as LinearMipMapLinearFilter,cm as LinearMipMapNearestFilter,ui as LinearMipmapLinearFilter,ra as LinearMipmapNearestFilter,ei as LinearSRGBColorSpace,pl as LinearToneMapping,cs as LinearTransfer,$t as Loader,xr as LoaderUtils,Oh as LoadingManager,Yu as LoopOnce,Ju as LoopPingPong,Zu as LoopRepeat,am as MOUSE,It as Material,lm as MaterialBlending,up as MaterialLoader,dc as MathUtils,L_ as Matrix2,qe as Matrix3,Ve as Matrix4,Pu as MaxEquation,wt as Mesh,li as MeshBasicMaterial,Ph as MeshDepthMaterial,Lh as MeshDistanceMaterial,Vd as MeshLambertMaterial,kd as MeshMatcapMaterial,Gd as MeshNormalMaterial,Bd as MeshPhongMaterial,mi as MeshPhysicalMaterial,zs as MeshStandardMaterial,zd as MeshToonMaterial,Iu as MinEquation,ia as MirroredRepeatWrapping,Xu as MixOperation,ul as MultiplyBlending,es as MultiplyOperation,xt as NearestFilter,um as NearestMipMapLinearFilter,hm as NearestMipMapNearestFilter,wr as NearestMipmapLinearFilter,an as NearestMipmapNearestFilter,xl as NeutralToneMapping,tc as NeverCompare,Zs as NeverDepth,Am as NeverStencilFunc,Li as NoBlending,ki as NoColorSpace,_m as NoNormalPacking,xi as NoToneMapping,kn as NormalAnimationBlendMode,Qr as NormalBlending,xm as NormalGAPacking,vm as NormalRGPacking,sc as NotEqualCompare,tn as NotEqualDepth,Lm as NotEqualStencilFunc,La as NumberKeyframeTrack,at as Object3D,e_ as ObjectLoader,Qu as ObjectSpaceNormalMap,Ch as OctahedronGeometry,Nu as OneFactor,Wu as OneMinusConstantAlphaFactor,ku as OneMinusConstantColorFactor,Fu as OneMinusDstAlphaFactor,zu as OneMinusDstColorFactor,dl as OneMinusSrcAlphaFactor,Du as OneMinusSrcColorFactor,Oa as OrthographicCamera,Qa as PCFShadowMap,Eu as PCFSoftShadowMap,ru as PMREMGenerator,Ns as Path,Ft as PerspectiveCamera,Qi as Plane,Go as PlaneGeometry,q_ as PlaneHelper,zh as PointLight,B_ as PointLightHelper,dh as Points,Ro as PointsMaterial,k_ as PolarGridHelper,Ra as PolyhedronGeometry,l_ as PositionalAudio,ft as PropertyBinding,bp as PropertyMixer,bh as QuadraticBezierCurve,Th as QuadraticBezierCurve3,Bt as Quaternion,Na as QuaternionKeyframeTrack,Kd as QuaternionLinearInterpolant,vn as R11_EAC_Format,hs as RED_GREEN_RGTC2_Format,Bn as RED_RGTC1_Format,rm as REVISION,ls as RG11_EAC_Format,fm as RGBADepthPacking,Yt as RGBAFormat,un as RGBAIntegerFormat,Ln as RGBA_ASTC_10x10_Format,Rn as RGBA_ASTC_10x5_Format,In as RGBA_ASTC_10x6_Format,Pn as RGBA_ASTC_10x8_Format,Nn as RGBA_ASTC_12x10_Format,Un as RGBA_ASTC_12x12_Format,Sn as RGBA_ASTC_4x4_Format,Mn as RGBA_ASTC_5x4_Format,bn as RGBA_ASTC_5x5_Format,Tn as RGBA_ASTC_6x5_Format,wn as RGBA_ASTC_6x6_Format,En as RGBA_ASTC_8x5_Format,An as RGBA_ASTC_8x6_Format,Cn as RGBA_ASTC_8x8_Format,Dn as RGBA_BPTC_Format,_n as RGBA_ETC2_EAC_Format,fn as RGBA_PVRTC_2BPPV1_Format,pn as RGBA_PVRTC_4BPPV1_Format,ss as RGBA_S3TC_DXT1_Format,ns as RGBA_S3TC_DXT3_Format,os as RGBA_S3TC_DXT5_Format,mm as RGBDepthPacking,El as RGBFormat,pm as RGBIntegerFormat,On as RGB_BPTC_SIGNED_Format,Fn as RGB_BPTC_UNSIGNED_Format,mn as RGB_ETC1_Format,gn as RGB_ETC2_Format,dn as RGB_PVRTC_2BPPV1_Format,cn as RGB_PVRTC_4BPPV1_Format,as as RGB_S3TC_DXT1_Format,gm as RGDepthPacking,hr as RGFormat,hn as RGIntegerFormat,Ih as RawShaderMaterial,Ea as Ray,C_ as Raycaster,op as RectAreaLight,ln as RedFormat,rs as RedIntegerFormat,fl as ReinhardToneMapping,qm as RenderObjectRefreshType,Ol as RenderTarget,M_ as RenderTarget3D,or as RepeatWrapping,Sm as ReplaceStencilOp,Ru as ReverseSubtractEquation,wd as RingGeometry,xn as SIGNED_R11_EAC_Format,Gn as SIGNED_RED_GREEN_RGTC2_Format,zn as SIGNED_RED_RGTC1_Format,yn as SIGNED_RG11_EAC_Format,Lt as SRGBColorSpace,ot as SRGBTransfer,Ac as Scene,Je as ShaderChunk,Ri as ShaderLib,fi as ShaderMaterial,Ud as ShadowMaterial,Us as Shape,Ed as ShapeGeometry,J_ as ShapePath,ir as ShapeUtils,Ml as ShortType,sh as Skeleton,F_ as SkeletonHelper,ah as SkinnedMesh,vg as Source,Dt as Sphere,Rh as SphereGeometry,I_ as Spherical,Vh as SphericalHarmonics3,wh as SplineCurve,Bh as SpotLight,O_ as SpotLightHelper,Lc as Sprite,$l as SpriteMaterial,cl as SrcAlphaFactor,Gu as SrcAlphaSaturateFactor,Uu as SrcColorFactor,zm as StaticCopyUsage,qn as StaticDrawUsage,Om as StaticReadUsage,r_ as StereoCamera,Vm as StreamCopyUsage,Dm as StreamDrawUsage,Bm as StreamReadUsage,Gr as StringKeyframeTrack,Cu as SubtractEquation,hl as SubtractiveBlending,sm as TOUCH,Vi as TangentSpaceNormalMap,Ad as TetrahedronGeometry,Tt as Texture,ep as TextureLoader,Xi as TextureSource,iv as TextureUtils,yp as Timer,Hm as TimestampQuery,Cd as TorusGeometry,Rd as TorusKnotGeometry,pr as Triangle,Hn as TriangleFanDrawMode,Rl as TriangleStripDrawMode,Ku as TrianglesDrawMode,Id as TubeGeometry,rn as UVMapping,ql as Uint16BufferAttribute,Yl as Uint32BufferAttribute,Ng as Uint8BufferAttribute,Ug as Uint8ClampedBufferAttribute,b_ as Uniform,w_ as UniformsGroup,me as UniformsLib,Fd as UniformsUtils,Qt as UnsignedByteType,Tl as UnsignedInt101111Type,sa as UnsignedInt248Type,bl as UnsignedInt5999Type,ci as UnsignedIntType,nn as UnsignedShort4444Type,on as UnsignedShort5551Type,aa as UnsignedShortType,$r as VSMShadowMap,te as Vector2,R as Vector3,gt as Vector4,Vs as VectorKeyframeTrack,i0 as VideoFrameTexture,td as VideoTexture,Sg as WebGL3DRenderTarget,yg as WebGLArrayRenderTarget,ai as WebGLCoordinateSystem,au as WebGLCubeRenderTarget,ti as WebGLRenderTarget,$M as WebGLRenderer,cf as WebGLUtils,Cr as WebGPUCoordinateSystem,Qn as WebXRController,Pd as WireframeGeometry,us as WrapAroundEnding,Er as ZeroCurvatureEnding,Lu as ZeroFactor,Ar as ZeroSlopeEnding,ym as ZeroStencilOp,lc as createCanvasElement,Pe as error,Km as getConsoleFunction,ps as log,Jm as setConsoleFunction,pe as warn,Hi as warnOnce};
