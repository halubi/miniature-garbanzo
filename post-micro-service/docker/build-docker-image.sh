echo "************************************************"
echo "**********  BUILD DOCKER CONTAINER  ************"
echo "************************************************"

rm -rf ./target

mkdir ./target
cp -rf ../*.json ./target
cp -rf ../src ./target

echo "******* building **********"
sudo docker build -t ms/post .
echo "DONE"