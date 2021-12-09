module.exports = function (statement) {
    let statementArray = statement.replace(/^import +/, '').split('from');
    let url = statementArray.pop();
    let args = [];

    if (statementArray.length > 0) {
        if (statementArray[0].indexOf('{') > -1) {
            args = statementArray[0].replace('{', '').replace('}', '').split(',');

            for (let i = 0; i < args.length; i++) {
                args[i] = args[i].trim();
            }

        } else {
            args = ['__default__'];
        }
    }

    return {
        url: url.trim().replace(/['"]/g, ''),
        args
    };

};
