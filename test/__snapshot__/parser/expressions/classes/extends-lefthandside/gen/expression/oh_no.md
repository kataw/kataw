# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: oh,no
## Input

`````js
(class B extends oh,no {})
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
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 1,
                                "end": 6
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "start": 6,
                                "end": 8
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 0,
                                    "start": 8,
                                    "end": 16
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "oh",
                                    "rawText": "oh",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 19
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "start": 16,
                                "end": 19
                            },
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 32,
                                "start": 1,
                                "end": 1
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 19
                        },
                        {
                            "kind": 134299649,
                            "text": "no",
                            "rawText": "no",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 24,
                "end": 24
            },
            "flags": 16,
            "start": 22,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "(class B extends oh,no {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 25, end: 26

```

