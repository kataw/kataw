# Kataw parser test case

## Input

`````js
(...x.y)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(...x.y)",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 66224,
                    "expression": {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 4,
                            "end": 5
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 4097,
                        "start": 1,
                        "end": 5
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 196711,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 7
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 7,
                "period": {
                    "kind": 255,
                    "pos": 5,
                    "end": 6
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 7,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

