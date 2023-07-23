FROM python:3.6-stretch

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV HOME /root
ENV DEBIAN_FRONTEND noninteractive
WORKDIR /usr/src/
COPY ./address_resolver/ /usr/src/spring-petclinic/address_resolver
WORKDIR /usr/src/spring-petclinic/address_resolver/src
RUN pip install gunicorn json-logging-py
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000
COPY ./development/address_finder/entrypoint.sh .

ENTRYPOINT ["/usr/src/spring-petclinic/address_resolver/src/entrypoint.sh"]