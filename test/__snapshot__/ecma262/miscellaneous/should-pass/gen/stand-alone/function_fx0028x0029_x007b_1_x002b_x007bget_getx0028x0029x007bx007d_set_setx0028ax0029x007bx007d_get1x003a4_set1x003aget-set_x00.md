# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: function f() { 1 + {get get(){}, set set(a){}, get1:4, set1:get-set, } }
## Options

`````js
{}
`````
## Input

`````js
function f() { 1 + {get get(){}, set set(a){}, get1:4, set1:get-set, } }
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
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
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 16
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 351,
                                                "asyncKeyword": null,
                                                "asteriskToken": null,
                                                "getKeyword": {
                                                    "kind": 16498,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 23
                                                },
                                                "setKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "get",
                                                        "rawText": "get",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 23,
                                                        "end": 27
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 1056,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 29
                                                    },
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 30
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 29,
                                                        "end": 31
                                                    },
                                                    "flags": 1056,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 31
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 31
                                            },
                                            {
                                                "kind": 351,
                                                "asyncKeyword": null,
                                                "asteriskToken": null,
                                                "getKeyword": null,
                                                "setKeyword": {
                                                    "kind": 16499,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 36
                                                },
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "set",
                                                        "rawText": "set",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 40
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 41,
                                                                "end": 42
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 608,
                                                        "transformFlags": 0,
                                                        "start": 41,
                                                        "end": 43
                                                    },
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 44,
                                                            "end": 44
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 45
                                                    },
                                                    "flags": 544,
                                                    "transformFlags": 0,
                                                    "start": 40,
                                                    "end": 45
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 45
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "get1",
                                                    "rawText": "get1",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 46,
                                                    "end": 51
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 4,
                                                    "rawText": "4",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 52,
                                                    "end": 53
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 46,
                                                "end": 53
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "set1",
                                                    "rawText": "set1",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 54,
                                                    "end": 59
                                                },
                                                "right": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "get",
                                                        "rawText": "get",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 60,
                                                        "end": 63
                                                    },
                                                    "operatorToken": {
                                                        "kind": 134318643,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 63,
                                                        "end": 64
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "set",
                                                        "rawText": "set",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 64,
                                                        "end": 67
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 1024,
                                                    "start": 54,
                                                    "end": 67
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 54,
                                                "end": 67
                                            }
                                        ],
                                        "trailingComma": true,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 68
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 18,
                                    "end": 70
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 14,
                                "end": 70
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 70
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 70
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 72
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "function f() { 1 + {get get(){}, set set(a){}, get1:4, set1:get-set, } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript

function f() {
  1 + { get get() {}, set set(a) {}, get1: 4, set1: get - set };
}
```

### Diagnostics

```javascript
✔ No errors
```

