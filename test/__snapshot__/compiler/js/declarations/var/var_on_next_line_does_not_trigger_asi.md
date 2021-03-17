# Kataw parser test case

## Input

`````js
for (var
foo in x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for (var\nfoo in x);",
    "filename": "",
    "statements": [
        {
            "kind": 2099286,
            "initializer": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 8,
                            "end": 12
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 8,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 12
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 17
            },
            "statement": {
                "kind": 6291526,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 19
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
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

