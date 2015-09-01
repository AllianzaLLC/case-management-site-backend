/**
 * Created by user on 9/1/15.
 */
var mongoose = requrie('mongoose');

var OccuranceSchema = new mongoose.Schema({
    dateInjury: String,
    lastWordDay: String,
    exposurePremises: Boolean,
    timeWorkBegan: String,
    timeOccurance: String,
    equipment: String,
    employerNotified: String,
    typeOfInjury: String,
    bodyPartAffected: String,
    activityEngaged: String,
    workProccess: String,
    departmentIllness: String,
    providerName: String,
    providerAddress: String,
    hospitalName: String,
    hospitalAddress: String,
    initialTreatment: String,
    how: String,
    dateReturned: String,
    dod: String,
    safeguards: Boolean,
    safeguardsUsed: Boolean,
});

module.exports = OccuranceSchema;