# aurelia Yahoo Weather App (Shahid)

## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
  > **Note:** Gulp must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.
4. Ensure that [jspm](http://jspm.io/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.

  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts. If you choose to authorize jspm by an access token instead of giving your password (see GitHub `Settings > Personal Access Tokens`), `public_repo` access for the token is required.
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.
6. To run the app, execute the following command:

  ```shell
  gulp watch
  ```
7. Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

> The Skeleton App uses [BrowserSync](http://www.browsersync.io/) for automated page refreshes on code/markup changes concurrently across multiple browsers. If you prefer to disable the mirroring feature set the [ghostMode option](http://www.browsersync.io/docs/options/#option-ghostMode) to false

## Running The App under Electron

#### Note:
The first five steps below are identical to the first five steps for running this app the "standard' way, using the jspm / systemjs tooling. The difference is in the command to run the app, where the standard `gulp watch` command is replaced by the sequence of two commands:

```shell
gulp build
electron index.js
```

To run the app under [Electron](http://electron.atom.io), follow these steps.

1. Install [Electron](http://electron.atom.io)

  ```shell
  npm install electron --save-dev
```

2. From the project folder, execute the following command:

  ```shell
  npm install
  ```

3. Ensure that [Gulp](http://gulpjs.com/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
  > **Note:** Gulp must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.

4. Ensure that [jspm](http://jspm.io/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.

  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts. If you choose to authorize jspm by an access token instead of giving your password (see GitHub `Settings > Personal Access Tokens`), `public_repo` access for the token is required.

5. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.

6. To build the app execute the following command (this will give you a dist directory)

 ```shell
    gulp build
 ```

7. To start the app, execute the following command:

  ```shell
  electron index.js
  ```
>**Note:** If typing the command `electron index.js` is too much for you change this line in package.json from `"main": "dist/main.js",` to `"main": "index.js",`
> Then, you can invoke electron by just typing
 ```shell
   electron .
```

## Packaging The App Using Electron-Packager

>**Note:** The electron-packager package relies on `"main"` in package.json to know which JS file to use to start the application. To make this work with electron-packager change this line in package.json from `"main": "dist/main.js",` to `"main": "index.js",`

1. Follow steps 1-6 in the previous section (Running The App under Electron).

2. Install electron-packager

  ```shell
  npm install electron-packager -g
  ```
  
3. Run the command:

  ```shell
  electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> --version <electron version #> [optional flags...]
  ```
Include the `--asar` option to create an [asar archive](http://electron.atom.io/docs/tutorial/application-packaging/) from your app.

By default, electron-packager will place the packaged app in a folder under the source folder with the naming convention of `<appname>-<platform>-<arch>`.

See the [electron-packager](https://github.com/electron-userland/electron-packager) readme for more details on options.


