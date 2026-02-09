# Task 04
I created a custom GitHub Actions workflow that runs on pushes to the develop branch. The workflow sets up Node.js 18, installs dependencies, and runs tests inside the sample-app directory to verify the application

![Task 4](./screenshots/Screenshot%202026-02-10%20015201.png)

# Task 05
I added job-level environment variables to the build and test workflow and verified their values by printing them in the workflow logs. This helped me understand how environment variables are defined and accessed across steps in GitHub Actions

![Task 5](./screenshots/Screenshot%202026-02-10%20025500.png)

![Task 5 Node 16.x](./screenshots/Screenshot%202026-02-10%20025619.png)

![Task 5 Node 18.x](./screenshots/Screenshot%202026-02-10%20025655.png)

# Task 06
I created a test GitHub secret and accessed it inside a workflow using the secrets context. I verified that the secret value was masked in the workflow logs, which helped me understand how GitHub securely manages sensitive information

![Task 6](./screenshots/Screenshot%202026-02-10%20024749.png)

# Task 07
I used GitHub Actions matrix strategy to run the same build and test workflow in parallel across multiple Node.js versions (16.x, 18.x, and 20.x). This helped verify application compatibility across different runtime environments

![Task 7](./screenshots/Screenshot%202026-02-10%20022852.png)

![Task 7 - part 2](./screenshots/Screenshot%202026-02-10%20031053.png)