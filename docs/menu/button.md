--- 
title: 按钮 Button
head:
  - - meta
    - name: description
      content: Button 按钮
  - - meta
    - name: keywords
      content: button
---
# 按钮 Button


## 基础用法

<ClientOnly>
  <ButtonBasic />
</ClientOnly>

```js code
<vt-row>
  <vt-button shadow>Default</vt-button>
  <vt-button type="primary" plain>Primary</vt-button>
  <vt-button type="success" round>Success</vt-button>
  <vt-button type="info" text>Info</vt-button>
  <vt-button type="warning" disabled>Warning</vt-button>
  <vt-button type="danger" plain disabled>Danger</vt-button>
</vt-row>
```

:::demo
button/btn-basic
:::

## 带图标用法

<ClientOnly>
  <ButtonIcon />
</ClientOnly>

```js code
<vt-row>
  <vt-button type="primary" icon="vt-icon-edit"></vt-button>
  <vt-button type="danger" icon="vt-icon-delete"></vt-button>
  <vt-button type="primary">
    download <i class="vuetom-icon vt-icon-download"></i>
  </vt-button>
</vt-row>

<vt-row>
  <vt-button type="default" icon="vt-icon-mysql" circle></vt-button>
  <vt-button type="warning" icon="vt-icon-delete" circle></vt-button>
</vt-row>

<vt-row>
  <vt-icon name="heart"></vt-icon>
  <vt-icon name="heart-fill"></vt-icon>
</vt-row>

<h3>加载中</h3>

<p>设置 loading 属性，接受一个 Boolean，当设置为 true 时即为加载中。</p>

<vt-row>
  <vt-button type="primary" :loading="true">Loading</vt-button>
</vt-row>
```

## 按钮属性

| Attribute   | Description                            | Type    | Accepted Values                                    | Default |
| ----------- | -------------------------------------- | ------- | -------------------------------------------------- | ------- |
| size        | button size                            | string  | medium / small / mini                              | —       |
| type        | button type                            | string  | primary / success / warning / danger / info / text | —       |
| plain       | determine whether it's a plain button  | boolean | —                                                  | false   |
| round       | determine whether it's a round button  | boolean | —                                                  | false   |
| circle      | determine whether it's a circle button | boolean | —                                                  | false   |
| loading     | determine whether it's loading         | boolean | —                                                  | false   |
| disabled    | disable the button                     | boolean | —                                                  | false   |
| icon        | icon class name                        | string  | —                                                  | —       |
| autofocus   | same as native button's `autofocus`    | boolean | —                                                  | false   |
| native-type | same as native button's `type`         | string  | button / submit / reset                            | button  |

## 按钮组属性

| Attribute | Description                                      | Type   | Accepted Values       | Default |
| --------- | ------------------------------------------------ | ------ | --------------------- | ------- |
| size      | control the size of buttons in this button-group | string | medium / small / mini | —       |
