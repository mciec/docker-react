CREATE DATABASE [mydb] CONTAINMENT = NONE 
	ON PRIMARY ( NAME = N'mydb1', FILENAME = N'/var/opt/mssql/data/mydb.mdf' , SIZE = 8192KB , FILEGROWTH = 65536KB ) 
	LOG ON ( NAME = N'mydb_log', FILENAME = N'/var/opt/mssql/data/mydb_log.ldf' , SIZE = 8192KB , FILEGROWTH = 65536KB )
GO
CREATE LOGIN mciec WITH PASSWORD=N'Kaszanka01$', DEFAULT_DATABASE=[mydb], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
EXEC sp_addsrvrolemember 
    @loginame = 'mciec', 
    @rolename = 'sysadmin';
GO
USE [mydb]
GO
CREATE USER [mciec] FOR LOGIN [mciec]
GO

EXEC sp_addrolemember 
    @rolename = 'db_owner',
    @membername = 'mciec';
GO

CREATE TABLE [dbo].[WeatherForecast](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NOT NULL,
	[TemperatureC] [int] NOT NULL,
	[TemperatureF] [int] NOT NULL,
	[Summary] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into dbo.WeatherForecast([Date],[TemperatureC],[TemperatureF],[Summary]) values('2022-09-08', 24, 100, '');
insert into dbo.WeatherForecast([Date],[TemperatureC],[TemperatureF],[Summary]) values('2022-09-08', 27, 110, '');
insert into dbo.WeatherForecast([Date],[TemperatureC],[TemperatureF],[Summary]) values('2022-09-08', 11, 90, '');
insert into dbo.WeatherForecast([Date],[TemperatureC],[TemperatureF],[Summary]) values('2022-09-08', 16, 98, '');
GO