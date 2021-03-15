# Kataw parser test case

## Input

`````js
const x = 0

// @Filename: file2.ts
x++;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x = 0\n\n// @Filename: file2.ts\nx++;",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 11
                    }
                ],
                "flags": 32776,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 11
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 11
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65714,
                "operator": "++",
                "operand": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 37
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 39
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 11,
            "end": 40
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
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

