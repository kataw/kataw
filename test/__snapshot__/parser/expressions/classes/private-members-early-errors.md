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

### Hybrid CST

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
                            "flags": 0,
                            "start": 1,
                            "end": 6
                        },
                        "name": null,
                        "typeParameters": null,
                        "classHeritage": null,
                        "members": {
                            "kind": 277,
                            "elements": [
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 82031,
                                        "flags": 512,
                                        "start": 8,
                                        "end": 12
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67109115,
                                            "text": "#b",
                                            "flags": 768,
                                            "start": 12,
                                            "end": 15
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [
                                                {
                                                    "kind": 215,
                                                    "ellipsisToken": null,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "val",
                                                        "rawText": "val",
                                                        "flags": 768,
                                                        "start": 16,
                                                        "end": 19
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 256,
                                                    "start": 16,
                                                    "end": 19
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 4352,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "type": null,
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
                                                                    "kind": 135,
                                                                    "flags": 768,
                                                                    "start": 22,
                                                                    "end": 27
                                                                },
                                                                "expression": {
                                                                    "kind": 67109115,
                                                                    "text": "#a",
                                                                    "flags": 768,
                                                                    "start": 28,
                                                                    "end": 30
                                                                },
                                                                "flags": 256,
                                                                "start": 22,
                                                                "end": 30
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 512,
                                                                "start": 30,
                                                                "end": 32
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "val",
                                                                "rawText": "val",
                                                                "flags": 768,
                                                                "start": 32,
                                                                "end": 36
                                                            },
                                                            "flags": 256,
                                                            "start": 22,
                                                            "end": 36
                                                        },
                                                        "flags": 128,
                                                        "start": 22,
                                                        "end": 37
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 22,
                                                "end": 37
                                            },
                                            "flags": 256,
                                            "start": 20,
                                            "end": 39
                                        },
                                        "flags": 4096,
                                        "start": 15,
                                        "end": 39
                                    },
                                    "flags": 4096,
                                    "start": 8,
                                    "end": 39
                                }
                            ],
                            "flags": 256,
                            "start": 8,
                            "end": 40
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 40
                    },
                    "flags": 256,
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
                                "flags": 0,
                                "start": 44,
                                "end": 49
                            },
                            "name": null,
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [
                                    {
                                        "kind": 278,
                                        "declareToken": null,
                                        "decorators": null,
                                        "staticKeyword": null,
                                        "asyncKeyword": null,
                                        "setKeyword": {
                                            "kind": 82031,
                                            "flags": 512,
                                            "start": 51,
                                            "end": 55
                                        },
                                        "getKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 67109115,
                                                "text": "#b",
                                                "flags": 768,
                                                "start": 55,
                                                "end": 58
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 8192,
                                                "start": 59,
                                                "end": 60
                                            },
                                            "type": null,
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
                                                                "flags": 0,
                                                                "start": 62,
                                                                "end": 69
                                                            },
                                                            "expression": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 135,
                                                                    "flags": 768,
                                                                    "start": 69,
                                                                    "end": 74
                                                                },
                                                                "expression": {
                                                                    "kind": 67109115,
                                                                    "text": "#a",
                                                                    "flags": 768,
                                                                    "start": 75,
                                                                    "end": 77
                                                                },
                                                                "flags": 256,
                                                                "start": 69,
                                                                "end": 77
                                                            },
                                                            "flags": 128,
                                                            "start": 0,
                                                            "end": 62
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 62,
                                                    "end": 78
                                                },
                                                "flags": 256,
                                                "start": 60,
                                                "end": 80
                                            },
                                            "flags": 8192,
                                            "start": 58,
                                            "end": 80
                                        },
                                        "flags": 8192,
                                        "start": 51,
                                        "end": 80
                                    }
                                ],
                                "flags": 256,
                                "start": 51,
                                "end": 81
                            },
                            "flags": 256,
                            "start": 44,
                            "end": 81
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 44,
                    "end": 81
                },
                "flags": 256,
                "start": 0,
                "end": 82
            },
            "flags": 128,
            "start": 0,
            "end": 82
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 82,
                "end": 89
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 89,
                "end": 91
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 91,
                    "end": 99
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Base",
                    "rawText": "Base",
                    "flags": 768,
                    "start": 99,
                    "end": 104
                },
                "typeParameter": null,
                "flags": 128,
                "start": 99,
                "end": 104
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 106,
                                "end": 109
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 110,
                                "end": 111
                            },
                            "type": null,
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
                                                "flags": 0,
                                                "start": 113,
                                                "end": 120
                                            },
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 135,
                                                    "flags": 768,
                                                    "start": 120,
                                                    "end": 125
                                                },
                                                "expression": {
                                                    "kind": 67109115,
                                                    "text": "#a",
                                                    "flags": 768,
                                                    "start": 126,
                                                    "end": 128
                                                },
                                                "flags": 256,
                                                "start": 120,
                                                "end": 128
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 113
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 113,
                                    "end": 129
                                },
                                "flags": 256,
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
                "flags": 256,
                "start": 106,
                "end": 132
            },
            "flags": 128,
            "start": 82,
            "end": 132
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 132,
                "end": 139
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 139,
                "end": 141
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 143,
                                "end": 147
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 148,
                                "end": 149
                            },
                            "type": null,
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
                                                        "kind": 135,
                                                        "flags": 768,
                                                        "start": 151,
                                                        "end": 156
                                                    },
                                                    "expression": {
                                                        "kind": 67109115,
                                                        "text": "#a",
                                                        "flags": 768,
                                                        "start": 157,
                                                        "end": 159
                                                    },
                                                    "flags": 256,
                                                    "start": 151,
                                                    "end": 159
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 512,
                                                    "start": 159,
                                                    "end": 161
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 161,
                                                    "end": 163
                                                },
                                                "flags": 256,
                                                "start": 151,
                                                "end": 163
                                            },
                                            "flags": 128,
                                            "start": 151,
                                            "end": 164
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 151,
                                    "end": 164
                                },
                                "flags": 256,
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
                "flags": 256,
                "start": 143,
                "end": 167
            },
            "flags": 128,
            "start": 132,
            "end": 167
        }
    ],
    "isModule": false,
    "text": "(class { set #b(val) { this.#a = val; }})\n\n(class { get #b() { return this.#a; }})\n\nclass C extends Base {foo() { return this.#a; }}\n\nclass C { foo() { this.#a = 1; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 167
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

