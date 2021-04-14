# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: new.target
## Input

`````js
(class B extends new.target {})
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37814352,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 81921,
                        "text": "B",
                        "rawText": "B",
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsToken": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 8,
                            "end": 16
                        },
                        "expression": {
                            "kind": 211,
                            "name": {
                                "kind": 81921,
                                "text": "target",
                                "rawText": "target",
                                "flags": 768,
                                "start": 21,
                                "end": 27
                            },
                            "flags": 768,
                            "start": 16,
                            "end": 27
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 27
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 29,
                        "end": 30
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 30
                },
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "(class B extends new.target {})",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 80,
            "error": "'new.target' only allowed within functions",
            "start": 21,
            "end": 27
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
> :: test: expression
> :: case: new.target
## Input

`````js
(class B extends new.target {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: new.target
## Input

`````js
(class B extends new.target {})
`````
```

