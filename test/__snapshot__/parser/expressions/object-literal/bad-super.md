# Kataw parser test case

## Input

`````js
class x extends y {constructor(){    ({"foo": super}) => x    }}
`````

## Output

### Hybrid CST

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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
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
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 96,
                                "start": 19,
                                "end": 30
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 31,
                                "end": 32
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
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 0,
                                                    "start": 53,
                                                    "end": 56
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "asyncKeyword": null,
                                                                    "getKeyword": null,
                                                                    "setKeyword": null,
                                                                    "left": {
                                                                        "kind": 203,
                                                                        "chain": {
                                                                            "kind": 225,
                                                                            "superKeyword": {
                                                                                "kind": 4259935,
                                                                                "flags": 0,
                                                                                "start": 45,
                                                                                "end": 51
                                                                            },
                                                                            "flags": 96,
                                                                            "start": 45,
                                                                            "end": 51
                                                                        },
                                                                        "expression": {
                                                                            "kind": 16637,
                                                                            "text": "",
                                                                            "flags": 68,
                                                                            "start": 51,
                                                                            "end": 51
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 45,
                                                                        "end": 51
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392131,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 96,
                                                                        "start": 39,
                                                                        "end": 44
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 39,
                                                                    "end": 51
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "start": 39,
                                                            "end": 51
                                                        },
                                                        "flags": 32,
                                                        "start": 38,
                                                        "end": 52
                                                    }
                                                ],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "flags": 32,
                                                "start": 33,
                                                "end": 58
                                            },
                                            "flags": 16,
                                            "start": 33,
                                            "end": 58
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 33,
                                    "end": 58
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 63
                            },
                            "flags": 0,
                            "start": 30,
                            "end": 63
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 63
                    }
                ],
                "flags": 32,
                "start": 19,
                "end": 64
            },
            "flags": 16,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "class x extends y {constructor(){    ({\"foo\": super}) => x    }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 51, end: 52
✖ Dot property must be an identifier - start: 51, end: 52
✖ The left hand side of the arrow is not destructible  - start: 53, end: 56

```

