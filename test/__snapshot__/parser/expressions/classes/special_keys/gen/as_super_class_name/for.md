# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: for
## Input

`````js
class x extends for {}
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
                    "flags": 68,
                    "start": 15,
                    "end": 15
                },
                "typeParameter": null,
                "flags": 16,
                "start": 15,
                "end": 15
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 15,
                "end": 19
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 21,
                    "end": 21
                },
                "flags": 32,
                "start": 19,
                "end": 22
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 22,
                "end": 22
            },
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 22,
                "end": 22
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 22,
                    "end": 22
                },
                "flags": 16,
                "start": 22,
                "end": 22
            },
            "flags": 16,
            "start": 15,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "class x extends for {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 15, end: 19
✖ Expression expected - start: 22, end: 22

```

