# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: new.target
## Input

`````js
(class B extends new.target {})
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 1,
                        "end": 1
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 211,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 0,
                    "start": 16,
                    "end": 20
                },
                "targetIdentifier": {
                    "kind": 16594,
                    "flags": 0,
                    "start": 21,
                    "end": 27
                },
                "flags": 96,
                "start": 16,
                "end": 27
            },
            "flags": 16,
            "start": 16,
            "end": 27
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 29,
                "end": 29
            },
            "flags": 16,
            "start": 27,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "(class B extends new.target {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 8, end: 16
✖ 'new.target' only allowed within functions - start: 27, end: 29
✖ Expected a `;` - start: 27, end: 29
✖ Declaration or statement expected - start: 30, end: 31

```

