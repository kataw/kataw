# Kataw parser test case

## Input

`````js
foo: while(z) if (x) continue foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "foo: while(z) if (x) continue foo",
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
                "kind": 2097399,
                "expression": {
                    "kind": 196712,
                    "text": "z",
                    "rawText": "z",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "statement": {
                    "kind": 2097257,
                    "expression": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 19
                    },
                    "consequent": {
                        "kind": 2097212,
                        "label": {
                            "kind": 196712,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 33
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 33
                    },
                    "alternate": null,
                    "isWebCompat": true,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 33
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 33
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 33
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
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

