
Recall user info

```bash
cf dev status
```

# pass: gitlabadmin
    -H "X-HTTP-Method-Override: PUT" \


# test PCF
curl -i -X POST \
 -H "Accept: application/json" \
 -H "Content-Type: application/json" \
 --data "@test/fixtures/merge-request-hook.json" \
 http://mr-deployer-chatty-raven.local.pcfdev.io/gitlab/hooks
 
# test Node 

curl -X POST  \
 -H "Accept: application/json" \
 -H "Content-Type: application/json" \
 --data "@test/fixtures/merge-request-hook.json" \
 http://localhost.autozone.com:3000/gitlab/hooks
 


curl -X POST   \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{"id": 999}' \
  http://localhost.autozone.com:3000/gitlab/hooks



http://mr-deployer.apps.sandbox.mem.cloud.autozone.com
# Create a spring config service

```bash
cf create-service p-config-server standard mr-deployer-config


cf service mr-deployer-config
https://spring-cloud-broker.apps.sandbox.mem.cloud.autozone.com/dashboard/p-config-server/7e098430-0aab-486c-88af-dbd96e381c41

```


