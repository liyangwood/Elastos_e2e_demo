# Elastos_e2e_demo

## Get Trinity app
* http://192.144.145.63:8000/apps/files/?dir=/Trinity&fileid=18
* username is **admin**
* password is **111111**
* download **app-debug.apk** to your android phone and install.

## Get E2E demo dapp
* http://192.144.145.63:8000/apps/files/?dir=/Trinity&fileid=18
* username is **admin**
* password is **111111**
* download **E2E.epk** to your phone.

## Run dapp in Trinity
* open Trinity app
* click the meme icon on the top left.
* click **Import from Local file** on the top.
* locate the download **E2E.epk** file and confirm.
* you will find the **E2E DEMO** app in the app list.
* click the close icon on the top right.
* click **E2E DEMO** app icon to start the DApp.

## How to build Demo epk file
* make sure install node enviroment first.
* git clone or download this repo to local.
* run the following commands.
```
cd Elastos_e2e_demo
npm install ionic cordova -g
npm install
npm run build:epk
```
* you will find the **E2E.epk** file under the current folder.

## Dependend service info
* ditto server : http://192.144.145.63:8000/login admin/111111
* IPFS : http://192.144.145.63:5001/ipfs/QmQLXHs7K98JNQdWrBB2cQLJahPhmupbDjRuH1b9ibmwVa

## Running dependend service in local.
* make sure install docker and docker-compose first.
* run **npm run dep:start**
* there will be a new folder named **data** under ./docker
* follow the [./docker/readme.md](./docker/readme.md) to config docker instance.
* run **npm run dep:stop && npm run dep:start** to restart instance.

## How to connect local service
* get local ip address. (e.g. 192.168.1.101)
* open **./src/config/index.ts**
* change file as beneath.
```
  ditto : {
    url : 'http://192.168.1.101:8000/remote.php/dav/files/admin',
    // url : 'http://192.144.145.63:8000/remote.php/dav/files/admin',
    username : 'admin',
    password : '111111'
  },
  ipfs : {
    // url : '/ip4/192.144.145.63/tcp/5001'
    url : '/ip4/192.168.1.101/tcp/5001'
  },
```
* rebuild epk file and reinstall in Trinity app.

## Contact me
welcome to submit issues here or send email to me directly.
* Email : liyangwood@gmail.com
* Wechat : 36890110

### Good luck.









