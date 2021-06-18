# Kataw parser test case

## Input

`````js
class Foo {
  #tag() {
    return this;
  }

  constructor() {
    const receiver = this.#tag`tagged template`;
    console.assert(receiver === this);
  }
}
new Foo();
`````

## Options

### Parser Options

`````js
{}
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
                    "kind": 303,
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
                                    "text": "#tag",
                                    "rawText": "#tag",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "formalParameters": {
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
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 22,
                                                    "end": 33
                                                },
                                                "expression": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "start": 33,
                                                    "end": 38
                                                },
                                                "flags": 81,
                                                "start": 22,
                                                "end": 39
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
                                    "start": 43,
                                    "end": 58
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
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
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 37757004,
                                                    "flags": 81,
                                                    "start": 62,
                                                    "end": 72
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
                                                                "start": 72,
                                                                "end": 81
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 226,
                                                                "member": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 4276321,
                                                                        "flags": 96,
                                                                        "start": 83,
                                                                        "end": 88
                                                                    },
                                                                    "expression": {
                                                                        "kind": 67191035,
                                                                        "text": "#tag",
                                                                        "flags": 96,
                                                                        "start": 89,
                                                                        "end": 93
                                                                    },
                                                                    "flags": 536870944,
                                                                    "start": 83,
                                                                    "end": 93
                                                                },
                                                                "template": {
                                                                    "kind": 458761,
                                                                    "text": "tagged template",
                                                                    "rawText": "tagged template",
                                                                    "flags": 134217824,
                                                                    "start": 93,
                                                                    "end": 110
                                                                },
                                                                "flags": 32,
                                                                "start": 83,
                                                                "end": 110
                                                            },
                                                            "flags": 16,
                                                            "start": 72,
                                                            "end": 110
                                                        }
                                                    ],
                                                    "flags": 16777232,
                                                    "start": 72,
                                                    "end": 110
                                                },
                                                "flags": 33554448,
                                                "start": 62,
                                                "end": 111
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
                                                            "start": 111,
                                                            "end": 123
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "assert",
                                                            "rawText": "assert",
                                                            "flags": 96,
                                                            "start": 124,
                                                            "end": 130
                                                        },
                                                        "flags": 536870944,
                                                        "start": 111,
                                                        "end": 130
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
                                                                    "start": 131,
                                                                    "end": 139
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 34620,
                                                                    "flags": 96,
                                                                    "start": 139,
                                                                    "end": 143
                                                                },
                                                                "right": {
                                                                    "kind": 4276321,
                                                                    "flags": 96,
                                                                    "start": 143,
                                                                    "end": 148
                                                                },
                                                                "flags": 32,
                                                                "start": 131,
                                                                "end": 148
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 131,
                                                        "end": 148
                                                    },
                                                    "flags": 268435488,
                                                    "start": 111,
                                                    "end": 149
                                                },
                                                "flags": 16,
                                                "start": 111,
                                                "end": 150
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 62,
                                        "end": 150
                                    },
                                    "flags": 32,
                                    "start": 60,
                                    "end": 154
                                },
                                "flags": 2048,
                                "start": 58,
                                "end": 154
                            },
                            "flags": 2048,
                            "start": 43,
                            "end": 154
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 154
                },
                "flags": 9,
                "start": 32,
                "end": 156
            },
            "flags": 16,
            "start": 0,
            "end": 156
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "start": 156,
                    "end": 160
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 96,
                    "start": 160,
                    "end": 164
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 165,
                    "end": 165
                },
                "flags": 97,
                "start": 156,
                "end": 166
            },
            "flags": 16,
            "start": 156,
            "end": 167
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  #tag() {\n    return this;\n  }\n\n  constructor() {\n    const receiver = this.#tag`tagged template`;\n    console.assert(receiver === this);\n  }\n}\nnew Foo();",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 167
}
```

### Printed

```javascript

class Foo {
  #tag {
    return  this;
  }
  constructor {
    const receiver = this.#tag`tagged template`;
    console.assert(receiver === this);
  }
}
new  Foo();
```

### Diagnostics

```javascript
✔ No errors
```

