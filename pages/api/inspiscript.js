// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  res.writeHead(200, {
    'Content-Type': 'application/javascript',
  });
  const fileContent = fs.readFileSync('./inspi-script.js', {
    encoding: 'utf8',
  });
  res.write(fileContent);
  res.end();
};
