openssl aes-256-cbc -K $encrypted_de2c2440e243_key -iv $encrypted_de2c2440e243_iv -in .travis/deploy.enc -out /tmp/deploy_rsa -d
eval "$(ssh-agent -s)"
chmod 600 /tmp/deploy_rsa
ssh-add /tmp/deploy_rsa

git remote add deploy ssh://dormirchezvous@163.172.60.184:/home/insoumis/sites/dormirchezvous/dev/deploy.git
git push deploy master

