# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as setter in class
> :: case: set
## Input

`````js
class x {set set(x){}}
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
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "set",
                                "autofix": 0,
                                "flags": 768,
                                "start": 12,
                                "end": 16
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 17,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 19
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 20,
                                    "end": 20
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 19,
                                "end": 21
                            },
                            "autofix": 0,
                            "flags": 4096,
                            "start": 16,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 21
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "class x {set set(x){}}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as setter in class
> :: case: set
## Input

`````js
class x {set set(x){}}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as setter in class
> :: case: set
## Input

`````js
class x {set set(x){}}
`````
```

