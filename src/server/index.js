require('ignore-styles');

require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
});

// it help to load your files at the server, without it the files doesn't loading

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif'],
  name: '/assets/[hash].[ext]',
});

require('./server');
