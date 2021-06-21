# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/gen/in_class
> :: test: in class
> :: case: function () { for (const x in { a: x }) { } }
## Options

`````js
{}
`````
## Input

`````js
class x { function () { for (const x in { a: x }) { } } }
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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
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
                                    "text": "function",
                                    "rawText": "function",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 21
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 166,
                                                "forKeyword": {
                                                    "kind": 37757017,
                                                    "flags": 80,
                                                    "start": 23,
                                                    "end": 27
                                                },
                                                "initializer": {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 37757004,
                                                        "flags": 64,
                                                        "start": 29,
                                                        "end": 34
                                                    },
                                                    "binding": {
                                                        "kind": 151,
                                                        "bindingList": [
                                                            {
                                                                "kind": 190,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 34,
                                                                    "end": 36
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 34,
                                                                "end": 36
                                                            }
                                                        ],
                                                        "flags": 16777232,
                                                        "start": 34,
                                                        "end": 36
                                                    },
                                                    "flags": 33554448,
                                                    "start": 23,
                                                    "end": 36
                                                },
                                                "inKeyword": {
                                                    "kind": 21006388,
                                                    "flags": 64,
                                                    "start": 36,
                                                    "end": 39
                                                },
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 96,
                                                                    "start": 41,
                                                                    "end": 43
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 44,
                                                                    "end": 46
                                                                },
                                                                "flags": 32,
                                                                "start": 41,
                                                                "end": 46
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 41,
                                                        "end": 46
                                                    },
                                                    "flags": 48,
                                                    "start": 39,
                                                    "end": 48
                                                },
                                                "statement": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 51,
                                                        "end": 51
                                                    },
                                                    "flags": 16,
                                                    "start": 49,
                                                    "end": 53
                                                },
                                                "flags": 80,
                                                "start": 23,
                                                "end": 53
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 23,
                                        "end": 53
                                    },
                                    "flags": 32,
                                    "start": 21,
                                    "end": 55
                                },
                                "flags": 0,
                                "start": 18,
                                "end": 55
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 55
                },
                "flags": 7,
                "start": 32,
                "end": 57
            },
            "flags": 16,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "class x { function () { for (const x in { a: x }) { } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

class x {
  function() {
    for (const x; in { a: x })
      {}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

