import request from "@/util/request";
// 查询
export function query(task) {
  if (localStorage.isAdmin) {
    return request({
      url: "/common-node/api/example/lxquery",
      method: "get",
      params: { task }
    });
  } else {
    return Promise.resolve('没有权限')
  }
}