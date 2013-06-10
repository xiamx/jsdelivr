(function(e,t,i){"use strict";var n,a,r=t.audio&&t.video,o=!1,s=i.bugs,l="mediaelement-jaris",u=function(){i.ready(l,function(){i.mediaelement.createSWF||(i.mediaelement.loadSwf=!0,i.reTest([l],r))})},c=i.cfg.mediaelement;if(!c)return i.error("mediaelement wasn't implemented but loaded"),void 0;if(r){var d=document.createElement("video");if(t.videoBuffered="buffered"in d,o="loop"in d,i.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),i.loader.loadList(["mediaelement-native-fix"])),!c.preferFlash){var p={1:1,2:1},f=function(t){var n,r,o;if(!c.preferFlash&&(e(t.target).is("audio, video")||(o=t.target.parentNode)&&e("source:last",o)[0]==t.target)&&(n=e(t.target).closest("audio, video"))&&!p[r=n.prop("error")]){if(null==r)return i.warn("There was an unspecified error on a mediaelement"),void 0;e(function(){a&&!c.preferFlash?(u(),i.ready("WINDOWLOAD "+l,function(){setTimeout(function(){c.preferFlash||!i.mediaelement.createSWF||n.is(".nonnative-api-active")||(c.preferFlash=!0,document.removeEventListener("error",f,!0),e("audio, video").each(function(){i.mediaelement.selectSource(this)}),i.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+n.prop("error")))},9)})):document.removeEventListener("error",f,!0)})}};document.addEventListener("error",f,!0),e("audio, video").each(function(){var t=e.prop(this,"error");return t&&!p[t]?(f({target:this}),!1):void 0})}}t.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof e("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(t){s.track=!0}}(),n=t.track&&!s.track,i.register("mediaelement-core",function(e,t,i,s,d){a=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(a?"swf":"no-swf");var p=t.mediaelement;p.parseRtmp=function(e){var i,n,a,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],i=1,n=o.length;n>i;i++)a||-1===o[i].indexOf(":")||(o[i]=o[i].split(":")[1],a=!0),a?e.streamId.push(o[i]):e.server+=o[i]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,i){t=e(t);var n,a={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return a.src?(n=t.attr("data-server"),null!=n&&(a.server=n),n=t.attr("type"),n?(a.type=n,a.container=e.trim(n.split(";")[0])):(i||(i=t[0].nodeName.toLowerCase(),"source"==i&&(i=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=i+"/rtmp",a.container=i+"/rtmp"):(n=p.getTypeForSrc(a.src,i,a),n&&(a.type=n,a.container=n))),n=t.attr("media"),n&&(a.media=n),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:p.parseRtmp(a)),a):a},m=!a&&"postMessage"in i&&r,h=function(){h.loaded||(h.loaded=!0,t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},v=function(){var i;return function(){!i&&m&&(i=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){a?u():v()};t.addPolyfill("mediaelement-yt",{test:!m,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=e.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(t,i){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return i+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var n;return e.each(p.mimeTypes[i],function(e,i){return-1!==i.indexOf(t)?(n=e,!1):d}),n},p.srces=function(t,i){if(t=e(t),!i){i=[];var n=t[0].nodeName.toLowerCase(),a=f(t,n);return a.src?i.push(a):e("source",t).each(function(){a=f(this,n),a.src&&i.push(a)}),i}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(i)||(i=[i]),i.forEach(function(e){var i=s.createElement("source");"string"==typeof e&&(e={src:e}),i.setAttribute("src",e.src),e.type&&i.setAttribute("type",e.type),e.media&&i.setAttribute("media",e.media),t.append(i)})},e.fn.loadMediaSrc=function(t,i){return this.each(function(){i!==d&&(e(this).removeAttr("poster"),i&&e.attr(this,"poster",i)),p.srces(this,t),e(this).mediaLoad()})},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(t,i){var n="";return(a||m)&&(t=e(t),i=i||p.srces(t),e.each(i,function(e,t){return t.container&&t.src&&(a&&-1!=p.swfMimeTypes.indexOf(t.container)||m&&"video/youtube"==t.container)?(n=t,!1):d})),n};var y={};p.canNativePlaySrces=function(t,i){var n="";if(r){t=e(t);var a=(t[0].nodeName||"").toLowerCase(),o=(y[a]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return n;i=i||p.srces(t),e.each(i,function(e,i){return i.type&&o.call(t[0],i.type)?(n=i,!1):d})}return n};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};p.setError=function(i,n){if(e("source",i).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(i).mediaLoad()}catch(a){}}else n||(n="can't play sources"),e(i).pause().data("mediaerror",n),t.error("mediaelementError: "+n),setTimeout(function(){e(i).data("mediaerror")&&e(i).trigger("mediaerror")},1)};var T=function(){var e;return function(i,n,r){t.ready(a?l:"mediaelement-yt",function(){p.createSWF?p.createSWF(i,n,r):e||(e=!0,g(),T(i,n,r))}),e||!m||p.createSWF||v()}}(),x=function(e,t,i,n,a){var r;i||i!==!1&&t&&"third"==t.isActive?(r=p.canThirdPlaySrces(e,n),r?T(e,r,t):a?p.setError(e,!1):x(e,t,!1,n,!0)):(r=p.canNativePlaySrces(e,n),r?t&&"third"==t.isActive&&p.setActive(e,"html5",t):a?(p.setError(e,!1),t&&"third"==t.isActive&&p.setActive(e,"html5",t)):x(e,t,!0,n,!0))},N=/^(?:embed|object|datalist)$/i,E=function(i,n){var a=t.data(i,"mediaelementBase")||t.data(i,"mediaelementBase",{}),r=p.srces(i),o=i.parentNode;clearTimeout(a.loadTimer),e.data(i,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!N.test(o.nodeName||"")&&(n=n||t.data(i,"mediaelement"),x(i,n,c.preferFlash||d,r))};p.selectSource=E,e(s).on("ended",function(i){var n=t.data(i.target,"mediaelement");(!o||n&&"html5"!=n.isActive||e.prop(i.target,"loop"))&&setTimeout(function(){!e.prop(i.target,"paused")&&e.prop(i.target,"loop")&&e(i.target).prop("currentTime",0).play()},1)});var A=!1,k=function(){var s=function(){if(t.implement(this,"mediaelement")&&(E(this),r&&(!o||"ActiveXObject"in i))){var n,a,s=this,l=function(){var t=e.prop(s,"buffered");if(t){for(var i="",n=0,a=t.length;a>n;n++)i+=t.end(n);return i}},u=function(){var i=l();i!=a&&(a=i,t.info("needed to trigger progress manually"),e(s).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(a=l()),clearTimeout(n),n=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(a=!1),clearTimeout(n)}}),"ActiveXObject"in i&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}};t.ready("dom-support",function(){A=!0,o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(i){var n=t.defineNodeNameProperty(i,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");E(this,e),!r||e&&"html5"!=e.isActive||!n.prop._supvalue||n.prop._supvalue.apply(this,arguments)}}});y[i]=t.defineNodeNameProperty(i,"canPlayType",{prop:{value:function(t){var n="";return r&&y[i].prop._supvalue&&(n=y[i].prop._supvalue.call(this,t),"no"==n&&(n="")),!n&&a&&(t=e.trim((t||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(t)&&(n="maybe")),n}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,i=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(i.loadTimer),i.loadTimer=setTimeout(function(){E(e),e=null},9)}}),t.addReady(function(t,i){var n=e("video, audio",t).add(i.filter("video, audio")).each(s);!h.loaded&&e("track",n).length&&h(),n=null})}),r&&!A&&t.addReady(function(i,a){A||e("video, audio",i).add(a.filter("video, audio")).each(function(){return p.canNativePlaySrces(this)?(n&&!t.modules.track.options.override||h.loaded||!e("track",this).length||h(),d):(g(),A=!0,!1)})})};n&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(t.isReady("mediaelement-core",!0),k(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(l,k),t.ready("track",h)})})(jQuery,Modernizr,webshims);