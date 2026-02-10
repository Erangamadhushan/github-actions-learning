# Task 8: Upload and Download Artifacts
## Objective: Pass data between jobs using artifacts
![Task 8 - 1](./advanced/Screenshot%202026-02-10%20133853.png)

![Task 8 - 2](./advanced/Screenshot%202026-02-10%20133925.png)


# Task 9: Conditional Execution
## Objective: Run steps conditionally based on events/conditions

```yml
name: Conditional Workflow

on:
    push:
        branches: [main]
    pull_request:
        branches: [main]
    workflow_dispatch:

jobs:
    build:
        runs-on: ubuntu-latest

        steps:
            - name: Checkout code
              uses: actions/checkout@v4

            - name: Always run this step
              run: echo "This step always runs."

            - name: Deploy (main only)
              if: github.ref == 'refs/heads/main'
              run: echo "This step runs only on the main branch."


```
### In GitHub Actions

![Task 9 - 1](./advanced/Screenshot%202026-02-10%20135334.png)

![Task 9 - 2](./advanced/Screenshot%202026-02-10%20135713.png)

# Task 10: Create a PR and Use Issue Templates
Objective: Practice contribution workflow with templates

1. Fork repository from: https://github.com/nisalgunawardhana/github-actions-learning

2. Clone Repository

```bash
git clone https://github.com/Erangamadhushan/github-actions-learning
```
3. Create a new branch: `feature/add-items`

```bash
    git checkout -b feature/add-items
```

4. Do small changes for ./sample-app

### Add new api end point called /api/items
```js
app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item One', price: 9.99 },
    { id: 2, name: 'Item Two', price: 19.99 },
    { id: 3, name: 'Item Three', price: 29.99 }
  ];
  res.json({
    message: 'Here are your items',
    items,
    count: items.length
  });
});
```
## Output
`http://localhost:3000/api/items`

![Sample-app new api end point](./advanced/Screenshot%202026-02-10%20144432.png)

# step 5,6, and 7 done with this pr and issue

