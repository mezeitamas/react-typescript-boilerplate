# React with TypeScript and Webpack template

This repository serves as a starting point for creating a React application using TypeScript and Webpack.

## Getting started

To get started, clone the repository and install the dependencies:

```bash
git clone git@github.com:mezeitamas/react-typescript-boilerplate.git
cd react-typescript-boilerplate
npm install
```

Next, you can start the development server:

```bash
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open http://localhost:8080 to view it in the browser. The port needs to be defined in the `.env` file with the name `APP_DEV_SERVER_PORT`.

```bash
APP_DEV_SERVER_PORT=8080
```

### `npm run bundle`

Builds the app for production to the `dist/bundle` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

A report is also created and placed under the `reports/bundle` folder with stats of bundle.

### `npm run clean`

Removes all the generated folders: `dist/` and `reports/`.

### `npm run format:check`

Executes a `prettier` check on the source code.

### `npm run format:fix`

Fixes the formatting.

### `npm run lint:check`

Runs a static code analysis, using `eslint`.

### `npm run lint:fix`

Fixes all the automatically fixable issues.

### `npm run test:unit:check`

Runs unit tests and place the coverage report under `reports/tests/unit/coverage`.

### `npm run test:unit:update`

Updates the snapshots.

### `npm run audit:check`

Executes an audit on dependencies regarding security vulnerabilities.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This repository is licensed under the [MIT License](LICENSE).
