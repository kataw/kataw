# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: destructuring with string key
> :: case: super[cool]
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super[cool]} = x)
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
                                        "kind": 121,
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "generatorToken": null,
                                                            "left": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "\"foo\"",
                                                                "flags": 96,
                                                                "start": 44,
                                                                "end": 49
                                                            },
                                                            "right": {
                                                                "kind": 536871042,
                                                                "member": {
                                                                    "kind": 225,
                                                                    "superKeyword": {
                                                                        "kind": 4259935,
                                                                        "flags": 0,
                                                                        "start": 50,
                                                                        "end": 56
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 50,
                                                                    "end": 56
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "cool",
                                                                    "rawText": "cool",
                                                                    "flags": 96,
                                                                    "start": 57,
                                                                    "end": 61
                                                                },
                                                                "flags": 32,
                                                                "start": 44,
                                                                "end": 62
                                                            },
                                                            "flags": 32,
                                                            "start": 44,
                                                            "end": 62
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "start": 44,
                                                    "end": 62
                                                },
                                                "flags": 48,
                                                "start": 43,
                                                "end": 63
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 64,
                                                "start": 63,
                                                "end": 65
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 65,
                                                "end": 67
                                            },
                                            "flags": 32,
                                            "start": 43,
                                            "end": 67
                                        },
                                        "flags": 32,
                                        "start": 37,
                                        "end": 68
                                    },
                                    "flags": 16,
                                    "start": 37,
                                    "end": 68
                                }
                            ],
                            "flags": 17,
                            "start": 37,
                            "end": 68
                        },
                        "flags": 16,
                        "start": 35,
                        "end": 72
                    }
                ],
                "flags": 17,
                "start": 19,
                "end": 72
            },
            "flags": 16,
            "start": 17,
            "end": 74
        }
    ],
    "isModule": false,
    "source": "class x extends y {\n  constructor() {\n    ({\"foo\": super[cool]} = x)\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 74
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
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 56, end: 57

```

