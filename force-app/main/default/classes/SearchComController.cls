public with sharing class SearchComController {
    @AuraEnabled
    public static void deleteStudent(String accId){
        Database.delete(accId);
    }
    
    @AuraEnabled
    public static List<HocSinh__c> searchStudent(String name, Boolean isSort, String class, Date startBirthday, Date endBirthday){
        List<HocSinh__c> students = new List<HocSinh__c>();
        if(String.isNotBlank(name)){
            String likeCondition = '%'+name+'%';
            students = [SELECT Id,HoHocSinh__c,TenHocSinh__c ,GioiTinh__c, NgaySinh__c, Diem1__c,Diem2__c, Diem3__c, DiemTB__c,TinhTrang__c
                        FROM HocSinh__c 
                        WHERE TenHocSinh__c LIKE :likeCondition];
        } else {
            students = [SELECT Id,HoHocSinh__c,TenHocSinh__c ,GioiTinh__c, NgaySinh__c, Diem1__c,Diem2__c, Diem3__c, DiemTB__c,TinhTrang__c
                        FROM HocSinh__c ];
        }
        System.debug('==name==' + name);
        System.debug('==accounts==' + students);
        return students;
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
}