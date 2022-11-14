#!/bin/sh

FATAL='🟥🟥🟥🟥🟥🟥🟥🟥';

GRAPH_LINE='🟧🟧🟧'
GRAPH_LINE_GREEN='🟩🟩🟩'
COUNT=1;

echo '\n\n\n\n';

summaPercent(){
  n=$((100-(100 / COUNT++)))
  echo $n"%";
}


echo $GRAPH_LINE;
echo '🟩-Start-🟩';
echo $GRAPH_LINE;

docker cp backend_master:/var/www/app/package.json ./services/be-master && summaPercent || echo $FATAL;
docker cp backend_master:/var/www/app/package-lock.json ./services/be-master && summaPercent  || echo $FATAL;
docker cp backend_master:/var/www/app/node_modules ./services/be-master && summaPercent || echo $FATAL;

docker cp backend_master:/var/www/app/.eslintrc.js ./services/be-master && summaPercent || echo $FATAL;
docker cp backend_master:/var/www/app/tsconfig.build.json ./services/be-master && summaPercent || echo $FATAL;
docker cp backend_master:/var/www/app/tsconfig.json ./services/be-master && summaPercent || echo $FATAL;


docker cp micro_service_sum:/var/www/app/package.json ./services/ms-sum && summaPercent || echo $FATAL;
docker cp micro_service_sum:/var/www/app/package-lock.json ./services/ms-sum && summaPercent  || echo $FATAL;
docker cp micro_service_sum:/var/www/app/node_modules ./services/ms-sum && summaPercent || echo $FATAL;

docker cp micro_service_sum:/var/www/app/.eslintrc.js ./services/ms-sum && summaPercent || echo $FATAL;
docker cp micro_service_sum:/var/www/app/tsconfig.build.json ./services/ms-sum && summaPercent || echo $FATAL;
docker cp micro_service_sum:/var/www/app/tsconfig.json ./services/ms-sum && summaPercent || echo $FATAL;


echo $GRAPH_LINE_GREEN;
echo '🟧-Finish-🟧';
echo $GRAPH_LINE_GREEN

