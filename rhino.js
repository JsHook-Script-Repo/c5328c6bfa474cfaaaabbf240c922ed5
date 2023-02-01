// Script by JeelsBoobz
common.hookAllMethods('android.app.ActivityThread', 'performLaunchActivity', null, function (param) {
    var mInitialApplication = common.getObjectField(param.thisObject, 'mInitialApplication');
    var classLoader = common.callMethod(mInitialApplication, 'getClassLoader');
    var ConnectionManager = common.findClass('org.telegram.tgnet.ConnectionsManager', classLoader);
    var MessagesController = common.findClass('org.telegram.messenger.r70', classLoader);
    var UserConfig = common.findClass('org.telegram.messenger.ss0', classLoader);
    common.hookAllMethods(ConnectionManager, 'native_expireFile', function (param) {
        param.setResult(false);
    });
    common.hookAllMethods(ConnectionManager, 'native_daysFile', function (param) {
        param.setResult(java.lang.Integer.valueOf('999'));
    });
    common.hookAllMethods(ConnectionManager, 'native_removeInstance', function (param) {
        param.setResult(true);
    });
    common.hookAllMethods(ConnectionManager, 'native_checkLicense', function (param) {
        param.setResult(true);
    });
    common.hookAllMethods(MessagesController, 'm9', function (param) {
        param.setResult(false);
     });
    common.hookAllMethods(UserConfig, 'K', function (param) {
        param.setResult(true);
     });
});