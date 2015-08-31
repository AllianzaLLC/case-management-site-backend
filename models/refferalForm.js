var mongoose = require('mongoose'); 

var RefferalSchema = new mongoose.Schema({

Employer: {
	Name: String,
	Address: String,
	IndustryCode: String,
	EmployerFein: String,
	CarrierAdminClaimNumber: Number,
	OshaLogNumber: Number, 
	ReportPurposeCode: String,
	Jurisdiction: String,
	JurisdictionClaimNumber: Number,
	InsuredReportNumber: Number,
	EmployerLocationAddress: String,
	LocationNumber: Number,
	PhoneNumber: Number
	},
CarrierClaimsAdministator: {
	Carrier: {
		Name: String,
		Address: String,
		PhoneNumber: Number
		},
	CarrierFein : String,
	AgentName: String,
	AgentCodeNumber : Number,
	PolicyPeriod: String,
	SelfInsurance: Boolean,
	PolicyNumber: String,
	ClaimsAdministrator: {
		Name: String,
		Address: String,
		PhoneNumber: Number
		},
	AdministratorFein: String
	},  
Employee: {
	Name: {
		Last:String,
		First: String,
		Middle: String
	},
	Address: String,
	PhoneNumber: Number,
	Rate: Number,
	Per: String,
	DOB: Number,
	Sex: String,
	NumberDefendents: Number,
	DaysWorkedPerWeek: Number,
	SSN: Number,
	MaritalStatus: String,
	DateHired: Number,
	OccuptationTitle : String,
	StateOfHire: String,
	EmploymentStatus: String,
	NCCIClassCode: String,
	FPFDOI: Boolean,
	DSC: Boolean

	},
Occurance: {
	TEBW: String,
	DOI: String,
	TimeOfOccurance: String, 
	LastWorkDate: String,
	DENDDB: String,
	ContactName: String,
	ContactNumber: Number,
	TypeOfInjuryIllness: String,
	PartBodyAffected: String,
	IIEOEP: Boolean,
	TypeOfInjuryCode: String,
	PartBodyAffectedCode:String,
	DLWAIEO: String, 
	EMCEWAIEO: String,
	SAEE: String,
	WPEE: String,
	How: String,
	CauseInjuryCode: String,
	DateReturnedWork: String,
	DOD: String,
	SafetyEquipment: Boolean,
	SEUsed: Boolean,
	PhysicianProvider: {
		Name: String,
		Address: String
	},
	Hospital : {
		Name: String,
		Address: String
	},
	InitialTreatment: {
		NoMedicalTreatment: Boolean,
		MinorByEmployer: Boolean,
		MinorClinicHosp: Boolean,
		EmergencyCare: Boolean,
		Hospitilized24Plus: Boolean,
		FutureMajorMedical: Boolean
	}
	
	},
Other: {
	WitnessName: String,
	WitnessPhoneNumber: Number,
	DatePrepared: String,
	PreparesName: String,
	PreparesTitle: String,
	PhoneNumber: Number
	}

});

var RefferalItem = mongoose.model('RefferalItem', RefferalSchema); 

module.exports = {
	RefferalItem : RefferalItem

}
