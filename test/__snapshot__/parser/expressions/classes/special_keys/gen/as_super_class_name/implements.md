# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: implements
## Input

`````js
class x extends implements {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 81921,
                    "value": "implements",
                    "autofix": 0,
                    "flags": 768,
                    "start": 15,
                    "end": 26
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 26
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 28,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "class x extends implements {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: implements
## Input

`````js
class x extends implements {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: implements
## Input

`````js
class x extends implements {}
`````
```

