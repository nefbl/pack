const pkg = JSON.parse(require('fs').readFileSync('./package.json'));

module.exports = {
    entry: ['./src/main.ts'],
    output: {
        path: __dirname,
        filename: 'build/main@v' + pkg.version + '.js'
    }
};
