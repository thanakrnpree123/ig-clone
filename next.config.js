/** See https://github.com/zeit/next.js/tree/canary/examples/with-ant-design */

const withCss = require("@zeit/next-css");
// module.exports = withCss({
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       const antStyles = /antd\/.*?\/style\/css.*?\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/;
//       const origExternals = [...config.externals];
//       config.externals = [
//         (context, request, callback) => {
//           if (request.match(antStyles)) return callback();
//           if (typeof origExternals[0] === "function") {
//             origExternals[0](context, request, callback);
//           } else {
//             callback();
//           }
//         },
//         ...(typeof origExternals[0] === "function" ? [] : origExternals),
//       ];

//       config.module.rules.push({
//         test: antStyles,
//         use: {
//           loader: "url-loader",
//           options: {
//             limit: 100000,
//             name: "[name].[ext]",
//           },
//         },
//       });
//     }
//     return config;
//   },
// });
module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
};
module.exports = withCss({
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          // limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
});
