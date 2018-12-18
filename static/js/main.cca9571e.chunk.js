(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports=a(308)},130:function(e,t,a){},132:function(e,t,a){},148:function(e,t,a){},169:function(e,t,a){},250:function(e,t,a){},262:function(e,t,a){},306:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(40),r=a.n(l),i=(a(130),a(3)),o=a(4),s=a(6),m=a(5),u=a(7),h=(a(132),a(49)),d=(a(148),{position:"relative",width:"100%",height:"60vh"}),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).onClick=function(e,t,n){var c=n.latLng.lat(),l=n.latLng.lng();a.props.setNewCoords(c,l)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.lat,a=e.lng;return c.a.createElement(h.Map,{google:this.props.google,zoom:2,containerStyle:d,onClick:this.onClick,initialCenter:{lat:41.69452881805707,lng:-8.846923664502128}},c.a.createElement(h.Marker,{position:{lat:t,lng:a}}))}}]),t}(n.Component),g=Object(h.GoogleApiWrapper)({apiKey:"AIzaSyCFmio79TncN-TlcoFdOX1K8WPxIQHUwxw",LoadingContainer:function(e){return c.a.createElement("div",null,"Map is loading...")}})(p),f=a(41),v=a.n(f),y=(a(169),a(50)),E=a.n(y),w=a(123),b=a(121),N=a.n(b),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={completed:0,buffer:10},a.progress=function(){var e=a.state.completed;if(e>100)a.setState({completed:0,buffer:10});else{var t=10*Math.random(),n=10*Math.random();a.setState({completed:e+t,buffer:e+t+n})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.progress,500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.completed,n=t.buffer;return c.a.createElement("div",{className:e.root},c.a.createElement(N.a,{variant:"buffer",value:a,valueBuffer:n}))}}]),t}(c.a.Component),k=Object(w.withStyles)({root:{flexGrow:1,paddingTop:2}})(O);E.a.apiKey="cebde3da6c210680a9368ee7a3b1d7ee",E.a.units="si";var j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={weather:null},a.getWeather=function(){a.setState({weather:null});var e=a.props,t={latitude:e.lat,longitude:e.lng};E.a.loadCurrent(t).then(function(e){a.setState({weather:e})})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getWeather()}},{key:"componentWillReceiveProps",value:function(e){this.props=e,this.getWeather()}},{key:"render",value:function(){var e=this.state.weather,t=this.props,a=t.lat,n=t.lng,l=c.a.createElement("div",{style:{paddingTop:"20px"}},c.a.createElement("div",{className:"coords"},"LOCATION: ",a),c.a.createElement("div",{className:"coords"},n));if(null===e)return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",null,"Calculating weather data..."),c.a.createElement(k,null),l));var r="https://darksky.net/images/weather-icons/"+e.icon+".png";return c.a.createElement("div",{className:"weather_container"},c.a.createElement("span",{className:"currently"},c.a.createElement("span",{className:"cloudy-icon currently-icon swip"},c.a.createElement("img",{width:"84",height:"84",src:r,alt:"cloudy Icon"})),c.a.createElement("span",{className:"desc swap"},c.a.createElement("span",{className:"summary swap"},e.temperature,"\u02da ",e.summary,"."),c.a.createElement("div",{className:"summary-high-low"},c.a.createElement("div",null,c.a.createElement("span",{className:"high-low-label"},"Humidity:"),e.humidity," %"),c.a.createElement("div",null,c.a.createElement("span",{className:"high-low-label"},"Pressure:"),e.pressure," hpa"),c.a.createElement("div",null,c.a.createElement("span",{className:"high-low-label"},"Visibility:"),e.visibility," km"),c.a.createElement("div",null,c.a.createElement("span",{className:"high-low-label"},"Wind:"),e.windSpeed," km/h (",e.windDirection,")"),c.a.createElement("div",null,c.a.createElement("span",{className:"high-low-label"},"Wind gust:"),e.windGust," km/h")))),l)}}]),t}(n.Component),C=(a(250),a(75)),_=a.n(C),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.street,a=e.street_number,l=e.city,r=e.country,i=e.fetchingAddress,o=e.fetchingFlag,s=e.population,m=e.fetchingError,u=e.fetchingTime,h=e.timeZone;return!0===m?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("div",null,"Choose a different place."),c.a.createElement("div",{className:"cannot"},"CAN NOT FETCH DATA FOR THIS LOCATION")):c.a.createElement(n.Fragment,null,!1===i&&c.a.createElement("div",{className:"city_details"},c.a.createElement("div",{className:"country"},r),c.a.createElement("div",{className:"city"},l),c.a.createElement("div",{className:"street"},t," ",a)),!0===i&&c.a.createElement("div",null,"Address is loading...",c.a.createElement(k,null)),c.a.createElement("hr",{style:{width:100}}),c.a.createElement("div",{className:"city_population"},!0===o&&c.a.createElement("div",null,"Flag is loading...",c.a.createElement(k,null)),!1===o&&c.a.createElement("div",null,c.a.createElement("img",{src:s.flag,className:"flag",width:"100",height:"auto",alt:"flag"}))),c.a.createElement("hr",{style:{width:100}}),c.a.createElement("div",{className:"city_population"},!0===u&&c.a.createElement("div",null,"Time is loading...",c.a.createElement(k,null)),!1===u&&c.a.createElement("div",{className:"time_container"},c.a.createElement(_.a,{format:"HH:mm:ss",ticking:!0,timezone:h}),c.a.createElement(_.a,{format:"dddd, MMMM Do YYYY",timezone:h}))))}}]),t}(n.Component),S=(a(262),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.news,a=e.fetchingNews,n=e.country;if(!0===a)return c.a.createElement("div",null,"Searching for news in ",n,"...",c.a.createElement(k,null));var l=t.map(function(e){return c.a.createElement("li",{key:e.url},c.a.createElement("a",{href:e.url,target:"_blank"},e.source.name),c.a.createElement("br",null),e.title)});return 0===l.length?c.a.createElement("div",null,"Could not find news from ",n,"."):c.a.createElement("div",{className:"news_container"},c.a.createElement("div",{className:"h4_container"},"News in ",n,":"),c.a.createElement("div",{className:"news_list"},c.a.createElement("ul",null,l)))}}]),t}(n.Component)),T=a(124),F=a.n(T),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c))))._handleOnClickPhoto=function(e,t){return function(n){a.props.handleOnClickPhoto(e,t)}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.secret,n=e.farm,l=e.server,r=e.title,i="https://farm".concat(n,".staticflickr.com/").concat(l,"/").concat(t,"_").concat(a,".jpg");return c.a.createElement("img",{src:i,onClick:this._handleOnClickPhoto(i,r),className:"photo",alt:r})}}]),t}(n.Component),P=(a(306),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={link:"",title:""},a.handleOnClickPhoto=function(e,t){console.log(e,t),a.setState({link:e,title:t},function(){document.getElementById("myModal").style.display="block"})},a.handleOnClickClose=function(){document.getElementById("myModal").style.display="none"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.photos;if(!0===t.fetchingPhotos)return c.a.createElement("div",null,c.a.createElement("div",null,"Downloading photos..."),c.a.createElement(k,null));var n=a.map(function(t){return c.a.createElement(I,{id:t.id,key:t.id,secret:t.secret,farm:t.farm,server:t.server,title:t.title,handleOnClickPhoto:e.handleOnClickPhoto})});if(0===n.length)return c.a.createElement("div",{className:"no_photos_container"},"No photos from this location.");var l=this.state,r=l.link,i=l.title;return c.a.createElement("div",{className:"photos_container"},n,c.a.createElement("div",{id:"myModal",className:"modal"},c.a.createElement("span",{className:"close",onClick:this.handleOnClickClose},"\xd7"),c.a.createElement("img",{className:"modal-content",alt:"asd",src:r}),c.a.createElement("div",{id:"caption"},i)))}}]),t}(n.Component)),M=new F.a("bedefbb1d71346c2a2795c2113f469fd"),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={lat:41.69452881805707,lng:-8.846923664502128,country:"",country_code:"",street:"",street_number:"",city:"",fetchingAddress:!0,fetchingFlag:!0,fetchingError:!1,news:null,fetchingNews:!0,fetchingPhotos:!0,photos:null,timeZone:"",fetchingTime:!0},a.setNewCoords=function(e,t){a.setState({lat:e,lng:t},function(){a.getAddress(),a.getFlicker(),a.getTime()})},a.getAddress=function(){a.setState({fetchingAddress:!0,fetchingError:!1});var e=a.state,t=e.lat,n=e.lng,c="",l="",r="",i="",o="",s=a.state.country,m=a.state.country_code;v.a.get("https://maps.googleapis.com/maps/api/geocode/json?language=EN&latlng="+t+","+n+"&key=AIzaSyCFmio79TncN-TlcoFdOX1K8WPxIQHUwxw").then(function(e){try{e.data.results[0].address_components.forEach(function(e){e.types.includes("route")&&(c=e.long_name),e.types.includes("street_number")?l=e.long_name:e.types.includes("locality")?r=e.long_name:e.types.includes("country")&&(i=e.long_name,o=e.short_name)}),a.setState({street:c,street_number:l,city:r,country:i,country_code:o,fetchingAddress:!1}),""!==i&&i!==s&&a.getCountryInfo(),""!==o&&o!==m&&a.getNews()}catch(t){a.setState({fetchingError:!0})}})},a.getNews=function(){a.setState({fetchingNews:!0});var e=a.state.country_code;M.v2.topHeadlines({category:"technology",language:e,country:e}).then(function(e){a.setState({news:e.articles,fetchingNews:!1})})},a.getCountryInfo=function(){a.setState({fetchingFlag:!0}),v.a.get("https://restcountries.eu/rest/v2/name/"+a.state.country).then(function(e){a.setState({population:e.data[0],fetchingFlag:!1})})},a.getTime=function(){var e=a.state.timeZone,t=a.state,n=t.lat,c=t.lng;v.a.get("https://maps.googleapis.com/maps/api/timezone/json?location="+n+","+c+"&timestamp=1331161200&key=AIzaSyCFmio79TncN-TlcoFdOX1K8WPxIQHUwxw").then(function(t){var n=t.data.timeZoneId;e!==n&&a.setState({timeZone:t.data.timeZoneId,fetchingTime:!1})})},a.getFlicker=function(){a.setState({fetchingPhotos:!0});var e=a.state,t=e.lat,n=e.lng,c=[],l="https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4c09233afcaed9679bba2f43c60206b3&lat="+t+"&lon="+n+"&per_page=9&format=json&nojsoncallback=1";v.a.get(l).then(function(e){c=e.data.photos.photo,a.setState({photos:c,fetchingPhotos:!1})})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getAddress(),this.getFlicker(),this.getTime()}},{key:"render",value:function(){var e=this.state,t=e.lat,a=e.lng,l=e.street,r=e.street_number,i=e.city,o=e.country,s=e.fetchingAddress,m=e.fetchingFlag,u=e.population,h=e.fetchingError,d=e.news,p=e.fetchingNews,f=e.photos,v=e.fetchingPhotos,y=e.fetchingTime,E=e.timeZone;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"map_item"},c.a.createElement(g,{setNewCoords:this.setNewCoords,lat:t,lng:a})),c.a.createElement("div",{className:"weather_item"},c.a.createElement(j,{lat:t,lng:a}))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"extra_item"},c.a.createElement(A,{street:l,street_number:r,city:i,country:o,fetchingAddress:s,fetchingFlag:m,population:u,fetchingError:h,timeZone:E,fetchingTime:y})),c.a.createElement("div",{className:"extra_item"},c.a.createElement(P,{photos:f,fetchingPhotos:v})),c.a.createElement("div",{className:"extra_item"},c.a.createElement(S,{news:d,country:o,fetchingNews:p}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[125,2,1]]]);
//# sourceMappingURL=main.cca9571e.chunk.js.map