# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}
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
                                "transformFlags": 32,
                                "start": 29,
                                "end": 30
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 34
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 35
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 42
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 42,
                                                            "end": 44
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 10,
                                                            "rawText": "10",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 46,
                                                            "end": 49
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4224,
                                                        "start": 42,
                                                        "end": 49
                                                    }
                                                ],
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 49
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 50
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 50,
                                                    "end": 56
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 50,
                                                "end": 58
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 50,
                                            "end": 59
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 59,
                                                "end": 66
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 66,
                                                "end": 68
                                            },
                                            "flags": 80,
                                            "transformFlags": 256,
                                            "start": 59,
                                            "end": 69
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 69
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 71
                            },
                            "returnType": null,
                            "flags": 272,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 71
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 71
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 73
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 73, end: 74

```

