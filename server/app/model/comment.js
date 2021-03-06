'use strict';
// 评论表
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('zr_blog');
  const counterSchema = new Schema({
    article: { type: String }, // 所属文章ID
    user: { type: String }, // 所属用户 ID
    content: { type: String }, // 评论内容
    like: { type: Number, default: 0 }, // 点赞数
    dislike: { type: Number, default: 0 }, // 踩数
    pid: { type: Schema.Types.ObjectId }, // 父评论ID, null 表示对文章的评论
    rootPid: { type: Schema.Types.ObjectId }, // 所属根评论的ID, 便于根据根评论分页
    disabled: { type: Number }, // 是否禁用, 1/禁用 | 0/没禁用
    updateTime: { type: Number }, // 更新时间
    createTime: { type: Number }, // 创建时间
  });
  return conn.model('_comment', counterSchema, '_comment');
};
