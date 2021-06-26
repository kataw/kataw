# Kataw parser test case

## Input

`````js
function x() {
    ('foo' in {});
    ('foo' in { foo: null });
    (0 in {});
    (0 in { "0": null });
}

// arrays on RHS
function y() {
    ('foo' in []);
    (0 in []);
    ('length' in []);
}

// primitive classes on RHS
function z() {
    ('foo' in new String('bar'));
    ('foo' in new Number(123));
}
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 10
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
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "'foo'",
                                        "flags": 4194400,
                                        "start": 20,
                                        "end": 25
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "start": 25,
                                        "end": 28
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 30,
                                            "end": 30
                                        },
                                        "flags": 48,
                                        "start": 28,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 33
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "'foo'",
                                        "flags": 4194400,
                                        "start": 39,
                                        "end": 44
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "start": 44,
                                        "end": 47
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
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 49,
                                                        "end": 53
                                                    },
                                                    "right": {
                                                        "kind": 138477575,
                                                        "flags": 96,
                                                        "start": 54,
                                                        "end": 59
                                                    },
                                                    "flags": 32,
                                                    "start": 49,
                                                    "end": 59
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 49,
                                            "end": 59
                                        },
                                        "flags": 48,
                                        "start": 47,
                                        "end": 61
                                    },
                                    "flags": 32,
                                    "start": 39,
                                    "end": 61
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 62
                            },
                            "flags": 16,
                            "start": 33,
                            "end": 63
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 69,
                                        "end": 70
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "start": 70,
                                        "end": 73
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 75,
                                            "end": 75
                                        },
                                        "flags": 48,
                                        "start": 73,
                                        "end": 76
                                    },
                                    "flags": 32,
                                    "start": 69,
                                    "end": 76
                                },
                                "flags": 32,
                                "start": 63,
                                "end": 77
                            },
                            "flags": 16,
                            "start": 63,
                            "end": 78
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 84,
                                        "end": 85
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "start": 85,
                                        "end": 88
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
                                                        "kind": 201392131,
                                                        "text": "0",
                                                        "rawText": "\"0\"",
                                                        "flags": 96,
                                                        "start": 90,
                                                        "end": 94
                                                    },
                                                    "right": {
                                                        "kind": 138477575,
                                                        "flags": 96,
                                                        "start": 95,
                                                        "end": 100
                                                    },
                                                    "flags": 32,
                                                    "start": 90,
                                                    "end": 100
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 90,
                                            "end": 100
                                        },
                                        "flags": 48,
                                        "start": 88,
                                        "end": 102
                                    },
                                    "flags": 32,
                                    "start": 84,
                                    "end": 102
                                },
                                "flags": 32,
                                "start": 78,
                                "end": 103
                            },
                            "flags": 16,
                            "start": 78,
                            "end": 104
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 104
                },
                "flags": 32,
                "start": 12,
                "end": 106
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 106
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 106,
                "end": 133
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 133,
                "end": 135
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 135,
                "end": 135
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
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "'foo'",
                                        "flags": 4194400,
                                        "start": 145,
                                        "end": 150
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "start": 150,
                                        "end": 153
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 155,
                                            "end": 155
                                        },
                                        "flags": 32,
                                        "start": 153,
                                        "end": 156
                                    },
                                    "flags": 32,
                                    "start": 145,
                                    "end": 156
                                },
                                "flags": 32,
                                "start": 139,
                                "end": 157
                            },
                            "flags": 16,
                            "start": 139,
                            "end": 158
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 164,
                                        "end": 165
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "start": 165,
                                        "end": 168
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 170,
                                            "end": 170
                                        },
                                        "flags": 32,
                                        "start": 168,
                                        "end": 171
                                    },
                                    "flags": 32,
                                    "start": 164,
                                    "end": 171
                                },
                                "flags": 32,
                                "start": 158,
                                "end": 172
                            },
                            "flags": 16,
                            "start": 158,
                            "end": 173
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "length",
                                        "rawText": "'length'",
                                        "flags": 4194400,
                                        "start": 179,
                                        "end": 187
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "start": 187,
                                        "end": 190
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 192,
                                            "end": 192
                                        },
                                        "flags": 32,
                                        "start": 190,
                                        "end": 193
                                    },
                                    "flags": 32,
                                    "start": 179,
                                    "end": 193
                                },
                                "flags": 32,
                                "start": 173,
                                "end": 194
                            },
                            "flags": 16,
                            "start": 173,
                            "end": 195
                        }
                    ],
                    "flags": 33,
                    "start": 139,
                    "end": 195
                },
                "flags": 32,
                "start": 137,
                "end": 197
            },
            "returnType": null,
            "flags": 16,
            "start": 106,
            "end": 197
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 197,
                "end": 235
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "start": 235,
                "end": 237
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 237,
                "end": 237
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
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "'foo'",
                                        "flags": 4194400,
                                        "start": 247,
                                        "end": 252
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "start": 252,
                                        "end": 255
                                    },
                                    "right": {
                                        "kind": 210,
                                        "newKeyword": {
                                            "kind": 138477661,
                                            "flags": 96,
                                            "start": 255,
                                            "end": 259
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "String",
                                            "rawText": "String",
                                            "flags": 96,
                                            "start": 259,
                                            "end": 266
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 201392131,
                                                    "text": "bar",
                                                    "rawText": "'bar'",
                                                    "flags": 4194400,
                                                    "start": 267,
                                                    "end": 272
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 267,
                                            "end": 272
                                        },
                                        "flags": 96,
                                        "start": 255,
                                        "end": 273
                                    },
                                    "flags": 32,
                                    "start": 247,
                                    "end": 273
                                },
                                "flags": 32,
                                "start": 241,
                                "end": 274
                            },
                            "flags": 16,
                            "start": 241,
                            "end": 275
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "'foo'",
                                        "flags": 4194400,
                                        "start": 281,
                                        "end": 286
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "start": 286,
                                        "end": 289
                                    },
                                    "right": {
                                        "kind": 210,
                                        "newKeyword": {
                                            "kind": 138477661,
                                            "flags": 96,
                                            "start": 289,
                                            "end": 293
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "Number",
                                            "rawText": "Number",
                                            "flags": 96,
                                            "start": 293,
                                            "end": 300
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 201392130,
                                                    "text": 123,
                                                    "rawText": "123",
                                                    "flags": 96,
                                                    "start": 301,
                                                    "end": 304
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 301,
                                            "end": 304
                                        },
                                        "flags": 96,
                                        "start": 289,
                                        "end": 305
                                    },
                                    "flags": 32,
                                    "start": 281,
                                    "end": 305
                                },
                                "flags": 32,
                                "start": 275,
                                "end": 306
                            },
                            "flags": 16,
                            "start": 275,
                            "end": 307
                        }
                    ],
                    "flags": 33,
                    "start": 241,
                    "end": 307
                },
                "flags": 32,
                "start": 239,
                "end": 309
            },
            "returnType": null,
            "flags": 16,
            "start": 197,
            "end": 309
        }
    ],
    "isModule": false,
    "source": "function x() {\n    ('foo' in {});\n    ('foo' in { foo: null });\n    (0 in {});\n    (0 in { \"0\": null });\n}\n\n// arrays on RHS\nfunction y() {\n    ('foo' in []);\n    (0 in []);\n    ('length' in []);\n}\n\n// primitive classes on RHS\nfunction z() {\n    ('foo' in new String('bar'));\n    ('foo' in new Number(123));\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 309
}
```

### Printed

```javascript

function x() {
  ("'foo'" in {});
  ("'foo'" in { foo: null });
  (0 in {});
  (0 in { "\"0\"": null });
}
// arrays on RHS
function y() {
  ("'foo'" in []);
  (0 in []);
  ("'length'" in []);
}
// primitive classes on RHS
function z() {
  ("'foo'" in new  String("'bar'"));
  ("'foo'" in new  Number(123));
}
```

### Diagnostics

```javascript
✔ No errors
```

