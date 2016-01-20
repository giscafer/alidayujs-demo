 var Alidayu=require('alidayujs');
    //应用密匙 见：http://www.alidayu.com/help?spm=a3142.7802526.1.24.iEB4Yc&_t=1#create
    var config = {
        app_key: '2330******',
        secret: '3403636b338e1003999dd94******'
    };
    var alidayu = new Alidayu(config);
    //参数 见：http://open.taobao.com/doc2/apiDetail.htm?apiId=25450
    var options = {
        sms_free_sign_name: '身份验证',
            sms_param: {
            code: '1234',
            product: 'alidayujs测试',
        },
        rec_num: '15110111111',  //多个手机号逗号隔开
        sms_template_code: 'SMS_4725038',
    };
    //发送短信
    alidayu.sms(options,function(err,result){
        if(err){
            console.log('ERROR'+err);
        }
        console.log(result);
    });
