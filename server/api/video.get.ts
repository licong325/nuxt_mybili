// get   /api/video
/* 导入数据 */
import video from "~/database/video";

export default defineEventHandler(()=>{
  return video
})