# Kataw parser test case

## Input

`````js
x = `1 ${ yield } 2 ${ 3 } 4`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x = `1 ${ yield } 2 ${ 3 } 4`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 66261,
                    "spans": [
                        {
                            "kind": 66263,
                            "rawText": "1 ",
                            "text": "1 ",
                            "expression": {
                                "kind": 196712,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 15
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 3,
                            "end": 15
                        },
                        {
                            "kind": 66263,
                            "rawText": " 2 ",
                            "text": " 2 ",
                            "expression": {
                                "kind": 4261540,
                                "text": 3,
                                "rawText": "3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 24
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 15,
                            "end": 24
                        }
                    ],
                    "tail": {
                        "kind": 4260568,
                        "rawText": " 4",
                        "text": " 4",
                        "literal": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 24,
                        "end": 29
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 3,
                    "end": 29
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 29
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 29
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
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

