# Kataw parser test case

## Input

`````js
async () => await 5 ** 6;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 90224,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 19
                                },
                                "operatorToken": {
                                    "kind": 35897,
                                    "flags": 64,
                                    "start": 19,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 6,
                                    "rawText": "6",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 24
                            },
                            "flags": 16,
                            "start": 11,
                            "end": 25
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 25
                },
                "flags": 32,
                "start": 11,
                "end": 25
            },
            "flags": 288,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "async () => await 5 ** 6;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses - start: 19, end: 22
✖ The parser expected to find a '}' to match the '{' token here - start: 25, end: 25

```

