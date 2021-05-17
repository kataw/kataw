# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: abstract class function !!
## Input

`````js
{ abstract class function !!
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
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "abstract",
                            "rawText": "abstract",
                            "flags": 96,
                            "start": 1,
                            "end": 10
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 10
                    },
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 0,
                            "start": 10,
                            "end": 16
                        },
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 16,
                            "end": 16
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
                                            "start": 16,
                                            "end": 25
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 16,
                                        "end": 25
                                    }
                                ],
                                "flags": 32,
                                "start": 16,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 10,
                        "end": 25
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 64,
                                "start": 25,
                                "end": 27
                            },
                            "operand": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 28
                                },
                                "operand": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 27,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 25,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 25,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "{ abstract class function !!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 10, end: 16
✖ Binding identifier expected - start: 16, end: 25
✖ The parser expected to find a '}' to match the '{' token here - start: 25, end: 27
✖ Expression expected - start: 28, end: 28

```

