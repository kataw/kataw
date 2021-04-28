# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: /crap/
## Input

`````js
(class B extends /crap/ {})
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
                            "kind": 221,
                            "text": "/crap/",
                            "flags": 768,
                            "start": 16,
                            "end": 23
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 23
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 25,
                        "end": 26
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 26
                },
                "flags": 256,
                "start": 0,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "(class B extends /crap/ {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

