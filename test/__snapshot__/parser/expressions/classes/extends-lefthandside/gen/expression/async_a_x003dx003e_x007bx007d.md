# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: async a => {}
## Input

`````js
(class B extends async a => {} {})
`````

## Output

### Hybrid CST

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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1,
                        "start": 0,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 8,
                            "start": 0,
                            "end": 16
                        },
                        "expression": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 24,
                                "start": 0,
                                "end": 27
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 16,
                                    "end": 24
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 16,
                                "start": 512,
                                "end": 22
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 256,
                                "start": 27,
                                "end": 30
                            },
                            "flags": 2304,
                            "start": 16,
                            "end": 30
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 30
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 32,
                        "end": 33
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 33
                },
                "flags": 256,
                "start": 0,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "(class B extends async a => {} {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

