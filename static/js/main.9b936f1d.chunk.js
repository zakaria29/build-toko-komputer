(this.webpackJsonptoko_komputer=this.webpackJsonptoko_komputer||[]).push([[0],{39:function(t,e,s){},64:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s(1),c=s.n(a),o=s(32),r=s.n(o),i=(s(39),s(3)),d=s(4),l=s(6),m=s(5),u=s(7),h=s(2),j=s.n(h),b="http://168.138.182.251:8080/store/api/v1",p="/toko-komputer",g=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){var t;return Object(i.a)(this,s),(t=e.call(this)).Login=function(e){e.preventDefault();var s={username:t.state.username,password:t.state.password};j.a.post("http://168.138.182.251:8080/store/api/v1/admin/auth",s).then((function(e){if(t.setState({logged:e.data.logged}),t.state.logged){var s=e.data.data,n=e.data.token;localStorage.setItem("admin",JSON.stringify(s)),localStorage.setItem("token",n),t.props.history.push("/")}else t.setState({message:e.data.message})})).catch((function(t){return console.log(t)}))},t.state={username:"",password:"",message:"",logged:!0},t}return Object(d.a)(s,[{key:"render",value:function(){var t=this;return Object(n.jsx)("div",{className:"container d-flex h-100 justify-content-center align-items-center",children:Object(n.jsxs)("div",{className:"col-sm-6 card my-5",children:[Object(n.jsxs)("div",{className:"card-header bg-primary text-white text-center",children:[Object(n.jsx)("h4",{children:"Computer Store"}),Object(n.jsx)("strong",{className:"text-warning",children:"Admin Sign In"})]}),Object(n.jsxs)("div",{className:"card-body",children:[this.state.logged?null:Object(n.jsx)("div",{className:"alert alert-danger mt-1",children:this.state.message}),Object(n.jsxs)("form",{onSubmit:function(e){return t.Login(e)},children:[Object(n.jsx)("input",{type:"text",className:"form-control mb-1",value:this.state.username,onChange:function(e){return t.setState({username:e.target.value})}}),Object(n.jsx)("input",{type:"password",className:"form-control mb-1",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})},autoComplete:"false"}),Object(n.jsx)("button",{className:"btn btn-block btn-primary mb-1",type:"submit",children:"Sign In"})]})]})]})})}}]),s}(c.a.Component),x=s(16),O=s(14),f=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){var t;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).Logout=function(){localStorage.removeItem("token"),localStorage.removeItem("admin")},t}return Object(d.a)(s,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"navbar navbar-expand-lg bg-dark navbar-dark",children:[Object(n.jsx)("a",{className:"navbar-brand",children:"Moklet Computer Store"}),Object(n.jsx)("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#menu",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{id:"menu",className:"navbar-collapse collpase",children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(O.b,{to:"/",className:"nav-link",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(O.b,{to:"/product",className:"nav-link",children:"Product"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(O.b,{to:"/customer",className:"nav-link",children:"Customers"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(O.b,{to:"/transaction",className:"nav-link",children:"Transactions"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(O.b,{to:"/admin",className:"nav-link",children:"Administrator"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(O.b,{to:"/login",className:"nav-link",onClick:function(){return t.Logout()},children:"Logout"})})]})})]})}}]),s}(c.a.Component),v=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"col-lg-6 col-sm-12 p-2",children:Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-body row",children:[Object(n.jsx)("div",{className:"col-5",children:Object(n.jsx)("img",{src:this.props.image,className:"img",height:"200",width:"200",alt:this.props.name})}),Object(n.jsxs)("div",{className:"col-7",children:[Object(n.jsx)("h5",{className:"text-info",children:this.props.name}),Object(n.jsxs)("h6",{className:"text-danger",children:["Price: ",this.props.price]}),Object(n.jsxs)("h6",{className:"text-dark",children:["Stock: ",this.props.stock]}),Object(n.jsx)("button",{className:"btn btn-sm btn-primary m-1",onClick:this.props.onEdit,children:"Edit"}),Object(n.jsx)("button",{className:"btn btn-sm btn-danger m-1",onClick:this.props.onDrop,children:"Delete"})]})]})})})}}]),s}(c.a.Component),N=s(10),w=s.n(N),C=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){var t;return Object(i.a)(this,s),(t=e.call(this)).headerConfig=function(){return{headers:{Authorization:"Bearer ".concat(t.state.token)}}},t.getProduct=function(){j.a.get("http://168.138.182.251:8080/store/api/v1/product",t.headerConfig()).then((function(e){t.setState({products:e.data})})).catch((function(e){e.response?e.response.status&&(window.alert(e.response.data.message),t.props.history.push("/login")):console.log(e)}))},t.Add=function(){w()("#modal_product").modal("show"),t.setState({action:"insert",product_id:0,name:"",price:0,stock:0,image:null,uploadFile:!0})},t.Edit=function(e){w()("#modal_product").modal("show"),t.setState({action:"update",product_id:e.product_id,name:e.name,price:e.price,stock:e.stock,image:null,uploadFile:!1})},t.saveProduct=function(e){e.preventDefault(),w()("#modal_product").modal("hide");var s=new FormData;s.append("product_id",t.state.product_id),s.append("name",t.state.name),s.append("price",t.state.price),s.append("stock",t.state.stock),t.state.uploadFile&&s.append("image",t.state.image);var n=b+"/product";"insert"===t.state.action?j.a.post(n,s,t.headerConfig()).then((function(e){window.alert(e.data.message),t.getProduct()})).catch((function(t){return console.log(t)})):"update"===t.state.action&&j.a.put(n,s,t.headerConfig()).then((function(e){window.alert(e.data.message),t.getProduct()})).catch((function(t){return console.log(t)}))},t.dropProduct=function(e){if(window.confirm("are you sure will delete this item?")){var s=b+"/product/"+e.product_id;j.a.delete(s,t.headerConfig()).then((function(e){window.alert(e.data.message),t.getProduct()})).catch((function(t){return console.log(t)}))}},t.state={products:[],token:"",action:"",name:"",price:0,stock:0,image:"",uploadFile:!0,product_id:""},localStorage.getItem("token")?t.state.token=localStorage.getItem("token"):window.location=p+"/login",t.headerConfig.bind(Object(x.a)(t)),t}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getProduct()}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{className:"text-bold text-info mt-2",children:"Product List"}),Object(n.jsx)("div",{className:"row",children:this.state.products.map((function(e){return Object(n.jsx)(v,{name:e.name,price:e.price,stock:e.stock,image:"http://168.138.182.251:8080/product_image//"+e.image,onEdit:function(){return t.Edit(e)},onDrop:function(){return t.dropProduct(e)}},e.product_id)}))}),Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){return t.Add()},children:"Add Product"})]}),Object(n.jsx)("div",{className:"modal fade",id:"modal_product",children:Object(n.jsx)("div",{className:"modal-dialog",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("div",{className:"modal-header bg-info text-white",children:Object(n.jsx)("h4",{children:"Form Product"})}),Object(n.jsx)("div",{className:"modal-body",children:Object(n.jsxs)("form",{onSubmit:function(e){return t.saveProduct(e)},children:["Product Name",Object(n.jsx)("input",{type:"text",className:"form-control mb-1",value:this.state.name,onChange:function(e){return t.setState({name:e.target.value})},required:!0}),"Product Stock",Object(n.jsx)("input",{type:"number",className:"form-control mb-1",value:this.state.stock,onChange:function(e){return t.setState({stock:e.target.value})},required:!0}),"Product Price",Object(n.jsx)("input",{type:"number",className:"form-control mb-1",value:this.state.price,onChange:function(e){return t.setState({price:e.target.value})},required:!0}),"update"===this.state.action&&!1===this.state.uploadFile?Object(n.jsx)("button",{className:"btn btn-sm btn-dark mb-1 btn-block",onClick:function(){return t.setState({uploadFile:!0})},children:"Change Product Image"}):Object(n.jsxs)("div",{children:["Product Image",Object(n.jsx)("input",{type:"file",className:"form-control mb-1",onChange:function(e){return t.setState({image:e.target.files[0]})},required:!0})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-block btn-success",children:"Simpan"})]})})]})})})]})}}]),s}(c.a.Component),k=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"card col-sm-12 my-1",children:Object(n.jsxs)("div",{className:"card-body row",children:[Object(n.jsx)("div",{className:"col-sm-3",children:Object(n.jsx)("img",{alt:this.props.name,src:this.props.image,className:"img rounded-circle",width:"150",height:"150"})}),Object(n.jsxs)("div",{className:"col-sm-7",children:[Object(n.jsxs)("h5",{className:"text-bold",children:["Customer Name: ",this.props.name]}),Object(n.jsxs)("h6",{children:["Customer Phone: ",this.props.phone]}),Object(n.jsxs)("h6",{children:["Customer Address: ",this.props.address]})]}),Object(n.jsxs)("div",{className:"col-sm-2",children:[Object(n.jsx)("button",{className:"btn btn-sm btn-primary btn-block",onClick:this.props.onEdit,children:"Edit"}),Object(n.jsx)("button",{className:"btn btn-sm btn-danger btn-block",onClick:this.props.onDrop,children:"Delete"})]})]})})}}]),s}(c.a.Component),y=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){var t;return Object(i.a)(this,s),(t=e.call(this)).headerConfig=function(){return{headers:{Authorization:"Bearer ".concat(t.state.token)}}},t.getCustomers=function(){j.a.get("http://168.138.182.251:8080/store/api/v1/customer",t.headerConfig()).then((function(e){t.setState({customers:e.data})})).catch((function(e){e.response?e.response.status&&(window.alert(e.response.data.message),t.props.history.push("/login")):console.log(e)}))},t.Add=function(){w()("#modal_customer").modal("show"),t.setState({action:"insert",customer_id:0,name:"",address:"",phone:"",image:null,username:"",password:"",fillPassword:!0,uploadFile:!0})},t.Edit=function(e){w()("#modal_customer").modal("show"),t.setState({action:"update",customer_id:e.customer_id,name:e.name,phone:e.phone,address:e.address,image:null,username:e.username,password:"",uploadFile:!1,fillPassword:!1})},t.saveCustomer=function(e){e.preventDefault(),w()("#modal_customer").modal("hide");var s=new FormData;s.append("customer_id",t.state.customer_id),s.append("name",t.state.name),s.append("phone",t.state.phone),s.append("address",t.state.address),s.append("username",t.state.username),t.state.uploadFile&&s.append("image",t.state.image),t.state.fillPassword&&s.append("password",t.state.password);var n=b+"/customer";"insert"===t.state.action?j.a.post(n,s,t.headerConfig()).then((function(e){window.alert(e.data.message),t.getCustomers()})).catch((function(t){return console.log(t)})):"update"===t.state.action&&j.a.put(n,s,t.headerConfig()).then((function(e){window.alert(e.data.message),t.getCustomers()})).catch((function(t){return console.log(t)}))},t.dropCustomer=function(e){if(window.confirm("are you sure will delete this item?")){var s=b+"/customer/"+e.customer_id;j.a.delete(s,t.headerConfig()).then((function(e){window.alert(e.data.message),t.getCustomers()})).catch((function(t){return console.log(t)}))}},t.state={customers:[],token:"",action:"",name:"",phone:"",address:"",image:"",username:"",password:"",uploadFile:!0,fillPassword:!0,customer_id:""},localStorage.getItem("token")?t.state.token=localStorage.getItem("token"):window.location=p+"/login",t.headerConfig.bind(Object(x.a)(t)),t}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getCustomers()}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{className:"text-bold text-info mt-2",children:"Customer List"}),Object(n.jsx)("div",{className:"row",children:this.state.customers.map((function(e){return Object(n.jsx)(k,{name:e.name,phone:e.phone,address:e.address,image:"http://168.138.182.251:8080/image//"+e.image,onEdit:function(){return t.Edit(e)},onDrop:function(){return t.dropCustomer(e)}},e.customer_id)}))}),Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){return t.Add()},children:"Add Customer"})]}),Object(n.jsx)("div",{className:"modal fade",id:"modal_customer",children:Object(n.jsx)("div",{className:"modal-dialog",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("div",{className:"modal-header bg-info text-white",children:Object(n.jsx)("h4",{children:"Form Customer"})}),Object(n.jsx)("div",{className:"modal-body",children:Object(n.jsxs)("form",{onSubmit:function(e){return t.saveCustomer(e)},children:["Customer Name",Object(n.jsx)("input",{type:"text",className:"form-control mb-1",value:this.state.name,onChange:function(e){return t.setState({name:e.target.value})},required:!0}),"Customer Phone",Object(n.jsx)("input",{type:"text",className:"form-control mb-1",value:this.state.phone,onChange:function(e){return t.setState({phone:e.target.value})},required:!0}),"Customer Address",Object(n.jsx)("input",{type:"text",className:"form-control mb-1",value:this.state.address,onChange:function(e){return t.setState({address:e.target.value})},required:!0}),"Username",Object(n.jsx)("input",{type:"text",className:"form-control mb-1",value:this.state.username,onChange:function(e){return t.setState({username:e.target.value})},required:!0}),"update"===this.state.action&&!1===this.state.uploadFile?Object(n.jsx)("button",{className:"btn btn-sm btn-dark mb-1 btn-block",onClick:function(){return t.setState({uploadFile:!0})},children:"Change Customer Image"}):Object(n.jsxs)("div",{children:["Customer Image",Object(n.jsx)("input",{type:"file",className:"form-control mb-1",onChange:function(e){return t.setState({image:e.target.files[0]})},required:!0})]}),"update"===this.state.action&&!1===this.state.fillPassword?Object(n.jsx)("button",{className:"btn btn-sm btn-secondary mb-1 btn-block",onClick:function(){return t.setState({fillPassword:!0})},children:"Change Password"}):Object(n.jsxs)("div",{children:["Password",Object(n.jsx)("input",{type:"password",className:"form-control mb-1",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})},required:!0})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-block btn-success",children:"Simpan"})]})})]})})})]})}}]),s}(c.a.Component),S=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){var t;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).getAmount=function(t){var e=0;return t.map((function(t){e+=Number(t.price)*Number(t.qty)})),e},t.convertTime=function(t){var e=new Date(t);return"".concat(e.getDate(),"/").concat(Number(e.getMonth())+1,"/").concat(e.getFullYear())},t}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"card col-sm-12 my-1",children:Object(n.jsxs)("div",{className:"card-body row",children:[Object(n.jsxs)("div",{className:"col-lg-4 col-sm-12",children:[Object(n.jsx)("small",{className:"text-info",children:"Customer"}),Object(n.jsx)("h6",{children:this.props.customer_name})]}),Object(n.jsxs)("div",{className:"col-lg-4 col-sm-12",children:[Object(n.jsx)("small",{className:"text-info",children:"Address"}),Object(n.jsx)("h6",{children:this.props.customer_address})]}),Object(n.jsxs)("div",{className:"col-lg-2 col-sm-12",children:[Object(n.jsx)("small",{className:"text-info",children:"Total Amount"}),Object(n.jsxs)("h6",{className:"text-danger",children:["Rp ",this.getAmount(this.props.products)]})]}),Object(n.jsxs)("div",{className:"col-lg-2 col-sm-12",children:[Object(n.jsxs)("small",{className:"text-bold text-info",children:["Time: ",this.convertTime(this.props.time)]}),Object(n.jsx)("button",{className:"btn btn-sm btn-block btn-success","data-toggle":"modal","data-target":"#modalDetail".concat(this.props.transaction_id),children:"Details"})]})]})}),Object(n.jsx)("div",{className:"modal fade",id:"modalDetail".concat(this.props.transaction_id),children:Object(n.jsx)("div",{className:"modal-dialog modal-lg",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("div",{className:"modal-header bg-success text-white",children:Object(n.jsx)("h5",{children:"Detail of Transaction"})}),Object(n.jsxs)("div",{className:"modal-body",children:[Object(n.jsxs)("h5",{children:["Customer: ",this.props.customer_name]}),Object(n.jsxs)("h6",{children:["Time: ",this.convertTime(this.props.time)]}),Object(n.jsxs)("table",{className:"table table-bordered",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"#"}),Object(n.jsx)("th",{children:"Product"}),Object(n.jsx)("th",{children:"Price"}),Object(n.jsx)("th",{children:"Qty"}),Object(n.jsx)("th",{children:"Total"})]})}),Object(n.jsxs)("tbody",{children:[this.props.products.map((function(t,e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"".concat(e+1)}),Object(n.jsx)("td",{children:t.product.name}),Object(n.jsxs)("td",{children:["Rp ",t.price]}),Object(n.jsx)("td",{children:t.qty}),Object(n.jsxs)("td",{className:"text-right",children:["Rp ",t.price*t.qty]})]},t.product_id)})),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{colSpan:"4",className:"text-danger text-bold",children:Object(n.jsx)("h4",{children:"Total"})}),Object(n.jsx)("td",{className:"text-right text-danger text-bold",children:Object(n.jsxs)("h4",{children:["Rp ",this.getAmount(this.props.products)]})})]})]})]})]})]})})})]})}}]),s}(c.a.Component),_=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){var t;return Object(i.a)(this,s),(t=e.call(this)).headerConfig=function(){return{headers:{Authorization:"Bearer ".concat(t.state.token)}}},t.getTransaction=function(){j.a.get("http://168.138.182.251:8080/store/api/v1/transaksi",t.headerConfig()).then((function(e){t.setState({transaction:e.data})})).catch((function(e){e.response?e.response.status&&(window.alert(e.response.data.message),t.props.history.push("/login")):console.log(e)}))},t.state={token:"",transaction:[],selectedItem:null},localStorage.getItem("token")?t.state.token=localStorage.getItem("token"):window.location=p+"/login",t}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getTransaction()}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{className:"text-bold text-info mt-2",children:"Transactions List"}),this.state.transaction.map((function(t){return Object(n.jsx)(S,{transaction_id:t.transaksi_id,customer_name:t.customer.name,customer_address:t.customer.address,time:t.waktu,products:t.detail_transaksi},t.transaksi_id)}))]})]})}}]),s}(c.a.Component),P=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){var t;return Object(i.a)(this,s),(t=e.call(this)).headerConfig=function(){return{headers:{Authorization:"Bearer ".concat(t.state.token)}}},t.getProduct=function(){j.a.get("http://168.138.182.251:8080/store/api/v1/product",t.headerConfig()).then((function(e){t.setState({productsCount:e.data.length})})).catch((function(e){e.response?e.response.status&&(window.alert(e.response.data.message),t.props.history.push("/login")):console.log(e)}))},t.getAdmins=function(){j.a.get("http://168.138.182.251:8080/store/api/v1/admin",t.headerConfig()).then((function(e){t.setState({adminsCount:e.data.length})})).catch((function(e){e.response?e.response.status&&(window.alert(e.response.data.message),t.props.history.push("/login")):console.log(e)}))},t.getCustomer=function(){j.a.get("http://168.138.182.251:8080/store/api/v1/customer",t.headerConfig()).then((function(e){t.setState({customersCount:e.data.length})})).catch((function(e){e.response?e.response.status&&(window.alert(e.response.data.message),t.props.history.push("/login")):console.log(e)}))},t.getTransactions=function(){j.a.get("http://168.138.182.251:8080/store/api/v1/transaksi",t.headerConfig()).then((function(e){t.setState({transactionsCount:e.data.length})})).catch((function(e){e.response?e.response.status&&(window.alert(e.response.data.message),t.props.history.push("/login")):console.log(e)}))},t.getAdmin=function(){var e=JSON.parse(localStorage.getItem("admin"));t.setState({adminName:e.name})},t.state={token:"",adminName:null,productsCount:0,customersCount:0,transactionsCount:0,adminsCount:0},localStorage.getItem("token")?t.state.token=localStorage.getItem("token"):window.location=p+"/login",t}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getCustomer(),this.getAdmins(),this.getProduct(),this.getTransactions(),this.getAdmin()}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{}),Object(n.jsxs)("div",{className:"container mt-2",children:[Object(n.jsx)("h3",{className:"my-2",children:Object(n.jsxs)("strong",{children:["Welcome back, ",this.state.adminName]})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12 mt-2",children:Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-body bg-success",children:[Object(n.jsx)("h4",{className:"text-dark",children:Object(n.jsx)("strong",{children:"Products Count"})}),Object(n.jsx)("h1",{className:"text-white",children:Object(n.jsx)("strong",{children:this.state.productsCount})})]})})}),Object(n.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12 mt-2",children:Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-body bg-info",children:[Object(n.jsx)("h4",{className:"text-dark",children:Object(n.jsx)("strong",{children:"Customers Count"})}),Object(n.jsx)("h1",{className:"text-white",children:Object(n.jsx)("strong",{children:this.state.customersCount})})]})})}),Object(n.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12 mt-2",children:Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-body bg-warning",children:[Object(n.jsx)("h4",{className:"text-dark",children:Object(n.jsx)("strong",{children:"Transactions Count"})}),Object(n.jsx)("h1",{className:"text-white",children:Object(n.jsx)("strong",{children:this.state.transactionsCount})})]})})}),Object(n.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12 mt-2",children:Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-body bg-danger",children:[Object(n.jsx)("h4",{className:"text-dark",children:Object(n.jsx)("strong",{children:"Admins Count"})}),Object(n.jsx)("h1",{className:"text-white",children:Object(n.jsx)("strong",{children:this.state.adminsCount})})]})})})]})]})]})}}]),s}(c.a.Component),A=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){var t;return Object(i.a)(this,s),(t=e.call(this)).headerConfig=function(){return{headers:{Authorization:"Bearer ".concat(t.state.token)}}},t.getAdmins=function(){j.a.get("http://168.138.182.251:8080/store/api/v1/admin",t.headerConfig()).then((function(e){t.setState({admins:e.data})})).catch((function(e){e.response?e.response.status&&(window.alert(e.response.data.message),t.props.history.push("/login")):console.log(e)}))},t.Add=function(){w()("#modal_admin").modal("show"),t.setState({action:"insert",admin_id:0,name:"",username:"",password:"",fillPassword:!0})},t.Edit=function(e){w()("#modal_admin").modal("show"),t.setState({action:"update",admin_id:e.admin_id,name:e.name,username:e.username,password:"",fillPassword:!1})},t.saveAdmin=function(e){e.preventDefault(),w()("#modal_admin").modal("hide");var s={admin_id:t.state.admin_id,name:t.state.name,username:t.state.username};t.state.fillPassword&&(s.password=t.state.password);var n=b+"/admin";"insert"===t.state.action?j.a.post(n,s,t.headerConfig()).then((function(e){window.alert(e.data.message),t.getAdmins()})).catch((function(t){return console.log(t)})):"update"===t.state.action&&j.a.put(n,s,t.headerConfig()).then((function(e){window.alert(e.data.message),t.getAdmins()})).catch((function(t){return console.log(t)}))},t.dropAdmin=function(e){if(window.confirm("are you sure will delete this item?")){var s=b+"/admin/"+e.admin_id;j.a.delete(s,t.headerConfig()).then((function(e){window.alert(e.data.message),t.getAdmins()})).catch((function(t){return console.log(t)}))}},t.state={token:"",action:"",admins:[],admin_id:"",name:"",username:"",password:"",fillPassword:!0},localStorage.getItem("token")?t.state.token=localStorage.getItem("token"):window.location=p+"/login",t}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getAdmins()}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{className:"text-bold text-info mt-2",children:"Admin List"}),Object(n.jsxs)("table",{className:"table table-bordered",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"#"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Username"}),Object(n.jsx)("th",{children:"Option"})]})}),Object(n.jsx)("tbody",{children:this.state.admins.map((function(e,s){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:s+1}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.username}),Object(n.jsxs)("td",{children:[Object(n.jsx)("button",{className:"btn btn-sm btn-info m-1",onClick:function(){return t.Edit(e)},children:"Edit"}),Object(n.jsx)("button",{className:"btn btn-sm btn-danger m-1",onClick:function(){return t.dropAdmin(e)},children:"Hapus"})]})]},s)}))})]}),Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){return t.Add()},children:"Add Admin"}),Object(n.jsx)("div",{className:"modal fade",id:"modal_admin",children:Object(n.jsx)("div",{className:"modal-dialog",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("div",{className:"modal-header bg-info text-white",children:Object(n.jsx)("h4",{children:"Form Admin"})}),Object(n.jsx)("div",{className:"modal-body",children:Object(n.jsxs)("form",{onSubmit:function(e){return t.saveAdmin(e)},children:["Admin Name",Object(n.jsx)("input",{type:"text",className:"form-control mb-1",value:this.state.name,onChange:function(e){return t.setState({name:e.target.value})},required:!0}),"Username",Object(n.jsx)("input",{type:"text",className:"form-control mb-1",value:this.state.username,onChange:function(e){return t.setState({username:e.target.value})},required:!0}),"update"===this.state.action&&!1===this.state.fillPassword?Object(n.jsx)("button",{className:"btn btn-sm btn-secondary mb-1 btn-block",onClick:function(){return t.setState({fillPassword:!0})},children:"Change Password"}):Object(n.jsxs)("div",{children:["Password",Object(n.jsx)("input",{type:"password",className:"form-control mb-1",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})},required:!0})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-block btn-success",children:"Simpan"})]})})]})})})]})]})}}]),s}(c.a.Component),D=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",component:P}),Object(n.jsx)(u.a,{exact:!0,path:"/login",component:g}),Object(n.jsx)(u.a,{exact:!0,path:"/product",component:C}),Object(n.jsx)(u.a,{exact:!0,path:"/customer",component:y}),Object(n.jsx)(u.a,{exact:!0,path:"/transaction",component:_}),Object(n.jsx)(u.a,{exact:!0,path:"/admin",component:A})]})}}]),s}(c.a.Component),I=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,65)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;s(t),n(t),a(t),c(t),o(t)}))};s(62),s(63);r.a.render(Object(n.jsx)(O.a,{basename:"/toko-komputer",children:Object(n.jsx)(D,{})}),document.getElementById("root")),I()}},[[64,1,2]]]);