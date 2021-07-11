# Kataw parser test case

## Input

`````js
  [/*1*/a,/*2*/b/*3*/=/*4*/c]

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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 10,
                                "end": 16
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 16,
                                "end": 22
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 22,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 3,
                    "end": 28
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "  [/*1*/a,/*2*/b/*3*/=/*4*/c]\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

[/*1*/a, /*2*/b /*3*/ =/*4*/ c,];

```

### Diagnostics

```javascript
✔ No errors
```

