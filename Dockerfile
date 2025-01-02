FROM postgres:14-bullseye
ENV POSTGRES_USER root
ENV POSTGRES_DB root
ENV POSTGRES_PASSWORD postgres
COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432