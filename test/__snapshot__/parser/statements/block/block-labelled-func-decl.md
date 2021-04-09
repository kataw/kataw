# Kataw parser test case

## Input

`````js
{ foo: bar: function f(){} }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 81921,
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 5
                        },
                        "statement": {
                            "kind": 163,
                            "label": {
                                "kind": 81921,
                                "value": "bar",
                                "autofix": 0,
                                "flags": 768,
                                "start": 6,
                                "end": 10
                            },
                            "statement": {
                                "kind": 176,
                                "asyncToken": null,
                                "generatorToken": null,
                                "name": {
                                    "kind": 81921,
                                    "value": "f",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 22
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 23,
                                    "end": 24
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 11,
                                "end": 26
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 6,
                            "end": 26
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 1,
                        "end": 26
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 1,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "{ foo: bar: function f(){} }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

