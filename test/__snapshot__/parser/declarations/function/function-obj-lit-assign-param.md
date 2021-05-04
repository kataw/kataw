# Kataw parser test case

## Input

`````js
function* foo(a = {*bar() { yield b }}) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 9,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 20,
                                                "end": 23
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "start": 24,
                                                "end": 25
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 0,
                                                                    "start": 27,
                                                                    "end": 33
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "start": 33,
                                                                    "end": 35
                                                                },
                                                                "flags": 32,
                                                                "start": 27,
                                                                "end": 35
                                                            },
                                                            "flags": 16,
                                                            "start": 27,
                                                            "end": 35
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 27,
                                                    "end": 35
                                                },
                                                "flags": 32,
                                                "start": 25,
                                                "end": 37
                                            },
                                            "flags": 160,
                                            "start": 23,
                                            "end": 37
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 37
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 19,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 38
                        },
                        "flags": 34,
                        "start": 14,
                        "end": 38
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 13,
                "end": 39
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 41,
                    "end": 41
                },
                "flags": 32,
                "start": 39,
                "end": 42
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function* foo(a = {*bar() { yield b }}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ `Yield` expression cannot be used in function parameters - start: 27, end: 35

```

