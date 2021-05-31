import { method } from '@wix/yoshi-flow-bm/serverless';

export const comments = method(async function () {
  return {
    comments: ['Hi'],
  };
});
