# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: static get x() {}
## Input

`````js
(class extends Base {static get x() {}});
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
                            "text": "static",
                            "rawText": "static",
                            "flags": 96,
                            "start": 21,
                            "end": 27
                        },
                        "flags": 16,
                        "start": 21,
                        "end": 27
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "get",
                            "rawText": "get",
                            "flags": 96,
                            "start": 27,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 27,
                        "end": 31
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 31,
                                "end": 33
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 34,
                                "end": 34
                            },
                            "flags": 268435488,
                            "start": 31,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 31,
                        "end": 35
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 37,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 35,
                        "end": 38
                    }
                ],
                "flags": 16,
                "start": 21,
                "end": 38
            },
            "flags": 16,
            "start": 19,
            "end": 39
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 40,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "(class extends Base {static get x() {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 6, end: 14
✖ Expected a `;` - start: 19, end: 21
✖ Expected a `;` - start: 27, end: 31
✖ Expected a `;` - start: 31, end: 33
✖ Expected a `;` - start: 35, end: 37
✖ Declaration or statement expected - start: 39, end: 40

```

