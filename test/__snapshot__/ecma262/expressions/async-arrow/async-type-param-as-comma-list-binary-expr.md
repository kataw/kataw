# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
async  <T, U>(x) >> y - z;
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 0,
                            "end": 5
                        },
                        "operatorToken": {
                            "kind": 536971330,
                            "flags": 96,
                            "start": 5,
                            "end": 8
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 9
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "U",
                            "rawText": "U",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 16
                            },
                            "operatorToken": {
                                "kind": 35141,
                                "flags": 96,
                                "start": 16,
                                "end": 19
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 21
                                },
                                "operatorToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 21,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 25
                                },
                                "flags": 96,
                                "start": 21,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 25
                        },
                        "flags": 96,
                        "start": 10,
                        "end": 25
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": true,
    "source": "async  <T, U>(x) >> y - z;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

 async  < T, U > (x) >> y - z ;

```

### Diagnostics

```javascript
✔ No errors
```

