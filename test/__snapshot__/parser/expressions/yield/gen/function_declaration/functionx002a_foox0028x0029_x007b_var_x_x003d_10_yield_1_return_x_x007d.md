# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: function* foo() { var x = 10; yield 1; return x; }
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
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 20,
                                "end": 29
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 29,
                                "end": 30
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 30,
                                "end": 34
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 34,
                                "end": 36
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
                                                            "start": 42,
                                                            "end": 44
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 10,
                                                            "rawText": "10",
                                                            "flags": 96,
                                                            "start": 46,
                                                            "end": 49
                                                        },
                                                        "flags": 16,
                                                        "start": 42,
                                                        "end": 49
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 42,
                                                "end": 49
                                            },
                                            "flags": 16,
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
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "flags": 32,
                                                "start": 50,
                                                "end": 58
                                            },
                                            "flags": 16,
                                            "start": 50,
                                            "end": 59
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 80,
                                                "start": 59,
                                                "end": 66
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 66,
                                                "end": 68
                                            },
                                            "flags": 80,
                                            "start": 59,
                                            "end": 69
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 38,
                                    "end": 69
                                },
                                "flags": 32,
                                "start": 36,
                                "end": 71
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 272,
                            "start": 20,
                            "end": 71
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 71
                },
                "flags": 32,
                "start": 18,
                "end": 73
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}",
    "fileName": "__root__",
    "flags": 0,
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

