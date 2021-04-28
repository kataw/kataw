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
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
                    "start": 1,
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
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 3,
                                    "end": 7
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 8,
                                    "end": 9
                                },
                                "type": null,
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
                                                    "flags": 0,
                                                    "start": 10,
                                                    "end": 17
                                                },
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 0,
                                                        "start": 20,
                                                        "end": 23
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncToken": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 177,
                                                        "asyncKeyword": null,
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 0,
                                                            "start": 23,
                                                            "end": 32
                                                        },
                                                        "generatorToken": null,
                                                        "name": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 256,
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
                                                                                    "flags": 0,
                                                                                    "start": 36,
                                                                                    "end": 42
                                                                                },
                                                                                "flags": 768,
                                                                                "start": 36,
                                                                                "end": 42
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 768,
                                                                                "start": 43,
                                                                                "end": 46
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 36,
                                                                            "end": 46
                                                                        },
                                                                        "flags": 128,
                                                                        "start": 36,
                                                                        "end": 47
                                                                    }
                                                                ],
                                                                "multiline": false,
                                                                "flags": 256,
                                                                "start": 36,
                                                                "end": 47
                                                            },
                                                            "flags": 256,
                                                            "start": 34,
                                                            "end": 49
                                                        },
                                                        "typeParameters": null,
                                                        "returnType": null,
                                                        "flags": 256,
                                                        "start": 23,
                                                        "end": 49
                                                    },
                                                    "flags": 256,
                                                    "start": 17,
                                                    "end": 49
                                                },
                                                "flags": 128,
                                                "start": 0,
                                                "end": 10
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 10,
                                        "end": 49
                                    },
                                    "flags": 256,
                                    "start": 9,
                                    "end": 51
                                },
                                "flags": 256,
                                "start": 7,
                                "end": 51
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 3,
                        "end": 51
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 52
                },
                "flags": 256,
                "start": 0,
                "end": 52
            },
            "flags": 128,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "x={ foo(){ return () => function() { super.foo; } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 42, end: 43

```

