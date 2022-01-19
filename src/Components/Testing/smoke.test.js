// Smoke Test

describe('Test a smoke test ', () => {
    test('A smoke test will run', () => {
        expect('Smoke test').toEqual('Smoke test');
    });
    test('A smoke test to test that the following converter tests will work', () => {
        expect(true).toBeTruthy();
    });
});
    