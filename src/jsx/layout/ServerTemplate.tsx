// server dependency 实现服务端渲染 -- start
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { StaticRouter } from 'react-router-dom'
import App from '../App'
// server dependency -- end

// server template 实现服务端渲染 -- start
const template = (markup, helmet) => (
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
      <title>blog-demo</title>
    </head>
    <body>
      <div id="root">${markup}</div>
      <!-- <script src="/client.js" async type="text/babel"></script> -->
    </body>
  </html>`
);

const serverRender = (req, res, next) => {
  const markup = (
    ReactDOMServer.renderToString(
      <StaticRouter location={req.url} content={{}}>
        <App />
      </StaticRouter>
    )
  );
  const helmet = Helmet.renderStatic()
  res.status(200).send(template(markup, helmet))
  next()
};
// server template -- end

export default serverRender