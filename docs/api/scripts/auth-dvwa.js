function authenticate(e,t,n){var r=t.get("Login_URL"),a=t.get("CSRF_Field"),o=extractInputFieldValue(getPageContent(e,r),a),s=t.get("POST_Data");return s=s.replace("{%username%}",encodeURIComponent(n.getParam("Username"))),s=s.replace("{%password%}",encodeURIComponent(n.getParam("Password"))),s=s.replace("{%"+a+"%}",encodeURIComponent(o)),sendAndReceive(e,r,s)}function getRequiredParamsNames(){return["Login_URL","CSRF_Field","POST_Data"]}function getOptionalParamsNames(){return[]}function getCredentialsParamsNames(){return["Username","Password"]}function getPageContent(e,t){return sendAndReceive(e,t).getResponseBody().toString()}function sendAndReceive(e,t,n){var r=e.prepareMessage(),a="GET";n&&(a="POST",r.setRequestBody(n));var o=new org.apache.commons.httpclient.URI(t,!0),s=new org.parosproxy.paros.network.HttpRequestHeader(a,o,"HTTP/1.0");return r.setRequestHeader(s),e.sendAndReceive(r),r}function extractInputFieldValue(e,t){for(var n=Java.type("net.htmlparser.jericho.Source"),r=new n(e),a=r.getAllElements("input").iterator();a.hasNext();){var o=a.next();if(o.getAttributeValue("name")==t)return o.getAttributeValue("value")}return""}