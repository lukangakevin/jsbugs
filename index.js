const http = require('http')

function JsBug(data)
{
    const options = {
        hostname: 'localhost',
        port: 8091,
        path: '/api/send/bug/v1/add',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          }
      }
      
      const req = http.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`)
      
      res.on('data', result => {
        res.json(result)
      })
      })
      req.on('error', error => {
        const response = {
            status: "failed"
        };
        res.json(response)
        console.error(error)
      })
      req.write(data)
      req.end()
}

function JsBug(urlOption,data)
{
      const req = http.request(urlOption, res => {
        res.on('data', result => {
          res.json(result)
        })
      })
      req.on('error', error => {

        const response = {
            status: "failed"
        };
        res.json(response)
        console.error(error)
      })
      req.write(data)
      req.end()
}

/* JsBug({
    hostname: 'localhost',
    port: 8091,
    path: '/api/send/bug/v1/add',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      }
  }, 
  JSON.stringify( {
      token:'fsdfgqsfq'
    flag:'Division zéro',
    date_create:'11/08/1991',
    user:'Kev PC'
   })
  ); */




