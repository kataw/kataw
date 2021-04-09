# Kataw parser test case

## Input

`````js
function *f(){   s = {"foo": yield / x}   }
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
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "value": "s",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 14,
                                    "end": 18
                                },
                                "operatorToken": {
                                    "kind": 268501004,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 14,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 229,
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 28,
                                                        "end": 34
                                                    },
                                                    "operatorToken": {
                                                        "kind": 35640,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 34,
                                                        "end": 36
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 36,
                                                        "end": 38
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 22,
                                                    "end": 38
                                                },
                                                "right": {
                                                    "kind": 67174403,
                                                    "value": "foo",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 22,
                                                    "end": 27
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 22,
                                                "end": 38
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 22,
                                        "end": 38
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 20,
                                    "end": 39
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 39
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 39
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 39
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 43
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "function *f(){   s = {\"foo\": yield / x}   }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

