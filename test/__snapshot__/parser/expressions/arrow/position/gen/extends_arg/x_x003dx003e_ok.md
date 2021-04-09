# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: extends arg
> :: case: x => ok
## Input

`````js
class A extends x => ok {}
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
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 15,
                        "end": 17
                    },
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 81921,
                        "value": "ok",
                        "autofix": 0,
                        "flags": 768,
                        "start": 20,
                        "end": 23
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 23
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 23
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 25,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "class A extends x => ok {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: extends arg
> :: case: x => ok
## Input

`````js
class A extends x => ok {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: extends arg
> :: case: x => ok
## Input

`````js
class A extends x => ok {}
`````
```

