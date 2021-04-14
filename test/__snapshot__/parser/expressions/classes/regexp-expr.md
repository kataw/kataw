# Kataw parser test case

## Input

`````js
typeof class{}
/foo/
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259885,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 13,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 6,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/foo/",
                "flags": 768,
                "start": 14,
                "end": 20
            },
            "flags": 128,
            "start": 14,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "typeof class{}\n/foo/",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

