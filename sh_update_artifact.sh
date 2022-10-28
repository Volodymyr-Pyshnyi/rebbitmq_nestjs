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

docker cp backend_master:/var/www/app/package.json ./.docker/be-master && summaPercent || echo $FATAL;
docker cp backend_master:/var/www/app/package-lock.json ./.docker/be-master && summaPercent  || echo $FATAL;
docker cp backend_master:/var/www/app/node_modules ./services/be-master/ && summaPercent || echo $FATAL;


docker cp micro_service_sum:/var/www/app/package.json ./.docker/ms-sum && summaPercent || echo $FATAL;
docker cp micro_service_sum:/var/www/app/package-lock.json ./.docker/ms-sum && summaPercent  || echo $FATAL;
docker cp micro_service_sum:/var/www/app/node_modules ./services/ms-sum/ && summaPercent || echo $FATAL;

echo $GRAPH_LINE_GREEN;
echo '🟧-Finish-🟧';
echo $GRAPH_LINE_GREEN

