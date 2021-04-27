# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: continue
## Input

`````js
class continue {}
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
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 14,
                "end": 14
            },
            "flags": 128,
            "start": 5,
            "end": 14
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 16,
                "end": 16
            },
            "flags": 128,
            "start": 14,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "class continue {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Binding identifier expected - start: 5, end: 14
@{x2716}@ A 'continue' statement can only be used within an enclosing iteration statement. - start: 5, end: 14
@{x2716}@ Expression expected - start: 14, end: 16

```

