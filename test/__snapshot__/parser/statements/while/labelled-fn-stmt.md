# Kataw parser test case

## Input

`````js
while (false) label1: label2: function f() {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "start": 7,
                "end": 12
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label1",
                    "rawText": "label1",
                    "flags": 96,
                    "start": 13,
                    "end": 20
                },
                "labels": [
                    {
                        "kind": 256,
                        "label": "label1",
                        "iterationStatement": false,
                        "flags": 16,
                        "start": 13,
                        "end": 20
                    },
                    {
                        "kind": 256,
                        "label": "label2",
                        "iterationStatement": false,
                        "flags": 16,
                        "start": 21,
                        "end": 28
                    }
                ],
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 20,
                    "end": 21
                },
                "statement": {
                    "kind": 163,
                    "label": {
                        "kind": 134299649,
                        "text": "label2",
                        "rawText": "label2",
                        "flags": 96,
                        "start": 21,
                        "end": 28
                    },
                    "labels": [
                        {
                            "kind": 256,
                            "label": "label1",
                            "iterationStatement": false,
                            "flags": 16,
                            "start": 13,
                            "end": 20
                        },
                        {
                            "kind": 256,
                            "label": "label2",
                            "iterationStatement": false,
                            "flags": 16,
                            "start": 21,
                            "end": 28
                        }
                    ],
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 28,
                        "end": 29
                    },
                    "statement": {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 29,
                            "end": 38
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 38,
                            "end": 40
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 40,
                            "end": 42
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 44,
                                "end": 44
                            },
                            "flags": 32,
                            "start": 42,
                            "end": 45
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 29,
                        "end": 45
                    },
                    "flags": 16,
                    "start": 21,
                    "end": 45
                },
                "flags": 16,
                "start": 13,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "while (false) label1: label2: function f() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 29, end: 38

```

