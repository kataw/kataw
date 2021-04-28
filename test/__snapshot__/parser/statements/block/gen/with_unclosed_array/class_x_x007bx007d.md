# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: class x {}
## Input

`````js
{[ class x {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 2,
                                            "start": 0,
                                            "end": 8
                                        },
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "typeParameters": null,
                                        "classHeritage": null,
                                        "members": {
                                            "kind": 277,
                                            "elements": [],
                                            "flags": 256,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 13
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 13
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "{[ class x {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 13, end: 13

```

