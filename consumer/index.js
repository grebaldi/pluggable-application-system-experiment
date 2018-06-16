import message, {alternative} from 'module';
import {$get} from 'plow-js';
import internalMessage from 'provider/lib/something';

const obj = {
	test: 'Hello World'
};

document.write(`<p>I am the consumer. Here's something the provider told me: ${message}</p>`);
document.write(`<p>Here's another thing the provider told me: ${alternative}</p>`);
document.write(`<p>As a consumer, I can use plow-js without bundling it: ${$get('test', obj)}</p>`);
document.write(`<p>As a consumer I can read modules deep within dependencies, as lon as they are exposed: ${internalMessage}</p>`);
