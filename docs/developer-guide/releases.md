# Performing releases

The primary goals are:

1.  Publishing the updated package to npm.
2.  Creating a GitHub release with notes.

The secondary goals are:

1.  Ensuring the stylelint org's `stylelint-config-*` shareable configs are compatible with the release.
2.  Updating the online demo at [https://stylelint.io/demo](https://stylelint.io/demo) to use the release.
3.  Updating the documentation at [https://stylelint.io](https://stylelint.io) to use the release.
4.  Sending out a tweet.

## Process

1.  Create a [new issue](https://github.com/stylelint/stylelint/issues/new) announcing the planned release, e.g. `Release 8.11.1` and include the [template checklist](#new-release-issue-template).
2.  Locally test `master` in the `stylelint-config-*` shareable configs repos. Install current `master` branch (`npm install stylelint/stylelint#master`) and run tests.
3.  Locally test `master` in the `stylelint.io` repo.
4.  Locally test `master` in the `stylelint-demo` repo.
5.  Both the publishing of the package to npm and the creating a github release are done with [`np`](https://github.com/sindresorhus/np):
    1.  Ensure the CHANGELOG is [consistently formatted](pull-requests.md).
    2.  Replace `## Head` with new version number e.g. `## 8.1.2`.
    3.  Commit and _push up_ these changes.
    4.  Go to [https://github.com/stylelint/stylelint](https://github.com/stylelint/stylelint) and confirm these changes are correct and pushed up.
    5.  Run `npm run release`. Select correct version that matches the one from changelog.
    6.  When GitHub release page opened, copy changelog for published version from [CHANGELOG.md](../../CHANGELOG.md) to GitHub release.
    7.  Go to [https://www.npmjs.com/package/stylelint](https://www.npmjs.com/package/stylelint) and confirm the package was published correctly.
    8.  Go to [https://github.com/stylelint/stylelint/releases](https://github.com/stylelint/stylelint/releases) and confirm the release was created correctly.
6.  If a new version of any `stylelint-config-*` is required, repeat step 5 for that repo.
7.  Update the online demo by changing to the `stylelint-demo` repo:
    1.  Run `npm install -S stylelint@latest`
    2.  Run `npm test`
    3.  Commit and _push up_ these changes.
    4.  Go to [https://stylelint.io/demo](https://stylelint.io/demo) and confirm the update was automatically deployed.
8.  Update the website documentation by changing to the `stylelint.io` repo:
    1.  Run `npm install -D stylelint@latest`
    2.  Run `npm test`
    3.  Commit and _push up_ these changes.
    4.  Go to [https://stylelint.io](https://stylelint.io) and confirm the update was deployed correctly. (It takes some time for Netlify to publish)
9.  Compose a tweet that announces the release, communicates what has changed and links to the appropriate heading in the CHANGELOG on [https://stylelint.io](https://stylelint.io).

## New Release Issue Template

```markdown
- [ ] stylelint release
- [ ] stylelint-config-recommended update/release
- [ ] stylelint-config-standard update/release
- [ ] stylelint-demo update
- [ ] stylelint.io update
- [ ] tweet

cc @stylelint/core
```
