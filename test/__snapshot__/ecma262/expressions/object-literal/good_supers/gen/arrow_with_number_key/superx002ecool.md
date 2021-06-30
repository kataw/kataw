# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/object-literal/good_supers/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/object-literal/good_supers/gen/arrow_with_number_key
> :: test: arrow with number key
> :: case: super.cool
## Options

`````js
{}
`````
## Input

`````js
class x extends y {
  constructor() {
    ({123: super.cool}) => x
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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 17
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 34,
                                    "end": 35
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
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "arrowPatameterList": {
                                                        "kind": 342,
                                                        "parameters": [
                                                            {
                                                                "kind": 212,
                                                                "propertyList": {
                                                                    "kind": 213,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 329,
                                                                            "key": {
                                                                                "kind": 201392130,
                                                                                "text": 123,
                                                                                "rawText": "123",
                                                                                "flags": 96,
                                                                                "start": 44,
                                                                                "end": 47
                                                                            },
                                                                            "value": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 4259935,
                                                                                    "flags": 96,
                                                                                    "start": 48,
                                                                                    "end": 54
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "cool",
                                                                                    "rawText": "cool",
                                                                                    "flags": 96,
                                                                                    "start": 55,
                                                                                    "end": 59
                                                                                },
                                                                                "flags": 96,
                                                                                "start": 44,
                                                                                "end": 59
                                                                            },
                                                                            "initializer": null,
                                                                            "flags": 32,
                                                                            "start": 44,
                                                                            "end": 59
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 44,
                                                                    "end": 59
                                                                },
                                                                "flags": 48,
                                                                "start": 43,
                                                                "end": 60
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2,
                                                        "start": 43,
                                                        "end": 61
                                                    },
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 61,
                                                        "end": 64
                                                    },
                                                    "contents": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 64,
                                                        "end": 66
                                                    },
                                                    "flags": 34,
                                                    "start": 37,
                                                    "end": 66
                                                },
                                                "flags": 16,
                                                "start": 37,
                                                "end": 66
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 37,
                                        "end": 66
                                    },
                                    "flags": 32,
                                    "start": 35,
                                    "end": 70
                                },
                                "flags": 2048,
                                "start": 33,
                                "end": 70
                            },
                            "flags": 2048,
                            "start": 19,
                            "end": 70
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 70
                },
                "flags": 7,
                "start": 32,
                "end": 72
            },
            "flags": 16,
            "start": 0,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "class x extends y {\n  constructor() {\n    ({123: super.cool}) => x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 61, end: 64

```

