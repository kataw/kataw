# Kataw parser test case

## Input

`````js
var C = class { static async *gen() {
    void yield;
}};
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
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "start": 7,
                                "end": 13
                            },
                            "name": null,
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
                                            "staticKeyword": {
                                                "kind": 8388716,
                                                "flags": 64,
                                                "start": 15,
                                                "end": 22
                                            },
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 28,
                                                "end": 30
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "gen",
                                                    "rawText": "gen",
                                                    "flags": 96,
                                                    "start": 30,
                                                    "end": 33
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 384,
                                                    "start": 34,
                                                    "end": 35
                                                },
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [
                                                            {
                                                                "kind": 120,
                                                                "expression": {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 138477615,
                                                                        "flags": 97,
                                                                        "start": 37,
                                                                        "end": 46
                                                                    },
                                                                    "operand": {
                                                                        "kind": 229,
                                                                        "yieldKeyword": {
                                                                            "kind": 8454253,
                                                                            "flags": 64,
                                                                            "start": 46,
                                                                            "end": 52
                                                                        },
                                                                        "delegate": false,
                                                                        "asteriskToken": null,
                                                                        "expression": null,
                                                                        "flags": 32,
                                                                        "start": 46,
                                                                        "end": 52
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 37,
                                                                    "end": 52
                                                                },
                                                                "flags": 16,
                                                                "start": 37,
                                                                "end": 53
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "start": 37,
                                                        "end": 53
                                                    },
                                                    "flags": 32,
                                                    "start": 35,
                                                    "end": 55
                                                },
                                                "flags": 384,
                                                "start": 33,
                                                "end": 55
                                            },
                                            "flags": 384,
                                            "start": 22,
                                            "end": 55
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 15,
                                    "end": 55
                                },
                                "flags": 13,
                                "start": 32,
                                "end": 56
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 56
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 56
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 56
            },
            "flags": 16,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "var C = class { static async *gen() {\n    void yield;\n}};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

var C = class  {
  async static static gen() {
    void  yield;
  }
};
```

### Diagnostics

```javascript
✔ No errors
```

