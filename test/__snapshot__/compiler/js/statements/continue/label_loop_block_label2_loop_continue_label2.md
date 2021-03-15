# Kataw parser test case

## Input

`````js
foo: do { bar: do continue bar;while(z) } while(z)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "foo: do { bar: do continue bar;while(z) } while(z)",
    "filename": "",
    "statements": [
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "statement": {
                "kind": 2097218,
                "expression": {
                    "kind": 196712,
                    "text": "z",
                    "rawText": "z",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 49
                },
                "statement": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [
                            {
                                "kind": 2097292,
                                "label": {
                                    "kind": 196712,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 13
                                },
                                "statement": {
                                    "kind": 2097218,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 38
                                    },
                                    "statement": {
                                        "kind": 2097212,
                                        "label": {
                                            "kind": 196712,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 30
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 31
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 39
                                },
                                "isWebCompat": true,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 39
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 39
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 41
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 50
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 50
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
    "end": 50
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

