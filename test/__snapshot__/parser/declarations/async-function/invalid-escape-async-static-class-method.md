# Kataw parser test case

## Input

`````js
class X { static \u0061sync x() { await x } }
`````

## Output

### CST

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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 9,
                                "end": 16
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 16448,
                                "start": 16,
                                "end": 27
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 29
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 30,
                                    "end": 31
                                },
                                "returnType": null,
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
                                                        "start": 33,
                                                        "end": 39
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 39,
                                                        "end": 41
                                                    },
                                                    "flags": 32,
                                                    "start": 33,
                                                    "end": 41
                                                },
                                                "flags": 16,
                                                "start": 33,
                                                "end": 41
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 33,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "start": 31,
                                    "end": 43
                                },
                                "flags": 256,
                                "start": 29,
                                "end": 43
                            },
                            "flags": 256,
                            "start": 16,
                            "end": 43
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 43
                },
                "flags": 7,
                "start": 32,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "class X { static \\u0061sync x() { await x } }",
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
✖ Keywords cannot contain escape characters - start: 16, end: 29

```

