({
    onRecordSubmit: function(component, event, helper) {
        event.preventDefault();
        const fields = event.getParam('fields');
        // fields.ContactId = component.get("v.recordId");
        component.find('recordEditForm').submit(fields);
    },
    onRecordSuccess : function(component,event,helper) {
       console.log('done')
   }
})
