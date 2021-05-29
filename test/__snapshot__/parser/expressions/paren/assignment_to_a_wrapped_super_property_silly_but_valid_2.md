# Kataw parser test case

## Input

`````js
(this.a) += 1;
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 4276321,
                            "flags": 96,
                            "start": 1,
                            "end": 5
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 6,
                            "end": 7
                        },
                        "flags": 536870944,
                        "start": 0,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 64,
                    "start": 8,
                    "end": 11
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "(this.a) += 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

(this.a) += 1;
```

### Diagnostics

```javascript
✔ No errors
```

