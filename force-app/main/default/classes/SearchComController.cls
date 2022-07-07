public with sharing class SearchComController {
    @AuraEnabled
    public static void deleteStudent(String accId){
        Database.delete(accId);
    }
    
    @AuraEnabled
    public static List<HocSinh__c> searchStudent(String searchCondition){
        List<HocSinh__c> students = new List<HocSinh__c>();
        if(String.isNotBlank(searchCondition)){
            String likeCondition = '%'+searchCondition+'%';
            students = [SELECT Id,HoHocSinh__c,TenHocSinh__c 
                        FROM HocSinh__c 
                        WHERE TenHocSinh__c LIKE :likeCondition];
        } else {
            students = [SELECT Id,HoHocSinh__c,TenHocSinh__c FROM HocSinh__c ];
        }
        System.debug('==searchCondition==' + searchCondition);
        System.debug('==accounts==' + students);
        return students;
    }
}