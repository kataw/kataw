# Kataw parser test case

## Input

`````js
(/*1*/a/*2*/,/*3*/b/*4*/,/*5*/c/*6*/)
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
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1,
                            "end": 7
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 13,
                            "end": 19
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 25,
                            "end": 31
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 37
                },
                "flags": 0,
                "start": 32,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "(/*1*/a/*2*/,/*3*/b/*4*/,/*5*/c/*6*/)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

(a, b, c);
```

### Diagnostics

```javascript
✔ No errors
```

