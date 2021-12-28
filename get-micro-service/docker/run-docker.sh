echo "************************************"
echo "**********  RUN DOCKER  ************"
echo "************************************"

sudo docker run -p 80:3001 --env=http://ec2-18-194-79-132.eu-central-1.compute.amazonaws.com/rest/api/resource URL ms/get

echo "DONE"