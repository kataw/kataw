# Kataw parser test case

## Input

`````js
class Foo {
  static #client

  constructor(props) {
    ({ client: Foo.#client } = props)
  }
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
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 11,
                                "end": 20
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#client",
                                "rawText": "#client",
                                "flags": 96,
                                "start": 20,
                                "end": 28
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 20,
                            "end": 28
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "asteriskToken": null,
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
                                    "start": 28,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "props",
                                            "rawText": "props",
                                            "flags": 96,
                                            "start": 44,
                                            "end": 49
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2144,
                                    "start": 44,
                                    "end": 50
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "client",
                                                                            "rawText": "client",
                                                                            "flags": 96,
                                                                            "start": 59,
                                                                            "end": 66
                                                                        },
                                                                        "right": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "Foo",
                                                                                "rawText": "Foo",
                                                                                "flags": 96,
                                                                                "start": 67,
                                                                                "end": 71
                                                                            },
                                                                            "expression": {
                                                                                "kind": 67191035,
                                                                                "text": "#client",
                                                                                "rawText": "#client",
                                                                                "flags": 96,
                                                                                "start": 72,
                                                                                "end": 79
                                                                            },
                                                                            "flags": 536870944,
                                                                            "start": 59,
                                                                            "end": 79
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 59,
                                                                        "end": 79
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 59,
                                                                "end": 79
                                                            },
                                                            "flags": 48,
                                                            "start": 58,
                                                            "end": 81
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "start": 81,
                                                            "end": 83
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "props",
                                                            "rawText": "props",
                                                            "flags": 96,
                                                            "start": 83,
                                                            "end": 89
                                                        },
                                                        "flags": 32,
                                                        "start": 58,
                                                        "end": 89
                                                    },
                                                    "flags": 32,
                                                    "start": 52,
                                                    "end": 90
                                                },
                                                "flags": 16,
                                                "start": 52,
                                                "end": 90
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 52,
                                        "end": 90
                                    },
                                    "flags": 32,
                                    "start": 50,
                                    "end": 94
                                },
                                "flags": 2048,
                                "start": 43,
                                "end": 94
                            },
                            "flags": 2048,
                            "start": 28,
                            "end": 94
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 94
                },
                "flags": 9,
                "start": 32,
                "end": 96
            },
            "flags": 16,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  static #client\n\n  constructor(props) {\n    ({ client: Foo.#client } = props)\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A class field cannot have a field named 'constructor' - start: 28, end: 43

```

