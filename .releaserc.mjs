/** @type {import('semantic-release').GlobalConfig} */
const config = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "dev",
    "next",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
  parserOpts: {
    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
  },
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        writerOpts: {
          commitsSort: ["subject", "scope"],
        },
        presetConfig: {
          types: [
            { hidden: false, type: "build", section: "Build System" },
            { hidden: false, type: "chore", section: "Maintenance" },
            { hidden: false, type: "ci", section: "Continuous Integration" },
            { hidden: false, type: "docs", section: "Documentation" },
            { hidden: false, type: "feat", section: "Features" },
            { hidden: false, type: "feature", section: "Features" },
            { hidden: false, type: "fix", section: "Bug Fixes" },
            { hidden: false, type: "perf", section: "Performance Improvements" },
            { hidden: false, type: "refactor", section: "Code Refactoring" },
            { hidden: false, type: "revert", section: "Reverts" },
            { hidden: false, type: "test", section: "Tests" },
            { hidden: true, type: "style", section: "Styles" },
          ],
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "prettier ./CHANGELOG.md --write",
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    "@semantic-release/github",
    "@semantic-release/git",
  ],
  preset: "conventionalcommits",
};

export default config;
