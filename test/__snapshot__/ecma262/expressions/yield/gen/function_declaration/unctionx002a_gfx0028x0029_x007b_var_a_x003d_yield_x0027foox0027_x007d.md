# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: unction* gf() { var a = yield 'foo'; }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { unction* gf() { var a = yield 'foo'; } }}
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
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
                                    "start": 20,
                                    "end": 28
                                },
                                "operatorToken": {
                                    "kind": 201360950,
                                    "flags": 96,
                                    "transformFlags": 32,
                                    "start": 28,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "gf",
                                        "rawText": "gf",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 32
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 29,
                                    "end": 34
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 20,
                                "end": 34
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 20,
                            "end": 34
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
                                            "start": 36,
                                            "end": 40
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
                                                        "start": 40,
                                                        "end": 42
                                                    },
                                                    "type": null,
                                                    "initializer": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 50
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4224,
                                                    "start": 40,
                                                    "end": 50
                                                }
                                            ],
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 50
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 50
                                    },
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 50,
                                            "end": 56
                                        },
                                        "flags": 16,
                                        "transformFlags": 4096,
                                        "start": 50,
                                        "end": 57
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 57
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 59
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 59
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 61
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "function not_gen() { unction* gf() { var a = yield 'foo'; } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '{' is not allowed here. Did you mean ';'? - start: 34, end: 36
✖ Variable declaration not allowed at this location - start: 50, end: 56
✖ '; ' is not allowed here. Did you mean ';'? - start: 50, end: 56
✖ Declaration or statement expected - start: 61, end: 62

```

