# 🤝 Contributing to the Compliance Engine

First off, thank you for taking the time to contribute! It is contributions like yours that keep the open-source ecosystem vibrant, robust, and dependable.

To ensure a smooth collaboration process, please review and adhere to the following contribution guidelines before opening an issue or submitting a Pull Request (PR).

## 🗺️ Architectural Governance

Before writing any code, it is vital to understand the foundational layout of our project to maintain consistency:

* `/src/core`: Houses the underlying AST engine and primary tokenization logic. Code in this directory must remain completely free of external third-party dependencies to maximize execution speed and eliminate dependency risk.
* `/src/parsers`: Contains individual schema conversion scripts. If you are adding support for a new data format, your parser module must implement the core `IParser` interface.
* `/src/rules`: Modular rulesets. Contributions mapping new corporate or structural standards should create isolated, declarative definition files here.
* `/tests`: Houses all structural mock environments, integration suites, and unit test validations.

## 📥 Our Pull Request Workflow

We maintain a strict code-quality pipeline to ensure that main branches remain production-ready at all times:

1.  **Fork the Repository:** Create a personal fork of the project workspace and create a feature branch off of `main` (e.g., `feature/add-yaml-parser`).
2.  **Adhere to Coding Standards:** Ensure your changes adhere to project linting rules, architectural style patterns, and do not introduce breaking API changes.
3.  **Write Tests:** Every new logic pathway, bug fix, or parser addition must be accompanied by comprehensive unit testing with minimum 85% block coverage.
4.  **Keep Commits Clean:** Use atomic, descriptive git commit messages following the Conventional Commits specification (e.g., `feat(core): implement nested AST tokenization`).
5.  **Submit for Review:** Open your PR against our `main` branch. A project maintainer or automated runner will review the submission within 3 business days.

## 💬 Community & Code of Conduct

We are dedicated to providing a welcoming, inclusive, and harassment-free environment for everyone. By participating in this project, you agree to treat all contributors with respect, dignity, and professional courtesy.
