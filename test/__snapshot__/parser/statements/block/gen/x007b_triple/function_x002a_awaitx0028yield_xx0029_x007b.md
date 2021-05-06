# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: function * await(yield x) ; {
## Input

`````js
{ { { function * await(yield x) ; {
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
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 0,
                                                    "start": 5,
                                                    "end": 14
                                                },
                                                "generatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 14,
                                                    "end": 16
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 22
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
                                                                "start": 23,
                                                                "end": 28
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 23,
                                                            "end": 28
                                                        },
                                                        {
                                                            "kind": 215,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 28,
                                                                "end": 30
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 28,
                                                            "end": 30
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 22,
                                                    "end": 31
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 31,
                                                        "end": 31
                                                    },
                                                    "flags": 32,
                                                    "start": 31,
                                                    "end": 31
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 272,
                                                "start": 5,
                                                "end": 31
                                            },
                                            {
                                                "kind": 168,
                                                "flags": 16,
                                                "start": 31,
                                                "end": 33
                                            },
                                            {
                                                "kind": 249,
                                                "block": {
                                                    "kind": 124,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 35,
                                                    "end": 35
                                                },
                                                "flags": 16,
                                                "start": 33,
                                                "end": 35
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 35
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 35
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "{ { { function * await(yield x) ; {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'yield' cannot be used as an identifier here - start: 23, end: 28
✖ ',' expected - start: 28, end: 30
✖ Unexpected token. - start: 31, end: 33
✖ The parser expected to find a '}' to match the '{' token here - start: 35, end: 35

```

