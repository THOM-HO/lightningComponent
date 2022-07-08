({
    getStudents: function (component) {
        var action = component.get('c.searchStudent');
        action.setParams({
            name: component.get("v.name"),
            isSort: component.get("v.isSort"),
            class: component.get("v.class"),
            startBirthday: component.get("v.startBirthday"),
            endBirthday: component.get("v.endBirthday"),
        });
        action.setCallback(this, function (actionResult) {
            var state = actionResult.getState();
            console.log('===state get students===' + state);
            var listStudent = [];
            if (state === "SUCCESS") {
                let listResult = actionResult.getReturnValue();
                for (let student of listResult) {
                    const target = student;
                    const source = { isSelected: false };

                    const returnedTarget = Object.assign(target, source);
                    listStudent.push(returnedTarget);
                }
                component.set('v.students', listStudent);
            }
        });
        $A.enqueueAction(action);

    },
    getClass: function (cmp) {
        var action = cmp.get("c.methodGetDataClass");
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                let listClass = response.getReturnValue();
                cmp.set('v.listClass', listClass);
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        var toastEvent = $A.get("e.force:showToast");
                        toastEvent.setParams({
                            "title": "Error!",
                            "message": errors[0].message
                        });
                        toastEvent.fire();
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);

    },

    removeBook: function (cmp, row) {
        var rows = cmp.get('v.data');
        var rowIndex = rows.indexOf(row);

        rows.splice(rowIndex, 1);
        cmp.set('v.data', rows);
    }
});