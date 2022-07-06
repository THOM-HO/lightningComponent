({
    handleSuccess : function(component, event, helper) {
        component.find('notifLib').showToast({
            "variant": "success",
            "title": "Student Created",
            "message": "Record ID: " + event.getParam("id")
        });
    }
})
