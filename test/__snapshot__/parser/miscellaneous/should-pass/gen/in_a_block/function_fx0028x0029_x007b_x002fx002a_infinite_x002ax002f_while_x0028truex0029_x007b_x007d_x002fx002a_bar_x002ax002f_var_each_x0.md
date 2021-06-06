# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: function f() { /* infinite */ while (true) { } /* bar */ var each; }
## Input

`````js
{ function f() { /* infinite */ while (true) { } /* bar */ var each; } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 1,
                            "end": 10
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 12,
                            "end": 14
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 154,
                                        "whileKeyword": {
                                            "kind": 37757028,
                                            "flags": 80,
                                            "start": 16,
                                            "end": 37
                                        },
                                        "expression": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "start": 39,
                                            "end": 43
                                        },
                                        "statement": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 46,
                                                "end": 46
                                            },
                                            "flags": 16,
                                            "start": 44,
                                            "end": 48
                                        },
                                        "flags": 16,
                                        "start": 16,
                                        "end": 48
                                    },
                                    {
                                        "kind": 155,
                                        "declareKeyword": null,
                                        "varKeyword": {
                                            "kind": 37757002,
                                            "flags": 80,
                                            "start": 48,
                                            "end": 62
                                        },
                                        "declarationList": {
                                            "kind": 156,
                                            "declarations": [
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "each",
                                                        "rawText": "each",
                                                        "flags": 96,
                                                        "start": 62,
                                                        "end": 67
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 62,
                                                    "end": 67
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 62,
                                            "end": 67
                                        },
                                        "flags": 16,
                                        "start": 48,
                                        "end": 68
                                    }
                                ],
                                "flags": 32,
                                "start": 16,
                                "end": 68
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 70
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 70
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 70
            },
            "flags": 16,
            "start": 0,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "{ function f() { /* infinite */ while (true) { } /* bar */ var each; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript

{
  function f() {
    while (true) {} /* bar */
    var each;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

