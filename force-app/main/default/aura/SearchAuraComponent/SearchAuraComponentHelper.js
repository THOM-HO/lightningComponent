({
    getStudents : function(component) {
		var action = component.get('c.searchStudent');
        action.setParams({ searchCondition : component.get("v.searchCondition") });
        action.setCallback(this, function(actionResult){
            var state = actionResult.getState();
            console.log('===state get students===' + state);
            var listStudent=[];
            if (state === "SUCCESS")
            {
                let listResult= actionResult.getReturnValue();
                for(let student of listResult){
                    const target = student;
                    const source = { isSelected: false};

                    const returnedTarget = Object.assign(target, source);
                    console.log('sdsdsdsd'+JSON.stringify(returnedTarget));
                    listStudent.push(returnedTarget);

                }
                
                component.set('v.students', listStudent);
            }
        });
        $A.enqueueAction(action);
	}
})
