/**
 * Created by jonlamb on 1/10/17.
 */
/**
 * Declaration of 'N' API virtual namespace.
 *
 * Note that N and it children (N/ui/message etc.) must be imported using require or define in order to obtain a reference.
 * This declaration is used as a hint to the IDE and is not an actual global object at runtime.
 */
var N = {};

/**
 * SuiteScript auth module
 *
 * @module N/auth
 * @NApiVersion 2.x
 */
function auth() {}
/**
 * Change current user's email
 *
 * @param {Object} options
 * @param {string} options.password
 * @param {string} options.newEmail
 * @param {boolean} [options.onlyThisAccount=true]
 *
 * @throws {SuiteScriptError} INVALID_PSWD When password does not conform to rules.
 * @throws {SuiteScriptError} INVALID_EMAIL When email does not conform to rules.
 */
auth.prototype.changeEmail = function(options) {};

/**
 * Change current user's password
 *
 * @param {object} options
 * @param {string} options.currentPassword
 * @param {string} options.newPassword
 *
 * @throws {SuiteScriptError} INVALID_PSWD When password does not conform to rules.
 * @throws {SuiteScriptError} INVALID_EMAIL When email does not conform to rules.
 */
auth.prototype.changePassword = function(options) {};

auth = new auth();
/**
 * @type {auth}
 */
N.prototype.auth = auth;

/**
 * SuiteScript module
 *
 * @module N/config
 * @NApiVersion 2.x
 */
function config() {}
/**
 * Load a configuration object with a specific type
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.type one of the Type values
 * @param {boolean} options.isDynamic load record in dynamic or deferred dynamic mode
 * @return {Record}
 *
 * @throws {SuiteScriptError} INVALID_RCRD_TYPE Thrown if an invalid record type was provided.
 *
 * @since 2015.2
 */
config.prototype.load = function(options) {};

/**
 * Enum configuration type values.
 * @readonly
 * @enum {string}
 * @since 2015.2
 */
config.prototype.Type = function() {};

function configType() {
    this.USER_PREFERENCES = 'USERPREFERENCES';
    this.COMPANY_INFORMATION = 'COMPANYINFORMATION';
    this.COMPANY_PREFERENCES = 'COMPANYPREFERENCES';
    this.ACCOUNTING_PREFERENCES = 'ACCOUNTINGPREFERENCES';
    this.ACCOUNTING_PERIODS = 'ACCOUNTINGPERIODS';
    this.TAX_PERIODS = 'TAXPERIODS';
    this.FEATURES = 'COMPANYFEATURES';
}
config.prototype.Type = configType;

/**
 * Primary object used to encapsulate a record object.
 *
 * @protected
 * @param {Object} options
 * @param {{id: *, remoteId: *, isDynamic: boolean, isUserEvent: boolean, isSubrecord: boolean, recordContext: *, metadata: *, data: *}} options.recordObj
 * @return {Record}
 * @constructor
 */
function Record() {

    /**
     * The id of the record
     * @name Record#id
     * @type number
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.id = undefined;
    /**
     * The type of the record
     * @name Record#type
     * @type string
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.type = undefined;
    /**
     * return true if record is a dynamic record
     * @name Record#isDynamic
     * @type boolean
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.isDynamic = undefined;
    /**
     * save record updates to the system
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enablesourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoremandatoryfields=false] ignore mandatory field during record submission
     * @return {number} id of submitted record
     */
    this.save = function() {options}
    this.save = {
        /**
         * save record updates to the system
         * @governance 20 units for transactions, 4 for custom records, 10 for all other records
         *
         * @param {Object} options
         * @param {boolean} [options.enablesourcing=false] enable sourcing during record update
         * @param {boolean} [options.ignoremandatoryfields=false] ignore mandatory field during record submission
         * @return {number} id of submitted record
         */
        promise: function (options) {}
    }
    // function saveThis() {}
    // saveThis.prototype.promise = function() {};
    // this.save = new saveThis();

    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */
    this.toJSON = function(options) {};

    /**
     * Returns the object type name (Record)
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * remove body field data﻿
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.removeField = function(options) {};

    /**
     * return array of names of all body fields, including machine header field and matrix header fields
     * @return {Array}
     */
    this.getFields = function(options) {};

    /**
     * returns the specified sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist}
     */
    this.getSublist = function(options) {};

    /**
     * return array of names of all sublists
     * @return {Array}
     */
    this.getSublists = function(options) {};

    /**
     * return array of names of all fields in a sublist﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined﻿
     */
    this.getSublistFields = function(options) {};

    /**
     * return value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    this.getValue = function(options) {};

    /**
     * set value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.setValue = function(options) {};

    /**
     * get value of the field in text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setText
     */
    this.getText = function(options) {};

    /**
     * set value of the field by text representation
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string} options.text
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.setText = function(options) {};

    /**
     * return field object from record
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.getField = function(options) {};

    /**
     * return field object from record's sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {boolean} options.line
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    this.getSublistField = function(options) {};

    /**
     * return line count of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {number}
     */
    this.getLineCount = function(options) {};

    /**
     * insert a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid﻿ or if machine is not editable
     */
    this.insertLine = function(options) {};

    /**
     * remove a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid﻿ or if machine is not editable
     */
    this.removeLine = function(options) {};

    /**
     * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @return {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing or undefined
     */
    this.findSublistLineWithValue = function(options) {};

    /**
     * return value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    this.getSublistValue = function(options) {};

    /**
     * set the value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {number|Date|string|Array} options.value
     * @return {Record}﻿
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @restriction only available in deferred dynamic record
     */
    this.setSublistValue = function(options) {};

    /**
     * return value of a sublist field in text representation﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string}﻿
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */
    this.getSublistText = function(options) {};

    /**
     * set the value of a sublist field in text representation﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string} options.text
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @restriction only available in deferred dynamic record
     */
    this.setSublistText = function(options) {};

    /**
     * return a value indicating if the field has a subrecord
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */
    this.hasSubrecord = function(options) {};

    /**
     * get the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Subrecord}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     */
    this.getSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record}
     */
    this.removeSubrecord = function(options) {};

    /**
     * return a value indicating if the associated sublist field has a subrecord
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {boolean}
     */
    this.hasSublistSubrecord = function(options) {};

    /**
     * get the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Subrecord}
     */
    this.getSublistSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */
    this.removeSublistSubrecord = function(options) {};

    /**
     * set the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Record}
     */
    this.setMatrixHeaderValue = function(options) {};

    /**
     * get the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    this.getMatrixHeaderValue = function(options) {};

    /**
     * set the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */
    this.setMatrixSublistValue = function(options) {};

    /**
     * get the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    this.getMatrixSublistValue = function(options) {};

    /**
     * get the field for the specified header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */
    this.getMatrixHeaderField = function(options) {};

    /**
     * get the field for the specified sublist in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */
    this.getMatrixSublistField = function(options) {};

    /**
     * returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.value the column number for the field
     * @param {number} options.column the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    this.findMatrixSublistLineWithValue = function(options) {};

    /**
     * returns the number of columns for the specified matrix.
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    this.getMatrixHeaderCount = function(options) {};

    /**
     * cancel the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     * @restriction only available in dynamic record
     */
    this.cancelLine = function(options) {};

    /**
     * commit the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     * @restriction only available in dynamic record
     */
    this.commitLine = function(options) {};

    /**
     * select line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or line index
     * @restriction only available in dynamic record
     */
    this.selectLine = function(options) {};

    /**
     * select a new line at the end of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     * @restriction only available in dynamic record
     */
    this.selectNewLine = function(options) {};

    /**
     * return value of a sublist field on the current selected sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistValue = function(options) {};

    /**
     * set the value for field in the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    this.setCurrentSublistValue = function(options) {};

    /**
     * return the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistText = function(options) {};

    /**
     * set the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    this.setCurrentSublistText = function(options) {};

    /**
     * return the line number of current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistIndex = function(options) {};

    /**
     * return a value indicating if the associated sublist field has a subrecord on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {boolean}
     */
    this.hasCurrentSublistSubrecord = function(options) {};

    /**
     * get the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Subrecord}
     */
    this.getCurrentSublistSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record}
     */
    this.removeCurrentSublistSubrecord = function(options) {};

    /**
     * set the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string} options.value - the value to set it to
     * @param {boolean} options.ignoreFieldChange (optional) - Ignore the field change script (default false)
     * @param {boolean} options.fireSlavingSync (optional) - Flag to perform slaving synchronously (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {Record}
     */
    this.setCurrentMatrixSublistValue = function(options) {};

    /**
     * get the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {number|Date|string}
     */
    this.getCurrentMatrixSublistValue = function(options) {};
}

/**
 * Return a new instance of sublist object
 *
 * @param {Object} sublist
 * @param {string} sublist.type type of sublist
 * @param {SublistState} sublist.sublistState SublistState

 * @return {Sublist}
 * @constructor
 *
 * @since 2015.2
 */
function Sublist() {

    /**
     * The name of the sublist.
     * @name Sublist#name
     * @type string
     * @readonly
     */
    this.getName = function(options) {};

    /**
     * The type of the sublist.
     * @name Sublist#type
     * @type string
     * @readonly
     */
    this.getType = function(options) {};

    /**
     * The sublist is changed
     * @name Sublist#isChanged
     * @type boolean
     * @readonly
     */
    this.isChanged = function(options) {};

    /**
     * The sublist is hidden
     * @name Sublist#isHidden
     * @type boolean
     * @readonly
     */
    this.isHidden = function(options) {};

    /**
     * The sublist is display
     * @name Sublist#isDisplay
     * @type boolean
     * @readonly
     */
    this.isDisplay = function(options) {};

    /**
     * Returns the object type name (sublist.Sublist)
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     * @returns {{id: string, type: string, isChanged: boolean, isDisplay: boolean}}
     */
    this.toJSON = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function Field() {

    /**
     * Return label of the field
     * @name Field#label
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.label = undefined;
    /**
     * Return id of the field
     * @name Field#id
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.id = undefined;
    /**
     * Disabled state of the field
     * @name Field#isDisabled
     * @type boolean
     * @since 2015.2
     */
    this.isDisabled = undefined;
    /**
     * Display state of the field
     * @name Field#isDisplay
     * @type boolean
     * @since 2015.2
     */
    this.isDisplay = undefined;
    /**
     * Mandatory state of the field
     * @name Field#isMandatory
     * @type boolean
     * @since 2015.2
     */
    this.isMandatory = undefined;
    /**
     * Read Only state of the field
     * @name Field#isReadOnly
     * @type boolean
     * @since 2015.2
     */
    this.isReadOnly = undefined;
    /**
     * Visible state of the field
     * @name Field#isVisible
     * @type boolean
     * @since 2015.2
     */
    this.isVisible = undefined;
    /**
     * Return type of the field
     * @name Field#type
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.type = undefined;
    /**
     * Return the sublistId of the field
     * @name Field#sublistId
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.sublistId = undefined;
    /**
     * Returns if the field is a popup
     * @name Field#isPopup
     * @type boolean
     * @readonly
     * @since 2015.2
     */
    this.isPopup = undefined;
    /**
     * get JSON format of the object
     * @return {{id: *, label: *, type: *}}
     *
     */
    this.toJSON = function(options) {};

    /**
     * @return {string}
     *
     */
    this.toString = function(options) {};
}

/**
 * Primary object used to encapsulate a record object.
 *
 * @protected
 * @param {Object} options
 * @param {{id: *, remoteId: *, isDynamic: boolean, isUserEvent: boolean, isSubrecord: boolean, recordContext: *, metadata: *, data: *}} options.recordObj
 * @return {Record}
 * @constructor
 */
function Record() {

    /**
     * The id of the record
     * @name Record#id
     * @type number
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.id = undefined;
    /**
     * The type of the record
     * @name Record#type
     * @type string
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.type = undefined;
    /**
     * return true if record is a dynamic record
     * @name Record#isDynamic
     * @type boolean
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.isDynamic = undefined;
    /**
     * save record updates to the system
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enablesourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoremandatoryfields=false] ignore mandatory field during record submission
     * @return {number} id of submitted record
     */
    this.save = function(options) {}
    this.save = {
        /**
         * save record updates to the system
         * @governance 20 units for transactions, 4 for custom records, 10 for all other records
         *
         * @param {Object} options
         * @param {boolean} [options.enablesourcing=false] enable sourcing during record update
         * @param {boolean} [options.ignoremandatoryfields=false] ignore mandatory field during record submission
         * @return {number} id of submitted record
         */
        promise: function (options) {}
    }
    // function saveThis() {}
    // saveThis.prototype.promise = function() {};
    // this.save = new saveThis();

    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */
    this.toJSON = function(options) {};

    /**
     * Returns the object type name (Record)
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * remove body field data﻿
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.removeField = function(options) {};

    /**
     * return array of names of all body fields, including machine header field and matrix header fields
     * @return {Array}
     */
    this.getFields = function(options) {};

    /**
     * returns the specified sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist}
     */
    this.getSublist = function(options) {};

    /**
     * return array of names of all sublists
     * @return {Array}
     */
    this.getSublists = function(options) {};

    /**
     * return array of names of all fields in a sublist﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined﻿
     */
    this.getSublistFields = function(options) {};

    /**
     * return value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    this.getValue = function(options) {};

    /**
     * set value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.setValue = function(options) {};

    /**
     * get value of the field in text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setText
     */
    this.getText = function(options) {};

    /**
     * set value of the field by text representation
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string} options.text
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.setText = function(options) {};

    /**
     * return field object from record
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.getField = function(options) {};

    /**
     * return field object from record's sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {boolean} options.line
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    this.getSublistField = function(options) {};

    /**
     * return line count of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {number}
     */
    this.getLineCount = function(options) {};

    /**
     * insert a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid﻿ or if machine is not editable
     */
    this.insertLine = function(options) {};

    /**
     * remove a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid﻿ or if machine is not editable
     */
    this.removeLine = function(options) {};

    /**
     * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @return {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing or undefined
     */
    this.findSublistLineWithValue = function(options) {};

    /**
     * return value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    this.getSublistValue = function(options) {};

    /**
     * set the value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {number|Date|string|Array} options.value
     * @return {Record}﻿
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @restriction only available in deferred dynamic record
     */
    this.setSublistValue = function(options) {};

    /**
     * return value of a sublist field in text representation﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string}﻿
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */
    this.getSublistText = function(options) {};

    /**
     * set the value of a sublist field in text representation﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string} options.text
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @restriction only available in deferred dynamic record
     */
    this.setSublistText = function(options) {};

    /**
     * return a value indicating if the field has a subrecord
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */
    this.hasSubrecord = function(options) {};

    /**
     * get the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Subrecord}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     */
    this.getSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record}
     */
    this.removeSubrecord = function(options) {};

    /**
     * return a value indicating if the associated sublist field has a subrecord
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {boolean}
     */
    this.hasSublistSubrecord = function(options) {};

    /**
     * get the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Subrecord}
     */
    this.getSublistSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */
    this.removeSublistSubrecord = function(options) {};

    /**
     * set the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Record}
     */
    this.setMatrixHeaderValue = function(options) {};

    /**
     * get the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    this.getMatrixHeaderValue = function(options) {};

    /**
     * set the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */
    this.setMatrixSublistValue = function(options) {};

    /**
     * get the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    this.getMatrixSublistValue = function(options) {};

    /**
     * get the field for the specified header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */
    this.getMatrixHeaderField = function(options) {};

    /**
     * get the field for the specified sublist in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */
    this.getMatrixSublistField = function(options) {};

    /**
     * returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.value the column number for the field
     * @param {number} options.column the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    this.findMatrixSublistLineWithValue = function(options) {};

    /**
     * returns the number of columns for the specified matrix.
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    this.getMatrixHeaderCount = function(options) {};

    /**
     * cancel the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     * @restriction only available in dynamic record
     */
    this.cancelLine = function(options) {};

    /**
     * commit the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     * @restriction only available in dynamic record
     */
    this.commitLine = function(options) {};

    /**
     * select line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or line index
     * @restriction only available in dynamic record
     */
    this.selectLine = function(options) {};

    /**
     * select a new line at the end of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     * @restriction only available in dynamic record
     */
    this.selectNewLine = function(options) {};

    /**
     * return value of a sublist field on the current selected sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistValue = function(options) {};

    /**
     * set the value for field in the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    this.setCurrentSublistValue = function(options) {};

    /**
     * return the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistText = function(options) {};

    /**
     * set the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    this.setCurrentSublistText = function(options) {};

    /**
     * return the line number of current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistIndex = function(options) {};

    /**
     * return a value indicating if the associated sublist field has a subrecord on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {boolean}
     */
    this.hasCurrentSublistSubrecord = function(options) {};

    /**
     * get the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Subrecord}
     */
    this.getCurrentSublistSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record}
     */
    this.removeCurrentSublistSubrecord = function(options) {};

    /**
     * set the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string} options.value - the value to set it to
     * @param {boolean} options.ignoreFieldChange (optional) - Ignore the field change script (default false)
     * @param {boolean} options.fireSlavingSync (optional) - Flag to perform slaving synchronously (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {Record}
     */
    this.setCurrentMatrixSublistValue = function(options) {};

    /**
     * get the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {number|Date|string}
     */
    this.getCurrentMatrixSublistValue = function(options) {};
}

config = new config();
/**
 * @type {config}
 */
N.prototype.config = config;

/**
 * SuiteScript crypto module
 *
 * @module N/crypto
 * @NApiVersion 2.x
 *
 */
function crypto() {}
/**
 *
 * @param options
 * @string options.guid
 * @string options.encoding
 * @return {SecretKey}
 */
crypto.prototype.createSecretKey = function(options) {};

/**
 *
 * @param {Object} options
 * @param {string} options.algorithm
 * @return {Hash}
 */
crypto.prototype.createHash = function(options) {};

/**
 *
 * @param {Object} options
 * @param {string} options.algorithm
 * @param {SecretKey} options.key
 * @return {Hmac}
 */
crypto.prototype.createHmac = function(options) {};

/**
 *
 * @param {object} options
 * @param {string} options.algorithm
 * @param {crypto.SecretKey} options.key
 * @param {string} options.blockCipherMode
 * @param {string} options.padding
 * @return {Cipher}
 */
crypto.prototype.createCipher = function(options) {};

/**
 *
 * @param {object} options
 * @param {string} options.algorithm
 * @param {string} options.key
 * @param {string} options.blockCipherMode
 * @param {string} options.padding
 * @param {string} options.iv
 * @return {Decipher}
 */
crypto.prototype.createDecipher = function(options) {};

/**
 * @enum
 */
function cryptoHashAlg() {
    this.SHA1 = 'SHA1';
    this.SHA256 = 'SHA256';
    this.SHA512 = 'SHA512';
    this.MD5 = 'MD5';
}
crypto.prototype.HashAlg = cryptoHashAlg;

/**
 * @enum
 */
function cryptoEncryptionAlg() {
    this.AES = 'AES';
}
crypto.prototype.EncryptionAlg = cryptoEncryptionAlg;

/**
 * @enum
 */
function cryptoEncoding() {
    this.UTF_8 = 'UTF_8';
    this.BASE_16 = 'BASE_16';
    this.BASE_32 = 'BASE_32';
    this.BASE_64 = 'BASE_64';
    this.BASE_64_URL_SAFE = 'BASE_64_URL_SAFE';
    this.HEX = 'HEX';
}
crypto.prototype.Encoding = cryptoEncoding;

/**
 * @enum
 */
function cryptoPadding() {
    this.NoPadding = 'NoPadding';
    this.PKCS5Padding = 'PKCS5Padding';
}
crypto.prototype.Padding = cryptoPadding;

/**
 * Returns a new instance of SecretKey used for hmac, cipher and decipher
 *
 * @protected
 * @class
 * @classdesc
 * @param guid
 * @param encoding
 * @return {crypto.SecretKey}
 *
 * @constructor
 */
function SecretKey() {

    /**
     * @type string
     */
    this.guid = undefined;
    /**
     * @type string
     */
    this.encoding = undefined;}

/**
 *
 * @protected
 * @constructor
 */
function CipherPayload() {

    /**
     * @type string
     */
    this.iv = undefined;
    /**
     * @type string
     */
    this.ciphertext = undefined;}

/**
 * @class
 * @classdesc Encapsulation of a Hash
 * @return {crypto.Hash}
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function Hash() {

    /**
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {string} options.inputEncoding
     *
     */
    this.update = function(options) {};

    /**
     * @param {Object} options
     * @param {string} options.outputEncoding
     * @return {string}
     */
    this.digest = function(options) {};

    /**
     * Returns the object type name (crypto.Hash)
     * @returns {string}
     */
    this.toString = function(options) {};
}

/**
 * @class
 * @classdesc Encapsulation of a Hash
 * @return {crypto.Hmac}
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function Hmac() {

    /**
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {string} options.inputEncoding
     *
     */
    this.update = function(options) {};

    /**
     * @param {Object} options
     * @param {string} options.outputEncoding
     * @return {string}
     */
    this.digest = function(options) {};

    /**
     * Returns the object type name (crypto.Hash)
     * @returns {string}
     */
    this.toString = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function Cipher() {

    /**
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {string} options.inputEncoding
     *
     */
    this.update = function(options) {};

    /**
     * @param {Object} options
     * @param {string} options.outputEncoding
     * @return {CipherPayload}
     */
    this['final'] = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function Decipher() {

    /**
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {string} options.inputEncoding
     *
     */
    this.update = function(options) {};

    /**
     * @param {Object} options
     * @param {string} options.outputEncoding
     * @return {string}
     */
    this['final'] = function(options) {};
}

crypto = new crypto();
/**
 * @type {crypto}
 */
N.prototype.crypto = crypto;

/**
 * SuiteScript currency module
 *
 * @module N/currency
 * @NApiVersion 2.x
 *
 */
function currency() {}
/**
 * Retrieves the exchange rate between two currencies based on the specified date.
 * The return value comes from the Exchange Rate column of the Currency Exchange Rates record.
 *
 * @governance 10 units
 *
 * @param {Object} options
 * @param {int|string} options.source The source currency ID or String
 * @param {int|string} options.target The target currency ID or String
 * @param {Date} options.date [optional] The date of the desired effective currency rate. Defaults to today.
 *
 * @return {number}
 *
 * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if id parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_CURRENCY_ID if an invalid currency (source or target) is specified
 *
 * @since 2015.2
 */
currency.prototype.exchangeRate = function(options) {};

currency = new currency();
/**
 * @type {currency}
 */
N.prototype.currency = currency;

/**
 * @param {Array} dependencies list of module paths, either to file cabinet scripts or standard modules (via virtual path)
 * @param {Function} callback which executes once all dependencies are available
 *
 * @throws {SuiteScriptError} MODULE_DOES_NOT_EXIST if path is invalid
 *
 * @since 2015.2
 */
function define(dependencies, callback){}

/**
 * SuiteScript email common module
 *
 * @module N/email
 * @suiteScriptVersion 2.x
 *
 */
function email() {}
/**
 * Send email with bounce back
 *
 * @governance 20 units
 * @restriction Supported by all client and server side scirpts; The maximum number of total recipients (recipient + cc + bcc) allowed is 10
 *
 * RelatedRecords represents the NetSuite records to which an Email Message record should be attached.
 * @typedef {Object} RelatedRecords
 * @property {number} transactionId - Transaction record to attach Message record to.
 * @property {number} activityId - Activity record to attach Message record to.
 * @property {number} entityId - Entity record to attach Message record to.
 * @property {Object} customRecord - Custom record to attach Message record to.
 * @property {number} customRecord.id - Custom record instance ID to attach Message record to.
 * @property {string} customRecord.recordType - Custom Record record type to attach Message record to.
 *
 * @param {Object} options Email options
 * @param {number} options.author Sender of the email.
 * @param {number|string[]} options.recipients Recipients of the email, Interal ID or array of Email Addresses.
 * @param {string[]} options.cc CC (optional) recipients of the email, Interal ID or array of Email Addresses.
 * @param {string[]} options.bcc BCC (optional) recipients of the email as an EmailEntity, Interal ID or Email Address.
 * @param {string} options.subject Email subject.
 * @param {string} options.body Email Body/contents.
 * @param {string} options.replyTo (optional)
 * @param {file.File[]} options.attachments (optional) Email file attachments. Not supported in client side.
 * @param {RelatedRecords} options.relatedRecords (optional)
 * @param {boolean} options.isInternalOnly (optional) Do not show Message record when viewed from external Entity. Default to false
 * @returns {undefined}
 *
 */
email.prototype.send = function(options) {}
email.prototype.send = {
    /**
     * Send email with bounce back
     *
     * @governance 20 units
     * @restriction Supported by all client and server side scirpts; The maximum number of total recipients (recipient + cc + bcc) allowed is 10
     *
     * RelatedRecords represents the NetSuite records to which an Email Message record should be attached.
     * @typedef {Object} RelatedRecords
     * @property {number} transactionId - Transaction record to attach Message record to.
     * @property {number} activityId - Activity record to attach Message record to.
     * @property {number} entityId - Entity record to attach Message record to.
     * @property {Object} customRecord - Custom record to attach Message record to.
     * @property {number} customRecord.id - Custom record instance ID to attach Message record to.
     * @property {string} customRecord.recordType - Custom Record record type to attach Message record to.
     *
     * @param {Object} options Email options
     * @param {number} options.author Sender of the email.
     * @param {number|string[]} options.recipients Recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} options.cc CC (optional) recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} options.bcc BCC (optional) recipients of the email as an EmailEntity, Interal ID or Email Address.
     * @param {string} options.subject Email subject.
     * @param {string} options.body Email Body/contents.
     * @param {string} options.replyTo (optional)
     * @param {file.File[]} options.attachments (optional) Email file attachments. Not supported in client side.
     * @param {RelatedRecords} options.relatedRecords (optional)
     * @param {boolean} options.isInternalOnly (optional) Do not show Message record when viewed from external Entity. Default to false
     * @returns {undefined}
     *
     */
    promise: function (options) {}
}
// function sendEmail() {}
// sendEmail.prototype.promise = function() {};
// email.prototype.send = new sendEmail();

/**
 * Send email without bounce back
 *
 * @governance 10 units
 * @restriction Supported by all client and server side scirpts; The maximum number of total recipients (recipient + cc + bcc) allowed is 10
 *
 * RelatedRecords represents the NetSuite records to which an Email Message record should be attached.
 * @typedef {Object} RelatedRecords
 * @property {number} transactionId - Transaction record to attach Message record to.
 * @property {number} activityId - Activity record to attach Message record to.
 * @property {number} entityId - Entity record to attach Message record to.
 * @property {Object} customRecord - Custom record to attach Message record to.
 * @property {number} customRecord.id - Custom record instance ID to attach Message record to.
 * @property {string} customRecord.recordType - Custom Record record type to attach Message record to.
 *
 * @param {Object} options Email options
 * @param {number} options.author Sender of the email.
 * @param {number|string[]} options.recipients Recipients of the email, Interal ID or array of Email Addresses.
 * @param {string[]} options.cc CC (optional) recipients of the email, Interal ID or array of Email Addresses.
 * @param {string[]} options.bcc BCC (optional) recipients of the email as an EmailEntity, Interal ID or Email Address.
 * @param {string} options.subject Email subject.
 * @param {string} options.body Email Body/contents.
 * @param {string} options.replyTo (optional)
 * @param {file.File[]} options.attachments (optional) Email file attachments.  Not supported in client side.
 * @param {RelatedRecords} options.relatedRecords (optional)
 * @param {boolean} options.isInternalOnly (optional) Do not show Message record when viewed from external Entity. Default to false
 * @returns {undefined}
 *
 */
email.prototype.sendBulk = function(options) {}
email.prototype.sendBulk = {
    /**
     * Send email without bounce back
     *
     * @governance 10 units
     * @restriction Supported by all client and server side scirpts; The maximum number of total recipients (recipient + cc + bcc) allowed is 10
     *
     * RelatedRecords represents the NetSuite records to which an Email Message record should be attached.
     * @typedef {Object} RelatedRecords
     * @property {number} transactionId - Transaction record to attach Message record to.
     * @property {number} activityId - Activity record to attach Message record to.
     * @property {number} entityId - Entity record to attach Message record to.
     * @property {Object} customRecord - Custom record to attach Message record to.
     * @property {number} customRecord.id - Custom record instance ID to attach Message record to.
     * @property {string} customRecord.recordType - Custom Record record type to attach Message record to.
     *
     * @param {Object} options Email options
     * @param {number} options.author Sender of the email.
     * @param {number|string[]} options.recipients Recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} options.cc CC (optional) recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} options.bcc BCC (optional) recipients of the email as an EmailEntity, Interal ID or Email Address.
     * @param {string} options.subject Email subject.
     * @param {string} options.body Email Body/contents.
     * @param {string} options.replyTo (optional)
     * @param {file.File[]} options.attachments (optional) Email file attachments.  Not supported in client side.
     * @param {RelatedRecords} options.relatedRecords (optional)
     * @param {boolean} options.isInternalOnly (optional) Do not show Message record when viewed from external Entity. Default to false
     * @returns {undefined}
     *
     */
    promise: function (options) {}
}
// function sendBulkEmail() {}
// sendBulkEmail.prototype.promise = function() {};
// email.prototype.sendBulk = new sendBulkEmail();

/**
 * Send a single "on-demand" campaign email to a specified recipient and return a campaign response ID to track the email
 * @governance 10 units
 * @restriction Supported by all client and server side scirpts
 *
 * @param {Number} campaignEventId  The internal ID of the campaign event.
 * @param {Number} recipientId The internal ID of the recipient. Note that the recipient must have an email.
 * @returns {Number} A campaign response ID (tracking code) as an integer, or -1 if the send fails
 *
 */
email.prototype.sendCampaignEvent = function() {options}
email.prototype.sendCampaignEvent = {
    /**
     * Send a single "on-demand" campaign email to a specified recipient and return a campaign response ID to track the email
     * @governance 10 units
     * @restriction Supported by all client and server side scirpts
     *
     * @param {Number} campaignEventId  The internal ID of the campaign event.
     * @param {Number} recipientId The internal ID of the recipient. Note that the recipient must have an email.
     * @returns {Number} A campaign response ID (tracking code) as an integer, or -1 if the send fails
     *
     */
    promise: function (options) {}
}
// function sendCampaignEventEmail() {}
// sendCampaignEventEmail.prototype.promise = function() {};
// email.prototype.sendCampaignEvent = new sendCampaignEventEmail();

email = new email();
/**
 * @type {email}
 */
N.prototype.email = email;

/**
 * SuiteScript encode module
 *
 * @module N/encode
 * @NApiVersion 2.x
 *
 */
function encode() {}
/**
 * @param {Object} options
 * @param {string} options.string String to encode
 * @param {string} options.inputEncoding Encoding of the input string.
 * @param {string} options.outputEncoding Encoding to apply to the output string.
 * @return {string} Reencoded string
 *
 * @since 2015.1
 */
encode.prototype.convert = function(options) {};

/**
 * @enum
 */
function encodeEncoding() {
    this.UTF_8 = 'UTF_8';
    this.BASE_16 = 'BASE_16';
    this.BASE_32 = 'BASE_32';
    this.BASE_64 = 'BASE_64';
    this.BASE_64_URL_SAFE = 'BASE_64_URL_SAFE';
    this.HEX = 'HEX';
}
encode.prototype.Encoding = encodeEncoding;

encode = new encode();
/**
 * @type {encode}
 */
N.prototype.encode = encode;

/**
 * SuiteScript error module
 *
 * @module N/error
 * @NApiVersion 2.x
 *
 */
function error() {}
/**
 * Create a new Error object
 *
 * @param {Object} options
 * @param {string} options.name
 * @param {string} options.message
 * @param {string} options.notifyOff
 * @return {SuiteScriptError}
 */
error.prototype.create = function(options) {};

/**
 *
 * @protected
 * @constructor
 */
function SuiteScriptError() {

    /**
     * @name SuiteScriptError#id
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.id = undefined;
    /**
     * @name SuiteScriptError#name
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.name = undefined;
    /**
     * @name SuiteScriptError#message
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.message = undefined;
    /**
     * @name SuiteScriptError#stack
     * @type string[]
     * @readonly
     * @since 2015.2
     */
    this.stack = undefined;
    /**
     * @name SuiteScriptError#cause
     * @type Anything
     * @readonly
     * @since 2016.1
     */
    this.cause = undefined;}

/**
 *
 * @protected
 * @constructor
 */
function UserEventError() {

    /**
     * @name SuiteScriptError#recordId
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.recordId = undefined;
    /**
     * @name SuiteScriptError#eventType
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.eventType = undefined;}

error = new error();
/**
 * @type {error}
 */
N.prototype.error = error;

/**
 * SuiteScript file module
 *
 * @module N/file
 * @NApiVersion 2.x
 *
 */
function file() {}
/**
 * Instantiate a file object (specifying the name, type, and contents which are base-64 encoded for binary types.)
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.name file name
 * @param {string} options.fileType file type i.e. PLAINTEXT, HTMLDOC, PDF, WORD, see file.Type enum
 * @param {string} options.contents string containing file contents (must be base-64 encoded for binary types)
 * @param {number} options.folder (optional) the internal ID of the folder to be used when the file is saved
 * @return {File}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options is missing or one of mandatory options properties not set
 * @throws {SuiteScriptError} SSS_INVALID_TYPE_ARG if options.fileType is an invalid type
 *
 * @since 2015.2
 */
file.prototype.create = function(options) {};

/**
 * Load a file from the file cabinet (via its internal ID or path).
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {number|string} options.id internal ID or path to file in the file cabinet (i.e. /SuiteScript/foo.js)
 * @return {File}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if idOrPath parameter is missing
 * @throws {SuiteScriptError} RCRD_DSNT_EXIST attempt to load a file from non-existing path
 * @throws {SuiteScriptError} INSUFFICIENT_PERMISSION attempt to load a file with non-existing ID
 *
 * @since 2015.2
 */
file.prototype.load = function(options) {};

/**
 * Delete a file from the file cabinet.
 *
 * @governance 20 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {number|string} options.id internal ID of file to be deleted
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if id parameter is missing
 *
 * @since 2015.2
 */
file.prototype['delete'] = function(options) {};

/**
 * Enum for file types.
 * @enum {string}
 * @readonly
 */
file.prototype.Type = function() {}

function fileType() {
    this.AUTOCAD = 'AUTOCAD';
    this.BMPIMAGE = 'BMPIMAGE';
    this.CONFIG = 'CONFIG';
    this.CSV = 'CSV';
    this.EXCEL = 'EXCEL';
    this.FLASH = 'FLASH';
    this.FREEMARKER = 'FREEMARKER';
    this.GIFIMAGE = 'GIFIMAGE';
    this.GZIP = 'GZIP';
    this.HTMLDOC = 'HTMLDOC';
    this.ICON = 'ICON';
    this.JAVASCRIPT = 'JAVASCRIPT';
    this.JPGIMAGE = 'JPGIMAGE';
    this.JSON = 'JSON';
    this.MESSAGERFC = 'MESSAGERFC';
    this.MP3 = 'MP3';
    this.MPEGMOVIE = 'MPEGMOVIE';
    this.MSPROJECT = 'MSPROJECT';
    this.PDF = 'PDF';
    this.PJPGIMAGE = 'PJPGIMAGE';
    this.PLAINTEXT = 'PLAINTEXT';
    this.PNGIMAGE = 'PNGIMAGE';
    this.POSTSCRIPT = 'POSTSCRIPT';
    this.POWERPOINT = 'POWERPOINT';
    this.QUICKTIME = 'QUICKTIME';
    this.RTF = 'RTF';
    this.SMS = 'SMS';
    this.STYLESHEET = 'STYLESHEET';
    this.SVG = 'SVG';
    this.TAR = 'TAR';
    this.TIFFIMAGE = 'TIFFIMAGE';
    this.VISIO = 'VISIO';
    this.WEBAPPPAGE = 'WEBAPPPAGE';
    this.WEBAPPSCRIPT = 'WEBAPPSCRIPT';
    this.WORD = 'WORD';
    this.XMLDOC = 'XMLDOC';
    this.XSD = 'XSD';
    this.ZIP = 'ZIP';
}
file.prototype.Type = fileType;

/**
 * Enum for file encodings.
 * @enum {string}
 * @readonly
 */
function fileEncoding() {
    this.UTF_8 = 'UTF-8';
    this.WINDOWS_1252 = 'windows-1252';
    this.ISO_8859_1 = 'ISO-8859-1';
    this.GB18030 = 'GB18030';
    this.SHIFT_JIS = 'SHIFT_JIS';
    this.MAC_ROMAN = 'MacRoman';
    this.GB2312 = 'GB2312';
    this.BIG5 = 'Big5';
}
file.prototype.Encoding = fileEncoding;

/**
 * Return a new instance of file.File used for accessing and manipulating files in the file cabinet.
 *
 * @protected
 * @class File
 * @classdesc Encapsulation of files (media items) in the file cabinet.
 * @alias file.File
 *
 * @since 2015.2
 */
function File() {

    /**
     The id of the file (if stored in the FC).
     * @name File#id
     * @type number
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.id = undefined;
    /**
     The size of the file in bytes.
     * @name File#size
     * @type number
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.size = undefined;
    /**
     Return the URL of the file (if stored in the FC).
     * @name File#url
     * @type string
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.url = undefined;
    /**
     The path to the file in the file cabinet.
     * @name File#path
     * @type string
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.path = undefined;
    /**
     The type of the file.
     * @name File#fileType
     * @type string
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.fileType = undefined;
    /**
     * Indicates whether or not the file is text-based or binary.
     * @name File#isText
     * @type boolean
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.isText = undefined;
    /**
     * The character encoding for the file.
     * @name File#encoding
     * @type string
     */
    this.encoding = undefined;
    /**
     * The name of the file.
     * @name File#name
     * @type string
     */
    this.name = undefined;
    /**
     * The internal ID of the folder that this file is in.
     * @name File#folder
     * @type number
     */
    this.folder = undefined;
    /**
     * The file description.
     * @name File#description
     * @type string
     */
    this.description = undefined;
    /**
     * The file's inactive status.
     * @name File#isInactive
     * @type boolean
     */
    this.isInactive = undefined;
    /**
     * The file's "Available without Login" status.
     * @name File#isOnline
     * @type boolean
     */
    this.isOnline = undefined;
    /**
     * Return the value (Base64 encoded for binary types) of the file.
     * Note: Contents are lazy loaded and must be less than 10MB in size in order to access.
     *
     * @throws {SuiteScriptError} SSS_FILE_CONTENT_SIZE_EXCEEDED when trying to get contents of a file larger than 10MB
     * @returns {string}
     */
    this.getContents = function() {};

    /**
     * Add/update a file in the file cabinet based on the properties of this object.
     *
     * @governance 20 units
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT when the folder property is not set
     * @throws {SuiteScriptError} INVALID_KEY_OR_REF if trying to save to a non-existing folder
     *
     * @return {number} return internal ID of file in the file cabinet
     *
     * @since 2015.2
     */
    this.save = function() {};

    /**
     * Returns the object type name (file.File)
     *
     * @returns {string}
     */
    this.toString = function() {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {{type: string, id: *, name: *, description: *, path: *, url: *, folder: *, fileType: *, isText: *, size: *, encoding: *, isInactive: *, isOnline: *, contents: *}}
     */
    this.toJSON = function() {};
}

file = new file();
/**
 * @type {file}
 */
N.prototype.file = file;

/**
 * SuiteScript format module
 *
 * @module N/format
 * @NApiVersion 2.x
 *
 */
function format() {}
/**
 * Parse a value from the appropriate preference formatted-value to a raw value.
 *
 * @param {Object} options
 * @param {string} options.value the data you wish to parse
 * @param {string} options.type the field type i.e. DATE, CURRENCY, INTEGER
 * @param {string} options.timezone (optional & applicable to type DATETIME only) specifies which timezone the value is from.
 *                                  default is the timezone set in the user's preferences
 *
 * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if either value or type is missing
 *
 * @return {Date|string|number} If parseable, the parsed value. If not or given an invalid Type, the value passed in options.value
 *
 * @since 2015.2
 */
format.prototype.parse = function(options) {};

/**
 * Parse a value from the raw value to its appropriate preference formatted-value.
 *
 * @param {Object} options
 * @param {Date|string|number} options.value the data you wish to format
 * @param {string} options.type the field type i.e. DATE, CURRENCY, INTEGER
 * @param {string} options.timezone (optional & applicable to type DATETIME only) specifies which timezone to format to.
 *                                  default is the timezone set in the user's preferences
 *
 * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if either value or type is missing
 *
 * @return {string} If format-able, the formatted value. If not or given an invalid Type, the value passed in options.value
 *
 * @since 2015.2
 */
format.prototype.format = function(options) {};

/**
 * Enum for field types.
 * @enum {string}
 */
function formatType() {
    this.DATE = 'date';
    this.TIME = 'time';
    this.TIMETRACK = 'timetrack';
    this.TIMEOFDAY = 'timeofday';
    this.DATETIME = 'datetime';
    this.DATETIMETZ = 'datetimetz';
    this.INTEGER = 'integer';
    this.POSINTEGER = 'posinteger';
    this.PERCENT = 'percent';
    this.RATE = 'rate';
    this.RATEHIGHPRECISION = 'ratehighprecision';
    this.FLOAT = 'float';
    this.POSFLOAT = 'posfloat';
    this.NONNEGFLOAT = 'nonnegfloat';
    this.POSCURRENCY = 'poscurrency';
    this.NONNEGCURRENCY = 'nonnegcurrency';
    this.CURRENCY = 'currency';
    this.CURRENCY2 = 'currency2';
    this.URL = 'url';
    this.CHECKBOX = 'checkbox';
    this.CCNUMBER = 'ccnumber';
    this.PHONE = 'phone';
    this.FULLPHONE = 'fullphone';
    this.IDENTIFIER = 'identifier';
    this.FUNCTION = 'function';
    this.MMYYDATE = 'mmyydate';
    this.CCEXPDATE = 'ccexpdate';
    this.CCVALIDFROM = 'ccvalidfrom';
    this.COLOR = 'color';
}
format.prototype.Type = formatType;

/**
 * Enum for Time Zones.
 * @enum {string}
 */
function formatTimezone() {
    this.ETC_GMT_PLUS_12 = 'Etc/GMT+12';
    this.PACIFIC_SAMOA = 'Pacific/Samoa';
    this.PACIFIC_HONOLULU = 'Pacific/Honolulu';
    this.AMERICA_ANCHORAGE = 'America/Anchorage';
    this.AMERICA_LOS_ANGELES = 'America/Los_Angeles';
    this.AMERICA_TIJUANA = 'America/Tijuana';
    this.AMERICA_DENVER = 'America/Denver';
    this.AMERICA_PHOENIX = 'America/Phoenix';
    this.AMERICA_CHIHUAHUA = 'America/Chihuahua';
    this.AMERICA_CHICAGO = 'America/Chicago';
    this.AMERICA_REGINA = 'America/Regina';
    this.AMERICA_GUATEMALA = 'America/Guatemala';
    this.AMERICA_MEXICO_CITY = 'America/Mexico_City';
    this.AMERICA_NEW_YORK = 'America/New_York';
    this.US_EAST_INDIANA = 'US/East-Indiana';
    this.AMERICA_BOGOTA = 'America/Bogota';
    this.AMERICA_CARACAS = 'America/Caracas';
    this.AMERICA_HALIFAX = 'America/Halifax';
    this.AMERICA_LA_PAZ = 'America/La_Paz';
    this.AMERICA_MANAUS = 'America/Manaus';
    this.AMERICA_SANTIAGO = 'America/Santiago';
    this.AMERICA_ST_JOHNS = 'America/St_Johns';
    this.AMERICA_SAO_PAULO = 'America/Sao_Paulo';
    this.AMERICA_BUENOS_AIRES = 'America/Buenos_Aires';
    this.ETC_GMT_PLUS_3 = 'Etc/GMT+3';
    this.AMERICA_GODTHAB = 'America/Godthab';
    this.AMERICA_MONTEVIDEO = 'America/Montevideo';
    this.AMERICA_NORONHA = 'America/Noronha';
    this.ETC_GMT_PLUS_1 = 'Etc/GMT+1';
    this.ATLANTIC_AZORES = 'Atlantic/Azores';
    this.EUROPE_LONDON = 'Europe/London';
    this.GMT = 'GMT';
    this.ATLANTIC_REYKJAVIK = 'Atlantic/Reykjavik';
    this.EUROPE_WARSAW = 'Europe/Warsaw';
    this.EUROPE_PARIS = 'Europe/Paris';
    this.ETC_GMT_MINUS_1 = 'Etc/GMT-1';
    this.EUROPE_AMSTERDAM = 'Europe/Amsterdam';
    this.EUROPE_BUDAPEST = 'Europe/Budapest';
    this.AFRICA_CAIRO = 'Africa/Cairo';
    this.EUROPE_ISTANBUL = 'Europe/Istanbul';
    this.ASIA_JERUSALEM = 'Asia/Jerusalem';
    this.ASIA_AMMAN = 'Asia/Amman';
    this.ASIA_BEIRUT = 'Asia/Beirut';
    this.AFRICA_JOHANNESBURG = 'Africa/Johannesburg';
    this.EUROPE_KIEV = 'Europe/Kiev';
    this.EUROPE_MINSK = 'Europe/Minsk';
    this.AFRICA_WINDHOEK = 'Africa/Windhoek';
    this.ASIA_RIYADH = 'Asia/Riyadh';
    this.EUROPE_MOSCOW = 'Europe/Moscow';
    this.ASIA_BAGHDAD = 'Asia/Baghdad';
    this.AFRICA_NAIROBI = 'Africa/Nairobi';
    this.ASIA_TEHRAN = 'Asia/Tehran';
    this.ASIA_MUSCAT = 'Asia/Muscat';
    this.ASIA_BAKU = 'Asia/Baku';
    this.ASIA_YEREVAN = 'Asia/Yerevan';
    this.ETC_GMT_MINUS_3 = 'Etc/GMT-3';
    this.ASIA_KABUL = 'Asia/Kabul';
    this.ASIA_KARACHI = 'Asia/Karachi';
    this.ASIA_YEKATERINBURG = 'Asia/Yekaterinburg';
    this.ASIA_TASHKENT = 'Asia/Tashkent';
    this.ASIA_CALCUTTA = 'Asia/Calcutta';
    this.ASIA_KATMANDU = 'Asia/Katmandu';
    this.ASIA_ALMATY = 'Asia/Almaty';
    this.ASIA_DHAKA = 'Asia/Dhaka';
    this.ASIA_RANGOON = 'Asia/Rangoon';
    this.ASIA_BANGKOK = 'Asia/Bangkok';
    this.ASIA_KRASNOYARSK = 'Asia/Krasnoyarsk';
    this.ASIA_HONG_KONG = 'Asia/Hong_Kong';
    this.ASIA_KUALA_LUMPUR = 'Asia/Kuala_Lumpur';
    this.ASIA_TAIPEI = 'Asia/Taipei';
    this.AUSTRALIA_PERTH = 'Australia/Perth';
    this.ASIA_IRKUTSK = 'Asia/Irkutsk';
    this.ASIA_MANILA = 'Asia/Manila';
    this.ASIA_SEOUL = 'Asia/Seoul';
    this.ASIA_TOKYO = 'Asia/Tokyo';
    this.ASIA_YAKUTSK = 'Asia/Yakutsk';
    this.AUSTRALIA_DARWIN = 'Australia/Darwin';
    this.AUSTRALIA_ADELAIDE = 'Australia/Adelaide';
    this.AUSTRALIA_SYDNEY = 'Australia/Sydney';
    this.AUSTRALIA_BRISBANE = 'Australia/Brisbane';
    this.AUSTRALIA_HOBART = 'Australia/Hobart';
    this.PACIFIC_GUAM = 'Pacific/Guam';
    this.ASIA_VLADIVOSTOK = 'Asia/Vladivostok';
    this.ASIA_MAGADAN = 'Asia/Magadan';
    this.PACIFIC_KWAJALEIN = 'Pacific/Kwajalein';
    this.PACIFIC_AUCKLAND = 'Pacific/Auckland';
    this.PACIFIC_TONGATAPU = 'Pacific/Tongatapu';
}
format.prototype.Timezone = formatTimezone;

format = new format();
/**
 * @type {format}
 */
N.prototype.format = format;

/**
 * SuiteScript module
 *
 * @module N/http
 * @suiteScriptVersion 2.x
 *
 */
function http() {}
/**
 * Enum describing available HTTP methods.
 * @enum
 * @readonly
 */
function httpMethod() {
    this.GET = 'GET';
    this.POST = 'POST';
    this.PUT = 'PUT';
    this.DELETE = 'DELETE';
    this.HEAD = 'HEAD';
}
http.prototype.Method = httpMethod;

/**
 * Enum describing available Commerce API Cache Durations.
 * @enum
 * @readonly
 */
function httpCacheDuration() {
    this.UNIQUE = 'UNIQUE';
    this.SHORT = 'SHORT';
    this.MEDIUM = 'MEDIUM';
    this.LONG = 'LONG';
}
http.prototype.CacheDuration = httpCacheDuration;

/**
 * Send a HTTP GET request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} config
 * @param {string} config.url the HTTP URL being requested
 * @param {Object} config.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
http.prototype['get'] = function(config) {}
http.prototype['get'] = {
    /**
     * Send a HTTP GET request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} config
     * @param {string} config.url the HTTP URL being requested
     * @param {Object} config.headers (optional) request HTTP headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise: function (config) {}
}
// function getHttp() {}
// getHttp.prototype.promise = function() {};
// http.prototype['get'] = new getHttp();

/**
 * Send a HTTP POST request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} config
 * @param {string} config.url the HTTP URL being requested
 * @param {string|Object} config.body POST data
 * @param {Object} config.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
http.prototype.post = function(config) {}
http.prototype.post = {
    /**
     * Send a HTTP POST request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} config
     * @param {string} config.url the HTTP URL being requested
     * @param {string|Object} config.body POST data
     * @param {Object} config.headers (optional) request HTTP headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise: function (config) {}
}
// function postHttp() {}
// postHttp.prototype.promise = function() {};
// http.prototype.post = new postHttp();

/**
 * Send a HTTP PUT request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} config
 * @param {string} config.url the HTTP URL being requested
 * @param {string|Object} config.body PUT data
 * @param {Object} config.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
http.prototype.put = function(config) {}
http.prototype.put = {
    /**
     * Send a HTTP PUT request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} config
     * @param {string} config.url the HTTP URL being requested
     * @param {string|Object} config.body PUT data
     * @param {Object} config.headers (optional) request HTTP headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promie: function (config) {}
}
// function putHttp() {}
// putHttp.prototype.promise = function() {};
// http.prototype.put = new putHttp();

/**
 * Send a HTTP DELETE request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} config
 * @param {string} config.url the HTTP URL being requested
 * @param {Object} config.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
http.prototype['delete'] = function(config) {}
http.prototype['delete'] = {
    /**
     * Send a HTTP DELETE request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} config
     * @param {string} config.url the HTTP URL being requested
     * @param {Object} config.headers (optional) request HTTP headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise: function (config) {}
}
// function deleteHttp() {}
// deleteHttp.prototype.promise = function() {};
// http.prototype['delete'] = new deleteHttp();

/**
 * Send a HTTP request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} config
 * @param {http.Method} config.method HTTP method of the request
 * @param {string} config.url the HTTP URL being requested
 * @param {string|Object} config.body POST data; must be present if and only if method is POST
 * @param {Object} config.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
http.prototype.request = function(config) {}
http.prototype.request = {
    /**
     * Send a HTTP request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} config
     * @param {http.Method} config.method HTTP method of the request
     * @param {string} config.url the HTTP URL being requested
     * @param {string|Object} config.body POST data; must be present if and only if method is POST
     * @param {Object} config.headers (optional) request HTTP headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise: function (config) {

    }
}
// function requestHttp() {}
// requestHttp.prototype.promise = function() {};
// http.prototype.request = new requestHttp();

/**
 * Return a new instance of ClientResponse used to store the result of a HTTP request.
 *
 * @protected
 * @classDescription Encapsulation of the response returned by a web server as a response to our HTTP request.
 * @return {http.ClientResponse}
 * @constructor
 *
 * @since 2015.2
 */
function ClientResponse() {

    /**
     * Response code.
     * @name ClientResponse#code
     * @type number
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.code = undefined;
    /**
     * Response headers.
     * @name ClientResponse#headers
     * @type Object
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.headers = undefined;
    /**
     * Response body.
     * @name ClientResponse#body
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.body = undefined;
    /**
     * Returns the object type name (http.ClientResponse)
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {{type: string, code: *, headers: *, body: *}}
     */
    this.toJSON = function(options) {};
}

http = new http();
/**
 * @type {http}
 */
N.prototype.http = http;

/**
 * SuiteScript https module (Server Side)
 *
 * @module N/https
 * @NApiVersion 2.x
 *
 */
function https() {}
/**
 * Enum for HTTP methods.
 * @enum {string}
 */
function httpsMethod() {
    this.GET = 'GET';
    this.POST = 'POST';
    this.PUT = 'PUT';
    this.DELETE = 'DELETE';
    this.HEAD = 'HEAD';
}
https.prototype.Method = httpsMethod;

/**
 * Enum describing available Commerce API Cache Durations.
 * @enum {string}
 * @readonly
 */
function httpsCacheDuration() {
    this.UNIQUE = 'UNIQUE';
    this.SHORT = 'SHORT';
    this.MEDIUM = 'MEDIUM';
    this.LONG = 'LONG';
}
https.prototype.CacheDuration = httpsCacheDuration;

/**
 * Send a HTTPS GET request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {Object} options.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} UNKNOWN_PARAM if an unknown parameter is present in options
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
https.prototype['get'] = function(options) {};

/**
 * Send a HTTPS POST request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {string|Object} options.body POST data
 * @param {Object} options.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} UNKNOWN_PARAM if an unknown parameter is present in options
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
https.post = {};
https.prototype.post = function(options) {};

/**
 * Send a HTTPS PUT request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {string|Object} options.body PUT data
 * @param {Object} options.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} UNKNOWN_PARAM if an unknown parameter is present in options
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
https.prototype.put = function(options) {};

/**
 * Send a HTTPS DELETE request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {Object} options.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} UNKNOWN_PARAM if an unknown parameter is present in options
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
https.prototype['delete'] = function(options) {};

/**
 * Send a HTTP request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.method HTTP method of the request
 * @param {string} options.url the HTTP URL being requested
 * @param {string|Object} [options.body] POST data; must be present if and only if method is POST
 * @param {Object} [options.headers] (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} UNKNOWN_PARAM if an unknown parameter is present in options
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
https.prototype.request = function(options) {};

/**
 *
 * @param {Object} options
 * @param {string} options.guid
 * @param {string} options.encoding
 * @return {SecretKey}
 */
https.prototype.createSecretKey = function(options) {};

/**
 *
 * @param {Object} options
 * @param {string} options.input
 * @param {string} [options.inputEncoding] (Optional) defaults to UTF_8
 * @returns {SecureString}
 */
https.prototype.createSecureString = function(options) {};

/**
 * @enum
 */
function httpsEncoding() {
    this.UTF_8 = 'UTF_8';
    this.BASE_16 = 'BASE_16';
    this.BASE_32 = 'BASE_32';
    this.BASE_64 = 'BASE_64';
    this.BASE_64_URL_SAFE = 'BASE_64_URL_SAFE';
    this.HEX = 'HEX';
}
https.prototype.Encoding = httpsEncoding;

/**
 * @enum
 */
function httpsHashAlg() {
    this.SHA1 = 'SHA1';
    this.SHA256 = 'SHA256';
    this.SHA512 = 'SHA512';
    this.MD5 = 'MD5';
}
https.prototype.HashAlg = httpsHashAlg;

/**
 *
 * @protected
 * @constructor
 */
function SecureString() {

    /**
     *
     * @param {Object} options
     * @param {string} options.toEncoding
     * @returns {SecureString}
     */
    this.convertEncoding = function(options) {};

    /**
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {string} options.inputEncoding
     * @returns {SecureString}
     */
    this.appendString = function(options) {};

    /**
     *
     * @param {Object} options
     * @param {SecureString} options.secureString
     * @returns {SecureString}
     */
    this.appendSecureString = function(options) {};

    /**
     *
     * @param {Object} options
     * @param {string} options.algorithm
     * @returns {SecureString}
     */
    this.hash = function(options) {};

    /**
     *
     * @param {Object}options
     * @param {string} options.algorithm
     * @param {SecretKey} options.key
     * @returns {SecureString}
     */
    this.hmac = function(options) {};
}

/**
 * Return a new instance of ClientResponse used to store the result of a HTTP request.
 *
 * @protected
 * @classDescription Encapsulation of the response returned by a web server as a response to our HTTP request.
 * @return {http.ClientResponse}
 * @constructor
 *
 * @since 2015.2
 */
function ClientResponse() {

    /**
     * Response code.
     * @name ClientResponse#code
     * @type number
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.code = undefined;
    /**
     * Response headers.
     * @name ClientResponse#headers
     * @type Object
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.headers = undefined;
    /**
     * Response body.
     * @name ClientResponse#body
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.body = undefined;
    /**
     * Returns the object type name (http.ClientResponse)
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {{type: string, code: *, headers: *, body: *}}
     */
    this.toJSON = function(options) {};
}

/**
 * Returns a new instance of SecretKey used for hmac, cipher and decipher
 *
 * @protected
 * @class
 * @classdesc
 * @param guid
 * @param encoding
 * @return {crypto.SecretKey}
 *
 * @constructor
 */
function SecretKey() {

    /**
     * @type string
     */
    this.guid = undefined;
    /**
     * @type string
     */
    this.encoding = undefined;}

https = new https();
/**
 * @type {https}
 */
N.prototype.https = https;/**
 * SuiteScript log global object
 * @namespace
 * @global
 * @name log
 * @type {Object}
 */
var log = {
        /**
         * Log a debug level message
         * @param {Object|number|Date|string} options
         * @param {number|Date|string|Array|Object} details
         * @param {*} options.title     The title of the message
         * @param {*} [options.details] The details of the message
         */
        debug: function (options, details){},

        /**
         * Log an audit level message
         * @param {Object|number|Date|string} options
         * @param {number|Date|string|Array|Object} details
         * @param {*} options.title     The title of the message
         * @param {*} [options.details] The details of the message
         */
        audit: function (options, details){},

        /**
         * Log an error level message
         * @param {Object|number|Date|string} options
         * @param {number|Date|string|Array|Object} details
         * @param {*} options.title     The title of the message
         * @param {*} [options.details] The details of the message
         */
        error: function (options, details){},

        /**
         * Log an emergency level message
         * @param {Object|number|Date|string} options
         * @param {number|Date|string|Array|Object} details
         * @param {*} options.title     The title of the message
         * @param {*} [options.details] The details of the message
         */
        emergency: function (options, details){}
    };

/**
 * SuiteScript Map and Reduce Context module
 *
 * @module N/mapReduceContext
 * @NApiVersion 2.x
 *
 */
function mapReduceContext() {}
/**
 * Return a new instance of mapreduce.MapContext
 * @class
 * @classdesc Contains the key/value pairs to process through the map stage.
 * @return {mapreduce.MapContext}
 * @constructor
 *
 * @since 2015.2
 */
function MapContext() {

    /**
     * @name MapContext#isRestarted
     * @type {boolean} isRestarted - Indicates whether the map(mapContext) function was invoked again
     * @readonly
     */
    this.isRestarted = undefined;
    /**
     * @name MapContext#key
     * @type {string} key - The key to be processed through the map stage
     * @readonly
     */
    this.key = undefined;
    /**
     * @name MapContext#value
     * @type {string} value - The value to be processed through the map stage.
     * @readonly
     */
    this.value = undefined;
    /**
     * Writes the key value pairs
     *
     * @param {string} key - The key to write
     * @param {Object} value - The value to write
     */
    this.write = function(options) {};

    /**
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     */
    this.toJSON = function(options) {};
}

/**
 * Return a new instance of mapreduce.ReduceContext
 * @class
 * @classdesc Contains the key/values groups to process through the reduce stage.
 * @return {mapreduce.ReduceContext}
 * @constructor
 *
 * @since 2015.2
 */
function ReduceContext() {

    /**
     * @name ReduceContext#isRestarted
     * @type {boolean} isRestarted - Indicates whether the Rap(reduceContext) function was invoked again
     * @readonly
     */
    this.isRestarted = undefined;
    /**
     * @name ReduceContext#key
     * @type {string} key - When the map/reduce process includes a map stage, the key is derived from the key written by MapContext.write(key,value).
     When the map stage is skipped, the key depends on the input type:
     * @readonly
     */
    this.key = undefined;
    /**
     * @name ReduceContext#value
     * @type {string} values - When the map/reduce process includes a map stage, the values are derived from the values written by MapContext.write(key,value).
     When the map stage is skipped, the values are already grouped by key into a list, and the value depends on the input type:
     * @readonly
     */
    this.values = undefined;
    /**
     * Writes the key/values groups
     *
     * @param {string} key - The key to write
     * @param {Object} value - The value to write
     */
    this.write = function(options) {};

    /**
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     */
    this.toJSON = function(options) {};
}

mapReduceContext = new mapReduceContext();
/**
 * @type {mapReduceContext}
 */
N.prototype.mapReduceContext = mapReduceContext;

/**
 * SuiteScript mapReduceSummary module
 *
 * @module N/mapReduceSummary
 * @NApiVersion 2.x
 *
 */
function mapReduceSummary() {}
/**
 * Return a new instance of mapreduce.Summary
 * @class
 * @classdesc Used for accessing Map/Reduce job output and metadata.
 * @return {Summary}
 * @constructor
 *
 * @since 2015.2
 */
function Summary() {

    /**
     * @name Summary#dateCreated
     * @type {Date} dateCreated - Time M/R job began running.
     * @readonly
     */
    this.dateCreated = undefined;
    /**
     * @name Summary#seconds
     * @type {Number} seconds - Total seconds elapsed while running.
     * @readonly
     */
    this.seconds = undefined;
    /**
     * @name Summary#usage
     * @type {Number} usage - Total usage points consumed while running.
     * @readonly
     */
    this.usage = undefined;
    /**
     * @name Summary#concurrency
     * @type {Number} concurrency - Maximum number of queues utilized at the same time while running.
     * @readonly
     */
    this.concurrency = undefined;
    /**
     * @name Summary#yields
     * @type {Number} yields - Total number of times yielding the queue while running.
     * @readonly
     */
    this.yields = undefined;
    /**
     * @name Summary#output#iterator()
     * @type {Iterator} iterator - Iterator which provides keys and values written as output during the REDUCE phase.
     *      <pre> summary.output.iterator().each(function(key, value){...}); </pre>
     * @readonly
     */
    this.output = undefined;
    /**
     * @name Summary#inputSummary
     * @type {InputSummary} inputSummary - Stats about the INPUT stage.
     */
    this.inputSummary = undefined;
    /**
     * @name Summary#mapSummary
     * @type {mapSummary} mapSummary - Stats about the MAP stage.
     */
    this.mapSummary = undefined;
    /**
     * @name Summary#reduceSummary
     * @type {reduceSummary} reduceSummary - Stats about the REDUCE stage.
     */
    this.reduceSummary = undefined;
    /**
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     */
    this.toJSON = function(options) {};
}

/**
 * Return a new instance of mapreduce.InputSummary
 * @class
 * @classdesc Used for accessing Map/Reduce INPUT stage metadata.
 * @return {InputSummary}
 * @constructor
 *
 * @since 2015.2
 */
function InputSummary() {

    /**
     * @name InputSummary#dateCreated
     * @type {Date} dateCreated - Time M/R INPUT stage began running.
     * @readonly
     */
    this.dateCreated = undefined;
    /**
     * @name InputSummary#seconds
     * @type {Number} seconds - Total seconds elapsed while during the INPUT stage.
     * @readonly
     */
    this.seconds = undefined;
    /**
     * @name InputSummary#usage
     * @type {Number} usage - Total usage points consumed during the INPUT stage.
     * @readonly
     */
    this.usage = undefined;
    /**
     * @name InputSummary#error
     *  @type {SuiteScriptError} error - Serialized error is thrown out of getInputData() - if applicable
     *      <pre> var inputError = summary.input.error; </pre>
     * @readonly
     */
    this.error = undefined;
    /**
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     */
    this.toJSON = function(options) {};
}

/**
 * Return a new instance of mapreduce.MapSummary
 * @class
 * @classdesc Used for accessing Map/Reduce MAP stage metadata.
 * @return {MapSummary}
 * @constructor
 *
 * @since 2015.2
 */
function MapSummary() {

    /**
     * @name MapSummary#dateCreated
     * @type {Date} dateCreated - Time MAP stage began running.
     * @readonly
     */
    this.dateCreated = undefined;
    /**
     * @name MapSummary#seconds
     * @type {Number} seconds - Total seconds elapsed while running MAP stage.
     * @readonly
     */
    this.seconds = undefined;
    /**
     * @name MapSummary#usage
     * @type {Number} usage - Total usage points consumed while running MAP stage.
     * @readonly
     */
    this.usage = undefined;
    /**
     * @name MapSummary#concurrency
     * @type {Number} concurrency - Maximum number of queues utilized at the same time while running MAP stage.
     * @readonly
     */
    this.concurrency = undefined;
    /**
     * @name MapSummary#yields
     * @type {Number} yields - Total number of times yielding the queue while running MAP stage.
     * @readonly
     */
    this.yields = undefined;
    /**
     * @name MapSummary#keys#iterator
     * @type {Iterator} iterator - Iterator which provides input keys processed during the MAP phase.
     *      <pre> summary.map.keys.iterator.each(function(key){...}); </pre>
     * @readonly
     */
    this.keys = undefined;
    /**
     * @name MapSummary#errors#iterator
     * @type {Iterator} iterator - Iterator which provides errors thrown during the MAP phase.
     *      <pre> summary.map.errors.each(function(key, value){...}); </pre>
     * @readonly
     */
    this.errors = undefined;
    /**
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     */
    this.toJSON = function(options) {};
}

/**
 * Return a new instance of mapreduce.ReduceSummary
 * @class
 * @classdesc Used for accessing Map/Reduce REDUCE stage metadata.
 * @return {ReduceSummary}
 * @constructor
 *
 * @since 2015.2
 */
function ReduceSummary() {

    /**
     * @name ReduceSummary#dateCreated
     * @type {Date} dateCreated - Time REDUCE stage began running.
     * @readonly
     */
    this.dateCreated = undefined;
    /**
     * @name ReduceSummary#seconds
     * @type {Number} seconds - Total seconds elapsed while running REDUCE stage.
     * @readonly
     */
    this.seconds = undefined;
    /**
     * @name ReduceSummary#usage
     * @type {Number} usage - Total usage points consumed while running REDUCE stage.
     * @readonly
     */
    this.usage = undefined;
    /**
     * @name ReduceSummary#concurrency
     * @type {Number} concurrency - Maximum number of queues utilized at the same time while running REDUCE stage.
     * @readonly
     */
    this.concurrency = undefined;
    /**
     * @name ReduceSummary#yields
     * @type {Number} yields - Total number of times yielding the queue while running REDUCE stage.
     * @readonly
     */
    this.yields = undefined;
    /**
     * @name ReduceSummary#keys#iterator
     * @type {Iterator} iterator - Iterator which provides input keys processed during the REDUCE phase.
     *      <pre> summary.reduce.iterator.keys.each(function(key){...}); </pre>
     * @readonly
     */
    this.keys = undefined;
    /**
     * @name ReduceSummary#errors#iterator
     * @type {Iterator} iterator - Iterator which provides errors thrown during the REDUCE phase.
     *      <pre> summary.reduce.errors.iterator().each(function(key, value){...}); </pre>
     * @readonly
     */
    this.errors = undefined;
    /**
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     */
    this.toJSON = function(options) {};
}

mapReduceSummary = new mapReduceSummary();
/**
 * @type {mapReduceSummary}
 */
N.prototype.mapReduceSummary = mapReduceSummary;

/**
 * SuiteScript plugin module
 *
 * @module N/plugin
 * @NApiVersion 2.x
 *
 */
function plugin() {}
/**
 * Returns the script IDs of implementations of the given custom plugin type. If there's no custom plugin type
 * with the given script ID available for the executing script, an empty list is returned.
 *
 * @param {Object} options  options object
 * @param {string} options.type  script ID of the custom plugin type
 * @param {boolean} options.includeDefault (optional)  true if default implementation is to be included in the list; default value is true
 * @return {string[]} list of scriptIDs of the custom plugin implementations
 */
plugin.prototype.findImplementations = function(options) {};

/**
 * Instantiates an implementation of the given custom plugin type. If no implementation ID is explicitly given then
 * the implementation which is currently selected in the UI (Manage Plug-ins page) will be returned.
 *
 * @param {Object} options  options object
 * @param {string} options.type  script ID of the custom plugin type
 * @param {string} options.implementation (optional)  script ID of the custom plugin implementation
 * @return {Object} an object implementing the custom plugin type
 */
plugin.prototype.loadImplementation = function(options) {};

plugin = new plugin();
/**
 * @type {plugin}
 */
N.prototype.plugin = plugin;

/**
 * SuiteScript portlet module
 *
 * @module N/portlet
 * @NApiVersion 2.x
 *
 */
function portlet() {}
/**
 * Causes a FORM type portlet to immediately refresh.
 *
 * @throws {SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if portlet is not FORM type
 *
 * @since 2016.1
 */
portlet.prototype.refresh = function(options) {};

/**
 * Causes a FORM type portlet to be immediately resized.
 *
 * @throws {SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if portlet is not FORM type
 *
 * @since 2016.1
 */
portlet.prototype.resize = function(options) {};

portlet = new portlet();
/**
 * @type {portlet}
 */
N.prototype.portlet = portlet;

/**
 * SuiteScript module
 *
 * @module N/portletContext
 * @NApiVersion 2.x
 *
 */
function portletContext() {}
/**
 * Scriptable Portlet.
 * @param delegate
 * @protected
 * @constructor
 */
function Portlet() {

    /**
     *
     * @name Portlet#title
     * @type {String}
     */
    this.title = undefined;
    /**
     *
     * @name Portlet#html
     * @type {String}
     */
    this.html = undefined;
    /**
     * file Id for Portlet form script
     * @name Portlet#clientScriptFileId
     * @type {Number}
     */
    this.clientScriptFileId = undefined;
    /**
     * Add a Column to the Portlete
     * @param {Object} options
     * @param {string} options.id
     * @param {string} options.type
     * @param {string} options.label
     * @param {string} [options.align]
     * @return {PortletColumn}
     */
    this.addColumn = function(options) {};

    /**
     * Add an Edit or Edit/View column
     * @param {Object} options
     * @param {string} options.column
     * @param {string} [options.showView]
     * @param {string} [options.showHrefCol]
     * @return {PortletColumn}
     */
    this.addEditColumn = function(options) {};

    /**
     * Add a field to the form
     * @param {Object} options
     * @param {string} options.id
     * @param {string} options.type
     * @param {string} [options.label]
     * @param {string} [options.source]
     * @param {string} [options.tab]
     * @returns {Field}
     */
    this.addField = function(options) {};

    /**
     * Add a field to the form
     * @param {Object} options
     * @param {string} options.text
     * @param {string} [options.url]
     * @param {number} [options.align]
     * @returns {Portlet}
     */
    this.addLine = function(options) {};

    /**
     * Add a row (Array of name/value pairs or search.Result)
     * @param {Object} options
     * @param {string} options.row
     * @return {Portlet}
     */
    this.addRow = function(options) {};

    /**
     * Add a field to the form
     * @param {Object} options
     * @param {string} options.url
     * @param {string} [options.label]
     * @param {string} [options.target]
     * @returns {Button}
     */
    this.setSubmitButton = function(options) {};

    /**
     * Adds multiple rows (Array of search.Result or name/value pair Arrays)
     * @param {Object} options
     * @param {string} options.rows
     * @return {Portlet}
     */
    this.addRows = function(options) {};
}

portletContext = new portletContext();
/**
 * @type {portletContext}
 */
N.prototype.portletContext = portletContext;

/**
 * SuiteScript record common module
 *
 * @module N/record
 * @suiteScriptVersion 2.x
 *
 */
function record() {}
/**
 * Create a new record object based on provided type
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {boolean} [options.isDynamic=false] record is dynamic
 * @param {Object} [options.defaultValues={}] record default values
 * @return {Record}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing
 *
 * @since 2015.2
 */
record.prototype.create = function(options) {};
record.prototype.create = {
    /**
     * Create a new record object based on provided type
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {string} options.type record type
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Record}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing
     *
     * @since 2015.2
     */
    promise: function (options) {}
};
// function createRecord() {}
// createRecord.prototype.promise = function() {};
// record.prototype.create = new createRecord();

/**
 * Load an existing nlobjRecord from the database based on provided type, id
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {number|string} options.id record id
 * @param {boolean} [options.isDynamic=false] record is dynamic
 * @param {Object} [options.defaultValues={}] record default values
 * @return {Record}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
 *
 * @since 2015.2
 */
record.prototype.load = function (options) {}
record.prototype.load = {
    /**
     * Load an existing nlobjRecord from the database based on provided type, id
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {string} options.type record type
     * @param {number|string} options.id record id
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Record}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    promise: function (options) {}
}
// function loadRecord(options) {}
// loadRecord.prototype.promise = function(options) {};
// record.prototype.load = new loadRecord(options);
// record.prototype.load = function(options) {}

/**
 * Copy a record object based on provided type, id
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {number|string} options.id record id
 * @param {boolean} [options.isDynamic=false] record is dynamic
 * @param {Object} [options.defaultValues={}] record default values
 * @return {Record}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
 *
 * @since 2015.2
 */
record.prototype.copy = function(options) {}
record.prototype.copy = {
    /**
     * Copy a record object based on provided type, id
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {string} options.type record type
     * @param {number|string} options.id record id
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Record}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    promise: function (options) {}
}
// function copyRecord() {}
// copyRecord.prototype.promise = function() {};
// record.prototype.copy = new copyRecord();

/**
 * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {Object} options
 * @param {string} options.fromType record type to be transformed from
 * @param {number|string} options.fromId record id to be transformed from
 * @param {string} options.toType record type to be transformed to
 * @param {boolean} [options.isDynamic=false] record is dynamic
 * @param {Object} [options.defaultValues={}] transformed record's default values
 * @return {Record}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
 *
 * @since 2015.2
 */
record.prototype.transform = function(options) {}
record.prototype.transform = {
    /**
     * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {string} options.fromType record type to be transformed from
     * @param {number|string} options.fromId record id to be transformed from
     * @param {string} options.toType record type to be transformed to
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] transformed record's default values
     * @return {Record}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    promise: function (options) {}
}
// function transformRecord() {}
// transformRecord.prototype.promise = function() {};
// record.prototype.transform = new transformRecord();

/**
 * Delete a record object based on provided type, id and return the id of deleted record
 *
 * @governance 20 units for transactions, 4 for custom records, 10 for all other records
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {number|string} options.id record id
 * @return {number} recordId
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
 *
 * @since 2015.2
 */
record.prototype['delete'] = function(options) {}
record.prototype['delete'] = {
    /**
     * Delete a record object based on provided type, id and return the id of deleted record
     *
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {string} options.type record type
     * @param {number|string} options.id record id
     * @return {number} recordId
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     *
     * @since 2015.2
     */
    promise: function (options) {}
}
// function deleteRecord() {}
// deleteRecord.prototype.promise = function() {};
// record.prototype['delete'] = new deleteRecord();

/**
 * commit record field updates to the system
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {number|string} options.id record id
 * @param {Object} options.values field and value mapping to be submitted
 * @param {Object} [options.options] additonal flags for submission
 * @param {boolean} [options.options.enablesourcing=true] enable sourcing during record update
 * @param {boolean} [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
 *
 * @return {number} id of submitted record
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
 *
 * @since 2015.2
 */
record.prototype.submitFields = function(options) {}
record.prototype.submitFields = {
    /**
     * commit record field updates to the system
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
     *
     * @param {Object} options
     * @param {string} options.type record type
     * @param {number|string} options.id record id
     * @param {Object} options.values field and value mapping to be submitted
     * @param {Object} [options.options] additonal flags for submission
     * @param {boolean} [options.options.enablesourcing=true] enable sourcing during record update
     * @param {boolean} [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     *
     * @return {number} id of submitted record
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     *
     * @since 2015.2
     */
    promise: function (options) {}
}
// function submitFieldsRecord() {}
// submitFieldsRecord.prototype.promise = function() {};
// record.prototype.submitFields = new submitFieldsRecord();

/**
 * attach record to another record
 *
 * @governance 10 units
 *
 * @param {Object} options
 * @param {Object} options.record record to be attached
 * @param {Object} options.record.type the type of the record to be attached
 * @param {number|string} options.record.id the id of the record to be attached
 * @param {Object} options.to the destination record where options.record will be attached to
 * @param {string} options.to.type the type of the destination
 * @param {number|string} options.to.id the id of the destination
 * @param {Object} [options.attributes=null] name/value pairs containing attributes
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or to (and their type and id) are missing
 *
 * @since 2015.2
 */
record.prototype.attach = function(options) {}
record.prototype.attach = {
    /**
     * attach record to another record
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {Object} options.record record to be attached
     * @param {Object} options.record.type the type of the record to be attached
     * @param {number|string} options.record.id the id of the record to be attached
     * @param {Object} options.to the destination record where options.record will be attached to
     * @param {string} options.to.type the type of the destination
     * @param {number|string} options.to.id the id of the destination
     * @param {Object} [options.attributes=null] name/value pairs containing attributes
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or to (and their type and id) are missing
     *
     * @since 2015.2
     */
    promise: function (options) {}
}
// function attachRecord() {}
// attachRecord.prototype.promise = function() {};
// record.prototype.attach = new attachRecord();

/**
 * detach record from another record
 *
 * @governance 10 units
 *
 * @param {Object} options
 * @param {Object} options.record record to be detached
 * @param {Object} options.record.type the type of the record to be detached
 * @param {number|string} options.record.id the id of the record to be detached
 * @param {Object} options.from the destination record where options.record will be detached from
 * @param {string} options.from.type the type of the destination
 * @param {number|string} options.from.id the id of the destination
 * @param {Object} [options.attributes=null] name/value pairs containing attributes
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or from (and their type and id) are missing
 *
 * @since 2015.2
 */
record.prototype.detach = function(options) {}
record.prototype.detach = {
    /**
     * detach record from another record
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {Object} options.record record to be detached
     * @param {Object} options.record.type the type of the record to be detached
     * @param {number|string} options.record.id the id of the record to be detached
     * @param {Object} options.from the destination record where options.record will be detached from
     * @param {string} options.from.type the type of the destination
     * @param {number|string} options.from.id the id of the destination
     * @param {Object} [options.attributes=null] name/value pairs containing attributes
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or from (and their type and id) are missing
     *
     * @since 2015.2
     */
    promise: function (options) {}
}
// function detachRecord() {}
// detachRecord.prototype.promise = function() {};
// record.prototype.detach = new detachRecord();

/**
 * module enums
 */
record.prototype.Type = function(options) {};

function recordType() {
    this.ACCOUNT = 'account';
    this.ACCOUNTING_BOOK = 'accountingbook';
    this.ACCOUNTING_PERIOD = 'accountingperiod';
    this.AMORTIZATION_SCHEDULE = 'amortizationschedule';
    this.AMORTIZATION_TEMPLATE = 'amortizationtemplate';
    this.ASSEMBLY_BUILD = 'assemblybuild';
    this.ASSEMBLY_ITEM = 'assemblyitem';
    this.ASSEMBLY_UNBUILD = 'assemblyunbuild';
    this.BILLING_ACCOUNT = 'billingaccount';
    this.BILLING_CLASS = 'billingclass';
    this.BILLING_SCHEDULE = 'billingschedule';
    this.BIN = 'bin';
    this.BIN_TRANSFER = 'bintransfer';
    this.BIN_WORKSHEET = 'binworksheet';
    this.BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder';
    this.BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript';
    this.CALENDAR_EVENT = 'calendarevent';
    this.CAMPAIGN = 'campaign';
    this.CAMPAIGN_TEMPLATE = 'campaigntemplate';
    this.CASH_REFUND = 'cashrefund';
    this.CASH_SALE = 'cashsale';
    this.CHARGE = 'charge';
    this.CHECK = 'check';
    this.CLASSIFICATION = 'classification';
    this.CLIENT_SCRIPT = 'clientscript';
    this.COMPETITOR = 'competitor';
    this.CONTACT = 'contact';
    this.COUPON_CODE = 'couponcode';
    this.CREDIT_MEMO = 'creditmemo';
    this.CURRENCY = 'currency';
    this.CUSTOMER = 'customer';
    this.CUSTOMER_CATEGORY = 'customercategory';
    this.CUSTOMER_DEPOSIT = 'customerdeposit';
    this.CUSTOMER_PAYMENT = 'customerpayment';
    this.CUSTOMER_REFUND = 'customerrefund';
    this.CUSTOM_TRANSACTION = 'customtransaction';
    this.DEPARTMENT = 'department';
    this.DEPOSIT = 'deposit';
    this.DEPOSIT_APPLICATION = 'depositapplication';
    this.DESCRIPTION_ITEM = 'descriptionitem';
    this.DISCOUNT_ITEM = 'discountitem';
    this.DOWNLOAD_ITEM = 'downloaditem';
    this.DRIVERS_LICENSE = 'driverslicense';
    this.EMAIL_TEMPLATE = 'emailtemplate';
    this.EMPLOYEE = 'employee';
    this.ENTITY_ACCOUNT_MAPPING = 'entityaccountmapping';
    this.ESTIMATE = 'estimate';
    this.EXPENSE_CATEGORY = 'expensecategory';
    this.EXPENSE_REPORT = 'expensereport';
    this.FAIR_VALUE_PRICE = 'fairvalueprice';
    this.FOLDER = 'folder';
    this.GENERIC_RESOURCE = 'genericresource';
    this.GIFT_CERTIFICATE = 'giftcertificate';
    this.GIFT_CERTIFICATE_ITEM = 'giftcertificateitem';
    this.GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping';
    this.GOVERNMENT_ISSUED_ID_TYPE = 'governmentissuedidtype';
    this.HCM_JOB = 'hcmjob';
    this.INTER_COMPANY_JOURNAL_ENTRY = 'intercompanyjournalentry';
    this.INTER_COMPANY_TRANSFER_ORDER = 'intercompanytransferorder';
    this.INVENTORY_ADJUSTMENT = 'inventoryadjustment';
    this.INVENTORY_COST_REVALUATION = 'inventorycostrevaluation';
    this.INVENTORY_COUNT = 'inventorycount';
    this.INVENTORY_DETAIL = 'inventorydetail';
    this.INVENTORY_ITEM = 'inventoryitem';
    this.INVENTORY_NUMBER = 'inventorynumber';
    this.INVENTORY_TRANSFER = 'inventorytransfer';
    this.INVOICE = 'invoice';
    this.ISSUE = 'issue';
    this.ITEM_ACCOUNT_MAPPING = 'itemaccountmapping';
    this.ITEM_DEMAND_PLAN = 'itemdemandplan';
    this.ITEM_FULFILLMENT = 'itemfulfillment';
    this.ITEM_GROUP = 'itemgroup';
    this.ITEM_RECEIPT = 'itemreceipt';
    this.ITEM_REVISION = 'itemrevision';
    this.ITEM_SUPPLY_PLAN = 'itemsupplyplan';
    this.JOB = 'job';
    this.JOB_REQUISITION = 'jobrequisition';
    this.JOURNAL_ENTRY = 'journalentry';
    this.KIT_ITEM = 'kititem';
    this.KUDOS = 'kudos';
    this.LEAD = 'lead';
    this.LOCATION = 'location';
    this.LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumberedassemblyitem';
    this.LOT_NUMBERED_INVENTORY_ITEM = 'lotnumberedinventoryitem';
    this.MANUFACTURING_COST_TEMPLATE = 'manufacturingcosttemplate';
    this.MANUFACTURING_OPERATION_TASK = 'manufacturingoperationtask';
    this.MANUFACTURING_ROUTING = 'manufacturingrouting';
    this.MAP_REDUCE_SCRIPT = 'mapreducescript';
    this.MARKUP_ITEM = 'markupitem';
    this.MASSUPDATE_SCRIPT = 'massupdatescript';
    this.MESSAGE = 'message';
    this.MFG_PLANNED_TIME = 'mfgplannedtime';
    this.NEXUS = 'nexus';
    this.NON_INVENTORY_ITEM = 'noninventoryitem';
    this.NOTE = 'note';
    this.OPPORTUNITY = 'opportunity';
    this.ORDER_SCHEDULE = 'orderschedule';
    this.ORGANIZATION_VALUE = 'organizationvalue';
    this.OTHER_CHARGE_ITEM = 'otherchargeitem';
    this.OTHER_GOVERNMENT_ISSUED_ID = 'othergovernmentissuedid';
    this.OTHER_NAME = 'othername';
    this.PARTNER = 'partner';
    this.PASSPORT = 'passport';
    this.PAYCHECK_JOURNAL = 'paycheckjournal';
    this.PAYMENT_ITEM = 'paymentitem';
    this.PAYROLL_ITEM = 'payrollitem';
    this.PHONE_CALL = 'phonecall';
    this.PORTLET = 'portlet';
    this.POSITION = 'position';
    this.PRICE_LEVEL = 'pricelevel';
    this.PROJECT_EXPENSE_TYPE = 'projectexpensetype';
    this.PROJECT_TASK = 'projecttask';
    this.PROJECT_TEMPLATE = 'projecttemplate';
    this.PROMOTION_CODE = 'promotioncode';
    this.PROSPECT = 'prospect';
    this.PURCHASE_CONTRACT = 'purchasecontract';
    this.PURCHASE_ORDER = 'purchaseorder';
    this.PURCHASE_REQUISITION = 'purchaserequisition';
    this.RATE_PLAN = 'rateplan';
    this.REALLOCATE_ITEM = 'reallocateitem';
    this.RESOURCE_ALLOCATION = 'resourceallocation';
    this.RESTLET = 'restlet';
    this.RETURN_AUTHORIZATION = 'returnauthorization';
    this.REVENUE_ARRANGEMENT = 'revenuearrangement';
    this.REVENUE_COMMITMENT = 'revenuecommitment';
    this.REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal';
    this.REVENUE_PLAN = 'revenueplan';
    this.REV_REC_SCHEDULE = 'revrecschedule';
    this.REV_REC_TEMPLATE = 'revrectemplate';
    this.SALES_ORDER = 'salesorder';
    this.SALES_TAX_ITEM = 'salestaxitem';
    this.SCHEDULED_SCRIPT = 'scheduledscript';
    this.SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance';
    this.SCRIPT_DEPLOYMENT = 'scriptdeployment';
    this.SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem';
    this.SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem';
    this.SERVICE_ITEM = 'serviceitem';
    this.SHIP_ITEM = 'shipitem';
    this.SOLUTION = 'solution';
    this.STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry';
    this.SUBSCRIPTION = 'subscription';
    this.SUBSCRIPTION_CHANGE_ORDER = 'subscriptionchangeorder';
    this.SUBSCRIPTION_LINE = 'subscriptionline';
    this.SUBSCRIPTION_PLAN = 'subscriptionplan';
    this.SUBSIDIARY = 'subsidiary';
    this.SUBTOTAL_ITEM = 'subtotalitem';
    this.SUITELET = 'suitelet';
    this.SUPPORT_CASE = 'supportcase';
    this.TASK = 'task';
    this.TAX_ACCT = 'taxacct';
    this.TAX_GROUP = 'taxgroup';
    this.TAX_PERIOD = 'taxperiod';
    this.TAX_TYPE = 'taxtype';
    this.TERM = 'term';
    this.TERMINATION_REASON = 'terminationreason';
    this.TIME_BILL = 'timebill';
    this.TIME_ENTRY = 'timeentry';
    this.TIME_OFF_CHANGE = 'timeoffchange';
    this.TIME_OFF_PLAN = 'timeoffplan';
    this.TIME_OFF_REQUEST = 'timeoffrequest';
    this.TIME_OFF_RULE = 'timeoffrule';
    this.TIME_OFF_TYPE = 'timeofftype';
    this.TIME_SHEET = 'timesheet';
    this.TOPIC = 'topic';
    this.TRANSFER_ORDER = 'transferorder';
    this.UNITS_TYPE = 'unitstype';
    this.USEREVENT_SCRIPT = 'usereventscript';
    this.VENDOR = 'vendor';
    this.VENDOR_BILL = 'vendorbill';
    this.VENDOR_CATEGORY = 'vendorcategory';
    this.VENDOR_CREDIT = 'vendorcredit';
    this.VENDOR_PAYMENT = 'vendorpayment';
    this.VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization';
    this.WEBSITE = 'website';
    this.WORKFLOW_ACTION_SCRIPT = 'workflowactionscript';
    this.WORK_ORDER = 'workorder';
    this.WORK_ORDER_CLOSE = 'workorderclose';
    this.WORK_ORDER_COMPLETION = 'workordercompletion';
    this.WORK_ORDER_ISSUE = 'workorderissue';
}
record.prototype.Type = recordType;

/**
 * Primary object used to encapsulate a record object.
 *
 * @protected
 * @param {Object} options
 * @param {{id: *, remoteId: *, isDynamic: boolean, isUserEvent: boolean, isSubrecord: boolean, recordContext: *, metadata: *, data: *}} options.recordObj
 * @return {Record}
 * @constructor
 */
function Record() {

    /**
     * The id of the record
     * @name Record#id
     * @type number
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.id = undefined;
    /**
     * The type of the record
     * @name Record#type
     * @type string
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.type = undefined;
    /**
     * return true if record is a dynamic record
     * @name Record#isDynamic
     * @type boolean
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.isDynamic = undefined;
    /**
     * save record updates to the system
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enablesourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoremandatoryfields=false] ignore mandatory field during record submission
     * @return {number} id of submitted record
     */
    this.save = function(options) {}
    this.save = {
        /**
         * save record updates to the system
         * @governance 20 units for transactions, 4 for custom records, 10 for all other records
         *
         * @param {Object} options
         * @param {boolean} [options.enablesourcing=false] enable sourcing during record update
         * @param {boolean} [options.ignoremandatoryfields=false] ignore mandatory field during record submission
         * @return {number} id of submitted record
         */
        promise: function (options) {}
    }
    // function saveThis() {}
    // saveThis.prototype.promise = function() {};
    // this.save = new saveThis();

    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */
    this.toJSON = function(options) {};

    /**
     * Returns the object type name (Record)
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * remove body field data﻿
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.removeField = function(options) {};

    /**
     * return array of names of all body fields, including machine header field and matrix header fields
     * @return {Array}
     */
    this.getFields = function(options) {};

    /**
     * returns the specified sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist}
     */
    this.getSublist = function(options) {};

    /**
     * return array of names of all sublists
     * @return {Array}
     */
    this.getSublists = function(options) {};

    /**
     * return array of names of all fields in a sublist﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined﻿
     */
    this.getSublistFields = function(options) {};

    /**
     * return value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    this.getValue = function(options) {};

    /**
     * set value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.setValue = function(options) {};

    /**
     * get value of the field in text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setText
     */
    this.getText = function(options) {};

    /**
     * set value of the field by text representation
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string} options.text
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.setText = function(options) {};

    /**
     * return field object from record
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.getField = function(options) {};

    /**
     * return field object from record's sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {boolean} options.line
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    this.getSublistField = function(options) {};

    /**
     * return line count of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {number}
     */
    this.getLineCount = function(options) {};

    /**
     * insert a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid﻿ or if machine is not editable
     */
    this.insertLine = function(options) {};

    /**
     * remove a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid﻿ or if machine is not editable
     */
    this.removeLine = function(options) {};

    /**
     * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @return {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing or undefined
     */
    this.findSublistLineWithValue = function(options) {};

    /**
     * return value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    this.getSublistValue = function(options) {};

    /**
     * set the value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {number|Date|string|Array} options.value
     * @return {Record}﻿
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @restriction only available in deferred dynamic record
     */
    this.setSublistValue = function(options) {};

    /**
     * return value of a sublist field in text representation﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string}﻿
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */
    this.getSublistText = function(options) {};

    /**
     * set the value of a sublist field in text representation﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string} options.text
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @restriction only available in deferred dynamic record
     */
    this.setSublistText = function(options) {};

    /**
     * return a value indicating if the field has a subrecord
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */
    this.hasSubrecord = function(options) {};

    /**
     * get the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Subrecord}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     */
    this.getSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record}
     */
    this.removeSubrecord = function(options) {};

    /**
     * return a value indicating if the associated sublist field has a subrecord
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {boolean}
     */
    this.hasSublistSubrecord = function(options) {};

    /**
     * get the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Subrecord}
     */
    this.getSublistSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */
    this.removeSublistSubrecord = function(options) {};

    /**
     * set the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Record}
     */
    this.setMatrixHeaderValue = function(options) {};

    /**
     * get the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    this.getMatrixHeaderValue = function(options) {};

    /**
     * set the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */
    this.setMatrixSublistValue = function(options) {};

    /**
     * get the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    this.getMatrixSublistValue = function(options) {};

    /**
     * get the field for the specified header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */
    this.getMatrixHeaderField = function(options) {};

    /**
     * get the field for the specified sublist in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */
    this.getMatrixSublistField = function(options) {};

    /**
     * returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.value the column number for the field
     * @param {number} options.column the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    this.findMatrixSublistLineWithValue = function(options) {};

    /**
     * returns the number of columns for the specified matrix.
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    this.getMatrixHeaderCount = function(options) {};

    /**
     * cancel the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     * @restriction only available in dynamic record
     */
    this.cancelLine = function(options) {};

    /**
     * commit the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     * @restriction only available in dynamic record
     */
    this.commitLine = function(options) {};

    /**
     * select line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or line index
     * @restriction only available in dynamic record
     */
    this.selectLine = function(options) {};

    /**
     * select a new line at the end of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     * @restriction only available in dynamic record
     */
    this.selectNewLine = function(options) {};

    /**
     * return value of a sublist field on the current selected sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistValue = function(options) {};

    /**
     * set the value for field in the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    this.setCurrentSublistValue = function(options) {};

    /**
     * return the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistText = function(options) {};

    /**
     * set the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    this.setCurrentSublistText = function(options) {};

    /**
     * return the line number of current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistIndex = function(options) {};

    /**
     * return a value indicating if the associated sublist field has a subrecord on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {boolean}
     */
    this.hasCurrentSublistSubrecord = function(options) {};

    /**
     * get the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Subrecord}
     */
    this.getCurrentSublistSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record}
     */
    this.removeCurrentSublistSubrecord = function(options) {};

    /**
     * set the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string} options.value - the value to set it to
     * @param {boolean} options.ignoreFieldChange (optional) - Ignore the field change script (default false)
     * @param {boolean} options.fireSlavingSync (optional) - Flag to perform slaving synchronously (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {Record}
     */
    this.setCurrentMatrixSublistValue = function(options) {};

    /**
     * get the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {number|Date|string}
     */
    this.getCurrentMatrixSublistValue = function(options) {};
}

/**
 * Return a new instance of sublist object
 *
 * @param {Object} sublist
 * @param {string} sublist.type type of sublist
 * @param {SublistState} sublist.sublistState SublistState

 * @return {Sublist}
 * @constructor
 *
 * @since 2015.2
 */
function Sublist() {

    /**
     * The name of the sublist.
     * @name Sublist#name
     * @type string
     * @readonly
     */
    this.getName = function(options) {};

    /**
     * The type of the sublist.
     * @name Sublist#type
     * @type string
     * @readonly
     */
    this.getType = function(options) {};

    /**
     * The sublist is changed
     * @name Sublist#isChanged
     * @type boolean
     * @readonly
     */
    this.isChanged = function(options) {};

    /**
     * The sublist is hidden
     * @name Sublist#isHidden
     * @type boolean
     * @readonly
     */
    this.isHidden = function(options) {};

    /**
     * The sublist is display
     * @name Sublist#isDisplay
     * @type boolean
     * @readonly
     */
    this.isDisplay = function(options) {};

    /**
     * Returns the object type name (sublist.Sublist)
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     * @returns {{id: string, type: string, isChanged: boolean, isDisplay: boolean}}
     */
    this.toJSON = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function Field() {

    /**
     * Return label of the field
     * @name Field#label
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.label = undefined;
    /**
     * Return id of the field
     * @name Field#id
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.id = undefined;
    /**
     * Disabled state of the field
     * @name Field#isDisabled
     * @type boolean
     * @since 2015.2
     */
    this.isDisabled = undefined;
    /**
     * Display state of the field
     * @name Field#isDisplay
     * @type boolean
     * @since 2015.2
     */
    this.isDisplay = undefined;
    /**
     * Mandatory state of the field
     * @name Field#isMandatory
     * @type boolean
     * @since 2015.2
     */
    this.isMandatory = undefined;
    /**
     * Read Only state of the field
     * @name Field#isReadOnly
     * @type boolean
     * @since 2015.2
     */
    this.isReadOnly = undefined;
    /**
     * Visible state of the field
     * @name Field#isVisible
     * @type boolean
     * @since 2015.2
     */
    this.isVisible = undefined;
    /**
     * Return type of the field
     * @name Field#type
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.type = undefined;
    /**
     * Return the sublistId of the field
     * @name Field#sublistId
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.sublistId = undefined;
    /**
     * Returns if the field is a popup
     * @name Field#isPopup
     * @type boolean
     * @readonly
     * @since 2015.2
     */
    this.isPopup = undefined;
    /**
     * get JSON format of the object
     * @return {{id: *, label: *, type: *}}
     *
     */
    this.toJSON = function(options) {};

    /**
     * @return {string}
     *
     */
    this.toString = function(options) {};
}

/**
 * Primary object used to encapsulate a record object.
 *
 * @protected
 * @param {Object} options
 * @param {{id: *, remoteId: *, isDynamic: boolean, isUserEvent: boolean, isSubrecord: boolean, recordContext: *, metadata: *, data: *}} options.recordObj
 * @return {Record}
 * @constructor
 */
function Record() {

    /**
     * The id of the record
     * @name Record#id
     * @type number
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.id = undefined;
    /**
     * The type of the record
     * @name Record#type
     * @type string
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.type = undefined;
    /**
     * return true if record is a dynamic record
     * @name Record#isDynamic
     * @type boolean
     * @readonly
     * @throws READ_ONLY when setting the property is attempted
     */
    this.isDynamic = undefined;
    /**
     * save record updates to the system
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enablesourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoremandatoryfields=false] ignore mandatory field during record submission
     * @return {number} id of submitted record
     */
    this.save = function(options) {}
    this.save = {
        /**
         * save record updates to the system
         * @governance 20 units for transactions, 4 for custom records, 10 for all other records
         *
         * @param {Object} options
         * @param {boolean} [options.enablesourcing=false] enable sourcing during record update
         * @param {boolean} [options.ignoremandatoryfields=false] ignore mandatory field during record submission
         * @return {number} id of submitted record
         */
        promise: function (options) {}
    }
    // function saveThis() {}
    // saveThis.prototype.promise = function() {};
    // this.save = new saveThis();

    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */
    this.toJSON = function(options) {};

    /**
     * Returns the object type name (Record)
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * remove body field data﻿
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.removeField = function(options) {};

    /**
     * return array of names of all body fields, including machine header field and matrix header fields
     * @return {Array}
     */
    this.getFields = function(options) {};

    /**
     * returns the specified sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist}
     */
    this.getSublist = function(options) {};

    /**
     * return array of names of all sublists
     * @return {Array}
     */
    this.getSublists = function(options) {};

    /**
     * return array of names of all fields in a sublist﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined﻿
     */
    this.getSublistFields = function(options) {};

    /**
     * return value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    this.getValue = function(options) {};

    /**
     * set value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.setValue = function(options) {};

    /**
     * get value of the field in text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setText
     */
    this.getText = function(options) {};

    /**
     * set value of the field by text representation
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string} options.text
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.setText = function(options) {};

    /**
     * return field object from record
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    this.getField = function(options) {};

    /**
     * return field object from record's sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {boolean} options.line
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    this.getSublistField = function(options) {};

    /**
     * return line count of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {number}
     */
    this.getLineCount = function(options) {};

    /**
     * insert a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid﻿ or if machine is not editable
     */
    this.insertLine = function(options) {};

    /**
     * remove a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid﻿ or if machine is not editable
     */
    this.removeLine = function(options) {};

    /**
     * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @return {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing or undefined
     */
    this.findSublistLineWithValue = function(options) {};

    /**
     * return value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    this.getSublistValue = function(options) {};

    /**
     * set the value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {number|Date|string|Array} options.value
     * @return {Record}﻿
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @restriction only available in deferred dynamic record
     */
    this.setSublistValue = function(options) {};

    /**
     * return value of a sublist field in text representation﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string}﻿
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */
    this.getSublistText = function(options) {};

    /**
     * set the value of a sublist field in text representation﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string} options.text
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @restriction only available in deferred dynamic record
     */
    this.setSublistText = function(options) {};

    /**
     * return a value indicating if the field has a subrecord
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */
    this.hasSubrecord = function(options) {};

    /**
     * get the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Subrecord}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     */
    this.getSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record}
     */
    this.removeSubrecord = function(options) {};

    /**
     * return a value indicating if the associated sublist field has a subrecord
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {boolean}
     */
    this.hasSublistSubrecord = function(options) {};

    /**
     * get the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Subrecord}
     */
    this.getSublistSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */
    this.removeSublistSubrecord = function(options) {};

    /**
     * set the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Record}
     */
    this.setMatrixHeaderValue = function(options) {};

    /**
     * get the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    this.getMatrixHeaderValue = function(options) {};

    /**
     * set the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */
    this.setMatrixSublistValue = function(options) {};

    /**
     * get the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    this.getMatrixSublistValue = function(options) {};

    /**
     * get the field for the specified header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */
    this.getMatrixHeaderField = function(options) {};

    /**
     * get the field for the specified sublist in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */
    this.getMatrixSublistField = function(options) {};

    /**
     * returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.value the column number for the field
     * @param {number} options.column the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    this.findMatrixSublistLineWithValue = function(options) {};

    /**
     * returns the number of columns for the specified matrix.
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    this.getMatrixHeaderCount = function(options) {};

    /**
     * cancel the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     * @restriction only available in dynamic record
     */
    this.cancelLine = function(options) {};

    /**
     * commit the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     * @restriction only available in dynamic record
     */
    this.commitLine = function(options) {};

    /**
     * select line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or line index
     * @restriction only available in dynamic record
     */
    this.selectLine = function(options) {};

    /**
     * select a new line at the end of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     * @restriction only available in dynamic record
     */
    this.selectNewLine = function(options) {};

    /**
     * return value of a sublist field on the current selected sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistValue = function(options) {};

    /**
     * set the value for field in the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    this.setCurrentSublistValue = function(options) {};

    /**
     * return the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number|Date|string|Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistText = function(options) {};

    /**
     * set the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number|Date|string|Array} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    this.setCurrentSublistText = function(options) {};

    /**
     * return the line number of current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @restriction only available in dynamic record
     */
    this.getCurrentSublistIndex = function(options) {};

    /**
     * return a value indicating if the associated sublist field has a subrecord on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {boolean}
     */
    this.hasCurrentSublistSubrecord = function(options) {};

    /**
     * get the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Subrecord}
     */
    this.getCurrentSublistSubrecord = function(options) {};

    /**
     * remove the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record}
     */
    this.removeCurrentSublistSubrecord = function(options) {};

    /**
     * set the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string} options.value - the value to set it to
     * @param {boolean} options.ignoreFieldChange (optional) - Ignore the field change script (default false)
     * @param {boolean} options.fireSlavingSync (optional) - Flag to perform slaving synchronously (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {Record}
     */
    this.setCurrentMatrixSublistValue = function(options) {};

    /**
     * get the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {number|Date|string}
     */
    this.getCurrentMatrixSublistValue = function(options) {};
}

record = new record();
/**
 * @type {record}
 */
N.prototype.record = record;

/**
 * SuiteScript module
 *
 * @module N/redirect
 * @NApiVersion 2.x
 *
 */
function redirect() {}
/**
 * Redirect to a URL
 *
 * @governance 0 units
 * @restriction Can only direct to external URL by suitelet without login
 *
 * @param {Object} options
 * @param {string} options.url
 * @param {Object} options.parameters (optional)
 */
redirect.prototype.redirect = function(options) {};

/**
 * Redirect to a suitelet
 *
 * @governance 0 units
 * @restriction Suitelet and UE only
 *
 * @param {Object} options
 * @param {string} options.scriptId  script Id
 * @param {string} options.deploymentId deployment Id
 * @param {boolean} options.isExternal (optional) default to false indicate it is external Suitelet URL
 * @param {Object} options.parameters (optional)
 */
redirect.prototype.toSuitelet = function(options) {};

/**
 * Redirect to a record
 *
 * @governance 0 units
 * @restriction Suitelet and UE only
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {string} options.id  record Id
 * @param {boolean} options.isEditMode (optional) default to false
 * @param {Object} options.parameters (optional)
 */
redirect.prototype.toRecord = function(options) {};

/**
 * Redirect to a task link
 *
 * @governance 0 units
 * @restriction Suitelet and UE only
 *
 * @param {Object} options
 * @param {string} options.id task Id
 * @param {Object} options.parameters (optional)
 */
redirect.prototype.toTaskLink = function(options) {};

/**
 * Redirect to saved search
 *
 * @governance 5 units
 * @restriction Supppprted only by afterSubmit user event scripts and client scripts
 *
 * @param {Object} options
 * @param {number} options.id search id
 */
redirect.prototype.toSavedSearch = function(options) {};

/**
 * Redirect to saved search results
 *
 * @governance 5 units
 * @restriction Supppprted only by afterSubmit user event scripts and client scripts
 *
 * @param {Object} options
 * @param {number} options.id search id
 */
redirect.prototype.toSavedSearchResult = function(options) {};

/**
 * Redirect to search
 *
 * @governance 0 units
 * @restriction Supppprted only by afterSubmit user event scripts and client scripts
 *
 * @param {Object} options
 * @param {Search} options.search
 */
redirect.prototype.toSearch = function(options) {};

/**
 * Redirect to search results
 *
 * @governance 0 units
 * @restriction Supppprted only by afterSubmit user event scripts and client scripts
 *
 * @param {Object} options
 * @param {Search} options.Search
 */
redirect.prototype.toSearchResult = function(options) {};

redirect = new redirect();
/**
 * @type {redirect}
 */
N.prototype.redirect = redirect;

/**
 * SuiteScript module
 *
 * @module N/render
 * @NApiVersion 2.x
 *
 */
function render() {}
/**
 *
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {number} options.entityId The internal ID of the transaction being printed
 * @param {string} options.printMode (optional) The output type: PDF|HTML|DEFAULT. DEFAULT uses the user/company preference for print output
 * @param {number} options.formId (optional)
 *
 * @returns {File}
 */
render.prototype.transaction = function(options) {};

/**
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {number} options.entityId
 * @param {string} options.printMode (optional)
 * @param {number} options.formId  (optional)
 * @param {date} options.startDate (optional)
 * @param {date} options.statementDate (optional)
 * @param {boolean} options.openTransactionsOnly  (optional)
 *
 * @returns {File}
 */
render.prototype.statement = function(options) {};

/**
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {number} options.entityId
 * @param {string} options.printMode (optional)
 * @param {number} options.formId  (optional)
 * @param {number} options.fulfillmentId (optional)
 *
 * @returns {File}
 */
render.prototype.packingSlip = function(options) {};

/**
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {number} options.entityId
 * @param {string} options.printMode (optional)
 * @param {number} options.formId  (optional)
 * @param {number} options.shipgroup (optional)
 * @param {number} options.location (optional)
 *
 * @returns {File}
 */
render.prototype.pickingTicket = function(options) {};

/**
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {number} options.entityId
 * @param {string} options.printMode (optional)
 *
 * @returns {File}
 */
render.prototype.bom = function(options) {};

/**
 * @governance 0 units
 * @restriction Supported by all server side scirpts

 * @returns {TemplateRenderer}
 */
render.prototype.create = function(options) {};

/**
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {Document|string} options.xmlString
 * @returns {File}
 */
render.prototype.xmlToPdf = function(options) {};

/**
 *
 * RecordRef Encapsulates the type and id of a particular record instance.
 * @typedef {Object} RecordRef
 * @property {number} id - Internal ID of the record instance.
 * @property {string} type - Record type id.
 *
 * @governance 0 units
 * @param {Object} options
 * @param {number} options.templateId
 * @param {RecordRef} options.entity
 * @param {RecordRef} options.recipient
 * @param {RecordRef} options.customRecord
 * @param {number} options.supportCaseId
 * @param {number} options.transactionId
 *
 * @returns {EmailMergeResult}
 *
 */
render.prototype.mergeEmail = function(options) {};

/**
 * Enum print mode type values.
 * @readonly
 * @enum {string}
 */
function renderPrintMode() {
    this.PDF = 'PDF';
    this.HTML = 'HTML';
    this.DEFAULT = 'DEFAULT';
}
render.prototype.PrintMode = renderPrintMode;

/**
 * Enum data source type values.
 * @readonly
 * @enum {string}
 */
function renderDataSource() {
    this.XML_DOC = 'XML_DOC';
    this.XML_STRING = 'XML_STRING';
    this.OBJECT = 'OBJECT';
    this.JSON = 'JSON';
}
render.prototype.DataSource = renderDataSource;

/**
 * @protected
 * @constructor
 */
function EmailMergeResult() {

    /**
     * @name EmailMergeResult#subject
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.subject = undefined;
    /**
     * @name EmailMergeResult#body
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.body = undefined;
    /**
     * get JSON format of the object
     * @return {string}
     *
     */
    this.toJSON = function(options) {};

    /**
     * @return {string}
     *
     */
    this.toString = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function TemplateRenderer() {

    /**
     * Template content
     * @name TemplateRenderer#templateContent
     * @type string
     * @since 2015.2
     */
    this.templateContent = undefined;
    /**
     * Sets template content by scriptId
     * @param {string} scriptId
     * @return {undefined}
     * @since 2016.1
     */
    this.setTemplateByScriptId = function(options) {};

    /**
     * Sets template content by internal Id (nKey)
     * @param {number} id
     * @return {undefined}
     * @since 2016.1
     */
    this.setTemplateById = function(options) {};

    /**
     * @param {Object} options
     * @param { string } options.templateName
     * @param { record.Record } options.record
     * @return {undefined}
     *
     */
    this.addRecord = function(options) {};

    /**
     * @param {Object} options
     * @param { string } options.templateName
     * @param { search.Result } options.searchResult
     * @return {undefined}
     *
     */
    this.addSearchResults = function(options) {};

    /**
     * Adds XML or Json as custom data source
     *
     * @param {Object} options
     * @param {string} options.format data format
     * @param {string} options.alias namespace name of the record used in the template
     * @param {Object|Document|string} options.data Object, Document or String
     * @return {undefined}
     *
     */
    this.addCustomDataSource = function(options) {};

    /**
     * @return {string}
     *
     */
    this.renderAsString = function(options) {};

    /**
     * @param {Object} options
     * @param { http.ServerResponse } options.response
     * @return {undefined}
     *
     */
    this.renderToResponse = function(options) {};

    /**
     * @return {file.File}
     *
     */
    this.renderAsPdf = function(options) {};

    /**
     * @param { http.ServerResponse } response
     * @return {undefined}
     *
     */
    this.renderPdfToResponse = function(options) {};

    /**
     * get JSON format of the object
     * @return {string}
     *
     */
    this.toJSON = function(options) {};

    /**
     * @return {string}
     *
     */
    this.toString = function(options) {};
}

render = new render();
/**
 * @type {render}
 */
N.prototype.render = render;/**
 * @param {Array} dependencies list of module paths, either to file cabinet scripts or standard modules (via virtual path)
 * @param {Function} callback which executes once all dependencies are available
 *
 * @throws {SuiteScriptError} MODULE_DOES_NOT_EXIST if path is invalid
 *
 * @since 2015.2
 */
function require(dependencies, callback){}

/**
 * SuiteScript module
 *
 * @module N/runtime
 * @NApiVersion 2.x
 *
 */
function runtime() {}
/**
 * Get the current log in user object
 * @return {User}
 */
runtime.prototype.getCurrentUser = function() {};

/**
 * Get the current executing Script object
 * @return {Script}
 */
runtime.prototype.getCurrentScript = function() {};

/**
 * Get the current session object
 * @return {Session}
 */
runtime.prototype.getCurrentSession = function() {};

/**
 * Check if a feature is turned on and in effect
 * @param {Object} options
 * @param { string } options.feature id of the feature
 * @return {boolean}
 */
runtime.prototype.isFeatureInEffect = function() {};

/**
 * @name runtime#queueCount
 * @type number
 * @readonly
 * @since 2015.2
 */
runtime.prototype.queueCount = undefined;
/**
 * @name runtime#version
 * @type string
 * @readonly
 * @since 2015.2
 */
runtime.prototype.version = undefined;
/**
 * @name runtime#accountId
 * @type string
 * @readonly
 * @since 2015.2
 */
runtime.prototype.accountId = undefined;
/**
 * @name runtime#envType
 * @type string
 * @readonly
 * @since 2015.2
 */
runtime.prototype.envType = undefined;
/**
 * @name runtime#executionContext
 * @type string
 * @readonly
 * @since 2015.2
 */
runtime.prototype.executionContext = undefined;
/**
 * get JSON format of the object
 * @return {Object}
 *
 */
runtime.prototype.toJSON = function(options) {};

/**
 * @return {string}
 *
 */
runtime.prototype.toString = function(options) {};

/**
 * @enum
 */
function runtimeEnvType() {
    this.SANDBOX = 'SANDBOX';
    this.PRODUCTION = 'PRODUCTION';
    this.BETA = 'BETA';
    this.INTERNAL = 'INTERNAL';
}
runtime.prototype.EnvType = runtimeEnvType;

/**
 * @enum
 */
function runtimeContextType() {
    this.USER_INTERFACE = 'USERINTERFACE';
    this.WEBSERVICES = 'WEBSERVICES';
    this.WEBSTORE = 'WEBSTORE';
    this.PORTLET = 'PORTLET';
    this.SCHEDULED = 'SCHEDULED';
    this.SUITELET = 'SUITELET';
    this.CSV_IMPORT = 'CSVIMPORT';
    this.CUSTOM_MASSUPDATE = 'CUSTOMMASSUPDATE';
    this.WORKFLOW = 'WORKFLOW';
    this.USEREVENT = 'USEREVENT';
    this.ACTION = 'ACTION';
    this.DEBUGGER = 'DEBUGGER';
    this.CLIENT = 'CLIENT';
    this.BUNDLE_INSTALLATION = 'BUNDLE_INSTALLATION';
    this.RESTLET = 'RESTLET';
    this.WEBAPPLICATION = 'WEBAPPLICATION';
    this.PAYMENTGATEWAY = 'PAYMENTGATEWAY';
    this.CONSOLRATEADJUSTOR = 'CONSOLRATEADJUSTOR';
    this.PROMOTIONS = 'PROMOTIONS';
    this.CUSTOMGLLINES = 'CUSTOMGLLINES';
    this.TAX_CALCULATION = 'TAXCALCULATION';
    this.SHIPPING_PARTNERS = 'SHIPPINGPARTNERS';
    this.EMAIL_CAPTURE = 'EMAILCAPTURE';
}
runtime.prototype.ContextType = runtimeContextType;

/**
 * @enum
 */
function runtimePermission() {
    this.FULL = 4.0;
    this.EDIT = 3.0;
    this.CREATE = 2.0;
    this.VIEW = 1.0;
    this.NONE = 0.0;
}
runtime.prototype.Permission = runtimePermission;

/**
 * @protected
 * @constructor
 */
function Script() {

    /**
     * Current script log level
     * @name Script#logLevel
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.logLevel = undefined;
    /**
     * Current script id
     * @name Script#id
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.id = undefined;
    /**
     * Current script runtime version
     * @name Script#apiVersion
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.apiVersion = undefined;
    /**
     * Percentage complete specified for the current scheduled script execution
     * @name Script#percentComplete
     * @type number
     * @throws {SuiteScriptError} SSS_OPERATION_UNAVAILABLE
     * @since 2015.2
     */
    this.percentComplete = undefined;
    /**
     * The deploymentId for the current script deployment
     * @name Script#deploymentId
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.deploymentId = undefined;
    /**
     * The bundle IDs the current script belongs to
     * @name Script#bundleIds
     * @type string[]
     * @readonly
     * @since 2015.2
     */
    this.bundleIds = undefined;
    /**
     * Returns the remaining amount of unit usage for the current script
     * @return {number}
     *
     */
    this.getRemainingUsage = function(options) {};

    /**
     * Returns script parameter value which is defined per script
     *
     * @param {Object} options
     * @param { string } options.name The name of the parameter
     * @return {number|Date|string|Array}
     *
     */
    this.getParameter = function(options) {};

    /**
     * get JSON format of the object
     * @return {string}
     *
     */
    this.toJSON = function(options) {};

    /**
     * @return {string}
     *
     */
    this.toString = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function Session() {

    /**
     * Get the value of a user-defined session object for the current user.
     * @param {Object} options
     * @param { string } options.name The key used to store the session object
     * @return {string}
     *
     */
    this['get'] = function(options) {};

    /**
     * Add or set the value of a user-defined session object for the current user.
     * @param {Object} options
     * @param { string } options.name The key used to store the session object
     * @param { string } options.value The value to associate with this key in the user's session
     * @return {undefined}
     *
     */
    this['set'] = function(options) {};

    /**
     * get JSON format of the object
     * @return {string}
     *
     */
    this.toJSON = function(options) {};

    /**
     * @return {string}
     *
     */
    this.toString = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function User() {

    /**
     * Returns the currently logged in user's e-mail address
     * @name User#email
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.email = undefined;
    /**
     * Returns the currently logged in user's name
     * @name User#name
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.name = undefined;
    /**
     * Returns the internal ID of the currently logged in user's location
     * @name User#location
     * @type number
     * @readonly
     * @since 2015.2
     */
    this.location = undefined;
    /**
     * Returns the internal ID of the currently logged in user's department
     * @name User#department
     * @type number
     * @readonly
     * @since 2015.2
     */
    this.department = undefined;
    /**
     * Returns the internal ID of the currently logged in user's role
     * @name User#role
     * @type number
     * @readonly
     * @since 2015.2
     */
    this.role = undefined;
    /**
     * Returns the internal ID of the currently logged in user's center type (role center)
     * @name User#roleCenter  The string value of the logged in user's center - for example, SALES, ACCOUNTING, CLASSIC.
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.roleCenter = undefined;
    /**
     * Returns the custom scriptId of the role (as opposed to the internal numerical ID).
     * @name User#roleId
     * @type string
     * @readonly
     * @since 2015.2
     */
    this.roleId = undefined;
    /**
     * Returns the currently logged in user's internal ID
     * @name User#id
     * @type number
     * @readonly
     * @since 2015.2
     */
    this.id = undefined;
    /**
     * Returns the internal ID of the currently logged in user's subsidiary
     * @name User#subsidiary
     * @type number
     * @readonly
     * @since 2015.2
     */
    this.subsidiary = undefined;
    /**
     * Get a user's permission level for a given permission
     * @param {Object} options
     * @param { string } options.name The internal ID of a permission
     * @return {number} one value of the Permission
     *
     */
    this.getPermission = function(options) {};

    /**
     * Get the value of a NetSuite preference
     * @param {Object} options
     * @param { string } name The internal ID of the preference
     * @return {string} The value of a system or script preference for the current user
     *
     */
    this.getPreference = function(options) {};

    /**
     * get JSON format of the object
     * @return {string}
     *
     */
    this.toJSON = function(options) {};

    /**
     * @return {string}
     *
     */
    this.toString = function(options) {};
}

runtime = new runtime();
/**
 * @type {runtime}
 */
N.prototype.runtime = runtime;

/**
 * SuiteScript search common module
 *
 * @module N/search
 * @suiteScriptVersion 2.x
 *
 */
function search() {}
/**
 * Creates a new search. The search can be modified and run as an ad-hoc search, without saving it. Alternatively,
 * calling Search.save() will save the search to the database, so it can be reused later in the UI or using search.load().
 * @param {Object} options  the options object
 * @param {string} options.type  the record internal ID of the record type you are searching
 * @param {Filter|Filter[]|Array[]} [options.filters] (optional)  a single filter object or an array of filter objects or a search filter expression
 * @param {Column|Column[]|string} [options.columns] (optional)  a single search.Column or string or an array that contains elements of the two types
 * @param {string} [options.title] (optional)  name of the search (when saved)
 * @param {string} [options.id] (optional)  customer ID of the search (when saved), it's a string starting with 'customsearch'
 * @returns {Search} the created search
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when filters parameter is not a valid filter, array of filters or filter expression
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN when columns parameter is not a valid column, string, or array of the two
 * @since 2015.2
 */
search.prototype.create = function(options) {}
search.prototype.create = {
    /**
     * Creates a new search. The search can be modified and run as an ad-hoc search, without saving it. Alternatively,
     * calling Search.save() will save the search to the database, so it can be reused later in the UI or using search.load().
     * @param {Object} options  the options object
     * @param {string} options.type  the record internal ID of the record type you are searching
     * @param {Filter|Filter[]|Array[]} options.filters (optional)  a single filter object or an array of filter objects or a search filter expression
     * @param {Column|Column[]|string} options.columns (optional)  a single search.Column or string or an array that contains elements of the two types
     * @param {string} options.title (optional)  name of the search (when saved)
     * @param {string} options.id (optional)  customer ID of the search (when saved), it's a string starting with 'customsearch'
     * @returns {Search} the created search
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when filters parameter is not a valid filter, array of filters or filter expression
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN when columns parameter is not a valid column, string, or array of the two
     * @since 2015.2
     */
    promise: function (options) {}
}
// function createSearch() {}
// createSearch.prototype.promise = function() {};
// search.prototype.create = new createSearch();

/**
 * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
 * in conjunction with Search.save().
 * @governance 5 units
 * @param {Object} options  the options object
 * @param {string} options.id  the customer ID or internal ID of the search
 * @returns {Search} the loaded search
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
 * @since 2015.2
 */
search.prototype.load = function(options) {}
search.prototype.load = {
    /**
     * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
     * in conjunction with Search.save().
     * @governance 5 units
     * @param {Object} options  the options object
     * @param {string} options.id  the customer ID or internal ID of the search
     * @returns {Search} the loaded search
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     * @since 2015.2
     */
    promise: function (options) {}
}
// function loadSearch() {}
// loadSearch.prototype.promise = function() {};
// search.prototype.load = new loadSearch();

/**
 * Deletes an existing saved search.
 * @governance 5 units
 * @param {Object} options  the options object
 * @param {string} options.id  the customer ID or internal ID of the search
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
 * @since 2015.2
 */
search.prototype['delete'] = function(options) {}
search.prototype['delete'] = {
    /**
     * Deletes an existing saved search.
     * @governance 5 units
     * @param {Object} options  the options object
     * @param {string} options.id  the customer ID or internal ID of the search
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     * @since 2015.2
     */
    promise: function (options) {}
}
// function deleteSearch() {}
// deleteSearch.prototype.promise = function() {};
// search.prototype['delete'] = new deleteSearch();

/**
 * Performs a search for duplicate records based on the account's Duplicate Detection configuration.
 * Note that this API only works for records that support duplicate record detection. These records include
 * customers, leads, prospects, contacts, partners, and vendors. Use either field or id parameter depending
 * on how you want to search for duplicates.
 * @governance 10 units
 * @param {Object} options  the options object
 * @param {string} options.type  the record type you are checking duplicates for
 * @param {Object} options.fields (optional)  a set of key/value pairs used to detect duplicate (e.g. email:'foo@bar.com')
 * @param {number} options.id (optional)  internalId of existing record
 * @returns {Result[]} array of result objects corresponding to the duplicate records; results are limited to 1000 rows; returns empty array if nothing is found
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @since 2015.2
 */
search.prototype.duplicates = function(options) {}
search.prototype.duplicates = {
    /**
     * Performs a search for duplicate records based on the account's Duplicate Detection configuration.
     * Note that this API only works for records that support duplicate record detection. These records include
     * customers, leads, prospects, contacts, partners, and vendors. Use either field or id parameter depending
     * on how you want to search for duplicates.
     * @governance 10 units
     * @param {Object} options  the options object
     * @param {string} options.type  the record type you are checking duplicates for
     * @param {Object} options.fields (optional)  a set of key/value pairs used to detect duplicate (e.g. email:'foo@bar.com')
     * @param {number} options.id (optional)  internalId of existing record
     * @returns {Result[]} array of result objects corresponding to the duplicate records; results are limited to 1000 rows; returns empty array if nothing is found
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @since 2015.2
     */
    promise: function (options) {}
}
// function duplicatesSearch() {}
// duplicatesSearch.prototype.promise = function() {};
// search.prototype.duplicates = new duplicatesSearch();

/**
 * Performs a global search against a single keyword or multiple keywords.
 * @governance 10 units
 * @param {Object} options  the options object
 * @param {string} options.keywords  global search keywords string or expression
 * @returns {Result[]} array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2
 *                                   results are limited to 1000 rows; returns empty array if nothing is found
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @since 2015.2
 */
search.prototype.global = function(options) {}
search.prototype.global = {
    /**
     * Performs a global search against a single keyword or multiple keywords.
     * @governance 10 units
     * @param {Object} options  the options object
     * @param {string} options.keywords  global search keywords string or expression
     * @returns {Result[]} array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2
     *                                   results are limited to 1000 rows; returns empty array if nothing is found
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @since 2015.2
     */
    promise: function (options) {}
}
// function globalSearch() {}
// globalSearch.prototype.promise = function() {};
// search.prototype.global = new globalSearch();

/**
 * Performs a search for one or more body fields on a record. This function supports joined-field lookups.
 * Note that the notation for joined fields is: join_id.field_name
 * @governance 1 unit
 * @param {Object} options  the options object
 * @param {string} options.type  the record internal ID of the record type you are searching
 * @param {string} options.id  the internalId of the record
 * @param {string|string[]} options.columns  array of column/field names to look up, or a single column/field name
 * @returns {Object} search results in the form of key/value pairs; example:
 *     {
     *         foo: 'bar',
     *         name.join: 'othervalue',
     *         select: [{
     *             value: '123',
     *             text: 'Some UI text'
     *         }],
     *         multiselect1: [],
     *         multiselect2: [{
     *             value: '3',
     *             text: 'Green'
     *         },{
     *             value: '5',
     *             text: 'Pinkish yellow'
     *         }]
     *     }
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @since 2015.2
 */
search.prototype.lookupFields = function(options) {}
search.prototype.lookupFields = {
    /**
     * Performs a search for one or more body fields on a record. This function supports joined-field lookups.
     * Note that the notation for joined fields is: join_id.field_name
     * @governance 1 unit
     * @param {Object} options  the options object
     * @param {string} options.type  the record internal ID of the record type you are searching
     * @param {string} options.id  the internalId of the record
     * @param {string|string[]} options.columns  array of column/field names to look up, or a single column/field name
     * @returns {Object} search results in the form of key/value pairs; example:
     *     {
     *         foo: 'bar',
     *         name.join: 'othervalue',
     *         select: [{
     *             value: '123',
     *             text: 'Some UI text'
     *         }],
     *         multiselect1: [],
     *         multiselect2: [{
     *             value: '3',
     *             text: 'Green'
     *         },{
     *             value: '5',
     *             text: 'Pinkish yellow'
     *         }]
     *     }
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @since 2015.2
     */
    promise: function (options) {}
}
// function lookupFieldsSearch() {}
// lookupFieldsSearch.prototype.promise = function() {};
// search.prototype.lookupFields = new lookupFieldsSearch();

/**
 * Creates a search.Column object.
 * @param {Object} options  the options object
 * @param {string} options.name  the search return column name
 * @param {string} [options.join] (optional)  the join ID for this search return column
 * @param {Summary} [options.summary] (optional)  the summary type for this column
 * @param {string} [options.formula] (optional)  formula used for this column
 * @param {string} [options.function] (optional)  function used for this column
 * @param {string} [options.label] (optional)  label used for this column
 * @param {string} [options.sort] (optional)  sort direction for this column; use values from the Sort enum
 * @returns {Column} the created column object
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
 * @throws {SuiteScriptError} INVALID_SRCH_FUNCTN if an unknown function is provided
 * @since 2015.2
 */
search.prototype.createColumn = function(options) {};

/**
 * Creates a search.Filter object.
 * @param {Object} options  the options object
 * @param {string} options.name  internal ID of the search field
 * @param {string} [options.join] (optional)  if executing a joined search, this is the join ID used for the search field specified in the name parameter
 * @param {string} options.operator  search operator
 * @param {string|Date|number|string[]|Date[]} [options.values] (optional)  values to be used as filter parameters
 * @param {string} [options.formula] (optional)  formula used for this filter
 * @param {Summary} [options.summary] (optional)  summary type used for this filter
 * @returns {Filter} the created filter object
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_SUM if an unknown summary type is provided
 * @since 2015.2
 */
search.prototype.createFilter = function(options) {};

/**
 * Enum for search operators.
 * @enum {string}
 */
function searchOperator() {
    this.AFTER = 'after';
    this.ALLOF = 'allof';
    this.ANY = 'any';
    this.ANYOF = 'anyof';
    this.BEFORE = 'before';
    this.BETWEEN = 'between';
    this.CONTAINS = 'contains';
    this.DOESNOTCONTAIN = 'doesnotcontain';
    this.DOESNOTSTARTWITH = 'doesnotstartwith';
    this.EQUALTO = 'equalto';
    this.GREATERTHAN = 'greaterthan';
    this.GREATERTHANOREQUALTO = 'greaterthanorequalto';
    this.HASKEYWORDS = 'haskeywords';
    this.IS = 'is';
    this.ISEMPTY = 'isempty';
    this.ISNOT = 'isnot';
    this.ISNOTEMPTY = 'isnotempty';
    this.LESSTHAN = 'lessthan';
    this.LESSTHANOREQUALTO = 'lessthanorequalto';
    this.NONEOF = 'noneof';
    this.NOTAFTER = 'notafter';
    this.NOTALLOF = 'notallof';
    this.NOTBEFORE = 'notbefore';
    this.NOTBETWEEN = 'notbetween';
    this.NOTEQUALTO = 'notequalto';
    this.NOTGREATERTHAN = 'notgreaterthan';
    this.NOTGREATERTHANOREQUALTO = 'notgreaterthanorequalto';
    this.NOTLESSTHAN = 'notlessthan';
    this.NOTLESSTHANOREQUALTO = 'notlessthanorequalto';
    this.NOTON = 'noton';
    this.NOTONORAFTER = 'notonorafter';
    this.NOTONORBEFORE = 'notonorbefore';
    this.NOTWITHIN = 'notwithin';
    this.ON = 'on';
    this.ONORAFTER = 'onorafter';
    this.ONORBEFORE = 'onorbefore';
    this.STARTSWITH = 'startswith';
    this.WITHIN = 'within';
}
search.prototype.Operator = searchOperator;

/**
 * Enum for search summary types.
 * @enum {string}
 */
function searchSummary() {
    this.GROUP = 'GROUP';
    this.COUNT = 'COUNT';
    this.SUM = 'SUM';
    this.AVG = 'AVG';
    this.MIN = 'MIN';
    this.MAX = 'MAX';
}
search.prototype.Summary = searchSummary;

/**
 * Enum for sort directions.
 * @enum {string}
 */
search.prototype.Sort = function(options) {};

function searchSort() {
    this.ASC = 'ASC';
    this.DESC = 'DESC';
    this.NONE = 'NONE';
}
search.prototype.Sort = searchSort;

/**
 * module enums
 */
search.prototype.Type = function(options) {};

function searchType() {
    this.ACCOUNT = 'account';
    this.ACCOUNTING_BOOK = 'accountingbook';
    this.ACCOUNTING_PERIOD = 'accountingperiod';
    this.AMORTIZATION_SCHEDULE = 'amortizationschedule';
    this.AMORTIZATION_TEMPLATE = 'amortizationtemplate';
    this.ASSEMBLY_BUILD = 'assemblybuild';
    this.ASSEMBLY_ITEM = 'assemblyitem';
    this.ASSEMBLY_UNBUILD = 'assemblyunbuild';
    this.BILLING_ACCOUNT = 'billingaccount';
    this.BILLING_CLASS = 'billingclass';
    this.BILLING_SCHEDULE = 'billingschedule';
    this.BIN = 'bin';
    this.BIN_TRANSFER = 'bintransfer';
    this.BIN_WORKSHEET = 'binworksheet';
    this.BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder';
    this.BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript';
    this.CALENDAR_EVENT = 'calendarevent';
    this.CAMPAIGN = 'campaign';
    this.CASH_REFUND = 'cashrefund';
    this.CASH_SALE = 'cashsale';
    this.CHARGE = 'charge';
    this.CHECK = 'check';
    this.CLASSIFICATION = 'classification';
    this.CLIENT_SCRIPT = 'clientscript';
    this.COMPETITOR = 'competitor';
    this.CONTACT = 'contact';
    this.COUPON_CODE = 'couponcode';
    this.CREDIT_MEMO = 'creditmemo';
    this.CURRENCY = 'currency';
    this.CUSTOMER = 'customer';
    this.CUSTOMER_CATEGORY = 'customercategory';
    this.CUSTOMER_DEPOSIT = 'customerdeposit';
    this.CUSTOMER_PAYMENT = 'customerpayment';
    this.CUSTOMER_REFUND = 'customerrefund';
    this.CUSTOM_TRANSACTION = 'customtransaction';
    this.DEPARTMENT = 'department';
    this.DEPOSIT = 'deposit';
    this.DEPOSIT_APPLICATION = 'depositapplication';
    this.DESCRIPTION_ITEM = 'descriptionitem';
    this.DISCOUNT_ITEM = 'discountitem';
    this.DOWNLOAD_ITEM = 'downloaditem';
    this.DRIVERS_LICENSE = 'driverslicense';
    this.EMPLOYEE = 'employee';
    this.ENTITY_ACCOUNT_MAPPING = 'entityaccountmapping';
    this.ESTIMATE = 'estimate';
    this.EXPENSE_CATEGORY = 'expensecategory';
    this.EXPENSE_REPORT = 'expensereport';
    this.FAIR_VALUE_PRICE = 'fairvalueprice';
    this.FOLDER = 'folder';
    this.GENERIC_RESOURCE = 'genericresource';
    this.GIFT_CERTIFICATE = 'giftcertificate';
    this.GIFT_CERTIFICATE_ITEM = 'giftcertificateitem';
    this.GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping';
    this.GOVERNMENT_ISSUED_ID_TYPE = 'governmentissuedidtype';
    this.HCM_JOB = 'hcmjob';
    this.INTER_COMPANY_JOURNAL_ENTRY = 'intercompanyjournalentry';
    this.INTER_COMPANY_TRANSFER_ORDER = 'intercompanytransferorder';
    this.INVENTORY_ADJUSTMENT = 'inventoryadjustment';
    this.INVENTORY_COST_REVALUATION = 'inventorycostrevaluation';
    this.INVENTORY_COUNT = 'inventorycount';
    this.INVENTORY_DETAIL = 'inventorydetail';
    this.INVENTORY_ITEM = 'inventoryitem';
    this.INVENTORY_NUMBER = 'inventorynumber';
    this.INVENTORY_TRANSFER = 'inventorytransfer';
    this.INVOICE = 'invoice';
    this.ISSUE = 'issue';
    this.ITEM_ACCOUNT_MAPPING = 'itemaccountmapping';
    this.ITEM_DEMAND_PLAN = 'itemdemandplan';
    this.ITEM_FULFILLMENT = 'itemfulfillment';
    this.ITEM_GROUP = 'itemgroup';
    this.ITEM_RECEIPT = 'itemreceipt';
    this.ITEM_REVISION = 'itemrevision';
    this.ITEM_SUPPLY_PLAN = 'itemsupplyplan';
    this.JOB = 'job';
    this.JOB_REQUISITION = 'jobrequisition';
    this.JOURNAL_ENTRY = 'journalentry';
    this.KIT_ITEM = 'kititem';
    this.KUDOS = 'kudos';
    this.LEAD = 'lead';
    this.LOCATION = 'location';
    this.LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumberedassemblyitem';
    this.LOT_NUMBERED_INVENTORY_ITEM = 'lotnumberedinventoryitem';
    this.MANUFACTURING_COST_TEMPLATE = 'manufacturingcosttemplate';
    this.MANUFACTURING_OPERATION_TASK = 'manufacturingoperationtask';
    this.MANUFACTURING_ROUTING = 'manufacturingrouting';
    this.MAP_REDUCE_SCRIPT = 'mapreducescript';
    this.MARKUP_ITEM = 'markupitem';
    this.MASSUPDATE_SCRIPT = 'massupdatescript';
    this.MESSAGE = 'message';
    this.MFG_PLANNED_TIME = 'mfgplannedtime';
    this.NEXUS = 'nexus';
    this.NON_INVENTORY_ITEM = 'noninventoryitem';
    this.NOTE = 'note';
    this.OPPORTUNITY = 'opportunity';
    this.ORGANIZATION_VALUE = 'organizationvalue';
    this.OTHER_CHARGE_ITEM = 'otherchargeitem';
    this.OTHER_GOVERNMENT_ISSUED_ID = 'othergovernmentissuedid';
    this.OTHER_NAME = 'othername';
    this.PARTNER = 'partner';
    this.PASSPORT = 'passport';
    this.PAYCHECK_JOURNAL = 'paycheckjournal';
    this.PAYMENT_ITEM = 'paymentitem';
    this.PAYROLL_ITEM = 'payrollitem';
    this.PHONE_CALL = 'phonecall';
    this.PORTLET = 'portlet';
    this.POSITION = 'position';
    this.PRICE_LEVEL = 'pricelevel';
    this.PROJECT_EXPENSE_TYPE = 'projectexpensetype';
    this.PROJECT_TASK = 'projecttask';
    this.PROJECT_TEMPLATE = 'projecttemplate';
    this.PROMOTION_CODE = 'promotioncode';
    this.PROSPECT = 'prospect';
    this.PURCHASE_CONTRACT = 'purchasecontract';
    this.PURCHASE_ORDER = 'purchaseorder';
    this.PURCHASE_REQUISITION = 'purchaserequisition';
    this.RATE_PLAN = 'rateplan';
    this.RESOURCE_ALLOCATION = 'resourceallocation';
    this.RESTLET = 'restlet';
    this.RETURN_AUTHORIZATION = 'returnauthorization';
    this.REVENUE_ARRANGEMENT = 'revenuearrangement';
    this.REVENUE_COMMITMENT = 'revenuecommitment';
    this.REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal';
    this.REVENUE_PLAN = 'revenueplan';
    this.REV_REC_SCHEDULE = 'revrecschedule';
    this.REV_REC_TEMPLATE = 'revrectemplate';
    this.SALES_ORDER = 'salesorder';
    this.SALES_TAX_ITEM = 'salestaxitem';
    this.SCHEDULED_SCRIPT = 'scheduledscript';
    this.SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance';
    this.SCRIPT_DEPLOYMENT = 'scriptdeployment';
    this.SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem';
    this.SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem';
    this.SERVICE_ITEM = 'serviceitem';
    this.SHIP_ITEM = 'shipitem';
    this.SOLUTION = 'solution';
    this.STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry';
    this.SUBSCRIPTION = 'subscription';
    this.SUBSCRIPTION_CHANGE_ORDER = 'subscriptionchangeorder';
    this.SUBSCRIPTION_LINE = 'subscriptionline';
    this.SUBSCRIPTION_PLAN = 'subscriptionplan';
    this.SUBSIDIARY = 'subsidiary';
    this.SUBTOTAL_ITEM = 'subtotalitem';
    this.SUITELET = 'suitelet';
    this.SUPPORT_CASE = 'supportcase';
    this.TASK = 'task';
    this.TAX_GROUP = 'taxgroup';
    this.TAX_PERIOD = 'taxperiod';
    this.TAX_TYPE = 'taxtype';
    this.TERM = 'term';
    this.TERMINATION_REASON = 'terminationreason';
    this.TIME_BILL = 'timebill';
    this.TIME_ENTRY = 'timeentry';
    this.TIME_OFF_CHANGE = 'timeoffchange';
    this.TIME_OFF_PLAN = 'timeoffplan';
    this.TIME_OFF_REQUEST = 'timeoffrequest';
    this.TIME_OFF_RULE = 'timeoffrule';
    this.TIME_OFF_TYPE = 'timeofftype';
    this.TIME_SHEET = 'timesheet';
    this.TOPIC = 'topic';
    this.TRANSFER_ORDER = 'transferorder';
    this.UNITS_TYPE = 'unitstype';
    this.USEREVENT_SCRIPT = 'usereventscript';
    this.VENDOR = 'vendor';
    this.VENDOR_BILL = 'vendorbill';
    this.VENDOR_CATEGORY = 'vendorcategory';
    this.VENDOR_CREDIT = 'vendorcredit';
    this.VENDOR_PAYMENT = 'vendorpayment';
    this.VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization';
    this.WORKFLOW_ACTION_SCRIPT = 'workflowactionscript';
    this.WORK_ORDER = 'workorder';
    this.WORK_ORDER_CLOSE = 'workorderclose';
    this.WORK_ORDER_COMPLETION = 'workordercompletion';
    this.WORK_ORDER_ISSUE = 'workorderissue';
    this.BILLING_ACCOUNT_BILL_CYCLE = 'billingaccountbillcycle';
    this.DELETED_RECORD = 'deletedrecord';
    this.END_TO_END_TIME = 'endtoendtime';
    this.GL_LINES_AUDIT_LOG = 'gllinesauditlog';
    this.RECENT_RECORD = 'recentrecord';
    this.ROLE = 'role';
    this.SAVED_SEARCH = 'savedsearch';
    this.SUBSCRIPTION_RENEWAL_HISTORY = 'subscriptionrenewalhistory';
    this.SUITE_SCRIPT_DETAIL = 'suitescriptdetail';
    this.TAX_DETAIL = 'taxdetail';
    this.UBER = 'uber';
    this.W_S_LOG = 'wslog';
    this.ENTITY = 'entity';
    this.ACTIVITY = 'activity';
    this.ITEM = 'item';
    this.TRANSACTION = 'transaction';
}
search.prototype.Type = searchType;

/**
 * Return a new instance of search.Search object.
 *
 * @classDescription Encapsulation of a search.
 * @constructor
 * @param {string} type (optional)  the record type you are searching
 * @param {number} id  the internal ID of the search
 * @param {Filter | array of search.Filter} filters (optional)  a single filter object or an array of filters used to filter the search
 * @param {Column|string|Column[]|string[]} columns (optional)  columns to be returned from the search
 * @return {Search}
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER when provided filters contain a different type than search.Filter
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN when provided columns contain a different type than search.Column or string
 *
 * @since 2015.2
 */
function Search() {

    /**
     * Search type.
     * @name Search#searchType
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.searchType = undefined;
    /**
     * Internal ID of the search.
     * @name Search#searchId
     * @type number
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.searchId = undefined;
    /**
     * Search filters.
     * @name Search#filters
     * @type Filter[] (setter accepts also a single search.Filter object)
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER when setting value of different type than search.Filter
     */
    this.filters = undefined;
    /**
     * Allows to set or get the search filters in the form of a search filter expression.
     * @name Search#filterExpression
     * @type Array[]
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when setting invalid search filter expression
     */
    this.filterExpression = undefined;
    /**
     * Columns to be returned from the search.
     * @name Search#columns
     * @type Column[]|string[] (setter accepts also a single search.Column or string)
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN when setting value of different type than search.Column or string
     */
    this.columns = undefined;
    /**
     * Name of the saved search. Needs to be set before saving the search.
     * @name Search#title
     * @type string
     */
    this.title = undefined;
    /**
     * Customer ID of the saved search (string starting with 'customsearch'). If not set, then it is automatically generated upon save.
     * @name Search#id
     * @type string
     */
    this.id = undefined;
    /**
     * Specifies whether the search is public or private.
     * @name Search#isPublic
     * @type boolean
     */
    this.isPublic = undefined;
    /**
     * Saves the current search as a saved search. Before calling save() the title property must be set. The optional
     * id property may also be set, if it's not then it's automatically generated. The title and id properties may be set:
     * 1) upon creation (parameters title and id of the options object)
     * 2) by explicitly setting the properties (e.g. Search.title = 'foo'; Search.id = 'customsearch_bar'; )
     * 3) by loading a previously saved search (the properties are inherited)
     * @governance 5 units
     * @returns {number} the internal search ID of the saved search
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if title property is not set
     * @throws {SuiteScriptError} NAME_ALREADY_IN_USE if the search name (title property) is not unique
     * @throws {SuiteScriptError} SSS_DUPLICATE_SEARCH_SCRIPT_ID if the search ID (id property) is not unique
     * @since 2015.2
     */
    this.save = function() {}
    this.save = {
        /**
         * Saves the current search as a saved search. Before calling save() the title property must be set. The optional
         * id property may also be set, if it's not then it's automatically generated. The title and id properties may be set:
         * 1) upon creation (parameters title and id of the options object)
         * 2) by explicitly setting the properties (e.g. Search.title = 'foo'; Search.id = 'customsearch_bar'; )
         * 3) by loading a previously saved search (the properties are inherited)
         * @governance 5 units
         * @returns {number} the internal search ID of the saved search
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if title property is not set
         * @throws {SuiteScriptError} NAME_ALREADY_IN_USE if the search name (title property) is not unique
         * @throws {SuiteScriptError} SSS_DUPLICATE_SEARCH_SCRIPT_ID if the search ID (id property) is not unique
         * @since 2015.2
         */
        promise: function () {}
    }
    // function saveThis() {}
    // saveThis.prototype.promise = function() {};
    // this.save = new saveThis();

    /**
     * Runs the current search.
     * @returns {ResultSet} the result set object
     * @since 2015.2
     */
    this.run = function() {};

    /**
     * Runs the current search with a paged interface.
     * @returns {SearchPagedData} PagedData object that allows user to page through the search result
     * @since 2016.1
     */
    this.runPaged = function() {};

    /**
     * Returns the object type name (search.Search)
     * @returns {string}
     */
    this.toString = function() {};

    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */
    this.toJSON = function() {};
}

/**
 * Return a new instance of search.Filter object.
 *
 * @classDescription Encapsulation of a search filter.
 * @protected
 * @constructor
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
 *
 * @since 2015.2
 */
function Filter() {

    /**
     * Field name for this search filter.
     * @name Filter#name
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.name = undefined;
    /**
     * Join ID for this search filter.
     * @name Filter#join
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.join = undefined;
    /**
     * Filter operator.
     * @name Filter#operator
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.operator = undefined;
    /**
     * Summary type for this search filter.
     * @name Filter#summary
     * @type string
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_SUM when setting invalid summary type
     */
    this.summary = undefined;
    /**
     * Formula used for this search filter.
     * @name Filter#formula
     * @type string
     */
    this.formula = undefined;
    /**
     * Returns the object type name (search.Filter)
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 * Return a new instance of search.Column object.
 *
 * @classDescription Encapsulation of a search column.
 * @protected
 * @constructor
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
 *
 * @since 2015.2
 */
function Column() {

    /**
     * The name of the search column.
     * @name Column#name
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.name = undefined;
    /**
     * The join ID for this search column.
     * @name Column#join
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.join = undefined;
    /**
     * The summary type for this search column.
     * @name Column#summary
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.summary = undefined;
    /**
     * The formula used for this search column.
     * @name Column#formula
     * @type string
     */
    this.formula = undefined;
    /**
     * The label used for this search column.
     * @name Column#label
     * @type string
     */
    this.label = undefined;
    /**
     * The function used in this search column.
     * @name Column#function
     * @type string
     * @throws {SuiteScriptError} INVALID_SRCH_FUNCTN when setting an unknown function is attempted
     */
    this['function'] = undefined;
    /**
     * The sort direction for this search column. Use values from the Sort enum.
     * @name Column#sort
     * @type string
     */
    this.sort = undefined;
    /**
     * Returns the search column for which the minimal or maximal value should be found when returning the search.Column value.
     * For example, can be set to find the most recent or earliest date, or the largest or smallest amount for a record,
     * and then the search.Column value for that record is returned. Can only be used when summary type is MIN or MAX.
     * @param {Object} options  the options object
     * @param {string} options.name  name of the search column for which the minimal or maximal value should be found
     * @param {string} options.join  join id for this search column
     * @returns {Column} this search column
     * @since 2015.2
     */
    this.setWhenOrderedBy = function(options) {};

    /**
     * Returns the object type name (search.Column)
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 * Return a new instance of search.ResultSet object.
 *
 * @classDescription Encapsulation of a search result set.
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function ResultSet() {

    /**
     * List of columns contained in this result set.
     * @name ResultSet#columns
     * @type Column[]
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.columns = undefined;
    /**
     * Retrieve a slice of the search result set. Only 1000 results can be returned at a time. If there are fewer results
     * available than requested, then the array will be truncated.
     * @governance 10 units
     * @param {Object} options  the options object
     * @param {number} options.start  the index number of the first result to return, inclusive
     * @param {number} options.end  the index number of the last result to return, exclusive
     * @returns {Result[]} the requested slice of the search result set
     * @since 2015.2
     */
    this.getRange = function(options) {};

    /**
     * Calls the developer-defined callback function for every result in this set. The result set processed by each() may have maximum 4000 rows.
     * The callback function has the following signature:
     *   boolean callback(result.Result result);
     * If the return value of the callback is false, the iteration over results is stopped, otherwise it continues.
     * Note that the work done in the context of the callback function counts towards the governance of the script that called it.
     * @governance 10 units
     * @param {Function} callback  the function called for each result in the result set
     * @since 2015.2
     */
    this.each = function(options) {};

    /**
     * Returns the object type name (search.ResultSet)
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 * Return a new instance of search.Result object.
 *
 * @classDescription Encapsulation of a search result.
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function Result() {

    /**
     * Record type of the result.
     * @name Result#recordType
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.recordType = undefined;
    /**
     * Record internal ID of the result.
     * @name Result#id
     * @type number
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.id = undefined;
    /**
     * List of columns contained in this result.
     * @name Result#columns
     * @type Column[]
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.columns = undefined;
    /**
     * Returns the value of a specified search return column. The column may be specified in two ways:
     * 1) by providing a search.Column object
     * 2) by providing name, join and summary parameters
     * @param {search.Column} column  search return column object whose value you want to return
     * - or -
     * @param {Object} options  the options object
     * @param {string} options.name  the name of the search column whose value you want to return
     * @param {string} [options.join] (optional)  the join ID for this search column
     * @param {string} [options.summary] (optional)  the summary type used for this search column
     * @returns {string} string value of the search result column
     * @since 2015.2
     */
    this.getValue = function(options) {};

    /**
     * Returns the UI display name (i.e. the text value) of a specified search return column.
     * Note that this method is supported on select, image and document fields only.
     * The column may be specified in two ways:
     * 1) by providing a search.Column object
     * 2) by providing name, join and summary parameters
     * @param {Column} column  search return column object whose value you want to return
     * - or -
     * @param {Object} options  the options object
     * @param {string} options.name  the name of the search column whose value you want to return
     * @param {string} [options.join] (optional)  the join ID for this search column
     * @param {string} [options.summary] (optional)  the summary type used for this search column
     * @returns {string} UI display name (text value) of the search result column
     * @since 2015.2
     */
    this.getText = function(options) {};

    /**
     * Returns the object type name (search.Result)
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function SearchPagedData() {

    /**
     * rows per page - defined in search definition [5 - 1000]
     * @type {number}
     */
    this.pageSize = undefined;
    /**
     * total row count
     * @type {number}
     */
    this.count = undefined;
    /**
     * @type {SearchPageRange}
     */
    this.pageRanges = undefined;}

/**
 *
 * @protected
 * @constructor
 */
function SearchPageRange() {

    /**
     * @return {number}
     */
    this.getIndex = function(options) {};

    /**
     *
     * @return {string}
     */
    this.getCompoundKey = function(options) {};

    /**
     *
     * @return {string}
     */
    this.getCompoundLabel = function(options) {};
}

search = new search();
/**
 * @type {search}
 */
N.prototype.search = search;

/**
 * SuiteScript selectFieldOptions module
 *
 * @private
 * @module N/selectFieldOptions
 * @NApiVersion 2.0
 *
 */
function selectFieldOptions() {}
/**
 * Returns filter options, segmentation options and value options relevant to a field
 * with respect to the state of the supplied record.
 *
 * @governance 0 units
 * @param {Object} options
 * @param {Object} options.record
 * @param {string} options.fieldId
 * @param {string} [options.group=-ALLGROUP-]
 * @param {string} [options.searchText=]
 * @param {number|string} [options.segment=1]
 *
 * @returns {Object} result
 * @returns {Object[]} result.filters
 * @returns {string} result.filters[].value
 * @returns {string} result.filters[].label
 * @returns {Object[]} result.segments
 * @returns {string} result.segments[].value
 * @returns {string} result.segments[].label
 * @returns {Object[]} result.options
 * @returns {string} result.options[].key
 * @returns {string} result.options[].value
 * @returns {string} result.options[].label
 * @returns {string[]} result.options[].description
 *
 * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if options is missing
 * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if options.record is missing
 * @throws {SuiteScriptError} REQUIRED_PARAM_MISSING if options.fieldId is missing
 * @throws {SuiteScriptError} INVALID_KEY_OR_REF if options.record does not have a field with an id macthing options.fieldId
 * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.group is not a string
 * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.searchText is not a string
 * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.segment is not an integer
 *
 * @since 2015.2
 */
selectFieldOptions.prototype['get'] = function(options) {};

/**
 * responsible for taking an options object and making a server request to retieve select field options data
 *
 * @param {Object} options
 * @param {Object} options.record
 * @param {string} options.fieldId
 * @param {string} [options.group=-ALLGROUP-]
 * @param {string} [options.searchText=]
 * @param {number|string} [options.segment=1]
 *
 * @returns {Object} result
 * @returns {Object[]} result.filters
 * @returns {string} result.filters[].value
 * @returns {string} result.filters[].label
 * @returns {Object[]} result.segments
 * @returns {string} result.segments[].value
 * @returns {string} result.segments[].label
 * @returns {Object[]} result.options
 * @returns {string} result.options[].key
 * @returns {string} result.options[].value
 * @returns {string} result.options[].label
 * @returns {string[]} result.options[].description
 */
function fetchOptions() {
}

selectFieldOptions = new selectFieldOptions();
/**
 * @type {selectFieldOptions}
 */
N.prototype.selectFieldOptions = selectFieldOptions;

/**
 * SuiteScript module
 *
 * @module N/sso
 * @NApiVersion 2.x
 *
 */
function sso() {}
/**
 * Generate a new SuiteSignOn token for a user
 *
 * @governance 20 units
 *
 * @param {Object} options
 * @param {string} options.suiteSignOnId
 * @return {string}
 * @throws {SuiteScriptError} SSO_CONFIG_REQD Thrown when the SuiteSignOn record is not configured for use with this script.
 * @throws {SuiteScriptError} INVALID_SSO Thrown when the provided SuiteSignOn record ID is not valid.
 */
sso.prototype.generateSuiteSignOnToken = function(options) {};

sso = new sso();
/**
 * @type {sso}
 */
N.prototype.sso = sso;

/**
 * SuiteScript module - defines the Suitelet response and request objects
 *
 * @module N/suiteletContext
 * @NApiVersion 2.x
 *
 */
function suiteletContext() {}
/**
 * Return a new instance of ServerRequest object that carries incoming HTTP request info.
 *
 * @classDescription Encapsulation of the HTTP request incoming to the suitelet.
 * @return {http.ServerRequest}
 * @constructor
 *
 * @since 2015.2
 */
function ServerRequest() {

    /**
     * Server request headers.
     * @name ServerRequest#headers
     * @type Object
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.headers = undefined;
    /**
     * Server request parameters.
     * @name ServerRequest#parameters
     * @type Object
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.parameters = undefined;
    /**
     * Server request files.
     * @name ServerRequest#files
     * @type Object
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.files = undefined;
    /**
     * Server request body.
     * @name ServerRequest#body
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.body = undefined;
    /**
     * Server request HTTP method.
     * @name ServerRequest#method
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.method = undefined;
    /**
     * Server request URL.
     * @name ServerRequest#url
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.url = undefined;
    /**
     * Returns the number of lines in a sublist.
     * @param {Object} options
     * @param {string} options.group sublist internal ID
     * @returns {integer} the integer value of the number of line items in the sublist
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    this.getLineCount = function(options) {};

    /**
     * Returns the value of a sublist line item.
     * @param {Object} options
     * @param {string} options.group sublist internal ID
     * @param {string} options.name the name of the field whose value is returned
     * @param {string} options.line the line number for this field (1-based)
     * @returns {string} the string value of the line item
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    this.getSublistValue = function(options) {};

    /**
     * Returns the object type name (http.ServerRequest)
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 * Return a new instance of ServerResponse object that carries the response to an incoming HTTP request.
 *
 * @classDescription Encapsulation of the HTTP response that will be returned to the browser.
 * @return {http.ServerResponse}
 * @constructor
 *
 * @since 2015.2
 */
function ServerResponse() {

    /**
     * Server response headers.
     * @name ServerResponse#headers
     * @type Object
     * @returns {Object} key/value pairs with all the headers; if multiple values are assigned to one header name, they are returned as an array
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    this.headers = undefined;
    /**
     * Sets the value of a response header.
     * @param {Object} options
     * @param {string} options.name the name of the header
     * @param {string} options.value the value used to set the header
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
     */
    this.setHeader = function(options) {};

    /**
     * Adds a header to the response. If this header has already been set, this will add another line for that header.
     * @param {Object} options
     * @param {string} options.name the name of the header
     * @param {string} options.value the value used to set the header
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
     */
    this.addHeader = function(options) {};

    /**
     * Sets the redirect URL by resolving to a NetSuite resource. Note that all parameters must be prefixed with custparam.
     * @param {Object} options
     * @param {string} options.type the base type for this resource - one of RECORD, TASKLINK or SUITELET
     * @param {string} options.identifier the primary id for this resource
     * @param {string} options.id (optional) the secondary id for this resource
     * @param {boolean} options.editMode (optional) for RECORD calls, this determines whether to return a URL for the record in edit mode or view mode
     * @param {Object} options.parameters (optional) additional URL parameters as name/value pairs
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL_CATEGORY if type is none of RECORD, TASKLINK or SUITELET
     * @throws {error.SuiteScriptError} SSS_INVALID_TASK_ID if type is TASKLINK and an invalid task identifier is passed in the options.identifier parameter
     * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if type is RECORD and an invalid record type is passed in the options.identifier parameter
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 if type is SUITELET and an invalid script ID and deployment ID are passed in the options.identifier and options.id parameters
     */
    this.sendRedirect = function(options) {};

    /**
     * Write information (text/xml/html) to the response.
     * @param {Object} options
     * @param {string} options.output string or file being written
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    this.write = function(options) {};

    /**
     * Write line information (text/xml/html) to the response.
     * @param {Object} options
     * @param {string} options.output string being written
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    this.writeLine = function(options) {};

    /**
     * Generates a page using a page element object.
     * @param {Object} options
     * @param {serverWidget.Assistant|serverWidget.Form|serverWidget.List} options.pageObject standalone page object: assistant, form or list
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    this.writePage = function(options) {};

    /**
     * Write a file to the response.
     * @param {Object} options
     * @param {file.File} options.file the file to be written
     * @param {boolean} options.isInline (optional) true if the file is inline
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a file.File object
     */
    this.writeFile = function(options) {};

    /**
     * Returns the value for a header returned in the response.
     * @param {Object} options
     * @param {string} options.name the header name
     * @returns {string|Array} the value of the header; if multiple values are assigned to the header name, they are returned as an array
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    this.getHeader = function(options) {};

    /**
     * Generates and renders a PDF directly to the response.
     * @param {Object} options
     * @param {string} options.xmlString content of your PDF
     * @governance 10 units
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    this.renderPdf = function(options) {};

    /**
     * Sets CDN caching for a period of time.
     * @param {Object} options
     * @param {string} options.type constant value to represent the caching duration, see http.CacheDuration enum
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    this.setCdnCacheable = function(options) {};

    /**
     * Returns the object type name (http.ServerResponse)
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

suiteletContext = new suiteletContext();
/**
 * @type {suiteletContext}
 */
N.prototype.suiteletContext = suiteletContext;

/**
 * SuiteScript module
 *
 * @module N/task
 * @NApiVersion 2.x
 *
 */
function task() {}
/**
 * Creates a task of the given type and returns the task object.
 *
 * @param {Object} options
 * @param {string} options.taskType specifies the type of task to be created; use values from the task.TaskType enum
 * @returns {task.ScheduledScriptTask | task.MapReduceScriptTask | task.CsvImportTask | task.EntityDeduplicationTask | task.WorkflowTriggerTask}
 */
task.prototype.create = function(options) {};

/**
 * Check current status of a submitted task. The task to be checked is identified by its task ID.
 *
 * @typedef task.TaskStatus
 * @property {String} status
 *
 * @param {Object} options
 * @param {string} options.taskId
 * @returns {task.TaskStatus}
 */
task.prototype.checkStatus = function(options) {};

/**
 * @enum
 */
function taskTaskType() {
    this.SCHEDULED_SCRIPT = 'SCHEDULED_SCRIPT';
    this.MAP_REDUCE = 'MAP_REDUCE';
    this.CSV_IMPORT = 'CSV_IMPORT';
    this.ENTITY_DEDUPLICATION = 'ENTITY_DEDUPLICATION';
    this.WORKFLOW_TRIGGER = 'WORKFLOW_TRIGGER';
}
task.prototype.TaskType = taskTaskType;

/**
 * @enum
 */
function taskTaskStatus() {
    this.PENDING = 'PENDING';
    this.PROCESSING = 'PROCESSING';
    this.COMPLETE = 'COMPLETE';
    this.FAILED = 'FAILED';
}
task.prototype.TaskStatus = taskTaskStatus;

/**
 * @enum
 */
function taskMasterSelectionMode() {
    this.CREATED_EARLIEST = 'CREATED_EARLIEST';
    this.MOST_RECENT_ACTIVITY = 'MOST_RECENT_ACTIVITY';
    this.MOST_POPULATED_FIELDS = 'MOST_POPULATED_FIELDS';
    this.SELECT_BY_ID = 'SELECT_BY_ID';
}
task.prototype.MasterSelectionMode = taskMasterSelectionMode;

/**
 * @enum
 */
function taskDedupeMode() {
    this.MERGE = 'MERGE';
    this.DELETE = 'DELETE';
    this.MAKE_MASTER_PARENT = 'MAKE_MASTER_PARENT';
    this.MARK_AS_NOT_DUPES = 'MARK_AS_NOT_DUPES';
}
task.prototype.DedupeMode = taskDedupeMode;

/**
 * @enum
 */
function taskDedupeEntityType() {
    this.CUSTOMER = 'CUSTOMER';
    this.CONTACT = 'CONTACT';
    this.VENDOR = 'VENDOR';
    this.PARTNER = 'PARTNER';
    this.LEAD = 'LEAD';
    this.PROSPECT = 'PROSPECT';
}
task.prototype.DedupeEntityType = taskDedupeEntityType;

/**
 * @enum
 */
function taskMapReduceStage() {
    this.GET_INPUT = 'GET_INPUT';
    this.MAP = 'MAP';
    this.SHUFFLE = 'SHUFFLE';
    this.REDUCE = 'REDUCE';
    this.SUMMARIZE = 'SUMMARIZE';
}
task.prototype.MapReduceStage = taskMapReduceStage;

/**
 * @protected
 * @constructor
 */
function ScheduledScriptTask() {

    /**
     * The ID of the task.
     * @name ScheduledScriptTask#id
     * @type string
     */
    this.id = undefined;
    /**
     * The Internal ID or Script ID of the Script record.
     * @name ScheduledScriptTask#scriptId
     * @type int | string
     */
    this.scriptId = undefined;
    /**
     * The Internal ID or Script ID of the Script Deployment record.
     * @name ScheduledScriptTask#deploymentId
     * @type int | string
     */
    this.deploymentId = undefined;
    /**
     * Key/value pairs which override static script parameter field values on the deployment.
     * Used to dynamically pass context to the script.
     * @name ScheduledScriptTask#params
     * @type Object
     */
    this.params = undefined;
    /**
     * Submits the task and returns an unique ID.
     *
     * @governance 20 units
     *
     * @returns {String} taskId
     * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    this.submit = function(options) {};

    /**
     * Returns the object type name (task.ScheduledScriptTask).
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function ScheduledScriptTaskStatus() {

    /**
     * The taskId associated with the specified task.
     * @name ScheduledScriptTaskStatus#taskId
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.taskId = undefined;
    /**
     * Script ID.
     * @name ScheduledScriptTaskStatus#scriptId
     * @type int
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.scriptId = undefined;
    /**
     * Script deployment ID.
     * @name ScheduledScriptTaskStatus#deploymentId
     * @type int
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.deploymentId = undefined;
    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values.
     * @name ScheduledScriptTaskStatus#status
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.status = undefined;
    /**
     * Returns the object type name (task.ScheduledScriptTaskStatus).
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function MapReduceScriptTask() {

    /**
     * The ID of the task.
     * @name MapReduceScriptTask#id
     * @type string
     */
    this.id = undefined;
    /**
     * The Internal ID or Script ID of the Script record.
     * @name MapReduceScriptTask#scriptId
     * @type int | string
     */
    this.scriptId = undefined;
    /**
     * The Internal ID or Script ID of the Script Deployment record.
     * @name MapReduceScriptTask#deploymentId
     * @type int | string
     */
    this.deploymentId = undefined;
    /**
     * Key/value pairs which override static script parameter field values on the deployment.
     * Used to dynamically pass context to the script.
     * @name MapReduceScriptTask#params
     * @type Object
     */
    this.params = undefined;
    /**
     * Submits the task and returns an unique ID.
     *
     * @governance 20 units
     * @returns {String} taskId
     */
    this.submit = function(options) {};

    /**
     * Returns the object type name (task.MapReduceScriptTask).
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function MapReduceScriptTaskStatus() {

    /**
     * The taskId associated with the specified task.
     * @name MapReduceScriptTaskStatus#taskId
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.taskId = undefined;
    /**
     * Script ID.
     * @name MapReduceScriptTaskStatus#scriptId
     * @type int
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.scriptId = undefined;
    /**
     * Script deployment ID.
     * @name MapReduceScriptTaskStatus#deploymentId
     * @type int
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.deploymentId = undefined;
    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values.
     * @name MapReduceScriptTaskStatus#status
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.status = undefined;
    /**
     * Represents the current stage of the Map/Reduce script. Returns one of the task.MapReduceStage enum values.
     * @name MapReduceScriptTaskStatus#stage
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.stage = undefined;
    /**
     * Get percentage of completion for the current stage. Note that INPUT and SUMMARIZE are either 0% or 100% complete at any given time.
     *
     * @governance 10 units
     * @returns {Number}
     */
    this.getPercentageCompleted = function(options) {};

    /**
     * Total number of records/rows not yet processed by the MAP phase.
     *
     * @governance 10 units
     * @returns {Number}
     */
    this.getPendingMapCount = function(options) {};

    /**
     * Total number of record/row inputs to the MAP phase.
     *
     * @governance 10 units
     * @returns {Number}
     */
    this.getTotalMapCount = function(options) {};

    /**
     * Total number of bytes not yet processed by the MAP phase (a component of total size).
     *
     * @governance 25 units
     * @returns {Number}
     */
    this.getPendingMapSize = function(options) {};

    /**
     * Total number of records/rows not yet processed by the REDUCE phase.
     *
     * @governance 10 units
     * @returns {Number}
     */
    this.getPendingReduceCount = function(options) {};

    /**
     * Total number of record/row inputs to the REDUCE phase.
     *
     * @governance 10 units
     * @returns {Number}
     */
    this.getTotalReduceCount = function(options) {};

    /**
     * Total number of bytes not yet processed by the REDUCE phase (a component of total size).
     *
     * @governance 25 units
     * @returns {Number}
     */
    this.getPendingReduceSize = function(options) {};

    /**
     * Total number of records/rows not yet iterated by the script.
     *
     * @governance 10 units
     * @returns {Number}
     */
    this.getPendingOutputCount = function(options) {};

    /**
     * Returns the total size in bytes of all key/value pairs written as output (a component of total size).
     *
     * @governance 25 units
     * @returns {Number}
     */
    this.getPendingOutputSize = function(options) {};

    /**
     * Total number of record/row inputs to the OUTPUT phase.
     *
     * @governance 10 units
     * @returns {Number}
     */
    this.getTotalOutputCount = function(options) {};

    /**
     * Returns the total size in bytes of all stored work in progress.
     *
     * @governance 25 units
     * @returns {Number}
     */
    this.getCurrentTotalSize = function(options) {};

    /**
     * Returns the object type name (task.MapReduceScriptTaskStatus).
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function CsvImportTask() {

    /**
     * The ID of the task.
     * @name CsvImportTask#id
     * @type string
     */
    this.id = undefined;
    /**
     * A file.File object containing data to be imported OR a string containing raw CSV text to be imported.
     * @name CsvImportTask#importFile
     * @type file.File | string
     */
    this.importFile = undefined;
    /**
     * Internal ID or script ID of a saved import map to be used for the import.
     * @name CsvImportTask#mappingId
     * @type int | string
     */
    this.mappingId = undefined;
    /**
     * Overrides the CSV import queue preference.
     * @name CsvImportTask#queueId
     * @type int
     */
    this.queueId = undefined;
    /**
     * The name of the import job to be shown on the status page for CSV imports.
     * @name CsvImportTask#name
     * @type string
     */
    this.name = undefined;
    /**
     * A map of key/value pairs "sublist->file" for a multi-file import job.
     * The key defines the internal ID of the record sublist for which data is being imported.
     * The value is a file.File object containing data to be imported OR a string containing raw CSV text to be imported.
     * @name CsvImportTask#linkedFiles
     * @type Object
     */
    this.linkedFiles = undefined;
    /**
     * Submits the task and returns an unique ID.
     *
     * @governance 100 units
     *
     * @returns {String} taskId
     * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    this.submit = function(options) {};

    /**
     * Returns the object type name (task.CsvImportTask).
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 *
 * @protected
 * @constructor
 */
function CsvImportTaskStatus() {

    /**
     * The taskId associated with the specified task.
     * @name CsvImportTaskStatus#taskId
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.taskId = undefined;
    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values.
     * @name CsvImportTaskStatus#status
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.status = undefined;
    /**
     * Returns the object type name (task.CsvImportTaskStatus).
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function EntityDeduplicationTask() {

    /**
     * The ID of the task.
     * @name EntityDeduplicationTask#id
     * @type string
     */
    this.id = undefined;
    /**
     * Represents the entity type. Use values from the task.DedupeEntityType enum.
     * @name EntityDeduplicationTask#entityType
     * @type string
     */
    this.entityType = undefined;
    /**
     * Master record ID.
     * @name EntityDeduplicationTask#masterRecordId
     * @type int
     */
    this.masterRecordId = undefined;
    /**
     * Master selection mode. Use values from the task.MasterSelectionMode enum.
     * @name EntityDeduplicationTask#masterSelectionMode
     * @type string
     */
    this.masterSelectionMode = undefined;
    /**
     * Deduplication mode. Use values from the task.DedupeMode enum.
     * @name EntityDeduplicationTask#dedupeMode
     * @type string
     */
    this.dedupeMode = undefined;
    /**
     * Records to deduplicate.
     * @name EntityDeduplicationTask#recordIds
     * @type int[]
     */
    this.recordIds = undefined;
    /**
     * Submits the task and returns an unique ID.
     *
     * @governance 100 units
     *
     * @returns {String} taskId
     * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    this.submit = function(options) {};

    /**
     * Returns the object type name (task.EntityDeduplicationTask).
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 *
 * @protected
 * @constructor
 */
function EntityDeduplicationTaskStatus() {

    /**
     * The taskId associated with the specified task.
     * @name EntityDeduplicationTaskStatus#taskId
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.taskId = undefined;
    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values.
     * @name EntityDeduplicationTaskStatus#status
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.status = undefined;
    /**
     * Returns the object type name (task.EntityDeduplicationTaskStatus).
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 * @protected
 * @constructor
 */
function WorkflowTriggerTask() {

    /**
     * The ID of the task.
     * @name WorkflowTriggerTask#id
     * @type string
     */
    this.id = undefined;
    /**
     * The record type of the workflow base record.
     * @name WorkflowTriggerTask#recordType
     * @type string
     */
    this.recordType = undefined;
    /**
     * The internal ID of the base record.
     * @name WorkflowTriggerTask#recordId
     * @type int
     */
    this.recordId = undefined;
    /**
     * The internal ID (int) or script ID (string) for the workflow definition. This is the ID that appears in the ID field on the Workflow Definition Page.
     * @name WorkflowTriggerTask#workflowId
     * @type int | string
     */
    this.workflowId = undefined;
    /**
     * Key/value pairs which override static script parameter field values on the deployment.
     * Used to dynamically pass context to the script.
     * @name WorkflowTriggerTask#params
     * @type Object
     */
    this.params = undefined;
    /**
     * Submits the task and returns an unique ID.
     *
     * @governance 20 units
     *
     * @returns {String} taskId
     * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    this.submit = function(options) {};

    /**
     * Returns the object type name (task.WorkflowTriggerTask).
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

/**
 *
 * @protected
 * @constructor
 */
function WorkflowTriggerTaskStatus() {

    /**
     * The taskId associated with the specified task.
     * @name WorkflowTriggerTaskStatus#taskId
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.taskId = undefined;
    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values.
     * @name WorkflowTriggerTaskStatus#status
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.status = undefined;
    /**
     * Returns the object type name (task.WorkflowTriggerTaskStatus).
     *
     * @returns {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @returns {Object}
     */
    this.toJSON = function(options) {};
}

task = new task();
/**
 * @type {task}
 */
N.prototype.task = task;

/**
 * SuiteScript transaction common module
 *
 * @module N/transaction
 * @suiteScriptVersion 2.x
 *
 */
function transaction() {}
/**
 * Void a transaction record object based on provided type, id
 *
 * @param {string} type record type to be voided
 * @param {number|string} id record id to be voided
 * @return {number} the id is the voided record or new reverse journal entry based on preference
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
 * @throws {SuiteScriptError} INVALID_RECORD_TYPE if type is not voidable
 * @throws {SuiteScriptError} THAT_RECORD_DOES_NOT_EXIST if record does not exist
 *
 * @since 2015.2
 */
transaction.prototype['void'] = function(type, id) {}
transaction.prototype['void'] = {
    /**
     * Void a transaction record object based on provided type, id
     *
     * @param {string} type record type to be voided
     * @param {number|string} id record id to be voided
     * @return {number} the id is the voided record or new reverse journal entry based on preference
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     * @throws {SuiteScriptError} INVALID_RECORD_TYPE if type is not voidable
     * @throws {SuiteScriptError} THAT_RECORD_DOES_NOT_EXIST if record does not exist
     *
     * @since 2015.2
     */
    promise: function (type, id) {}
}
// function voidTransaction() {}
// voidTransaction.prototype.promise = function() {};
// transaction.prototype['void'] = new voidTransaction();

/**
 * module enums
 */
transaction.prototype.Type = function(options) {};

function transactionType() {
    this.ASSEMBLY_BUILD = 'assemblybuild';
    this.ASSEMBLY_UNBUILD = 'assemblyunbuild';
    this.BIN_TRANSFER = 'bintransfer';
    this.BIN_WORKSHEET = 'binworksheet';
    this.BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder';
    this.CASH_REFUND = 'cashrefund';
    this.CASH_SALE = 'cashsale';
    this.CHECK = 'check';
    this.CREDIT_MEMO = 'creditmemo';
    this.CUSTOMER_DEPOSIT = 'customerdeposit';
    this.CUSTOMER_PAYMENT = 'customerpayment';
    this.CUSTOMER_REFUND = 'customerrefund';
    this.DEPOSIT = 'deposit';
    this.DEPOSIT_APPLICATION = 'depositapplication';
    this.ESTIMATE = 'estimate';
    this.EXPENSE_REPORT = 'expensereport';
    this.INVENTORY_ADJUSTMENT = 'inventoryadjustment';
    this.INVENTORY_COST_REVALUATION = 'inventorycostrevaluation';
    this.INVENTORY_COUNT = 'inventorycount';
    this.INVENTORY_TRANSFER = 'inventorytransfer';
    this.INVOICE = 'invoice';
    this.ITEM_FULFILLMENT = 'itemfulfillment';
    this.ITEM_RECEIPT = 'itemreceipt';
    this.JOURNAL_ENTRY = 'journalentry';
    this.OPPORTUNITY = 'opportunity';
    this.PAYCHECK_JOURNAL = 'paycheckjournal';
    this.PURCHASE_CONTRACT = 'purchasecontract';
    this.PURCHASE_ORDER = 'purchaseorder';
    this.PURCHASE_REQUISITION = 'purchaserequisition';
    this.RETURN_AUTHORIZATION = 'returnauthorization';
    this.REVENUE_ARRANGEMENT = 'revenuearrangement';
    this.REVENUE_COMMITMENT = 'revenuecommitment';
    this.REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal';
    this.SALES_ORDER = 'salesorder';
    this.TRANSFER_ORDER = 'transferorder';
    this.VENDOR_BILL = 'vendorbill';
    this.VENDOR_CREDIT = 'vendorcredit';
    this.VENDOR_PAYMENT = 'vendorpayment';
    this.VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization';
    this.WORK_ORDER = 'workorder';
    this.WORK_ORDER_CLOSE = 'workorderclose';
    this.WORK_ORDER_COMPLETION = 'workordercompletion';
    this.WORK_ORDER_ISSUE = 'workorderissue';
}
transaction.prototype.Type = transactionType;

transaction = new transaction();
/**
 * @type {transaction}
 */
N.prototype.transaction = transaction;

/**
 * SuiteScript UI Module (Client Side)
 *
 * @module N/ui
 * @suiteScriptVersion 2.x
 *
 */
function ui() {}
ui = new ui();
/**
 * @type {ui}
 */
N.prototype.ui = ui;

/**
 * SuiteScript Dialog Module (Client Side)
 *
 * @module N/ui/dialog
 * @suiteScriptVersion 2.x
 *
 */
function dialog() {}
/**
 * Creates an Alert Dialog with an OK Button.
 *
 * @restriction Client SuiteScript only
 *
 * @param {Object} options
 * @param {string} [options.title] The title of the alert. Defaults to empty string.
 * @param {string} [options.message] The content of the alert. Defaults to empty string.
 *
 * @return {Promise} A Promise object. Pass a function into the then portion to fire a callback when the button is pressed.
 *                   The callback will be passed in a response object which contains the value of the button where:
 *                   OK returns true.
 * @since 2016.1
 */
dialog.prototype.alert = function(options) {};

/**
 * Creates an Confirm Dialog with an OK and Cancel Button.
 *
 * @restriction Client SuiteScript only
 *
 * @param {Object} options
 * @param {string} [options.title] The title of the confirmation box. Defaults to empty string.
 * @param {string} [options.message] The content of the confirmation box. Defaults to empty string.
 *
 * @return {Promise} A Promise object. Pass a function into the then portion to fire a callback when the button is pressed.
 *					 The callback will be passed in a response object which contains the value of the button where:
 *					 OK returns true and Cancel returns false.
 * @since 2016.1
 */
dialog.prototype.confirm = function(options) {};

/**
 * Creates an Dialog with the specified buttons.
 *
 * @restriction Client SuiteScript only
 *
 * @param {Object} options
 * @param {string} [options.title]   The title of the dialog box. Defaults to empty string.
 * @param {string} [options.message] The content of the dialog box. Defaults to empty string.
 * @param {string} [options.buttons] The list of buttons to add. Each item in the list requires a label and value.
 *                                            If empty, defaults to a button with label "OK" and value true.
 *
 * @return {Promise} A Promise object. Pass a function into the then portion to fire a callback when the button is pressed.
 *					 The callback will be passed in a response object which contains the value of the button where:
 *					 OK returns true and Cancel returns false.
 * @since 2016.1
 *
 * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.buttons is specified and is not an array.
 * @throws {SuiteScriptError} BUTTONS_MUST_INCLUDE_BOTH_A_LABEL_AND_VALUE if options.buttons is specified and one or more items do not have a label and/or value.
 */
dialog.prototype.create = function(options) {};

dialog = new dialog();
var ui = {};
/**
 * @type {ui}
 */
N.prototype.ui = ui;
/**
 * @type {dialog}
 */
ui.prototype.dialog = dialog;

/**
 * SuiteScript Message Module (Client Side)
 *
 * @module N/ui/message
 * @suiteScriptVersion 2.x
 *
 */
function message() {}
/**
 * Creates a message which can be shown/hidden near the top of the page.
 *
 * @restriction Client SuiteScript only
 * @param {Object} options
 * @param {string} options.type The type of message, see message.Type
 * @param {string} [options.title] The title of the message. Defaults to empty string.
 * @param {string} [options.message] The content of the message. Defaults to empty string.
 *
 * @return {Message} A message object which can be shown or hidden.
 *
 * @since 2016.1
 */
message.prototype.create = function(options) {};

/**
 * Enum for message types
 * @enum {string}
 */
function messageType() {
    this.CONFIRMATION = 0.0;
    this.INFORMATION = 1.0;
    this.WARNING = 2.0;
    this.ERROR = 3.0;
}
message.prototype.Type = messageType;

/**
 * Return a new instance of Message, used to show/hide messages
 * @class
 * @classdesc Allows users to show/hide messages.
 * @return {message.Message}
 * @constructor
 *
 * @since 2015.2
 */
function Message() {

    /**
     * Shows the message.
     *
     * @restriction Client SuiteScript only
     * @param {Object} [options]
     * @param {int|string} [options.duration] The amount of time (in milliseconds) to show the message. Default is 0 (show forever)
     *
     * @return {void}
     *
     * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.duration is specified with a non-numerical value.
     *
     * @since 2016.1
     */
    this.show = function(options) {};

    /**
     * Hides the message
     *
     * @restriction Client SuiteScript only
     *
     * @return {void}
     *
     * @since 2016.1
     */
    this.hide = function(options) {};

    /**
     * Returns the object type name (message.Message)
     *
     * @return {string}
     */
    this.toString = function(options) {};

    /**
     * JSON.stringify() implementation.
     *
     * @return {{type: string, title: string, message: string}}
     */
    this.toJSON = function(options) {};
}

message = new message();
var ui = {};
/**
 * @type {ui}
 */
N.prototype.ui = ui;
/**
 * @type {message}
 */
ui.prototype.message = message;

/**
 * SuiteScript module
 *
 * @module N/ui/serverWidget
 * @NApiVersion 2.x
 *
 */
function serverWidget() {}
/**
 * Instantiate a assistant object (specifying the title, and whether to hide the menu)
 * @restriction Server SuiteScript only
 * @param {Object} config
 * @param {string} config.title form title
 * @param {boolean} config.hideNavBar (optional)
 * @return {Assistant}
 * @since 2015.2
 */
serverWidget.prototype.createAssistant = function(options) {};

/**
 * Instantiate a form object (specifying the title, and whether to hide the menu)
 * @restriction Server SuiteScript only
 * @param {Object} config
 * @param {string} config.title form title
 * @param {boolean} config.hideNavBar (optional)
 * @return {Form}
 * @since 2015.2
 */
serverWidget.prototype.createForm = function(options) {};

/**
 * Instantiate a List object (specifying the title, and whether to hide the navigation bar)
 * @restriction This API is available to Suitelets only.
 * @param {Object} config
 * @param {string} config.title list title
 * @param {boolean} [config.hideNavBa]
 * @return {List}
 * @since 2015.2
 */
serverWidget.prototype.createList = function(options) {};

/**
 * @enum
 */
function serverWidgetFieldType() {
    this.TEXT = 'TEXT';
    this.RADIO = 'RADIO';
    this.LABEL = 'LABEL';
    this.EMAIL = 'EMAIL';
    this.PHONE = 'PHONE';
    this.DATE = 'DATE';
    this.DATETIME = 'DATETIME';
    this.DATETIMETZ = 'DATETIMETZ';
    this.CURRENCY = 'CURRENCY';
    this.FLOAT = 'FLOAT';
    this.INTEGER = 'INTEGER';
    this.CHECKBOX = 'CHECKBOX';
    this.SELECT = 'SELECT';
    this.URL = 'URL';
    this.TIMEOFDAY = 'TIMEOFDAY';
    this.TEXTAREA = 'TEXTAREA';
    this.MULTISELECT = 'MULTISELECT';
    this.IMAGE = 'IMAGE';
    this.INLINEHTML = 'INLINEHTML';
    this.PASSWORD = 'PASSWORD';
    this.HELP = 'HELP';
    this.PERCENT = 'PERCENT';
    this.LONGTEXT = 'LONGTEXT';
    this.RICHTEXT = 'RICHTEXT';
    this.FILE = 'FILE';
}
serverWidget.prototype.FieldType = serverWidgetFieldType;

/**
 * @enum
 */
function serverWidgetFormPageLinkType() {
    this.BREADCRUMB = 'BREADCRUMB';
    this.CROSSLINK = 'CROSSLINK';
}
serverWidget.prototype.FormPageLinkType = serverWidgetFormPageLinkType;

/**
 * @enum
 */
function serverWidgetSublistType() {
    this.EDITOR = 'EDITOR';
    this.INLINEEDITOR = 'INLINEEDITOR';
    this.LIST = 'LIST';
    this.STATICLIST = 'STATICLIST';
}
serverWidget.prototype.SublistType = serverWidgetSublistType;

/**
 * @enum
 */
function serverWidgetFieldBreakType() {
    this.NONE = 'NONE';
    this.STARTCOL = 'STARTCOL';
    this.STARTROW = 'STARTROW';
}
serverWidget.prototype.FieldBreakType = serverWidgetFieldBreakType;

/**
 * @enum
 */
function serverWidgetFieldLayoutType() {
    this.NORMAL = 'NORMAL';
    this.OUTSIDE = 'OUTSIDE';
    this.OUTSIDEBELOW = 'OUTSIDEBELOW';
    this.OUTSIDEABOVE = 'OUTSIDEABOVE';
    this.STARTROW = 'STARTROW';
    this.MIDROW = 'MIDROW';
    this.ENDROW = 'ENDROW';
}
serverWidget.prototype.FieldLayoutType = serverWidgetFieldLayoutType;

/**
 * @enum
 */
function serverWidgetFieldDisplayType() {
    this.NORMAL = 'NORMAL';
    this.HIDDEN = 'HIDDEN';
    this.READONLY = 'READONLY';
    this.DISABLED = 'DISABLED';
    this.ENTRY = 'ENTRY';
    this.INLINE = 'INLINE';
}
serverWidget.prototype.FieldDisplayType = serverWidgetFieldDisplayType;

/**
 * @enum
 */
function serverWidgetSublistDisplayType() {
    this.NORMAL = 'NORMAL';
    this.HIDDEN = 'HIDDEN';
}
serverWidget.prototype.SublistDisplayType = serverWidgetSublistDisplayType;

/**
 * @enum
 */
function serverWidgetLayoutJustification() {
    this.CENTER = 'CENTER';
    this.LEFT = 'LEFT';
    this.RIGHT = 'RIGHT';
}
serverWidget.prototype.LayoutJustification = serverWidgetLayoutJustification;

/**
 * @enum
 */
function serverWidgetListStyle() {
    this.GRID = 'grid';
    this.REPORT = 'report';
    this.PLAIN = 'plain';
    this.NORMAL = 'normal';
}
serverWidget.prototype.ListStyle = serverWidgetListStyle;

/**
 * @enum
 */
function serverWidgetAssistantSubmitAction() {
    this.NEXT = 'jump';
    this.BACK = 'back';
    this.CANCEL = 'cancel';
    this.FINISH = 'finish';
    this.JUMP = 'jump';
}
serverWidget.prototype.AssistantSubmitAction = serverWidgetAssistantSubmitAction;

/**
 *
 * Encapsulates a Tab in a serverWidget.Form
 * @return {Tab}
 * @constructor
 *
 * @since 2015.2
 */
function Tab() {

    /**
     * The label of the Tab
     * @name Tab#label
     * @type {string}
     */
    this.label = undefined;
    /**
     * The Tab's field help
     * @name Field#helpText
     * @type {string}
     */
    this.helpText = undefined;}

/**
 * Encalsulates a Sublist in a Form or a serverWidget.Assistant
 *
 *
 * @return {Sublist}
 * @constructor
 *
 * @since 2015.2
 */
function Sublist() {

    /**
     * The label of the field group
     * @name Sublist#label
     * @type {string}
     */
    this.label = undefined;
    /**
     * The number of lines in the Sublist.
     * @name Sublist#lineCount
     * @type {number}
     * @readonly
     */
    this.lineCount = undefined;
    /**
     * Set an id of a field that is to have unique values accross the rows in the sublist
     *
     * @param {Object} options
     * @param {string} options.id The id of the field to use as a unique field
     * @returns {Sublist}
     */
    this.updateUniqueFieldId = function(options) {};

    /**
     * Id of a field designated as a totalling column, which is used to calculate and display a running total for the sublist
     *
     * @param {Object} options
     * @param {string} options.id The id of the field to use as a total field
     * @returns {Sublist}
     */
    this.updateTotallingFieldId = function(options) {};

    /**
     * Display type of the sublist.  Possible values are in serverWidget.SublistDisplayType
     * @name Sublist#displayType
     * @type {FieldDisplayType}
     */
    this.displayType = undefined;
    /**
     * Inline help text to this sublist.
     * @name Sublist#helpText
     * @type {string}
     */
    this.helpText = undefined;
    /**
     * Adds a button to the sublist
     *
     * @param {Object} options
     * @param {string} options.id the script id of button
     * @param {string} options.label the label of button
     * @param {string} [options.functionName] the function name to be triggered onClick for the button
     * @returns {Button}
     */
    this.addButton = function(options) {};

    /**
     * Returns string value of a sublist field.
     *
     * @param {Object} options
     * @param {string} options.id Id of the field
     * @param {number} options.line Line number
     * @returns {string}
     */
    this.getSublistValue = function(options) {};

    /**
     * Set the value of a field on the list
     *
     * @param {Object} options
     * @param {string} options.id   id of the field to set
     * @param {number} options.line line number
     * @param {string} options.value value to set on the field
     */
    this.setSublistValue = function(options) {};

    /**
     * Adds refresh all buttons to the sublist
     *
     * @returns {Button}
     */
    this.addRefreshButton = function(options) {};

    /**
     * Adds a "Mark All" and an "Unmark All" button to a sublist.
     *
     * @returns {Button[]}
     */
    this.addMarkAllButtons = function(options) {};

    /**
     * Add a field, column,  to the Sublist
     * @param {Object} options
     * @param {string} options.id    id of the filed to add
     * @param {string} options.label the UI label for the field
     * @param {string} options.type  the type for this field
     * @param {string} [options.source] The internal id of the source list for this field if the field is a select
     * @param {string} [options.container] Used to specify either a tab or a field group
     * @returns {Field}
     */
    this.addField = function(options) {};
}

/**
 * Encapsulate a field group on an Assistant or a Form objects.
 *
 *
 * @return {FieldGroup}
 * @constructor
 *
 * @since 2015.2
 */
function FieldGroup() {

    /**
     * Is the field group collapsible.
     * @name FieldGroup#isCollapsible
     * @type {boolean}
     */
    this.isCollapsible = undefined;
    /**
     * Is the field group collapsed
     * @name FieldGroup#isCollapsed
     * @type {boolean}
     */
    this.isCollapsed = undefined;
    /**
     * Is the field group's border hidden
     * @name FieldGroup#isBorderHidden
     * @type {boolean}
     */
    this.isBorderHidden = undefined;
    /**
     * Do all the fields in this group display in a single column
     * @name Field#isBorderHidden
     * @type {boolean}
     */
    this.isSingleColumn = undefined;
    /**
     * The label of the field group
     * @name FieldGroup#label
     * @type {string}
     */
    this.label = undefined;}

/**
 * Return a wrapped an nlobjField
 *
 *
 * @return {Field}
 * @constructor
 *
 * @since 2015.2
 */
function Field() {

    /**
     * The internal id of the field.
     * @name Field#id
     * @type {string}
     * @readonly
     */
    this.id = undefined;
    /**
     * The type of the field.
     * @name Field#FieldType
     * @type {FieldType}
     * @readonly
     */
    this.type = undefined;
    /**
     * Update the breakType of the field
     * @param {Object} options
     * @param {FieldBreakType} options.breakType
     * @return {Field}
     */
    this.updateBreakType = function(options) {};

    /**
     * Update the layout type of the field
     * @param {Object} options
     * @param {FieldLayoutType} options.layoutType
     * @return {Field}
     */
    this.updateLayoutType = function(options) {};

    /**
     * the text that gets displayed in lieu of the field value for URL fields
     * @name Field#linkText
     * @type {string}
     */
    this.linkText = undefined;
    /**
     * The max length of the field
     * @name Field#maxLength
     * @type {number}
     */
    this.maxLength = undefined;
    /**
     * Is the field mandatory
     * @name Field#isMandatory
     * @type {boolean}
     */
    this.isMandatory = undefined;
    /**
     * The alias for the field. By default the alias is the field id
     * @name Field#alias
     * @type {string}
     */
    this.alias = undefined;
    /**
     * The default value of the field
     * @name Field#defaultValue
     * @type {string}
     */
    this.defaultValue = undefined;
    /**
     * Sets the height and width for the field. Only supported on multi-selects,
     * long text, rich text, and fields that get rendered as INPUT (type=text) fields.
     * This API is not supported on list/record fields.
     * @param {Object} options
     * @param {number} options.height
     * @param {number} options.width
     * @return {Field}
     */
    this.updateDisplaySize = function(options) {};

    /**
     *
     * Udpdate the field display type
     * @param {Object} options
     * @param {number} options.displayType
     * @return {Field}
     */
    this.updateDisplayType = function(options) {};

    /**
     * If Rich Text Editing is enabled, you can use this property
     * to set the height of the rich text field only.
     * @name Field#richTextHeight
     * @type {number}
     */
    this.richTextHeight = undefined;
    /**
     * If Rich Text Editing is enabled, you can use this property
     * to set the width of the rich text field only.
     * @name Field#richTextWidth
     * @type {number}
     */
    this.richTextWidth = undefined;
    /**
     * The label of the field
     * @name Field#label
     * @type {string}
     */
    this.label = undefined;
    /**
     * the number of empty field spaces before/above this field.
     * @name Field#padding
     * @type {number}
     */
    this.padding = undefined;
    /**
     * Get the select options for a field
     * @param {Object} options
     * @param {string} [options.filter] A search string to filter the select options that are returned.
     * @param {string} [options.filteroperator]  Supported operators are contains | is | startswith. If not specified, defaults to the contains operator
     * @returns {Object[]}
     */
    this.getSelectOptions = function(options) {};

    /**
     * Set help text for a field
     * @param {Object} options
     * @param {string} options.help The help text for the field
     * @param {boolean} [options.showInlineForAssistant] This means that field help will appear only in a field help popup box when the field label is clicked
     */
    this.setHelpText = function(options) {};

    /**
     * Add a select option to a select field
     * @param {Object} options
     * @param {string} options.value The internal id of the option
     * @param {string} options.text  The display text for this option
     * @param {boolean} [options.isSelected] If true, this option is selected
     */
    this.addSelectOption = function(options) {};
}

/**
 * Return a wrapped an nlobjButton
 *
 *
 * @return {Button}
 * @constructor
 *
 * @since 2015.2
 */
function Button() {

    /**
     * Is the button disabled
     * @name Button#isDisabled
     * @type {boolean}
     */
    this.isDisabled = undefined;
    /**
     * The label of the button
     * @name Button#label
     * @type {string}
     */
    this.label = undefined;
    /**
     * Is the button hidden
     * @name Button#isHidden
     * @type {boolean}
     */
    this.isHidden = undefined;}

/**
 * Return a wrapped an nlobjAssistantStep
 *
 *
 * @return {AssistantStep}
 * @constructor
 *
 * @since 2015.2
 */
function AssistantStep() {

    /**
     * The internal id of the step.
     * @name AssistantStep#id
     * @type {string}
     * @readonly
     */
    this.id = undefined;
    /**
     * The label of the step
     * @name AssistantStep#label
     * @type {string}
     */
    this.label = undefined;
    /**
     * The numerical order of the step
     * @name AssistantStep#stepNumber
     * @type {number}
     */
    this.stepNumber = undefined;
    /**
     * Help text for the step
     * @name AssistantStep#helpText
     * @type {number}
     */
    this.helpText = undefined;
    /**
     *  get all sublist fields' internal ids entered by the user during this step
     * @param {Object} options
     * @param {string} options.group  The internal id of the sublist
     * @return {string[]}
     */
    this.getSublistFieldIds = function(options) {};

    /**
     * Use this method to get all sublists entered by the user during this step
     * @return {string[]}
     */
    this.getSubmittedSublistIds = function(options) {};

    /**
     * Get all ids for fields in the assistant step
     * @return {string[]}
     */
    this.getFieldIds = function(options) {};

    /**
     * Get the value of a field
     * @param {Object} options
     * @param {string} options.id Internal id for the field
     * @return {string|string[]}
     */
    this.getValue = function(options) {};

    /**
     * Get the number of lines in a sublist
     * @param {Object} options
     * @param {string} options.group internal Id of the sublist
     * @return {number}
     */
    this.getLineCount = function(options) {};

    /**
     * Get the value of a field in a sublist
     * @param {Object} options
     * @param {string} options.group Internal id of the sublist
     * @param {string} options.id Internal id of the field
     * @param {string} options.line line number
     * @return {string}
     */
    this.getSublistValue = function(options) {};
}

/**
 * Return a wrapped an nlobjAssistant
 *
 *
 * @return {Assistant}
 * @constructor
 *
 * @since 2015.2
 */
function Assistant() {

    /**
     * the current step of the assistant
     * @name Assistant#currentStep
     * @type {AssistantStep}
     * @readonly
     */
    this.currentStep = undefined;
    /**
     * an error message for the current step. If you choose, you can use HTML tags to format the message.
     * @name Assistant#errorHtml
     * @type {string}
     */
    this.errorHtml = undefined;
    /**
     *   Mark the last page in an assistant. Set the rich text to display a completion message on the last page.
     * @name Assistant#finishedHtml
     * @type {string}
     */
    this.finishedHtml = undefined;
    /**
     * Show or hide the assistant step numbers
     * @name Assistant#hideStepNumber
     * @type {boolean}
     */
    this.hideStepNumber = undefined;
    /**
     *  Use this method to enforce a sequential ordering of assistant steps. If steps are ordered,
     *  users must complete the current step before the assistant will allow them to proceed to
     *  the next step. From a display perspective, ordered steps will always appear in the left
     *  panel of the assistant. Note that by default, steps in an assistant are ordered.
     * @name Assistant#isNotOrdered
     * @type {boolean}
     */
    this.isNotOrdered = undefined;
    /**
     *  Overall title of the Assistant
     * @name Assistant#title
     * @type {string}
     */
    this.title = undefined;
    /**
     *  show/hide the Add to Shortcuts link that appears in the top-right corner of an assistant page.
     * @name Assistant#hideAddToShortcutsLink
     * @type {boolean}
     */
    this.hideAddToShortcutsLink = undefined;
    /**
     * Set the default values of many fields at once
     * @param {Object[]} values
     */
    this.updateDefaultValues = function(options) {};

    /**
     * The script file id to be used in the assistant
     * @name Assistant#clientScriptFileId
     * @type {number}
     */
    this.clientScriptFileId = undefined;
    /**
     *  set the splash screen for an assistant page.
     * @param {Object}options
     * @param {string}options.title Title of the splash screen
     * @param {string}options.text1 Text of the splash scheen
     * @param {string} [options.text2] If you want splash content to have a two-column appearance, provide content
     * in the text2 parameter.
     */
    this.setSplash = function(options) {};

    /**
     * Get a Field object from its id
     * @param {Object} options
     * @param {string} options.id Internal id for the field
     * @return {Field}
     */
    this.getField = function(options) {};

    /**
     * Get a FieldGroup  object from its id
     * @param {Object} options
     * @param {string} options.id Id of the field group
     * @return {FieldGroup}
     */
    this.getFieldGroup = function(options) {};

    /**
     * Get the name of last action taken by the user
     * @return {string}
     */
    this.getLastAction = function(options) {};

    /**
     * get the step the last submitted action came from
     * @return {AssistantStep}
     */
    this.getLastStep = function(options) {};

    /**
     * Get next logical step corresponding to the user's last submitted action
     * @return {AssistantStep}
     */
    this.getNextStep = function(options) {};

    /**
     * Get the number of steps
     * @return {number}
     */
    this.getStepCount = function(options) {};

    /**
     * True if the assistant has an error set
     * @return {boolean}
     */
    this.hasErrorHtml = function(options) {};

    /**
     * Is the assistant finished
     * @return {boolean}
     */
    this.isFinished = function(options) {};

    /**
     * Get the a step given its id
     * @param {Object} options
     * @param {string} options.id Id for the step
     * @return {AssistantStep}
     */
    this.getStep = function(options) {};

    /**
     * Get a Sublist  object from its id
     * @param {Object} options
     * @param {string} options.id  Id for the sublist
     * @return {Sublist}
     */
    this.getSublist = function(options) {};

    /**
     * Add a step to the assistant
     * @param {Object} options
     * @param {string} options.id  Id for the step
     * @param {string} options.label UI label for the step
     */
    this.addStep = function(options) {};

    /**
     * Add a field to the Assistant
     * @param {Object} options
     * @param {string} options.id  Id for the field
     * @param {string} options.label Label for the field
     * @param {string} options.type  Type for the field
     * @param {string} [options.source] The internalId or scriptId of the source list for this field if
     * it is a select (List/Record) field.
     * @param {string} [options.container]  Id for the field group of tab to place the field in
     * @returns {Field}
     */
    this.addField = function(options) {};

    /**
     * Add a field group to the assistant
     * @param {Object} options
     * @param {string} options.id  Id for the field group
     * @param {string} options.label UI label for the field group
     * @return {FieldGroup}
     */
    this.addFieldGroup = function(options) {};

    /**
     * Add a Sublist to the assistant
     * @param {Object} options
     * @param {string} options.id  Id for the sublist
     * @param {string} options.label UI label for the sublist
     * @param {string} options.type  Type of sublist
     * @return {Sublist}
     */
    this.addSublist = function(options) {};

    /**
     * Get all ids for fields in the assistant
     *
     * @return {string[]}
     */
    this.getFieldIds = function(options) {};

    /**
     * Get all field ids in the given assistant field group
     * @param {string} fieldGroup  Id of the field group
     * @return {string[]}
     */
    this.getFieldIdsByFieldGroup = function(options) {};

    /**
     * Get all ids for field groups in the assistant
     *
     * @return {string[]}
     */
    this.getFieldGroupIds = function(options) {};

    /**
     * Get all ids for sublists in the assistant
     *
     * @return {string[]}
     */
    this.getSublistIds = function(options) {};

    /**
     * Get all steps in the assistant
     *
     * @return {AssistantStep[]}
     */
    this.getSteps = function(options) {};

    /**
     *  Use this method to manage redirects in an assistant. In most cases, an assistant redirects to itself
     *  The sendRedirect(response) method is like a wrapper method that performs this redirect. This method
     *  also addresses the case in which one assistant redirects to another assistant. In this scenario,
     *  the second assistant must return to the first assistant if the user Cancels or the user Finishes.
     *  This method, when used in the second assistant, ensures that the user is redirected back to the
     *  first assistant.
     * @param {Object} options
     * @param {ServerResponse} options.response
     */
    this.sendRedirect = function(options) {};
}

/**
 * Primary object used to encapsulate a NetSuite-looking form.
 *
 *
 * @return {Form}
 * @constructor
 *
 * @since 2015.2
 */
function Form() {

    /**
     * The form title
     * @name Form#title
     * @type {string}
     */
    this.title = undefined;
    /**
     * Adds a button to the ui form
     *
     * @param {Object} options
     * @param {string} options.id the script id of button
     * @param {string} options.label the label of button
     * @param {string} [options.functionName] the function name to be triggered onClick for the button
     * @returns {Button}
     */
    this.addButton = function(options) {};

    /**
     * add a credential field to the ui form
     *
     * @param {Object} options
     * @param {string} options.id the script id of field
     * @param {string} options.label the label of field
     * @param {string[]|string} [options.restrictToDomains]  List of domains that restrict the destination domains for the credential
     * @param {string[]|string} [options.restrictToScriptIds]  List of scripts where the credential can be used
     * @param {boolean} [options.restrictToCurrentUser=false] Restrict the use of this credential to the user that creates is
     * @param {string} [options.container]  Id of the form tab where the credential is placed
     * @returns {Field}
     */
    this.addCredentialField = function(options) {};

    /**
     * add a secret key field to the ui form
     *                                        `
     * @param {Object} options
     * @param {string} options.id the script id of field
     * @param {string[]|string} [options.restrictToScriptIds]  List of scripts where the key can be used
     * @param {boolean} [options.restrictToCurrentUser=false] Restrict the use of this key to the user that created it
     * @param {string} [options.container]  Id of the form tab or group where the key is placed
     * @returns {Field}
     */
    this.addSecretKeyField = function(options) {};

    /**
     * Add a field to the form
     * @param {Object} options
     * @param {string} options.id Internal id for the field
     * @param {string} options.label UI label for the field
     * @param {string} options.type  Type of the field
     * @param {string} [options.source]  The internalId or scriptId of the source list for this field if it is a select (List/Record) or multi-select field
     * @param {string} [options.container]   Tab or Field Group to add the field to
     * @returns {Field}
     */
    this.addField = function(options) {};

    /**
     * Add a field group to the form
     * @param {Object} options
     * @param {string} options.id the script id for field group
     * @param {string} options.label the label for field group
     * @param {string} [options.tab] the tab where field group should be added
     *
     * @return {FieldGroup}
     */
    this.addFieldGroup = function(options) {};

    /**
     * Add a link to the form
     * @param {Object} options
     * @param {string} options.type  The type of link
     * @param {string} options.title  The UI label for the linl
     * @param {string} options.url  The URL the link navigates to
     */
    this.addPageLink = function(options) {};

    /**
     * Add a Sublist to the form
     * @param {Object} options
     * @param {string} options.id  The internal id for the sublist
     * @param {string} options.label The ui label for the sublist
     * @param {string} options.type  The type of sublist
     * @param {string} [options.tab] The id of the tab where to add the sublist to
     * @return {Sublist}
     */
    this.addSublist = function(options) {};

    /**
     * Add a Subtab to the form
     * @param {Object} options
     * @param {string} options.id  The internal id for the sub tab
     * @param {string} options.label The UI label for the sub tab
     * @param {string} [options.tab] The tab under which to display this subtab. If empty, it is added to the main tab.
     * @return {Tab}
     */
    this.addSubtab = function(options) {};

    /**
     * Add a Tab to the form
     * @param {Object} options
     * @param {string} options.id  The internal id for the Tab
     * @param {string} options.label The UI label for the tab
     * @return {Tab}
     */
    this.addTab = function(options) {};

    /**
     * Add a Reset button to the form
     * @param {Object} [options]
     * @param {string} [options.label]  The UI label used for this button. If no label is provided, the label defaults to Reset.
     * @return {Button}
     */
    this.addResetButton = function(options) {};

    /**
     * Add a Submit button to the form
     * @param {Object} [options]
     * @param {string} [options.label] The UI label for this button. If no label is provided, the label defaults to Save.
     * @return {Button}
     */
    this.addSubmitButton = function(options) {};

    /**
     * Get a Button object from its id
     * @param {Object} options
     * @param {string} options.id The id of the button to get
     * @return {Button}
     */
    this.getButton = function(options) {};

    /**
     * Get a Field object from its id
     * @param {Object} options
     * @param {string} options.id The id for the field to get
     * @return {Field}
     */
    this.getField = function(options) {};

    /**
     * Get a Subtab object from its id
     * @param {Object} options
     * @param {string} options.id  The id for the Tab to get
     * @return {Tab}
     */
    this.getSubtab = function(options) {};

    /**
     * Get a Subtab object from its id
     * @param {Object} options
     * @param {string} options.id  The id for the Tab to get
     * @return {Tab}
     */
    this.getTab = function(options) {};

    /**
     * Get all the Tab objects
     * @return {Tab[]}
     */
    this.getTabs = function(options) {};

    /**
     * Get a Sublist object from its id
     * @param {Object} options
     * @param {string} options.id The id for the Sublist to get
     * @return {Sublist}
     */
    this.getSublist = function(options) {};

    /**
     * Insert a field before another field
     * @param {Object} options
     * @param {Field} options.field The field to insert
     * @param {string} options.nextfield  Id of the field to insert before
     */
    this.insertField = function(options) {};

    /**
     * Insert a sublist before another sublist
     * @param {Object} options
     * @param {Sublist} options.sublist   Sublist to insert
     * @param {string} options.nextsublist  Id of the sublist to insert before
     */
    this.insertSublist = function(options) {};

    /**
     * Insert a subtab before another sublist
     * @param {Object} options
     * @param {Subtab} options.subtab   Subtab to insert
     * @param {string} options.nextsub The id of the sublist/subtab you are inserting in front of
     */
    this.insertSubtab = function(options) {};

    /**
     * Insert a Tab before another tab
     * @param {Object} options
     * @param {Tab} options.tab Tab to insert
     * @param {string} options.nexttab    Id of the tab to insert before
     */
    this.insertTab = function(options) {};

    /**
     * Remove a button given its id
     * @param {Object} options
     * @param {string} options.id   Id of the button to remove
     */
    this.removeButton = function(options) {};

    /**
     * Set the default values of many fields at once
     * @param {Object[]} values
     */
    this.updateDefaultValues = function(options) {};

    /**
     * The script file id to be used in the form
     * @name Form#clientScriptFileId
     * @type {number}
     */
    this.clientScriptFileId = undefined;}

/**
 * Primary object used to encapsulate a list page
 *
 * @return {List}
 * @constructor
 *
 * @since 2015.2
 */
function List() {

    /**
     * Sets the display style for this list
     * @name List#style
     * @type string
     * @since 2015.2
     */
    this.style = undefined;
    /**
     * List title
     * @name List#title
     * @type string
     * @since 2015.2
     */
    this.title = undefined;
    /**
     * Add a Button to the list page
     *
     * @param {Object} options
     * @param {string} options.id the script id for button
     * @param {string} options.label the ui label of button
     * @param {string} [options.functionName] the function name to be triggered onClick for the button
     * @returns {Button}
     */
    this.addButton = function(options) {};

    /**
     * Add a Column to the List page
     * @param {Object} options
     * @param {string} options.id   The internal id for the column
     * @param {string} options.type  The type for the column
     * @param {string} options.label  The ui label for the column
     * @param {string} [options.align] The layout justification for this column.
     * @return {ListColumn}
     */
    this.addColumn = function(options) {};

    /**
     * Add an Edit or Edit/View column
     * @param {Object} options
     * @param {ListColumn} options.column  The Edit/View column is added to the left of this column
     * @param {boolean} [options.showView]  If true then an Edit/View column will be added. Otherwise only an Edit column will be added.
     * @param {boolean} [options.showHrefCol] - If set, this value must be included in row data provided for the
     * list and will be used to determine whether the URL for this link is clickable
     * @return {ListColumn}
     */
    this.addEditColumn = function(options) {};

    /**
     * Adds a navigation cross-link to the list page
     * @param {Object} options
     * @param {string} options.type  The type of link to add: breadcrumb or crosslink
     * @param {string} options.title  The UI text displayed in the link
     * @param {string} options.url  The URL used for this link
     * @return {List}
     */
    this.addPageLink = function(options) {};

    /**
     * Add a row (Array of name/value pairs or search.Result)
     * @param {Object} options
     * @param {string} options.row  An Array of rows containing name/value pairs containing the values for corresponding
     * @return {List}
     */
    this.addRow = function(options) {};

    /**
     * Adds multiple rows (Array of search.Result or name/value pair Arrays)
     * @param {Object} options
     * @param {string} options.rows Array of search.Result or name/value pair Arrays
     * @return {List}
     */
    this.addRows = function(options) {};

    /**
     * The script file id to be used in the list page
     * @name List#clientScriptFileId
     * @type {number}
     */
    this.clientScriptFileId = undefined;}

/**
 * Return a wrapped an nlobjListColumn
 *
 *
 * @return {ListColumn}
 * @constructor
 *
 * @since 2015.2
 */
function ListColumn() {

    /**
     * Adds a URL parameter (optionally defined per row) to the list column's URL
     * @param {Object} options
     * @param {string} options.param  Name for the parameter
     * @param {string} options.value  Value for the parameter
     * @param {string} [options.dynamic]  If true, then the parameter value is actually an alias that is calculated per row
     * @return {ListColumn}
     */
    this.addParamToURL = function(options) {};

    /**
     * @name ColumnList#label Label this list column
     * @type {string} string
     */
    this.label = undefined;
    /**
     * Sets the base URL for the list column
     * @param {Object} options
     * @param {string} options.url  The base url or a column in the data source that returs the
     * base url for each row
     * @param {string} [options.dynamic] If true, then the URL is actually an alias that is calculated per row
     * @return {ListColumn}
     */
    this.setURL = function(options) {};
}

serverWidget = new serverWidget();
var ui = {};
/**
 * @type {ui}
 */
N.prototype.ui = ui;
/**
 * @type {serverWidget}
 */
ui.prototype.serverWidget = serverWidget;

/**
 * SuiteScript module
 *
 * @module N/url
 * @NApiVersion 2.x
 *
 */
function url() {}
/**
 * Resolves a record url
 * @governance 5 unites
 * @param {Object} options - the options object
 * @param {string} options.recordType - The record type
 * @param {string} options.recordId - The record ID
 * @param {boolean} options.isEditMode - In Edit Mode
 * @param {Object} [options.params] Per url.format({query})
 * @returns {String} url - The url
 * @since 2015.1
 */

url.prototype.resolveRecord = function(options) {};

/**
 *
 * @param {Object} options
 * @param {string} options.id
 * @param {Map} options.params (optional) url parameters
 *
 * @return {String} url
 *
 * @since 2015.1
 */
url.prototype.resolveTaskLink = function(options) {};

/**
 * @param {Object} options
 * @param {string} options.scriptId
 * @param {string} options.deploymentId
 * @param {boolean} [options.returnExternalUrl]
 * @param {Object} [options.params] Per url.format({query})
 * @return {String} url
 *
 * @since 2015.1
 */
url.prototype.resolveScript = function(options) {};

/**
 * @param {Object} options
 * @param {string} options.domain
 * @param {Object} options.params query string data parameters as an object
 *
 * @return {String} url
 *
 * @since 2015.1
 */
url.prototype.format = function(options) {};

url = new url();
/**
 * @type {url}
 */
N.prototype.url = url;

/**
 * SuiteScript 2.0 util global object
 *
 * @namespace
 * @global
 * @name util
 * @type {Object}
 */
var util = {
        /**
         * @memberof util
         * @name util.each
         *
         * @param {Object|Array} iterable
         * @param {Function} callback
         * @returns {Object|Array} iterable - original collection
         */
        each: function (iterable, callback) {},
        /**
         * @memberof util
         * @name util.extend
         *
         * @param {Object} receiver
         * @param {Object} contributor
         * @returns {Object} receiver
         */
        extend: function (receiver, contributor) {},
        /**
         * Determines if a variable refers to an instance of Object.prototype (aka "Plain Object" aka {})
         *
         * @memberof util
         * @name util.isObject
         *
         * @param {*} obj
         * @returns {boolean}
         */
        isObject: function (obj) {},
        /**
         * Determines if a variable refers to a Function
         *
         * @memberof util
         * @name util.isFunction
         *
         * @param {*} obj
         * @returns {boolean}
         */
        isFunction: function (obj) {},
        /**
         *  Determines if a variable refers to an Array
         *
         * @memberof util
         * @name util.isArray
         *
         * @param {*} obj
         * @returns {boolean}
         */
        isArray: function (obj) {},
        /**
         * Determines if a variable refers to a boolean
         *
         * @memberof util
         * @name util.isBoolean
         *
         * @param {*} obj
         * @returns {boolean}
         */
        isBoolean: function (obj) {},
        /**
         * Determines if a variable refers to a string
         *
         * @memberof util
         * @name util.isString
         *
         * @param {*} obj
         * @returns {boolean}
         */
        isString: function (obj) {},
        /**
         * Determines if a variable refers to a number
         *
         * @memberof util
         * @name util.isNumber
         *
         * @param obj
         * @returns {boolean}
         */
        isNumber: function (obj) {},
        /**
         *
         * Determines if a variable refers to a Date
         *
         * @memberof util
         * @name util.isDate
         *
         * @param obj
         * @returns {boolean}
         */
        isDate: function (obj) {},
        /**
         * Determines if a variable refers to a RegExp
         *
         * @memberof util
         * @name util.isRegExp
         *
         * @param obj
         * @returns {boolean}
         */
        isRegExp: function (obj) {},
        /**
         * Remove leading and trailing whitespace from a string
         *
         * @memberof util
         * @name util.trim
         *
         * @param {string} str String to have leading/trailing whitespace extracted
         */
        trim: function (str) {}
    };

/**
 * SuiteScript workflow module
 *
 * @module N/workflow
 * @NApiVersion 2.x
 *
 */
function workflow() {}
/**
 * Triggers a workflow on a record.
 * @governance 20 units
 *
 * @param {Object} options
 * @param {string} options.recordType Record type ID of the workflow base record
 * @param {number|string} options.recordId Internal ID of the base record
 * @param {number|string} options.workflowId Internal ID or script ID of the workflow definition
 * @param {number|string} [options.defaultValues] Object containing key/value pairs providing default values for field defined on the specified workflow
 * @return {number} Internal ID of workflow instance that was initiated
 *
 * @since 2015.2
 */
workflow.prototype.initiate = function(options) {};

/**
 * Triggers a workflow on a record.
 * @governance 20 units
 *
 * @param {Object} options
 * @param {string} options.recordType Record type ID of the workflow base record
 * @param {number|string} options.recordId Internal ID of the base record
 * @param {number|string} options.workflowId Internal ID or script ID for the workflow definition
 * @param {number|string} [options.workflowInstanceId] Internal ID of the workflow instance
 * @param {number|string} [options.actionId] Internal ID or script ID of the workflow action (usually button pressed)
 * @param {number|string} [options.stateId] Internal ID or script ID of the workflow state containing the action
 * @return {number} Internal ID of workflow instance that was triggered
 *
 * @since 2015.2
 */
workflow.prototype.trigger = function(options) {};

workflow = new workflow();
/**
 * @type {workflow}
 */
N.prototype.workflow = workflow;

/**
 * SuiteScript xml module
 *
 * @module N/xml
 * @NApiVersion 2.x
 *
 */
function xml() {}
/**
 * Prepares a String for use in XML by escaping XML markup (for example, angle brackets, quotation marks, and ampersands).
 *
 * @param {string} options.xmlText the XML text to be escaped
 * @returns {string} the escaped XML
 *
 * @since 2015.2
 */
xml.prototype.escape = function(options) {};

/**
 * Validates a supplied XML document against a supplied XML Schema (XSD Document).
 *
 * @param {Document} options.xml the XML document object
 * @param {int|string} options.xsdFilePathOrId ID or path to the XSD file to validate the XML object against
 * @param {int|string} options.importFolderPathOrId (optional) ID or path to a folder in the file cabinet containing additional XSD schemas which are imported by the parent XSD provided via "xsdFilePathOrId"
 * @throws {SuiteScriptError} SSS_XML_DOES_NOT_CONFORM_TO_SCHEMA if XML provided is invalid with respect to the provided schema
 * @throws {SuiteScriptError} SSS_INVALID_XML_SCHEMA_OR_DEPENDENCY if schema is an incorrectly structured XSD, or a dependent schema could not be found
 * @returns {void}
 *
 * @since 2015.2
 */
xml.prototype.validate = function(options) {};

/**
 * XML Parser Object
 *
 * @type Parser
 */
xml.prototype.Parser = undefined;
/**
 * XPath Query Object
 *
 * @type XPath
 */
xml.prototype.XPath = undefined;
/**
 * @enum
 */
function xmlNodeType() {
    this.ELEMENT_NODE = 'ELEMENT_NODE';
    this.ATTRIBUTE_NODE = 'ATTRIBUTE_NODE';
    this.TEXT_NODE = 'TEXT_NODE';
    this.CDATA_SECTION_NODE = 'CDATA_SECTION_NODE';
    this.ENTITY_REFERENCE_NODE = 'ENTITY_REFERENCE_NODE';
    this.ENTITY_NODE = 'ENTITY_NODE';
    this.ENTITY_NODE = 'ENTITY_NODE';
    this.PROCESSING_INSTRUCTION_NODE = 'PROCESSING_INSTRUCTION_NODE';
    this.COMMENT_NODE = 'COMMENT_NODE';
    this.DOCUMENT_NODE = 'DOCUMENT_NODE';
    this.DOCUMENT_TYPE_NODE = 'DOCUMENT_TYPE_NODE';
    this.DOCUMENT_FRAGMENT_NODE = 'DOCUMENT_FRAGMENT_NODE';
    this.NOTATION_NODE = 'NOTATION_NODE';
}
xml.prototype.NodeType = xmlNodeType;

/**
 * XML Parser Object
 */
function Parser() {

    /**
     * Generate XML Document object from a string.
     *
     * @param {string} options.text XML text
     * @returns {Document}
     *
     * @since 2015.2
     */
    this.fromString = function(options) {};

    /**
     * Generate a String from an XML Document object.
     *
     * @param {Document} options.document XML Document object
     * @returns {string}
     *
     * @since 2015.2
     */
    this.toString = function(options) {};
}

/**
 * XPath Query Object
 */
function XPath() {

    /**
     * Returns an Array of Nodes matching the provided XPath expression.
     *
     * @param {string} options.xpath an XPath expression
     * @param {Node} options.node XML node being queried
     * @returns {Node[]} nodes associated with the current result
     *
     * @since 2015.2
     */
    this.select = function(options) {};
}

/**
 * Return a new instance of XML Node.
 *
 * @classDescription Encapsulation of W3C DOM Node
 * @return {Node}
 * @constructor
 *
 * @since 2015.2
 */
function Node() {

    /**
     * Adds the node newChild to the end of the list of children of this node. If the newChild is already in the tree, it is first removed.
     *
     * @param {Node} options.newChild the node to add
     * @returns {Node} the node added
     * @throws {SuiteScriptError} SSS_DOM_EXCEPTION if node cannot be appended for some reason
     */
    this.appendChild = function(options) {};

    /**
     * Returns a duplicate of this node, i.e., serves as a generic copy constructor for nodes. The duplicate node has no parent.
     *
     * @param {boolean} options.deep if true, recursively clone the subtree under the specified node; if false, clone only the node itself (and its attributes, if it is an Element)
     * @returns {Node} the duplicate node
     */
    this.cloneNode = function(options) {};

    /**
     * Compares the reference node, i.e. the node on which this method is being called, with a node, i.e. the one passed as a parameter,
     * with regard to their position in the document and according to the document order.
     *
     * @param {Node} options.other the node to compare against the reference node
     * @returns {int} how the node is positioned relatively to the reference node
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION when the nodes cannot be compared
     */
    this.compareDocumentPosition = function(options) {};

    /**
     * Returns whether this node (if it is an Element) has any attributes.
     *
     * @returns {boolean} true if this node has any attributes, false otherwise
     */
    this.hasAttributes = function(options) {};

    /**
     * Returns whether this node has any children.
     *
     * @returns {boolean} true if this node has any children, false otherwise
     */
    this.hasChildNodes = function(options) {};

    /**
     * Inserts the node newChild before the existing child node refChild. If refChild is null, insert newChild at the end of the list of children.
     * If the newChild is already in the tree, it is first removed.
     *
     * @param {Node} options.newChild the node to insert
     * @param {Node} options.refChild the reference node, i.e., the node before which the new node will be inserted
     * @returns {Node} the node being inserted
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be inserted for some reason
     */
    this.insertBefore = function(options) {};

    /**
     * This method checks if the specified namespaceURI is the default namespace or not.
     *
     * @param {string} options.namespaceURI the namespace URI to look for
     * @returns {boolean} true if the specified namespaceURI is the default namespace, false otherwise
     */
    this.isDefaultNamespace = function(options) {};

    /**
     * Tests whether two nodes are equal.
     * This method tests for equality of nodes, not sameness (i.e., whether the two nodes are references to the same object) which can be tested
     * with Node.isSameNode(). All nodes that are the same will also be equal, though the reverse may not be true.
     * Two nodes are equal if and only if the following conditions are satisfied:
     * - The two nodes are of the same type.
     * - The following string attributes are equal: nodeName, localName, namespaceURI, prefix, nodeValue
     * - The attributes maps are equal
     * - The childNodes lists are equal
     *
     * @param {Node} options.other the node to compare equality with
     * @returns {boolean} true if the nodes are equal, false otherwise
     */
    this.isEqualNode = function(options) {};

    /**
     * Returns whether this node is the same node as the given one.
     * This method provides a way to determine whether two Node references returned by the implementation reference the same object.
     * When two Node references are references to the same object, even if through a proxy, the references may be used completely interchangeably,
     * such that all attributes have the same values and calling the same DOM method on either reference always has exactly the same effect.
     *
     * @param {Node} options.other the node to test against
     * @returns {boolean} true if the nodes are the same, false otherwise
     */
    this.isSameNode = function(options) {};

    /**
     * Look up the namespace URI associated to the given prefix, starting from this node.
     *
     * @param {string} options.prefix the prefix to look for; if this parameter is null, the method will return the default namespace URI if any
     * @returns {string} the associated namespace URI or null if none is found
     */
    this.lookupNamespaceURI = function(options) {};

    /**
     * Look up the prefix associated to the given namespace URI, starting from this node. The default namespace declarations are ignored by this method.
     *
     * @param {string} options.namespaceURI the namespace URI to look for
     * @returns {string} an associated namespace prefix if found or null if none is found; if more than one prefix are associated to the namespace prefix, the returned namespace prefix is implementation dependent
     */
    this.lookupPrefix = function(options) {};

    /**
     * Puts all Text nodes in the full depth of the sub-tree underneath this Node, including attribute nodes, into a "normal" form
     * where only structure (e.g., elements, comments, processing instructions, CDATA sections, and entity references) separates
     * Text nodes, i.e., there are neither adjacent Text nodes nor empty Text nodes.
     *
     * @returns {void}
     */
    this.normalize = function(options) {};

    /**
     * Removes the child node indicated by oldChild from the list of children, and returns it.
     *
     * @param {Node} options.oldChild the node being removed
     * @returns {Node} the node removed
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be removed for some reason
     */
    this.removeChild = function(options) {};

    /**
     * Replaces the child node oldChild with newChild in the list of children, and returns the oldChild node.
     * If the newChild is already in the tree, it is first removed.
     *
     * @param {Node} options.newChild the new node to put in the child list
     * @param {Node} options.oldChild the node being replaced in the list
     * @returns {Node} the node replaced
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be replaced for some reason
     */
    this.replaceChild = function(options) {};

    /**
     * A map of key/value (string->Attr) pairs containing the attributes of this node (if it is an Element) or null otherwise.
     * @name Node#attributes
     * @type Object
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.attributes = undefined;
    /**
     * The absolute base URI of this node or null if the implementation wasn't able to obtain an absolute URI.
     * @name Node#baseURI
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.baseURI = undefined;
    /**
     * An array of all children of this node. If there are no children, this is an empty array.
     * @name Node#childNodes
     * @type Node[]
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.childNodes = undefined;
    /**
     * The first child of this node or null if there is no such node.
     * @name Node#firstChild
     * @type Node
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.firstChild = undefined;
    /**
     * The last child of this node or null if there is no such node.
     * @name Node#lastChild
     * @type Node
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.lastChild = undefined;
    /**
     * The local part of the qualified name of this node.
     * @name Node#localName
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.localName = undefined;
    /**
     * The namespace URI of this node, or null if it is unspecified.
     * @name Node#namespaceURI
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.namespaceURI = undefined;
    /**
     * The node immediately following this node or null if there is no such node.
     * @name Node#nextSibling
     * @type Node
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.nextSibling = undefined;
    /**
     * The name of this node, depending on its type.
     * @name Node#nodeName
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.nodeName = undefined;
    /**
     * The type of the underlying object.
     * @name Node#nodeType
     * @type NodeType
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.nodeType = undefined;
    /**
     * The value of this node, depending on its type. When it is defined to be null, setting it has no effect, including if the node is read-only.
     * @name Node#nodeValue
     * @type string
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to get or set the property value
     */
    this.nodeValue = undefined;
    /**
     * The Document object associated with this node. This is also the Document object used to create new nodes.
     * @name Node#ownerDocument
     * @type Document
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.ownerDocument = undefined;
    /**
     * The parent of this node. All nodes, except Attr, Document, DocumentFragment, Entity, and Notation may have a parent.
     * @name Node#parentNode
     * @type Node
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.parentNode = undefined;
    /**
     * The namespace prefix of this node, or null if it is unspecified. When it is defined to be null, setting it has no effect, including if the node is read-only.
     * @name Node#prefix
     * @type string
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to set the property value
     */
    this.prefix = undefined;
    /**
     * The node immediately preceding this node or null if there is no such node.
     * @name Node#previousSibling
     * @type Node
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.previousSibling = undefined;
    /**
     * This attribute returns the text content of this node and its descendants. When it is defined to be null, setting it has no effect.
     * @name Node#textContent
     * @type string
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to get or set the property value
     */
    this.textContent = undefined;}

/**
 * Return a new instance of XML Document.
 *
 * @classDescription Encapsulation of W3C DOM Document
 * @return {Document}
 * @constructor
 *
 * @since 2015.2
 */
function Document() {

    /**
     * Attempts to adopt a node from another document to this document. If supported, it changes the ownerDocument
     * of the source node, its children, as well as the attached attribute nodes if there are any. If the source
     * node has a parent it is first removed from the child list of its parent.
     *
     * @param {Node} options.source the node to move into this document
     * @returns {Node} the adopted node, or null if this operation fails, such as when the source node comes from a different implementation
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the node cannot be adopted for some reason
     */
    this.adoptNode = function(options) {};

    /**
     * Creates an attribute node of the given name.
     *
     * @param {string} options.name the name of the attribute
     * @param {string} options.value (optional) the value of the attribute; if omitted, the value of the attribute will be empty string
     * @returns {Attr} new attribute node object with name and attribute value set as expected and localName, prefix, and namespaceURI set to null
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be created
     */
    this.createAttribute = function(options) {};

    /**
     * Creates an attribute of the given qualified name and namespace URI.
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to create; can be null
     * @param {string} options.qualifiedName the qualified name of the attribute to instantiate
     * @param {string} options.value (optional) the value of the attribute; if omitted, the value of the attribute will be empty string
     * @returns {Attr} new attribute node object with name, attribute value, namespaceURI, prefix and localName set accordingly
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be created
     */
    this.createAttributeNS = function(options) {};

    /**
     * Creates a CDATASection node whose value is the specified string.
     *
     * @param {string} options.data the data for the CDATASection contents
     * @returns {Node} the new CDATASection node
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the CDATASection node cannot be created
     */
    this.createCDATASection = function(options) {};

    /**
     * Creates a Comment node given the specified string.
     *
     * @param {string} options.data the data for the node
     * @returns {Node} the new Comment node
     */
    this.createComment = function(options) {};

    /**
     * Creates an empty DocumentFragment object.
     *
     * @returns {Node} a new DocumentFragment
     */
    this.createDocumentFragment = function(options) {};

    /**
     * Creates an element of the type specified.
     *
     * @param {string} options.tagName the name of the element type to instantiate; for XML, this is case-sensitive
     * @returns {Element} a new Element object with the nodeName attribute set to tagName, and localName, prefix, and namespaceURI set to null
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the Element node cannot be created
     */
    this.createElement = function(options) {};

    /**
     * Creates an element of the given qualified name and namespace URI.
     *
     * @param {string} options.namespaceURI the namespace URI of the element to create; can be null
     * @param {string} options.qualifiedName the qualified name of the element type to instantiate
     * @returns {Element} a new Element object with the nodeName, localName, prefix, and namespaceURI set accordingly
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the Element node cannot be created
     */
    this.createElementNS = function(options) {};

    /**
     * Creates a ProcessingInstruction node given the specified name and data strings.
     *
     * @param {string} options.target the target part of the processing instruction
     * @param {string} options.data the data for the node
     * @returns {Node} the new ProcessingInstruction object
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the ProcessingInstruction node cannot be created
     */
    this.createProcessingInstruction = function(options) {};

    /**
     * Creates a Text node given the specified string.
     *
     * @param {string} options.data the data for the node
     * @returns {Node} the new Text node
     */
    this.createTextNode = function(options) {};

    /**
     * Returns the Element that has an ID attribute with the given value. If no such element exists, this returns null.
     *
     * @param {string} options.elementId the unique id value for an element
     * @returns {Element} the matching Element or null if there is none
     */
    this.getElementById = function(options) {};

    /**
     * Returns an array of all the Elements with a given tag name in document order.
     *
     * @param {string} options.tagName the name of the tag to match on; the special value "*" matches all tags; for XML, the tagName parameter is case-sensitive
     * @returns {Element[]} an array containing all the matched Elements
     */
    this.getElementsByTagName = function(options) {};

    /**
     * Returns an array of all the Elements with a given local name and namespace URI in document order.
     *
     * @param {string} options.namespaceURI the namespace URI of the elements to match on; the special value "*" matches all namespaces
     * @param {string} options.localName the local name of the elements to match on; the special value "*" matches all local names
     * @returns {Element[]} an array containing all the matched Elements
     */
    this.getElementsByTagNameNS = function(options) {};

    /**
     * Imports a node from another document to this document, without altering or removing the source node from the original document;
     * this method creates a new copy of the source node.
     *
     * @param {Node} options.importedNode the node to import
     * @param {boolean} options.deep if true, recursively import the subtree under the specified node; if false, import only the node itself, as explained above
     * @returns {Node} the imported node that belongs to this Document
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the node cannot be imported for some reason
     */
    this.importNode = function(options) {};

    /**
     * The Document Type Declaration associated with this document.
     * @name Document#doctype
     * @type Object
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.doctype = undefined;
    /**
     * This is a convenience attribute that allows direct access to the child node that is the document element of the document.
     * @name Document#documentElement
     * @type Element
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.documentElement = undefined;
    /**
     * The location of the document or null if undefined.
     * @name Document#documentURI
     * @type string
     */
    this.documentURI = undefined;
    /**
     * An attribute specifying the encoding used for this document at the time of the parsing.
     * @name Document#inputEncoding
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.inputEncoding = undefined;
    /**
     * An attribute specifying, as part of the XML declaration, the encoding of this document.
     * @name Document#xmlEncoding
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.xmlEncoding = undefined;
    /**
     * An attribute specifying, as part of the XML declaration, whether this document is standalone. This is false when unspecified.
     * @name Document#xmlStandalone
     * @type boolean
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the property cannot be set
     */
    this.xmlStandalone = undefined;
    /**
     * An attribute specifying, as part of the XML declaration, the version number of this document.
     * @name Document#xmlVersion
     * @type string
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the property cannot be set
     */
    this.xmlVersion = undefined;}

/**
 * Return a new instance of XML Element.
 *
 * @classDescription Encapsulation of W3C DOM Element
 * @return {Element}
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function Element() {

    /**
     * Retrieves an attribute value by name.
     *
     * @param {string} options.name the name of the attribute to retrieve
     * @returns {string} the Attr value as a string, or the empty string if that attribute does not have a specified or default value
     */
    this.getAttribute = function(options) {};

    /**
     * Retrieves an attribute node by name.
     *
     * @param {string} options.name the name of the attribute to retrieve
     * @returns {Attr} the Attr node with the specified name or null if there is no such attribute
     */
    this.getAttributeNode = function(options) {};

    /**
     * Retrieves an attribute node by local name and namespace URI.
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to retrieve; can be null
     * @param {string} options.localName the local name of the attribute to retrieve
     * @returns {Attr} the Attr node with the specified attribute local name and namespace URI or null if there is no such attribute
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be retrieved for some reason
     */
    this.getAttributeNodeNS = function(options) {};

    /**
     * Retrieves an attribute value by local name and namespace URI.
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to retrieve; can be null
     * @param {string} options.localName the local name of the attribute to retrieve
     * @returns {string} the Attr value as a string, or the empty string if that attribute does not have a specified or default value
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be retrieved for some reason
     */
    this.getAttributeNS = function(options) {};

    /**
     * Returns an array of all descendant Elements with a given tag name, in document order.
     *
     * @param {string} options.tagName the name of the tag to match on; the special value "*" matches all tags; for XML, the tagName parameter is case-sensitive
     * @returns {Element[]} an array of matching Element nodes
     */
    this.getElementsByTagName = function(options) {};

    /**
     * Returns an array of all descendant Elements with a given local name and namespace URI in document order.
     *
     * @param {string} options.namespaceURI the namespace URI of the elements to match on; the special value "*" matches all namespaces
     * @param {string} options.localName the local name of the elements to match on; the special value "*" matches all local names
     * @returns {Element[]} an array of matching Element nodes
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the elements cannot be retrieved for some reason
     */
    this.getElementsByTagNameNS = function(options) {};

    /**
     * Returns true when an attribute with a given name is specified on this element or has a default value, false otherwise.
     *
     * @param {string} options.name the name of the attribute to look for
     * @returns {boolean} true if an attribute with the given name is specified on this element or has a default value, false otherwise
     */
    this.hasAttribute = function(options) {};

    /**
     * Returns true when an attribute with a given local name and namespace URI is specified on this element or has a default value, false otherwise.
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to look for; can be null
     * @param {string} options.localName the local name of the attribute to look for
     * @returns {boolean} true if an attribute with the given local name and namespace URI is specified or has a default value on this element, false otherwise
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the command cannot be performed for some reason
     */
    this.hasAttributeNS = function(options) {};

    /**
     * Removes an attribute by name.
     *
     * @param {string} options.name the name of the attribute to remove
     * @returns {void}
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be removed for some reason
     */
    this.removeAttribute = function(options) {};

    /**
     * Removes the specified attribute node.
     *
     * @param {Attr} options.oldAttr the Attr node to remove from the attribute list
     * @returns {Attr} the Attr node that was removed
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    this.removeAttributeNode = function(options) {};

    /**
     * Removes an attribute by local name and namespace URI.
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to remove; can be null
     * @param {string} options.localName the local name of the attribute to remove
     * @returns {void}
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be removed for some reason
     */
    this.removeAttributeNS = function(options) {};

    /**
     * Adds a new attribute. If an attribute with that name is already present in the element, its value is changed to be that of the value parameter.
     *
     * @param {string} options.name the name of the attribute to create or alter
     * @param {string} options.value value to set in string form
     * @returns {void}
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    this.setAttribute = function(options) {};

    /**
     * Adds a new attribute node. If an attribute with that name is already present in the element, it is replaced by the new one.
     *
     * @param {Attr} options.newAttr the Attr node to add to the attribute list
     * @returns {Attr} if the newAttr attribute replaces an existing attribute, the replaced Attr node is returned, otherwise null is returned
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    this.setAttributeNode = function(options) {};

    /**
     * Adds a new attribute node. If an attribute with that local name and that namespace URI is already present in the element, it is replaced by the new one.
     *
     * @param {Attr} options.newAttr the Attr node to add to the attribute list
     * @returns {Attr} if the newAttr attribute replaces an existing attribute with the same local name and namespace URI, the replaced Attr node is returned, otherwise null is returned
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    this.setAttributeNodeNS = function(options) {};

    /**
     * Adds a new attribute. If an attribute with the same local name and namespace URI is already present on the element, its prefix is changed
     * to be the prefix part of the qualifiedName, and its value is changed to be the value parameter.
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to create or alter; can be null
     * @param {string} options.qualifiedName the qualified name of the attribute to create or alter
     * @param {string} options.value value to set in string form
     * @returns {void}
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    this.setAttributeNS = function(options) {};

    /**
     * The name of the element.
     * @name Element#tagName
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.tagName = undefined;}

/**
 * Return a new instance of XML Attr.
 *
 * @classDescription Encapsulation of W3C DOM Attr
 * @return {Attr}
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function Attr() {

    /**
     * Returns the name of this attribute. If Node.localName is different from null, this property is a qualified name.
     * @name Attr#name
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.name = undefined;
    /**
     * The Element node this attribute is attached to or null if this attribute is not in use.
     * @name Attr#ownerElement
     * @type Element
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.ownerElement = undefined;
    /**
     * True if this attribute was explicitly given a value in the instance document, false otherwise.
     * @name Attr#specified
     * @type boolean
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    this.specified = undefined;
    /**
     * The attribute value. On retrieval, the value of the attribute is returned as a string. Character and general entity
     * references are replaced with their values. On setting, this creates a Text node with the unparsed contents of the string,
     * i.e. any characters that an XML processor would recognize as markup are instead treated as literal text.
     * @name Attr#value
     * @type string
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the value cannot be set for some reason
     */
    this.value = undefined;}

xml = new xml();
/**
 * @type {xml}
 */
N.prototype.xml = xml;