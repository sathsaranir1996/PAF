<%@page import="com.hari.model.Member"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
Member mem = (Member) session.getAttribute("member");
String un = "";
if(mem == null){
	String msg = "Login First";
	String redirectURL = "http://localhost:8081/PAF/logReg.jsp?msg="+msg;
	response.sendRedirect(redirectURL);
}
else{
	un = mem.getName();
}
%>
<a href = "entry/product/viewAllProduct">View All Product</a><br/>
<a href = "entry/order/notify">Notification of order</a><br/>
<a href = "addProduct.jsp">Add Product</a><br/>
<a href = "entry/product/viewMyProductNotSold">View my products Not Sold</a><br/>
<a href = "entry/product/viewMyProductSold">View my products Sold</a><br/>
<a href = "entry/order/orderOpp">View orders and accept or decline them</a><br/>
</body>
</html>