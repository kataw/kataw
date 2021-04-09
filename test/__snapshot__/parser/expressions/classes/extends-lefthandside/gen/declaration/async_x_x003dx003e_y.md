# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async
>          x => y
## Input

`````js
class A extends async
x => y {}
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
                    "kind": 81921,
                    "value": "async",
                    "autofix": 0,
                    "flags": 768,
                    "start": 15,
                    "end": 21
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 21
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
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 26,
                    "end": 28
                },
                "autofix": 0,
                "flags": 256,
                "start": 21,
                "end": 28
            },
            "autofix": 0,
            "flags": 128,
            "start": 21,
            "end": 28
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 30,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 28,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "class A extends async\nx => y {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28,
            "end": 30
        }
    ],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async
>          x => y
## Input

`````js
class A extends async
x => y {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async
>          x => y
## Input

`````js
class A extends async
x => y {}
`````
```

