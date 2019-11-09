# VSTS Extension Boilerplate using React + Webpack

[![Build Status](https://travis-ci.org/lucaslra/react-webpack-vsts-extension.svg?branch=master)](https://travis-ci.org/lucaslra/react-webpack-vsts-extension)

> This code is a work in progress, there could be a number of bugs in it. If you find anything, please report [here](https://github.com/lucaslra/react-webpack-vsts-extension/issues).

A simple boilerplate code for the development of a Visual Studio Team Services (VSTS) using:

* [React](https://reactjs.org/)
* [WebPack](https://webpack.js.org/)
* [Jest](https://facebook.github.io/jest/) - For Testng
* [TFX-CLI](https://github.com/Microsoft/tfs-cli)

## Before you start

There is not a lot of configuration that needs to be done in order to start developing your application:

### NPM Install

Simply run ```npm i``` on the project folder.

### Setting up Environment Variables

* VSTS_ACCOUNT
  * The account name for your VSTS
  * Eg.: lucaslra
* PAT
  * This is the Personal Access Token (PAT) that will be used to access your VSTS Account
  * [How to generate your PAT on VSTS](https://docs.microsoft.com/en-us/vsts/git/_shared/personal-access-tokens?view=vsts)

### Configure your vss-extension.json file

All the details for your VSTS extension can be found on the vss-extension.json file, and you need to configure it before you really start. You can find the reference for the file [here](https://docs.microsoft.com/en-us/vsts/extend/develop/manifest?view=vsts).

The most important part is: **generate your own publisher id**, otherwise you won't be able to use it. You can find more details on how to do this [here](https://docs.microsoft.com/en-us/vsts/extend/publish/overview?view=vsts#create-a-publisher).

That is it! You are good to go!

## VSTS Extensions

To know more about how to create VSTS (and TFS) extensions, you can follow these links:

* [What are extensions?](https://docs.microsoft.com/en-us/vsts/extend/overview?view=vsts)
* [Write your first extension](https://docs.microsoft.com/en-us/vsts/extend/get-started/node?view=vsts)
* [Extension Points](https://docs.microsoft.com/en-us/vsts/extend/reference/targets/overview?view=vsts)
* [Contributions Model Guide](https://github.com/Microsoft/vsts-extension-samples/tree/master/contributions-guide)
