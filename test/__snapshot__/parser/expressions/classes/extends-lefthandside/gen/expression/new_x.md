# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: new x
## Input

`````js
(class B extends new x {})
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
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 16,
                                "start": 0,
                                "end": 20
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 20,
                                "end": 22
                            },
                            "argumentList": null,
                            "flags": 256,
                            "start": 16,
                            "end": 22
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 22
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 24,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "(class B extends new x {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
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

