# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: function* gf() { +yield 2; }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { function* gf() { +yield 2; } }}
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
                                "end": 30
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gf",
                                "rawText": "gf",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 34,
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
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 39
                                                },
                                                "operand": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 39,
                                                        "end": 44
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 46
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 39,
                                                    "end": 46
                                                },
                                                "flags": 32,
                                                "transformFlags": 16384,
                                                "start": 37,
                                                "end": 46
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 37,
                                            "end": 47
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 47
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 49
                            },
                            "returnType": null,
                            "flags": 272,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 49
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 49
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 51
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function* gf() { +yield 2; } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 51, end: 52

```

