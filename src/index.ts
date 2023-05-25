import '@shopify/shopify-api/adapters/node';
import { createSHA256HMAC } from '@shopify/shopify-api/runtime';

(async function () {
  console.log(await createSHA256HMAC('secret', 'payload'));
})();
