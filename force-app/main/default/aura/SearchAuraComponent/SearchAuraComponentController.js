({
	doInit : function(component, event, helper) {
		console.log('==component==');
        helper.getStudents(component);
	},
    search: function(component, event, helper) {
        console.log('==seachItems==');
        helper.getStudents(component);
    },
    newStudent : function(component, event, helper) {
        component.find('create_student_model').getModalRecordData();
    },
    editStudent: function(component, event, helper) {
        var recordId = event.getSource().get('v.name');
        console.log('==recordId==' + recordId);
        component.find('edit_student_modal').getModalRecordData(recordId);
    },
    deleteStudent: function(component, event, helper) {
        var recordId = event.getSource().get('v.name');
        component.find('confirm_delete_modal').confirmDeleteModal(recordId);
    },
    handleReloadEvent: function(component, event, helper) {
        console.log('==handleReloadEvent==');
        helper.getStudents(component);
    },

    isCheck:function(component, event, helper) {
        var recordId = event.getSource().get('v.name');
        console.log('==checkId==' + recordId);
    }
})