# Kataw parser test case

## Input

`````js
 [/*1*/a,/*2*/b/*3*/=/*4*/c, , , /*5*/]

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
                            "start": 2,
                            "end": 8
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 9,
                                "end": 15
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 15,
                                "end": 21
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 21,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 27
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 28,
                            "end": 28
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 30,
                            "end": 30
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 2,
                    "end": 32
                },
                "flags": 32,
                "start": 0,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": " [/*1*/a,/*2*/b/*3*/=/*4*/c, , , /*5*/]\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

[/*1*/ a, /*2*/ b /*3*/ = c, , ,] /*5*/;
```

### Diagnostics

```javascript
✔ No errors
```

