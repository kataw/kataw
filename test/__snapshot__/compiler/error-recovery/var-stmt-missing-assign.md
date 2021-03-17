# Kataw parser test case

## Input

`````js
var x = "
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var x = \"",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261583,
                            "text": "",
                            "rawText": " \"",
                            "flags": 1048576,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 10
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 10
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 10
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated string literal",
            "start": 10,
            "length": 1
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

