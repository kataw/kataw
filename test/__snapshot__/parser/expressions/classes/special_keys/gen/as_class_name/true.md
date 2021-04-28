# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: true
## Input

`````js
class true {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 5,
                "end": 5
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134,
                "text": true,
                "flags": 768,
                "start": 5,
                "end": 10
            },
            "flags": 128,
            "start": 5,
            "end": 10
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 12,
                "end": 12
            },
            "flags": 128,
            "start": 10,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "class true {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 10

```

