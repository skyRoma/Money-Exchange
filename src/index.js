// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var H, Q, D, N, P, result = {};
    if (currency <= 0) return {};
    if (currency > 10000) return {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    H = Math.floor(currency / 50);
    currency -= H * 50;
    Q = Math.floor(currency / 25);
    currency -= Q * 25;
    D = Math.floor(currency / 10);
    currency -= D * 10;
    N = Math.floor(currency / 5);
    currency -= N * 5;
    P = Math.floor(currency / 1);
    currency -= P * 1;

    if (H > 0) result["H"] = H;
    if (Q > 0) result["Q"] = Q;
    if (D > 0) result["D"] = D;
    if (N > 0) result["N"] = N;
    if (P > 0) result["P"] = P;
    return result;
}