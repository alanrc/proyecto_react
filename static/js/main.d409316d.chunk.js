(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},14:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=a(1),s=a(2),i=a(4),m=a(3),u=a(6),d=a(5),p=a(10),h=a.n(p),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"jumbotron jumbotron-fluid text-center py-3 m-0"},r.a.createElement("img",{src:h.a,className:"w-50",alt:this.props.title}),r.a.createElement("h1",null,this.props.title),r.a.createElement("h2",null,this.props.slogan))}}]),t}(r.a.Component),f=a(12),E=function(e){var t="\xe0\xe1\xe4\xe2\xe3\xe5\u0103\xe6\xe7\xe8\xe9\xeb\xea\u01f5\u1e27\xec\xed\xef\xee\u1e3f\u0144\u01f9\xf1\xf2\xf3\xf6\xf4\u0153\xf8\u1e55\u0155\xdf\u015b\u0219\u021b\xf9\xfa\xfc\xfb\u01d8\u1e83\u1e8d\xff\u017a\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,function(e){return"aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------".charAt(t.indexOf(e))}).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"container-fluid"},r.a.createElement("ul",{className:"nav nav-pills nav-fill"},r.a.createElement(g,{links:this.props.links})))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={categories:[],loaded:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({categories:Object(f.a)(new Set(this.props.links.map(function(e){return e.Categoria}))),loaded:!0})}},{key:"render",value:function(){return this.state.loaded?this.state.categories.map(function(e,t){return r.a.createElement("li",{className:"nav-item",key:t},r.a.createElement("a",{className:"nav-link btn-info m-1",href:E(e)},e))}):r.a.createElement("li",null,"Cargando..")}}]),t}(n.Component),N=v,j=a(13),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={visto:!1,loaded:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState(Object(j.a)({},this.props.item,{loaded:!0}))}},{key:"verProducto",value:function(e){e.preventDefault(),this.setState({visto:!0})}},{key:"editarProducto",value:function(){var e=this;console.table(this.state),this.setState({Precio:parseFloat(prompt("Ingrese el precio")),Stock:parseInt(prompt("Ingrese el stock"))},function(){e.props.onActualizarProducto(e.state)})}},{key:"borrarProducto",value:function(){this.props.onActualizarProducto(this.state,!0)}},{key:"render",value:function(){if(this.state.loaded){var e="/MR-".concat(this.state.idProducto,"-").concat(E(this.state.Nombre)),t=!0===this.state.visto?" card bg-dark ":"card bg-light";return r.a.createElement("article",{className:"col-6 col-md-4 my-2"},r.a.createElement("div",{className:t},r.a.createElement("img",{src:this.state.Imagen,className:"card-img-top w-100",alt:this.state.Nombre}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.state.Marca," - ",this.state.Nombre),r.a.createElement("p",{className:"card-text"},this.state.Presentacion),r.a.createElement("p",null,r.a.createElement("span",{className:"badge badge-info"},"$ ",this.state.Precio)),r.a.createElement("a",{href:e,onClick:this.verProducto.bind(this),className:"btn btn-primary"},"Ver +"),r.a.createElement("button",{className:"btn btn-success",onClick:this.editarProducto.bind(this)},"Editar"),r.a.createElement("button",{className:"btn btn-danger",onClick:this.borrarProducto.bind(this)},"Borrar"))))}return r.a.createElement("div",{className:"col-6 col-md-4 my-2"},"creando producto....")}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"casilla"},"Casilla:"),r.a.createElement("input",{type:"text",name:"casilla",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nombre"},"Nombre:"),r.a.createElement("input",{type:"text",name:"nombre",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"precio"},"Precio:"),r.a.createElement("input",{type:"text",name:"precio",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"stock"},"Stock:"),r.a.createElement("input",{type:"text",name:"stock",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"marca"},"Marca:"),r.a.createElement("input",{type:"text",name:"marca",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"categoria"},"Categoria:"),r.a.createElement("input",{type:"text",name:"categoria",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"imagen"},"Imagen:"),r.a.createElement("input",{type:"text",name:"imagen",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"presentacion"},"Casilla X:"),r.a.createElement("textarea",{name:"presentacion",className:"form-control",rows:"5"})),r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Submit"))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"modal fade",tabIndex:"-1",role:"dialog",id:"react-modal"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Editar Producto"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(O,null)))))}}]),t}(n.Component),w=a(7),x=a.n(w),S=a(11),P=new(function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,[{key:"getData",value:function(){var e=Object(S.a)(x.a.mark(function e(t){var a,n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,window.localStorage.getItem("_products")){e.next=12;break}return e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,e.next=10,window.localStorage.setItem("_products",JSON.stringify(n));case 10:e.next=18;break;case 12:return e.next=14,window.localStorage.getItem("_products");case 14:return a=e.sent,e.next=17,JSON.parse(a);case 17:n=e.sent;case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={title:"Mercado React v1.1",slogan:"Mucho m\xe1s que JavaScript",products:[],loaded:!1},e.actualizarEstado=e.actualizarEstado.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;P.getData("https://api.myjson.com/bins/dcg2p").then(function(t){e.setState({products:t,loaded:!0})})}},{key:"actualizarEstado",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];this.setState({loaded:!1}),n=a?this.state.products.filter(function(t){return t.idProducto!==e.idProducto}):this.state.products.map(function(t){return t.idProducto===e.idProducto?e:t}),this.setState({products:n},function(){window.localStorage.setItem("_products",JSON.stringify(n)),t.setState({loaded:!0})})}},{key:"render",value:function(){var e=this;if(this.state.loaded){var t=this.state.products.map(function(t,a){return r.a.createElement(y,{item:t,key:a,onActualizarProducto:e.actualizarEstado})});return r.a.createElement("div",{className:"App"},r.a.createElement(b,{title:this.state.title,slogan:this.state.slogan}),r.a.createElement(N,{links:this.state.products}),r.a.createElement("section",{className:"container-fluid"},r.a.createElement("div",{className:"row"},t)),r.a.createElement(k,null))}return r.a.createElement("div",null,"Iniciando App..")}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.d409316d.chunk.js.map