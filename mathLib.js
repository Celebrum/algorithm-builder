/**
 * Custom Mathematics Library
 * @module mathLib
 */

const mathLib = {
    version: '1.0.0',
    
    add: (a, b) => a + b,
    
    subtract: (a, b) => a - b,
    
    multiply: (a, b) => a * b,
    
    divide: (a, b) => {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
    },
    
    evaluateExpression: (expr) => {
        try {
            return Function(`"use strict"; return (${expr})`)();
        } catch (e) {
            throw new Error('Invalid expression');
        }
    }
};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mathLib;
}
// Export for browser
if (typeof window !== 'undefined') {
    window.mathLib = mathLib;
}
