# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: delete x
## Input

`````js
class A extends delete x {}
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
                    "kind": 126,
                    "operandToken": {
                        "kind": 4259886,
                        "autofix": 0,
                        "flags": 0,
                        "start": 15,
                        "end": 22
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 22,
                        "end": 24
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 24
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 24
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 26,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "class A extends delete x {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 43,
            "error": "'delete' cannot be called on an identifier in strict mode.",
            "start": 24,
            "end": 26
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: delete x
## Input

`````js
class A extends delete x {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: delete x
## Input

`````js
class A extends delete x {}
`````
```

