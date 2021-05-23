# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: y
> :: test: block with invalid array
> :: case: abstract class function !!
## Input

`````js
{ [catch] abstract class function !!
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 3
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 8
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 9,
                                "end": 9
                            },
                            "flags": 16,
                            "start": 9,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "abstract",
                            "rawText": "abstract",
                            "flags": 96,
                            "start": 9,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 9,
                        "end": 18
                    },
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 0,
                            "start": 18,
                            "end": 24
                        },
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 24,
                            "end": 24
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 262,
                                "elements": [
                                    {
                                        "kind": 280,
                                        "decorators": null,
                                        "declaredToken": null,
                                        "staticToken": null,
                                        "asyncKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "function",
                                            "rawText": "function",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 33
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 24,
                                        "end": 33
                                    }
                                ],
                                "flags": 32,
                                "start": 24,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 24,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 18,
                        "end": 33
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 64,
                                "start": 33,
                                "end": 35
                            },
                            "operand": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 64,
                                    "start": 35,
                                    "end": 36
                                },
                                "operand": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 36,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 36
                            },
                            "flags": 32,
                            "start": 33,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "{ [catch] abstract class function !!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 8
✖ 'try' expected - start: 3, end: 8
✖ Expected a `;` - start: 18, end: 24
✖ Binding identifier expected - start: 24, end: 33
✖ Expression expected - start: 33, end: 35
✖ Expression expected - start: 36, end: 36

```

