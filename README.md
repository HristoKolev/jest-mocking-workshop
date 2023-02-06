# Intro

* Explain what jest does to allow module mocking.

# Manual Mocks

Manual mocks are defined by writing a module in a `__mocks__/` subdirectory immediately adjacent to the **real** module. You have to manually call `jest.mock('<MODULE NAME>');` to enable the mock.

## Manual mocks of external libraries

* If the module you are mocking is a Node module (e.g.: `date-fns`), the mock should be placed in the `__mocks__` directory adjacent to `node_modules` and will be automatically mocked. There's no need to explicitly call `jest.mock('module_name')`.
