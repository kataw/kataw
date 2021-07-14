# Kataw parser test case

## Input

`````js
!a;
+b;

typeof x;
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
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operand": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 2
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 99634,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "operand": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 6
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 15
                },
                "operand": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 7,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "!a;\n+b;\n\ntypeof x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
!a;
+b;

typeof x;

```

### Diagnostics

```javascript
✔ No errors
```

