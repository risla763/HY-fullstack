sequenceDiagram  <br> 
  participant browser <br>
  participant server <br>
<br>
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes <br>
  activate server <br>
  server-->>browser: redirect  <br>
  deactivate server <br>

  Note: Payload: "j" <br>
<br>
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css <br>
  activate server <br>
  server-->>browser: HTML document <br>
  deactivate server <br>
<br>
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css <br>
  activate server <br>
  server-->>browser: the css file <br>
  deactivate server <br>
<br>
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js <br>
  activate server <br>
  server-->>browser: the JavaScript file <br>
  deactivate server <br>
<br>
  Note right of browser: The browser starts executing the JS code that fetches the JSON from the server. <br>
    <br>
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json <br>
  activate server <br>
  server-->>browser: [{"content":"Hola q ase","date":"2024-02-10T22:38:31.033Z"},{"content":"werty","d...}] <br>
  deactivate server    <br>
<br>
  Note right of browser: The browser executes the callback function that renders the notes. <br>
    
