import {OutputTarget} from "../Summary";
import fs from 'fs';
export class HtmlReport implements OutputTarget{
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>
          <p>${report}</p>
        </div>
      </div>
    `;
    fs.writeFileSync('reports.html', html, {
      encoding: 'utf8'
    });
  }
}