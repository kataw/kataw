# Kataw parser test case

## Input

`````js
async (a, ...b) => a;
`````

## Output

### Hybrid CST

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
                "start": 15,
                "end": 18
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 7,
                    "end": 8
                },
                {
                    "kind": 223,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 0,
                        "start": 9,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 14
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 18,
                "end": 20
            },
            "flags": 290,
            "start": 0,
            "end": 20
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 20,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "async (a, ...b) => a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 15, end: 18

```

