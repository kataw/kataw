# Kataw parser test case

## Input

`````js
+ x.def + + y.x
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
                    "kind": 126,
                    "operandToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "operand": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 3
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "def",
                            "rawText": "def",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 7
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 1,
                        "end": 7
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "operand": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 11,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 9,
                    "end": 15
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "+ x.def + + y.x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

+x.def + +y.x;
```

### Diagnostics

```javascript
✔ No errors
```

