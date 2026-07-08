# 🛡️ Security Policy

We take the safety, integrity, and operational security of our utilities seriously. Because this engine acts as a validation layer for enterprise configurations, ensuring its core code remains structurally sound and resilient against tampering or vulnerability ingestion is our highest priority.

## 🎯 Supported Versions

We actively maintain and provide security patches for the following release cycles:

| Version | Supported          |
| ------- | ------------------ |
| v2.x    | ✅ Yes (Current)   |
| v1.x    | ⚠️ Security Only  |
| < v1.0  | ❌ No              |

## 🚨 Reporting a Vulnerability

**Please do not open public GitHub issues for suspected security vulnerabilities.** Public exposure before a patch is available can put down-stream dependent corporate infrastructures at risk.

If you discover a security flaw, please report it through one of the following secure channels:

1.  **GitHub Private Vulnerability Reporting:** Submit your finding privately via the "Security" tab located at the top of this repository.
2.  **Encrypted Direct Contact:** Email the core maintainer team at your verified security contact address. Please include comprehensive steps to reproduce the issue, an explanation of the potential impact, and any proof-of-concept scripts.

### Our Response Timeline
* **Acknowledgement:** You will receive confirmation of your report within **24 hours**.
* **Triage & Validation:** Our internal team will analyze and confirm the vulnerability parameters within **48 hours**.
* **Resolution Cycle:** If verified, we aim to deliver an upstream patch and coordinate a public security advisory release within **7–14 business days**.

## 🛡️ Supply Chain & Integrity Practices
To maintain an optimal OpenSSF criticality profile and protect our dependencies:
* All production code merges require explicit dual-maintainer review signatures.
* Automated dependency auditing scans every incoming PR for package ecosystem risks.
* Core branch configurations enforce strict multi-factor authentication (MFA) parameters across all authorized project maintainer accounts.
