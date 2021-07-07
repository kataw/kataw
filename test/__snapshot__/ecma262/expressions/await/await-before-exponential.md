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
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 208,
                        "awaitKeyword": {
                            "kind": 82196,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 17
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 11,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 22
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 6,
                        "rawText": "6",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 32,
                    "transformFlags": 5120,
                    "start": 11,
                    "end": 24
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "async () => await 5 ** 6;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

```

