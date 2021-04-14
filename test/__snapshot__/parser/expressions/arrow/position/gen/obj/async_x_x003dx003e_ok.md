# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: j
> :: test: obj
> :: case: async x => ok
## Input

`````js
x = {arrow: async x => ok}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 768,
                                        "start": 19,
                                        "end": 22
                                    },
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 17,
                                                "end": 19
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 11,
                                            "end": 19
                                        }
                                    ],
                                    "asyncToken": {
                                        "kind": 82031,
                                        "flags": 768,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 81921,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 768,
                                        "start": 22,
                                        "end": 25
                                    },
                                    "flags": 2304,
                                    "start": 11,
                                    "end": 25
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "arrow",
                                    "rawText": "arrow",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 10
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 26
                },
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "x = {arrow: async x => ok}",
    "fileName": "__root__",
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
- Path: j
> :: test: obj
> :: case: async x => ok
## Input

`````js
x = {arrow: async x => ok}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: j
> :: test: obj
> :: case: async x => ok
## Input

`````js
x = {arrow: async x => ok}
`````
```

