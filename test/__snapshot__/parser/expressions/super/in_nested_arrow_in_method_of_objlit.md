# Kataw parser test case

## Input

`````js
x={ foo(){ return () => function() { super.foo; } }}
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
                    "end": 2
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
                                    "start": 3,
                                    "end": 7
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 8,
                                    "end": 9
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "expression": {
                                                    "kind": 271,
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncToken": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 177,
                                                        "asyncToken": null,
                                                        "generatorToken": null,
                                                        "name": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 33,
                                                            "end": 34
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "statements": [
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 225,
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 36,
                                                                                "end": 42
                                                                            },
                                                                            "expression": {
                                                                                "kind": 81921,
                                                                                "value": "foo",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 43,
                                                                                "end": 46
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 36,
                                                                            "end": 46
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 128,
                                                                        "start": 36,
                                                                        "end": 47
                                                                    }
                                                                ],
                                                                "multiline": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 36,
                                                                "end": 47
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 34,
                                                            "end": 49
                                                        },
                                                        "typeParameters": null,
                                                        "returnType": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 23,
                                                        "end": 49
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 17,
                                                    "end": 49
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 0,
                                                "end": 10
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 10,
                                        "end": 49
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 9,
                                    "end": 51
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 51
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 3,
                        "end": 51
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 52
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 52
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "x={ foo(){ return () => function() { super.foo; } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 42,
            "end": 43
        }
    ],
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

