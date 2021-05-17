# Kataw parser test case

## Input

`````js
class x extends y { constructor() { let xx = x + x; super.mom; } }
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
                                    "kind": 162,
                                    "lexicalKeyword": {
                                        "kind": 41951307,
                                        "flags": 80,
                                        "start": 35,
                                        "end": 39
                                    },
                                    "binding": {
                                        "kind": 151,
                                        "bindingList": [
                                            {
                                                "kind": 190,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "xx",
                                                    "rawText": "xx",
                                                    "flags": 96,
                                                    "start": 39,
                                                    "end": 42
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 44,
                                                        "end": 46
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34098,
                                                        "flags": 64,
                                                        "start": 46,
                                                        "end": 48
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 48,
                                                        "end": 50
                                                    },
                                                    "flags": 32,
                                                    "start": 44,
                                                    "end": 50
                                                },
                                                "flags": 16,
                                                "start": 39,
                                                "end": 50
                                            }
                                        ],
                                        "flags": 33554448,
                                        "start": 39,
                                        "end": 50
                                    },
                                    "flags": 33554448,
                                    "start": 35,
                                    "end": 51
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
                                                "start": 51,
                                                "end": 57
                                            },
                                            "flags": 96,
                                            "start": 51,
                                            "end": 57
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "mom",
                                            "rawText": "mom",
                                            "flags": 96,
                                            "start": 58,
                                            "end": 61
                                        },
                                        "flags": 536870944,
                                        "start": 51,
                                        "end": 61
                                    },
                                    "flags": 16,
                                    "start": 51,
                                    "end": 62
                                }
                            ],
                            "flags": 16,
                            "start": 35,
                            "end": 62
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 64
                    }
                ],
                "flags": 16,
                "start": 19,
                "end": 64
            },
            "flags": 16,
            "start": 17,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "class x extends y { constructor() { let xx = x + x; super.mom; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 66
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
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 57, end: 58

```

