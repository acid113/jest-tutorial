"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = require("../shared/filter");
describe("Filter function", function () {
    test("it should filter by a search term (link)", function () {
        var input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" },
        ];
        var output = [{ id: 3, url: "https://www.link3.dev" }];
        expect(filter_1.filterByTerm(input, "link")).toEqual(output);
        // expect(1).toEqual(1);
    });
});
//# sourceMappingURL=filterByTerm.spec.js.map