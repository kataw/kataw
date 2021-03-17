# Kataw parser test case

## Input

`````js
`${
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "`${",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66261,
                "spans": [
                    {
                        "kind": 66263,
                        "rawText": "",
                        "text": "",
                        "expression": {
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
                        "transformFlags": 1,
                        "start": 0,
                        "end": 3
                    }
                ],
                "tail": {
                    "kind": 4260568,
                    "rawText": "",
                    "text": "",
                    "literal": false,
                    "flags": 1048577,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 3,
                    "end": 3
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
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
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated template literal",
            "start": 3,
            "length": 1
        }
    ],
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

