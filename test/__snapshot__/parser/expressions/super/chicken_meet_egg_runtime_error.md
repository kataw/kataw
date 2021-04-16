# Kataw parser test case

## Input

`````js
class x extends y { constructor() { super(this); } }
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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
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
                    "kind": 134299649,
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
                        "declareToken": null,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
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
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 768,
                                                        "start": 35,
                                                        "end": 41
                                                    },
                                                    "flags": 768,
                                                    "start": 35,
                                                    "end": 41
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 135,
                                                            "flags": 768,
                                                            "start": 42,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 42,
                                                    "end": 46
                                                },
                                                "flags": 256,
                                                "start": 35,
                                                "end": 47
                                            },
                                            "flags": 128,
                                            "start": 35,
                                            "end": 48
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 48
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 50
                            },
                            "flags": 0,
                            "start": 31,
                            "end": 50
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 50
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 52
            },
            "flags": 128,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "class x extends y { constructor() { super(this); } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 41,
            "end": 42
        }
    ],
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

