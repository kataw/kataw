# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: function x(async x, await y) {
## Input

`````js
{( function x(async x, await y) {
`````

## Output

### Hybrid CST

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
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 11
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 11,
                                    "end": 13
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 768,
                                                "start": 14,
                                                "end": 19
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 14,
                                            "end": 19
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 19,
                                                "end": 21
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 19,
                                            "end": 21
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 768,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 22,
                                            "end": 28
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 28,
                                                "end": 30
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 28,
                                            "end": 30
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 13,
                                    "end": 31
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 256,
                                    "start": 31,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 256,
                                "start": 2,
                                "end": 33
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 33
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 33
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "{( function x(async x, await y) {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 19, end: 21
✖ ',' expected - start: 28, end: 30

```

