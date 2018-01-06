wget https://raw.githubusercontent.com/nanqinlang-mogic/gitment/master/oauth.tar.gz
tar -zxf oauth.tar.gz

apt-get update
apt-get install -y build-essential curl
curl -sL https://deb.nodesource.com/setup_4.x | bash - 
apt-get install -y nodejs

npm install
npm start