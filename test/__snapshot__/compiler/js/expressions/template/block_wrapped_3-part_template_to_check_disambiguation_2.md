# Kataw parser test case

## Input

`````js
{`foo ${a} and ${b} and ${`w ${d} x ${e} y ${f} z`} baz`}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{`foo ${a} and ${b} and ${`w ${d} x ${e} y ${f} z`} baz`}",
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
                            "kind": 66261,
                            "spans": [
                                {
                                    "kind": 66263,
                                    "rawText": "foo ",
                                    "text": "foo ",
                                    "expression": {
                                        "kind": 196712,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 1,
                                    "end": 9
                                },
                                {
                                    "kind": 66263,
                                    "rawText": " and ",
                                    "text": " and ",
                                    "expression": {
                                        "kind": 196712,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 18
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 9,
                                    "end": 18
                                },
                                {
                                    "kind": 66263,
                                    "rawText": " and ",
                                    "text": " and ",
                                    "expression": {
                                        "kind": 66261,
                                        "spans": [
                                            {
                                                "kind": 66263,
                                                "rawText": "w ",
                                                "text": "w ",
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 32
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 26,
                                                "end": 32
                                            },
                                            {
                                                "kind": 66263,
                                                "rawText": " x ",
                                                "text": " x ",
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "e",
                                                    "rawText": "e",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 39
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 32,
                                                "end": 39
                                            },
                                            {
                                                "kind": 66263,
                                                "rawText": " y ",
                                                "text": " y ",
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 45,
                                                    "end": 46
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 39,
                                                "end": 46
                                            }
                                        ],
                                        "tail": {
                                            "kind": 4260568,
                                            "rawText": " z",
                                            "text": " z",
                                            "literal": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 46,
                                            "end": 50
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 26,
                                        "end": 50
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 18,
                                    "end": 50
                                }
                            ],
                            "tail": {
                                "kind": 4260568,
                                "rawText": " baz",
                                "text": " baz",
                                "literal": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 50,
                                "end": 56
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 56
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 56
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 56
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 57
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
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

