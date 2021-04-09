# Kataw parser test case

## Input

`````js
do throw function (v, h) {
  "use strict"
} while ((""))
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 67174403,
                    "value": "",
                    "autofix": 0,
                    "flags": 768,
                    "start": 52,
                    "end": 54
                },
                "autofix": 0,
                "flags": 256,
                "start": 51,
                "end": 55
            },
            "statement": {
                "kind": 158,
                "expression": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 81921,
                                    "value": "v",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 20
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 19,
                                "end": 20
                            },
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 81921,
                                    "value": "h",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 21,
                                    "end": 23
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 21,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 19,
                        "end": 24
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 67174403,
                                        "value": "use strict",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 26,
                                        "end": 41
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 26,
                                    "end": 41
                                }
                            ],
                            "multiline": true,
                            "autofix": 0,
                            "flags": 256,
                            "start": 26,
                            "end": 41
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 24,
                        "end": 43
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 43
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 43
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "text": "do throw function (v, h) {\n  \"use strict\"\n} while ((\"\"))",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 43,
            "end": 49
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

