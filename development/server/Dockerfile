FROM maven:3.8.6-openjdk-11
WORKDIR /root
COPY pom.xml mvnw ./
COPY .mvn .mvn
COPY ./src ./src
COPY ./agents ./agents
EXPOSE 8081
CMD ["./mvnw","spring-boot:run"]