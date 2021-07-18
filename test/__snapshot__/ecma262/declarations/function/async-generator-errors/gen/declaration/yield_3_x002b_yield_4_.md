# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/gen/declaration
> :: test: declaration
> :: case: yield 3 + yield 4;
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {yield 3 + yield 4;}

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
                "kind": 67143222,
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 29
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 33
                                    },
                                    "right": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 39
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 33,
                                        "end": 41
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 29,
                                    "end": 41
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 24,
                                "end": 41
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 24,
                            "end": 42
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 42
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 43
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "async function * gen() {yield 3 + yield 4;}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ';' expected - start: 33, end: 41

```

