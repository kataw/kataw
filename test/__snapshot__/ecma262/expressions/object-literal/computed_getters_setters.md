# Kataw parser test case

## Input

`````js
var f = {
  get ['d']() { return 'foo'; },
  set ['d'](x: number) {},
  set "stringLiteral"(x: number) { },
  get "stringLiteral"(): number { return 4; },
};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
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
                                            "flags": 97,
                                            "start": 9,
                                            "end": 15
                                        },
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "d",
                                                    "rawText": "'d'",
                                                    "flags": 4194400,
                                                    "start": 17,
                                                    "end": 20
                                                },
                                                "flags": 32,
                                                "start": 15,
                                                "end": 21
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 1057,
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
                                                                "start": 25,
                                                                "end": 32
                                                            },
                                                            "expression": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "'foo'",
                                                                "flags": 4194400,
                                                                "start": 32,
                                                                "end": 38
                                                            },
                                                            "flags": 80,
                                                            "start": 25,
                                                            "end": 39
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 25,
                                                    "end": 39
                                                },
                                                "flags": 32,
                                                "start": 23,
                                                "end": 41
                                            },
                                            "flags": 1057,
                                            "start": 21,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 41
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": {
                                            "kind": 16499,
                                            "flags": 97,
                                            "start": 42,
                                            "end": 48
                                        },
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "d",
                                                    "rawText": "'d'",
                                                    "flags": 4194400,
                                                    "start": 50,
                                                    "end": 53
                                                },
                                                "flags": 32,
                                                "start": 48,
                                                "end": 54
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
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 55,
                                                            "end": 56
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234345,
                                                                "flags": 2097216,
                                                                "start": 57,
                                                                "end": 64
                                                            },
                                                            "flags": 2097152,
                                                            "start": 57,
                                                            "end": 64
                                                        },
                                                        "right": null,
                                                        "flags": 32,
                                                        "start": 55,
                                                        "end": 64
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 545,
                                                "start": 55,
                                                "end": 65
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 67,
                                                    "end": 67
                                                },
                                                "flags": 32,
                                                "start": 65,
                                                "end": 68
                                            },
                                            "flags": 545,
                                            "start": 54,
                                            "end": 68
                                        },
                                        "flags": 32,
                                        "start": 42,
                                        "end": 68
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": {
                                            "kind": 16499,
                                            "flags": 97,
                                            "start": 69,
                                            "end": 75
                                        },
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392131,
                                                "text": "stringLiteral",
                                                "rawText": "\"stringLiteral\"",
                                                "flags": 96,
                                                "start": 75,
                                                "end": 91
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
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 92,
                                                            "end": 93
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234345,
                                                                "flags": 2097216,
                                                                "start": 94,
                                                                "end": 101
                                                            },
                                                            "flags": 2097152,
                                                            "start": 94,
                                                            "end": 101
                                                        },
                                                        "right": null,
                                                        "flags": 32,
                                                        "start": 92,
                                                        "end": 101
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 545,
                                                "start": 92,
                                                "end": 102
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 104,
                                                    "end": 104
                                                },
                                                "flags": 32,
                                                "start": 102,
                                                "end": 106
                                            },
                                            "flags": 545,
                                            "start": 91,
                                            "end": 106
                                        },
                                        "flags": 32,
                                        "start": 69,
                                        "end": 106
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": {
                                            "kind": 16498,
                                            "flags": 97,
                                            "start": 107,
                                            "end": 113
                                        },
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392131,
                                                "text": "stringLiteral",
                                                "rawText": "\"stringLiteral\"",
                                                "flags": 96,
                                                "start": 113,
                                                "end": 129
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 1057,
                                                "start": 130,
                                                "end": 131
                                            },
                                            "returnType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "start": 132,
                                                    "end": 139
                                                },
                                                "flags": 2097152,
                                                "start": 132,
                                                "end": 139
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
                                                                "start": 141,
                                                                "end": 148
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 4,
                                                                "rawText": "4",
                                                                "flags": 96,
                                                                "start": 148,
                                                                "end": 150
                                                            },
                                                            "flags": 80,
                                                            "start": 141,
                                                            "end": 151
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 141,
                                                    "end": 151
                                                },
                                                "flags": 32,
                                                "start": 139,
                                                "end": 153
                                            },
                                            "flags": 1057,
                                            "start": 129,
                                            "end": 153
                                        },
                                        "flags": 32,
                                        "start": 107,
                                        "end": 153
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "start": 9,
                                "end": 154
                            },
                            "flags": 49,
                            "start": 7,
                            "end": 156
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 156
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 156
            },
            "flags": 16,
            "start": 0,
            "end": 157
        }
    ],
    "isModule": false,
    "source": "var f = {\n  get ['d']() { return 'foo'; },\n  set ['d'](x: number) {},\n  set \"stringLiteral\"(x: number) { },\n  get \"stringLiteral\"(): number { return 4; },\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 157
}
```

### Printed

```javascript

var  f = {
  get ["'d'"]() {
    return "'foo'";
  },
  set ["'d'"]( x: number ) {},
  set "\"stringLiteral\""( x: number ) {},
  get "\"stringLiteral\""(): number {
    return 4;
  },
} ;

```

### Diagnostics

```javascript
✔ No errors
```

