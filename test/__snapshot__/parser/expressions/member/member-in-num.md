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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 81921,
                        "text": 6,
                        "rawText": "6",
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 4,
                                "end": 6
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 3,
                                "end": 4
                            },
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 6,
                                "end": 7
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 7
                        },
                        "flags": 256,
                        "start": 2,
                        "end": 8
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "right": {
                    "kind": 81921,
                    "text": 3,
                    "rawText": "3",
                    "flags": 768,
                    "start": 11,
                    "end": 13
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "6[(x=>y)]in 3",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

