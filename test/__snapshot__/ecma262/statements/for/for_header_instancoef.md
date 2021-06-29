# Kataw parser test case

## Input

`````js
for ((2935) instanceof ((2e308));;) debugger
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 201392130,
                        "text": 2935,
                        "rawText": "2935",
                        "flags": 96,
                        "start": 6,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4229173,
                    "flags": 96,
                    "start": 11,
                    "end": 22
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 201392130,
                            "text": null,
                            "rawText": "2e308",
                            "flags": 96,
                            "start": 25,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 24,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 32
                },
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 171,
                "debuggerKeyword": {
                    "kind": 37757010,
                    "flags": 80,
                    "start": 35,
                    "end": 44
                },
                "flags": 16,
                "start": 35,
                "end": 44
            },
            "flags": 80,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "for ((2935) instanceof ((2e308));;) debugger",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

for ((2935) instanceof (2e308); ; )
  debugger;
```

### Diagnostics

```javascript
✔ No errors
```

