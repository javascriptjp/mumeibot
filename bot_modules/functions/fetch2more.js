const {Collection} = require("@discordjs/collection");
function array2Collection(messages) {
    return new Collection(messages.sort((a, b) => BigInt(a.id) < BigInt(b.id) ? 1 : -1).map(e => [e.id, e]));
}
module.exports = async (channel, options = { limit: 50 }) => {
    if ((options.limit ?? 50) <= 100) {
        return channel.messages.fetch(options);
    }
    if (typeof options.around === "string") {
        const messages = await channel.messages.fetch({ ...options, limit: 100 });
        const limit = Math.floor((options.limit - 100) / 2);
        if (messages.size < 100) {
            return messages;
        }
        const backward = fetchMany(channel, { limit, before: messages.last().id });
        const forward = fetchMany(channel, { limit, after: messages.first().id });
        return array2Collection([messages, ...await Promise.all([backward, forward])].flatMap(
            e => [...e.values()]
        ));
    }
    let temp;
    function buildParameter() {
        const req_cnt = Math.min(options.limit - messages.length, 100);
        if (typeof options.after === "string") {
            const after = temp ? temp.first().id : options.after
            return { ...options, limit: req_cnt, after };
        }
        const before = temp ? temp.last().id : options.before;
        return { ...options, limit: req_cnt, before };
    }
    const messages = [];
    while (messages.length < options.limit) {
        const param = buildParameter();
        temp = await channel.messages.fetch(param);
        messages.push(...temp.values());
        if (param.limit > temp.size) {
            break;
        }
    }
    return array2Collection(messages);
}