(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){e.exports=a(246)},139:function(e,t,a){},140:function(e,t,a){},242:function(e,t,a){e.exports=a.p+"static/media/registration.fb2361d1.jpeg"},246:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=(a(139),a(140),a(250)),l=a(248),s=(a(41),a(16)),d=a(247),u=(a(93),a(94)),m=a(95),h=d.a.Meta,p=function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement(s.a,{to:"candidates"},r.a.createElement(d.a,{hoverable:!0,style:{width:400,height:500},cover:r.a.createElement("img",{alt:"example",src:m})},r.a.createElement(h,{title:"Candidates",description:"Click here to get info on your 2020 presidential candidates"}))),r.a.createElement(s.a,{to:"voterInfo"},r.a.createElement(d.a,{hoverable:!0,style:{width:400,height:500},cover:r.a.createElement("img",{alt:"example",src:u})},r.a.createElement(h,{title:"Voter Info",description:"Click here to get info on where to vote, what to bring, and if you are registered"}))))},g=c.a.Sider,f=function(){return r.a.createElement(g,{width:200,style:{background:"#fff"}},r.a.createElement(l.a,{mode:"inline",style:{height:"100%"}},r.a.createElement(l.a.Item,{key:"1"},r.a.createElement(s.a,{to:"what-to-bring"},"What to Bring")),r.a.createElement(l.a.Item,{key:"3"},r.a.createElement(s.a,{to:"how-and-where"},"Where and How to Vote")),r.a.createElement(l.a.Item,{key:"4"},r.a.createElement(s.a,{to:"am-i-registered"},"Am I Registered?"))))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("iframe",{title:"registration","test-id":"regCheckForm",src:"https://verify.vote.org/?partner=111111&campaign=free-tools",width:"100%",marginHeight:"0",frameBorder:"0",height:"1200px"}))},E=a(40),v=a(24),y=a.n(v),w=a(249),k=a(49),j=a(23),x={height:"50vh",overflow:"scroll"},O=function(e){var t=Object(n.useState)(e.usaState),a=Object(E.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)("In person details here"),l=Object(E.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)("Absentee details here"),h=Object(E.a)(m,2),p=h[0],g=h[1];Object(n.useEffect)(function(){i(e.usaState),y.a.get("http://".concat("ec2-3-16-229-206.us-east-2.compute.amazonaws.com","/api/voterId/").concat(o)).then(function(e){u(e.data[0].in_person),g(e.data[0].absentee)}).catch(function(e){console.log(e)})});var f=function(e){return e.split("\n").map(function(e,t){return r.a.createElement("p",{key:t},e)})};return r.a.createElement("div",{style:{background:"#ECECEC",padding:"30px"}},r.a.createElement("h1",null,o),r.a.createElement(k.a,{gutter:16},r.a.createElement(j.a,{span:12},r.a.createElement(d.a,{title:"In-person Voting",bordered:!1,style:x},f(s))),r.a.createElement(j.a,{span:12},r.a.createElement(d.a,{title:"Absentee Voting",bordered:!1,style:x},r.a.createElement("p",null,f(p))))))},C=function(){var e=w.a.Option,t=Object(n.useState)([]),a=Object(E.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)("Alabama"),l=Object(E.a)(c,2),s=l[0],d=l[1];return Object(n.useEffect)(function(){var e="http://".concat("ec2-3-16-229-206.us-east-2.compute.amazonaws.com","/api/voter");y.a.get(e).then(function(e){var t=e.data.sort();i(t)}).catch(function(e){return console.log("error",e)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{size:"large",defaultValue:s,onChange:function(e){d(e)},style:{width:200}},o.map(function(t,a){return r.a.createElement(e,{key:t},t)})),r.a.createElement(O,{usaState:s}))},S=a(29),I=a(30),A=a(32),M=a(31),N=a(33),W=a(22),L=a(91),R=a(131),z=a.n(R),T=a(12),D=a.n(T),F={92260:{locations:[{address:"42095 Washington St, Palm Desert, CA 92211",hours:"8am - 8pm",coordinates:[-116.3037304,33.7508854]},{address:"44775 San Pablo Ave, Palm Desert, CA 92260",hours:"7am - 7pm",coordinates:[-116.3826232,33.7230418]},{address:"36101 Bob Hope Dr, Rancho Mirage, CA 92270",hours:"10am - 6pm",coordinates:[-116.406071,33.787007]}]},10009:{locations:[{address:"55 Lexington Ave, New York, NY 10010",hours:"8am - 8pm",coordinates:[-73.98391,40.740429]},{address:"6 MetroTech Center, Brooklyn, NY 11201",hours:"7am - 7pm",coordinates:[-73.987221,40.69371]},{address:"125 E 11th St, New York, NY 10003",hours:"10am - 6pm",coordinates:[-73.989098,40.731762]}]},78628:{locations:[{address:"1525 W University Ave, Georgetown, TX 78628",hours:"8am - 8pm",coordinates:[-97.71093,30.632679]},{address:"1015 W University Ave, Georgetown, TX 78628",hours:"7am - 7pm",coordinates:[-97.69518,30.632906]},{address:"620 I-35, Georgetown, TX 78628",hours:"10am - 6pm",coordinates:[-97.653128,30.698314]}]},78701:{locations:[{address:"1207 Barton Springs Rd, Austin, TX 78704",hours:"8am - 5pm",coordinates:[-97.757729,30.260281]},{address:"1100 Congress Ave, Austin, TX 78701",hours:"8am - 5pm",coordinates:[-97.740341,30.274702]},{address:"1008 Baylor St, Austin, TX 78703",hours:"8am - 5pm",coordinates:[-97.753317,30.275432]}]}},B=a(90),P=a.n(B),H={display:"grid",textAlign:"center"},V={height:"25px",width:"150px",textAlign:"center"},G={position:"absolute",top:5,right:5},X={height:"100%",width:"100%"},U=Object(L.b)({accessToken:"pk.eyJ1IjoiZGV2bm9haCIsImEiOiJjanRieGNpZzAwcW5tNDRyeXhvbG5tZjZjIn0.tB7Rsz3NKcNnpwfWWMltVg"}),Y=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(A.a)(this,Object(M.a)(t).call(this,e))).state={markers:[[-97.757729,30.260281],[-97.740341,30.274702],[-97.753317,30.275432]],center:[-97.749672,30.266375],input:"",zip:"78701"},a.handleLocation=a.handleLocation.bind(Object(W.a)(Object(W.a)(a))),a.handleInput=a.handleInput.bind(Object(W.a)(Object(W.a)(a))),a.handleMouseEnter=a.handleMouseEnter.bind(Object(W.a)(Object(W.a)(a))),a.handleMouseLeave=a.handleMouseLeave.bind(Object(W.a)(Object(W.a)(a))),a}return Object(N.a)(t,e),Object(I.a)(t,[{key:"handleLocation",value:function(e){if(e.preventDefault(),F[this.state.input]){var t=[];F[this.state.input].locations.forEach(function(e){t.push(e.coordinates)}),this.setState({markers:t,zip:this.state.input});var a=z.a.lookup(this.state.input),n=new D.a.LngLat(a.longitude,a.latitude);this.setState({center:n})}}},{key:"handleInput",value:function(e){this.setState({input:e.target.value})}},{key:"handleMouseEnter",value:function(e,t){P()(e.target.parentNode).append('<div class="removeme" style="padding:5px;text-align:left;margin-left:150px;background-color:white;width:150px;grid-column:1;grid-row:1">\n        <u>Address</u>:<br/>'.concat(F[this.state.zip].locations[t].address,"<br /><u>Hours</u>:<br />").concat(F[this.state.zip].locations[t].hours,"\n          </div>"))}},{key:"handleMouseLeave",value:function(){P()(".removeme").remove()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{center:this.state.center,zoom:[11],containerStyle:X,style:"mapbox://styles/mapbox/streets-v8"},r.a.createElement("form",{onSubmit:this.handleLocation,style:G},r.a.createElement("input",{onChange:this.handleInput,type:"text",placeholder:"Search Polls by Zipcode",style:V})),this.state.markers.map(function(t,a){return r.a.createElement(L.a,{key:a,coordinates:t,anchor:"bottom",onMouseEnter:function(t){return e.handleMouseEnter(t,a)},onMouseLeave:e.handleMouseLeave},r.a.createElement("div",{style:H},r.a.createElement("img",{src:"http://ichef.bbci.co.uk/news/976/cpsprodpb/12787/production/_95455657_3312a880-230e-474c-b1d9-bb7c94f8b00e.jpg",alt:"",height:"15",width:"15",style:{gridColumn:1,gridRow:1,margin:"auto"}})))})))}}]),t}(r.a.Component),Z=d.a.Meta,_=c.a.Content,q=a(94),J=[["what-to-bring","voting-requirements",a(95),"Voting Requirements","Find out what you need to bring with you on voting day"],["how-and-where","polling-locations",q,"Polling Locations","Find your nearest polling locations"],["am-i-registered","register-to-vote",a(242),"Register to Vote","Find out if you are registered to vote in 30 seconds"]],K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-container"},J.map(function(e,t){return r.a.createElement(s.a,{to:e[0],key:"voterInfoCard-".concat(t)},r.a.createElement(d.a,{hoverable:!0,className:"info-card",cover:r.a.createElement("img",{alt:e[1],src:e[2]})},r.a.createElement(Z,{title:e[3],description:e[4]})))})))},$=function(){return r.a.createElement("div",{style:{width:"80vw",height:"80vh"}},r.a.createElement(Y,null))},Q=function(){return r.a.createElement(c.a,null,r.a.createElement(f,null),r.a.createElement(_,{style:{height:"100vh",backgroundColor:"#ededed"}},r.a.createElement(s.b,{primary:!1},r.a.createElement(K,{path:"/"}),r.a.createElement(C,{path:"what-to-bring"}),r.a.createElement($,{path:"how-and-where"}),r.a.createElement(b,{path:"am-i-registered"}))))},ee=function(e){var t={display:"inline",verticalAlign:"top",height:e.maxHeight||"600px",maxWidth:e.maxWidth||"500px"};return r.a.createElement("img",{style:t,src:e.image,alt:""})},te=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(A.a)(this,Object(M.a)(t).call(this,e))).state={height:0,width:0,bioCardRef:r.a.createRef(a.containerNode)},a.pStyle={margin:0},a.cardStyle={width:"45%",height:"600px",display:"inline-block"},a}return Object(N.a)(t,e),Object(I.a)(t,[{key:"measure",value:function(){var e=this.state.bioCardRef.current.container,t=e.clientWidth,a=e.clientHeight;this.setState({width:t,height:a})}},{key:"componentDidMount",value:function(){this.measure()}},{key:"componentDidUpdate",value:function(e,t){t.bioCardRef,this.state.bioCardRef}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:this.props.details?"".concat(this.props.details.firstName," ").concat(this.props.details.lastName):null,style:this.cardStyle,ref:this.state.bioCardRef},r.a.createElement("p",null,this.props.bio?this.props.bio.bio:null),r.a.createElement("p",null,this.props.details?this.props.details.party:null),r.a.createElement("p",{style:this.pStyle},this.props.details?this.props.details.birthDate:null),r.a.createElement("p",{style:this.pStyle},"Twitter",r.a.createElement("a",{target:"_blank",href:this.props.details?"http://twitter.com/".concat(this.props.details.twitter):null},"@",this.props.details?this.props.details.twitter:null)),r.a.createElement("p",{style:this.pStyle},r.a.createElement("a",{target:"_blank",href:this.props.details?"".concat(this.props.details.campaignLink):null},this.props.details?this.props.details.campaignLink:null))),r.a.createElement(ee,{image:this.props.details?this.props.details.photoUrl:null,maxHeight:this.state.height,maxWidth:this.state.width}))}}]),t}(n.Component),ae=function(e){return r.a.createElement(d.a,{title:e.title,style:{width:"20%",margin:"5px"}},r.a.createElement("p",null,e.policy))},ne=function(e){var t=e.policies,a=[t.abortion,t.lgbtAdoption,t.gunControl,t.equalPay,t.climateChange,t.gayMarriage,t.borderWall,t.plannedParrenthood],n=["Abortion","LGBT Adoption","Gun Control","Equal Pay","Climate Change","Gay Marriage","Border Wall","Planned Parenthood"];return r.a.createElement("div",{style:{display:"inline-flex",flexWrap:"wrap"}},a.map(function(e,t){return r.a.createElement(ae,{key:t,title:n[t],policy:e})}))},re=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(A.a)(this,Object(M.a)(t).call(this,e))).state={details:null,bio:"",policies:[]},a.candidateDictionary={trump:2,weld:3,booker:4,buttigieg:5,castro:6,delaney:7,gabbard:8,gillibrand:9,harris:10,"hickenlooper jr.":11,inslee:12,klobuchar:13,messam:14,"o'rourke":15,sanders:16,warren:17,williamson:18,yang:19,kokesh:20,mcAfee:21,supreme:22,vohra:23,hunter:24,kroell:25,schriner:26},a.vote=a.candidateDictionary[a.props.candId.toLowerCase()]||Math.floor(25*Math.random()),a.server="ec2-3-16-229-206.us-east-2.compute.amazonaws.com",a}return Object(N.a)(t,e),Object(I.a)(t,[{key:"betterThanDemocracy",value:function(){var e=this;y.a.get("http://".concat(this.server,"/api/candidates/").concat(this.vote)).then(function(t){return e.setState({details:t.data[0]})}).catch(function(e){return console.log(e)}),y.a.get("".concat(this.server,"/api/bios/").concat(this.vote)).then(function(t){return e.setState({bio:t.data[0]})}).catch(function(e){return console.log(e)}),y.a.get("".concat(this.server,"/api/policies/").concat(this.vote)).then(function(t){return e.setState({policies:t.data[0]})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.betterThanDemocracy()}},{key:"componentWillMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",{"test-id":"ancestor",style:{backgroundColor:"#C0C0C0",padding:"20px",width:"100%"}},r.a.createElement(te,{bio:this.state.bio,details:this.state.details,policies:this.state.policies}),r.a.createElement(ne,{policies:this.state.policies,candidate:this.trumpTest}))}}]),t}(n.Component),oe=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(A.a)(this,Object(M.a)(t).call(this,e))).state={candidates:[]},a.server="ec2-3-16-229-206.us-east-2.compute.amazonaws.com",a}return Object(N.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.server),y.a.get("http://".concat(this.server,"/api/candidateInfoPage")).then(function(t){e.setState({candidates:t.data})}).catch(function(e){console.log("Error fetching candidate card info from API")})}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",backgroundColor:"black"}},this.state.candidates.map(function(e,t){return r.a.createElement(s.a,{to:"candidatedetails/".concat(e.lastName.toLowerCase()),style:{width:"23%",margin:"10px auto 10px"},key:t},r.a.createElement(d.a,{hoverable:!0,style:{width:"100%",height:"370px",margin:"10px auto 15px",textAlign:"center",borderRadius:"3px"}},r.a.createElement("div",{style:{height:"200px"}},r.a.createElement("img",{alt:"test",style:{maxHeight:"200px",maxWidth:"100%"},src:e.photoUrl})),r.a.createElement("div",{className:"candidate-card-name",style:{color:"black",fontSize:"22px",marginBottom:"10px",marginTop:"20px"}},e.firstName,r.a.createElement("br",null),e.lastName," "),r.a.createElement("div",{className:"candidate-card-party",style:{fontSize:"18px"}},e.party)))}))}}]),t}(r.a.Component),ie=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{primary:!1},r.a.createElement(oe,{path:"/"}),r.a.createElement(re,{path:"candidatedetails/:candId"})))},ce=c.a.Header,le=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{primary:!1},r.a.createElement(p,{path:"/"}),r.a.createElement(ie,{path:"candidates/*"}),r.a.createElement(Q,{path:"voterInfo/*"})))},se=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{"test-id":"header",className:"header"},r.a.createElement(l.a,{theme:"dark",mode:"horizontal",selectable:!1,style:{lineHeight:"64px"}},r.a.createElement(l.a.Item,{key:"1"},r.a.createElement(s.a,{to:"/"},"Home")),r.a.createElement(l.a.Item,{key:"2"},r.a.createElement(s.a,{to:"candidates"},"Candidates")),r.a.createElement(l.a.Item,{key:"3"},r.a.createElement(s.a,{to:"voterInfo"},"Voter Info")))))};a(243).config();var de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,null),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){},94:function(e,t,a){e.exports=a.p+"static/media/polls.6c262146.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/voting.45586c96.jpg"}},[[134,1,2]]]);
//# sourceMappingURL=main.89452a23.chunk.js.map