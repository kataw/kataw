# Kataw parser test case

## Input

`````js
class x { constructor(){ return () => () => super[bar]; }}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 22,
                                    "end": 23
                                },
                                "returnType": null,
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
                                                    "start": 24,
                                                    "end": 31
                                                },
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 34,
                                                        "end": 37
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 271,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 40,
                                                            "end": 43
                                                        },
                                                        "typeParameters": null,
                                                        "parameters": [],
                                                        "asyncKeyword": null,
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 536871042,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 96,
                                                                    "start": 43,
                                                                    "end": 49
                                                                },
                                                                "flags": 96,
                                                                "start": 43,
                                                                "end": 49
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "bar",
                                                                "rawText": "bar",
                                                                "flags": 96,
                                                                "start": 50,
                                                                "end": 53
                                                            },
                                                            "flags": 32,
                                                            "start": 43,
                                                            "end": 54
                                                        },
                                                        "flags": 32,
                                                        "start": 37,
                                                        "end": 54
                                                    },
                                                    "flags": 32,
                                                    "start": 31,
                                                    "end": 54
                                                },
                                                "flags": 80,
                                                "start": 24,
                                                "end": 55
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 24,
                                        "end": 55
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 57
                                },
                                "flags": 2048,
                                "start": 21,
                                "end": 57
                            },
                            "flags": 2048,
                            "start": 9,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 57
                },
                "flags": 7,
                "start": 32,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "class x { constructor(){ return () => () => super[bar]; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

class x {
  constructor() {
    return  () =>  () =>  ;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

