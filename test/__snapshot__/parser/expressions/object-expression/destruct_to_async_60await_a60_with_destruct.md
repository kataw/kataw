# Kataw parser test case

## Input

`````js
async function g() {   s = {"foo": await a = x} = x   }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "g",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
            },
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
                                    "kind": 81921,
                                    "value": "s",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 24
                                },
                                "operatorToken": {
                                    "kind": 268501004,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 208,
                                                            "expression": {
                                                                "kind": 81921,
                                                                "value": "a",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 40,
                                                                "end": 42
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 34,
                                                            "end": 42
                                                        },
                                                        "operatorToken": {
                                                            "kind": 81921,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 28,
                                                            "end": 44
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "value": "x",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 44,
                                                            "end": 46
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 28,
                                                        "end": 46
                                                    },
                                                    "right": {
                                                        "kind": 67174403,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 28,
                                                        "end": 33
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 28,
                                                    "end": 46
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 28,
                                            "end": 46
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 26,
                                        "end": 47
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 47,
                                        "end": 49
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 49,
                                        "end": 51
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 26,
                                    "end": 51
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 51
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 51
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 51
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 55
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "text": "async function g() {   s = {\"foo\": await a = x} = x   }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 42,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 47,
            "end": 49
        }
    ],
    "start": 0,
    "end": 55
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

