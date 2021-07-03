# Kataw parser test case

## Input

`````js
// @target: es6
function * foo2() {
    /*comment1*/ yield 1;
    yield /*comment2*/ 2;
    yield 3 /*comment3*/
    yield */*comment4*/ [4];
    yield /*comment5*/* [5];
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
                "flags": 65,
                "start": 0,
                "end": 24
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 24,
                "end": 26
            },
            "name": {
                "kind": 134299649,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 96,
                "start": 26,
                "end": 31
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 32,
                "end": 32
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 65,
                                    "start": 35,
                                    "end": 58
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 58,
                                    "end": 60
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 60
                            },
                            "flags": 16,
                            "start": 35,
                            "end": 61
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 65,
                                    "start": 61,
                                    "end": 71
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 71,
                                    "end": 86
                                },
                                "flags": 32,
                                "start": 61,
                                "end": 86
                            },
                            "flags": 16,
                            "start": 61,
                            "end": 87
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 65,
                                    "start": 87,
                                    "end": 97
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 96,
                                    "start": 97,
                                    "end": 99
                                },
                                "flags": 32,
                                "start": 87,
                                "end": 99
                            },
                            "flags": 16,
                            "start": 87,
                            "end": 99
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 65,
                                    "start": 99,
                                    "end": 122
                                },
                                "delegate": true,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 122,
                                    "end": 124
                                },
                                "expression": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 201392130,
                                                "text": 4,
                                                "rawText": "4",
                                                "flags": 96,
                                                "start": 138,
                                                "end": 139
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 138,
                                        "end": 139
                                    },
                                    "flags": 32,
                                    "start": 124,
                                    "end": 140
                                },
                                "flags": 32,
                                "start": 99,
                                "end": 140
                            },
                            "flags": 16,
                            "start": 99,
                            "end": 141
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 65,
                                    "start": 141,
                                    "end": 151
                                },
                                "delegate": true,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 151,
                                    "end": 165
                                },
                                "expression": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 201392130,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 96,
                                                "start": 167,
                                                "end": 168
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 167,
                                        "end": 168
                                    },
                                    "flags": 32,
                                    "start": 165,
                                    "end": 169
                                },
                                "flags": 32,
                                "start": 141,
                                "end": 169
                            },
                            "flags": 16,
                            "start": 141,
                            "end": 170
                        }
                    ],
                    "flags": 33,
                    "start": 35,
                    "end": 170
                },
                "flags": 32,
                "start": 33,
                "end": 172
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 172
        }
    ],
    "isModule": false,
    "source": "// @target: es6\nfunction * foo2() {\n    /*comment1*/ yield 1;\n    yield /*comment2*/ 2;\n    yield 3 /*comment3*/\n    yield */*comment4*/ [4];\n    yield /*comment5*/* [5];\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 172
}
```

### Printed

```javascript
// @target: es6
function * foo2() {
   /*comment1*/yield  1;
  yield/*comment2*/  2;
  yield  3;/*comment3*/
  yield */*comment4*/  [4,];
  yield/*comment5*/ *  [5,];
}

```

### Diagnostics

```javascript
✔ No errors
```

