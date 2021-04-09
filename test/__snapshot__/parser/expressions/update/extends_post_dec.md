# Kataw parser test case

## Input

`````js
class x extends a-- {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196636,
                        "autofix": 0,
                        "flags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 15,
                        "end": 17
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 19
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 19
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 21,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "class x extends a-- {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

