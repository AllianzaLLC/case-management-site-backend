/**
 * Created by user on 8/31/15.
 */
var mongoose = require('mongoose');
var Entity = require('./Entity');

var CarrierSchema = new mongoose.schema({
       entity : [Entity],
        agentName: String,
    agentCodeNumber :String,
    policyNumber: String,
    adEIN: String,
    selfInsured: Boolean,
    claimsAdName: String,
    claimsAdAddress: String,
    claimsAdPhoneNumber: String,
    policyBegin: String,
    policyEnd: String
});

module.exports = CarrierSchema;