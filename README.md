# cors-casdoor

## Run UI
cd ./app/
touch .env.local
add CASDOOR_CLIENT_ID=YOUR_CLIENT_ID to .env.local
npm i
npm run dev

## Run Casdoor
cd ./casdoor
docker compose up -d 