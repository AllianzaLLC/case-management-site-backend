/**
 * Created by user on 8/31/15.
 */

var mongoose = require('mongoose');
var entity = require('./Entity');

var EmployerSchema = new mongoose.schema({
    entity : [entity],
    //Insert an entity for general information here
    locationAddress: String,
    industryCode: String,
    jurisdictionClaimNumber: String,
    carrierClaimNumber: String,
    insuredReportNumber: String,
    oshaLogNumber: String,
    locationNumber: String,
    jurisdiction:String,
    reportPurposeCode: String
});



module.exports = EmployerSchema;