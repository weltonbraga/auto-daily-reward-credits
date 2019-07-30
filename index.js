module.exports = function AutoDailyRewardCredits(mod) {
    mod.hook('S_LOGIN', 13, (event) => {
        mod.toServer('C_REQUEST_RECV_DAILY_TOKEN', 1, {});
    })
}
