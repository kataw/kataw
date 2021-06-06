# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: function spreadOpt3(r, ...[]){ return spreadTarget(...r); }
## Input

`````js
{ function spreadOpt3(r, ...[]){ return spreadTarget(...r); } }
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
                            "text": "spreadOpt3",
                            "rawText": "spreadOpt3",
                            "flags": 96,
                            "start": 10,
                            "end": 21
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [
                                {
                                    "kind": 134299649,
                                    "text": "r",
                                    "rawText": "r",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 23
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 24,
                                        "end": 28
                                    },
                                    "left": {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 202,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 29,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 34,
                                    "start": 24,
                                    "end": 30
                                }
                            ],
                            "trailingComma": false,
                            "flags": 98,
                            "start": 21,
                            "end": 31
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 161,
                                        "returnKeyword": {
                                            "kind": 37757022,
                                            "flags": 80,
                                            "start": 32,
                                            "end": 39
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "spreadTarget",
                                                "rawText": "spreadTarget",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 52
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 223,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 53,
                                                            "end": 56
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "r",
                                                            "rawText": "r",
                                                            "flags": 96,
                                                            "start": 56,
                                                            "end": 57
                                                        },
                                                        "flags": 32,
                                                        "start": 53,
                                                        "end": 57
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 53,
                                                "end": 57
                                            },
                                            "flags": 268435488,
                                            "start": 39,
                                            "end": 58
                                        },
                                        "flags": 16,
                                        "start": 0,
                                        "end": 32
                                    }
                                ],
                                "flags": 32,
                                "start": 32,
                                "end": 59
                            },
                            "flags": 32,
                            "start": 31,
                            "end": 61
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 61
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 61
            },
            "flags": 16,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "{ function spreadOpt3(r, ...[]){ return spreadTarget(...r); } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

{
  function spreadOpt3(r, ...[]) {
    return  spreadTarget(...r);
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

