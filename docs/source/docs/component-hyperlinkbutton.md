---
title: HyperlinkButton
---
Like hyperlink buttons

## Examples

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/hyperlinkbutton-example" scrolling="no" /></div>

```jsx
<HyperlinkButton text={'HyperlinkButton'} />
```

## States

### Disabled

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/hyperlinkbutton-state-disabled" scrolling="no" /></div>

```jsx
<HyperlinkButton text={'HyperlinkButton'} disabled />
```

### Loading

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/hyperlinkbutton-state-loading" scrolling="no" /></div>

```jsx
<HyperlinkButton text={'HyperlinkButton'} loading />
```

## Variations

### Size

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/hyperlinkbutton-variations-size" scrolling="no" /></div>

```jsx
<HyperlinkButton text={'MINI'} size={'mini'} />
<HyperlinkButton text={'SMALL'} size={'small'} />
<HyperlinkButton text={'MEDIUM'} size={'medium'} />
<HyperlinkButton text={'LARGE'} size={'large'} />
<HyperlinkButton text={'BIG'} size={'big'} />
```

## API

### Props

Name | Description | Type | Optional value | Default
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`text` | -| string | - | Empty string ('')
`disabled` | - | bool | - | `false`
`loading` | - | bool | - | `false`
`size` | - | enum | `mini`, </br>`small`, </br>`medium`, </br>`large`, </br>`big` | `medium`

### Event

Name | Description
--- | ---
`onPress` | -
