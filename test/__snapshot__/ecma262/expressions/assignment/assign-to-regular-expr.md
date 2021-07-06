# Kataw parser test case

## Input

`````js
x = /a/i;

x = /a/u;

x = /a/y;
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 371,
                    "text": "/a/i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 8
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "right": {
                    "kind": 371,
                    "text": "/a/u",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 19
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 9,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 25
                },
                "right": {
                    "kind": 371,
                    "text": "/a/y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 30
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 20,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 20,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "x = /a/i;\n\nx = /a/u;\n\nx = /a/y;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

x = /a/i;
x = /a/u;

x = /a/y;

```

### Diagnostics

```javascript
✔ No errors
```

