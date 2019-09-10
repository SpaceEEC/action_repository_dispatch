# repository_dispatch

This action sends a [`repository dispatch`](https://developer.github.com/v3/repos/#create-a-repository-dispatch-event) to the `target repository` of the specified `event_type` with the specified [`personal access token`](https://github.com/settings/tokens).

## Usage

Example:

```yml
- uses: spaceeec/action_repository_dispatch@master
  with:
    target_repository: spaceeec/example
    event_type: example
    pat: ${{ secrets.GITHUB_PAT }}
```