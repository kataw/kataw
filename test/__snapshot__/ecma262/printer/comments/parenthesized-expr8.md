# Kataw parser test case

## Input

`````js
(/*1*/(/*2*/(x/*1*/=/*2*/y)/*3*/)/*4*/)

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
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 20
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 7,
                            "end": 26
                        },
                        "flags": 7,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 27
                    },
                    "flags": 1,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 33
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "(/*1*/(/*2*/(x/*1*/=/*2*/y)/*3*/)/*4*/)\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
(((x = y)));
```

### Diagnostics

```javascript
✔ No errors
```

