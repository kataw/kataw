# Kataw parser test case

## Input

`````js
class Foo {
  #tag() {
    return this;
  }

  #tag2 = this.#tag;

  constructor() {
    const receiver = this.#tag`tagged template`;
    console.assert(receiver === this);

    const receiver2 = this.#tag2`tagged template`;
    console.assert(receiver2 === this);
  }
}
new Foo();
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 5,
                "end": 9
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
                                    "kind": 67174651,
                                    "text": "#tag",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
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
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 1,
                                                    "start": 22,
                                                    "end": 33
                                                },
                                                "expression": {
                                                    "kind": 135,
                                                    "flags": 33,
                                                    "start": 96,
                                                    "end": 38
                                                },
                                                "flags": 16,
                                                "start": 1,
                                                "end": 22
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 22,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 43
                                },
                                "flags": 0,
                                "start": 18,
                                "end": 43
                            },
                            "flags": 0,
                            "start": 11,
                            "end": 43
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#tag2",
                                "flags": 96,
                                "start": 43,
                                "end": 52
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 129,
                                "member": {
                                    "kind": 135,
                                    "flags": 54,
                                    "start": 96,
                                    "end": 59
                                },
                                "expression": {
                                    "kind": 67174651,
                                    "text": "#tag",
                                    "flags": 96,
                                    "start": 60,
                                    "end": 64
                                },
                                "flags": 536870944,
                                "start": 54,
                                "end": 64
                            },
                            "flags": 32,
                            "start": 43,
                            "end": 64
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 64,
                            "end": 65
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 65,
                                    "end": 80
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 81,
                                    "end": 82
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 37757004,
                                                    "flags": 1,
                                                    "start": 84,
                                                    "end": 94
                                                },
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "receiver",
                                                                "rawText": "receiver",
                                                                "flags": 96,
                                                                "start": 94,
                                                                "end": 103
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 226,
                                                                "member": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 135,
                                                                        "flags": 105,
                                                                        "start": 96,
                                                                        "end": 110
                                                                    },
                                                                    "expression": {
                                                                        "kind": 67174651,
                                                                        "text": "#tag",
                                                                        "flags": 96,
                                                                        "start": 111,
                                                                        "end": 115
                                                                    },
                                                                    "flags": 536870944,
                                                                    "start": 105,
                                                                    "end": 115
                                                                },
                                                                "template": {
                                                                    "kind": 458761,
                                                                    "text": "tagged template",
                                                                    "rawText": "tagged template",
                                                                    "flags": 134217824,
                                                                    "start": 115,
                                                                    "end": 132
                                                                },
                                                                "flags": 32,
                                                                "start": 105,
                                                                "end": 132
                                                            },
                                                            "flags": 16,
                                                            "start": 94,
                                                            "end": 132
                                                        }
                                                    ],
                                                    "flags": 16777232,
                                                    "start": 94,
                                                    "end": 132
                                                },
                                                "flags": 33554448,
                                                "start": 84,
                                                "end": 133
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "console",
                                                            "rawText": "console",
                                                            "flags": 96,
                                                            "start": 133,
                                                            "end": 145
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "assert",
                                                            "rawText": "assert",
                                                            "flags": 96,
                                                            "start": 146,
                                                            "end": 152
                                                        },
                                                        "flags": 536870944,
                                                        "start": 133,
                                                        "end": 152
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "receiver",
                                                                    "rawText": "receiver",
                                                                    "flags": 96,
                                                                    "start": 153,
                                                                    "end": 161
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 34620,
                                                                    "flags": 64,
                                                                    "start": 161,
                                                                    "end": 165
                                                                },
                                                                "right": {
                                                                    "kind": 135,
                                                                    "flags": 165,
                                                                    "start": 96,
                                                                    "end": 170
                                                                },
                                                                "flags": 32,
                                                                "start": 153,
                                                                "end": 170
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 153,
                                                        "end": 170
                                                    },
                                                    "flags": 268435488,
                                                    "start": 133,
                                                    "end": 171
                                                },
                                                "flags": 16,
                                                "start": 133,
                                                "end": 172
                                            },
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 37757004,
                                                    "flags": 1,
                                                    "start": 172,
                                                    "end": 183
                                                },
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "receiver2",
                                                                "rawText": "receiver2",
                                                                "flags": 96,
                                                                "start": 183,
                                                                "end": 193
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 226,
                                                                "member": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 135,
                                                                        "flags": 195,
                                                                        "start": 96,
                                                                        "end": 200
                                                                    },
                                                                    "expression": {
                                                                        "kind": 67174651,
                                                                        "text": "#tag2",
                                                                        "flags": 96,
                                                                        "start": 201,
                                                                        "end": 206
                                                                    },
                                                                    "flags": 536870944,
                                                                    "start": 195,
                                                                    "end": 206
                                                                },
                                                                "template": {
                                                                    "kind": 458761,
                                                                    "text": "tagged template",
                                                                    "rawText": "tagged template",
                                                                    "flags": 134217824,
                                                                    "start": 206,
                                                                    "end": 223
                                                                },
                                                                "flags": 32,
                                                                "start": 195,
                                                                "end": 223
                                                            },
                                                            "flags": 16,
                                                            "start": 183,
                                                            "end": 223
                                                        }
                                                    ],
                                                    "flags": 16777232,
                                                    "start": 183,
                                                    "end": 223
                                                },
                                                "flags": 33554448,
                                                "start": 172,
                                                "end": 224
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "console",
                                                            "rawText": "console",
                                                            "flags": 96,
                                                            "start": 224,
                                                            "end": 236
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "assert",
                                                            "rawText": "assert",
                                                            "flags": 96,
                                                            "start": 237,
                                                            "end": 243
                                                        },
                                                        "flags": 536870944,
                                                        "start": 224,
                                                        "end": 243
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "receiver2",
                                                                    "rawText": "receiver2",
                                                                    "flags": 96,
                                                                    "start": 244,
                                                                    "end": 253
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 34620,
                                                                    "flags": 64,
                                                                    "start": 253,
                                                                    "end": 257
                                                                },
                                                                "right": {
                                                                    "kind": 135,
                                                                    "flags": 257,
                                                                    "start": 96,
                                                                    "end": 262
                                                                },
                                                                "flags": 32,
                                                                "start": 244,
                                                                "end": 262
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 244,
                                                        "end": 262
                                                    },
                                                    "flags": 268435488,
                                                    "start": 224,
                                                    "end": 263
                                                },
                                                "flags": 16,
                                                "start": 224,
                                                "end": 264
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 84,
                                        "end": 264
                                    },
                                    "flags": 32,
                                    "start": 82,
                                    "end": 268
                                },
                                "flags": 2048,
                                "start": 80,
                                "end": 268
                            },
                            "flags": 2048,
                            "start": 65,
                            "end": 268
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 268
                },
                "flags": 9,
                "start": 32,
                "end": 270
            },
            "flags": 16,
            "start": 0,
            "end": 270
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 1,
                    "start": 270,
                    "end": 274
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 96,
                    "start": 274,
                    "end": 278
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 279,
                    "end": 279
                },
                "flags": 32,
                "start": 270,
                "end": 280
            },
            "flags": 16,
            "start": 270,
            "end": 281
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  #tag() {\n    return this;\n  }\n\n  #tag2 = this.#tag;\n\n  constructor() {\n    const receiver = this.#tag`tagged template`;\n    console.assert(receiver === this);\n\n    const receiver2 = this.#tag2`tagged template`;\n    console.assert(receiver2 === this);\n  }\n}\nnew Foo();",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 281
}
```

### Printed

```javascript

class Foo {
  #tag() {
    return  this;
  }
  #tag2 = this.#tag;

  constructor() {
    const receiver = this.#tag`tagged template`;
    console.assert(receiver === this);
    const receiver2 = this.#tag2`tagged template`;
    console.assert(receiver2 === this);
  }
}
new  Foo();
```

### Diagnostics

```javascript
✔ No errors
```

