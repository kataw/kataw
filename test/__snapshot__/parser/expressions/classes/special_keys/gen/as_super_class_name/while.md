# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: while
## Input

`````js
class x extends while {}
`````

## Output

### CST

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
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 15,
                        "end": 15
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 15
                },
                "elements": [],
                "flags": 32,
                "start": 7,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 15,
                "end": 21
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 23,
                    "end": 23
                },
                "flags": 48,
                "start": 21,
                "end": 24
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 24,
                    "end": 24
                },
                "flags": 16,
                "start": 24,
                "end": 24
            },
            "flags": 16,
            "start": 15,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "class x extends while {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 15, end: 21
✖ Expected a ')' to match the '(' token here - start: 24, end: 24

```

