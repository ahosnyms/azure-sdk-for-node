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
 * Initializes a new instance of the ExpressRouteCircuitsStatsListResult class.
 * @constructor
 * Response for ListStats from Express Route Circuits Api service call
 * @member {array} [value] Gets List of Stats
 * 
 * @member {string} [nextLink] Gets the URL to get the next set of results.
 * 
 */
function ExpressRouteCircuitsStatsListResult() {
}

util.inherits(ExpressRouteCircuitsStatsListResult, Array);

/**
 * Defines the metadata of ExpressRouteCircuitsStatsListResult
 *
 * @returns {object} metadata of ExpressRouteCircuitsStatsListResult
 *
 */
ExpressRouteCircuitsStatsListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ExpressRouteCircuitsStatsListResult',
    type: {
      name: 'Composite',
      className: 'ExpressRouteCircuitsStatsListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ExpressRouteCircuitStatsElementType',
                type: {
                  name: 'Composite',
                  className: 'ExpressRouteCircuitStats'
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

module.exports = ExpressRouteCircuitsStatsListResult;
