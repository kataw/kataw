# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: it => { var [,,...rest] = it; return rest; }
## Options

`````js
{}
`````
## Input

`````js
it => { var [,,...rest] = it; return rest; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2,
                    "end": 5
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "it",
                    "rawText": "it",
                    "flags": 96,
                    "start": 0,
                    "end": 2
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
                                    "start": 7,
                                    "end": 11
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 230,
                                                            "flags": 96,
                                                            "start": 13,
                                                            "end": 13
                                                        },
                                                        {
                                                            "kind": 230,
                                                            "flags": 96,
                                                            "start": 14,
                                                            "end": 14
                                                        },
                                                        {
                                                            "kind": 281,
                                                            "ellipsisToken": {
                                                                "kind": 524302,
                                                                "flags": 64,
                                                                "start": 15,
                                                                "end": 18
                                                            },
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "rest",
                                                                "rawText": "rest",
                                                                "flags": 96,
                                                                "start": 18,
                                                                "end": 22
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "right": null,
                                                            "flags": 32,
                                                            "start": 15,
                                                            "end": 22
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 13,
                                                    "end": 22
                                                },
                                                "flags": 32,
                                                "start": 11,
                                                "end": 23
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "it",
                                                "rawText": "it",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 28
                                            },
                                            "flags": 16,
                                            "start": 11,
                                            "end": 28
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 11,
                                    "end": 28
                                },
                                "flags": 16,
                                "start": 7,
                                "end": 29
                            },
                            {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 80,
                                    "start": 29,
                                    "end": 36
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "rest",
                                    "rawText": "rest",
                                    "flags": 96,
                                    "start": 36,
                                    "end": 41
                                },
                                "flags": 80,
                                "start": 29,
                                "end": 42
                            }
                        ],
                        "flags": 32,
                        "start": 7,
                        "end": 42
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 44
                },
                "flags": 32,
                "start": 0,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "it => { var [,,...rest] = it; return rest; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

it =>  {
  var [, , ...rest] = it;
  return  rest;
};
```

### Diagnostics

```javascript
✔ No errors
```

