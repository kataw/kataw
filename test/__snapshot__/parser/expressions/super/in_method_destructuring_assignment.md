# Kataw parser test case

## Input

`````js
x = { foo(){ [a = super.foo] = c; }}
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 9
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 11
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
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 125,
                                                                    "left": {
                                                                        "kind": 81921,
                                                                        "value": "a",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 14,
                                                                        "end": 15
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4259935,
                                                                        "autofix": 0,
                                                                        "flags": 0,
                                                                        "start": 14,
                                                                        "end": 17
                                                                    },
                                                                    "right": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 225,
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 17,
                                                                            "end": 23
                                                                        },
                                                                        "expression": {
                                                                            "kind": 81921,
                                                                            "value": "foo",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 24,
                                                                            "end": 27
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 17,
                                                                        "end": 27
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 14,
                                                                    "end": 27
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 14,
                                                            "end": 27
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 12,
                                                        "end": 28
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 28,
                                                        "end": 30
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "c",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 30,
                                                        "end": 32
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 12,
                                                    "end": 32
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 12,
                                                "end": 33
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 33
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 11,
                                    "end": 35
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 9,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 5,
                        "end": 35
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 36
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 36
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "x = { foo(){ [a = super.foo] = c; }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

