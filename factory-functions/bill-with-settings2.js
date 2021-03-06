let billWithSettingsFunction = function () {

    let callCostSetting = 0;
    let smsCostSetting = 0;
    let totalCallCost = 0;
    let totalSmsCost = 0;
    // let totalCost = 0;
    let warningSetting = 0;
    let criticalSetting = 0;

    let setCallCost = function (callCost) {
        callCostSetting = callCost;
    }

    let updateCallCost = function () {
        return callCostSetting;
    }

    let setSmsCost = function (smsCost) {
        smsCostSetting = smsCost;
    }

    let updateSmsCost = function () {
        return smsCostSetting;
    }

    let forEachCallAdd = function () {
        totalCallCost += callCostSetting;

    }

    let newCallTotal = function () {
        return totalCallCost.toFixed(2);
    }

    let forEachSmsAdd = function () {
        totalSmsCost += smsCostSetting;

    }

    let newSmsTotal = function () {
        return totalSmsCost.toFixed(2);
    }


    let updateTotalCost = function () {

        return (totalCallCost + totalSmsCost).toFixed(2)


    }

    let setWarningLevel = function (warningValue) {
        warningSetting = warningValue;

    }

    let upDateWarning = function () {

        return warningSetting;
    }

    let setCriticalLevel = function (criticalValue) {
        criticalSetting = criticalValue;

    }

    let upDateCritical = function () {

        return criticalSetting;
    }
    var theDefaultClass = function(){
    if (updateTotalCost()< upDateWarning && updateTotalCost < upDateCritical() )
    return ""
    }

    var theWarningLevel = function () {
        if (updateTotalCost() >= upDateWarning() && updateTotalCost() > "0.00")
            return "warning"
    }

    var theCriticalLevel = function () {
        if (updateTotalCost() >= upDateCritical() && updateTotalCost() > "0.00")
            return "critical"
    }


    return {
        updateCallCost,
        setCallCost,
        updateSmsCost,
        setSmsCost,
        forEachCallAdd,
        newCallTotal,
        forEachSmsAdd,
        newSmsTotal,
        updateTotalCost,
        setWarningLevel,
        upDateWarning,
        setCriticalLevel,
        upDateCritical,
        theWarningLevel,
        theCriticalLevel,
        theDefaultClass,
    }
};
