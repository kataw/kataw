# Kataw parser test case

## Input

`````js
class x extends y { constructor(){ return (a=super.foo) => a; }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 17
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 19,
                                "end": 31
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 32,
                                "end": 33
                            },
                            "type": null,
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
                                                "flags": 768,
                                                "start": 34,
                                                "end": 41
                                            },
                                            "expression": {
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 768,
                                                    "start": 55,
                                                    "end": 58
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 81921,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 43,
                                                            "end": 44
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 768,
                                                            "start": 44,
                                                            "end": 45
                                                        },
                                                        "right": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 768,
                                                                    "start": 45,
                                                                    "end": 50
                                                                },
                                                                "flags": 768,
                                                                "start": 45,
                                                                "end": 50
                                                            },
                                                            "expression": {
                                                                "kind": 81921,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 768,
                                                                "start": 51,
                                                                "end": 54
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 45,
                                                            "end": 54
                                                        },
                                                        "flags": 256,
                                                        "start": 41,
                                                        "end": 54
                                                    }
                                                ],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 81921,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "flags": 256,
                                                "start": 41,
                                                "end": 60
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 34
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 34,
                                    "end": 61
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 63
                            },
                            "flags": 0,
                            "start": 31,
                            "end": 63
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 63
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 64
            },
            "flags": 128,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "class x extends y { constructor(){ return (a=super.foo) => a; }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

