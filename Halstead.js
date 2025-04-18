let acorn = require('acorn');
let fs = require('fs');
let walk = require('acorn-walk')

let filePath = "C:\\Users\\SaiKM\\WebstormProjects\\CKMS\\index.js";
const code = fs.readFileSync(filePath).toString();


let ast = acorn.parse(code, {
    ecmaVersion: 'latest',
    sourceType: 'module'
});

const operators = new Map();
const operands = new Map();
let totalOperators = 0;
let totalOperands = 0;

function add(map, key) {
    map.set(key, (map.get(key) || 0) + 1);
}

walk.simple(ast, {
    BinaryExpression(node) {
        add(operators, node.operator);
        totalOperators++;
    },
    LogicalExpression(node) {
        add(operators, node.operator);
        totalOperators++;
    },
    AssignmentExpression(node) {
        add(operators, node.operator);
        totalOperators++;
    },
    UpdateExpression(node) {
        add(operators, node.operator);
        totalOperators++;
    },
    UnaryExpression(node) {
        add(operators, node.operator);
        totalOperators++;
    },
    ConditionalExpression() {
        add(operators, '?');
        add(operators, ':');
        totalOperators += 2;
    },
    CallExpression(node) {
        add(operators, 'function call');
        totalOperators++;
        add(operands, node.callee.name || 'anonymous');
        totalOperands++;
    },
    Identifier(node) {
        add(operands, node.name);
        totalOperands++;
    },
    Literal(node) {
        add(operands, String(node.value));
        totalOperands++;
    },
    MemberExpression(node) {
        if (!node.computed && node.property.type === 'Identifier') {
            add(operands, node.property.name);
            totalOperands++;
        }
    }
});

const n1 = operators.size;
const n2 = operands.size;
const N1 = totalOperators;
const N2 = totalOperands;
const vocabulary = n1 + n2;
const length = N1 + N2;
const volume = length * Math.log2(vocabulary || 1);
const difficulty = (n1 / 2) * (N2 / (n2 || 1));
const effort = difficulty * volume;
const bugsEx = volume / 3000;
const timeW = effort / 18;

console.log('Distinct Operators (n1):', n1);
console.log('Distinct Operands (n2):', n2);
console.log('Total Operators (N1):', N1);
console.log('Total Operands (N2):', N2);
console.log('Program Vocabulary (n1 + n2):', vocabulary);
console.log('Program Length (N1 + N2):', length);
console.log('Volume (V):', volume.toFixed(2));
console.log('Difficulty (D):', difficulty.toFixed(2));
console.log('Effort (E):', effort.toFixed(2));
console.log('Bugs Expected (B):', bugsEx.toFixed(2));
console.log('Time Used (T)', timeW.toFixed(2));




