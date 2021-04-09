# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: await = 0;
## Input

`````js
class C { await = 0; }
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
                "value": "C",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "key": {
                            "kind": 81921,
                            "value": "await",
                            "autofix": 0,
                            "flags": 768,
                            "start": 9,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": 0,
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 19
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "class C { await = 0; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 20,
            "end": 22
        }
    ],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: await = 0;
## Input

`````js
class C { await = 0; }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: await = 0;
## Input

`````js
class C { await = 0; }
`````
```

