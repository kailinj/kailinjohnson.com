// tslint
// Configure Angular `environment.ts` file path
const targetPath = "./src/environments/environment.ts";
// `environment.ts` file structure
const envConfigFile = `export const environment = {
  'deviantart.id': '${process.env.DEVIANTART_ID}',
  'deviantart.key': '${process.env.DEVIANTART_KEY}',
  'tumblr.id': '${process.env.TUMBLR_ID}',
  'tumblr.key': '${process.env.TUMBLR_KEY}'
};`;
console.log("The file `environment.ts` will contain the following content: \n");
console.log(envConfigFile);
require("fs").writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      `Angular environment.ts file generated correctly at ${targetPath} \n`
    );
  }
});
