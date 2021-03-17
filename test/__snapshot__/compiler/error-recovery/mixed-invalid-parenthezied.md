# Kataw parser test case

## Input

`````js
(!!][1
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(!!][1",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65774,
                    "operator": "!",
                    "operand": {
                        "kind": 65774,
                        "operator": "!",
                        "operand": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 3
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "flags": 1,
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
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 98822,
                "elementList": {
                    "kind": 65605,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 6
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 6
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 4,
            "end": 6
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 5,
            "length": 0
        }
    ],
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

