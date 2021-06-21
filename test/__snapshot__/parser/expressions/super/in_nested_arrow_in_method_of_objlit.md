# Kataw parser test case

## Input

`````js
x={ foo(){ return () => function() { super.foo; } }}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 7
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "start": 10,
                                                        "end": 17
                                                    },
                                                    "expression": {
                                                        "kind": 271,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 20,
                                                            "end": 23
                                                        },
                                                        "typeParameters": null,
                                                        "parameters": [],
                                                        "asyncKeyword": null,
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 177,
                                                            "asyncKeyword": null,
                                                            "functionKeyword": {
                                                                "kind": 37822554,
                                                                "flags": 64,
                                                                "start": 23,
                                                                "end": 32
                                                            },
                                                            "asteriskToken": null,
                                                            "name": null,
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 32,
                                                                "end": 34
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [
                                                                        {
                                                                            "kind": 120,
                                                                            "expression": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 225,
                                                                                    "superKeyword": {
                                                                                        "kind": 4259935,
                                                                                        "flags": 96,
                                                                                        "start": 36,
                                                                                        "end": 42
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 36,
                                                                                    "end": 42
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "foo",
                                                                                    "rawText": "foo",
                                                                                    "flags": 96,
                                                                                    "start": 43,
                                                                                    "end": 46
                                                                                },
                                                                                "flags": 536870944,
                                                                                "start": 36,
                                                                                "end": 46
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 36,
                                                                            "end": 47
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "start": 36,
                                                                    "end": 47
                                                                },
                                                                "flags": 32,
                                                                "start": 34,
                                                                "end": 49
                                                            },
                                                            "returnType": null,
                                                            "flags": 32,
                                                            "start": 23,
                                                            "end": 49
                                                        },
                                                        "flags": 32,
                                                        "start": 17,
                                                        "end": 49
                                                    },
                                                    "flags": 80,
                                                    "start": 10,
                                                    "end": 49
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 10,
                                            "end": 49
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 51
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 51
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 51
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3,
                        "end": 51
                    },
                    "flags": 48,
                    "start": 2,
                    "end": 52
                },
                "flags": 32,
                "start": 0,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "x={ foo(){ return () => function() { super.foo; } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 36, end: 43

```

