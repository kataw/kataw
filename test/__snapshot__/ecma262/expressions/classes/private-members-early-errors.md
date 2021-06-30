# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false }
`````

## Input

`````js
(class { set #b(val) { this.#a = val; }})

(class { get #b() { return this.#a; }})

class C extends Base {foo() { return this.#a; }}

class C { foo() { this.#a = 1; }}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "start": 1,
                            "end": 6
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
                                        "staticKeyword": null,
                                        "asyncKeyword": null,
                                        "setKeyword": null,
                                        "getKeyword": {
                                            "kind": 16499,
                                            "flags": 64,
                                            "start": 8,
                                            "end": 12
                                        },
                                        "asteriskToken": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 67191035,
                                                "text": "#b",
                                                "rawText": "#b",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "val",
                                                        "rawText": "val",
                                                        "flags": 96,
                                                        "start": 16,
                                                        "end": 19
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 608,
                                                "start": 16,
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
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 4276321,
                                                                        "flags": 96,
                                                                        "start": 22,
                                                                        "end": 27
                                                                    },
                                                                    "expression": {
                                                                        "kind": 67191035,
                                                                        "text": "#a",
                                                                        "rawText": "#a",
                                                                        "flags": 96,
                                                                        "start": 28,
                                                                        "end": 30
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 22,
                                                                    "end": 30
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 30,
                                                                    "end": 32
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "val",
                                                                    "rawText": "val",
                                                                    "flags": 96,
                                                                    "start": 32,
                                                                    "end": 36
                                                                },
                                                                "flags": 32,
                                                                "start": 22,
                                                                "end": 36
                                                            },
                                                            "flags": 16,
                                                            "start": 22,
                                                            "end": 37
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 22,
                                                    "end": 37
                                                },
                                                "flags": 32,
                                                "start": 20,
                                                "end": 39
                                            },
                                            "flags": 512,
                                            "start": 15,
                                            "end": 39
                                        },
                                        "flags": 512,
                                        "start": 8,
                                        "end": 39
                                    }
                                ],
                                "flags": 32,
                                "start": 8,
                                "end": 39
                            },
                            "flags": 6,
                            "start": 32,
                            "end": 40
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 41
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "start": 44,
                                "end": 49
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
                                            "staticKeyword": null,
                                            "asyncKeyword": null,
                                            "setKeyword": {
                                                "kind": 16498,
                                                "flags": 64,
                                                "start": 51,
                                                "end": 55
                                            },
                                            "getKeyword": null,
                                            "asteriskToken": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 67191035,
                                                    "text": "#b",
                                                    "rawText": "#b",
                                                    "flags": 96,
                                                    "start": 55,
                                                    "end": 58
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 1024,
                                                    "start": 59,
                                                    "end": 60
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
                                                                    "start": 62,
                                                                    "end": 69
                                                                },
                                                                "expression": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 4276321,
                                                                        "flags": 96,
                                                                        "start": 69,
                                                                        "end": 74
                                                                    },
                                                                    "expression": {
                                                                        "kind": 67191035,
                                                                        "text": "#a",
                                                                        "rawText": "#a",
                                                                        "flags": 96,
                                                                        "start": 75,
                                                                        "end": 77
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 69,
                                                                    "end": 77
                                                                },
                                                                "flags": 80,
                                                                "start": 62,
                                                                "end": 78
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 62,
                                                        "end": 78
                                                    },
                                                    "flags": 32,
                                                    "start": 60,
                                                    "end": 80
                                                },
                                                "flags": 1024,
                                                "start": 58,
                                                "end": 80
                                            },
                                            "flags": 1024,
                                            "start": 51,
                                            "end": 80
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 51,
                                    "end": 80
                                },
                                "flags": 49,
                                "start": 32,
                                "end": 81
                            },
                            "flags": 32,
                            "start": 44,
                            "end": 81
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 44,
                    "end": 81
                },
                "flags": 268435489,
                "start": 0,
                "end": 82
            },
            "flags": 16,
            "start": 0,
            "end": 82
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 82,
                "end": 89
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 89,
                "end": 91
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 91,
                        "end": 99
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Base",
                        "rawText": "Base",
                        "flags": 96,
                        "start": 99,
                        "end": 104
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 99,
                    "end": 104
                },
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
                                    "flags": 96,
                                    "start": 106,
                                    "end": 109
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 110,
                                    "end": 111
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
                                                    "start": 113,
                                                    "end": 120
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 120,
                                                        "end": 125
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#a",
                                                        "rawText": "#a",
                                                        "flags": 96,
                                                        "start": 126,
                                                        "end": 128
                                                    },
                                                    "flags": 96,
                                                    "start": 120,
                                                    "end": 128
                                                },
                                                "flags": 80,
                                                "start": 113,
                                                "end": 129
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 113,
                                        "end": 129
                                    },
                                    "flags": 32,
                                    "start": 111,
                                    "end": 131
                                },
                                "flags": 0,
                                "start": 109,
                                "end": 131
                            },
                            "flags": 0,
                            "start": 106,
                            "end": 131
                        }
                    ],
                    "flags": 32,
                    "start": 106,
                    "end": 131
                },
                "flags": 91,
                "start": 32,
                "end": 132
            },
            "flags": 17,
            "start": 82,
            "end": 132
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 132,
                "end": 139
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 139,
                "end": 141
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
                                    "flags": 96,
                                    "start": 143,
                                    "end": 147
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 148,
                                    "end": 149
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
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "start": 151,
                                                            "end": 156
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#a",
                                                            "rawText": "#a",
                                                            "flags": 96,
                                                            "start": 157,
                                                            "end": 159
                                                        },
                                                        "flags": 96,
                                                        "start": 151,
                                                        "end": 159
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 159,
                                                        "end": 161
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 161,
                                                        "end": 163
                                                    },
                                                    "flags": 32,
                                                    "start": 151,
                                                    "end": 163
                                                },
                                                "flags": 16,
                                                "start": 151,
                                                "end": 164
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 151,
                                        "end": 164
                                    },
                                    "flags": 32,
                                    "start": 149,
                                    "end": 166
                                },
                                "flags": 0,
                                "start": 147,
                                "end": 166
                            },
                            "flags": 0,
                            "start": 143,
                            "end": 166
                        }
                    ],
                    "flags": 32,
                    "start": 143,
                    "end": 166
                },
                "flags": 141,
                "start": 32,
                "end": 167
            },
            "flags": 17,
            "start": 132,
            "end": 167
        }
    ],
    "isModule": false,
    "source": "(class { set #b(val) { this.#a = val; }})\n\n(class { get #b() { return this.#a; }})\n\nclass C extends Base {foo() { return this.#a; }}\n\nclass C { foo() { this.#a = 1; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 167
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 139, end: 141

```

