#nextTodo
- 自动保存文章, 新文章单独设置一个表暂存
- logo 右键事件 后台可 配置, 目前是写死的
- 管理首页, 浏览时间统计, 浏览位置统计, 最新评论,
- 文章编辑添加主题图片功能, 使用文章第一张图片作为封面, 或者专门的图片设置
- 2, 编辑器重写, 取消监听 dom 元素变更,采用解析 markdown 文本的方式
     实时创建 html, 考虑如何将编辑器的内容转化为 纯文本并且能够实时
     显示 markdown 转义之后的 html

#规划
- 1, 支持 markdown 语法的 **粗体**, *斜体* ***粗体斜体***, 
     ~~删除线~~, 
     1. 有序列表, (数字加点)
     - 无序列表(-, +, * 均可),
      `单行代码`, 
      todo选择框
分割线, 独立一行, 后面没有内容出了空白字符, 三个或者三个以上 - 或者 *
---
--------
***
*****
- 2, 支持 h1 - h6, 引用, 侧边显示该行的类型
- 3, 代码编辑器支持全屏按钮
- 5, 支持图片上传, 可选 阿里云, 七牛云 等上传路径, 支持图片语法
        ![图片 alt](图片地址 "图片 title")
- 6, 创建图床管理, 包含本地上传图片以及可以手动设置图片地址, 参考
     图床管理软件 picGo, upPic
- 7, 超链接语法支持, [超链接名](超链接地址 "超链接title, 可不写")
- 8, 表格语法支持(靠后, 前后两个空白行, 满足格式)

| 表头 | 表头 | 表头 |
| --- | :---: | ---: |
| 内容 | 内容111 | 内容 |
- 9, 流程图语法支持, 略复杂暂时不考虑


bugs
1, 删除特殊行的时候会删除这一行内的文字
2, 行内有文字的时候 h1 - h6 等快捷行无法生效
3, 特殊行在删除的时候会删除前面的 空白行, 无法直接删除 特殊行

优化
1, 在 monaco-editor 中取消监听节点, 优化性能