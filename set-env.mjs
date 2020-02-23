// tslint
import { config } from 'dotenv';
import { writeFile } from 'fs';

// Configure Angular `environment.ts` file path
const targetPath = "./src/environments/environment.ts";
// `environment.ts` file structure
const envConfig = config();
if (!envConfig.error) {
  const envConfigFile = `
    export const environment = {
      deviantartId: '${process.env.DEVIANTART_ID}',
      deviantartKey: '${process.env.DEVIANTART_KEY}',
      tumblrId: '${process.env.TUMBLR_ID}',
      tumblrKey: '${process.env.TUMBLR_KEY}'
    };
  `;
  console.log(
    "The file `environment.ts` will be written with the following content: \n"
  );
  console.log(envConfigFile);
  writeFile(targetPath, envConfigFile, function(err) {
    if (err) {
      throw console.error(err);
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      );
    }
  });
} else {
  console.error("Unable to parse");
}
