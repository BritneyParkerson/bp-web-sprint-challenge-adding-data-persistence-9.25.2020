# Adding Data Persistence Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Data Persistence**. During this sprint, you studied **RDBMS, including SQL, multi-table queries, and data modeling**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a database based on given specifications**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this project you will be given a set of requirements and must design a database to satisfy them. As a part of this process you'll also build an API with endpoints to access the data.

### Entities

A `project` is what needs to be done. We want to store the following data about a `project`:

-   [ ] a unique ID.
-   [ ] a name. This column is required.
-   [ ] a description.
-   [ ] a boolean that indicates if the project has been completed. This column is required, the default value should be `false`.

A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

-   [ ] a unique ID.
-   [ ] a name. This column is required.
-   [ ] a description.

The database should not allow resources with duplicate names.

A `task` is one of the steps needed to complete the project. We want to store the following data about an `task`.

-   [ ] a unique ID.
-   [ ] a description of what needs to be done. This column is required.
-   [ ] a notes column to add additional information.
-   [ ] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain the difference between `Relational Databases` and `SQL`.
      - SQL, which stands for structured query language, is a programming language that is used to when you want to view or make changes to a database. Rational Databases store data points that are related to each other and the RD gives access to the data within the databases.

2. Why do tables need a `primary key`?
      - A primary key is a way to uniquely identify the rows of data within the table. It helps to identify which information is being requested so that there is less confusion when trying to query the data.

3. What is the name given to a table column that references the primary key on another table.
      - Foreign Key

4. What do we need in order to have a _many to many_ relationship between two tables.
      - Many to many relationships exist between tables that can be connected or bridged together. An example would be a table for bands and a table for venues. Many bands can play at one venue and one venue can host many bands. To join the 2 tables together we would use a JOIN statement and foreign keys in order to reference the primary key on each related table.

      In short: We would need 2 related tables where many of one can be used by many of the other, such as bands and venues mentioned above.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

-   [X] Create a forked copy of this project
-   [X] Add your team lead as collaborator on Github
-   [X] Clone your OWN version of the repository (Not Lambda's by mistake!)
-   [X] Create a new branch: git checkout -b `<firstName-lastName>`.
-   [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
-   [X] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

-   [X] Design the data model and use _knex migrations_ to create the database and tables needed to satisfy the following business rules:
    -   [X] a `project` can have multiple `tasks`.
    -   [X] a `task` belongs to only one `project`.
    -   [X] a `project` can use multiple `resources`. Example of `resources` are: computer, conference room, microphone, delivery van.
    -   [X] the same `resource` can be used in multiple `projects`.
    -   [X] when adding `projects` the client must provide a name, the description is optional.
    -   [X] when adding `resources` the client must provide a name, the description is optional.
    -   [X] when adding a `task` the client must provide a description, the notes are optional.
    -   [X] when adding a `task` the client must provide the `id` of an existing project.
    -   [X] for `projects` and `tasks` if no value is provided for the `completed` property, the API should provide a default value of `false`.
-   [X] Build an API with endpoints for:
    -   [X] adding resources.
    -   [X] retrieving a list of resources.
    -   [X] adding projects.
    -   [X] retrieving a list of projects.
    -   [X] adding tasks.
    -   [X] retrieving a list of tasks. **The list of tasks should include the project name and project description**.

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

-   [ ] Add an endpoint to get a list of project resources.
-   [ ] Add an endpoint to get a list of project tasks.
-   [ ] Add an endpoint to see all projects using a particular resource.
-   [ ] Add support for assigning `resources` directly to `tasks` in addition to adding them to `projects`

## Submission format

Follow these steps for completing your project.

-   [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
-   [ ] Add your team lead as a reviewer on the pull-request
-   [ ] Your team lead will count the project as complete after receiving your pull-request
