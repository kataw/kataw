# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
x! *= 1
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x! *= 1",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 74398,
                    "expression": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 1,
                    "end": 2
                },
                "operator": "*=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

