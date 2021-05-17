# Kataw parser test case

## Input

`````js
class x extends y {
  constructor() {
    super?.(foo)
  }
}
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
                            "start": 19,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 35
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 0,
                                            "start": 47,
                                            "end": 49
                                        },
                                        "member": {
                                            "kind": 225,
                                            "superKeyword": {
                                                "kind": 4259935,
                                                "flags": 1,
                                                "start": 37,
                                                "end": 47
                                            },
                                            "flags": 96,
                                            "start": 37,
                                            "end": 47
                                        },
                                        "chain": {
                                            "kind": 206,
                                            "chain": {
                                                "kind": 204,
                                                "chain": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 50,
                                                            "end": 53
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 50,
                                                    "end": 53
                                                },
                                                "flags": 268435488,
                                                "start": 49,
                                                "end": 54
                                            },
                                            "flags": 32,
                                            "start": 49,
                                            "end": 54
                                        },
                                        "flags": 32,
                                        "start": 37,
                                        "end": 54
                                    },
                                    "flags": 16,
                                    "start": 37,
                                    "end": 54
                                }
                            ],
                            "flags": 17,
                            "start": 37,
                            "end": 54
                        },
                        "flags": 16,
                        "start": 35,
                        "end": 58
                    }
                ],
                "flags": 17,
                "start": 19,
                "end": 58
            },
            "flags": 16,
            "start": 17,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "class x extends y {\n  constructor() {\n    super?.(foo)\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 15
✖ Expected a `;` - start: 17, end: 19
✖ Expected a `;` - start: 35, end: 37
✖ 'super' must be followed by an argument list or member access. - start: 47, end: 49
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 47, end: 49

```

