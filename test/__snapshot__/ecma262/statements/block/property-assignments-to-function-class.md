# Kataw parser test case

## Input

`````js
{
class Foo {}
Foo.bar = 1;

const Foo2 = () => {};
Foo2.bar = 1;

function FooBar() {}
FooBar.bar = 1;
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
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 81,
                            "start": 1,
                            "end": 7
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "Foo",
                            "rawText": "Foo",
                            "flags": 96,
                            "start": 7,
                            "end": 11
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 11,
                            "start": 32,
                            "end": 14
                        },
                        "flags": 17,
                        "start": 1,
                        "end": 14
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "Foo",
                                    "rawText": "Foo",
                                    "flags": 97,
                                    "start": 14,
                                    "end": 18
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 22
                                },
                                "flags": 97,
                                "start": 14,
                                "end": 22
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 14,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 27
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 81,
                            "start": 27,
                            "end": 34
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "Foo2",
                                        "rawText": "Foo2",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 39
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 43,
                                            "end": 43
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 44,
                                            "end": 47
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 49,
                                                "end": 49
                                            },
                                            "flags": 32,
                                            "start": 47,
                                            "end": 50
                                        },
                                        "flags": 32,
                                        "start": 41,
                                        "end": 50
                                    },
                                    "flags": 16,
                                    "start": 34,
                                    "end": 50
                                }
                            ],
                            "flags": 16777232,
                            "start": 34,
                            "end": 50
                        },
                        "flags": 33554448,
                        "start": 27,
                        "end": 51
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "Foo2",
                                    "rawText": "Foo2",
                                    "flags": 97,
                                    "start": 51,
                                    "end": 56
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 57,
                                    "end": 60
                                },
                                "flags": 97,
                                "start": 51,
                                "end": 60
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 60,
                                "end": 62
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 62,
                                "end": 64
                            },
                            "flags": 0,
                            "start": 51,
                            "end": 64
                        },
                        "flags": 16,
                        "start": 51,
                        "end": 65
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 65,
                            "start": 65,
                            "end": 75
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "FooBar",
                            "rawText": "FooBar",
                            "flags": 96,
                            "start": 75,
                            "end": 82
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 83,
                            "end": 83
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 86,
                                "end": 86
                            },
                            "flags": 32,
                            "start": 84,
                            "end": 87
                        },
                        "returnType": null,
                        "flags": 16,
                        "start": 65,
                        "end": 87
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "FooBar",
                                    "rawText": "FooBar",
                                    "flags": 97,
                                    "start": 87,
                                    "end": 94
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 95,
                                    "end": 98
                                },
                                "flags": 97,
                                "start": 87,
                                "end": 98
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 98,
                                "end": 100
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 100,
                                "end": 102
                            },
                            "flags": 0,
                            "start": 87,
                            "end": 102
                        },
                        "flags": 16,
                        "start": 87,
                        "end": 103
                    }
                ],
                "flags": 17,
                "start": 1,
                "end": 103
            },
            "flags": 16,
            "start": 0,
            "end": 105
        }
    ],
    "isModule": false,
    "source": "{\nclass Foo {}\nFoo.bar = 1;\n\nconst Foo2 = () => {};\nFoo2.bar = 1;\n\nfunction FooBar() {}\nFooBar.bar = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 105
}
```

### Printed

```javascript

{
  class Foo {}
  Foo.bar = 1;
  const Foo2 = () => {};
  Foo2.bar = 1;
  function FooBar() {}
  FooBar.bar = 1;
}
```

### Diagnostics

```javascript
✔ No errors
```

