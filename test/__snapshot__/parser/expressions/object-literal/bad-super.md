# Kataw parser test case

## Input

`````js
class x extends y {constructor(){    ({"foo": super}) => x    }}
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
                                "end": 30
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 31,
                                "end": 31
                            },
                            "flags": 268435488,
                            "start": 19,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 32
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 0,
                                            "start": 53,
                                            "end": 56
                                        },
                                        "typeParameters": null,
                                        "parameters": [
                                            {
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
                                                                "start": 39,
                                                                "end": 44
                                                            },
                                                            "right": {
                                                                "kind": 203,
                                                                "chain": {
                                                                    "kind": 225,
                                                                    "superKeyword": {
                                                                        "kind": 4259935,
                                                                        "flags": 0,
                                                                        "start": 45,
                                                                        "end": 51
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 45,
                                                                    "end": 51
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "flags": 64,
                                                                    "start": 51,
                                                                    "end": 51
                                                                },
                                                                "flags": 536870944,
                                                                "start": 45,
                                                                "end": 51
                                                            },
                                                            "flags": 32,
                                                            "start": 39,
                                                            "end": 51
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "start": 39,
                                                    "end": 51
                                                },
                                                "flags": 48,
                                                "start": 38,
                                                "end": 52
                                            }
                                        ],
                                        "asyncKeyword": null,
                                        "returnType": null,
                                        "contents": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 56,
                                            "end": 58
                                        },
                                        "flags": 34,
                                        "start": 33,
                                        "end": 58
                                    },
                                    "flags": 16,
                                    "start": 33,
                                    "end": 58
                                }
                            ],
                            "flags": 16,
                            "start": 33,
                            "end": 58
                        },
                        "flags": 16,
                        "start": 32,
                        "end": 63
                    }
                ],
                "flags": 16,
                "start": 19,
                "end": 63
            },
            "flags": 16,
            "start": 17,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "class x extends y {constructor(){    ({\"foo\": super}) => x    }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 15
✖ Expected a `;` - start: 17, end: 19
✖ Expected a `;` - start: 32, end: 33
✖ 'super' must be followed by an argument list or member access. - start: 51, end: 52
✖ Dot property must be an identifier - start: 51, end: 52
✖ The left hand side of the arrow is not destructible  - start: 53, end: 56

```

