// Імпортуйте модуль 'path', який надає утиліти для роботи з шляхами файлів
const path = require('path');

// Імпортуйте UglifyJsPlugin, який використовується для мінімізації JavaScript коду
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Імпортуйте MiniCssExtractPlugin, який використовується для вилучення CSS у окремий файл
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Експортуйте конфігурацію Webpack як об'єкт
module.exports = {
  // Вкажіть точку входу програми, з якої Webpack почне збірку
  entry: './src/index.js',

  // Вкажіть конфігурацію виходу
  output: {
    // Вкажіть шлях, де буде згенеровано вихідний файл
    path: path.resolve(__dirname, 'dist'),
    // Вкажіть ім'я файлу виходу
    filename: 'bundle.js',
  },

  // Вкажіть конфігурацію модуля
  module: {
    // Вкажіть масив правил для обробки різних типів файлів
    rules: [
      {
        // Вкажіть правило для обробки JavaScript файлів
        test: /\.js$/,
        // Виключіть файли в директорії node_modules з обробки
        exclude: /node_modules/,
        // Використовуйте babel-loader для обробки JavaScript файлів
        use: 'babel-loader',
      },
      {
        // Вкажіть правило для обробки CSS файлів
        test: /\.css$/,
        // Використовуйте MiniCssExtractPlugin.loader та css-loader для обробки CSS файлів
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  // Вкажіть масив плагінів для використання
  plugins: [
    // Використовуйте UglifyJsPlugin для мінімізації JavaScript коду
    new UglifyJsPlugin(),
    // Використовуйте MiniCssExtractPlugin для вилучення CSS у окремий файл
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
  ],
};