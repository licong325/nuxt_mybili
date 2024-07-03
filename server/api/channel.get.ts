// get  /api/channel    最终会通过这种方式访问到

/* 导入数据,模拟数据库返回数据 */
import channel from '~/database/channel';

/* 返回数据，return什么，结果就是什么， */
export default defineEventHandler(() => {
  // 这里可以从任何地方拿数据，最终返回结果就好
  return channel;
});
