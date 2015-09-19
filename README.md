# meteor-electron-client
A boilerplate to use meteor to build desktop apps!

## Why build Electron apps with Meteor?

[Watch this video!](https://youtu.be/Xgb9NTxPqVY)

Meteor is a great tool for automating all the things you need to do
while building even client side apps. It uglify, concat, minify all
your javascript and CSS for you, and live reload while developing.

In the old days you have to write lots of code using maybe Grunt or
gulp to achieve this. Furthermore, meteor provides a great ecosystem
for managing packages, by simply typing `meteor add react`, and
you're ready! No more Yeoman generator!


## How to use

Clone this repo (replace [YOUR_APP_NAME])!

```
git clone https://github.com/YuHuaiChen/meteor-electron-client [YOUR_APP_NAME]
cd [YOUR_APP_NAME]
```

install dependencies

```
npm install
```

You need gulp to build:

```
npm install -g gulp
```

Try the demo app!

```
gulp
```

you may want to remove `.git` with `rm -rf .git/`  

Now, just develop your meteor app as usual in the `meteor/` subdirectory, add any package as you like!  
When you're done...

## Build!

To test and your app and start electron, run:

```
gulp
```

Oh BTW, this won't live reload in electron, sorry...

Since it takes a long time for meteor to bundle, I don't think it's reasonable to `watch` file changes.
Just use Meteor's live reload ability, and build it to electron when finish.

Name and put your icon in the project root as /icon.icns

To build the electron app, run:

```
gulp build --name "YOUR_APP_NAME"
```


## Why `Meteor.disconnect()`?

**NOTE: You need to comment this to have meteor live-reload working**
and uncomment is before build!

As mentioned in the [video](https://youtu.be/Xgb9NTxPqVY) described
previously, disconnecting to the server makes this page static, and
don't need internet access.

So keeping the `Meteor.disconnect()` lets you build an ***OFFLINE***
electron app, if you want your app to be able to connect to a server,
definitely check out
[jrudio/meteor-electron](https://github.com/jrudio/meteor-electron)
and [sircharleswatson/Electrometeor](https://github.com/sircharleswatson/Electrometeor)
or do it youself with [this tutorial](https://medium.com/@guidouil/cross-platform-desktop-apps-with-meteor-and-electron-5355eb9e351).
Or, you can delete `Meteor.disconnect()`, and modify the
`meteor-build-client` part in the gulpfile, to add an additional
`--server [YOUR_DOMAIN]` parameter.

## Contribution

Contribution is very very welcomed!  
I'm still learning to all these awesome technologies, so feel free to
correct me with any mistakes : )

## LICENSE
The MIT License (MIT)

Copyright (c) 2015 Yu-Huai Chen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
