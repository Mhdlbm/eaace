/**
 * Global Environment Configuration Handler
 * Loads and sanitizes runtime variables for the core evaluation metrics.
 */

function loadPipelineEnvironment() {
    const defaultProfile = process.env.EAACE_POLICY_PROFILE || 'GLOBAL_STANDARD';
    const strictMode = process.env.EAACE_STRICT_MODE === 'true';

    return {
        activeProfile: defaultProfile,
        enforceStrictMode: strictMode,
        initializedAt: new Date().toISOString(),
        runnerContext: process.env.GITHUB_ACTIONS ? 'CI_PIPELINE' : 'LOCAL_CLI'
    };
}

module.exports = { loadPipelineEnvironment };
