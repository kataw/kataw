# Kataw parser test case

## Input

`````js
1++
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "1++",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65714,
                "operator": "++",
                "operand": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 3
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
    "end": 3
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

