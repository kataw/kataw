# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}
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
                                "kind": 201360950,
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
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 38,
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
                                                "start": 38,
                                                "end": 46
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 38,
                                            "end": 47
                                        },
                                        {
                                            "kind": 164,
                                            "ifKeyword": {
                                                "kind": 37757019,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 50
                                            },
                                            "expression": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 52,
                                                "end": 56
                                            },
                                            "consequent": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 59,
                                                                    "end": 65
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 3,
                                                                    "rawText": "3",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 65,
                                                                    "end": 67
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 59,
                                                                "end": 67
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 59,
                                                            "end": 67
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 59,
                                                    "end": 67
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 57,
                                                "end": 69
                                            },
                                            "elseKeyword": null,
                                            "alternate": null,
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 47,
                                            "end": 69
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 69,
                                            "end": 70
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 70,
                                                    "end": 76
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 4,
                                                    "rawText": "4",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 76,
                                                    "end": 78
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 70,
                                                "end": 78
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 70,
                                            "end": 78
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 78
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 80
                            },
                            "returnType": null,
                            "flags": 272,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 80
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 80
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 82
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 82
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 82, end: 83

```

