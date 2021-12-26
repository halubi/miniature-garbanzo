rm -rf ./target

mkdir ./target
cp -rf ../*.json ./target
cp -rf ../src ./target


sudo docker build -t argus/post .