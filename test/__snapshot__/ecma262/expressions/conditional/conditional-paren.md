# Kataw parser test case

## Input

`````js
a ? (1 + 2) : (3 + 4)
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 6
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 10
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 5,
                        "end": 10
                    },
                    "flags": 3,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 11
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 13
                },
                "alternate": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 16
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 4,
                            "rawText": "4",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 15,
                        "end": 20
                    },
                    "flags": 13,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 21
                },
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "a ? (1 + 2) : (3 + 4)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

a ? (1 + 2) : (3 + 4);
```

### Diagnostics

```javascript
✔ No errors
```

