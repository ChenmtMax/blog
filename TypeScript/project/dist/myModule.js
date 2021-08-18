Object.defineProperty(exports, "__esModule", { value: true });
exports.sumM = exports.nameM = void 0;
exports.nameM = "kevin";
function sumM(a, b) {
    return a + b;
}
exports.sumM = sumM;
function default_1() {
    console.log("hello my module!");
}
exports.default = default_1;
exports = {
    name: "kevin",
    sum(a, b) {
        return a + b;
    }
};
