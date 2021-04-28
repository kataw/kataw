# Kataw parser test case

## Input

`````js
async (a = 1, b = 2) => x;
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
                "flags": 20,
                "start": 0,
                "end": 23
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 512,
                        "start": 8,
                        "end": 10
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 768,
                        "start": 10,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 12
                },
                {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 13,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 512,
                        "start": 15,
                        "end": 17
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 13,
                    "end": 19
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 512,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 23,
                "end": 25
            },
            "flags": 2304,
            "start": 0,
            "end": 25
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 25,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "async (a = 1, b = 2) => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

