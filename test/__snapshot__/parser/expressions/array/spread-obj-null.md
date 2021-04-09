# Kataw parser test case

## Input

`````js
(function(obj) {
}.apply(null, [{...null}]));
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 177,
                            "asyncToken": null,
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "obj",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 10,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 10,
                                "end": 14
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": true,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 16,
                                    "end": 16
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 18
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 18
                        },
                        "expression": {
                            "kind": 81921,
                            "value": "apply",
                            "autofix": 0,
                            "flags": 768,
                            "start": 19,
                            "end": 24
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 24
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 269,
                                "value": null,
                                "autofix": 0,
                                "flags": 768,
                                "start": 25,
                                "end": 29
                            },
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 224,
                                                        "argument": {
                                                            "kind": 269,
                                                            "value": null,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 36,
                                                            "end": 40
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 33,
                                                        "end": 40
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 33,
                                                "end": 40
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 32,
                                            "end": 41
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 32,
                                    "end": 41
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 30,
                                "end": 42
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 25,
                        "end": 42
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 43
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 44
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "(function(obj) {\n}.apply(null, [{...null}]));",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

