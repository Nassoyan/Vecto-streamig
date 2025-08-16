const images = require.context('./assets', false, /\.(png|jpe?g|svg)$/);

export function getImage(name) {
  return images(`./${name}`);
}