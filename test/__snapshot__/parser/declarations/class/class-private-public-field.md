# Kataw parser test case

## Input

`````js
class C { #a; a = this.#a; }

class C { a = this.#a; #a; }

class C { #a; [this.#a]; }

class C { [this.#a]; #a; }

class C { #a; f(){ this.#a } }

class C { f(){ this.#a } #a; }
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
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
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#a",
                                "flags": 96,
                                "start": 9,
                                "end": 12
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 12
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 129,
                                "member": {
                                    "kind": 135,
                                    "flags": 96,
                                    "start": 17,
                                    "end": 22
                                },
                                "expression": {
                                    "kind": 67174651,
                                    "text": "#a",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 25
                                },
                                "flags": 536870944,
                                "start": 17,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 25
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 25,
                            "end": 26
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 26
                },
                "flags": 32,
                "start": 7,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 28,
                "end": 35
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 35,
                "end": 37
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 39,
                                "end": 41
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 129,
                                "member": {
                                    "kind": 135,
                                    "flags": 96,
                                    "start": 43,
                                    "end": 48
                                },
                                "expression": {
                                    "kind": 67174651,
                                    "text": "#a",
                                    "flags": 96,
                                    "start": 49,
                                    "end": 51
                                },
                                "flags": 536870944,
                                "start": 43,
                                "end": 51
                            },
                            "flags": 32,
                            "start": 39,
                            "end": 51
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 51,
                            "end": 52
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#a",
                                "flags": 96,
                                "start": 52,
                                "end": 55
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 52,
                            "end": 55
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 55,
                            "end": 56
                        }
                    ],
                    "flags": 32,
                    "start": 39,
                    "end": 56
                },
                "flags": 32,
                "start": 37,
                "end": 58
            },
            "flags": 16,
            "start": 28,
            "end": 58
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 58,
                "end": 65
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 65,
                "end": 67
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#a",
                                "flags": 96,
                                "start": 69,
                                "end": 72
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 69,
                            "end": 72
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 72,
                            "end": 73
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 194,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 135,
                                        "flags": 96,
                                        "start": 75,
                                        "end": 79
                                    },
                                    "expression": {
                                        "kind": 67174651,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 80,
                                        "end": 82
                                    },
                                    "flags": 536870944,
                                    "start": 75,
                                    "end": 82
                                },
                                "flags": 32,
                                "start": 73,
                                "end": 83
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 73,
                            "end": 83
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 83,
                            "end": 84
                        }
                    ],
                    "flags": 32,
                    "start": 69,
                    "end": 84
                },
                "flags": 32,
                "start": 67,
                "end": 86
            },
            "flags": 16,
            "start": 58,
            "end": 86
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 86,
                "end": 93
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 93,
                "end": 95
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 194,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 135,
                                        "flags": 96,
                                        "start": 99,
                                        "end": 103
                                    },
                                    "expression": {
                                        "kind": 67174651,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 104,
                                        "end": 106
                                    },
                                    "flags": 536870944,
                                    "start": 99,
                                    "end": 106
                                },
                                "flags": 32,
                                "start": 97,
                                "end": 107
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 97,
                            "end": 107
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 107,
                            "end": 108
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#a",
                                "flags": 96,
                                "start": 108,
                                "end": 111
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 108,
                            "end": 111
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 111,
                            "end": 112
                        }
                    ],
                    "flags": 32,
                    "start": 97,
                    "end": 112
                },
                "flags": 32,
                "start": 95,
                "end": 114
            },
            "flags": 16,
            "start": 86,
            "end": 114
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 114,
                "end": 121
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 121,
                "end": 123
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#a",
                                "flags": 96,
                                "start": 125,
                                "end": 128
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 125,
                            "end": 128
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 128,
                            "end": 129
                        },
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
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 129,
                                    "end": 131
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 132,
                                    "end": 133
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
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 135,
                                                        "flags": 96,
                                                        "start": 134,
                                                        "end": 139
                                                    },
                                                    "expression": {
                                                        "kind": 67174651,
                                                        "text": "#a",
                                                        "flags": 96,
                                                        "start": 140,
                                                        "end": 142
                                                    },
                                                    "flags": 536870944,
                                                    "start": 134,
                                                    "end": 142
                                                },
                                                "flags": 16,
                                                "start": 134,
                                                "end": 142
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 134,
                                        "end": 142
                                    },
                                    "flags": 32,
                                    "start": 133,
                                    "end": 144
                                },
                                "flags": 0,
                                "start": 131,
                                "end": 144
                            },
                            "flags": 0,
                            "start": 129,
                            "end": 144
                        }
                    ],
                    "flags": 32,
                    "start": 125,
                    "end": 144
                },
                "flags": 32,
                "start": 123,
                "end": 146
            },
            "flags": 16,
            "start": 114,
            "end": 146
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 146,
                "end": 153
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 153,
                "end": 155
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
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
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 157,
                                    "end": 159
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 160,
                                    "end": 161
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
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 135,
                                                        "flags": 96,
                                                        "start": 162,
                                                        "end": 167
                                                    },
                                                    "expression": {
                                                        "kind": 67174651,
                                                        "text": "#a",
                                                        "flags": 96,
                                                        "start": 168,
                                                        "end": 170
                                                    },
                                                    "flags": 536870944,
                                                    "start": 162,
                                                    "end": 170
                                                },
                                                "flags": 16,
                                                "start": 162,
                                                "end": 170
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 162,
                                        "end": 170
                                    },
                                    "flags": 32,
                                    "start": 161,
                                    "end": 172
                                },
                                "flags": 0,
                                "start": 159,
                                "end": 172
                            },
                            "flags": 0,
                            "start": 157,
                            "end": 172
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#a",
                                "flags": 96,
                                "start": 172,
                                "end": 175
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 172,
                            "end": 175
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 175,
                            "end": 176
                        }
                    ],
                    "flags": 32,
                    "start": 157,
                    "end": 176
                },
                "flags": 32,
                "start": 155,
                "end": 178
            },
            "flags": 16,
            "start": 146,
            "end": 178
        }
    ],
    "isModule": false,
    "source": "class C { #a; a = this.#a; }\n\nclass C { a = this.#a; #a; }\n\nclass C { #a; [this.#a]; }\n\nclass C { [this.#a]; #a; }\n\nclass C { #a; f(){ this.#a } }\n\nclass C { f(){ this.#a } #a; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 178
}
```

### Printed

```javascript

class C {
  #a;

  a = this.#a;

}
class C {
  a = this.#a;

  #a;

}
class C {
  #a;

  [this.#a];

}
class C {
  [this.#a];

  #a;

}
class C {
  #a;

  f() {
    this.#a;
  }
}
class C {
  f() {
    this.#a;
  }
  #a;

}
```

### Diagnostics

```javascript
✔ No errors
```

