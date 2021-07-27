# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/gen/declaration
> :: test: declaration
> :: case: async function * foo(yield) { }
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {async function * foo(yield) { }}

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
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 29
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 38
                            },
                            "asteriskToken": {
                                "kind": 201360950,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 38,
                                "end": 40
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 44
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
                                        "start": 45,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 50
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 53
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 55
                            },
                            "returnType": null,
                            "flags": 400,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 55
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 56
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "async function * gen() {async function * foo(yield) { }}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 45, end: 50

```

