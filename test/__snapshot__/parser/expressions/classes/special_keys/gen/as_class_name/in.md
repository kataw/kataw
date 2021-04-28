# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: in
## Input

`````js
class in {}
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
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 5,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 5,
                    "start": 512,
                    "end": 8
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 11
                },
                "flags": 256,
                "start": 5,
                "end": 11
            },
            "flags": 128,
            "start": 5,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "class in {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 8
✖ Expression expected - start: 5, end: 8

```

