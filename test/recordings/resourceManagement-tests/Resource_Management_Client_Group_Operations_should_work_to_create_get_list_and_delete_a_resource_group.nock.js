// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'a4b9d73f-0159-429e-b2bc-6378acdefa82',
  'x-ms-correlation-request-id': 'a4b9d73f-0159-429e-b2bc-6378acdefa82',
  'x-ms-routing-request-id': 'EASTUS:20151114T063635Z:a4b9d73f-0159-429e-b2bc-6378acdefa82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:36:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'a4b9d73f-0159-429e-b2bc-6378acdefa82',
  'x-ms-correlation-request-id': 'a4b9d73f-0159-429e-b2bc-6378acdefa82',
  'x-ms-routing-request-id': 'EASTUS:20151114T063635Z:a4b9d73f-0159-429e-b2bc-6378acdefa82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:36:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'd26b3509-4534-46e2-a424-e35897e37535',
  'x-ms-correlation-request-id': 'd26b3509-4534-46e2-a424-e35897e37535',
  'x-ms-routing-request-id': 'EASTUS:20151114T063635Z:d26b3509-4534-46e2-a424-e35897e37535',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:36:35 GMT',
  connection: 'close',
  'content-length': '206' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'd26b3509-4534-46e2-a424-e35897e37535',
  'x-ms-correlation-request-id': 'd26b3509-4534-46e2-a424-e35897e37535',
  'x-ms-routing-request-id': 'EASTUS:20151114T063635Z:d26b3509-4534-46e2-a424-e35897e37535',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:36:35 GMT',
  connection: 'close',
  'content-length': '206' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/Default-Media-WestUS\",\"name\":\"Default-Media-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/Default-SQL-WestUS\",\"name\":\"Default-SQL-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/Default-Storage-WestUS\",\"name\":\"Default-Storage-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg303\",\"name\":\"testg303\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '835baa14-a5fa-4d17-851d-692a6df22404',
  'x-ms-correlation-request-id': '835baa14-a5fa-4d17-851d-692a6df22404',
  'x-ms-routing-request-id': 'EASTUS:20151114T063636Z:835baa14-a5fa-4d17-851d-692a6df22404',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:36:36 GMT',
  connection: 'close',
  'content-length': '1007' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/Default-Media-WestUS\",\"name\":\"Default-Media-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/Default-SQL-WestUS\",\"name\":\"Default-SQL-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/Default-Storage-WestUS\",\"name\":\"Default-Storage-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg303\",\"name\":\"testg303\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '835baa14-a5fa-4d17-851d-692a6df22404',
  'x-ms-correlation-request-id': '835baa14-a5fa-4d17-851d-692a6df22404',
  'x-ms-routing-request-id': 'EASTUS:20151114T063636Z:835baa14-a5fa-4d17-851d-692a6df22404',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:36:36 GMT',
  connection: 'close',
  'content-length': '1007' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '3dbffb96-3666-46ad-a040-3b0380a0bce9',
  'x-ms-correlation-request-id': '3dbffb96-3666-46ad-a040-3b0380a0bce9',
  'x-ms-routing-request-id': 'EASTUS:20151114T063638Z:3dbffb96-3666-46ad-a040-3b0380a0bce9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:36:37 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '3dbffb96-3666-46ad-a040-3b0380a0bce9',
  'x-ms-correlation-request-id': '3dbffb96-3666-46ad-a040-3b0380a0bce9',
  'x-ms-routing-request-id': 'EASTUS:20151114T063638Z:3dbffb96-3666-46ad-a040-3b0380a0bce9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:36:37 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '774ee410-60e6-458d-ac3f-bc7d56b6b6e5',
  'x-ms-correlation-request-id': '774ee410-60e6-458d-ac3f-bc7d56b6b6e5',
  'x-ms-routing-request-id': 'EASTUS:20151114T063654Z:774ee410-60e6-458d-ac3f-bc7d56b6b6e5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:36:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '774ee410-60e6-458d-ac3f-bc7d56b6b6e5',
  'x-ms-correlation-request-id': '774ee410-60e6-458d-ac3f-bc7d56b6b6e5',
  'x-ms-routing-request-id': 'EASTUS:20151114T063654Z:774ee410-60e6-458d-ac3f-bc7d56b6b6e5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:36:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '72fa3086-ddc9-4a63-9209-f9a5c0ff49c8',
  'x-ms-correlation-request-id': '72fa3086-ddc9-4a63-9209-f9a5c0ff49c8',
  'x-ms-routing-request-id': 'EASTUS:20151114T063711Z:72fa3086-ddc9-4a63-9209-f9a5c0ff49c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:37:11 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '72fa3086-ddc9-4a63-9209-f9a5c0ff49c8',
  'x-ms-correlation-request-id': '72fa3086-ddc9-4a63-9209-f9a5c0ff49c8',
  'x-ms-routing-request-id': 'EASTUS:20151114T063711Z:72fa3086-ddc9-4a63-9209-f9a5c0ff49c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 06:37:11 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];