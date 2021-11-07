# Example - 1 (Webpack) (live-html-validator)


**1.** Download or copy [example-1](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/webpack/1)

**2.** Go to the directory with `webpack.config.js` and run the command in console: 

```shell
npm install
```

**3.** Double-clisk on **start.bat** or run in console 

```shell
npm run start
```
In the console you should see the following message:

> Server started | host: 127.0.0.1 | port: 8080

**4.** Set up a connection with the plugin. (host: 127.0.0.1 and port: 8080) [Example of how to establish a connection to a plugin](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/%D1%81onnect_to_server)

**5.** Open the browser plugin and go to «Live HTML Validator» -> «Settings» scroll down to «Other settings» and set «Delay before validation» to 1000 or 2000. Reconnect to the server plugin.

**6.** Open `src/index.js` the file and edit it.

**Congratulation!**

You should hear a sound and see a visual notification on the browser page if you uncomment something that contains an error or warning.
