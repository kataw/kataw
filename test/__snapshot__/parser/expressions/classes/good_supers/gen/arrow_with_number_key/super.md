# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/good_supers/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/good_supers/gen/arrow_with_number_key
> :: test: arrow with number key
> :: case: super
## Options

`````js
{}
`````
## Input

`````js
class x extends y {
  constructor() {
    ({123: super}) => x
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
                                    "start": 19,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameters": {
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
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 56,
                                                        "end": 59
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [
                                                        {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [
                                                                    {
                                                                        "kind": 329,
                                                                        "ellipsisToken": null,
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
                                                                                "kind": 225,
                                                                                "superKeyword": {
                                                                                    "kind": 4259935,
                                                                                    "flags": 96,
                                                                                    "start": 48,
                                                                                    "end": 54
                                                                                },
                                                                                "flags": 96,
                                                                                "start": 48,
                                                                                "end": 54
                                                                            },
                                                                            "expression": {
                                                                                "kind": 16637,
                                                                                "text": "",
                                                                                "rawText": "",
                                                                                "flags": 64,
                                                                                "start": 54,
                                                                                "end": 54
                                                                            },
                                                                            "flags": 536870944,
                                                                            "start": 48,
                                                                            "end": 54
                                                                        },
                                                                        "initializer": null,
                                                                        "flags": 32,
                                                                        "start": 44,
                                                                        "end": 54
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 44,
                                                                "end": 54
                                                            },
                                                            "flags": 48,
                                                            "start": 43,
                                                            "end": 55
                                                        }
                                                    ],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 59,
                                                        "end": 61
                                                    },
                                                    "flags": 34,
                                                    "start": 37,
                                                    "end": 61
                                                },
                                                "flags": 16,
                                                "start": 37,
                                                "end": 61
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 37,
                                        "end": 61
                                    },
                                    "flags": 32,
                                    "start": 35,
                                    "end": 65
                                },
                                "flags": 2048,
                                "start": 33,
                                "end": 65
                            },
                            "flags": 2048,
                            "start": 19,
                            "end": 65
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 65
                },
                "flags": 7,
                "start": 32,
                "end": 67
            },
            "flags": 16,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "class x extends y {\n  constructor() {\n    ({123: super}) => x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 48, end: 55
✖ Dot property must be an identifier - start: 54, end: 55
✖ The left hand side of the arrow is not destructible  - start: 56, end: 59

```

