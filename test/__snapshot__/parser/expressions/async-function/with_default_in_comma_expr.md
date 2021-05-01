# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
x, [foo = y, bar] = doo
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "original": "x",
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "original": "foo",
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 4,
                                            "end": 7
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "original": "y",
                                            "text": "y",
                                            "rawText": " y",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "flags": 32,
                                        "start": 4,
                                        "end": 11
                                    },
                                    {
                                        "kind": 134299649,
                                        "original": "bar",
                                        "text": "bar",
                                        "rawText": " bar",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 4,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 17
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 134299649,
                            "original": "doo",
                            "text": "doo",
                            "rawText": " doo",
                            "flags": 96,
                            "start": 19,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 23
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": true,
    "source": "x, [foo = y, bar] = doo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
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

