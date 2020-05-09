const path = require('path');

module.exports = async ({ config }) => {
    config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.scss', '.sass');

    config.module.rules.push({
        test: /\.ts$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: [
            {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true
                },
            }
        ],
    });
    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });
    return config;
};
