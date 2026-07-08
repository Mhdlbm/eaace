/**
 * Semantic Rule Evaluation Matrix
 * Verifies regional data metadata assertions against governance profiles.
 */

class RuleEvaluator {
    constructor(policyProfile) {
        this.profile = policyProfile || 'STANDARD_GLOBAL';
    }

    validateMetadata(tokenizedData) {
        const results = {
            profileApplied: this.profile,
            isValid: true,
            violations: []
        };

        const payload = tokenizedData.payload;

        // Rule: Ensure explicit location or region criteria exists
        if (payload && !payload.region && !payload.location) {
            results.isValid = false;
            results.violations.push("MISSING_REGIONAL_METADATA: Infrastructure must define an explicit geographic region.");
        }

        // Rule: Identify overly open access profiles
        if (payload && payload.access === 'PUBLIC_ALLOW_ALL') {
            results.isValid = false;
            results.violations.push("CRITICAL_ACCESS_VIOLATION: Public wide-open access profiles are prohibited.");
        }

        return results;
    }
}

module.exports = { RuleEvaluator };
