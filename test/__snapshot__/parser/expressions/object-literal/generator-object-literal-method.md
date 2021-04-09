# Kataw parser test case

## Input

`````js
var x = { *test () { yield *v } };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": "test",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 229,
                                                            "delegate": true,
                                                            "asteriskToken": {
                                                                "kind": 67143222,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 26,
                                                                "end": 28
                                                            },
                                                            "expression": {
                                                                "kind": 81921,
                                                                "value": "v",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 28,
                                                                "end": 29
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 20,
                                                            "end": 29
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 20,
                                                        "end": 29
                                                    }
                                                ],
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 20,
                                                "end": 29
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 18,
                                            "end": 31
                                        },
                                        "autofix": 0,
                                        "flags": 1280,
                                        "start": 15,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 9,
                                "end": 31
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 33
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 33
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "var x = { *test () { yield *v } };",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

