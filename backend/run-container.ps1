#export dev certs into file to use it later by container
dotnet dev-certs https -ep $env:USERPROFILE\.aspnet\https\aspnetapp.pfx -p "Kaszanka01$"
#trust those certs
dotnet dev-certs https --trust
#remove binaries from source folders (host binaries would overwrite guest ones during build)
if (Test-Path "./bin") {
    Remove-Item "./bin" -Force -Confirm:$false -Recurse
}
if (Test-Path "./obj") {
    Remove-Item "./obj" -Force -Confirm:$false -Recurse
}
if (Test-Path "./published") {
    Remove-Item "./published" -Force -Confirm:$false -Recurse
}
#build image
docker build -t dotnet6-react .
#run container:
# - connected to network
# - listening on https + http
docker run -it -d --publish 5000:5000 --publish 5001:5001 -e ASPNETCORE_URLS="https://+:5001;http://+:5000" -e ASPNETCORE_Kestrel__Certificates__Default__Password="Kaszanka01$" -e ASPNETCORE_Kestrel__Certificates__Default__Path=/https/aspnetapp.pfx -v $env:USERPROFILE\.aspnet\https:/https/ --name dotnet6-react-node1 --network internal-container-network dotnet6-react