import { HelmetData } from "react-helmet";
import { NormalizedCacheObject } from "apollo-cache-inmemory";

import serialize from 'serialize-javascript';

const Html = (content: string, helmetData: HelmetData, apolloState: NormalizedCacheObject) => `
<html lang="en">
<head>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">${content}</div>
<script> 
  window.INITIAL_STATE = ${serialize(apolloState)}
</script>
</body>
</html>
`


export default Html;