module.exports = function AutoDailyRewardCredits(mod) {
    mod.hook('S_LOGIN', '*', () => {
        mod.toServer('C_REQUEST_RECV_DAILY_TOKEN', 1, {});
    })
}
