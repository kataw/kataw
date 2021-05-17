# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: object with number key
> :: case: super[cool]
## Input

`````js
class x extends y {
  constructor() {
    ({123: super[cool]})
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
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 201392130,
                                                            "text": 123,
                                                            "rawText": "123",
                                                            "flags": 96,
                                                            "start": 44,
                                                            "end": 47
                                                        },
                                                        "right": {
                                                            "kind": 536871042,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 0,
                                                                    "start": 48,
                                                                    "end": 54
                                                                },
                                                                "flags": 96,
                                                                "start": 48,
                                                                "end": 54
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "cool",
                                                                "rawText": "cool",
                                                                "flags": 96,
                                                                "start": 55,
                                                                "end": 59
                                                            },
                                                            "flags": 32,
                                                            "start": 44,
                                                            "end": 60
                                                        },
                                                        "flags": 32,
                                                        "start": 44,
                                                        "end": 60
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 44,
                                                "end": 60
                                            },
                                            "flags": 48,
                                            "start": 43,
                                            "end": 61
                                        },
                                        "flags": 32,
                                        "start": 37,
                                        "end": 62
                                    },
                                    "flags": 16,
                                    "start": 37,
                                    "end": 62
                                }
                            ],
                            "flags": 17,
                            "start": 37,
                            "end": 62
                        },
                        "flags": 16,
                        "start": 35,
                        "end": 66
                    }
                ],
                "flags": 17,
                "start": 19,
                "end": 66
            },
            "flags": 16,
            "start": 17,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "class x extends y {\n  constructor() {\n    ({123: super[cool]})\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
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
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 54, end: 55

```

