# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: { stand alone
> :: case: function * await(yield x) ; {
## Input

`````js
{ function * await(yield x) ; {
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
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 0,
                            "start": 1,
                            "end": 10
                        },
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 10,
                            "end": 12
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 12,
                            "end": 18
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 24
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 19,
                                    "end": 24
                                },
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 24,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 18,
                            "end": 27
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 27,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 27,
                            "end": 27
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 272,
                        "start": 1,
                        "end": 27
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "start": 27,
                        "end": 29
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 31,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 29,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "{ function * await(yield x) ; {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `Yield` expression cannot be used in function parameters - start: 19, end: 24
✖ ',' expected - start: 24, end: 26
✖ Missing an opening brace - '{ - start: 27, end: 29
✖ Expression expected - start: 27, end: 29
✖ The parser expected to find a '}' to match the '{' token here - start: 31, end: 31

```

