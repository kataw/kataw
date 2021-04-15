# Kataw parser test case

## Input

`````js
class A {
  x () {
    super - 1;
  }
}
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
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
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
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 9,
                                "end": 13
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 15,
                                "end": 16
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
                                                "kind": 198,
                                                "left": {
                                                    "kind": 203,
                                                    "chain": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 768,
                                                            "start": 18,
                                                            "end": 28
                                                        },
                                                        "flags": 768,
                                                        "start": 18,
                                                        "end": 28
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "autofix": 0,
                                                        "flags": 12,
                                                        "start": 28,
                                                        "end": 28
                                                    },
                                                    "flags": 256,
                                                    "start": 18,
                                                    "end": 28
                                                },
                                                "operatorToken": {
                                                    "kind": 35379,
                                                    "flags": 768,
                                                    "start": 28,
                                                    "end": 30
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 30,
                                                    "end": 32
                                                },
                                                "flags": 256,
                                                "start": 18,
                                                "end": 32
                                            },
                                            "flags": 128,
                                            "start": 18,
                                            "end": 33
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 18,
                                    "end": 33
                                },
                                "flags": 256,
                                "start": 16,
                                "end": 37
                            },
                            "flags": 0,
                            "start": 13,
                            "end": 37
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 37
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 39
            },
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "class A {\n  x () {\n    super - 1;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 28,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 28,
            "end": 30
        }
    ],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

