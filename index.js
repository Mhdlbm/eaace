/**
 * EAACE - Main Execution Entrypoint
 * Simulates a continuous integration (CI) workflow gatekeeper.
 */

const { ComplianceParser } = require('./src/core/parser');
const { RuleEvaluator } = require('./src/rules/evaluator');

function runPipelineDiagnostic(mockConfigPayload) {
    console.log("========================================================");
    console.log("🚀 EAACE: Initializing Architecture Compliance Scan...");
    console.log("========================================================");

    const parser = new ComplianceParser('json');
    const evaluator = new RuleEvaluator('ENTERPRISE_SECURE_v2');

    // Step 1: Parse the incoming build token
    const tokenized = parser.parseToken(mockConfigPayload);
    console.log(`[STATUS] File Parsing: ${tokenized.status}`);

    if (tokenized.status === 'FAILED') {
        console.error(`[ERROR] Static analysis halted: ${tokenized.error}`);
        process.exit(1);
    }

    // Step 2: Evaluate parsed nodes against rule matrix
    const report = evaluator.validateMetadata(tokenized);
    
    console.log(`[STATUS] Rule Profile Applied: ${report.profileApplied}`);
    
    if (!report.isValid) {
        console.log("\n❌ COMPLIANCE CHECK FAILED:");
        report.violations.forEach(violation => {
            console.log(`  - ${violation}`);
        });
        console.log("\n[RESULT] Deployment blocked by governance constraints.");
        return false;
    }

    console.log("\n✅ COMPLIANCE CHECK PASSED: Architecture matches policy framework.");
    console.log("[RESULT] Clean build. Proceeding to infrastructure deployment.");
    return true;
}

// Simulated configuration inputs for testing pipeline execution
const badMockInput = '{"name": "production-cluster", "access": "PUBLIC_ALLOW_ALL"}';
const goodMockInput = '{"name": "secure-vault", "region": "us-east-1", "access": "PRIVATE_ISOLATED"}';

// Run diagnostic evaluation
runPipelineDiagnostic(goodMockInput);
