export default {
    common: {
        area: ':6001/uc/support/country'
    },
    uc: { //会员中心接口
        login: ':6001/uc/login',
        register: ':6001/uc/register',
        wallet: ':6001/uc/asset/wallet/',
        captcha: ':6001/uc/start/captcha',
        identification: ':6001/uc/approve/certified/business/status', //商家认证
        apply: ':6001/uc/approve/certified/business/apply', //商家认证申请
        announcement: ':6001/uc/announcement/page', //公告列表
        paydividends: ":6001/uc/bonus/user/page", //持币分红
        mylistrecord: ":6001/uc/mine/detail/", //交易挖矿详情
        activitylist: ":6001/uc/activity/page-query", // 活动列表
        memberactivity: ":6001/uc/activity/getmemberrecords", // 用户参与活动列表
        attendActivity: ":6001/uc/activity/attend", // 参与活动
        mypromotion: ":6001/uc/promotion/mypromotion", // 我的推广佣金
        toppromotion: ":6001/uc/promotion/toprank", // 推广合伙人排行
        getfreecard: ":6001/uc/promotion/promotioncard/getfreecard", // 获取免费推广卡
        exchangecard: ":6001/uc/promotion/promotioncard/exchangecard", // 兑换推广卡
        mycardlist: ":6001/uc/promotion/promotioncard/mycard", // 兑换推广卡
        toppromotionmonth: ":6001/uc/promotion/monthtoprank", // 推广合伙人排行
        toppromotionweek: ":6001/uc/promotion/weektoprank", // 推广合伙人排行
        memberInfo: ":6001/uc/member/my-info", // 获取用户信息
        mypromotionrecord: ":6001/uc/promotion/record", //获取推广邀请人记录
        myInnovationOrderList: ":6001/uc/activity/getmyorders", // 创新实验区参与订单列表
        myInnovationMinings: ":6001/uc/miningorder/my-minings", // 获取我的矿机列表
        myInnovationLocked: ":6001/uc/lockedorder/my-locked" // 获取我的矿机列表
    },
    market: { //币币交易行情接口
        ws: ':6004/market/market-ws',
        thumb: ':6004/market/symbol-thumb',
        thumbTrend: ':6004/market/symbol-thumb-trend',
        plate: ':6004/market/exchange-plate', //主动查询的盘口信息
        platemini: ':6004/market/exchange-plate-mini', //获取10条数据
        platefull: ':6004/market/exchange-plate-full', //获取所有数据
        trade: ':6004/market/latest-trade', //主动查询的实时成交信息
        symbolInfo: ':6004/market/symbol-info',
        coinInfo: ':6004/market/coin-info',
        indexData: ":6004/market/index_info"
    },
    exchange: { //币币交易委托提交与查询接口
        orderAdd: ':6003/exchange/order/add', //提交订单接口
        current: ':6003/exchange/order/current', //当前委托接口
        history: ':6003/exchange/order/history', //历史委托接口
        detail: ':6003/exchange/order/detail/', //详细订单接口
        favorFind: ':6003/exchange/favor/find', //查询自选
        favorAdd: ':6003/exchange/favor/add', //添加自选
        favorDelete: ':6003/exchange/favor/delete', //删除自选
        orderCancel: ':6003/exchange/order/cancel' //取消委托
    },
    otc: {
        coin: ':6006/otc/coin/all', //查询支持的币种
        advertise: ':6006/otc/advertise/page-by-unit', //获取广告
        createAd: ':6006/uc/ad/create', //创建广告
        adDetail: ':6006/otc/advertise/detail'
    },
    activity: {
        activity: "/activity/page-query"
    }
}
