# Kataw parser test case

## Input

`````js
return
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "return",
    "filename": "",
    "statements": [
        {
            "kind": 2097346,
            "expression": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

