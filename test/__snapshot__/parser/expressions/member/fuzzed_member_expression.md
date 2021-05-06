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
### CST

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
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 130,
                                "member": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 2
                                },
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 3,
                                            "end": 4
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 6
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 3,
                                    "end": 6
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 7
                            },
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            }
                        ],
                        "flags": 32,
                        "start": 0,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 10,
                    "end": 11
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 11,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "(2[x,x],x)>x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

