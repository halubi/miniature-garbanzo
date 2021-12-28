echo "************************************"
echo "**********  RUN DOCKER  ************"
echo "************************************"

sudo docker run -p 80:3001 -e URL ms/get

echo "DONE"