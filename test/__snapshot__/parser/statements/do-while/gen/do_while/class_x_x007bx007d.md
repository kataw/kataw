# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do while
> :: case: class x {}
## Input

`````js
do class x {} while
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 19,
                "end": 19
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 13,
                "end": 19
            },
            "statement": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 0,
                    "start": 2,
                    "end": 8
                },
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "typeParameters": null,
                "classHeritage": null,
                "members": {
                    "kind": 277,
                    "elements": [],
                    "flags": 32,
                    "start": 12,
                    "end": 13
                },
                "flags": 16,
                "start": 2,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "do class x {} while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Class declarations are not allowed in an arbitrary statement position. - start: 2, end: 8
✖ Expression expected - start: 19, end: 19

```

