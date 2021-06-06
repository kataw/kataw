# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: function f() { 1 + {get get(){}, set set(a){}, get1:4, set1:get-set, } }
## Input

`````js
{ function f() { 1 + {get get(){}, set set(a){}, get1:4, set1:get-set, } } }
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
                                        "kind": 120,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 18
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 64,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "right": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 257,
                                                            "asyncKeyword": null,
                                                            "generatorToken": null,
                                                            "getKeyword": {
                                                                "kind": 16498,
                                                                "flags": 64,
                                                                "start": 22,
                                                                "end": 25
                                                            },
                                                            "setKeyword": null,
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "get",
                                                                    "rawText": "get",
                                                                    "flags": 96,
                                                                    "start": 25,
                                                                    "end": 29
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 1056,
                                                                    "start": 30,
                                                                    "end": 31
                                                                },
                                                                "returnType": null,
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 32,
                                                                        "start": 32,
                                                                        "end": 32
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 31,
                                                                    "end": 33
                                                                },
                                                                "flags": 1056,
                                                                "start": 29,
                                                                "end": 33
                                                            },
                                                            "flags": 32,
                                                            "start": 22,
                                                            "end": 33
                                                        },
                                                        {
                                                            "kind": 257,
                                                            "asyncKeyword": null,
                                                            "generatorToken": null,
                                                            "getKeyword": null,
                                                            "setKeyword": {
                                                                "kind": 16499,
                                                                "flags": 64,
                                                                "start": 34,
                                                                "end": 38
                                                            },
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "set",
                                                                    "rawText": "set",
                                                                    "flags": 96,
                                                                    "start": 38,
                                                                    "end": 42
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 43,
                                                                            "end": 44
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 608,
                                                                    "start": 43,
                                                                    "end": 45
                                                                },
                                                                "returnType": null,
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 32,
                                                                        "start": 46,
                                                                        "end": 46
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 45,
                                                                    "end": 47
                                                                },
                                                                "flags": 544,
                                                                "start": 42,
                                                                "end": 47
                                                            },
                                                            "flags": 32,
                                                            "start": 34,
                                                            "end": 47
                                                        },
                                                        {
                                                            "kind": 219,
                                                            "generatorToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "get1",
                                                                "rawText": "get1",
                                                                "flags": 96,
                                                                "start": 48,
                                                                "end": 53
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 4,
                                                                "rawText": "4",
                                                                "flags": 96,
                                                                "start": 54,
                                                                "end": 55
                                                            },
                                                            "flags": 32,
                                                            "start": 48,
                                                            "end": 55
                                                        },
                                                        {
                                                            "kind": 219,
                                                            "generatorToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "set1",
                                                                "rawText": "set1",
                                                                "flags": 96,
                                                                "start": 56,
                                                                "end": 61
                                                            },
                                                            "right": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "get",
                                                                    "rawText": "get",
                                                                    "flags": 96,
                                                                    "start": 62,
                                                                    "end": 65
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 100915,
                                                                    "flags": 64,
                                                                    "start": 65,
                                                                    "end": 66
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "set",
                                                                    "rawText": "set",
                                                                    "flags": 96,
                                                                    "start": 66,
                                                                    "end": 69
                                                                },
                                                                "flags": 32,
                                                                "start": 56,
                                                                "end": 69
                                                            },
                                                            "flags": 32,
                                                            "start": 56,
                                                            "end": 69
                                                        }
                                                    ],
                                                    "trailingComma": true,
                                                    "flags": 16,
                                                    "start": 22,
                                                    "end": 70
                                                },
                                                "flags": 48,
                                                "start": 20,
                                                "end": 72
                                            },
                                            "flags": 32,
                                            "start": 16,
                                            "end": 72
                                        },
                                        "flags": 16,
                                        "start": 16,
                                        "end": 72
                                    }
                                ],
                                "flags": 32,
                                "start": 16,
                                "end": 72
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 74
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 74
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 74
            },
            "flags": 16,
            "start": 0,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "{ function f() { 1 + {get get(){}, set set(a){}, get1:4, set1:get-set, } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript

{
  function f() {
    1 + { get get() {}, set set(a) {}, get1: 4, set1: get - set };
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

