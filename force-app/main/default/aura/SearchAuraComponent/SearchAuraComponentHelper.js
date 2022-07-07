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
                    console.log('sdsdsdsd'+JSON.stringify(student));// có dữ liệu được log ra
                    listStudent.push(student);// dòng này deploy lên bị lỗi
                }
                
                component.set('v.students', listStudent);
            }
        });
        $A.enqueueAction(action);
	}
})
