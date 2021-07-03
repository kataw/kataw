# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
a.b<T>(e)
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
                    "kind": 198,
                    "left": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 2,
                            "end": 3
                        },
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "start": 3,
                        "end": 4
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 4,
                        "end": 5
                    },
                    "flags": 96,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 5,
                    "end": 6
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "e",
                        "rawText": "e",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "flags": 6,
                    "start": 32,
                    "end": 9
                },
                "flags": 96,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": true,
    "source": "a.b<T>(e)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

a.b  < T > (e);

```

### Diagnostics

```javascript
✔ No errors
```

