(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/Uhd":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return u}));var r=n("q1tI"),a=n.n(r),i=n("TSYQ"),s=n.n(i),o=function(t){var e=t.left,n=t.children,r=t.className;return a.a.createElement("div",{className:s()(r,"grid__container",{left:e})},n)};o.defaultProps={left:!1,className:""};var u=function(t){var e,n=t.className,r=t.padding,i=t.limitWidth,o=t.full,u=t.children,c=t.autosize;return a.a.createElement("div",{className:s()(n,"grid__item",(e={},e["p-"+r]=r,e["no-min"]=!i,e.auto=c,e.full=o,e))},u)};u.defaultProps={full:!1,limitWidth:!0,padding:null,className:"",autosize:!1}},"9LYV":function(t,e,n){"use strict";n("t+fG")("big",(function(t){return function(){return t(this,"big","","")}}))},CRfS:function(t,e,n){"use strict";n("y7hu"),n("sC2a"),n("pJf4"),n("9LYV");var r=n("q1tI"),a=n.n(r),i=n("TSYQ"),s=n.n(i),o=n("Wgwc"),u=n.n(o),c=(n("Z5Ip"),function(t){var e=t.event,n=t.big;return a.a.createElement("div",{className:s()("card-event__infos color-grey-dark",{big:n})},a.a.createElement("p",{className:"card__date text-xs"},a.a.createElement("span",{className:"icon-calendar color-blue"}),a.a.createElement("span",null,u()(e.local_date).format("MMM D, YYYY")+" "+e.local_time)),a.a.createElement("p",{className:"text-xs"},a.a.createElement("span",{className:"icon-location color-blue"}),a.a.createElement("span",null,e.venue.name," - ",e.venue.city)))});c.defaultProps={big:!1};var l=function(t){var e,n=t.event,r=t.big,i=t.noDesc,o=n.description.replace(/<p>/gi,"").replace(/<\/p>/gi,"");return a.a.createElement("a",{href:n.link,target:"_blank",rel:"nofollow noreferrer noopener",className:s()("card__event card p-10 clickable",{big:r,"full-row":r,past:u()(n.local_date).isBefore(u()())})},a.a.createElement("div",{className:"event__left-big"},a.a.createElement("img",{className:"event__image",src:(null===(e=n.featured_photo)||void 0===e?void 0:e.photo_link)||"/meetup-placeholder.png",alt:n.name}),a.a.createElement(c,{event:n,big:!0})),a.a.createElement("div",{className:"card__content"},a.a.createElement("h3",{className:"card__title"},n.name),!i&&a.a.createElement("p",{className:"card__description",dangerouslySetInnerHTML:{__html:o}}),a.a.createElement(c,{event:n})))};l.defaultProps={big:!1,noDesc:!1},e.a=l},"D+Cu":function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return m}));n("pJf4"),n("q8oJ"),n("8npG"),n("YbXK"),n("cFtU"),n("rzGZ"),n("m210"),n("4DPX"),n("zGcK");var r=n("q1tI"),a=n.n(r),i=n("Wgwc"),s=n.n(i),o=n("TJpk"),u=n.n(o),c=(n("Z5Ip"),n("7oih")),l=n("CRfS"),f=n("/Uhd");function d(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m="2737610857";e.default=function(t){var e=t.location,n=d(t.data.allEvent.nodes),r=n.filter((function(t){return s()(t.local_date).isAfter(s()())})).sort((function(t,e){return s()(t.local_date).isBefore(s()(e.local_date))?-1:s()(t.local_date).isAfter(s()(e.local_date))?1:0})),i=n.filter((function(t){return!s()(t.local_date).isAfter(s()())})).sort((function(t,e){return s()(t.local_date).isAfter(s()(e.local_date))?-1:s()(t.local_date).isBefore(s()(e.local_date))?1:0}));return a.a.createElement(c.a,{location:e},a.a.createElement("div",{className:"events"},a.a.createElement(u.a,{title:"Events"}),a.a.createElement("header",{className:"page__header-overlaid bg-blue-extralight"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"page__title color-blue-extradark"},"Our ",a.a.createElement("strong",{className:"color-blue-dark"},"events")),a.a.createElement("p",{className:"page__subtitle h4-like"},"Meet the community in the next API Platform event organized near you!"))),a.a.createElement("div",{className:"event__main"},!!r.length&&a.a.createElement("section",{className:"events__upcoming"},a.a.createElement("h2",{className:"accessibility__hidden-block"},"Upcoming events"),a.a.createElement("div",{className:"container"},a.a.createElement(f.a,null,r.map((function(t,e){return a.a.createElement(f.b,{full:0===e},a.a.createElement(l.a,{big:0===e,event:t}))}))))),a.a.createElement("section",{className:"events__past"},a.a.createElement("div",{className:"container"},a.a.createElement("h2",{className:r.length?"events-past__title":"accessibility__hidden-block"},"Past events"),a.a.createElement(f.a,null,i.map((function(t){return a.a.createElement(f.b,{className:"small-event__item"},a.a.createElement(l.a,{event:t,noDesc:!0}))}))))))))}},J6QO:function(t,e,n){"use strict";var r=n("96qb"),a=Date.prototype.getTime,i=Date.prototype.toISOString,s=function(t){return t>9?t:"0"+t};t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001))}))||!r((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(a.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+("00000"+Math.abs(e)).slice(r?-6:-4)+"-"+s(t.getUTCMonth()+1)+"-"+s(t.getUTCDate())+"T"+s(t.getUTCHours())+":"+s(t.getUTCMinutes())+":"+s(t.getUTCSeconds())+"."+(n>99?n:"0"+s(n))+"Z"}:i},Wgwc:function(t,e,n){n("pQ2P"),n("nMRu"),n("q8oJ"),n("C9fy"),n("8npG"),n("Ll4R"),n("pJf4"),n("HQhv"),n("sC2a"),n("YBKJ"),t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",a="day",i="week",s="month",o="quarter",u="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(a,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,s),a=e-r<0,i=t.clone().add(n+(a?-1:1),s);return Number(-(n+(e-r)/(a?r-i:i-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:s,y:u,w:i,d:a,D:"date",h:r,m:n,s:e,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",g={};g[m]=h;var p=function(t){return t instanceof y},v=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)g[t]&&(r=t),e&&(g[t]=e,r=t);else{var a=t.name;g[a]=t,r=a}return!n&&r&&(m=r),r||!n&&m},$=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},_=d;_.l=v,_.i=p,_.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var y=function(){function f(t){this.$L=this.$L||v(t.locale,null,!0),this.parse(t)}var d=f.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return _},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return $(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<$(t)},d.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},d.year=function(t){return this.$g(t,"$y",u)},d.month=function(t){return this.$g(t,"$M",s)},d.day=function(t){return this.$g(t,"$W",a)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",n)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var c=this,l=!!_.u(o)||o,f=_.p(t),d=function(t,e){var n=_.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf(a)},h=function(t,e){return _.w(c.toDate()[t].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,g=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case u:return l?d(1,0):d(31,11);case s:return l?d(1,g):d(0,g+1);case i:var $=this.$locale().weekStart||0,y=(m<$?m+7:m)-$;return d(l?p-y:p+(6-y),g);case a:case"date":return h(v+"Hours",0);case r:return h(v+"Minutes",1);case n:return h(v+"Seconds",2);case e:return h(v+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(i,o){var c,l=_.p(i),f="set"+(this.$u?"UTC":""),d=(c={},c.day=f+"Date",c.date=f+"Date",c[s]=f+"Month",c[u]=f+"FullYear",c[r]=f+"Hours",c[n]=f+"Minutes",c[e]=f+"Seconds",c[t]=f+"Milliseconds",c)[l],h=l===a?this.$D+(o-this.$W):o;if(l===s||l===u){var m=this.clone().set("date",1);m.$d[d](h),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else d&&this.$d[d](h);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[_.p(t)]()},d.add=function(t,o){var c,l=this;t=Number(t);var f=_.p(o),d=function(e){var n=$(l);return _.w(n.date(n.date()+Math.round(e*t)),l)};if(f===s)return this.set(s,this.$M+t);if(f===u)return this.set(u,this.$y+t);if(f===a)return d(1);if(f===i)return d(7);var h=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[f]||1,m=this.$d.getTime()+t*h;return _.w(m,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=_.z(this),a=this.$locale(),i=this.$H,s=this.$m,o=this.$M,u=a.weekdays,c=a.months,f=function(t,r,a,i){return t&&(t[r]||t(e,n))||a[r].substr(0,i)},d=function(t){return _.s(i%12||12,t,"0")},h=a.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:_.s(o+1,2,"0"),MMM:f(a.monthsShort,o,c,3),MMMM:f(c,o),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:f(a.weekdaysMin,this.$W,u,2),ddd:f(a.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:_.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,s,!0),A:h(i,s,!1),m:String(s),mm:_.s(s,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||m[t]||r.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,a,c){var l,f=_.p(a),d=$(t),h=6e4*(d.utcOffset()-this.utcOffset()),m=this-d,g=_.m(this,d);return g=(l={},l[u]=g/12,l[s]=g,l[o]=g/3,l[i]=(m-h)/6048e5,l.day=(m-h)/864e5,l[r]=m/36e5,l[n]=m/6e4,l[e]=m/1e3,l)[f]||m,c?g:_.a(g)},d.daysInMonth=function(){return this.endOf(s).$D},d.$locale=function(){return g[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return _.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},f}();return $.prototype=y.prototype,$.extend=function(t,e){return t(e,y,$),$},$.locale=v,$.isDayjs=p,$.unix=function(t){return $(1e3*t)},$.en=g[m],$.Ls=g,$}()},Z5Ip:function(t,e,n){"use strict";var r=n("17x9"),a=n.n(r);a.a.shape({local_date:a.a.string,local_time:a.a.string,name:a.a.string,venue:a.a.shape({name:a.a.string,city:a.a.string}),featured_photo:a.a.shape({photo_link:a.a.string}),status:a.a.string,link:a.a.string}),a.a.shape({login:a.a.string,avatar:a.a.string,profile_url:a.a.string,id:a.a.string,contributions:a.a.number,project:a.a.shape({name:a.a.string,link:a.a.string}),position:a.a.number})},nMRu:function(t,e,n){"use strict";var r=n("P8UN"),a=n("DFzH"),i=n("kxs/");r(r.P+r.F*n("96qb")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=a(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},pQ2P:function(t,e,n){var r=n("P8UN"),a=n("J6QO");r(r.P+r.F*(Date.prototype.toISOString!==a),"Date",{toISOString:a})},"t+fG":function(t,e,n){var r=n("P8UN"),a=n("96qb"),i=n("ap2Z"),s=/"/g,o=function(t,e,n,r){var a=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+a+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),r(r.P+r.F*a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},y7hu:function(t,e,n){"use strict";n("t+fG")("link",(function(t){return function(e){return t(this,"a","href",e)}}))}}]);
//# sourceMappingURL=component---src-pages-community-events-js-8cc2e0c039cfd2bc9b76.js.map