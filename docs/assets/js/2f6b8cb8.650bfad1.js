"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[84763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={},o="Table-driven testing",i={unversionedId:"assertions/table_driven_testing",id:"version-5.5/assertions/table_driven_testing",title:"Table-driven testing",description:"TK: what current exists is not really documented anywhere, am I right?",source:"@site/versioned_docs/version-5.5/assertions/table_driven_testing.md",sourceDirName:"assertions",slug:"/assertions/table_driven_testing",permalink:"/docs/5.5/assertions/table_driven_testing",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.5/assertions/table_driven_testing.md",tags:[],version:"5.5",frontMatter:{}},s={},u=[{value:"Define a table in code",id:"define-a-table-in-code",level:2},{value:"Run asserts forAll rows of the table",id:"run-asserts-forall-rows-of-the-table",level:2},{value:"Export a table to a text file",id:"export-a-table-to-a-text-file",level:2},{value:"Read table from files and execute your asserts",id:"read-table-from-files-and-execute-your-asserts",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table-driven-testing"},"Table-driven testing"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TK: what current exists is not really documented anywhere, am I right?")),(0,r.kt)("h2",{id:"define-a-table-in-code"},"Define a table in code"),(0,r.kt)("p",null,"You can define a table of data that will be used for your test like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val table = table(\n  headers("id", "name", "username"),\n  row(4, "Jean-Michel Fayard", "jmfayard"),\n  row(6, "Louis CAD", "LouisCAD"),\n)\n')),(0,r.kt)("p",null,"It's now easy to run your asserts for all rows of the table:"),(0,r.kt)("h2",{id:"run-asserts-forall-rows-of-the-table"},"Run asserts forAll rows of the table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'test("table-driven testing") {\n    table.forAll { id, name, username ->\n      id shouldBeGreaterThan 0\n      username shouldNotBe ""\n    }\n}\n')),(0,r.kt)("p",null,"The test will not fail at the first error. Instead, it will always run on all the rows, and report multiple errors if they are present."),(0,r.kt)("p",null,"Defining a table of data in code is convenient... until you start to have too much rows."),(0,r.kt)("h2",{id:"export-a-table-to-a-text-file"},"Export a table to a text file"),(0,r.kt)("p",null,"You can export your data to a text file with the ",(0,r.kt)("inlineCode",{parentName:"p"},".table")," extension."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tableFile = testResources.resolve("users.table")\ntable.writeTo(tableFile)\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"users.table")," file looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id | username | fullName\n4  | jmfayard | Jean-Michel Fayard\n6  | louis    | Louis Caugnault\n")),(0,r.kt)("p",null,"Curious why it's not just a .csv file?"),(0,r.kt)("p",null,"Well CSV is not a well defined format. Everyone has its flavor and we have too. The ",(0,r.kt)("inlineCode",{parentName:"p"},".table")," has its rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it always uses ",(0,r.kt)("inlineCode",{parentName:"li"},"|")," as separator"),(0,r.kt)("li",{parentName:"ul"},"it must have an header"),(0,r.kt)("li",{parentName:"ul"},"cells are trimmed and cannot contain new lines"),(0,r.kt)("li",{parentName:"ul"},"it can have comments and blank lines")),(0,r.kt)("p",null,"Basically it's optimized for putting table data in a ",(0,r.kt)("inlineCode",{parentName:"p"},".table")," file."),(0,r.kt)("p",null,"We hope you don't use Microsoft Excel to edit the CSV-like file. IntelliJ with the ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/10037-csv"},"CSV plugin from Martin Sommer")," does that better. You can associate the ",(0,r.kt)("inlineCode",{parentName:"p"},".table")," extension with it and configure  ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," as your CSV separator. It has a table edition mode too!"),(0,r.kt)("p",null,"Now that your table data lives in a file, it's time to read it!"),(0,r.kt)("h2",{id:"read-table-from-files-and-execute-your-asserts"},"Read table from files and execute your asserts"),(0,r.kt)("p",null,"Here is how you read your ",(0,r.kt)("inlineCode",{parentName:"p"},".table")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tableFromFile = table(\n    headers = headers("id", "username", "fullName"),\n    source = testResources.resolve("users.table"),\n    transform = { a: String, b: String, c: String ->\n        row(a.toInt(), b, c)\n    }\n)\n')),(0,r.kt)("p",null,"The arguments are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the file where your table is stored"),(0,r.kt)("li",{parentName:"ul"},"the same headers as before: ",(0,r.kt)("inlineCode",{parentName:"li"},'headers("id", "username", "fullName")')),(0,r.kt)("li",{parentName:"ul"},"a lambda to convert from strings (everything is a string in the text file) to the typed row you had before")),(0,r.kt)("p",null,"The rest works just like before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'test("table-driven testing from the .table file") {\n    // asserts like before\n    tableFromFile.forAll { id, name, username ->\n        id shouldBeGreaterThan 0\n        username shouldNotBe ""\n    }\n}\n')))}p.isMDXComponent=!0}}]);