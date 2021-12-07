module.exports = function (statement) {
    let statementArray = statement.replace(/^import +/, '').split('from');
    let url = statementArray.pop();
    let args = [], args_str = [];

    if (statementArray.length > 0) {
        if (statementArray[0].indexOf('{') > -1) {
            args = statementArray[0].replace('{', '').replace('}', '').split(',');

            for (let i = 0; i < args.length; i++) {
                args[i] = args[i].trim();
                args_str[i] = '"' + args[i] + '"';
            }

        } else {
            args = ['__default__'];
            args_str = ['"__default__"'];
        }
    }

    return {
        url,
        args: args.join(','),
        args_str: args_str.join(',')
    };

};
