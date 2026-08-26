# Decision

Production publishing is explicitly manual.

# Development

Source code may be committed and pushed to GitHub at any time without affecting production.

# Publishing

Production is updated only when the developer intentionally runs:

```text
npm run live
```

The command:

1. builds the Astro production site
2. stops if the build fails
3. publishes the generated static output to GitHub Pages

# Command Meaning

```text
npm run dev
= local development

git push
= update source repository only

npm run live
= explicitly publish the current site to production
```

# Reasoning

- Orielsy wants deliberate control over when production changes.
- Every development commit should not automatically become public.
- Automatic CI is unnecessary at the current project scale.
- Local development already provides opportunities to preview changes.
- Deployment infrastructure should remain minimal until there is a real need for more automation.

# Future

This decision may later be revisited if the project grows enough to justify:

- CI
- pull-request validation
- preview deployments
- scheduled publishing
- automated production deployment
