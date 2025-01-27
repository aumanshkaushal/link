const { dmInvite } = require('./dmInvite');

async function dmManager(d, userIds, message, batchSize = 5, interval = 1000) {
    let index = 0;
    const failedUserIds = [];

    while (index < userIds.length) {
        const currentBatch = userIds.slice(index, index + batchSize);

        await Promise.all(
            currentBatch.map(async (userId) => {
                const success = await dmInvite(d, userId, message);
                if (!success) {
                    failedUserIds.push(userId);
                }
                return success;
            })
        );

        index += batchSize;

        if (index < userIds.length) {
            await new Promise((resolve) => setTimeout(resolve, interval));
        }
    }

    return failedUserIds;
}

module.exports = {
    dmManager
};
