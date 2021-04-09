# Kataw parser test case

## Input

`````js
for (class x { [a](){} } in c);
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 166,
            "initializer": {
                "kind": 189,
                "decorators": null,
                "name": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 10,
                    "end": 12
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
                                    "kind": 194,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 14,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 19,
                                    "end": 20
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 20,
                                    "end": 22
                                },
                                "autofix": 0,
                                "flags": 0,
                                "start": 18,
                                "end": 22
                            },
                            "flags": 256,
                            "start": 14,
                            "end": 22
                        }
                    ],
                    "flags": 256,
                    "start": 14,
                    "end": 24
                },
                "flags": 256,
                "start": 5,
                "end": 24
            },
            "expression": {
                "kind": 81921,
                "value": "c",
                "autofix": 0,
                "flags": 768,
                "start": 27,
                "end": 29
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 30,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "for (class x { [a](){} } in c);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 27,
            "end": 29
        }
    ],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

