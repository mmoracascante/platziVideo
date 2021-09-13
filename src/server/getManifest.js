import fs from 'fs';

const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifes.json`));
  } catch (err) {
    console.log(err);
  }
};

export default getManifest;
