# DevOps CI/CD Website

Simple static website deployed automatically to Amazon S3 and served via CloudFront using GitHub Actions.

## Pipeline

```
Code Push → GitHub Actions → Test → Build / Package → Deploy (S3 + CloudFront invalidation)
```

Workflow file: `.github/workflows/deploy.yml`

## Local commands

```bash
npm test        # run tests
npm run build   # build into dist/
```

## Required GitHub secrets

| Secret | Purpose |
|--------|---------|
| `AWS_ACCESS_KEY_ID` | IAM user key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret |
| `S3_BUCKET` | Target bucket name |
| `CLOUDFRONT_DISTRIBUTION_ID` | Distribution to invalidate |
