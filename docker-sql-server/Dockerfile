#base image
FROM mcr.microsoft.com/mssql/server:2022-latest

#env variables
ENV ACCEPT_EULA=Y
ENV MSSQL_SA_PASSWORD=Kaszanka01$

#expose port
EXPOSE 1433/TCP

#init db
COPY init_database.sql /tmp/init_database.sql
WORKDIR /tmp
RUN (/opt/mssql/bin/sqlservr --accept-eula & ) | grep -q "Service Broker manager has started" &&  /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "Kaszanka01$" -i /tmp/init_database.sql