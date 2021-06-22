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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "arrowPatameterList": [],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
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
                    "flags": 96,
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
            "flags": 288,
            "start": 0,
            "end": 24
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 24,
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

```

