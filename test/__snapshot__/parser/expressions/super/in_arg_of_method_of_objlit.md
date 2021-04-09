# Kataw parser test case

## Input

`````js
x={ dsda(){ return async function(a=super.foo){} }}
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
                                    "value": "dsda",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 3,
                                    "end": 8
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 9,
                                    "end": 10
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
                                                    "kind": 177,
                                                    "asyncToken": {
                                                        "kind": 82031,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 18,
                                                        "end": 24
                                                    },
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
                                                                    "value": "a",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 34,
                                                                    "end": 35
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 225,
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 36,
                                                                        "end": 41
                                                                    },
                                                                    "expression": {
                                                                        "kind": 81921,
                                                                        "value": "foo",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 42,
                                                                        "end": 45
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 36,
                                                                    "end": 45
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 34,
                                                                "end": 45
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 34,
                                                        "end": 46
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "statements": [],
                                                            "multiline": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 47,
                                                            "end": 47
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 46,
                                                        "end": 48
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "autofix": 0,
                                                    "flags": 1280,
                                                    "start": 18,
                                                    "end": 48
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 0,
                                                "end": 11
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 11,
                                        "end": 48
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 50
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 8,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 3,
                        "end": 50
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 51
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 51
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "x={ dsda(){ return async function(a=super.foo){} }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 41,
            "end": 42
        }
    ],
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

