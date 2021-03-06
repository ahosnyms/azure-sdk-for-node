/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachineScaleSetExtension class.
 * @constructor
 * Describes a Virtual Machine Scale Set Extension.
 * @member {string} [name] Gets or sets the name of the extension.
 * 
 * @member {string} [publisher] Gets or sets the name of the extension handler
 * publisher.
 * 
 * @member {string} [type] Gets or sets the type of the extension handler.
 * 
 * @member {string} [typeHandlerVersion] Gets or sets the type version of the
 * extension handler.
 * 
 * @member {boolean} [autoUpgradeMinorVersion] Gets or sets whether the
 * extension handler should be automatically upgraded across minor versions.
 * 
 * @member {object} [settings] Gets or sets Json formatted public settings for
 * the extension.
 * 
 * @member {object} [protectedSettings] Gets or sets Json formatted protected
 * settings for the extension.
 * 
 * @member {string} [provisioningState] Gets the provisioning state, which
 * only appears in the response.
 * 
 */
function VirtualMachineScaleSetExtension() {
  VirtualMachineScaleSetExtension['super_'].call(this);
}

util.inherits(VirtualMachineScaleSetExtension, models['SubResource']);

/**
 * Defines the metadata of VirtualMachineScaleSetExtension
 *
 * @returns {object} metadata of VirtualMachineScaleSetExtension
 *
 */
VirtualMachineScaleSetExtension.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineScaleSetExtension',
    type: {
      name: 'Composite',
      className: 'VirtualMachineScaleSetExtension',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        publisher: {
          required: false,
          serializedName: 'properties.publisher',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          serializedName: 'properties.type',
          type: {
            name: 'String'
          }
        },
        typeHandlerVersion: {
          required: false,
          serializedName: 'properties.typeHandlerVersion',
          type: {
            name: 'String'
          }
        },
        autoUpgradeMinorVersion: {
          required: false,
          serializedName: 'properties.autoUpgradeMinorVersion',
          type: {
            name: 'Boolean'
          }
        },
        settings: {
          required: false,
          serializedName: 'properties.settings',
          type: {
            name: 'Object'
          }
        },
        protectedSettings: {
          required: false,
          serializedName: 'properties.protectedSettings',
          type: {
            name: 'Object'
          }
        },
        provisioningState: {
          required: false,
          readOnly: true,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineScaleSetExtension;
