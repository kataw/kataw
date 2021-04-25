# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration_paren
> :: case: await = 0;
## Input

`````js
(class extends Base { await = 0; });
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
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsToken": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 6,
                            "end": 14
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "Base",
                            "rawText": "Base",
                            "flags": 768,
                            "start": 14,
                            "end": 19
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 14,
                        "end": 19
                    },
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
                                    "rawText": "await",
                                    "flags": 768,
                                    "start": 21,
                                    "end": 27
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 29,
                                    "end": 31
                                },
                                "flags": 256,
                                "start": 21,
                                "end": 31
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 31,
                                "end": 32
                            }
                        ],
                        "flags": 256,
                        "start": 21,
                        "end": 34
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 34
                },
                "flags": 256,
                "start": 0,
                "end": 35
            },
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "(class extends Base { await = 0; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

