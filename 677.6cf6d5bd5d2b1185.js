"use strict";(self.webpackChunkgithub_search_ddd=self.webpackChunkgithub_search_ddd||[]).push([[677],{1677:(b,U,o)=>{o.r(U),o.d(U,{UserFeatureUserListModule:()=>j,UserListComponent:()=>M});var i=o(9808),t=o(5e3);let Z=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez]]}),e})();var S=o(9841),p=o(4004),l=o(294);let f=(()=>{class e extends l.Au{}return e.\u0275fac=function(){let r;return function(n){return(r||(r=t.n5z(e)))(n||e)}}(),e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var x=o(520);let h=(()=>{class e extends l.SI{constructor(s,n){super(s,n,l.E6.USERS),this.BASE_URL=s,this._http=n}}return e.\u0275fac=function(s){return new(s||e)(t.LFG("BASE_URL"),t.LFG(x.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=o(1083);let g=(()=>{class e extends l.LA{constructor(s,n,a){super(s,n,a),this._route=s,this._userState=n,this._userDataService=a,this.usersViewModel$=(0,S.a)([this.entities$,this._userState.totalCount$]).pipe((0,p.U)(([m,C])=>({list:m,totalCount:C})))}loadUsers(){this.loadEntities()}}return e.\u0275fac=function(s){return new(s||e)(t.LFG(u.gz),t.LFG(f),t.LFG(h))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();const A=e=>{const{followers:r,location:s,name:n,public_repos:a}=e;return[{label:"Followers",value:r},{label:"Location",value:s},{label:"Name",value:n},{label:"Public repos",value:a}]};let F=(()=>{class e{constructor(s){this._userDataService=s}getUserById(s){return this._userDataService.getEntityById(s).pipe((0,p.U)(A))}}return e.\u0275fac=function(s){return new(s||e)(t.LFG(h))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var v=o(5460),d=o(7399),T=o(262),B=o(515),L=o(7423),D=o(5245),c=o(4449),O=o(7093),y=o(508);function I(e,r){if(1&e&&(t.TgZ(0,"mat-list-item"),t.TgZ(1,"h3",3),t._uU(2),t.qZA(),t.qZA()),2&e){const s=r.$implicit;t.xp6(2),t.AsE("",s.label,": ",s.value||"--","")}}let J=(()=>{class e{constructor(s,n,a){this.data=s,this._sheetRef=n,this._userDetailsFacade=a,this.userDetails$=this._userDetailsFacade.getUserById(this.data.userId).pipe((0,T.K)(()=>(this.closeDetails(),B.E)))}closeDetails(){this._sheetRef.dismiss()}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(d.OG),t.Y36(d.oL),t.Y36(F))},e.\u0275cmp=t.Xpm({type:e,selectors:[["user-user-details"]],features:[t._Bn([F])],decls:6,vars:3,consts:[["mat-icon-button","","disableRipple","",1,"search-details-close",3,"click"],["fxFlex","90",1,"search-details-list"],[4,"ngFor","ngForOf"],["matLine",""]],template:function(s,n){1&s&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return n.closeDetails()}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA(),t.TgZ(3,"mat-list",1),t.YNc(4,I,3,2,"mat-list-item",2),t.ALo(5,"async"),t.qZA()),2&s&&(t.xp6(4),t.Q6J("ngForOf",t.lcZ(5,1,n.userDetails$)))},directives:[L.lW,D.Hw,c.i$,O.yH,i.sg,c.Tg,y.X2],pipes:[i.Ov],styles:[".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid;padding:10px}"],changeDetection:0}),e})();var Y=o(7537),$=o(8568);function z(e,r){if(1&e){const s=t.EpF();t.TgZ(0,"mat-list-item",4),t._UZ(1,"img",5),t.TgZ(2,"h3",6),t.TgZ(3,"a",7),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"button",8),t.NdJ("click",function(){const m=t.CHM(s).$implicit;return t.oxw(2).readMore(m.login)}),t.TgZ(6,"mat-icon"),t._uU(7,"read_more"),t.qZA(),t.qZA(),t.qZA()}if(2&e){const s=r.$implicit;t.xp6(1),t.Q6J("src",s.avatar_url,t.LSH),t.xp6(2),t.Q6J("href",s.html_url,t.LSH),t.xp6(1),t.hij(" ",s.login," ")}}function E(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"github-search-ddd-list",1),t._UZ(2,"github-search-ddd-list-filter",2),t.YNc(3,z,8,3,"mat-list-item",3),t.qZA(),t.BQk()),2&e){const s=r.ngIf,n=t.oxw();t.xp6(1),t.Q6J("totalCount",s.totalCount),t.xp6(1),t.Q6J("options",n.filterOptions),t.xp6(1),t.Q6J("ngForOf",s.list)}}let M=(()=>{class e{constructor(s,n){this._userListFacade=s,this._matBottomSheet=n,this.users$=this._userListFacade.usersViewModel$,this.filterOptions=v.oD}ngOnInit(){this._userListFacade.loadUsers()}readMore(s){this._matBottomSheet.open(J,{data:{userId:s},hasBackdrop:!0})}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(g),t.Y36(d.ch))},e.\u0275cmp=t.Xpm({type:e,selectors:[["user-user-list"]],features:[t._Bn([g,f])],decls:2,vars:3,consts:[[4,"ngIf"],[3,"totalCount"],["filter","",3,"options"],["class","list-item",4,"ngFor","ngForOf"],[1,"list-item"],["matListAvatar","","alt","avatar",3,"src"],["matLine","",1,"list-item-title"],["target","_blank","rel","noopener",3,"href"],["mat-icon-button","",3,"click"]],template:function(s,n){1&s&&(t.YNc(0,E,4,3,"ng-container",0),t.ALo(1,"async")),2&s&&t.Q6J("ngIf",t.lcZ(1,1,n.users$))},directives:[i.O5,Y.n,$.H,i.sg,c.Tg,c.eA,y.X2,L.lW,D.Hw],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}"],changeDetection:0}),e})();const G=[{path:"",component:o(4299).R,children:[{path:"",component:M}]}];let N=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(G)],u.Bz]}),e})();var Q=o(1697),H=o(7844);let j=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,Z,N,Q.X,v.IG,H.q]]}),e})()}}]);