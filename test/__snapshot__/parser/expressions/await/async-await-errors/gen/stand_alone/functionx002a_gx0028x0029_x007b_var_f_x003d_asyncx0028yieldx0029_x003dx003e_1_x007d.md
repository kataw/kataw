# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/gen/stand_alone
> :: test: stand alone
> :: case: function* g() { var f = async(yield) => 1; }
## Input

`````js
function* g() { var f = async(yield) => 1; }
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
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
                                "start": 15,
                                "end": 19
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
                                            "start": 19,
                                            "end": 21
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 36,
                                                "end": 39
                                            },
                                            "typeParameters": null,
                                            "parameters": [
                                                {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "start": 30,
                                                        "end": 35
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 32,
                                                    "start": 30,
                                                    "end": 35
                                                }
                                            ],
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 23,
                                                "end": 29
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 41
                                            },
                                            "flags": 288,
                                            "start": 23,
                                            "end": 41
                                        },
                                        "flags": 16,
                                        "start": 19,
                                        "end": 41
                                    }
                                ],
                                "flags": 16,
                                "start": 19,
                                "end": 41
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 42
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 42
                },
                "flags": 32,
                "start": 13,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "function* g() { var f = async(yield) => 1; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

function * g() {
  var f = async ( yield) =>  1;
}
```

### Diagnostics

```javascript
✔ No errors
```

