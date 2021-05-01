# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: catch
## Input

`````js
class x extends catch {}
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
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 23,
                    "end": 23
                },
                "flags": 16,
                "start": 21,
                "end": 24
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
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
    "source": "class x extends catch {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 15, end: 21
✖ 'try' expected - start: 15, end: 21

```

