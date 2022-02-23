# tracker checker

a simple api to search for known trackers for a specific website

## start server
```
node index.js
```

## API

### /site - POST
#### params:
req.body
 - url: String
 - filterResult: Array\<keys>
 
res.body
 - status: [200, 400]
 - trackers: Array\<_Tracker_>
 - allRequests: Array\<_Request_>

#### curl example
```
curl 127.0.0.1:3000/api/v1/site -H "Content-Type: application/json" -d '{"url":"https://54gradsoftware.de","filterResult":["trackers"]}';echo 
```

### Objects

#### Request
 - method: String
 - url: String
#### Tracker
 - name: String
 - matches: Array\<Request>