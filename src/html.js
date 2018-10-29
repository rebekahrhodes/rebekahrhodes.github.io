import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script
              dangerouslySetInnerHTML={{
                  __html: `
                  (function(apiKey){
                      (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
                      v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
                          o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
                          y=e.createElement(n);y.async=!0;y.src='https://pendo-wildlings-static.storage.googleapis.com/agent/static/'+apiKey+'/pendo.js';
                          z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
                  
                          // Call this whenever information about your visitors becomes available
                          // Please use Strings, Numbers, or Bools for value types.
                          pendo.initialize({
                              visitor: {
                                  id:              Math.random()   // Required if user is logged in
                                  // email:        // Optional
                                  // role:         // Optional
                  
                                  // You can add any additional visitor level key-values here,
                                  // as long as it's not one of the above reserved names.
                              },
                  
                              account: {
                                  id:           Math.random() // Highly recommended
                                  // name:         // Optional
                                  // planLevel:    // Optional
                                  // planPrice:    // Optional
                                  // creationDate: // Optional
                  
                                  // You can add any additional account level key-values here,
                                  // as long as it's not one of the above reserved names.
                              }
                          });
                  })('ed847ae6-bc22-4b2f-73ab-a748e40ff069');           
                  `
              }}
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
      
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
