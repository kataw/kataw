# Kataw parser test case

## Input

`````js
class C<T> {
  foo() {
    TypeAssertIs<T>(9);
    TypeAssertIs<T | number>(9);
    TypeAssertIs<{A: number, B: T}>(9);
  }
}
`````

## Options

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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 9
                },
                "flags": 2097152,
                "start": 7,
                "end": 10
            },
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 97,
                                    "start": 12,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 19,
                                    "end": 20
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
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "TypeAssertIs",
                                                            "rawText": "TypeAssertIs",
                                                            "flags": 97,
                                                            "start": 22,
                                                            "end": 39
                                                        },
                                                        "operatorToken": {
                                                            "kind": 536971330,
                                                            "flags": 96,
                                                            "start": 39,
                                                            "end": 40
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 40,
                                                            "end": 41
                                                        },
                                                        "flags": 97,
                                                        "start": 22,
                                                        "end": 41
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34883,
                                                        "flags": 96,
                                                        "start": 41,
                                                        "end": 42
                                                    },
                                                    "right": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 9,
                                                            "rawText": "9",
                                                            "flags": 96,
                                                            "start": 43,
                                                            "end": 44
                                                        },
                                                        "flags": 42,
                                                        "start": 32,
                                                        "end": 45
                                                    },
                                                    "flags": 97,
                                                    "start": 22,
                                                    "end": 45
                                                },
                                                "flags": 16,
                                                "start": 22,
                                                "end": 46
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "TypeAssertIs",
                                                            "rawText": "TypeAssertIs",
                                                            "flags": 97,
                                                            "start": 46,
                                                            "end": 63
                                                        },
                                                        "operatorToken": {
                                                            "kind": 536971330,
                                                            "flags": 96,
                                                            "start": 63,
                                                            "end": 64
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 64,
                                                            "end": 65
                                                        },
                                                        "flags": 97,
                                                        "start": 46,
                                                        "end": 65
                                                    },
                                                    "operatorToken": {
                                                        "kind": 134251592,
                                                        "flags": 96,
                                                        "start": 65,
                                                        "end": 67
                                                    },
                                                    "right": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "number",
                                                            "rawText": "number",
                                                            "flags": 96,
                                                            "start": 67,
                                                            "end": 74
                                                        },
                                                        "operatorToken": {
                                                            "kind": 34883,
                                                            "flags": 96,
                                                            "start": 74,
                                                            "end": 75
                                                        },
                                                        "right": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 9,
                                                                "rawText": "9",
                                                                "flags": 96,
                                                                "start": 76,
                                                                "end": 77
                                                            },
                                                            "flags": 75,
                                                            "start": 32,
                                                            "end": 78
                                                        },
                                                        "flags": 96,
                                                        "start": 74,
                                                        "end": 78
                                                    },
                                                    "flags": 97,
                                                    "start": 46,
                                                    "end": 78
                                                },
                                                "flags": 16,
                                                "start": 46,
                                                "end": 79
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "TypeAssertIs",
                                                            "rawText": "TypeAssertIs",
                                                            "flags": 97,
                                                            "start": 79,
                                                            "end": 96
                                                        },
                                                        "operatorToken": {
                                                            "kind": 536971330,
                                                            "flags": 96,
                                                            "start": 96,
                                                            "end": 97
                                                        },
                                                        "right": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "A",
                                                                            "rawText": "A",
                                                                            "flags": 96,
                                                                            "start": 98,
                                                                            "end": 99
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "number",
                                                                            "rawText": "number",
                                                                            "flags": 96,
                                                                            "start": 100,
                                                                            "end": 107
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 98,
                                                                        "end": 107
                                                                    },
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "B",
                                                                            "rawText": "B",
                                                                            "flags": 96,
                                                                            "start": 108,
                                                                            "end": 110
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "start": 111,
                                                                            "end": 113
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 108,
                                                                        "end": 113
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 98,
                                                                "end": 113
                                                            },
                                                            "flags": 48,
                                                            "start": 97,
                                                            "end": 114
                                                        },
                                                        "flags": 97,
                                                        "start": 79,
                                                        "end": 114
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34883,
                                                        "flags": 96,
                                                        "start": 114,
                                                        "end": 115
                                                    },
                                                    "right": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 9,
                                                            "rawText": "9",
                                                            "flags": 96,
                                                            "start": 116,
                                                            "end": 117
                                                        },
                                                        "flags": 115,
                                                        "start": 32,
                                                        "end": 118
                                                    },
                                                    "flags": 97,
                                                    "start": 79,
                                                    "end": 118
                                                },
                                                "flags": 16,
                                                "start": 79,
                                                "end": 119
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 22,
                                        "end": 119
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 123
                                },
                                "flags": 0,
                                "start": 18,
                                "end": 123
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 123
                        }
                    ],
                    "flags": 32,
                    "start": 12,
                    "end": 123
                },
                "flags": 10,
                "start": 32,
                "end": 125
            },
            "flags": 16,
            "start": 0,
            "end": 125
        }
    ],
    "isModule": false,
    "source": "class C<T> {\n  foo() {\n    TypeAssertIs<T>(9);\n    TypeAssertIs<T | number>(9);\n    TypeAssertIs<{A: number, B: T}>(9);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 125
}
```

### Printed

```javascript

class C<T> {
  foo() {
    TypeAssertIs  <  T >  (9);
    TypeAssertIs  <  T |  number >  (9);
    TypeAssertIs  <  {A: number, B: T} >  (9);
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

