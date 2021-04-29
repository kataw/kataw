# Kataw parser test case

## Input

`````js
async function f(){   async function g(x = + await x) { "use strict"; }  }
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
                "text": "f",
                "rawText": "f",
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
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 19,
                                "end": 27
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 27,
                                "end": 36
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 36,
                                "end": 38
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 39,
                                            "end": 40
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 34098,
                                                "flags": 64,
                                                "start": 42,
                                                "end": 44
                                            },
                                            "expression": {
                                                "kind": 208,
                                                "awaitToken": {
                                                    "kind": 82032,
                                                    "flags": 0,
                                                    "start": 44,
                                                    "end": 50
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 50,
                                                    "end": 52
                                                },
                                                "flags": 32,
                                                "start": 44,
                                                "end": 52
                                            },
                                            "flags": 32,
                                            "start": 42,
                                            "end": 52
                                        },
                                        "flags": 34,
                                        "start": 39,
                                        "end": 52
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 38,
                                "end": 53
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [
                                        {
                                            "kind": 201392131,
                                            "text": "use strict",
                                            "rawText": "use strict",
                                            "flags": 96,
                                            "start": 55,
                                            "end": 68
                                        }
                                    ],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 55,
                                    "end": 69
                                },
                                "flags": 32,
                                "start": 53,
                                "end": 71
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 144,
                            "start": 19,
                            "end": 71
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 71
                },
                "flags": 32,
                "start": 18,
                "end": 74
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 74
        }
    ],
    "isModule": false,
    "text": "async function f(){   async function g(x = + await x) { \"use strict\"; }  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 68, end: 69

```

