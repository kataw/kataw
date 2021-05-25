# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: y
> :: test: with unclosed array
> :: case: async class
## Input

`````js
{[ async class
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 8
                                    },
                                    {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 0,
                                            "start": 8,
                                            "end": 14
                                        },
                                        "name": null,
                                        "typeParameters": null,
                                        "tail": {
                                            "kind": 277,
                                            "classHeritage": null,
                                            "body": {
                                                "kind": 262,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "flags": 14,
                                            "start": 32,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "start": 8,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "{[ async class",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 8, end: 14

```

