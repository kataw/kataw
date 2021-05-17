# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration_paren
> :: case: async *#arguments() {}
## Input

`````js
(class extends Base { async *#arguments() {} });
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
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 21,
                                "end": 27
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 27,
                                "end": 29
                            },
                            "right": {
                                "kind": 131,
                                "expression": {
                                    "kind": 67174651,
                                    "text": "#arguments",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 39
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 40,
                                    "end": 40
                                },
                                "flags": 268435488,
                                "start": 29,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 41
                        },
                        "flags": 16,
                        "start": 21,
                        "end": 41
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 43,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 41,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 21,
                "end": 44
            },
            "flags": 16,
            "start": 19,
            "end": 46
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 47,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "(class extends Base { async *#arguments() {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 6, end: 14
✖ Expected a `;` - start: 19, end: 21
✖ Private identifiers are not allowed outside class_bodies - start: 29, end: 39
✖ Expected a `;` - start: 41, end: 43
✖ Declaration or statement expected - start: 46, end: 47

```

