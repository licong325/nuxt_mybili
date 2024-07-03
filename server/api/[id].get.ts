// get  /api/[id]
/* 引入视频数据 */
import video from '@/database/video';
console.log('[video]——》',video);
export default defineEventHandler(event => {
  // 获取路由参数
  const { id } = event.context.params || {};
  console.log('[id]——》', id);
  // 根据 id 查找视频
  return video.find(v => v.bvid === id);
});
