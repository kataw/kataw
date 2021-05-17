# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration_paren
> :: case: set #await(test) {}
## Input

`````js
(class extends Base { set #await(test) {} });
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
                            "end": 25
                        },
                        "flags": 16,
                        "start": 21,
                        "end": 25
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 67174651,
                                "text": "#await",
                                "flags": 96,
                                "start": 25,
                                "end": 32
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "test",
                                        "rawText": "test",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 37
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 33,
                                "end": 37
                            },
                            "flags": 268435488,
                            "start": 25,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 25,
                        "end": 38
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 40,
                            "end": 40
                        },
                        "flags": 16,
                        "start": 38,
                        "end": 41
                    }
                ],
                "flags": 16,
                "start": 21,
                "end": 41
            },
            "flags": 16,
            "start": 19,
            "end": 43
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 44,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "(class extends Base { set #await(test) {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 6, end: 14
✖ Expected a `;` - start: 19, end: 21
✖ Expected a `;` - start: 25, end: 32
✖ Private identifiers are not allowed outside class_bodies - start: 25, end: 32
✖ Expected a `;` - start: 38, end: 40
✖ Declaration or statement expected - start: 43, end: 44

```

