const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'dev/index.js'), // 📌 Archivo de entrada
    output: {
        path: path.resolve(__dirname, 'pub'), // 📌 Carpeta de salida
        filename: 'bundle.js' // 📌 Archivo JS generado
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // 📌 Procesar archivos SCSS
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, // 📌 Procesar imágenes
                type: "asset/resource",
                generator: {
                    filename: "img/[name][ext]" // 📌 Guardar imágenes en /img
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "css/styles.css" }) // 📌 Generar archivo CSS
    ],
    mode: "development" // 📌 Cambia a 'production' para versión final
};
