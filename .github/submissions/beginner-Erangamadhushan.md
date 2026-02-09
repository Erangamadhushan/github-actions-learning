## Task 1: trigger workflows manually

![Task 1](./Task1.png)

## Task 2: Understand Workflow Triggers

![Task 2](./Task2.png)
- add failure trigger. It's not work because of that. workflow file is working correctly

## Task 3: Build and Test Locally

Objective: Run the sample app and tests locally

```bash
cd sample-app
npm install
npm test
npm start



```
-------

Output: `npm test`

![test](./test.png)

--------

Output: `http://localhost:3000`

![default](./default.png)

---------

Output: `http://localhost:3000/api/hello?name=Eranga`

![default](./query.png)

----------

Output: `http://localhost:3000/api/status`

![healthy](./health.png)

----------

Output: `http://localhost:3000/health`

![health](./ok.png)

