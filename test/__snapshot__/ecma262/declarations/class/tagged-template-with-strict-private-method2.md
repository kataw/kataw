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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
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
                                    "text": "#tag",
                                    "rawText": "#tag",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
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
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 33
                                                },
                                                "expression": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 38
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 22,
                                                "end": 39
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 43
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 43
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 43
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#tag2",
                                "rawText": "#tag2",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 52
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 129,
                                "member": {
                                    "kind": 4276321,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 54,
                                    "end": 59
                                },
                                "expression": {
                                    "kind": 67191035,
                                    "text": "#tag",
                                    "rawText": "#tag",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 64
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 54,
                                "end": 64
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 43,
                            "end": 64
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 65
                        },
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 80
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
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
                                                    "flags": 81,
                                                    "transformFlags": 0,
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
                                                                "transformFlags": 0,
                                                                "start": 94,
                                                                "end": 103
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 226,
                                                                "member": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 4276321,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 105,
                                                                        "end": 110
                                                                    },
                                                                    "expression": {
                                                                        "kind": 67191035,
                                                                        "text": "#tag",
                                                                        "rawText": "#tag",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 111,
                                                                        "end": 115
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 2,
                                                                    "start": 105,
                                                                    "end": 115
                                                                },
                                                                "template": {
                                                                    "kind": 458761,
                                                                    "text": "tagged template",
                                                                    "rawText": "tagged template",
                                                                    "flags": 134217824,
                                                                    "transformFlags": 0,
                                                                    "start": 115,
                                                                    "end": 132
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 105,
                                                                "end": 132
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4224,
                                                            "start": 94,
                                                            "end": 132
                                                        }
                                                    ],
                                                    "flags": 16777232,
                                                    "transformFlags": 0,
                                                    "start": 94,
                                                    "end": 132
                                                },
                                                "flags": 33554448,
                                                "transformFlags": 0,
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
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 133,
                                                            "end": 145
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "assert",
                                                            "rawText": "assert",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 146,
                                                            "end": 152
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
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
                                                                    "transformFlags": 0,
                                                                    "start": 153,
                                                                    "end": 161
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 34620,
                                                                    "flags": 96,
                                                                    "transformFlags": 16,
                                                                    "start": 161,
                                                                    "end": 165
                                                                },
                                                                "right": {
                                                                    "kind": 4276321,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 165,
                                                                    "end": 170
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 5120,
                                                                "start": 153,
                                                                "end": 170
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 153,
                                                        "end": 170
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1,
                                                    "start": 133,
                                                    "end": 171
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 133,
                                                "end": 172
                                            },
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 37757004,
                                                    "flags": 81,
                                                    "transformFlags": 0,
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
                                                                "transformFlags": 0,
                                                                "start": 183,
                                                                "end": 193
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 226,
                                                                "member": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 4276321,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 195,
                                                                        "end": 200
                                                                    },
                                                                    "expression": {
                                                                        "kind": 67191035,
                                                                        "text": "#tag2",
                                                                        "rawText": "#tag2",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 201,
                                                                        "end": 206
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 2,
                                                                    "start": 195,
                                                                    "end": 206
                                                                },
                                                                "template": {
                                                                    "kind": 458761,
                                                                    "text": "tagged template",
                                                                    "rawText": "tagged template",
                                                                    "flags": 134217824,
                                                                    "transformFlags": 0,
                                                                    "start": 206,
                                                                    "end": 223
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 195,
                                                                "end": 223
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4224,
                                                            "start": 183,
                                                            "end": 223
                                                        }
                                                    ],
                                                    "flags": 16777232,
                                                    "transformFlags": 0,
                                                    "start": 183,
                                                    "end": 223
                                                },
                                                "flags": 33554448,
                                                "transformFlags": 0,
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
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 224,
                                                            "end": 236
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "assert",
                                                            "rawText": "assert",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 237,
                                                            "end": 243
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
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
                                                                    "transformFlags": 0,
                                                                    "start": 244,
                                                                    "end": 253
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 34620,
                                                                    "flags": 96,
                                                                    "transformFlags": 16,
                                                                    "start": 253,
                                                                    "end": 257
                                                                },
                                                                "right": {
                                                                    "kind": 4276321,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 257,
                                                                    "end": 262
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 5120,
                                                                "start": 244,
                                                                "end": 262
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 244,
                                                        "end": 262
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1,
                                                    "start": 224,
                                                    "end": 263
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 224,
                                                "end": 264
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 84,
                                        "end": 264
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 82,
                                    "end": 268
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 268
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 268
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 268
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 270
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 270
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 270,
                    "end": 274
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 274,
                    "end": 278
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 279,
                    "end": 279
                },
                "flags": 97,
                "transformFlags": 2048,
                "start": 270,
                "end": 280
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 270,
            "end": 281
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  #tag() {\n    return this;\n  }\n\n  #tag2 = this.#tag;\n\n  constructor() {\n    const receiver = this.#tag`tagged template`;\n    console.assert(receiver === this);\n\n    const receiver2 = this.#tag2`tagged template`;\n    console.assert(receiver2 === this);\n  }\n}\nnew Foo();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 281
}
```

### Printed

```javascript
class Foo {
  #tag() {
    return this;
  }
  #tag2 = this.#tag;;
  constructor() {
    const receiver = this.#tag`tagged template`;
    console.assert(receiver === this);
    const receiver2 = this.#tag2`tagged template`;
    console.assert(receiver2 === this);
  }
}
new Foo();

```

### Diagnostics

```javascript
✔ No errors
```

