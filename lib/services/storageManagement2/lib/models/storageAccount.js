/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the StorageAccount class.
 * @constructor
 * The storage account.
 * @member {string} [provisioningState] Gets the status of the storage account
 * at the time the operation was called. Possible values include: 'Creating',
 * 'ResolvingDNS', 'Succeeded'
 * 
 * @member {string} [accountType] Gets the type of the storage account.
 * Possible values include: 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS',
 * 'Standard_RAGRS', 'Premium_LRS'
 * 
 * @member {object} [primaryEndpoints] Gets the URLs that are used to perform
 * a retrieval of a public blob, queue or table object.Note that StandardZRS
 * and PremiumLRS accounts only return the blob endpoint.
 * 
 * @member {string} [primaryEndpoints.blob] Gets the blob endpoint.
 * 
 * @member {string} [primaryEndpoints.queue] Gets the queue endpoint.
 * 
 * @member {string} [primaryEndpoints.table] Gets the table endpoint.
 * 
 * @member {string} [primaryEndpoints.file] Gets the file endpoint.
 * 
 * @member {string} [primaryLocation] Gets the location of the primary for the
 * storage account.
 * 
 * @member {string} [statusOfPrimary] Gets the status indicating whether the
 * primary location of the storage account is available or unavailable.
 * Possible values include: 'Available', 'Unavailable'
 * 
 * @member {date} [lastGeoFailoverTime] Gets the timestamp of the most recent
 * instance of a failover to the secondary location. Only the most recent
 * timestamp is retained. This element is not returned if there has never
 * been a failover instance. Only available if the accountType is StandardGRS
 * or StandardRAGRS.
 * 
 * @member {string} [secondaryLocation] Gets the location of the geo
 * replicated secondary for the storage account. Only available if the
 * accountType is StandardGRS or StandardRAGRS.
 * 
 * @member {string} [statusOfSecondary] Gets the status indicating whether the
 * secondary location of the storage account is available or unavailable.
 * Only available if the accountType is StandardGRS or StandardRAGRS.
 * Possible values include: 'Available', 'Unavailable'
 * 
 * @member {date} [creationTime] Gets the creation date and time of the
 * storage account in UTC.
 * 
 * @member {object} [customDomain] Gets the user assigned custom domain
 * assigned to this storage account.
 * 
 * @member {string} [customDomain.name] Gets or sets the custom domain name.
 * Name is the CNAME source.
 * 
 * @member {boolean} [customDomain.useSubDomain] Indicates whether indirect
 * CName validation is enabled. Default value is false. This should only be
 * set on updates
 * 
 * @member {object} [secondaryEndpoints] Gets the URLs that are used to
 * perform a retrieval of a public blob, queue or table object from the
 * secondary location of the storage account. Only available if the
 * accountType is StandardRAGRS.
 * 
 * @member {string} [secondaryEndpoints.blob] Gets the blob endpoint.
 * 
 * @member {string} [secondaryEndpoints.queue] Gets the queue endpoint.
 * 
 * @member {string} [secondaryEndpoints.table] Gets the table endpoint.
 * 
 * @member {string} [secondaryEndpoints.file] Gets the file endpoint.
 * 
 */
function StorageAccount() {
  StorageAccount['super_'].call(this);
}

util.inherits(StorageAccount, models['Resource']);

/**
 * Defines the metadata of StorageAccount
 *
 * @returns {object} metadata of StorageAccount
 *
 */
StorageAccount.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'StorageAccount',
    type: {
      name: 'Composite',
      className: 'StorageAccount',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: false,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        provisioningState: {
          required: false,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'Enum',
            allowedValues: [ 'Creating', 'ResolvingDNS', 'Succeeded' ]
          }
        },
        accountType: {
          required: false,
          serializedName: 'properties.accountType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS' ]
          }
        },
        primaryEndpoints: {
          required: false,
          serializedName: 'properties.primaryEndpoints',
          type: {
            name: 'Composite',
            className: 'Endpoints'
          }
        },
        primaryLocation: {
          required: false,
          serializedName: 'properties.primaryLocation',
          type: {
            name: 'String'
          }
        },
        statusOfPrimary: {
          required: false,
          serializedName: 'properties.statusOfPrimary',
          type: {
            name: 'Enum',
            allowedValues: [ 'Available', 'Unavailable' ]
          }
        },
        lastGeoFailoverTime: {
          required: false,
          serializedName: 'properties.lastGeoFailoverTime',
          type: {
            name: 'DateTime'
          }
        },
        secondaryLocation: {
          required: false,
          serializedName: 'properties.secondaryLocation',
          type: {
            name: 'String'
          }
        },
        statusOfSecondary: {
          required: false,
          serializedName: 'properties.statusOfSecondary',
          type: {
            name: 'Enum',
            allowedValues: [ 'Available', 'Unavailable' ]
          }
        },
        creationTime: {
          required: false,
          serializedName: 'properties.creationTime',
          type: {
            name: 'DateTime'
          }
        },
        customDomain: {
          required: false,
          serializedName: 'properties.customDomain',
          type: {
            name: 'Composite',
            className: 'CustomDomain'
          }
        },
        secondaryEndpoints: {
          required: false,
          serializedName: 'properties.secondaryEndpoints',
          type: {
            name: 'Composite',
            className: 'Endpoints'
          }
        }
      }
    }
  };
};

module.exports = StorageAccount;
