# Automatic Tests - Cypress UI Automation

A UI test automation project built with **Cypress** and **JavaScript** for the [Automation Practice](http://www.automationpractice.pl/index.php) website.

The repository demonstrates basic end-to-end testing techniques, reusable Page Objects, JSON fixtures, assertions, form interaction, product search, filtering, sorting, and custom Cypress commands.

## Technologies

- JavaScript
- Cypress 15.4.0
- Node.js / npm
- Page Object Model
- JSON fixtures
- Custom Cypress commands

## Test Coverage

The project contains automated UI tests covering:

- opening web pages with Cypress,
- navigating between sections of the application,
- opening the **Contact us** page,
- typing data into form fields,
- searching for products,
- clearing and reusing the search field,
- validating search input values and "No results" messages,
- opening the **Women** category,
- selecting and verifying checkboxes,
- selecting multiple size filters,
- sorting products by:
  - availability,
  - product name A-Z,
  - price descending,
- login using a reusable custom Cypress command and fixture data.

The repository also contains a simple introductory test that opens Google as a basic Cypress example.

## Project Structure

```text
automatic-tests/
├── cypress/
│   ├── e2e/
│   │   ├── checkbox.cy.js
│   │   ├── customCommands.cy.js
│   │   ├── dropdown.cy.js
│   │   ├── first.cy.js
│   │   ├── klikniecie.cy.js
│   │   ├── wpisywanie.cy.js
│   │   └── wyszukiwarka.cy.js
│   │
│   ├── fixtures/
│   │   ├── example.json
│   │   ├── login.json
│   │   └── searchData.json
│   │
│   └── pages/
│       ├── base.js
│       ├── Home.js
│       ├── SearchBox.js
│       └── Women.js
│
├── .gitignore
├── cypress.config.js
├── package-lock.json
└── package.json
```

## Page Object Model

Part of the test suite uses the **Page Object Model** to keep selectors and reusable page actions separate from the test scenarios.

### `base.js`

Contains common navigation logic, including opening the application home page.

### `Home.js`

Contains elements and actions related to the home page, including interaction with the **Women** tab.

### `SearchBox.js`

Contains selectors and reusable methods for:

- locating the search field,
- typing a search phrase,
- clearing the search field,
- clicking the search button,
- retrieving the no-results alert.

### `Women.js`

Contains selectors and actions for category and size checkboxes.

## Fixtures

JSON fixtures are used to keep selected test data separate from the test logic.

The project includes fixture files for:

- login data,
- search-related data,
- example test data.

## Custom Commands

The test suite uses a custom Cypress command for login:

```javascript
cy.login(login, password);
```

The login data is loaded from a JSON fixture before being passed to the command.

## Cypress Configuration

The project is configured with:

- base URL: `http://www.automationpractice.pl/index.php`
- viewport: `1920 x 1080`
- one retry in open mode,
- one retry in run mode,
- file watching enabled,
- animation waiting enabled,
- Chrome web security disabled,
- test isolation disabled.

## Prerequisites

Before running the project, install:

- [Node.js](https://nodejs.org/)
- npm

## Installation

Clone the repository:

```bash
git clone https://github.com/Zofia-Klima/automatic-tests.git
```

Enter the project directory:

```bash
cd automatic-tests
```

Install the dependencies:

```bash
npm ci
```

## Running the Tests

Open Cypress in interactive mode:

```bash
npx cypress open
```

Run the complete test suite in headless mode:

```bash
npx cypress run
```

Run only the checkbox test using the npm script defined in `package.json`:

```bash
npm run checkbox
```

You can also run an individual specification directly, for example:

```bash
npx cypress run --spec cypress/e2e/wyszukiwarka.cy.js
```

## Example

A Page Object based test can use reusable page methods instead of repeating selectors directly in the scenario:

```javascript
Base.openHomePage();
Home.clickOnWomenTab();

Women.topsCheckbox.check();
Women.topsCheckbox.should("be.checked");
```

## Purpose

This project demonstrates practical Cypress fundamentals, including:

- end-to-end UI automation,
- Cypress assertions,
- reusable Page Objects,
- fixture-based test data,
- custom commands,
- form and navigation testing,
- search and filtering validation.

## Author

**Zofia Klima**
