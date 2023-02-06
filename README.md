# Intro

* Explain what jest does to allow module mocking.

* Explain `jest.mock` call hoisting.

# Manual Mocks

Manual mocks are defined by writing a module in a `__mocks__/` subdirectory immediately adjacent to the **real** module. You have to manually call `jest.mock('<MODULE NAME>');` to enable the mock.

## Manual mocks of external libraries

* If the module you are mocking is a Node module (e.g.: `date-fns`), the mock should be placed in the `__mocks__` directory adjacent to `node_modules` and will be automatically mocked. There's no need to explicitly call `jest.mock('module_name')`.

# Inline mocks

You can define mocks inline with the factory overload of the `jest.mock` function.

# Generated default mocks
You can mock modules that don't have manual mocks. The result will be a module that will have the same interface with all it's members mocked out. Members are mocked using these rules:

* `Primitives`: Creates a new property with the same primitive value as the original property.
* `Array`: Creates a new empty array, ignoring the original.
* `Object`: Creates a new deeply cloned object. The object keys are maintained and their values are mocked.
* `Function`: Creates a new mock function.
* `Class`: Creates a new class. The interface of the original class is maintained, all of the class member functions and properties will be mocked.

When you call `jest.mock('<MODULE NAME>')` and there is no manual mock for that module you will get a generated mock.

You can call `jest.createMockFromModule(<MODULE NAME>)` to generate one at runtime.

# What you can't do with this type of mocking

* Have different mock for each test. Solution: have different test files.

# Mocking modules for different tests

* You can use `jest.doMock` to change the mock implementation in the middle of the tests.
* You need to use dynamic import syntax.

* You can use `jest.resetModules` to reset the module registry between tests.

* Don't mix both types of mocks in a single file.
