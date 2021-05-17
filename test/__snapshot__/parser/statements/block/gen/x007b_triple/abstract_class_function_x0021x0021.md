# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: abstract class function !!
## Input

`````js
{ { { abstract class function !!
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "abstract",
                                                    "rawText": "abstract",
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 14
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 14
                                            },
                                            {
                                                "kind": 178,
                                                "declareKeyword": null,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 0,
                                                    "start": 14,
                                                    "end": 20
                                                },
                                                "name": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 64,
                                                    "start": 20,
                                                    "end": 20
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
                                                                    "start": 20,
                                                                    "end": 29
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 32,
                                                                "start": 20,
                                                                "end": 29
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 20,
                                                        "end": 29
                                                    },
                                                    "flags": 32,
                                                    "start": 20,
                                                    "end": 29
                                                },
                                                "flags": 16,
                                                "start": 14,
                                                "end": 29
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 65584,
                                                        "flags": 64,
                                                        "start": 29,
                                                        "end": 31
                                                    },
                                                    "operand": {
                                                        "kind": 126,
                                                        "operandToken": {
                                                            "kind": 65584,
                                                            "flags": 64,
                                                            "start": 31,
                                                            "end": 32
                                                        },
                                                        "operand": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "flags": 64,
                                                            "start": 32,
                                                            "end": 32
                                                        },
                                                        "flags": 32,
                                                        "start": 31,
                                                        "end": 32
                                                    },
                                                    "flags": 32,
                                                    "start": 29,
                                                    "end": 32
                                                },
                                                "flags": 16,
                                                "start": 29,
                                                "end": 32
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 32
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "{ { { abstract class function !!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 14, end: 20
✖ Binding identifier expected - start: 20, end: 29
✖ The parser expected to find a '}' to match the '{' token here - start: 29, end: 31
✖ Expression expected - start: 32, end: 32

```

