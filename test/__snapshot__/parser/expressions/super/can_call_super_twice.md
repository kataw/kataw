# Kataw parser test case

## Input

`````js
class x extends y { constructor() { super.mom; super.mom; } }
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
                "text": "x",
                "rawText": "x",
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
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 17
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 96,
                                "start": 19,
                                "end": 31
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 32,
                                "end": 32
                            },
                            "flags": 268435488,
                            "start": 19,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 33
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 225,
                                            "superKeyword": {
                                                "kind": 4259935,
                                                "flags": 0,
                                                "start": 35,
                                                "end": 41
                                            },
                                            "flags": 96,
                                            "start": 35,
                                            "end": 41
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "mom",
                                            "rawText": "mom",
                                            "flags": 96,
                                            "start": 42,
                                            "end": 45
                                        },
                                        "flags": 536870944,
                                        "start": 35,
                                        "end": 45
                                    },
                                    "flags": 16,
                                    "start": 35,
                                    "end": 46
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 225,
                                            "superKeyword": {
                                                "kind": 4259935,
                                                "flags": 0,
                                                "start": 46,
                                                "end": 52
                                            },
                                            "flags": 96,
                                            "start": 46,
                                            "end": 52
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "mom",
                                            "rawText": "mom",
                                            "flags": 96,
                                            "start": 53,
                                            "end": 56
                                        },
                                        "flags": 536870944,
                                        "start": 46,
                                        "end": 56
                                    },
                                    "flags": 16,
                                    "start": 46,
                                    "end": 57
                                }
                            ],
                            "flags": 16,
                            "start": 35,
                            "end": 57
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 59
                    }
                ],
                "flags": 16,
                "start": 19,
                "end": 59
            },
            "flags": 16,
            "start": 17,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "class x extends y { constructor() { super.mom; super.mom; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 15
✖ Expected a `;` - start: 17, end: 19
✖ Expected a `;` - start: 33, end: 35
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 41, end: 42
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 52, end: 53

```

