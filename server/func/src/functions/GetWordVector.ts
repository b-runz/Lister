import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function GetWordVector(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('GetWordVector', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: GetWordVector
});
