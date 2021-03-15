# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
#! this comment ends with a Paragraph Separator (U+2029)@{x2029}@{
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "#! this comment ends with a Paragraph Separator (U+2029)@{x2029}@{\n}",
    "filename": "",
    "statements": [],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

