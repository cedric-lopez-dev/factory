mkdir $HOME/factory-dashboard
cp -r "/usr/local/share/factory/factory-dashboard" "$HOME"
cd $HOME/factory-dashboard
docker compose --profile nossl up -d
