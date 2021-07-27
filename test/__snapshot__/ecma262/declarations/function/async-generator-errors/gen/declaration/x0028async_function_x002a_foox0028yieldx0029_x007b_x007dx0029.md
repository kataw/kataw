# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/gen/declaration
> :: test: declaration
> :: case: (async function * foo(yield) { })
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {(async function * foo(yield) { })}

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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 21
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
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 30
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 39
                                    },
                                    "asteriskToken": {
                                        "kind": 201360950,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 39,
                                        "end": 41
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 45
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 51
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 46,
                                        "end": 51
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 54,
                                            "end": 54
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 52,
                                        "end": 56
                                    },
                                    "returnType": null,
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 56
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 57
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 24,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 57
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 58
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "async function * gen() {(async function * foo(yield) { })}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 46, end: 51

```

