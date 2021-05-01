# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: fooo`bar`
## Input

`````js
(class B extends fooo`bar` {})
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
                        "text": "B",
                        "rawText": "B",
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
                            "kind": 226,
                            "member": {
                                "kind": 134299649,
                                "text": "fooo",
                                "rawText": " fooo",
                                "flags": 96,
                                "start": 16,
                                "end": 21
                            },
                            "template": {
                                "kind": 458761,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 21,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 26
                        },
                        "typeParameter": null,
                        "flags": 16,
                        "start": 16,
                        "end": 26
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 32,
                        "start": 28,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "(class B extends fooo`bar` {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
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

