/**
 * Automated Verification Unit Tests
 * Validates compliance parsing states and violation matrices.
 */

const { ComplianceParser } = require('../src/core/parser');
const { RuleEvaluator } = require('../src/rules/evaluator');

function verifyParserModule() {
    console.log("🧪 Running Test Suite: Core Parser Module...");
    const parser = new ComplianceParser('json');
    
    // Test Case A: Valid Payload Validation
    const validResult = parser.parseToken('{"region": "eu-west-1"}');
    if (validResult.status === 'TOKENIZED' && validResult.rootNodes.includes('region')) {
        console.log("  ✅ Test Case A Passed: Valid structures parsed seamlessly.");
    } else {
        console.error("  ❌ Test Case A Failed.");
    }

    // Test Case B: Corrupted Syntax Graceful Recovery
    const invalidResult = parser.parseToken('{invalid-json-payload}');
    if (invalidResult.status === 'FAILED') {
        console.log("  ✅ Test Case B Passed: Syntactical errors safely handled.");
    } else {
        console.error("  ❌ Test Case B Failed.");
    }
}

function verifyEvaluatorModule() {
    console.log("\n🧪 Running Test Suite: Rule Evaluator Matrix...");
    const evaluator = new RuleEvaluator('TEST_SUITE');

    // Test Case C: Structural Violation Catching
    const unsafeToken = { payload: { access: 'PUBLIC_ALLOW_ALL' } };
    const report = evaluator.validateMetadata(unsafeToken);
    
    if (!report.isValid && report.violations.length > 0) {
        console.log("  ✅ Test Case C Passed: Unsafe configuration vectors properly flagged.");
    } else {
        console.error("  ❌ Test Case C Failed.");
    }
}

// Execute test suite suite routines
verifyParserModule();
verifyEvaluatorModule();
