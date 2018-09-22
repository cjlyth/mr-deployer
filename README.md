
Recall user info

```bash
cf dev status
```

# pass: gitlabadmin
    -H "X-HTTP-Method-Override: PUT" \


# test PCF
curl -i -X POST \
 -H "Accept: application/json" \
 --data "@test/fixtures/merge-request-hook.json" \
 http://mr-deployer-chatty-raven.local.pcfdev.io/gitlab/hooks
 
# test Node 

curl -X POST  \
 -H "Accept: application/json" \
 --data "@test/fixtures/merge-request-hook.json" \
 http://localhost.autozone.com:3000/gitlab/hooks
 

curl -i \
    -H "Accept: application/json" \
    -X POST -d '
    
    '
    http://localhost:8080/xx/xxx/xxxx