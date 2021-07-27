# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}
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
                                            "kind": 160,
                                            "switchKeyword": {
                                                "kind": 37757024,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 44
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 47
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [
                                                    {
                                                        "kind": 175,
                                                        "caseKeyword": {
                                                            "kind": 4194382,
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 50,
                                                            "end": 55
                                                        },
                                                        "expression": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 55,
                                                                "end": 61
                                                            },
                                                            "delegate": true,
                                                            "asteriskToken": {
                                                                "kind": 201360950,
                                                                "flags": 64,
                                                                "transformFlags": 32,
                                                                "start": 61,
                                                                "end": 62
                                                            },
                                                            "expression": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "'foo'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 62,
                                                                "end": 68
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 4096,
                                                            "start": 55,
                                                            "end": 68
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 68,
                                                            "end": 69
                                                        },
                                                        "statements": [
                                                            {
                                                                "kind": 150,
                                                                "breakKeyword": {
                                                                    "kind": 37757005,
                                                                    "flags": 80,
                                                                    "transformFlags": 0,
                                                                    "start": 69,
                                                                    "end": 75
                                                                },
                                                                "label": null,
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 69,
                                                                "end": 76
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 50,
                                                        "end": 76
                                                    }
                                                ],
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 76
                                            },
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 78
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 78
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
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
    "source": "function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}",
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

