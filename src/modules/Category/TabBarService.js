let _tabBar;
const setService = (ref) => {
    _tabBar = ref;
}

const scrollTo = (x) => {
    _tabBar?.userScrollToTabBar(x)
}
export default {
    setService, scrollTo
}