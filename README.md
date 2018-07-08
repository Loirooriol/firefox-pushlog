# Firefox pushlog

This WebExtension shows adds a submenu in Tools that can be used to shows Firefox changes introduced by last update, or that will be included in a future update.

This feature used to be part of Nightly Tester Tools, but was removed when the add-on was converted into a WebExtension.

![screenshot](https://user-images.githubusercontent.com/7477678/42422905-078c3a48-82f0-11e8-9390-56624e069899.png)

### Installation

This WebExtension uses an experiment API in order to obtain the source revision, and thus Mozilla refuses to sign it.

Therefore, you need to set `xpinstall.signatures.required = false` in about:config, but this will only work if you use Firefox Nightly or Developer Edition.

Then, you can install the add-on from https://github.com/Loirooriol/firefox-pushlog/releases.

Click the `firefox_pushlog.xpi` file and allow the installation.
