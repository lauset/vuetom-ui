---
title: 样式与动画 styles
head:
  - - meta
    - name: description
      content: 提供一些便利布局的样式与炫酷的动画效果
  - - meta
    - name: keywords
      content: style animation
---

# 样式与动画

提供一些便利布局的样式与炫酷的动画效果

```json{2}
{
  "type_id": 1,
  "name": "超级权限",
  "menu_id":"1,2,3,4,5,6,7,8,9,10"
}
```

权限配置的数据库设计可以参考以下结构

包含字段 `type_id`,`name`,`menu_id`

```sql{2-4}
CREATE TABLE `power`  (
  `type_id` int(4) NOT NULL AUTO_INCREMENT COMMENT '权限id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '权限简称',
  `menu_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '显示菜单列表id',
  PRIMARY KEY (`type_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;
```
