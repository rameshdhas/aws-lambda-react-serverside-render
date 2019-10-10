import * as e from 'express';
import { Application } from 'express';
import * as awsServerlessExpress from 'aws-serverless-express';
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import { MarkupHandler } from './src/handlers/MarkupHandler';


let express: any = (<any>e).default || e;
const app: Application = express()

app.use(awsServerlessExpressMiddleware.eventContext())
app.use('/', MarkupHandler);

app.listen(3000, () => {
  console.log('Listening on port 3000:')
});

const server = awsServerlessExpress.createServer(app)

exports.handler = (event: any, context: any) => {
console.log('Body:', event.body);
  console.log('Headers:', event.headers);
  console.log('Method:', event.method);
  console.log('Params:', event.params);
  console.log('Query:', event.query);  


awsServerlessExpress.proxy(server, event, context);
}