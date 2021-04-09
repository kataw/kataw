# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as regular property in class
> :: case: catch
## Input

`````js
class x {catch: x}
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
                            "value": "catch",
                            "autofix": 0,
                            "flags": 768,
                            "start": 9,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 15,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "autofix": 0,
                                "flags": 0,
                                "start": 15,
                                "end": 17
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 14,
                            "end": 17
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 17
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "class x {catch: x}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as regular property in class
> :: case: catch
## Input

`````js
class x {catch: x}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as regular property in class
> :: case: catch
## Input

`````js
class x {catch: x}
`````
```

