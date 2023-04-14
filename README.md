# angular-ssl

Demo Angular project showing how to use ssl for localhost

### How I configure most of my projects (I prefer the workspace layout)

[Angular Workspace Instructions](https://thesoftwarearchitect.com/create-new-angular-workspace/)

### I found these instructions very beneficial when working though this process

https://digitaldrummerj.me/angular-local-ssl/

---

NOTE -> Requirement: you must have OpenSSL installed. I do this through https://chocolatey.org/

1. To generate the key and crt files, open a terminal in certs and run. Once they are generated, I commit these files to the repo

```
openssl req -new -x509 -newkey 1rsa:2048 -sha256 -nodes -keyout localhost.key -days 3560 -out localhost.crt -config certificate.config.txt
```

2. change the server to include the ssl flag

```
ng serve app-example-one --port 4321  -o --ssl true --ssl-key .\\certs\\localhost.key --ssl-cert .\\certs\\localhost.crt
```

3. You will receive the ssl connection error.
   ![image](https://user-images.githubusercontent.com/1365728/232142495-5502d586-96e7-4c91-ac5c-403f6ed63134.png)

4. You have to import the crt file into the Trusted Root Certification Authorities
   ![image](https://user-images.githubusercontent.com/1365728/232142528-80c601c6-11fb-4959-96f6-6ee2277c914d.png)

![image](https://user-images.githubusercontent.com/1365728/232142545-81b849a1-71dc-4f2d-a662-14a59c27cf6d.png)

![image](https://user-images.githubusercontent.com/1365728/232142568-9a145116-cb6c-4ec8-9dc0-d0c4e988936d.png)

![image](https://user-images.githubusercontent.com/1365728/232142584-870b9eba-0398-469f-a690-4ca262fa1d5d.png)

![image](https://user-images.githubusercontent.com/1365728/232142599-4d327610-8da3-413a-943b-6027a61410b0.png)
