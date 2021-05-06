# Kataw parser test case

## Input

`````js
async function g() {   s = {"foo": await a = x} = x   }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "s",
                                    "rawText": "s",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 24
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 24,
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
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 208,
                                                            "awaitToken": {
                                                                "kind": 82032,
                                                                "flags": 0,
                                                                "start": 34,
                                                                "end": 40
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 40,
                                                                "end": 42
                                                            },
                                                            "flags": 32,
                                                            "start": 34,
                                                            "end": 42
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 64,
                                                            "start": 42,
                                                            "end": 44
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 44,
                                                            "end": 46
                                                        },
                                                        "flags": 32,
                                                        "start": 28,
                                                        "end": 46
                                                    },
                                                    "right": {
                                                        "kind": 201392131,
                                                        "text": "foo",
                                                        "rawText": "\"foo\"",
                                                        "flags": 96,
                                                        "start": 28,
                                                        "end": 33
                                                    },
                                                    "flags": 32,
                                                    "start": 28,
                                                    "end": 46
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 28,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "start": 26,
                                        "end": 47
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 47,
                                        "end": 49
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 49,
                                        "end": 51
                                    },
                                    "flags": 32,
                                    "start": 26,
                                    "end": 51
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 51
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 51
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 51
                },
                "flags": 32,
                "start": 18,
                "end": 55
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "async function g() {   s = {\"foo\": await a = x} = x   }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 42, end: 44
✖ The left-hand side must be a variable or a property access. - start: 47, end: 49

```

