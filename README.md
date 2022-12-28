### Thought Process
1. Of course the best scenario would be to run the tests in the CICD pipeline, depending on the project (frequency of releases, frequency of code commits, team composition) we would run it either on each change or on a recurring basis.
2. I've implemented logic to check the email in my tests, but for production I would love to share my ideas on the next interview:)
3. we can run the same scenarios via methods I've added into BasePage, we can feed our tests with different screen sizes, but for actual device testing we should stick to Selenium

### TODO
2. Depending where this test repo will be located (separate or as a part of the UI functionality) we might need to add other functionality like e.g. linters
3. Depending on the project details we might also break our e2e test into smaller chunks (e.g. more it-s)
4. We might also add more comments/blocks of text for test cases if we have juniors working on our tests as well
5. We would also need to implement different envs handling (with e.g. cyenv or .env)
7. I went with static methods just as a showcase, in real world scenarios we would still need to follow the classic constructor classes


### Installation
```
yarn install
```

### Running locally

```
cy:open  --> e2e Testing 
```


