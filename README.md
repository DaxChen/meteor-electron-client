# meteor-electron-client
A boilerplate to use meteor to build desktop apps!

## Why build Electron apps with Meteor?

This project is inspired by [this video!](https://youtu.be/Xgb9NTxPqVY)

Meteor is a great tool for automating all the things you need to do
while building even client side apps. It uglify, concat, minify all
your javascript and CSS for you, and live reload while developing.

In the old days you have to write lots of code using maybe Grunt or
gulp to achieve this. Furthermore, meteor provides a great ecosystem
for managing packages, by simply running `meteor add react`, and
it just works! No more bower install, copy paste link and script tags,
no more Yeoman generator!


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


## Development

### Meteor part:

Now, just develop your meteor app as usual in the `meteor/` subdirectory, add any package as you like!

Since it takes a long time for meteor to bundle, you won't want to bundle it
 every time you make changes. So when you're developing on the meteor part, you
 can just point your browser to localhost and use meteor's live-reload ability.
If you want to preview it in electron, run:

```
gulp preview
```

this is simply a electron pointing to `localhost:3000` (edit `localhost.js` to change port).

When you're done with meteor part, run:

```
gulp
```

This will bundle up your meteor project into html, css and js, and run electron
 to show you the result.

### Electron part:

To program the electron side, such as customizing the menu bar, multi-window app,
 or some native packages, it's all inside the `electron/` subdirectory.
You can run:

```
gulp watch
```

to have gulp watch the file changes, and reload application (⌘+R)


## Build

After you're done developing...

Name and put your icon in the project root as /icon.icns

>If you use https://iconverticons.com/online/ to convert images, click on the triangle and choose icns file, instead of icns(finder ready)

To package the electron app, run:

```
gulp build-all --name="YOUR_APP_NAME"
```
to build all platforms (win/linux/darwin and ia32/x64)

or only some platform/arch, such as
```
gulp build --platform="darwin" --arch="x64" --name="YOUR_APP_NAME"
gulp build --platform="linux" --arch="ia32" --name="YOUR_APP_NAME"
gulp build --platform="win32" --arch="x64" --name="YOUR_APP_NAME"
```

`--platform`: Allowed values: `linux`, `win32`, `darwin`, `all`.
`--arch`: Allowed values: `ia32`, `x64`, `all`.

### Building windows apps from non-windows platforms

If you get the `[Error: spawn wine ENOENT]` error while building for windows,
it's because you need wine.

>If you run this on windows and you want to set the icon for your app using the --icon option, it requires running a thing called rcedit.exe (via [this](https://github.com/atom/node-rcedit)), which means you will need to install wine and have it available in your path. To do this on Mac OS you can brew install wine.


More informations on the options for packaging: [docs of electron-packager](https://github.com/maxogden/electron-packager)


## Why `Meteor.disconnect()`?

**NOTE: You need to comment this to have meteor's live-reload while developing**
and uncomment this before build!

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


## Credits

Thanks to

[frozeman/meteor-build-client](https://github.com/frozeman/meteor-build-client)

[maxogden/electron-packager](https://github.com/maxogden/electron-packager)

[mafintosh/electron-prebuilt](https://github.com/mafintosh/electron-prebuilt)


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
