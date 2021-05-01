# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression_paren
> :: case: await = 0;
## Input

`````js
(class { await = 0; });
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
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": " await",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 14
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 18
                            },
                            {
                                "kind": 281,
                                "flags": 96,
                                "start": 18,
                                "end": 19
                            }
                        ],
                        "flags": 32,
                        "start": 8,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "(class { await = 0; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
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

