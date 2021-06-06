# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: it => { var [,,...rest] = it; return rest; }
## Input

`````js
{ it => { var [,,...rest] = it; return rest; } }
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
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 4,
                                "end": 7
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "it",
                                "rawText": "it",
                                "flags": 96,
                                "start": 1,
                                "end": 4
                            },
                            "asyncKeyword": null,
                            "returnType": null,
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
                                                "start": 9,
                                                "end": 13
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 201,
                                                            "elementList": {
                                                                "kind": 202,
                                                                "elements": [
                                                                    {
                                                                        "kind": 230,
                                                                        "flags": 96,
                                                                        "start": 15,
                                                                        "end": 15
                                                                    },
                                                                    {
                                                                        "kind": 230,
                                                                        "flags": 96,
                                                                        "start": 16,
                                                                        "end": 16
                                                                    },
                                                                    {
                                                                        "kind": 281,
                                                                        "ellipsisToken": {
                                                                            "kind": 524302,
                                                                            "flags": 64,
                                                                            "start": 17,
                                                                            "end": 20
                                                                        },
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "rest",
                                                                            "rawText": "rest",
                                                                            "flags": 96,
                                                                            "start": 20,
                                                                            "end": 24
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "right": null,
                                                                        "flags": 32,
                                                                        "start": 17,
                                                                        "end": 24
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 15,
                                                                "end": 24
                                                            },
                                                            "flags": 32,
                                                            "start": 13,
                                                            "end": 25
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 134299649,
                                                            "text": "it",
                                                            "rawText": "it",
                                                            "flags": 96,
                                                            "start": 27,
                                                            "end": 30
                                                        },
                                                        "flags": 16,
                                                        "start": 13,
                                                        "end": 30
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 13,
                                                "end": 30
                                            },
                                            "flags": 16,
                                            "start": 9,
                                            "end": 31
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 80,
                                                "start": 31,
                                                "end": 38
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "rest",
                                                "rawText": "rest",
                                                "flags": 96,
                                                "start": 38,
                                                "end": 43
                                            },
                                            "flags": 16,
                                            "start": 0,
                                            "end": 31
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 9,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 46
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 46
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 46
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "{ it => { var [,,...rest] = it; return rest; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

{
  it =>  {
    var [, , ...rest] = it;
    return  rest;
  };
}
```

### Diagnostics

```javascript
✔ No errors
```

