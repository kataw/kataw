# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: extends arg
> :: case: async x => ok
## Input

`````js
class A extends async x => ok {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 23,
                        "end": 26
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 21,
                                "end": 23
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 256,
                            "start": 15,
                            "end": 23
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 15,
                        "end": 21
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 768,
                        "start": 26,
                        "end": 29
                    },
                    "flags": 2304,
                    "start": 15,
                    "end": 29
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 29
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 31,
                "end": 32
            },
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "class A extends async x => ok {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

