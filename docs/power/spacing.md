---
title: 间距 spacing
head:
  - - meta
    - name: description
      content: 间距
    - name: keywords
      content: spacing
---

# 间距

用户信息中仅需要拥有一个`type_id`值对应权限表的`type_id`值即可。

```json{3}
{
  "user_id":1,
  "username": "xxxx",
  "type_id": 1,
  "account":"admin",
  "pswd":"admin123"
  //............
}
```

用户信息配置的数据库设计可以参考以下结构

```sql{6}
CREATE TABLE `user_info`  (
  `user_id` int(8) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `account` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '登录账号',
  `pswd` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '登录密码',
  `type_id` int(4) NOT NULL COMMENT '用户权限',
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `uq_account`(`account`) USING BTREE,
  INDEX `fk_type`(`type_id`) USING BTREE,
  CONSTRAINT `fk_type_id` FOREIGN KEY (`type_id`) REFERENCES `power` (`type_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

```
