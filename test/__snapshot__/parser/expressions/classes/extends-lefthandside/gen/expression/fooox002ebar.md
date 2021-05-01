# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: fooo.bar
## Input

`````js
(class B extends fooo.bar {})
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
                    "name": {
                        "kind": 134299649,
                        "original": "B",
                        "text": "B",
                        "rawText": " B",
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 0,
                            "start": 8,
                            "end": 16
                        },
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "original": "fooo",
                                "text": "fooo",
                                "rawText": " fooo",
                                "flags": 96,
                                "start": 16,
                                "end": 21
                            },
                            "expression": {
                                "kind": 134299649,
                                "original": "bar",
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 22,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 25
                        },
                        "typeParameter": null,
                        "flags": 16,
                        "start": 16,
                        "end": 25
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 32,
                        "start": 27,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 28
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "(class B extends fooo.bar {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
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

