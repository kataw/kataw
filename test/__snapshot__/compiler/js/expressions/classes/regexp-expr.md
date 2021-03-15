# Kataw parser test case

## Input

`````js
typeof class{}
/foo/
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "typeof class{}\n/foo/",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 65774,
                        "operator": "typeof",
                        "operand": {
                            "kind": 66099,
                            "name": null,
                            "typeParameters": null,
                            "classHeritage": null,
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 13,
                                "end": 14
                            },
                            "decorators": null,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 6,
                            "end": 14
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 14
                    },
                    "operator": "/",
                    "right": {
                        "kind": 196712,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 19
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 19
                },
                "operator": "/",
                "right": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 20
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 19,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

