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

docker cp Backend_master:/var/www/app/package.json ./.docker/be-master && summaPercent || echo $FATAL;
docker cp Backend_master:/var/www/app/package-lock.json ./.docker/be-master && summaPercent  || echo $FATAL;
docker cp Backend_master:/var/www/app/node_modules ./src/be-master/ && summaPercent || echo $FATAL;


docker cp Micro_service_sum:/var/www/app/package.json ./.docker/ms-sum && summaPercent || echo $FATAL;
docker cp Micro_service_sum:/var/www/app/package-lock.json ./.docker/ms-sum && summaPercent  || echo $FATAL;
docker cp Micro_service_sum:/var/www/app/node_modules ./src/ms-sum/ && summaPercent || echo $FATAL;

echo $GRAPH_LINE_GREEN;
echo '🟧-Finish-🟧';
echo $GRAPH_LINE_GREEN