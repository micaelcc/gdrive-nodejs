import Routes from "../../src/routes.js"

describe('Routes test suite', () => {
    describe('Set socket instance', () => {
        test('setSocket should store io instance', () => {
            const routes = new Routes();

            const ioObj = {
                to: (id) => ioObj,
                emit: (event, message) => {}
            }

            routes.setSocketInstance(ioObj);
            expect(routes.io).toStrictEqual(ioObj);
        });
    });
});
