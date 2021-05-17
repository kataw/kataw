# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: abstract class function !!
## Input

`````js
{( abstract class function !!
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
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 32,
                                "start": 1,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 11
                    },
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 0,
                            "start": 11,
                            "end": 17
                        },
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 17,
                            "end": 17
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
                                            "start": 17,
                                            "end": 26
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 17,
                                        "end": 26
                                    }
                                ],
                                "flags": 32,
                                "start": 17,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 11,
                        "end": 26
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 64,
                                "start": 26,
                                "end": 28
                            },
                            "operand": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 64,
                                    "start": 28,
                                    "end": 29
                                },
                                "operand": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 28,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 26,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 26,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "{( abstract class function !!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 11, end: 17
✖ Binding identifier expected - start: 17, end: 26
✖ The parser expected to find a '}' to match the '{' token here - start: 26, end: 28
✖ Expression expected - start: 29, end: 29

```

