<%--
  Created by IntelliJ IDEA.
  User: Yang7
  Date: 2020/2/13
  Time: 21:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Hello Page</title>
  </head>
  <body>
    <p>Say <a href="hello">Hello</a></p>

  <form method="post" action="hello">
    <h2>Name:</h2>
    <input type="text" id="say-hello-text-input"  name = "name"/>
    <input type="submit" id = "say-hello-button" value="Say Hello"/>
  </form>
  </body>
</html>
