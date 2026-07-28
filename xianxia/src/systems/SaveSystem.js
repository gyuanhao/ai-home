/* ============================================================
 * 存档系统 (src/systems/SaveSystem.js)
 * 作用：用浏览器 localStorage 记"玩家去过哪些地点"。
 * 需求第 12 项：记已访地点，已访地点标记 / 不再弹引导。
 * 不需要服务器，数据存在玩家自己浏览器里，下次打开还在。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.SaveSystem = {
  KEY: 'aihome_visited', // localStorage 的存储键名

  // 取已访地点 id 列表（数组）
  getVisited() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY) || '[]');
    } catch (e) {
      return [];
    }
  },

  // 判断某地点是否已访
  isVisited(id) {
    return this.getVisited().includes(id);
  },

  // 标记某地点已访
  markVisited(id) {
    const list = this.getVisited();
    if (!list.includes(id)) {
      list.push(id);
      localStorage.setItem(this.KEY, JSON.stringify(list));
    }
  },

  // 清空存档（调试用，比如想重新体验）
  clear() {
    localStorage.removeItem(this.KEY);
  },
};
