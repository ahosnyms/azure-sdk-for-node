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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the LoadBalancerListResult class.
 * @constructor
 * Response for ListLoadBalancers Api service call
 * @member {array} [value] Gets a list of LoadBalancers in a resource group
 * 
 * @member {string} [nextLink] Gets the URL to get the next set of results.
 * 
 */
function LoadBalancerListResult() {
}

util.inherits(LoadBalancerListResult, Array);

/**
 * Defines the metadata of LoadBalancerListResult
 *
 * @returns {object} metadata of LoadBalancerListResult
 *
 */
LoadBalancerListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'LoadBalancerListResult',
    type: {
      name: 'Composite',
      className: 'LoadBalancerListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'LoadBalancerElementType',
                type: {
                  name: 'Composite',
                  className: 'LoadBalancer'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = LoadBalancerListResult;
