# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: r
> :: test: var
> :: case: (function call(foo=await){})
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { (function call(foo=await){}) });
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 34
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 177,
                                                        "asyncKeyword": null,
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 64,
                                                            "start": 40,
                                                            "end": 48
                                                        },
                                                        "asteriskToken": null,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "call",
                                                            "rawText": "call",
                                                            "flags": 96,
                                                            "start": 48,
                                                            "end": 53
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameterList": {
                                                            "kind": 214,
                                                            "formalParameters": [
                                                                {
                                                                    "kind": 281,
                                                                    "ellipsisToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 96,
                                                                        "start": 54,
                                                                        "end": 57
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 58,
                                                                        "end": 63
                                                                    },
                                                                    "flags": 34,
                                                                    "start": 54,
                                                                    "end": 63
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 34,
                                                            "start": 53,
                                                            "end": 64
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "flags": 32,
                                                                "start": 65,
                                                                "end": 65
                                                            },
                                                            "flags": 32,
                                                            "start": 64,
                                                            "end": 66
                                                        },
                                                        "returnType": null,
                                                        "flags": 32,
                                                        "start": 40,
                                                        "end": 66
                                                    },
                                                    "flags": 32,
                                                    "start": 38,
                                                    "end": 67
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 67
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 67
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 69
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 69
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 70
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 70
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 70
            },
            "flags": 16,
            "start": 10,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { (function call(foo=await){}) });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

 var await; var f = (async function () {
(function call() {
});
}); 
```

### Diagnostics

```javascript
✔ No errors
```

