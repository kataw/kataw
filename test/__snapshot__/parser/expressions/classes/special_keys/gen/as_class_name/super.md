# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: super
## Input

`````js
class super {}
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
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 5,
                "end": 5
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 203,
                "chain": {
                    "kind": 225,
                    "superKeyword": {
                        "kind": 4259935,
                        "flags": 0,
                        "start": 5,
                        "end": 11
                    },
                    "flags": 96,
                    "start": 5,
                    "end": 11
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 11,
                    "end": 11
                },
                "flags": 536870944,
                "start": 5,
                "end": 11
            },
            "flags": 16,
            "start": 5,
            "end": 11
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 11,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "class super {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 11
✖ 'super' must be followed by an argument list or member access. - start: 11, end: 13
✖ Dot property must be an identifier - start: 11, end: 13
✖ Expected a `;` - start: 11, end: 13

```

