# Kataw parser test case

## Input

`````js
function f() {
    return import?.("foo").then(party);
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 10,
                "end": 12
            },
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
                                "start": 14,
                                "end": 25
                            },
                            "expression": {
                                "kind": 120,
                                "expression": {
                                    "kind": 206,
                                    "importKeyword": {
                                        "kind": 37814364,
                                        "flags": 768,
                                        "start": 25,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 35,
                                                    "end": 40
                                                },
                                                "flags": 256,
                                                "start": 34,
                                                "end": 41
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "then",
                                                "rawText": "then",
                                                "flags": 768,
                                                "start": 42,
                                                "end": 46
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 34,
                                            "end": 46
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "party",
                                                    "rawText": "party",
                                                    "flags": 768,
                                                    "start": 47,
                                                    "end": 52
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 47,
                                            "end": 52
                                        },
                                        "flags": 256,
                                        "start": 34,
                                        "end": 53
                                    },
                                    "flags": 256,
                                    "start": 32,
                                    "end": 53
                                },
                                "flags": 128,
                                "start": 32,
                                "end": 54
                            },
                            "flags": 128,
                            "start": 1,
                            "end": 14
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 14,
                    "end": 54
                },
                "flags": 256,
                "start": 12,
                "end": 56
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "text": "function f() {\n    return import?.(\"foo\").then(party);\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 53,
            "end": 54
        }
    ],
    "start": 0,
    "end": 56
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

