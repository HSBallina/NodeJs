/*
    PACKAGE MANAGERS

    A package manager or package management system is a collection of 
    software tools that automate the process of installing, upgrading, 
    configuring, and removing computer programs for a computer's 
    operating system in a consistent manner. — Wikipedia

    winget for Windows
    apt-get for Linux
    NuGet for .NET
    NPM for node.js

    https://www.npmjs.com/

    NPM dependency visualizer
    https://npm.anvaka.com/#/
*/

/*
    NPM CLI
    npm install [--location=global] package-name[@version] [--save-dev]
    npm list [--location=global] [--depth=10]
    npm uninstall [--location=global] package-name

    On Windows the global node_modules folder is found under %APPDATA%\npm
    For other eco systems check https://docs.npmjs.com/cli/v8/configuring-npm/folders

    The package.json & package-lock.json files keeps track of your module and its dependencies (+ some other stuff)
*/
