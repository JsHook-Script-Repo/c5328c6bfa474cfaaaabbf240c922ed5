// Script by JeelsBoobz
common.hookAllMethods('android.app.ActivityThread', 'performLaunchActivity', null, function (param) {
    var mInitialApplication = common.getObjectField(param.thisObject, 'mInitialApplication');
    var classLoader = common.callMethod(mInitialApplication, 'getClassLoader');
    var ConnectionManagerTG = common.findClass('org.telegram.tgnet.ConnectionsManager', classLoader);
    common.hookAllMethods(ConnectionManagerTG, 'native_expireFile', function (param) {
        param.setResult(false);
    });
    common.hookAllMethods(ConnectionManagerTG, 'native_daysFile', function (param) {
        param.setResult(java.lang.Integer.valueOf('999'));
    });
    common.hookAllMethods(ConnectionManagerTG, 'native_removeInstance', function (param) {
        param.setResult(true);
    });
    common.hookAllMethods(ConnectionManagerTG, 'native_checkLicense', function (param) {
        param.setResult(true);
    });
    var MessagesControllerTG = common.findClass('org.telegram.messenger.m80', classLoader);
    common.hookAllMethods(MessagesControllerTG, 'q9', function (param) {
        param.setResult(false);
     });
    var UserConfigTG = common.findClass('org.telegram.messenger.cu0', classLoader);
    common.hookAllMethods(UserConfigTG, 'L', function (param) {
        param.setResult(true);
     });
});