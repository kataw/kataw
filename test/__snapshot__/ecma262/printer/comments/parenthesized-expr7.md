# Kataw parser test case

## Input

`````js
(/*1*/(/*2*/(x)/*3*/)/*4*/)
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
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 7,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 15
                    },
                    "flags": 1,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 21
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "(/*1*/(/*2*/(x)/*3*/)/*4*/)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
(((x)));
```

### Diagnostics

```javascript
✔ No errors
```

