# Simple HTTP Proxy
This proxy is based on a HTTP Server and HTTP client, **no fancy proxy mechanisms** are implemented

Simply every request sent to this server is redirected to the specified endpoint just making requests to it, creating a brand new HTTP request with the same parameters and URI 

## What it supports
- **COOKIEs Session Storage**
- **GET Requests**
Forwards the URI and Params
- **POST Requests**
Forwards the Form **in JSON format** along with the URI
`Content-Type: application/json`

## Example Usage
`node .\index.js 3000 'https://www.lefrecce.it/msite/api/'`
```
http://localhost:3000/solutions?limit=10
<==>
https://www.lefrecce.it/msite/api/solutions?limit=10
```
