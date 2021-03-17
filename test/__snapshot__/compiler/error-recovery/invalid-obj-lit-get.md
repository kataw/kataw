# Kataw parser test case

## Input

`````js
{ get 2 }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ get 2 }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "get",
                            "rawText": "get",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 5
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 5
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 7
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 6,
            "length": 0
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

