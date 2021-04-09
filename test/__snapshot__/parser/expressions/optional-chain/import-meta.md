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
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 161,
                            "expression": {
                                "kind": 120,
                                "expression": {
                                    "kind": 206,
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 67174403,
                                                    "value": "foo",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 35,
                                                    "end": 40
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 34,
                                                "end": 41
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": "then",
                                                "autofix": 0,
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
                                                    "kind": 81921,
                                                    "value": "party",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 47,
                                                    "end": 52
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 47,
                                            "end": 52
                                        },
                                        "flags": 256,
                                        "start": 34,
                                        "end": 53
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 32,
                                    "end": 53
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 32,
                                "end": 54
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 1,
                            "end": 14
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 54
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 56
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "text": "function f() {\n    return import?.(\"foo\").then(party);\n}",
    "fileName": "__root__",
    "autofix": 0,
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

