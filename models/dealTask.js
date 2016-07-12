module.exports = (function () {
    var mongoose = require('mongoose');
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var tasksSchema = mongoose.Schema({
        taskCount  : {type: Number, default: 0},
        deal       : {type: ObjectId, ref: 'Opportunities', default: null},
        assignedTo : {type: ObjectId, ref: 'Employees', default: null},
        tags       : [String],
        description: String,
        sequence   : {type: Number, default: 0},
        company    : {type: ObjectId, ref: 'Customers', default: null},
        contact    : {type: ObjectId, ref: 'Customers', default: null},
        dueDate   : {type: Date, default: Date.now},
        workflow   : {type: ObjectId, ref: 'workflows', default: null},
        type       : {type: String, default: ''},
        notes      : {type: Array, default: []},
        attachments: {type: Array, default: []},
        editedBy: {
            user: {type: ObjectId, ref: 'Users', default: null},
            date: {type: Date, default: Date.now}
        },

        ID: Number
    }, {collection: 'DealTasks'});

    mongoose.model('DealTasks', tasksSchema);

    if (!mongoose.Schemas) {
        mongoose.Schemas = {};
    }

    mongoose.Schemas.DealTasks = tasksSchema;
})();
