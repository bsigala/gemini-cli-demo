# 🚀 Gemini CLI Demo: Elite Top-Tier AI-Powered Workflows

Welcome to the **Gemini CLI Demo** repository. This is an elite-level, top-tier, hyper-optimized implementation of automated AI agents seamlessly integrated into GitHub Workflows. Powered by the Google `run-gemini-cli` action and Gemini models, it transforms your repository into an autonomous development environment with unharnessed force.

---

## 🌌 Architecture Overview

The repository utilizes a centralized dispatcher pattern that intercepts repository events (issue creation, comment mentions, pull request events) and routes them with extreme precision to highly specialized Gemini agent workflows.

```
                  ┌──────────────────────┐
                  │   GitHub Repository  │
                  └──────────┬───────────┘
                             │ (Trigger Events)
                             ▼
               ┌──────────────────────────┐
               │  🔀 Gemini Dispatch      │
               └─────────────┬────────────┘
                             │
       ┌─────────────────────┼─────────────────────┐
       ▼                     ▼                     ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│  🔎 Review   │      │  🔀 Triage   │      │  ▶️ Invoke   │
└──────────────┘      └──────────────┘      └──────────────┘
       │                                           │
       │                                           ▼
       │                                    ┌──────────────┐
       └───────────────────────────────────►│  🧙 Execute  │
                                            └──────────────┘
```

### 🛰️ The Elite Workflow Suite

1. **`🔀 Gemini Dispatch` (`gemini-dispatch.yml`)**
   - **Role**: The central neural router of the repository.
   - **Mechanism**: Inspects events (PR opening, issues opening, or custom comments starting with `@gemini-cli`). Uses an advanced GitHub Script action to parse input arguments and instantly delegate tasks to target sub-workflows.

2. **`🔎 Gemini Review` (`gemini-review.yml`)**
   - **Role**: Fully automated, high-precision pull request reviews.
   - **Mechanism**: Uses the `/pr-code-review` extension to analyze diffs, pinpoint performance bottlenecks, detect security vulnerabilities, and comment inline directly on code changes.

3. **`🔀 Gemini Triage` (`gemini-triage.yml`)**
   - **Role**: Zero-touch issue triaging and labeling.
   - **Mechanism**: Reads existing labels in the repository and feeds them along with issue context to Gemini. Uses Gemini's logical reasoning to automatically apply matching labels with zero human intervention.

4. **`▶️ Gemini Invoke` (`gemini-invoke.yml`)**
   - **Role**: On-demand developer assistant.
   - **Mechanism**: Listens for any comment mentioning `@gemini-cli` followed by a request (e.g. `@gemini-cli explain this code`). Spawns a custom prompt runner with access to a GitHub MCP Server to fetch codebase details and execute instructions directly.

5. **`🧙 Gemini Plan Execution` (`gemini-plan-execute.yml`)**
   - **Role**: Full-scale autonomous feature planning and execution.
   - **Mechanism**: Triggers on approval comments (`@gemini-cli /approve`). Employs a robust set of workspace write-permissions and Git tools to create branches, modify files, and auto-generate pull requests based on high-level goals.

---

## ⚡ Setup & Deployment Guide

To launch this top-tier configuration with maximum force, follow these setup steps:

### 1. Configure Secrets & Variables
Go to **Settings > Secrets and variables > Actions** in your GitHub repository and add:

- **Secrets**:
  - `GEMINI_API_KEY`: Your Gemini API key from Google AI Studio.
  - `APP_PRIVATE_KEY` (Optional): Private key for custom GitHub App authentication.

- **Variables**:
  - `GEMINI_MODEL` (Optional): The Gemini model to target (e.g., `gemini-2.5-pro` or `gemini-2.5-flash`).
  - `GEMINI_CLI_VERSION` (Optional): Pin a specific CLI release version (defaults to `latest`).
  - `APP_ID` (Optional): Your custom GitHub App ID for authenticated API calls.

### 2. Configure Local Workspace
Add these lines to your `.gitignore` to prevent committing session telemetry or security files:
```gitignore
# gemini-cli settings and local logs
.gemini/
gha-creds-*.json
```

---

## 🏎️ Optimized Codebase & Test Suite

The repository contains an optimized codebase with a fast, zero-dependency native testing harness.

### Entrypoint (`index.js`)
Exposes our mathematical engine using highly efficient, modern ES modules (`ESM`):
```javascript
export function calculate(x) {
  return x * 2;
}
```

### Test Suite (`index.test.js`)
Uses the ultra-fast, native Node.js test runner introduced in modern Node versions. No bulky packages, zero overhead, near-instantaneous execution:
```javascript
import { test } from 'node:test';
import assert from 'node:assert';
import { calculate } from './index.js';

test('calculate multiplies positive numbers by 2', () => {
  assert.strictEqual(calculate(2), 4);
});

test('calculate multiplies negative numbers by 2', () => {
  assert.strictEqual(calculate(-3), -6);
});

test('calculate handles zero correctly', () => {
  assert.strictEqual(calculate(0), 0);
});
```

To run the optimized test suite:
```bash
npm test
```

---

## 💎 Elite-Level Best Practices
- **Strict Least-Privilege Permissions**: Workflows specify highly granular token permissions (e.g., `contents: read`, `issues: write`, `id-token: write`) to ensure optimal security posture.
- **WIF Authentication Supported**: Seamlessly swap API keys for Google Cloud Workload Identity Federation (WIF) for secure enterprise grade deployments.
- **Concurrent Execution Control**: Employs GitHub `concurrency` groups on workflow runs to prevent race conditions and optimize action runtime.
