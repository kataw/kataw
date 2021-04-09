# Kataw parser test case

## Input

`````js
x={ foo: function(){ super.foo; }}
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
                                "kind": 219,
                                "left": {
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
                                        "start": 18,
                                        "end": 19
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
                                                            "start": 20,
                                                            "end": 26
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "foo",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 27,
                                                            "end": 30
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 20,
                                                        "end": 30
                                                    },
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 20,
                                                    "end": 31
                                                }
                                            ],
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 20,
                                            "end": 31
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 33
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 8,
                                    "end": 33
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 3,
                                    "end": 7
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 3,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 3,
                        "end": 33
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 34
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "x={ foo: function(){ super.foo; }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 26,
            "end": 27
        }
    ],
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

