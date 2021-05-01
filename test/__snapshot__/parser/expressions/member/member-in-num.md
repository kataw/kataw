# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
6[(x=>y)]in 3
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 201392130,
                        "text": 6,
                        "original": "6",
                        "rawText": "6",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 4,
                                "end": 6
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "original": "x",
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 3,
                                "end": 4
                            },
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "original": "y",
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 6,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 7
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 8
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 64,
                    "start": 9,
                    "end": 11
                },
                "right": {
                    "kind": 201392130,
                    "text": 3,
                    "original": "3",
                    "rawText": " 3",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "6[(x=>y)]in 3",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
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

