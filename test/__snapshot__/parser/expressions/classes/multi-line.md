# Kataw parser test case

## Input

`````js
class C extends (
  a,
  c
) {
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "C",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 17,
                                "end": 21
                            },
                            {
                                "kind": 81921,
                                "value": "c",
                                "autofix": 0,
                                "flags": 768,
                                "start": 22,
                                "end": 26
                            }
                        ],
                        "autofix": 0,
                        "flags": 256,
                        "start": 15,
                        "end": 28
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 28
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 28
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 30,
                "end": 32
            },
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "class C extends (\n  a,\n  c\n) {\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

