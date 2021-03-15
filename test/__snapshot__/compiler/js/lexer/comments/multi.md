# Kataw parser test case

## Input

`````js
/* comment */
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "/* comment */",
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
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

