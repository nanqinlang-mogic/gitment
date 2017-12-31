# gitment-nanqinlang
[![Build Status](https://github.com/nanqinlang/SVG/blob/master/build%20passing.svg)](https://github.com/nanqinlang-mogic/gitment)
[![language](https://github.com/nanqinlang/SVG/blob/master/language-JavaScript-blue.svg)](https://github.com/nanqinlang-mogic/gitment)
[![author](https://github.com/nanqinlang/SVG/blob/master/author-nanqinlang-lightgrey.svg)](https://github.com/nanqinlang-mogic/gitment)
[![license](https://github.com/nanqinlang/SVG/blob/master/license-GPLv3-orange.svg)](https://github.com/nanqinlang-mogic/gitment)

this is a custom version for nanqinlang

## usage
**clone files**
```bash
git clone https://github.com/nanqinlang-mogic/gitment.git
```

then it contains two part :

### comment
`insert it to your page`

### oauth
provide `CORS`(Cross Origin Resource Sharing) to github `oauth` api

**preparatory for node**
```bash
cd oauth
apt-get install -y build-essential curl
curl -sL https://deb.nodesource.com/setup_4.x | bash - 
apt-get install -y nodejs
```

**deploy nodejs service**
```js
npm install
npm start
```
then you'll find like this:  
`oauth-service listening on port 9000`

**put it on nginx**
```nginx
server{
		...
		location /oauth/ {
		proxy_pass http://localhost:9000;
		}
}
```