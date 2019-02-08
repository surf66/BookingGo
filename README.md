# BookingGo
BookingGo Tech Test

### Run Locally
Firstly, install dependencies with `npm i`. Start the application with `npm start` and then navigate to `http://localhost:8080` in a browser.

### Tests

To run all tests execute `npm run test`.

#### Unit (Jest)
To run unit tests execute `npm run unit-test`.
After tests pass, you can see a code coverage report at `coverage/lcov-report/index.html`.

#### Integration (Cypress)
To run integration tests execute either of the following

```
npm run integration-test
npm run integration-test-ui // this gives you the nice Cypress UI
```

Test cases covered with Cypress

- should return 6 suggestions when search is success
- should return not found when search returns 0 suggestions
- should not show suggestions when search term is less than 2 characters
- should hide suggestions box when search term has been cleared