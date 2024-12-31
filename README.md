# Incomplete HTTP Response in Node.js Server

This repository demonstrates a common error in Node.js HTTP servers: omitting the `Content-Length` header and failing to call `res.end()`. This can lead to incomplete responses or unexpected behavior in the client.

## Bug

The `bug.js` file contains a Node.js HTTP server that is missing the `Content-Length` header.  This can cause problems with clients expecting a specific content length. Additionally, the response lacks `res.end()`, leaving the connection open and the client potentially waiting indefinitely. 

## Solution

The `bugSolution.js` file provides a corrected version of the server. It includes both the `Content-Length` header for better client handling and explicitly calls `res.end()` to signal the completion of the response. 