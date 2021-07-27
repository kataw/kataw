# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: unction* gf() { var a = yield 'foo'; }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { unction* gf() { var a = yield 'foo'; } }}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 15,
                "end": 15
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 36
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
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "unction",
                                                    "rawText": "unction",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 47
                                                },
                                                "operatorToken": {
                                                    "kind": 201360950,
                                                    "flags": 96,
                                                    "transformFlags": 32,
                                                    "start": 47,
                                                    "end": 48
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "gf",
                                                        "rawText": "gf",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 48,
                                                        "end": 51
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 52,
                                                        "end": 52
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1,
                                                    "start": 48,
                                                    "end": 53
                                                },
                                                "flags": 96,
                                                "transformFlags": 5120,
                                                "start": 39,
                                                "end": 53
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 39,
                                            "end": 53
                                        },
                                        {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [
                                                    {
                                                        "kind": 155,
                                                        "declareKeyword": null,
                                                        "varKeyword": {
                                                            "kind": 37757002,
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 55,
                                                            "end": 59
                                                        },
                                                        "declarationList": {
                                                            "kind": 156,
                                                            "declarations": [
                                                                {
                                                                    "kind": 157,
                                                                    "binding": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 59,
                                                                        "end": 61
                                                                    },
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 134299649,
                                                                        "text": "yield",
                                                                        "rawText": "yield",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 63,
                                                                        "end": 69
                                                                    },
                                                                    "flags": 16,
                                                                    "transformFlags": 4224,
                                                                    "start": 59,
                                                                    "end": 69
                                                                }
                                                            ],
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 59,
                                                            "end": 69
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 55,
                                                        "end": 69
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 201392131,
                                                            "text": "foo",
                                                            "rawText": "'foo'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 69,
                                                            "end": 75
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 69,
                                                        "end": 76
                                                    }
                                                ],
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 55,
                                                "end": 76
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 78
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 78
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 80
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 80
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 80
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 81
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { unction* gf() { var a = yield 'foo'; } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '{' is not allowed here. Did you mean ';'? - start: 53, end: 55
✖ Variable declaration not allowed at this location - start: 69, end: 75
✖ '; ' is not allowed here. Did you mean ';'? - start: 69, end: 75

```

