# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: set #await(test) {}
## Input

`````js
class C extends Base { set #await(test) {} }
`````

## Output

### CST

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
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Base",
                "rawText": "Base",
                "flags": 96,
                "start": 15,
                "end": 20
            },
            "flags": 16,
            "start": 15,
            "end": 20
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
                            "start": 22,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 22,
                        "end": 26
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 67174651,
                                "text": "#await",
                                "flags": 96,
                                "start": 26,
                                "end": 33
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "test",
                                        "rawText": "test",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 38
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 34,
                                "end": 38
                            },
                            "flags": 268435488,
                            "start": 26,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 26,
                        "end": 39
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 41,
                            "end": 41
                        },
                        "flags": 16,
                        "start": 39,
                        "end": 42
                    }
                ],
                "flags": 16,
                "start": 22,
                "end": 42
            },
            "flags": 16,
            "start": 20,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "class C extends Base { set #await(test) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 15
✖ Expected a `;` - start: 20, end: 22
✖ Expected a `;` - start: 26, end: 33
✖ Private identifiers are not allowed outside class_bodies - start: 26, end: 33
✖ Expected a `;` - start: 39, end: 41

```

