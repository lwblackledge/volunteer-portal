# App
FROM node:alpine as app
WORKDIR /usr/src/app
COPY app/package.json .
RUN npm install
COPY app/ .
RUN npm run build

# API
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 as api
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY VolunteerPortalApi/VolunteerPortalApi.csproj VolunteerPortalApi/

RUN dotnet restore VolunteerPortalApi/VolunteerPortalApi.csproj

COPY src/ .
ENV BUILD_CONTAINER=true
RUN dotnet publish EvenUp.Web/EvenUp.Web.csproj -c release -o /usr/src/api/dist

# Server
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /root/
COPY --from=api /usr/src/api/dist .
COPY --from=app /usr/src/app/dist ./app

# Config/Run
ENV ASPNETCORE_ENVIRONMENT=development
ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000/tcp
ENTRYPOINT ["dotnet", "./VolunteerPortalApi.dll"]
