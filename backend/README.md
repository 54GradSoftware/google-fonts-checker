# tracker checker

a simple API to search for known trackers for a specific website

## start server
```
node index.js
```

## websocket API

### site
#### params:
req.body
 - url: String
 - filterResult: Array\<String>
 
res.body
 - status: [200, 400, 500, 102]
 - message: String
 - url: String
 - result: Object
   - trackers: Array\<_Tracker_>
   - allRequests: Array\<_Request_>

### Objects

#### Request
 - method: String
 - url: String
#### Tracker
 - name: String
 - matches: Array\<Request>
 - slug: String
 - showDetails: Boolean
 - url: String