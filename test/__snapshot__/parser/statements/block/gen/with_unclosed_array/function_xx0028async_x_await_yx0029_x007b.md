# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: y
> :: test: with unclosed array
> :: case: function x(async x, await y) {
## Options

`````js
{}
`````
## Input

`````js
{[ function x(async x, await y) {
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
                                "elements": [
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 2,
                                            "end": 11
                                        },
                                        "asteriskToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "async",
                                                    "rawText": "async",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 19
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 21
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 28
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 28,
                                                    "end": 30
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 13,
                                            "end": 31
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 33,
                                                "end": 33
                                            },
                                            "flags": 32,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "start": 2,
                                        "end": 33
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "{[ function x(async x, await y) {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 20, end: 21
✖ ',' expected - start: 29, end: 30
✖ The parser expected to find a '}' to match the '{' token here - start: 32, end: 33

```

