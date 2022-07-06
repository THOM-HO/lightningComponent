public with sharing class SearchComController {
    @AuraEnabled
    public static List<HocSinh__C> methodGetDataStudents(){
        try {
            List<HocSinh__C> listData = [SELECT Id,HoHocSinh__c FROM HocSinh__c];
            return listData;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Lop__c> methodGetDataClass(){
        try {
            List<Lop__c> listData = [SELECT Id, TenLop__c FROM Lop__c ORDER BY TenLop__c];
            return listData;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void methodUpdate(List<HocSinh__C> listObj){
        try {
            update listObj;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static void addStudent(HocSinh__c student){
		insert student;
    } 
}