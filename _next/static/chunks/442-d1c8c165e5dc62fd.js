(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[442],{8154:function(n,e,t){"use strict";var i=t(7297),r=t(5893),a=t(9159),s=t(4220),o=t(5675),d=t.n(o),l=t(4480),c=t(9521);function p(){let n=(0,i.Z)(['\n  width: 100%;\n  display: flex;\n  justify-content: end;\n  margin-top: 20px;\n  @media (max-width: 470px) {\n    flex-direction: column;\n    align-items: center;\n    padding: 0px !important;\n  }\n  @media (max-width: 236px) {\n    margin-top: 40px;\n  }\n\n  > div:nth-child(2) {\n    @media (max-width: 470px) {\n      margin-top: 20px;\n    }\n\n    select {\n      margin: 0px 28px;\n      width: 140px;\n      font-size: 1.2rem;\n      padding: 6px;\n      font-weight: 600;\n    }\n  }\n\n  .mark {\n    width: 30px;\n    margin-right: 25px;\n    position: relative;\n\n    :hover {\n      .speech {\n        display: block;\n        position: absolute;\n        background: var(--main-color);\n        border-radius: 0.4em;\n        width: 235px;\n        font-weight: 600;\n        color: white;\n        right: 60px;\n        bottom: -63px;\n        z-index: 2;\n        padding: 20px;\n        @media (max-width: 470px) {\n          right: -102.7px;\n          bottom: 30px;\n        }\n\n        ::after {\n          content: "";\n          position: absolute;\n          right: 0;\n          top: 50%;\n          width: 0;\n          height: 0;\n          border: 22px solid transparent;\n          border-left-color: var(--main-color);\n          border-right: 0;\n          border-top: 0;\n          margin-top: -11px;\n          margin-right: -22px;\n          @media (max-width: 470px) {\n            top: 107%;\n            left: 50%;\n            border: 22px solid transparent;\n            border-top-color: var(--main-color);\n            margin-left: -22px;\n            margin-bottom: -22px;\n          }\n        }\n\n        > div {\n          margin: 4px 0px;\n        }\n      }\n    }\n\n    @media (max-width: 470px) {\n      margin-top: 20px;\n      margin-right: 0px;\n      margin-bottom: 20px;\n    }\n\n    > .speech {\n      display: none;\n    }\n\n    > img {\n      position: absolute;\n      top: 2.5px;\n    }\n  }\n']);return p=function(){return n},n}let x=()=>{let[n,e]=(0,l.FV)(s.I0),t=()=>{e(!n)},[i,o]=(0,l.FV)(s.Sk),c=n=>{o(n.target.value)};return(0,r.jsxs)(h,{children:[(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"switch",children:[(0,r.jsx)("input",{type:"checkbox"}),(0,r.jsxs)("div",{onClick:t,className:"slider",children:[(0,r.jsx)("span",{children:"일반"}),(0,r.jsx)("span",{children:"시험"})]})]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("select",{className:"search-content",value:i,onChange:c,children:[(0,r.jsxs)("optgroup",{label:"중요",children:[(0,r.jsx)("option",{value:"high",children:"별 높은 순"}),(0,r.jsx)("option",{value:"low",children:"별 낮은 순"})]}),(0,r.jsxs)("optgroup",{label:"추천",children:[(0,r.jsx)("option",{value:"",children:"별없음"}),(0,r.jsx)("option",{value:"★",children:"★"}),(0,r.jsx)("option",{value:"★★",children:"★★"}),(0,r.jsx)("option",{value:"★★★",children:"★★★"})]})]})}),(0,r.jsxs)("div",{className:"mark",children:[(0,r.jsx)(d(),{width:30,height:30,src:"/cookapps-dictionary/question.png",alt:"question_mark"}),(0,r.jsx)("div",{className:"speech",children:a.Oq.map(n=>(0,r.jsx)("div",{children:n},n))})]})]})};e.Z=x;let h=c.ZP.div(p())},7962:function(n,e,t){"use strict";var i=t(7297),r=t(5893),a=t(4220),s=t(7294),o=t(4480),d=t(9521);function l(){let n=(0,i.Z)(["\n  margin-top: 50px;\n  display: flex;\n  width: 100%;\n  padding-left: 28px;\n\n  @media (max-width: 470px) {\n    flex-direction: column;\n    align-items: center;\n    margin-right: 0px;\n    padding-left: 0px !important;\n  }\n\n  > div:first-child {\n    margin-right: 28px;\n    @media (max-width: 470px) {\n      margin-right: 0px;\n      margin-bottom: 30px;\n    }\n\n    > select {\n      padding-left: 1rem;\n      font-weight: 600;\n      font-size: 1rem;\n      > option {\n        font-weight: 600;\n      }\n    }\n  }\n\n  button {\n    display: none;\n  }\n"]);return l=function(){return n},n}let c=()=>{let[n,e]=(0,o.FV)(a.Gz),t=n=>{e(n.target.value)},[i,d]=(0,o.FV)(a.SE),l=n=>{d(n.target.value)},c=(0,s.useRef)(null),x=n=>{var e;n.preventDefault(),null===(e=c.current)||void 0===e||e.blur()};return(0,r.jsxs)(p,{onSubmit:x,id:"search-box",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("select",{value:n,onChange:t,className:"search-content",children:[(0,r.jsx)("option",{value:"제목",children:"제목"}),(0,r.jsx)("option",{value:"설명",children:"설명"})]})}),(0,r.jsxs)("div",{className:"group",children:[(0,r.jsx)("svg",{className:"icon","aria-hidden":"true",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})}),(0,r.jsx)("input",{ref:c,value:i,onChange:l,type:"search",className:"search-content"})]}),(0,r.jsx)("button",{})]})};e.Z=c;let p=d.ZP.form(l())},6442:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var i=t(7297),r=t(5893),a=t(9159),s=t(1163),o=t(7294),d=t(9521),l=t(9008),c=t.n(l),p=t(4480),x=t(4220),h=t(5675),m=t.n(h);function u(){let n=(0,i.Z)(["\n  width: 100%;\n  position: relative;\n\n  > div:first-child {\n    display: flex;\n    margin-bottom: 30px;\n    flex-direction: column;\n\n    > div {\n      display: flex;\n      position: relative;\n\n      h2 {\n        margin-top: 4px;\n      }\n\n      .star {\n        margin-left: 24px;\n        color: var(--main-color);\n      }\n\n      .drop_btn {\n        position: absolute;\n        top: 3.5px;\n        display: inline-block;\n        cursor: pointer;\n        margin-right: 10px;\n\n        > img {\n          transform: ",";\n        }\n      }\n    }\n  }\n\n  .drop_content {\n    line-height: 24px;\n  }\n"]);return u=function(){return n},n}let g=n=>{let{name:e,value:t}=n,i=(0,p.sJ)(x.I0),a=(0,p.sJ)(x.Sk),[s,d]=(0,o.useState)(!0),l=()=>{d(!s)};return(0,o.useEffect)(()=>{if(i)return d(!1);d(!0)},[i,a]),(0,r.jsxs)(f,{drop:s,className:"content",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"drop_btn",onClick:l,children:(0,r.jsx)(m(),{src:"/cookapps-dictionary/drop-down.png",width:16,height:16,alt:"drop_down"})}),(0,r.jsx)("span",{className:"star",children:t.star}),(0,r.jsx)("h2",{children:e.split("(")[0]})]})}),(0,r.jsx)("div",{children:(0,r.jsx)("h4",{children:"(".concat(e.split("(")[1])})})]}),s&&(0,r.jsx)("div",{className:"drop_content",children:t.content})]})},f=d.ZP.div(u(),n=>n.drop?"rotate(-180deg)":"");var v=t(8154),j=t(7962);function w(){let n=(0,i.Z)(["\n  min-height: ",";\n  padding: 90px calc((100% - 1400px) / 2);\n  padding-bottom: 0px;\n  border-top: ",";\n  padding-top: ",";\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  @media (max-width: 236px) {\n    padding-top: 110px;\n  }\n\n  > div {\n    padding-left: 28px;\n  }\n\n  > .title {\n    width: 100%;\n    font-size: 2.2rem;\n    @media (max-width: 470px) {\n      padding-left: 0px;\n      display: flex;\n      justify-content: center;\n      margin-bottom: 10px;\n    }\n  }\n\n  > .main_content {\n    width: 100%;\n    padding-left: 0px;\n    padding-bottom: 30px;\n\n    > div {\n      margin: 50px 0px;\n      padding: 0px 28px;\n    }\n\n    .empty_content {\n      width: 100%;\n      display: flex;\n      font-weight: 900;\n      justify-content: center;\n      font-size: 2.3rem;\n      @media (max-width: 576px) {\n        font-size: 1.5rem;\n      }\n      @media (max-width: 470px) {\n        font-size: 1.1rem;\n      }\n\n      .star {\n        color: var(--main-color);\n      }\n    }\n  }\n"]);return w=function(){return n},n}let b=n=>{let{directIndex:e,name:t}=n,i=(0,s.useRouter)(),d=a.aA.findIndex(n=>n===i.query.category),[l,h]=(0,p.FV)(x.Gz),[m,u]=(0,p.FV)(x.SE),[f]=(0,p.FV)(x.Sk),[w,b]=(0,o.useState)({}),[y,k]=(0,o.useState)([]);(0,o.useEffect)(()=>{if(void 0!==e)return b(a.DL[e][a.aA[e]]);-1!==d&&b(a.DL[d][a.aA[d]])},[e,d,b]),(0,o.useEffect)(()=>{let n=Object.entries(w).filter(n=>{let[e,t]=n;return"제목"===l?e.toLowerCase().includes(m.toLowerCase()):t.content.toLowerCase().includes(m.toLowerCase())});if("high"===f||"low"===f)return(e=>{let t=n.sort((n,t)=>{let i=n[1].star.length,r=t[1].star.length;return"high"===e?r-i:i-r});k(t)})(f);(e=>{let t=n.filter(n=>{let[,t]=n;return t.star===e});k(t)})(f)},[w,f,l,m]);let[,_]=(0,p.FV)(x.I0);return(0,o.useEffect)(()=>{void 0===e&&(_(!1),h("제목"),u(""))},[e,_,h,u]),(0,r.jsxs)(r.Fragment,{children:[void 0===e&&(0,r.jsx)(c(),{children:(0,r.jsxs)("title",{children:["쿡앱스 용어정리집 - ",i.query.category]})}),(0,r.jsxs)(N,{directIndex:e,children:[(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h1",{children:i.query.category||t})}),void 0===e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.Z,{}),(0,r.jsx)(j.Z,{})]}),(0,r.jsxs)("div",{className:"main_content",children:[y.map(n=>{let[e,t]=n;return(0,r.jsx)(g,{name:e,value:t},e)}),0===y.length&&(0,r.jsxs)("div",{className:"empty_content",children:[(0,r.jsx)("span",{className:"star",children:"★"}),"데이터가 존재하지 않아요.",(0,r.jsx)("span",{className:"star",children:"★"})]})]})]})]})};var y=b;let N=d.ZP.section(w(),n=>void 0!==n.directIndex?"":"101vh",n=>0!==n.directIndex?"1px solid #dddddd":"",n=>0===n.directIndex&&"30px")},9008:function(n,e,t){n.exports=t(2636)}}]);