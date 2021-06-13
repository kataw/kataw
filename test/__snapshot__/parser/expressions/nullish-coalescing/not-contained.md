# Kataw parser test case

## Input

`````js
a || b ?? c;

a ?? b || c;

a && b ?? c;

a ?? b && c;
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
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 1,
                        "end": 4
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 4,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "start": 6,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 9,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 12,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "start": 15,
                    "end": 18
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 20,
                        "end": 23
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 23,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 25
                },
                "flags": 32,
                "start": 12,
                "end": 25
            },
            "flags": 16,
            "start": 12,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 26,
                        "end": 29
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 29,
                        "end": 32
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 32,
                        "end": 34
                    },
                    "flags": 32,
                    "start": 26,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "start": 34,
                    "end": 37
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 37,
                    "end": 39
                },
                "flags": 32,
                "start": 26,
                "end": 39
            },
            "flags": 16,
            "start": 26,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 40,
                    "end": 43
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "start": 43,
                    "end": 46
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 46,
                        "end": 48
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 48,
                        "end": 51
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 51,
                        "end": 53
                    },
                    "flags": 32,
                    "start": 48,
                    "end": 53
                },
                "flags": 32,
                "start": 40,
                "end": 53
            },
            "flags": 16,
            "start": 40,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "a || b ?? c;\n\na ?? b || c;\n\na && b ?? c;\n\na ?? b && c;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '&&' and '??' operations cannot be mixed without parentheses - start: 6, end: 9
✖ '&&' and '??' operations cannot be mixed without parentheses - start: 20, end: 23
✖ '&&' and '??' operations cannot be mixed without parentheses - start: 34, end: 37
✖ '&&' and '??' operations cannot be mixed without parentheses - start: 48, end: 51

```

