# https://hub.docker.com/_/microsoft-dotnet
FROM build-dotnet6-nodejs-npm AS build

WORKDIR /source
# copy csproj and restore as distinct layers
COPY backend.csproj .
RUN dotnet restore --use-current-runtime  

# copy everything else and build app
COPY . .
RUN dotnet publish -c Release -o /app --use-current-runtime --self-contained false --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app .
EXPOSE 5000
EXPOSE 5001
ENTRYPOINT ["dotnet", "backend.dll"]