//Disable this at your own risk
module.exports = function () {
    const ACCEPTED_ENVS = ['development', 'test', 'production'];
    if (!ACCEPTED_ENVS.includes(process.env.NODE_ENV)) {
        throw new Error(`Invalid NODE_ENV in .env file. Should be one of ${ACCEPTED_ENVS.join(', ')}`);
    } else if (typeof process.env.SECRET !== 'string' || process.env.SECRET.length < 10) {
        throw new Error('Invalid Secret supplied in env. Good Secret required.');
    } else if (process.env.NODE_ENV === 'production' && (process.env.JAWSDB_URL === undefined || process.env.JAWSDB_URL === '')) {
        throw new Error('Production database not properly configured. Supply a URL');
    } else if (process.env.NODE_ENV !== 'production' && (process.env.LOCALDB_URL === undefined || process.env.LOCALDB_URL === '')) {
        throw new Error('No connection URL supplied for local DB');
    }
};