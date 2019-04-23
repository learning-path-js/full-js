# Node and React simple template (use Babel and webpack).

Use server side rendering.

Reference link: https://jscomplete.com/learn/1rd-reactful
Similar github repo: https://github.com/jscomplete/learn-fullstack-javascript

Build:

1. Install dependencies `npm install`
2. Run server `npm run start`
3. Bundle react application `npm run bundle`
4. Open `http://localhost:9090` in browser to check.


# Build and run in docker.
1. Build and tag docker image `./build-docker.sh`
2. Run docker-compose `./run-docker.sh`

## Additional checks

### Check Dockerfile
`hadolint Dockerfile` 

### Check open source NPM packages
`snyk monitor`
