# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
(2[x,x],x)>x
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
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 130,
                                "member": {
                                    "kind": 81921,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 768,
                                    "start": 1,
                                    "end": 2
                                },
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 3,
                                            "end": 4
                                        },
                                        {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 5,
                                            "end": 6
                                        }
                                    ],
                                    "flags": 256,
                                    "start": 3,
                                    "end": 6
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 7
                            },
                            {
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 8,
                                "end": 9
                            }
                        ],
                        "flags": 256,
                        "start": 0,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 768,
                    "start": 10,
                    "end": 11
                },
                "right": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 11,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "(2[x,x],x)>x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

