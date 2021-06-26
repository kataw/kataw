# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: function spreadOpt3(r, ...[]){ return spreadTarget(...r); }
## Options

`````js
{}
`````
## Input

`````js
function spreadOpt3(r, ...[]){ return spreadTarget(...r); }
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "spreadOpt3",
                "rawText": "spreadOpt3",
                "flags": 96,
                "start": 8,
                "end": 19
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "r",
                        "rawText": "r",
                        "flags": 96,
                        "start": 20,
                        "end": 21
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 22,
                            "end": 26
                        },
                        "left": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 27,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 26,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 22,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 20,
                "end": 28
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
                                "start": 30,
                                "end": 37
                            },
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "spreadTarget",
                                    "rawText": "spreadTarget",
                                    "flags": 96,
                                    "start": 37,
                                    "end": 50
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 51,
                                                "end": 54
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "r",
                                                "rawText": "r",
                                                "flags": 96,
                                                "start": 54,
                                                "end": 55
                                            },
                                            "flags": 1073741856,
                                            "start": 51,
                                            "end": 55
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 51,
                                    "end": 55
                                },
                                "flags": 268435488,
                                "start": 37,
                                "end": 56
                            },
                            "flags": 80,
                            "start": 30,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "start": 30,
                    "end": 57
                },
                "flags": 32,
                "start": 29,
                "end": 59
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "function spreadOpt3(r, ...[]){ return spreadTarget(...r); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

function spreadOpt3() {
  return  spreadTarget(...r);
}
```

### Diagnostics

```javascript
✔ No errors
```

