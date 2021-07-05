# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
a= 1n;

a= 0x80n;

a= 0o755n;

a= 0b0101n;
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
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 201392400,
                    "text": "1",
                    "rawText": "1n",
                    "flags": 96,
                    "start": 2,
                    "end": 5
                },
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 6,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 9,
                    "end": 10
                },
                "right": {
                    "kind": 201392400,
                    "text": 128,
                    "rawText": "0x80n",
                    "flags": 96,
                    "start": 10,
                    "end": 16
                },
                "flags": 0,
                "start": 6,
                "end": 16
            },
            "flags": 16,
            "start": 6,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 17,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 20,
                    "end": 21
                },
                "right": {
                    "kind": 201392400,
                    "text": 493,
                    "rawText": "0o755n",
                    "flags": 96,
                    "start": 21,
                    "end": 28
                },
                "flags": 0,
                "start": 17,
                "end": 28
            },
            "flags": 16,
            "start": 17,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 29,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 32,
                    "end": 33
                },
                "right": {
                    "kind": 201392400,
                    "text": 5,
                    "rawText": "0b0101n",
                    "flags": 96,
                    "start": 33,
                    "end": 41
                },
                "flags": 0,
                "start": 29,
                "end": 41
            },
            "flags": 16,
            "start": 29,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "a= 1n;\n\na= 0x80n;\n\na= 0o755n;\n\na= 0b0101n;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

a = 1n;
a = 0x80n;

a = 0o755n;

a = 0b0101n;

```

### Diagnostics

```javascript
✔ No errors
```

