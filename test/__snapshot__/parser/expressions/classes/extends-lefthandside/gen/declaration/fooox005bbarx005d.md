# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: fooo[bar]
## Input

`````js
class A extends fooo[bar] {}
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
                "value": "A",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 81921,
                        "value": "fooo",
                        "autofix": 0,
                        "flags": 768,
                        "start": 15,
                        "end": 20
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "bar",
                        "autofix": 0,
                        "flags": 768,
                        "start": 21,
                        "end": 24
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 25
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 25
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 27,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "class A extends fooo[bar] {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: fooo[bar]
## Input

`````js
class A extends fooo[bar] {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: fooo[bar]
## Input

`````js
class A extends fooo[bar] {}
`````
```

