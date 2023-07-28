This is a try to implement a simple requests API allowing to write at once both - api tests and k6-based load tests...

So far, the try is unsuccessful...

TODO: find a way to bundle load tests stripping es6 syntax out of them.

Currently bundled version will lead to the following failure when running through k6:

```shell
% npm run test:smoke -- --duration 1s

...

          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

ERRO[0000] could not initialize 'dist/smoke.test.bundle.js': could not load JS test 'file:///Users/yashaka/MEGAsync/projects/__automician__/k6-playwright-integration-example/dist/smoke.test.bundle.js': file:///Users/yashaka/MEGAsync/projects/__automician__/k6-playwright-integration-example/dist/smoke.test.bundle.js: Line 21:14 Unexpected reserved word (and 13 more errors) 
```
