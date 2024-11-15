import{a as U,b as d,c as L,d as I,f as D,g as M,h as N,i as F,k as P}from"./chunk-UTHIKO4J.js";import{a as J,b as T,c as ae,d as se,e as me,f as le,g as E,h as R,i as pe,j as ce,k as ue}from"./chunk-V3GX6MDD.js";import{$a as ne,Eb as ie,Fb as u,Ga as z,Ja as c,La as Z,Ma as W,Na as X,O as _,Oa as Y,Pa as n,Qa as r,Ra as g,T as K,Ta as h,U as s,Ua as ee,Y as m,Ya as a,Za as te,_a as oe,eb as p,fb as b,gb as O,ka as Q,nb as re,va as l}from"./chunk-Q5VRZV6X.js";var w=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-login"]],standalone:!0,features:[p],decls:0,vars:0,template:function(e,i){},dependencies:[u],styles:["[_nghost-%COMP%]{display:block}"]})};function be(t,o){t&1&&(n(0,"div",6)(1,"p"),a(2,"El nombre es requerido"),r()())}function ve(t,o){if(t&1&&z(0,be,3,0,"div",6),t&2){let e,i=ee();Z(!((e=i.formulario.get("nombre"))==null||e.errors==null)&&e.errors.required?0:-1)}}var A=class t{fb=s(F);formulario=this.fb.nonNullable.group({nombre:["",[d.required]],email:["",[d.required,d.email]]});enviar(){this.formulario.valid&&console.log(this.formulario.getRawValue())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-register"]],standalone:!0,features:[p],decls:14,vars:4,consts:[[3,"ngSubmit","formGroup"],["for","nombre"],["type","text","name","","id","nombre","formControlName","nombre"],["for","email"],["type","email","name","","id","email","formControlName","email"],["type","submit"],[1,"error"]],template:function(e,i){if(e&1&&(n(0,"section")(1,"h2"),a(2,"Register"),r(),n(3,"form",0),h("ngSubmit",function(){return i.enviar()}),n(4,"label",1),a(5,"Nombre"),r(),g(6,"input",2),z(7,ve,1,1),n(8,"label",3),a(9,"Email"),r(),g(10,"input",4),n(11,"button",5),a(12,"Enviar"),r()(),a(13),r()),e&2){let C,x;l(3),c("formGroup",i.formulario),l(4),Z((C=i.formulario.get("nombre"))!=null&&C.invalid&&((C=i.formulario.get("nombre"))!=null&&C.touched)?7:-1),l(6),ne(" ",(x=i.formulario.get("nombre"))==null?null:x.value," ",(x=i.formulario.get("email"))==null?null:x.value,`
`)}},dependencies:[u,P,D,U,L,I,M,N],styles:["[_nghost-%COMP%]{display:block}form[_ngcontent-%COMP%]{width:30%}.error[_ngcontent-%COMP%]{background-color:brown;color:#fff;padding:10px;border-radius:5px;width:65%;margin:10px 0;text-align:center}label[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:65%}"],changeDetection:0})};var G=class t{http=s(T);url="http://localhost:3000/productos";constructor(){}obtenerProductos(o){let e=new J;return o&&(e=e.set("precio_gte",o.toString())),this.http.get(this.url,{params:e})}obtenerProductosEntre(o,e){let i=new J;return o&&e&&(i=i.set("precio_gte",o.toString()).set("precio_lte",e.toString())),this.http.get(this.url,{params:i})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var j=class t{productosService=s(G);ngOnInit(){this.productosService.obtenerProductosEntre(100,500).subscribe({next:o=>{console.log(o)},error:o=>{console.log(o)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-dashboard-page"]],standalone:!0,features:[p],decls:2,vars:0,template:function(e,i){e&1&&(n(0,"h2"),a(1,"LANDING PAGE"),r())},dependencies:[u],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var S=class t{constructor(o){this.http=o}url="http://localhost:3000/users";getUsers(){return this.http.get(this.url)}getUserById(o){return this.http.get(`${this.url}/${o}`)}postUser(o){return this.http.post(this.url,o)}putUser(o,e){return this.http.put(`${this.url}/${e}`,o)}deleteUser(o){return this.http.delete(`${this.url}/${o}`)}static \u0275fac=function(e){return new(e||t)(K(T))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var k=class t{fb=s(F);userService=s(S);emitir=new Q;formulario=this.fb.nonNullable.group({name:["",[d.required]],email:["",[d.required,d.email]]});enviar(){if(this.formulario.valid){let o=this.formulario.getRawValue();console.log(o),this.userService.postUser(o).subscribe({next:e=>{alert("User guardado")}})}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-user"]],outputs:{emitir:"emitir"},standalone:!0,features:[p],decls:11,vars:1,consts:[[3,"ngSubmit","formGroup"],["for","nombre"],["type","text","id","nombre","formControlName","name"],["for","email"],["type","email","id","email","formControlName","email"],["type","submit"]],template:function(e,i){e&1&&(n(0,"h2"),a(1,"Alta User"),r(),n(2,"form",0),h("ngSubmit",function(){return i.enviar()}),n(3,"label",1),a(4,"Nombre"),r(),g(5,"input",2),n(6,"label",3),a(7,"Email"),r(),g(8,"input",4),n(9,"button",5),a(10,"Enviar"),r()()),e&2&&(l(2),c("formGroup",i.formulario))},dependencies:[u,P,D,U,L,I,M,N],styles:["[_nghost-%COMP%]{display:block}"]})};var Se=t=>["/update-user",t];function ye(t,o){if(t&1&&(n(0,"li",1),a(1),r()),t&2){let e=o.$implicit;c("routerLink",O(2,Se,e.id)),l(),oe(" ",e.name," ")}}var H=class t{users=[];userService=s(S);router=s(E);ngOnInit(){this.traerUsuarios()}traerUsuarios(){this.userService.getUsers().subscribe({next:o=>{console.log(o),this.users=o}})}agregarUser(o){console.log("USER EN LA LISTA",o)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-lista-users"]],standalone:!0,features:[p],decls:6,vars:0,consts:[[3,"emitir"],[3,"routerLink"]],template:function(e,i){e&1&&(n(0,"app-user",0),h("emitir",function(x){return i.agregarUser(x)}),r(),n(1,"ul")(2,"h2"),a(3,"Lista Users"),r(),X(4,ye,2,4,"li",1,W),r()),e&2&&(l(4),Y(i.users))},dependencies:[u,k,ue,R],styles:["[_nghost-%COMP%]{display:block}"]})};var y=class t{constructor(){}isLoggedIn=!1;ngOnInit(){this.isLoggedIn=localStorage.getItem("isLoggedIn")==="true"}login(){localStorage.setItem("isLoggedIn","true"),this.isLoggedIn=!0,alert("user logueado correctamente")}logout(){localStorage.removeItem("isLoggedIn"),this.isLoggedIn=!1,alert("user deslogueado correctamente")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var fe=()=>{let t=s(y),o=s(E);return t.isLoggedIn?(console.log(t.isLoggedIn),!0):(o.navigate(["/access-denied"]),!1)},ge=()=>{let t=s(y),o=s(E);return t.isLoggedIn?(console.log(t.isLoggedIn),o.navigate(["/access-denied"]),console.log("no puedes entrar a login"),!1):(console.log(t.isLoggedIn),!0)};var V=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-tienda"]],standalone:!0,features:[p],decls:2,vars:0,template:function(e,i){e&1&&(n(0,"p"),a(1,"tienda works!"),r())},dependencies:[u],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var B=class t{activatedRoute=s(me);userService=s(S);fb=s(F);formulario=this.fb.nonNullable.group({name:["",[d.required]],email:["",[d.required,d.email]]});id=null;ngOnInit(){this.activatedRoute.paramMap.subscribe({next:o=>{console.log(o.get("id")),this.id=o.get("id"),this.userService.getUserById(this.id).subscribe({next:e=>{console.log(e),this.formulario.patchValue(e)}})}})}onSubmit(){console.log(this.formulario.value);let o=this.formulario.getRawValue();this.userService.putUser(o,this.id).subscribe({next:e=>{console.log(e)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-update-user"]],standalone:!0,features:[p],decls:5,vars:1,consts:[[3,"ngSubmit","formGroup"],["type","text","placeholder","Nombre","formControlName","name"],["type","text","placeholder","Email","formControlName","email"],["type","submit"]],template:function(e,i){e&1&&(n(0,"form",0),h("ngSubmit",function(){return i.onSubmit()}),g(1,"input",1)(2,"input",2),n(3,"button",3),a(4,"Actualizar"),r()()),e&2&&c("formGroup",i.formulario)},dependencies:[u,P,D,U,L,I,M,N],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var he=[{path:"",component:j},{path:"tienda",component:V,canActivate:[fe]},{path:"tareas",loadComponent:()=>import("./chunk-TUF6ZT5K.js").then(t=>t.ListaComponent)},{path:"login",component:w,canActivate:[ge]},{path:"register",component:A},{path:"user",component:k},{path:"update-user/:id",component:B},{path:"lista",component:H},{path:"access-denied",loadComponent:()=>import("./chunk-VLWI4DMK.js").then(t=>t.AccessDeniedComponent)},{path:"**",redirectTo:"",pathMatch:"full"}];var Ce={providers:[re({eventCoalescing:!0}),ce(he),ae()]};var xe=()=>[""],_e=t=>({"router-link-active":t}),Ue=()=>["/tienda"],Le=()=>["/tareas"],Ie=()=>["/login"],De=()=>["/register"],Me=()=>["/user"],Ne=()=>["/lista"],q=class t{home;authService=s(y);isLoggedIn=!1;ButtonText="Login";ngOnInit(){this.isLoggedIn=this.authService.isLoggedIn}logInOut(){this.authService.isLoggedIn?this.authService.logout():this.authService.login(),this.isLoggedIn=this.authService.isLoggedIn,this.ButtonText=this.authService.isLoggedIn?"Logout":"Login"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-header"]],inputs:{home:"home"},standalone:!0,features:[p],decls:17,vars:18,consts:[[1,"header"],[3,"routerLink","ngClass"],["routerLinkActive","router-link-active",3,"routerLink"],["routerLinkActive","router-link-active",3,"click","routerLink"]],template:function(e,i){e&1&&(n(0,"section",0)(1,"nav")(2,"ul")(3,"li",1),a(4,"Home"),r(),n(5,"li",2),a(6,"Tienda"),r(),n(7,"li",2),a(8,"Tareas"),r(),n(9,"li",3),h("click",function(){return i.logInOut()}),a(10),r(),n(11,"li",2),a(12,"Register"),r(),n(13,"li",2),a(14,"User"),r(),n(15,"li",2),a(16,"Lista Users"),r()()()()),e&2&&(l(3),c("routerLink",b(9,xe))("ngClass",O(10,_e,i.home)),l(2),c("routerLink",b(12,Ue)),l(2),c("routerLink",b(13,Le)),l(2),c("routerLink",b(14,Ie)),l(),te(i.ButtonText),l(),c("routerLink",b(15,De)),l(2),c("routerLink",b(16,Me)),l(2),c("routerLink",b(17,Ne)))},dependencies:[u,ie,R,pe],styles:["[_nghost-%COMP%]{display:block}.header[_ngcontent-%COMP%]{padding:10px;display:flex;justify-content:flex-end}.router-link-active[_ngcontent-%COMP%]{background:linear-gradient(90deg,#db2781,#e1caeb);background-size:cover;-webkit-background-clip:text;background-clip:text;color:transparent}ul[_ngcontent-%COMP%]{display:flex;gap:10px;font-size:1.2rem;text-transform:uppercase}li[_ngcontent-%COMP%]{list-style:none;margin-right:10px;font-weight:600}li[_ngcontent-%COMP%]:hover{text-decoration:none;cursor:pointer;transition:color .3s ease-in-out;color:#db2781}"],changeDetection:0})};var $=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-root"]],standalone:!0,features:[p],decls:2,vars:0,template:function(e,i){e&1&&g(0,"app-header")(1,"router-outlet")},dependencies:[le,q],styles:["app-lista[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}@media screen and (min-width: 850px){app-lista[_ngcontent-%COMP%]{flex-direction:row;gap:3rem}}"]})};se($,Ce).catch(t=>console.error(t));
