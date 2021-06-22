# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/binary/gen/rest_param_destructuring
> :: test: rest param destructuring
> :: case: a + b / c
## Options

`````js
{}
`````
## Input

`````js
([ ... a + b / c ]) => x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 2,
                                            "end": 6
                                        },
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 6,
                                                "end": 8
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "start": 8,
                                                "end": 10
                                            },
                                            "right": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 10,
                                                    "end": 12
                                                },
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "flags": 96,
                                                    "start": 12,
                                                    "end": 14
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 16
                                                },
                                                "flags": 32,
                                                "start": 12,
                                                "end": 16
                                            },
                                            "flags": 32,
                                            "start": 6,
                                            "end": 16
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "start": 2,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2,
                    "start": 1,
                    "end": 19
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 19,
                    "end": 22
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 22,
                    "end": 24
                },
                "flags": 34,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "([ ... a + b / c ]) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 19, end: 22

```

