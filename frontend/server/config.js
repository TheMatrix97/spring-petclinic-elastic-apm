var config = {
  // Replace ELASTIC_APM_SERVER_URL and apm_server_token
  // with these of your APM server.
  apm_server: process.env.ELASTIC_APM_SERVER_URL || 'http://localhost:8200',
  apm_server_token: process.env.ELASTIC_APM_SECRET_TOKEN || '',
  apm_service_name: process.env.ELASTIC_APM_SERVICE_NAME || 'petclinic-node',
  apm_client_service_name: process.env.ELASTIC_APM_CLIENT_SERVICE_NAME || 'petclinic-react',
  apm_service_version: process.env.ELASTIC_APM_SERVICE_VERSION || '1.0.0',
  api_server: process.env.API_SERVER || 'http://localhost:8080',
  api_prefix: process.env.API_PREFIX || '/api',
  address_server: process.env.ADDRESS_SERVER || 'http://localhost:5000',
  distributedTracingOrigins: process.env.DISTRIBUTED_TRACINGS_ORIGINS || 'http://petclinic-client:3000,http://petclinic-server:8000,http://localhost:4000,http://localhost:8080,http://localhost:8081'
}

module.exports = config;
