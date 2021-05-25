# Kataw parser test case

## Input

`````js
(\u0061sync function() { await x })
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 16448,
                        "start": 1,
                        "end": 11
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 11,
                        "end": 20
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 20,
                        "end": 22
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82032,
                                            "flags": 0,
                                            "start": 24,
                                            "end": 30
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "start": 24,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "start": 24,
                                    "end": 32
                                }
                            ],
                            "flags": 32,
                            "start": 24,
                            "end": 32
                        },
                        "flags": 32,
                        "start": 22,
                        "end": 34
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 160,
                    "start": 1,
                    "end": 34
                },
                "flags": 32,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "(\\u0061sync function() { await x })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 11, end: 20

```

