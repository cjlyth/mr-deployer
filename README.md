



```bash 
cf login -a api.local.pcfdev.io --skip-ssl-validation
cf push mr-deployer -c "node ./bin/www"

cf create-app-manifest mr-deployer
```

Apps Manager URL: https://apps.local.pcfdev.io
Admin user => Email: admin / Password: admin
Regular user => Email: user / Password: pass
