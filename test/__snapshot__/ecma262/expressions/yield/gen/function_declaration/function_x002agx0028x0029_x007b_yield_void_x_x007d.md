# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: function *g() { yield void x }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { function *g() { yield void x } }}
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
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 29
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 31
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 32
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 33
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
                                                    "start": 36,
                                                    "end": 42
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 138477615,
                                                        "flags": 96,
                                                        "transformFlags": 8192,
                                                        "start": 42,
                                                        "end": 47
                                                    },
                                                    "operand": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 47,
                                                        "end": 49
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 16384,
                                                    "start": 42,
                                                    "end": 49
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 36,
                                                "end": 49
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 36,
                                            "end": 49
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 49
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 51
                            },
                            "returnType": null,
                            "flags": 272,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 51
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 51
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 53
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function *g() { yield void x } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 53, end: 54

```

