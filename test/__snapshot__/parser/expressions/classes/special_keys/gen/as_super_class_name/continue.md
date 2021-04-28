# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: continue
## Input

`````js
class x extends continue {}
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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 15,
                    "end": 15
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 15
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 768,
                "start": 15,
                "end": 24
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 24,
                "end": 24
            },
            "flags": 128,
            "start": 15,
            "end": 24
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 26,
                "end": 26
            },
            "flags": 128,
            "start": 24,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "class x extends continue {}",
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
✖ Expression expected - start: 15, end: 24
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 15, end: 24
✖ Expression expected - start: 24, end: 26

```

