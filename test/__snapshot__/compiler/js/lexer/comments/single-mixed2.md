# Kataw parser test case

## Input

`````js
//\unope \u{nope} \xno
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "//\\unope \\u{nope} \\xno",
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
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

