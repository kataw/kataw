# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: set static(v) {}
## Input

`````js
(class extends Base {set static(v) {}});
`````

## Output

### CST

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
                        "kind": 37822544,
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 1,
                        "end": 1
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Base",
                "rawText": "Base",
                "flags": 96,
                "start": 14,
                "end": 19
            },
            "flags": 16,
            "start": 14,
            "end": 19
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "set",
                            "rawText": "set",
                            "flags": 96,
                            "start": 21,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 21,
                        "end": 24
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "start": 24,
                                "end": 31
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "v",
                                        "rawText": "v",
                                        "flags": 96,
                                        "start": 32,
                                        "end": 33
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 32,
                                "end": 33
                            },
                            "flags": 268435488,
                            "start": 24,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 24,
                        "end": 34
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 36,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 34,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 21,
                "end": 37
            },
            "flags": 16,
            "start": 19,
            "end": 38
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 39,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "(class extends Base {set static(v) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 6, end: 14
✖ Expected a `;` - start: 19, end: 21
✖ Expected a `;` - start: 24, end: 31
✖ Expected a `;` - start: 34, end: 36
✖ Declaration or statement expected - start: 38, end: 39

```

