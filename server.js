const express = require( 'express')
const morgan = require ('morgan' )
const path = require( 'path')

// const app = express ()
// const PORT = 3000

// //add Morgan logger as a middleware 
// // app.use (morgan ('tiny'))
// app.use (morgan('combined'))

// // middleware to serve static content
// app.use(express.static(path.join( __dirname, 'public')))

// app.get('/typesetting', (req, res) => {
//     res.redirect('https://www.google.com/search?q=funny+webisties&sca_esv=887594e9c4892239&rlz=1C5MACD_enUS1020US1020&sxsrf=AHTn8zp4y6ErOl6qi_QDM0vTuxFh8xZsGw%3A1744159079923&ei=Z8H1Z-yLONGA0PEPo7zfCQ&ved=0ahUKEwis24_z2smMAxVRADQIHSPeNwEQ4dUDCBA&uact=5&oq=funny+webisties&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2Z1bm55IHdlYmlzdGllczIHECMYsAIYJzIKEAAYgAQYsQMYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDUiEHFD9BVjBG3AFeAGQAQCYAXigAfQKqgEEMTMuM7gBA8gBAPgBAZgCFaACxAvCAgoQABiwAxjWBBhHwgIKECMYgAQYJxiKBcICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAgQQIxgnwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxjRAxjHAcICBRAAGIAEwgIIEAAYgAQYsQPCAgoQLhiABBhDGIoFwgINEAAYgAQYsQMYQxiKBcICCxAuGIAEGLEDGIMBwgIHECMYsQIYJ8ICChAAGIAEGLEDGArCAg0QLhiABBixAxiDARgKwgIOEAAYgAQYkQIYsQMYigXCAgoQABiABBgUGIcCwgIIEC4YgAQYsQPCAgcQABiABBgKwgIGEAAYFhgewgIIEAAYgAQYogSYAwCIBgGQBgiSBwQxNy40oAfFhgGyBwQxMi40uAexCw&sclient=gws-wiz-serp')
// })

// app. listen (PORT, () => {
// console.log(`listening on port $(PORT}`)
// })

// server.js

// const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// add any necessary code you'd want to!

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    res.redirect('https://glistening-strudel-23219a.netlify.app/')
});

// Route for Typesetting
app.get('/typesetting', (req, res) => {
    res.redirect('https://thinzarhtun.github.io/typesetting/')
})

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
    res.redirect('https://four-algorithms.netlify.app/')
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});